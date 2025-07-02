# Stage 1: Build the frontend app
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app (output goes to /app/dist)
RUN npm run build

# Stage 2: Serve the static files using "serve"
FROM node:20-alpine

# Install serve globally
RUN npm install -g serve

# Copy the built files from builder stage
COPY --from=builder /app/dist /app/dist

# Set working directory
WORKDIR /app

# Expose the port
EXPOSE 3000

# Start the server
CMD ["serve", "-s", "dist", "-l", "3000"]
