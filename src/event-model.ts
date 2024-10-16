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
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["COMMAND"] },
        // This is "stringly" typed so we lose typing checks here but if we instead had used
        // `fields: fields` then the resulting JTD JSON would copy in values instead
        // of referencing them which would bloat the JSON.
        fields: { ref: "fields" },
      },
    },
    event: {
      properties: {
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["EVENT"] },
        fields: { ref: "fields" },
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
        id: { type: "string" },
        title: { type: "string" },
        type: { enum: ["AUTOMATION"] },
        fields: { ref: "fields" },
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
          id: { type: "string" },
          title: { type: "string" },
          commands: {
            elements: { ref: "command" },
          },
          events: {
            elements: { ref: "event" },
          },
          readmodels: {
            elements: {
              ref: "readmodel",
            },
          },
          processors: {
            elements: {
              ref: "processor",
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
        },
      },
    },
  },
};
