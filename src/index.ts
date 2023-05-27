(async function () {
  async function copyToClipboard(text: string): Promise<void> {
    return navigator.clipboard.writeText(text);
  }

  async function bookmarklet(): Promise<void> {
    const title = document.title;
    const url = window.location.href;

    await copyToClipboard(`Title: ${title}\nURL: ${url}`);
  }

  bookmarklet()
    .then(() => console.log("タイトルとURLをコピーしました"))
    .catch(error => console.error("コピーできませんでした: ", error));
})();