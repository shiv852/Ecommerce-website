@echo off
echo Building the React application...
call npm run build

echo Building the Docker image...
docker build -t ecommerce-clothing -f Dockerfile.simple .

echo Done!
echo To run the container: docker run -p 8080:80 ecommerce-clothing 