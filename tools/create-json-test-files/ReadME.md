# Consumer Data Right Testing Documentation

## JSON Test file generator

This NodeJS program creates the json test files from 
The program requires a seres of flat files (csv), which are provided by the DSB Engineering team.
These files are based on a csv export from a Excel spreadsheet.

The out of this program is a series of test suites, test scenarios, test cases, and assertions.
These files comply with the definitions provided in `cdr-test-schema.x.x.x.json`.

The output files and folders will be generated in the `output-files` folder.

## How to use

From a command prompt or terminal window run
`npm install` then `npm start`