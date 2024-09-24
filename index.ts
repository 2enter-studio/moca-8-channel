import { use_bot, is_slave } from "./lib/args";
import { run_bot } from "./lib/bot";

console.table({ use_bot, is_slave });

if (use_bot) {
  run_bot();
}
