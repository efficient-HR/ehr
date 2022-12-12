import $RefParser from '@apidevtools/json-schema-ref-parser';
import { NgOpenApiGen } from 'ng-openapi-gen';

const options = {
  input: 'notification-api.json',
  output: 'my-app/src/app/api',
};

// load the openapi-spec and resolve all $refs
const RefParser = new $RefParser();
const openApi = await RefParser.bundle(options.input, {
  dereference: { circular: false },
});

const ngOpenGen = new NgOpenApiGen(openApi, options);
ngOpenGen.generate();
