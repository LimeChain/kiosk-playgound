import { getFullnodeUrl, SuiClient } from "@mysten/sui/client";
import { Transaction } from "@mysten/sui/transactions";
import { Ed25519Keypair } from "@mysten/sui/keypairs/ed25519";
import "dotenv/config";

import { KioskClient, Network, KioskTransaction } from "@mysten/kiosk";

async function createKiosk() {
  const tx = new Transaction();
  const kioskTx = new KioskTransaction({ transaction: tx, kioskClient });

  // Calls the creation function.
  kioskTx.create();

  // Shares the kiosk and transfers the `KioskOwnerCap` to the owner.
  kioskTx.shareAndTransferCap(myAddress);

  // Always called as our last kioskTx interaction.
  kioskTx.finalize();

  const result = await suiClient.signAndExecuteTransaction({
    signer: keypair,
    transaction: tx,
    requestType: "WaitForLocalExecution",
    options: {
      showEffects: true,
    },
  });

  console.log("result", result);
}

async function getOwnedKiosks() {
  const { kioskOwnerCaps, kioskIds } = await kioskClient.getOwnedKiosks({
    address: myAddress,
  });
  // console.log(kioskOwnerCaps);
  console.log(kioskIds);
}

async function getKioskDetails(id) {
  const kioskData = await kioskClient.getKiosk({
    id,
    options: {
      withObjects: true, // This will include NFT details
    },
  });
  console.log(kioskData);
}

async function getNftDetails(id) {
  const nftDetails = await suiClient.getObject({
    id,
    options: {
      showContent: true,
      showType: true,
    },
  });
  console.log(nftDetails);
}

async function getTransferPolicies(type) {
  const policyForType = await kioskClient.getTransferPolicies({
    type,
  });
  console.log(policyForType);
}

async function getOwnedTransferPolicies(address) {
  const policies = await kioskClient.getOwnedTransferPolicies({
    address,
  });
  console.log(policies);
}

const pk = process.env.PK;
const keypair = Ed25519Keypair.fromSecretKey(pk);
const myAddress = keypair.getPublicKey().toSuiAddress();

const suiClient = new SuiClient({ url: getFullnodeUrl("mainnet") });

const kioskClient = new KioskClient({
  client: suiClient,
  network: Network.MAINNET,
});

// createKiosk();

// getOwnedKiosks();

// getKioskDetails(
//   "0xa4233513bbc445854e38a7b21cd1e1bd38dbc6a2faef72a90e4fe408fe65023e"
// );

// getNftDetails(
//   "0x6a64a177e78a6ec137e94a305feafecbd3fdb39ca78059bcd487a3bd4c0c7822"
// );

// getTransferPolicies(
//   "0x6529f24fa077aa43d2dd7ee34fdd3ad8d0292bc3528d7a3c95dad55e29174ebe::sui_collection_w::SUI_COLLECTION"
// );

// getOwnedTransferPolicies(myAddress);
