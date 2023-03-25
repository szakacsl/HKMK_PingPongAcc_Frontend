# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package.json .
COPY yarn.lock .

# Install dependencies
RUN yarn install

# Copy the rest of the application code to /app
COPY . .

# Build the application
RUN yarn run build

# Expose port 3000 for the application to run on
EXPOSE 3000

# Run the application
CMD ["npm", "start"]