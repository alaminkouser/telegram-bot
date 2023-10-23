import { PRIVATE } from "./PRIVATE/index.ts";


declare global {
  const BASE: string;
  interface Window {
    BASE: string;
  }
}
window.BASE = "https://api.telegram.org/bot" + PRIVATE.token + "/";


