/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A recursive combination of text based assertion statements combined using AND or OR operators
 */
export type AssertionPredicate =
  | string
  | {
      and: AssertionPredicate[];
      [k: string]: unknown;
    }
  | {
      or: AssertionPredicate[];
      [k: string]: unknown;
    };
/**
 * A single step in a test case
 */
export type TestCaseStep =
  | {
      type: "WAIT";
      /**
       * Number of seconds to wait
       */
      period: number;
      [k: string]: unknown;
    }
  | {
      type: "UNTIL";
      /**
       * The condition that must be met for the step to be complete
       */
      condition: string;
      [k: string]: unknown;
    }
  | {
      type: "ACTION";
      /**
       * The action to be performed
       */
      action: string;
      [k: string]: unknown;
    }
  | {
      type: "ASSERTION";
      assertion: TestCasePredicate;
      [k: string]: unknown;
    };
/**
 * A recursive combination of pre-defined assertions combined using AND or OR operators
 */
export type TestCasePredicate =
  | string
  | {
      and: TestCasePredicate[];
      [k: string]: unknown;
    }
  | {
      or: TestCasePredicate[];
      [k: string]: unknown;
    };
/**
 * A single action the sequence of execution for a test scenario
 */
export type ScenarioAction =
  | {
      type: "SETUP";
      /**
       * The setup action to be performed
       */
      action: string;
      [k: string]: unknown;
    }
  | {
      type: "CLEANUP";
      /**
       * The clean up action to be performed
       */
      action: string;
      [k: string]: unknown;
    }
  | {
      type: "TEST";
      /**
       * The ID of the test case to execute
       */
      testCase: string;
      [k: string]: unknown;
    };

/**
 * A JSON schema for defining test cases to be used to document test cases for compliance with the Consumer Data Right data standards
 */
export interface ConsumerDataRightTestCaseJSONSchema {
  /**
   * The schema to which this file conforms.
   */
  schema: string;
  /**
   * The version of the file formatted using semver (without extensions)
   */
  fileVersion: string;
  /**
   * The version of the CDR standards that these tests are validated for.  For formatted using semver (without extensions)
   */
  standardsVersion: string;
  /**
   * A short title of the test file
   */
  title: string;
  /**
   * An optional description of the test case file to identify its purpose
   */
  description?: string;
  /**
   * An optional url for the public GitHub repository
   */
  githubRepoUrl?: string;
  /**
   * An optional url for the change log
   */
  changeLogUrl?: string;
  /**
   * A set of assertions named with the ID of the assertion in format 'A.XXX.0000' where XXX is category and 0000 is the unique identifier
   */
  assertions?: {
    [k: string]: Assertion;
  };
  /**
   * A set of test cases named with the ID of the test case in format 'T.XXX.0000' where XXX is category and 0000 is the unique identifier
   */
  testCases?: {
    [k: string]: TestCase;
  };
  /**
   * A set of test scenarios that link together multiple test cases in sequence. Named with the ID of the scenarion in format 'S.XXX.0000' where XXX is category and 0000 is the unique identifier
   */
  scenarios?: {
    [k: string]: Scenario;
  };
  /**
   * A suite of test scenarios used to bundle all of the tests for a specific domain.  Each suite is named using the format 'SUITE.XXX' where XXX is category that describes the suite
   */
  suites?: {
    [k: string]: Suite;
  };
}
/**
 * A single atomic test assertion
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^A\.[A-Z]{3}\.[0-9]{4}$".
 */
export interface Assertion {
  /**
   * A Unique assertion identifier
   */
  id: string;
  /**
   * A short title of the assertion
   */
  title: string;
  /**
   * An optional description of the assertion giving additional information
   */
  description?: string;
  /**
   * An array of references for additional relevant information
   */
  references?: Reference[];
  /**
   * Indicates if this is a negative assertion.  False if absent
   */
  negative?: boolean;
  /**
   * The implication of this assertion failing on CDR compliance
   */
  severity?: "FAIL" | "INFO" | "WARN";
  /**
   * An array of 'given' statements describing the context of the assertion
   */
  given: string[];
  /**
   * An array of 'when' statements describing the context of the assertion
   */
  when: string[];
  then: AssertionPredicate;
}
/**
 * A reference to additional information
 */
export interface Reference {
  /**
   * Display name for the reference
   */
  alt?: string;
  /**
   * Link to the reference
   */
  uri: string;
}
/**
 * A test case defined using Behaviour Driven Development principles
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^T\.[A-Z]{3}\.[0-9]{4}$".
 */
export interface TestCase {
  /**
   * A Unique test case identifier
   */
  id: string;
  /**
   * A short title of the test case
   */
  title: string;
  /**
   * An optional description of the test case giving additional information
   */
  description?: string;
  /**
   * An array of references for additional relevant information
   */
  references?: Reference[];
  /**
   * Indicates if this is a negative test case.  False if absent
   */
  negative?: boolean;
  /**
   * A description of the test case defined as a testable story in 'As A... I Want... Such That...' format
   */
  purpose?: string;
  /**
   * An array of conditions that must be met before the test case is executed
   */
  preConditions?: string[];
  /**
   * An array of steps to execute the test case
   */
  steps: TestCaseStep[];
  /**
   * An array assertion identifiers associated with this test case
   */
  assertions?: string[];
}
/**
 * A test scenario made up of a sequence of test cases and additonal actions to prepare for the tests
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^S\.[A-Z]{3}\.[0-9]{4}$".
 */
export interface Scenario {
  /**
   * A Unique scenario identifier
   */
  id: string;
  /**
   * A short title of the scenario
   */
  title: string;
  /**
   * An optional description of the scenario giving additional information
   */
  description?: string;
  /**
   * An array of references for additional relevant information
   */
  references?: Reference[];
  /**
   * A description of the purpose of this test scenario indicating what the scenario is intended to test
   */
  purpose: string;
  /**
   * An sequence of actions to execute the test scenario
   */
  sequence: ScenarioAction[];
}
/**
 * A suite of test scenarios that are bundled to achieve a specific testing purpose
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^SUITE\.[A-Z]{3}$".
 */
export interface Suite {
  /**
   * A Unique suite identifier
   */
  id: string;
  /**
   * A short title of the test suite
   */
  title: string;
  /**
   * An optional description of the suite giving additional information
   */
  description?: string;
  /**
   * An array of references for additional relevant information
   */
  references?: Reference[];
  /**
   * A description of the purpose of this suite indicating what the suite is intended to test
   */
  purpose: string;
  /**
   * An array of scenarios (reference by scenario ID) included in the suite
   */
  scenarios: string[];
}
