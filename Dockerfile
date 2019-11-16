FROM node:10.16.1

WORKDIR /home/projects/emitter

COPY . .

RUN ["npm", "install"]
RUN ["npm", "build"]

EXPOSE 3000

ENTRYPOINT ["npm", "start"]
