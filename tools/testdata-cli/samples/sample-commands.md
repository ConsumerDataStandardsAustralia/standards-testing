
## Example Commands to run locally

The following commands can be used for development purposes

### Create a single data holders with a number of customers, personal and business customers 

First navigate to the dist directory, then run

`node cli.js generate ../samples/options/create-customers.json ../samples/output/my-created-customers.json`

This will read the `create-customers.json` options file and outpu to `my-created-customers.json`.
It will create just customer information (eg CommonPersonDetail) for some organisations as well as persons.
Additionally this will generate some invalid customer inforamtion to illustrate the use of the `create-invalid-customers` data factory


### Create a single data holders with a single business customer with 10 service points

First navigate to the dist directory, then run

`node cli.js generate ../samples/options/create-service-point-data.json ../samples/output/my-created-service-point-data.json`

This will read the `create-service-point-data.json` options file and outpu to `my-created-service-point-data.json`.
It will create one organisational customer with service point information for 10 service points

### Create a single data holders with a some business and personal customer with energy account information

First navigate to the dist directory, then run

`node cli.js generate ../samples/options/create-energy-accounts.json ../samples/output/my-created-energy-accounts.json`

This will read the `create-energy-accounts.json` options file and outpu to `my-created-energy-accounts.json`.
It will create an organisational customer with 5 accounts, and a personal customer with 2 accounts