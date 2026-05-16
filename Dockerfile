# FROM php:8.2-cli

# WORKDIR /app

# COPY . /app

# EXPOSE 3000

# CMD ["php", "-S", "0.0.0.0:3000"]


FROM php:8.2-cli
CMD ["php", "-S", "0.0.0.0:3000"]