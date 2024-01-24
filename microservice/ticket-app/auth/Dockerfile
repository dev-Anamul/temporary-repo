# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code
# todo: uncomment this line when you're ready to build the app
# RUN yarn build

# Expose the port that the application will run on
EXPOSE 7050

# Start the application
CMD ["yarn", "dev"]
