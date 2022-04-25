import cdr_test_schema from '../../schema/cdr-test-schema.0.0.3.json';

const schema_version = '0.0.3';

export function testDocSchema(): any {
  return cdr_test_schema;
}

export function testDocVersion(): string {
  return schema_version;
}
