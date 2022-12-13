import * as fs from 'fs';
import * as path from 'path';
import syncrequest from 'sync-request'
import { Writable } from 'stream';
import Ajv2020 from 'ajv/dist/2020';
import betterAjvErrors from 'better-ajv-errors';
import addFormats from 'ajv-formats';
import * as testDataSchema  from '../../schema/cdr-test-data-schema.json';
import Ajv from 'ajv';

const sectors = ['banking', 'energy', 'energy_sdh', 'register', 'admin', 'dcr'];
const version = '1.20.0';

const baseSchemaUrl = 'http://localhost:8080/';

const options = {
  method: 'GET',
  headers: {
    'x-v': '1',
    'accept': '*/*'
  }
};



export function validateTestDataSchema(filename: string, verbose?: boolean, stdout?: Writable, stderr?: Writable): boolean {
  const cdr_test_schema = testDataSchema;
  // the array of schemas passed to the validator
  var dsbSchemas:any = [];

  sectors.forEach((sector:string) => {
    const directoryUrl = baseSchemaUrl + version + '/schemas/' + sector;

    // Get the lists od schemas from the remote directory
    //var fileList = fs.readdirSync(directoryUrl)
    // read each file and add to dsbSchemas
  


    console.log("Validated " + sector);
  
    console.log("All done for " + sector)
  }); 

  // not create the validator
  var ajv = new Ajv({ strictSchema: false });
  addFormats(ajv);
  // Configure the validator by adding the schema arrays
  var validate = ajv.addSchema(dsbSchemas);

  //var data = JSON.parse(fs.readFileSync(filename));
  try {
    //validate.compile(data);
  }catch(e: any) {
      console.log('ERROR in file ' + filename + ': ' + e.message);
  }
  return true;
};

// Get all registered data holders from the ACCC registry (synchrounously)
function GetSchemaFile(fileName: string): any {
  var res = syncrequest('GET', fileName, options);
  var dataSet = JSON.parse(res.getBody('utf8')).data;
}
