build:
	@npm run build

build-docker: build
	@docker build -t users .

start:
	@docker compose up --attach users

build-compose:
	@docker compose build
