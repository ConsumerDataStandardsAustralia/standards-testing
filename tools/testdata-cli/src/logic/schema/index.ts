import cdr_test_schema from '../../schema/cdr-test-data-schema.0.0.1.json';

const schema_version = '0.0.1';

export function testDataSchema(): any {
  return cdr_test_schema;
}

export function testDataVersion(): string {
  return schema_version;
}