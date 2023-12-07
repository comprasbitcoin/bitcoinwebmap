# Use Node.js version 18.18.0 as the base image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port your Next.js app will run on
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "start"]
