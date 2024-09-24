import { is_slave } from "./args";

export function run_bot() {
  if (is_slave) {
    console.log("Running slave machine...");
  } else {
    console.log("Running master machine...");
  }
}
