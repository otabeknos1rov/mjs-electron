/* eslint-disable no-console */

import { createHelia } from "helia";
import { InitStorage } from "@conun-global/web3.storage";

export async function createNode() {
  return await createHelia();
}

const envVars = {
  NODE_TYPE: "DESKTOP",
  NODE_ENV: "production",
  SWARM_NODE:
    "/ip4/54.180.152.8/tcp/4001/ipfs/12D3KooWArN5obR9i11WKj6wpyxhNTTxHw7VTEhjWJwpth5wxtur",
  PARENT_NODE: [
    "/ip4/43.201.55.128/tcp/4002/ipfs/12D3KooWEdJVMG8jndkar5NABVoUKUhj4CKXnCBAg7NEefECM3mq",
    "/ip4/54.180.152.8/tcp/4001/ipfs/12D3KooWArN5obR9i11WKj6wpyxhNTTxHw7VTEhjWJwpth5wxtur",
    "/ip4/54.180.152.8/udp/4001/quic/p2p/12D3KooWArN5obR9i11WKj6wpyxhNTTxHw7VTEhjWJwpth5wxtur"
  ],
  LISTEN: [
    "/ip4/0.0.0.0/tcp/4002",
    "/ip4/0.0.0.0/tcp/4003/ws",
    "/ip4/43.201.55.128/tcp/15555/ws/p2p-webrtc-star/"
  ],
  API: "/ip4/0.0.0.0/tcp/5002",
  GATEWAY: "/ip4/0.0.0.0/tcp/9090",
  RPC: "/ip4/0.0.0.0/tcp/5003",
  SWARM_KEY:
    "L2tleS9zd2FybS9wc2svMS4wLjAvCi9iYXNlMTYvCmU5MDA2ZmNhY2JhZTMyYzYwZDBhZDI1NDc0NGNiNTI5MDA1YWU1YjA3NjBkN2E2ZDZlYTA1MmViYjdhODI4M2Y=",
  SENTRY_DSN:
    "https://9beef77061394c83b046f14eb4fd2d7c@o4504750393393152.ingest.sentry.io/4504750395424768",
  API_URL: "http://43.201.105.80:8085/"
};

export async function executeWeb3Storage() {
  try {
    // if (storage) return;

    // const memory = await db.get(`memory`);
    const options = {
      parentNode: envVars.PARENT_NODE,
      swarmKey: Buffer.from(envVars.SWARM_KEY, "base64"),
      listen: envVars.LISTEN,
      API: envVars.API,
      Gateway: envVars.GATEWAY,
      RPC: envVars.RPC
      // storageDir: memory.name
    };

    // if (!memory) delete options.storageDir;

    const storage = new InitStorage(options);

    await storage?.start();
  } catch (err) {
    console.log("Storage execute error " + err, "error");
  }
}
