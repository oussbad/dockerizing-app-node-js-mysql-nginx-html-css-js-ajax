FROM nginx:latest

# Copy the content of the "frontend" directory to the default Nginx public folder
COPY ./ /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 80

# Command to start Nginx (this will be done automatically by the Nginx base image)
CMD ["nginx", "-g", "daemon off;"]