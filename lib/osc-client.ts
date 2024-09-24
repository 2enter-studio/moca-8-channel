import { Client } from "node-osc";
import { MASTER_PLAY_COMMAND, SLAVE_PLAY_COMMAND } from "./config";

const { SLAVE_IP_ADDR, SLAVE_OSC_PORT, MASTER_OSC_PORT } = Bun.env;

const localClient = new Client(
  "127.0.0.1",
  parseInt(MASTER_OSC_PORT || "1111"),
);
const remoteClient = new Client(
  SLAVE_IP_ADDR || "192.168.0.2",
  parseInt(SLAVE_OSC_PORT || "2222"),
);

export function playLocal() {
  //@ts-ignore
  localClient.send(SLAVE_PLAY_COMMAND, 1);
}

export function playRemote() {
  //@ts-ignore
  remoteClient.send(MASTER_PLAY_COMMAND, 1);
}
