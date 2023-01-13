
## Example Commands to run locally

The following commands can be used for development purposes

### Create a single data holders with a number of customers, personal and business customers

First navigate to the dist directory, then run

`node cli.js generate ../samples/options/create-customers.json ../samples/output/my-created-customer.json`

This will read the `create-customers.json` options file and outpu to `my-created-customers.json`.
It will create just customer information (eg CommonPersonDetail)


### Create a single data holders with a single business customer with 10 service points

First navigate to the dist directory, then run

`node cli.js generate ../samples/options/create-service-point-data.json ../samples/output/my-created-service-point-data.json`

This will read the `create-service-point-data.json` options file and outpu to `my-created-service-point-data.json`.
It will create a customer with service point information

### Create a single data holders with a some business and personal customer with energy account information

First navigate to the dist directory, then run

`node cli.js generate ../samples/options/create-energy-accounts.json ../samples/output/my-created-energy-accounts.json`

This will read the `create-energy-accounts.json` options file and outpu to `my-created-energy-accounts.json`.
It will create an organisational customer with 5 accounts, and a personal customer with 2 accounts