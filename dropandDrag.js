const DragArea = document.querySelector(`.container`),
  DrapTaxt = DragArea.querySelector(`h3`),
  button = DragArea.querySelector(`button`),
  input = DragArea.querySelector(`input`);
let MyFile;
// input file upload system visible
button.onclick = () => {
  input.click();
};
//after upload file  for active class color show
input.addEventListener(`change`, function () {
  MyFile = this.files[0];
  DragArea.classList.add(`active`);
  showMe();
});
//  drag time text change
DragArea.addEventListener(`dragover`, (event) => {
  event.preventDefault();
  DragArea.classList.add(`active`);
  DrapTaxt.textContent = `Relase to Upload File`;
});
// file soriye nile previous text show
DragArea.addEventListener(`dragleave`, () => {
  DragArea.classList.remove(`active`);
  DrapTaxt.textContent = `Drag & Drop`;
});
//   upload system
DragArea.addEventListener(`drop`, (event) => {
  event.preventDefault();
  MyFile = event.dataTransfer.files[0];
  showMe();
});
// file type customize
function showMe() {
  let fileType = MyFile.type;
  let validEx = [`image/jpeg`, `image/jpg`, `image/png`];
  if (validEx.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `<img src="${imgUrl}" alt="">`;
      DragArea.innerHTML = img;
    };
    fileReader.readAsDataURL(MyFile);
  } else {
    alert(`This file is not valid`);
    DragArea.classList.remove(`active`);
    DrapTaxt.textContent = `Drag & Drop`;
  }
}
