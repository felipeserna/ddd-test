FROM node:18.14.2-alpine3.17
#carbon
 
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./frontend/angular_ddd/package*.json ./
 
# Install any needed packages
RUN npm i
 
# Bundle app source
COPY ./frontend/angular_ddd/ .
RUN ls
RUN ls /usr/src/app

EXPOSE 4200
 
CMD [ "npm", "start" ]