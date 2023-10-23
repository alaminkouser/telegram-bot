import { PRIVATE } from "../../private/index.ts";

export function getMe() {
  fetch("https://api.telegram.org/bot" + PRIVATE.token + "/getMe")
    .then((response) => {
      response.json().then((json) => {
        console.log(json);
      });
    });
}
