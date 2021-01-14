# Birthday Pie for Pandemic Times!

## Feel free to grab one

1. Configure AWS / serverless
1. Prepare lambda layer

```
$ mkdir -p layer/nodejs
$ cd layer/nodejs
$ mkdir node_modules
$ npm install --save lodash
```
1. Deploy to AWS
```
sls deploy
```