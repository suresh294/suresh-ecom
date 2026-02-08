# Use Node.js for building
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose Vite port
EXPOSE 5173

# Start Vite dev server (for this assessment we'll run dev server in docker)
CMD ["npm", "run", "dev", "--", "--host"]
