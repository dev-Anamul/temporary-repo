
ARG NODE_VERSION=18.16.1

# Use the official lightweight Node.js 18 image.
FROM node:${NODE_VERSION}-alpine

#  Create the directory where the application will reside.
WORKDIR /usr/src/app

# into this layer.
RUN yarn install --frozen-lockfile --cache-folder /root/.yarn/cache

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 5699

# Run the application.
CMD yarn start:dev
