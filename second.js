const dragArea = document.querySelector(`.container`),
  drapTaxt = dragArea.querySelector(`h3`),
  button = dragArea.querySelector(`button`),
  input = dragArea.querySelector(`input`);
let myFile;
// upload file input file visible
button.onclick = () => {
  input.click();
};
// jokhn kisu upload korbo tokhn active classs show hbe.
input.addEventListener(`change`, function () {
  myFile = this.files[0];
  dragArea.classList.add(`active`);
  showMe();
});
// drag time text change
dragArea.addEventListener(`dragover`, (event) => {
  event.preventDefault();
  drapTaxt.textContent = `Relase to upload`;
  dragArea.classList.add(`active`);
});
// drag soriye nile previous  text show
dragArea.addEventListener(`dragleave`, () => {
  drapTaxt.textContent = `Drag & Drop`;
  dragArea.classList.remove(`active`);
});
// upload system
dragArea.addEventListener(`drop`, (event) => {
  event.preventDefault();
  myFile = event.dataTransfer.files[0];
  showMe();
});
// file type chack & upload allow or not
function showMe() {
  let fileType = myFile.type;
  let validEx = [`image/jpeg`, `image/jpg`, `image/png`];
  if (validEx.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `  <img src="${imgUrl}" alt="">
      `;
      dragArea.innerHTML = img;
    };
    fileReader.readAsDataURL(myFile);
  } else {
    alert(`This file is not valid!`);
    dragArea.classList.remove(`active`);
  }
}
