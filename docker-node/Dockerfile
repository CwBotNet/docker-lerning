FROM ubuntu

RUN apt-get update
RUN apt install curl -y
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

COPY package.json package.json
COPY package-lock.json package-lock.json  
COPY main.js main.js

RUN npm install

# exectution cmd
ENTRYPOINT ["node", "main.js"] 
