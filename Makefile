.PHONY: all install build start test clean docker-build docker-run

all: install build test

install:
	npm install

build:
	node build.js

start:
	node server.js

test:
	node --test tests/*.test.js

docker-build:
	docker build -t chronicles-of-aethelgard .

docker-run:
	docker run -p 3000:3000 chronicles-of-aethelgard

clean:
	rm -rf node_modules coverage
