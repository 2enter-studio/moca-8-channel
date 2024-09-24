import { Client } from "node-osc";
import { ARENA_PLAY_COMMAND, REAPER_PLAY_COMMAND } from "./config";

const { REMOTE_IP_ADDR, REMOTE_OSC_PORT, LOCAL_OSC_PORT } = Bun.env;

const localClient = new Client("127.0.0.1", parseInt(LOCAL_OSC_PORT || "1111"));
const remoteClient = new Client(
  REMOTE_IP_ADDR || "192.168.0.2",
  parseInt(REMOTE_OSC_PORT || "2222"),
);

export function playLocal() {
  localClient.send(REAPER_PLAY_COMMAND);
}

export function playRemote() {
  remoteClient.send(ARENA_PLAY_COMMAND);
}
