const form = document.forms["register"];
form.addEventListener("submit", validate, true);
function validate(e) {
  e.preventDefault();
  const nameText = document.forms["register"]["fname"].value;
  if (nameText.length < 8) {
    alert("Your name must be minimum 8 characters");
  } else {
    insertText(nameText);
  }
}
