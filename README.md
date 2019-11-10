# Table of Contents

[Introduction](#introduction)
[Pre Requisites for the service](#pre-requisites)
[Using the service for Development](#using-the-service-for-development)
[Using the service with Docker](#using-the-service-with-docker)
[Exposed API's](#exposed-apis)

# Introduction

A NodeJS API that creates and maintains sensor-to-participant allocations for each workout.

## Pre Requisites

1. Install dependencies
   npm install
2. Install the following plugins in Visual Studio Code for development. a. ESLint b. Prettier - code formatter
3. Update .env file to configure the application to work as expected with a project in Gitlab.

| Environment Variable | Description              |
| :------------------- | :----------------------- |
| IP                   | IP of application.       |
| PORT                 | Port of the application. |
| POSTGRES_USER        | Postgress username       |
| POSTGRES_PASSWORD    | Postgres password        |
| POSTGRES_HOST        | Postgres host            |
| POSTGRES_DB          | Postgres database name   |
| POSTGRES_PORT        | Postgres port            |
| POSTGRES_DIALECT     | Dialect of DB            |

## Using the service for Development

1. Update the environment variable information in the file config/app.config.js file with relevant info as well as .env file.

2. Run migrations and seed data

   sequelize db:migrate

   sequelize db:seed:all

3. Start the node app

   npm start

4. To check lint issues, use

   npm run lint

## Using the service with Docker

1. Update .env files with required details(Refer Pre Requisites)

2. Build the image using
   "docker build --build-arg PORT=8080 -t fitness_sensor ." (Use sudo, if required)

3) Start the container using

   "docker run -p 8080:8080 fitness_sensor" (Use sudo, if required). This will start the server.

4) Start the frontend app. (Refer : https://github.com/Amith-Ramachandran/workoutwebui)

## Exposed APIs

1. API to get all current allocations

GET http://localhost:8080/allocations/:workout_id

Header userid 2

    Response

    {
        "allocations": [
            {
                "user_id": 5,
                "sensor_is_user_property": true,
                "sensor_id": 5
            },
            {
                "user_id": 2,
                "sensor_is_user_property": false,
                "sensor_id": 2
            },
            {
                "user_id": 6,
                "sensor_is_user_property": false,
                "sensor_id": 7
            }
        ]
    }

2. API to get all current allocations

GET http://localhost:8080/availabe_sensors

Header userid 2

    Response

    {
        "sensors": [
            {
                "id": 1,
                "name": "s1",
                "is_allocatable": true,
                "is_damaged": false,
                "is_private": false
            },
            {
                "id": 2,
                "name": "s2",
                "is_allocatable": true,
                "is_damaged": false,
                "is_private": false
            },
            {
                "id": 4,
                "name": "s4",
                "is_allocatable": true,
                "is_damaged": false,
                "is_private": false
            }
        ]
    }

3. Grab/Return the sensor with/without damage

PUT http://localhost:8080/sensors/:sensor_id

Header userid 3

    {
        "is_allocatable": false,
        "is_damaged" : true
    }
