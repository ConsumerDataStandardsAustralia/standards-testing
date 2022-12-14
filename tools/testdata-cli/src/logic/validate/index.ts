import * as fs from 'fs';
import addFormats from 'ajv-formats';
import Ajv from 'ajv';
import { Writable } from 'stream';

const baseSchemaUrl = 'https://raw.githubusercontent.com/ConsumerDataStandardsAustralia/dsb-schema-tools/main/';

export function validateTestDataSchema(filename: string, verbose?: boolean, stdout?: Writable, stderr?: Writable): boolean {
  console.log('Not implemented yet!');
  return true;
};

