import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreateCustomerDto } from '../stripe-fixed-price/dto/create-customer.dto';
import { MUCancelSubscriptionDto } from './dto/cancel-subscription.dto';
import { MUCreateSubscriptionDto } from './dto/create-subscription.dto';
import { MURetrieveCustomerPM } from './dto/retrieveCustomerPM.dto';
import { MURetryInvoice } from './dto/retry-invoice.dto';
import { MURetryUpcomingInvoice } from './dto/retry-upcoming-invoice.dto';
import { MUUpdateSubscriptionDto } from './dto/update-subscription.dto';

// REF: https://github.com/stripe-samples/subscription-use-cases/blob/master/usage-based-subscriptions/server/node/server.js

@Controller('stripe-metered-usage')
export class StripeMeteredUsageController {
  constructor(
    private readonly configSvc: ConfigService,
    @InjectStripeClient() private stripeClient: Stripe,
  ) {}

  // TODO: Implement with Config
  @Get('setup')
  getSetup() {
    return {
      publishableKey: this.configSvc.get<string>('stripe.publishablekey}'),
    };
  }

  @Post('create-customer')
  async createCustomer(@Body() { email }: CreateCustomerDto) {
    try {
      // Create a new customer object
      const customer = await this.stripeClient.customers.create({
        email,
      });

      // Save the customer.id in your database alongside your user.
      // We're simulating authentication with a cookie.
      // res.cookie('customer', customer.id, { maxAge: 900000, httpOnly: true });

      return {
        customer,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // TODO: implement retriving of customerID from DB or Auth
  @Post('create-subscription')
  async createSubscription(
    @Body() { paymentMethodId, customerId, priceId }: MUCreateSubscriptionDto,
  ) {
    // Set the default payment method on the customer
    try {
      await this.stripeClient.paymentMethods.attach(paymentMethodId, {
        customer: customerId,
      });
    } catch (error) {
      throw error;
    }

    let updateCustomerDefaultPaymentMethod =
      await this.stripeClient.customers.update(customerId, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });

    // Create the subscription
    const subscription = await this.stripeClient.subscriptions.create({
      customer: customerId,
      // TODO: this dynamic 'getter' of configSvc is a security issue
      // The plans should not come from the env, get them from the database for example
      items: [
        { price: this.configSvc.get<string>(`stripeMeteredUsage.${priceId}`) },
      ],
      expand: ['latest_invoice.payment_intent', 'pending_setup_intent'],
    });

    return subscription;
  }

  @Post('retry-invoice')
  async retrySubscription(
    @Body() { customerId, paymentMethodId, invoiceId }: MURetryInvoice,
  ) {
    // Set the default payment method on the customer

    try {
      await this.stripeClient.paymentMethods.attach(paymentMethodId, {
        customer: customerId,
      });
      await this.stripeClient.customers.update(customerId, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });
    } catch (error) {
      // in case card_decline error
      throw error; // .status('402')
    }

    const invoice = await this.stripeClient.invoices.retrieve(invoiceId, {
      expand: ['payment_intent'],
    });
    return invoice;
  }

  @Post('retrieve-upcoming-invoice')
  async retrieveIncomingInvoice(
    @Body() { subscriptionId, customerId, newPriceId }: MURetryUpcomingInvoice,
  ) {
    const subscription = await this.stripeClient.subscriptions.retrieve(
      subscriptionId,
    );

    const invoice = await this.stripeClient.invoices.retrieveUpcoming({
      // INFO: No longer exist.
      // was renamed to 'subscription_proration_behavior' with an enum type
      // subscription_prorate: true,
      subscription_proration_behavior: 'always_invoice',
      customer: customerId,
      subscription: subscriptionId,
      subscription_items: [
        {
          id: subscription.items.data[0].id,
          clear_usage: true,
          deleted: true,
        },
        {
          price: this.configSvc.get<string>(`stripeMeteredUsage.${newPriceId}`),
          deleted: false,
        },
      ],
    });
    return invoice;
  }

  @Post('cancel-subscription')
  async cancelSubscription(
    @Body() { subscriptionId }: MUCancelSubscriptionDto,
  ) {
    // Cancel the subscription
    try {
      const deletedSubscription = await this.stripeClient.subscriptions.del(
        subscriptionId,
      );

      return { subscription: deletedSubscription };
    } catch (error) {
      throw error;
    }
  }

  // TODO: Implement with Config
  @Post('update-subscription')
  async updateSubscription(
    @Body() { subscriptionId, newPriceId }: MUUpdateSubscriptionDto,
  ) {
    try {
      const subscription = await this.stripeClient.subscriptions.retrieve(
        subscriptionId,
      );
      const updatedSubscription = await this.stripeClient.subscriptions.update(
        subscriptionId,
        {
          cancel_at_period_end: false,
          items: [
            {
              id: subscription.items.data[0].id,
              price: this.configSvc.get<string>(
                `stripeMeteredUsage.${newPriceId}`,
              ),
            },
          ],
        },
      );

      return updatedSubscription;
    } catch (error) {
      throw error;
    }
  }

  @Post('retrieve-customer-payment-method')
  async retrieveCustomerPaymentMethod(
    @Body() { paymentMethodId }: MURetrieveCustomerPM,
  ) {
    const paymentMethod = await this.stripeClient.paymentMethods.retrieve(
      paymentMethodId,
    );

    return paymentMethod;
  }
}
