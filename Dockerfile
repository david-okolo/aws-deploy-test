FROM node:10.16.1

WORKDIR /home/projects/emitter/sourcecode

COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

