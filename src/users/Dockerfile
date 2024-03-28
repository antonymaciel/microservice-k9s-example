FROM node:20-alpine as base

FROM base as dependencies
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

FROM base as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN npm run build
RUN npm prune --production

FROM base as release
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
ENV PORT=4000
EXPOSE ${PORT}
CMD ["npm", "run", "start:prod"]



