.PHONY: stop clean dev

stop:
	docker stop $(shell docker ps -a -q)

clean:
	docker system prune -af --volumes

dev:
  cd ./environments/dev ; \
  docker compose --env-file .env up --build -d ; \
  cd ..

