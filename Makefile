.PHONY: init
init:
	docker-compose up -d --build
	@make setup

.PHONY: setup
setup:
	docker-compose exec app yarn install

.PHONY: run
run:
	docker-compose exec app yarn run start
	@echo "Building..."
	@echo "http://localhost:8081/"

.PHONY: up
up:
	docker-compose up -d

.PHONY: stop
stop:
	docker-compose stop

.PHONY: down
down:
	docker-compose down