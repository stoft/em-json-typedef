import * as jtd from "npm:jtd";
import { assertEquals } from "jsr:@std/assert";
import { schema } from "../src/event-model.ts";
import * as em_ai_schema from "../schema/event-model-ai.jtd.json" with { type: "json" };
import * as em_schema from "../schema/event-model.jtd.json" with {type: "json"};
import { generate_schema } from "../src/gen-schema.ts";

const json_example = `
{
  "slices": [
    {
      "id": "",
      "title": "slice: SetzeZahl",
      "commands": [
        {
          "id": "3458764581770988197",
          "title": "SetzeZahl",
          "fields": [
            {
              "name": "zahl",
              "type": "Long",
              "example": "5",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764581770988105",
          "title": "ZahlGesetzt",
          "fields": [
            {
              "name": "zahl",
              "type": "Long",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [
        {
          "id": "3458764581770935994",
          "title": "title",
          "fields": [],
          "type": "SCREEN"
        }
      ],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: SetzeZahl",
          "title": "spec: SetzeZahl",
          "given": [
            {
              "title": "SessionStarted",
              "id": "3458764582594820587",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "foo",
                  "type": "String",
                  "example": "",
                  "mapping": "aggregateId",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [
            {
              "title": "SetzeZahl",
              "id": "3458764582594820588",
              "type": "SPEC_COMMAND",
              "fields": [
                {
                  "name": "zahl",
                  "type": "Long",
                  "example": "5",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "then": [
            {
              "title": "ZahlGesetzt",
              "id": "3458764582594820589",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "zahl",
                  "type": "Long",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Anzeige Zahl",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764581771343314",
          "title": "AktuelleZahl",
          "fields": [
            {
              "name": "zahl",
              "type": "Long",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Anzeige Zahl",
          "title": "spec: Anzeige Zahl",
          "given": [
            {
              "title": "ZahlGesetzt",
              "id": "3458764582594891229",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "zahl",
                  "type": "Long",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            },
            {
              "title": "SessionStarted",
              "id": "3458764582594891228",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "foo",
                  "type": "String",
                  "example": "",
                  "mapping": "aggregateId",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [],
          "then": [
            {
              "title": "AktuelleZahl",
              "id": "3458764582594891230",
              "type": "SPEC_READMODEL",
              "fields": [
                {
                  "name": "zahl",
                  "type": "Long",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Setze Operation",
      "commands": [
        {
          "id": "3458764581771485461",
          "title": "SetzeOperation",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "operation",
              "type": "String",
              "example": "+",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764581771485356",
          "title": "OperationGEsetzt",
          "fields": [
            {
              "name": "operation",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Setze Operation",
          "title": "spec: Setze OperationFail",
          "given": [],
          "when": [
            {
              "title": "SetzeOperation",
              "id": "3458764582483636342",
              "type": "SPEC_COMMAND",
              "fields": [
                {
                  "name": "operation",
                  "type": "String",
                  "example": "+"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": ""
                }
              ]
            }
          ],
          "then": [
            {
              "title": "Error-Case",
              "id": "3458764582483636343",
              "type": "SPEC_ERROR"
            }
          ]
        },
        {
          "sliceName": "slice: Setze Operation",
          "title": "spec: Setze Operation",
          "given": [
            {
              "title": "ZahlGesetzt",
              "id": "3458764582610405652",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "zahl",
                  "type": "Long",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [
            {
              "title": "SetzeOperation",
              "id": "3458764582610405653",
              "type": "SPEC_COMMAND",
              "fields": [
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "operation",
                  "type": "String",
                  "example": "+",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "then": [
            {
              "title": "OperationGEsetzt",
              "id": "3458764582610405654",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "operation",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Anzeige Operation",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764581771708811",
          "title": "AktuelleOperation",
          "fields": [
            {
              "name": "operation",
              "type": "String",
              "example": "+",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Anzeige Operation",
          "title": "spec: scenario",
          "given": [
            {
              "title": "OperationGEsetzt",
              "id": "3458764582610611927",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "operation",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [],
          "then": [
            {
              "title": "AktuelleOperation",
              "id": "3458764582610611928",
              "type": "SPEC_READMODEL",
              "fields": [
                {
                  "name": "operation",
                  "type": "String",
                  "example": "+",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice:Kalkulation",
      "commands": [
        {
          "id": "3458764581772596309",
          "title": "Calculate",
          "fields": [
            {
              "name": "zahl1",
              "type": "Long",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "zahl2",
              "type": "Long",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "operation",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764581772596047",
          "title": "ResultCalculated",
          "fields": [
            {
              "name": "result",
              "type": "Long",
              "example": "",
              "mapping": "operation",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: OperationInput",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764581785608200",
          "title": "OperationInput",
          "fields": [
            {
              "name": "operation",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "zahl1",
              "type": "Long",
              "example": "",
              "mapping": "zahl",
              "cardinality": "Single"
            },
            {
              "name": "zahl2",
              "type": "Long",
              "example": "",
              "mapping": "zahl",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: OperationInput",
          "title": "spec: scenario",
          "given": [
            {
              "title": "ZahlGesetzt",
              "id": "3458764582610808422",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "zahl",
                  "type": "Long",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            },
            {
              "title": "OperationGEsetzt",
              "id": "3458764582610808423",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "operation",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [],
          "then": [
            {
              "title": "OperationInput",
              "id": "3458764582610808424",
              "type": "SPEC_READMODEL",
              "fields": [
                {
                  "name": "operation",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "zahl1",
                  "type": "Long",
                  "example": "",
                  "mapping": "zahl",
                  "cardinality": "Single"
                },
                {
                  "name": "zahl2",
                  "type": "Long",
                  "example": "",
                  "mapping": "zahl",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Current Session",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764582532725477",
          "title": "CurrentSession",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Current Session",
          "title": "spec: CurrentSession",
          "given": [
            {
              "title": "SessionStarted",
              "id": "3458764582594820045",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "foo",
                  "type": "String",
                  "example": "",
                  "mapping": "aggregateId",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [],
          "then": [
            {
              "title": "CurrentSession",
              "id": "3458764582594820047",
              "type": "SPEC_READMODEL",
              "fields": [
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: currentSession",
      "commands": [
        {
          "id": "3458764581775227584",
          "title": "StarteSession",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764581775290134",
          "title": "SessionStarted",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "foo",
              "type": "String",
              "example": "",
              "mapping": "aggregateId",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice1",
      "commands": [
        {
          "id": "3458764583134208590",
          "title": "command",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "field1",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583134208454",
          "title": "event",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [
        {
          "id": "3458764583136258780",
          "title": "screen",
          "type": "SCREEN"
        }
      ],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice3",
      "commands": [
        {
          "id": "3458764583134208859",
          "title": "command",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "foo2",
              "type": "String",
              "example": "",
              "mapping": "aggregateId",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583134208455",
          "title": "Element2",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "foo2",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [
        {
          "id": "3458764583136317987",
          "title": "screen",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "foo",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "SCREEN"
        }
      ],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice5",
      "commands": [
        {
          "id": "3458764583134208922",
          "title": "command",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583134208456",
          "title": "Element3",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [
        {
          "id": "3458764583136318007",
          "title": "screen",
          "type": "SCREEN"
        }
      ],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice4",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583134452354",
          "title": "readmodel",
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice2",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583134452621",
          "title": "readmodel",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "foo",
              "type": "String",
              "example": "",
              "mapping": "aggregateId",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice6",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583134452689",
          "title": "readmodel",
          "fields": [
            {
              "name": "foo1",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "foo2",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: 8",
      "commands": [
        {
          "id": "3458764583135385966",
          "title": "command",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583135385965",
          "title": "Element4",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [
        {
          "id": "3458764583135386416",
          "title": "automation",
          "fields": [
            {
              "name": "aggregateId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 2",
      "commands": [
        {
          "id": "3458764583441989832",
          "title": "AddItemToCart     ",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583441951343",
          "title": "CartIItemAdded",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Frame 2",
          "title": "spec: scenario",
          "given": [],
          "when": [
            {
              "title": "AddItemToCart     ",
              "id": "3458764583568406324",
              "type": "SPEC_COMMAND",
              "fields": [
                {
                  "name": "productId",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "then": [
            {
              "title": "CartIItemAdded",
              "id": "3458764583568406325",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "productId",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Frame 3",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583442007753",
          "title": "CartItems",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [
        {
          "id": "3458764583442091875",
          "title": "title",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "SCREEN"
        }
      ],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Frame 3",
          "title": "spec: scenario",
          "given": [
            {
              "title": "CartIItemAdded",
              "id": "3458764583647728481",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "productId",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "when": [],
          "then": [
            {
              "title": "CartItems",
              "id": "3458764583647728483",
              "type": "SPEC_READMODEL",
              "fields": [
                {
                  "name": "productId",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Frame 4",
      "commands": [
        {
          "id": "3458764583442167738",
          "title": "SubmitCart",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583441951346",
          "title": "CartSubmitted",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": [
        {
          "sliceName": "slice: Frame 4",
          "title": "spec: scenario",
          "given": [],
          "when": [
            {
              "title": "SubmitCart",
              "id": "3458764583647919678",
              "type": "SPEC_COMMAND",
              "fields": [
                {
                  "name": "productId",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ],
          "then": [
            {
              "title": "CartSubmitted",
              "id": "3458764583647919681",
              "type": "SPEC_EVENT",
              "fields": [
                {
                  "name": "productId",
                  "type": "String",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                },
                {
                  "name": "aggregateId",
                  "type": "UUID",
                  "example": "",
                  "mapping": "",
                  "cardinality": "Single"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "",
      "title": "slice: Frame 5",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583442341547",
          "title": "SubmittedCarts",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [
        {
          "id": "3458764583442341202",
          "title": "title",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 6",
      "commands": [
        {
          "id": "3458764583442341738",
          "title": "ReserveStock",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583442341820",
          "title": "StockReserved",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 7",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583442514689",
          "title": "ReservedItems",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "List"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 8",
      "commands": [
        {
          "id": "3458764583442590107",
          "title": "SubmitOrder",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583441951348",
          "title": "      OrderSubmitted",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "cartId",
              "type": "String",
              "example": "",
              "mapping": "aggregateId",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [
        {
          "id": "3458764583442514797",
          "title": "SubmitOrderProcessor",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 9",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583442621811",
          "title": "SubmittedOrders",
          "fields": [
            {
              "name": "productId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "List"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "List"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 10",
      "commands": [
        {
          "id": "3458764583442712061",
          "title": "Request Payment",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583442923217",
          "title": "PaymentRequested",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "orderId",
              "type": "String",
              "example": "",
              "mapping": "aggregateId",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [
        {
          "id": "3458764583442712003",
          "title": "SubmittedOrderProcessor",
          "fields": [
            {
              "name": "productId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "List"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "List"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 11",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583442923492",
          "title": "RequestedPayments",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 12",
      "commands": [
        {
          "id": "3458764583443075984",
          "title": "ConfirmPayment",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583441951349",
          "title": "PaymentConfirmed     ",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [
        {
          "id": "3458764583442923612",
          "title": "PaymentProcessor",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 13",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583443076258",
          "title": "Confirmed",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "paymentId",
              "type": "String",
              "example": "",
              "mapping": "aggregateId",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [
        {
          "id": "3458764583443076208",
          "title": "SubmittedOrderProcessor",
          "fields": [
            {
              "name": "paymentId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 14",
      "commands": [
        {
          "id": "3458764583443076567",
          "title": "ConfirmOrder",
          "fields": [
            {
              "name": "paymentId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583441951351",
          "title": "OrderProcessed",
          "fields": [
            {
              "name": "paymentId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: Frame 16",
      "commands": [
        {
          "id": "3458764583504754196",
          "title": "DecreaseQuantity",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "productId",
              "cardinality": "Single"
            },
            {
              "name": "productId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "COMMAND"
        }
      ],
      "events": [
        {
          "id": "3458764583504754286",
          "title": "Quantity Decreased",
          "fields": [
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "productId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "EVENT"
        }
      ],
      "readmodels": [],
      "screens": [],
      "processors": [],
      "specifications": []
    },
    {
      "id": "",
      "title": "slice: slice",
      "commands": [],
      "events": [],
      "readmodels": [
        {
          "id": "3458764583504753949",
          "title": "ProcessedOrders",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "READMODEL"
        }
      ],
      "screens": [],
      "processors": [
        {
          "id": "3458764583504511889",
          "title": "StockQuantityProcessor",
          "fields": [
            {
              "name": "productId",
              "type": "String",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            },
            {
              "name": "aggregateId",
              "type": "UUID",
              "example": "",
              "mapping": "",
              "cardinality": "Single"
            }
          ],
          "type": "AUTOMATION"
        }
      ],
      "specifications": []
    }
  ],
  "aggregates": [
    {
      "id": "3458764583565931328",
      "title": "      aggregate",
      "fields": [],
      "type": "AGGREGATE"
    },
    {
      "id": "3458764583565931043",
      "title": "aggregate",
      "type": "AGGREGATE"
    }
  ],
  "sliceDependencies": [
    { "source": "slice: Current Session", "target": "slice: SetzeZahl" },
    { "source": "slice: slice4", "target": "slice: slice5" },
    { "source": "slice: slice2", "target": "slice: slice3" },
    { "source": "slice: Frame 3", "target": "slice: Frame 3" }
  ]
}
`;

Deno.test("validate event model JTD from TS", () => {
  assertEquals(jtd.isValidSchema(schema), true);
  jtd.validate(schema, JSON.parse(json_example));
});

Deno.test("validate event model JTD from JSON", async () => {
  await generate_schema();
  assertEquals(jtd.isValidSchema(em_schema as jtd.Schema), true);
  jtd.validate(schema, JSON.parse(json_example));
})

Deno.test("validate ai event model JTD", () => {
  assertEquals(jtd.isValidSchema(em_ai_schema as jtd.Schema), true);
  jtd.validate(em_ai_schema as jtd.Schema, JSON.parse(json_example));
});
