import cdr_data_schema from '../../schema/cdr-test-data-schema.json';

const schema_version = '0.0.3';

export function testDataSchema(): any {
  return cdr_data_schema;
}

export function testDataVersion(): string {
  return schema_version;
}
