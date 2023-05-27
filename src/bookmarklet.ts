import { copyToClipboard } from "./utils";

export async function bookmarklet(): Promise<void> {
  const title = document.title;
  const url = window.location.href;

  await copyToClipboard(`Title: ${title}\nURL: ${url}`);
}
