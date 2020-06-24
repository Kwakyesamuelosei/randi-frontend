# Create image based on the official Node 12 image from dockerhub
FROM node:12-alpine as build-step

# Set a new workinf directory
WORKDIR /app

# Copy dependency definitions
COPY package.json ./

# Install dependecies
RUN npm install

# Get all the source code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD npm run start