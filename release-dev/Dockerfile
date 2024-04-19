# Build Stage
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and yarn.lock to the container
# Copy the necessary files from the parent directory
COPY ../index.html ./ \
     ../src ./src \
     ../public/ ./public \
     ../.eslintrc.cjs ./ \
     ../package.json ./ \
     ../tailwind.config.js ./ \
     ../vite.config.js ./

 

# Install dependencies
RUN yarn install


# Build the application (assuming your build script is yarn run dev)
RUN yarn dev build 

# Deploy Stage
FROM nginx:alpine AS stage

# Remove the default Nginx configuration
RUN rm -rf /etc/nginx/conf.d/*

# Set the working directory inside the container to /usr/share/nginx/html
WORKDIR /usr/share/nginx/html

# Remove default 50x.html page
RUN rm /usr/share/nginx/html/50x.html

# Copy the built application from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration
COPY ./release-dev/nginx.conf /etc/nginx/conf.d/default.conf


# Expose port 80, which is the default port for Nginx
EXPOSE 81

# Start Nginx with the custom configuration when the container is run
CMD ["nginx", "-g", "daemon off;"]
