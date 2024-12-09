FROM node:18-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build app
RUN npm run build

# Expose port
EXPOSE 8080

# Start app
ENV PORT=8080
CMD ["node", ".next/standalone/server.js"]
