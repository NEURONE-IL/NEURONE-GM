# This defines our starting point
FROM node:14-alpine AS build

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source and build
COPY . .
RUN npm run build --prod

# Production stage
FROM node:14-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/dist ./dist

EXPOSE 4200

# Serve the app
CMD ["serve", "-s", "dist", "-l", "4200"]