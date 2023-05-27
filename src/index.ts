import { bookmarklet } from "./bookmarklet";

bookmarklet()
  .then(() => console.log("タイトルとURLをコピーしました"))
  .catch((error) => console.error("コピーできませんでした: ", error));
