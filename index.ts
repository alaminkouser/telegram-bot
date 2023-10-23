import PRIVATE from "./PRIVATE/index.ts";
import getMe from "./methods/getMe/index.ts";
import getUpdates from "./methods/getUpdates/index.ts";

declare global {
  const BASE: string;
  interface Window {
    BASE: string;
  }
}
window.BASE = "https://api.telegram.org/bot" + PRIVATE.token + "/";

getMe().then((value) => {
  console.log(value.result);
});

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

let update_id = 0;
while (true) {
  await delay(10000);
  console.log("update_id: " + update_id);
  await getUpdates({
    offset: update_id + 1,
    limit: 100,
    timeout: 1000,
    allowed_updates: [],
  }).then((value) => {
    if (value.ok === true) {
      for (let i = 0; value.result!.length > i; i++) {
        update_id = value.result![i].update_id;
        console.log(update_id);
      }
    }
  });
}
