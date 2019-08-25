FROM node:8
WORKDIR /app
COPY . ./
RUN yarn install
RUN npm run build
WORKDIR /app/deployment/server
EXPOSE 8080
ENTRYPOINT [ "npm", "run", "start" ] 