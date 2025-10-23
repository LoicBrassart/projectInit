.PHONY: stop clean run

stop:
	docker stop $(shell docker ps -a -q)

clean:
	docker system prune -af --volumes; \

run:
	ENV=$(word 2,$(MAKECMDGOALS)); \
	if [ -d "./environments/$$ENV" ]; then \
		cd ./environments/$$ENV ; \
		docker compose --env-file .env up --build -d ; \
		cd .. ; \
	else \
		echo "Unknown environment: $$ENV"; \
	fi