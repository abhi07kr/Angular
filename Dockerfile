#Base image
FROM node:16.15.0

#Set the working directory
WORKDIR /app


#Install Angular CLI
RUN npm install -g @angular/cli@15.2.5

#Copy package.json and package-lock.json
COPY package*.json .

#Install the dependencies
RUN npm install

#Copy everything else
COPY . .

#Expose port to listen to traffic
EXPOSE 4200

#Run the application
CMD ["ng", "serve", "--host","0.0.0.0"]