//import { compile, compileFromFile } from 'json-schema-to-typescript'
//import * as fs from 'fs'
var jtt = require('json-schema-to-typescript')
var fs = require('fs')

//compile from file
jtt.compileFromFile('../../schema/cdr-test-schema.0.0.1.json')
  .then(ts => fs.writeFileSync('../create-json-test-files/test-schema-definitions.ts', ts))