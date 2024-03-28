build: ## Builds binary
	@ printf "Building aplication... "
	@ go build \
		-o dist/app \
		./src/app
	@ echo "done"

local-start:
	PORT=9200 go run ./src/app/main.go

build-docker: build
	@docker build -t carts .

build-compose:
	@docker compose compose
