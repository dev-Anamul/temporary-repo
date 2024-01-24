/* eslint-disable no-undef */
require('dotenv').config();
const mongoose = require('mongoose');
const { calculateTax } = require('../../../lib/tax');

beforeAll(async () => {
    await mongoose.connect('mongodb://admin:password@localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: process.env.MONGO_DB_NAME,
        authSource: 'admin',
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('Tax Calculator', () => {
    it('should calculate tax for income less than or equal to 14000', async () => {
        const tax = await calculateTax(14000);
        expect(tax).toBe(1470);
    });

    it('should calculate tax for income less than or equal to 48000', async () => {
        const tax = await calculateTax(48000);
        expect(tax).toBe(7420);
    });

    it('should calculate tax for income less than or equal to 70000', async () => {
        const tax = await calculateTax(70000);
        expect(tax).toBe(14020);
    });

    it('should calculate tax for income less than or equal to 180000', async () => {
        const tax = await calculateTax(180000);
        expect(tax).toBe(50320);
    });

    it('should calculate tax for income greater than 180000', async () => {
        const tax = await calculateTax(200000);
        expect(tax).toBe(58120);
    });

    it('should calculate tax of 77991853 for income 200030086', async () => {
        const tax = await calculateTax(200_030_086);
        expect(tax).toBe(77_991_853);
    });

    it('should return 0 for income less than or equal to 0', async () => {
        const tax = await calculateTax(0);
        expect(tax).toBe(0);
    });

    it('should return 0 for income less than or equal to 0', async () => {
        const tax = await calculateTax(-1000);
        expect(tax).toBe(0);
    });
});
