# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install application dependencies using Yarn
RUN yarn install --production

# Copy the rest of the application code to the container
COPY . .

# Expose the port your Node.js application listens on (replace with your actual port)
EXPOSE 3000

# Define the command to run your Node.js application
CMD [ "yarn", "start" ]  
