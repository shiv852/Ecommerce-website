# Docker Setup for E-commerce Clothing Application

This document provides instructions on how to build and run the e-commerce clothing application using Docker.

## Prerequisites

- Docker installed on your machine
- Docker Compose (optional, for more advanced setups)

## Building the Docker Image

To build the Docker image, run the following command from the root directory of the project:

```bash
docker build -t ecommerce-clothing .
```

## Running the Docker Container

To run the application in a Docker container, use the following command:

```bash
docker run -p 8080:80 ecommerce-clothing
```

This will start the application and make it available at http://localhost:8080.

## Development with Docker

For development purposes, you can mount your local source code into the container:

```bash
docker run -p 8080:80 -v $(pwd)/src:/app/src ecommerce-clothing
```

## Environment Variables

If your application uses environment variables, you can pass them to the container using the `-e` flag:

```bash
docker run -p 8080:80 -e API_URL=https://api.example.com ecommerce-clothing
```

## Docker Compose (Advanced)

For a more complex setup with multiple services, you can use Docker Compose. Create a `docker-compose.yml` file in the root directory of your project and define your services there.

## Troubleshooting

If you encounter any issues with the Docker setup, try the following:

1. Make sure Docker is running on your machine
2. Check the Docker logs: `docker logs <container_id>`
3. Rebuild the Docker image: `docker build --no-cache -t ecommerce-clothing .` 