# Stage 1: Build React app
FROM node:18-alpine AS builder
WORKDIR /app
COPY frontend ./
RUN npm install
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
