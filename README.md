
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is a basic CRUD (Create, Read, Update, Delete) API developed using NestJS with Kafka for asynchronous messaging and PostgreSQL for data storage. It demonstrates how to implement REST endpoints, integrate Kafka producers/consumers, and handle message-based communication.

## Features

RESTful API with CRUD operations

Kafka integration for message brokering

PostgreSQL as the database with TypeORM

Proper error handling and validation
## Technologies Used

NestJS: Framework for building scalable server-side applications

Kafka: Message broker for event-driven communication

TypeORM: ORM for database interaction

PostgreSQL: Database for persistent storage
## Installation Instructions

Prerequisites

Node.js (v16+)

Kafka and Zookeeper installed and running

PostgreSQL database
## Installing Kafka and Zookeeper (Windows)

1. Download Kafka:
Download Kafka from the official Apache Kafka website. Extract the downloaded files.


2. Set up Kafka and Zookeeper:
Kafka requires Zookeeper to manage the brokers.

Navigate to the Kafka installation directory.

Open a terminal and start Zookeeper:

.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties

In a new terminal, start Kafka:

.\bin\windows\kafka-server-start.bat .\config\server.properties



3. Create a Topic (optional for custom topics):

.\bin\windows\kafka-topics.bat --create --topic products-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1


4. Check Topic:

.\bin\windows\kafka-topics.bat --list --bootstrap-server localhost:9092

---
## Installing PostgreSQL

1. Download PostgreSQL:
Download the installer from the official PostgreSQL website.


2. Install PostgreSQL:

Run the installer and follow the setup wizard.

Remember the username, password, and port you configure.



3. Create a Database:

Open pgAdmin or use the psql command-line tool.

Create a database:

CREATE DATABASE postgres;
## Project setup
Steps

1. Clone the repository:

git clone https://github.com/prathyusha2898/nest_kafka_crud/tree/nest_crud
cd nestjs-kafka-crud


2. Install dependencies:

npm install

3. Run database migrations:

npm run typeorm:migration:run


4. Start Zookeeper and Kafka:

# Zookeeper
.\bin\windows\zookeeper-server-start.bat .\config\zookeeper.properties

# Kafka
.\bin\windows\kafka-server-start.bat .\config\server.properties


5. Start the application:

npm run start:dev




---

Usage

Use tools like Postman or curl to test API endpoints.



---

Kafka Integration

When a product is created, updated, or deleted, a Kafka message is sent to a configured topic. Ensure Kafka consumers are running to receive these messages.


---

Error Handling

404 Not Found for non-existent entities

Proper validation for request payloads

---

Contributors

Prathyusha (rprathyusha28@gmail.com)
