# Use the official Node.js base image
FROM node:alpine

# Set the working directory inside the container
# WORKDIR .

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the application code to the container
COPY . .

# Build the Nest.js application
RUN npm run build

# Expose the port on which the application will run
EXPOSE 3002

# Start the application
CMD ["npm", "run", "start"]
