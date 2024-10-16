import { Schema } from "npm:jtd";

const cardinality: Schema = { enum: ["Single", "List"] };

const fields: Schema = {
  elements: {
    properties: {
      cardinality: cardinality,
      example: { type: "string" },
      mapping: { type: "string" },
      name: { type: "string" },
      type: {
        enum: [
          "String",
          "UUID",
          "Int",
          "Double",
          "Boolean",
          "Date",
          "DateTime",
          "Long",
          "Custom",
        ],
      },
    },
  },
};

const specification: Schema = {
  elements: {
    properties: {
      sliceName: { type: "string" },
      title: { type: "string" },
      given: {
        elements: {
          properties: {
            title: { type: "string" },
            id: { type: "string" },
            type: { enum: ["SPEC_EVENT", "SPEC_READMODEL"] },
            fields: { ref: "fields" },
          },
        },
      },
      when: {
        elements: {
          properties: {
            title: { type: "string" },
            id: { type: "string" },
            type: { enum: ["SPEC_COMMAND"] },
            fields: { ref: "fields" },
          },
        },
      },
      then: {
        elements: {
          properties: {
            title: { type: "string" },
            id: { type: "string" },
            type: {
              enum: ["SPEC_EVENT", "SPEC_READMODEL", "SPEC_ERROR"],
            },
            fields: { ref: "fields" },
          },
        },
      },
    },
  },
};

export const schema: Schema = {
  metadata: {
    version: "0.1",
    description:
      "A JSON Typedef of an event model, see https://eventmodeling.org\nMassaged version from JTD infer.",
  },
  definitions: {
    cardinality: cardinality,
    fields: fields,
    command: {
      properties: {
        // this is "stringly" typed, if we instead had used `fields: fields` then the resulting JTD JSON would copy in values instead of referencing them which would bloat the JSON.
        fields: { ref: "fields" },
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["COMMAND"] },
      },
    },
    event: {
      properties: {
        fields: { ref: "fields" },
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["EVENT"] },
      },
    },
    aggregate: {
      properties: {
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["AGGREGATE"] },
      },
      optionalProperties: { fields: { ref: "fields" } },
    },
    processor: {
      properties: {
        fields: { ref: "fields" },
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["AUTOMATION"] },
      },
    },
    readmodel: {
      properties: {
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["READMODEL"] },
      },
      optionalProperties: {
        fields: { ref: "fields" },
      },
    },
    screen: {
      properties: {
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["SCREEN"] },
      },
      optionalProperties: {
        fields: { ref: "fields" },
      },
    },
    specification: specification,
  },

  properties: {
    aggregates: {
      elements: {
        ref: "aggregate",
      },
    },
    sliceDependencies: {
      elements: {
        properties: {
          source: { type: "string" },
          target: { type: "string" },
        },
      },
    },
    slices: {
      elements: {
        properties: {
          commands: {
            elements: { ref: "command" },
          },
          events: {
            elements: { ref: "event" },
          },
          id: { type: "string" },
          processors: {
            elements: {
              ref: "processor",
            },
          },
          readmodels: {
            elements: {
              ref: "readmodel",
            },
          },
          screens: {
            elements: {
              ref: "screen",
            },
          },
          specifications: {
            elements: {
              ref: "specification",
            },
          },
          title: { type: "string" },
        },
      },
    },
  },
};
