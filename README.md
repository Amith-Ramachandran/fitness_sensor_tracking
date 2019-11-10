# Table of Contents

[Introduction](#introduction)
[Pre Requisites for the service](#pre-requisites)
[Using the service for Development](#using-the-service-for-development)
[Using the service with Docker](#using-the-service-with-docker)

# Introduction

A Node.js web service that interacts as a webhook for Gitlab. This service will trigger an issue event(creation). It will search in the description of the created issue for the word “ping”. If it finds the word ping, it will

1. It will search through all the issues under the project to check whether the word "ping" present or not.2. Count the total number of occurrence of the word "ping",3. Add a comment on the newly created issue in Gitlab with "pong" + #pings.

## Pre Requisites

1. Install dependencies
   npm install
2. Install the following plugins in Visual Studio Code for development. a. ESLint b. Prettier - code formatter
3. Update .env file to configure the application to work as expected with a project in Gitlab.

   | Environment Variable | Description                                                |
   | :------------------- | :--------------------------------------------------------- |
   | GITLAB_BASE_URL      | Base URL to fetch issues/Post comments in Gitlab.          |
   | SECRET_KEY           | Create one secret key to access Gitlab API's (Refer below) |
   | GITLAB_PROJECT_ID    | ID of the project from Gitlab. (Refer below)               |
   | SEARCH_WORD          | Word to be search in issue description (default: ping)     |

   To create Gitlab access token(SECRET_KEY) (https://gitlab.com/profile/personal_access_tokens).

   To Get Gitlab project ID with projet (Project --> Settings --> Genaeral --> [Copy project ID from the screen])

## Using the service for Development

1. Update the environment variable information in the file config/app.config.js file with relevant info as well as .env file.
2. Start the node app
   npm start
3. To check lint issues, use
   npm run lint

## Using the service with Docker

1. Update .env files with required details(Refer Pre Requisites)
2. Build the image using
   "docker build --build-arg PORT=8080 -t gitlab_node_webhook ." (Use sudo, if required)

   Warning: Since preinstall scripts(only needed for dev) are not copied inside the docker while building, it will show a warning during npm install step of docker build, which can be ignored.

   "npm WARN lifecycle gitlab-issue-node-webhook@1.0.0~preinstall: cannot run in wd gitlab-issue-node-webhook@1.0.0 rm -fv .git/hooks/pre-commit.sample;chmod +x custom_hooks/\*;rm -fv .git/hooks/pre-commit;ln -s ../../custom_hooks/pre-commit .git/hooks/pre-commit (wd=/usr/src/app)"

3) Start the container using

   "docker run -p 8080:8080 gitlab_node_webhook" (Use sudo, if required). This will start the server.

4) Create an issue in the project where we added webhook and comment will be added immediately if description includes desired SEARCH_WORD.
