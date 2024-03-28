FROM node:20-alpine AS base

FROM base AS nodemodules
WORKDIR /emails-app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY ./node_modules ./node_modules

FROM nodemodules AS builder
WORKDIR /emails-app
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY index.ts . 
RUN npm run build
COPY ./dist ./dist

FROM builder AS application
WORKDIR /emails-app
ENV PORT=6000
EXPOSE ${PORT}
EXPOSE 8000
CMD npm start