import { parseArgs } from "util";

const { values } = parseArgs({
  args: Bun.argv,
  options: {
    "use-bot": {
      type: "boolean",
    },
    "is-slave": {
      type: "boolean",
    },
  },
  strict: true,
  allowPositionals: true,
});

export const use_bot = values["use-bot"] || false;
export const is_slave = values["is-slave"] || false;
