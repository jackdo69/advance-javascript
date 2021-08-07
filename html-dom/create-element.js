function insertText(text) {
  const div = document.createElement("div");
  const content = document.createTextNode(`Your text is ${text}`);
  div.appendChild(content);
  document.body.appendChild(div);
}
