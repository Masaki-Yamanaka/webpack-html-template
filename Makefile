.PHONY: init
## init: docker-compose up 
init:
	docker-compose up -d --build
	@make setup

.PHONY: setup
## setup: yarn install
setup:
	docker-compose exec app yarn install
	@echo "next step. >>> `make run`"

.PHONY: run
## start: build & run
run:
	docker-compose exec app yarn run start
	@echo "Building..."
	@echo "http://localhost:8081/"

.PHONY: stop
## build: stop the application
stop:
	docker-compose down