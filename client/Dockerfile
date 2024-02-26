FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm run build
COPY . .
RUN chown -R node /usr/src/app
USER node
