# IMAGE_NAME ?= $(shell bash -c 'read -p "Image name: " image_name; echo $$image_name')
# TAG ?= $(shell bash -c 'read -p "Tag: " tag; echo $$tag')
OTHER_CONTAINER_NAMES ?= $(shell bash -c 'read -p "Other container names: " container_names; echo $$container_names')
# TAG ?= $(shell bash -c 'read -s -p "Tag: " pwd; echo $$pwd')
include .env

build-client:
        npm run build

deploy: docker-build
        sudo docker compose up -d

docker-build:
        sudo docker build --network=host -t ${IMAGE_NAME}:${TAG} .

docker-stop:
        sudo docker compose stop

docker-clean: docker-stop
        sudo docker rm ${CONTAINER_NAME} ${OTHER_CONTAINER_NAMES}
        sudo docker rmi ${IMAGE_NAME}:${TAG}