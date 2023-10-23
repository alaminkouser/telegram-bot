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

// getMe().then((value) => {
//   console.log(value.result);
// });

let update_id = 0;
while (true) {
  console.log("--------------------")
  await getUpdates({
    offset: 0,
    limit: 100,
    timeout: 10,
    allowed_updates: [],
  }).then((value) => {
    console.log(value.result![0].message.text);
  });
}
