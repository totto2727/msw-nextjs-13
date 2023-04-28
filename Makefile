setup:
	which prism || volta install @stoplight/prism-cli
	npx openapi-rq -i ./openapi/petstore.yaml -c fetch

prestart:
	prism mock ./openapi/petstore.yaml
	
start:
	npm run start
