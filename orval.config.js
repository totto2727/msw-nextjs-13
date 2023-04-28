module.exports = {
  "petstore-file-transfomer": {
    output: {
      mode: "single",
      target: "./openapi/petstore.ts",
      schemas: "./openapi/model",
      mock: true,
    },
    input: {
      target: "./openapi/petstore.yaml",
    },
  },
};
