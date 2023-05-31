# Use an official Node runtime as a parent image
FROM node:19-alpine

# Give a name to the environment var // build with specified args
ARG portno

# Set the working directory to /app
WORKDIR /home/server

# Copy server files
COPY ./server /home/server

# Copy build files
COPY ./client/build /home/client/build

RUN npm install 

EXPOSE $portno

ENTRYPOINT ["npm", "run", "deploy"]