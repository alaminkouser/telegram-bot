import PRIVATE from "./PRIVATE/index.ts";
import getMe from "./methods/getMe/index.ts";
import getUpdates from "./methods/getUpdates/index.ts";
import sendMessage from "./methods/sendMessage/index.ts";

declare global {
  const BASE: string;
  interface Window {
    BASE: string;
  }
}
window.BASE = "https://api.telegram.org/bot" + PRIVATE.token + "/";

getMe().then((value) => {
  console.log(value.ok);
});

let update_id = 0;
while (true) {
  await getUpdates({
    offset: update_id + 1,
    limit: 100,
    timeout: 1000,
    allowed_updates: [],
  }).then(async (value) => {
    if (value.ok === true) {
      for (let i = 0; i < value.result!.length; i++) {
        const element = value.result![i];
        update_id = element.update_id;
        console.log(element.message.text!);
        if (element.message.chat.id === PRIVATE.owner.id) {
          await sendMessage({
            chat_id: element.message.chat.id,
            text: element.message.text!,
          });
        }
      }
    }
  });
}
