# Latest golang image on apline linux
FROM golang:1.21.1-alpine as builder

RUN apk update && apk upgrade && \
    apk --update add git make bash build-base

# Env variables
ENV GOOS linux
ENV CGO_ENABLED 0

# Work directory
WORKDIR /app

# Installing dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copying all the files
COPY . .

# Building the application
RUN make build

# Fetching the latest nginx image
FROM alpine:latest as production

# Certificates
RUN apk add --no-cache ca-certificates

# Copying built assets from builder
COPY --from=builder app .

# Starting our application
CMD ./dist/app

# Exposing server port
EXPOSE 9100