import { schema } from "./event-model.ts";

export const generate_schema = async () =>
  await Deno.writeTextFile(
    "schema/event-model.jtd.json",
    JSON.stringify(schema, null, 2)
  );

generate_schema();
