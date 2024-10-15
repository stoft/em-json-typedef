import { schema } from "./event-model.ts";

await Deno.writeTextFile(
  "schema/event-model.jtd.json",
  JSON.stringify(schema, null, 2)
);
