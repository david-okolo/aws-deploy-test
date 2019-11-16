FROM node:10.16.1

WORKDIR /home/projects/aws-deploy-test

COPY . .

RUN ["npm", "install"]

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

