# Monorepo Project

This repository is a **monorepo** containing two applications:

- **Backend**: A **NestJS** application.
- **Frontend**: A **Next.js** application.

Both applications have been **dockerized** for easy deployment and local development.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Applications

To start both the **NestJS** and **Next.js** applications, simply run the following command:

```sh
docker compose up -d
```

This command will build and start both applications in detached mode.

### Stopping the Applications

To stop the running containers, use:

```sh
docker compose down
```

## Project Structure

```
/notes-app
│── client/      # Next.js application
│── server/     # NestJS application
│── docker-compose.yml  # Docker configuration
│── README.md     # Project documentation
```

## Contributing

Feel free to open issues or submit pull requests for improvements.
