# Use the official Nginx base image
FROM nginx:latest

# Set the working directory
WORKDIR /var/www/html

# Copy Nginx configuration
COPY site.conf /etc/nginx/conf.d/default.conf

# Install PHP and required extensions
RUN apt-get update \
    && apt-get install -y php-fpm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Set up PHP-FPM configuration
COPY php-fpm.conf /etc/php/7.4/fpm/php-fpm.conf

# Copy PHP files to the working directory
COPY html /var/www/html

# Expose port 80 for Nginx
EXPOSE 80

# Start PHP-FPM and Nginx
CMD service php7.4-fpm start && nginx -g 'daemon off;'
