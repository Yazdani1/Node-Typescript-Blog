# Instruction to install typescript in node js project

# To create node js project package.json file

npm init

# To install express server

npm i express

# Need to install types in the dev devDependencies

npm i --save-dev typescript @types/express @types/node

# This command generate tsconfig file this is requred to compile typescript code to javascript

npx tsc --init

# To run the project

npx tsc //It compile typescript code to javascript

node build/app.js // This is the javascript directoru to run the project

# Watch mode - This command watch any changes in the file and compile -

# need to run it first then changes will work Using script and nodemon

tsc --watch

# To run project with nodemon - this command is added in the package.json file in the script

nodemon dev
or
nodemon start
