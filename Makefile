TS=node_modules/typescript/bin/tsc 

init:
	npm install typescript

compile:
	@date
	cat src/css/*.css > docs/app.css
	$(TS) --build tsconfig.json