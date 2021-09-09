FROM node:14
COPY ./ ./
ENTRYPOINT ["npm","start"]
