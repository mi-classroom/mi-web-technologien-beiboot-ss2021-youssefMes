start:
	@echo "${BLUE}Starting containers.${NC}"
	@docker-compose up -d --build
stop:
	@echo "${YELLOW}Stopping containers.${NC}"
	@docker-compose stop
restart:
	@echo "${GREEN}Restarting containers.${NC}"
	@make stop && make start
logs:
	@docker-compose -f docker-compose.yaml logs -f
clean:
	@echo "${PURPLE}Clean the infrastructure (remove containers, volumes, networks)${NC}"
	@docker-compose down --remove-orphans --volumes
help:
	@echo "${ORANGE}Usage:${NC} ${GREEN}make ${NC}[TARGET]${NC}"
	@echo "${LIGHT_PURPLE}Docker Targets${NC}"
	@echo "  start            ${CYAN} Create and start containers.${NC}"
	@echo "  stop             ${CYAN} Stop and remove containers.${NC}"
	@echo "  restart          ${CYAN} Restart containers.${NC}"
	@echo "  logs             ${CYAN} Follow containers output logs.${NC}"
	@echo "  clean            ${CYAN} Clean the infrastructure.${NC}"


RED=\033[0;31m
LIGHT_RED=\033[1;31m
GREEN=\033[0;32m
LIGHT_GREEN=\033[1;32m
ORANGE=\033[0;33m
YELLOW=\033[1;33m
BLUE=\033[0;34m
LIGHT_BLUE=\033[1;34m
PURPLE=\033[0;35m
LIGHT_PURPLE=\033[1;35m
CYAN=\033[0;36m
LIGHT_CYAN=\033[1;36m
NC=\033[0m

