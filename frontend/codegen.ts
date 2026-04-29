
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "../backend/src/graphql/**/*.graphql",
  documents: "app/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    "graphql/generated/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
      config: {
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        defaultScalarType: "unknown",
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },
  }
};

export default config;
