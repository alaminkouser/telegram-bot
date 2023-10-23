export default function getMe() {
  fetch(BASE + "getMe")
    .then((value) => {
      return value.text();
    })
    .then((value) => {
      console.log(value);
    });
}
