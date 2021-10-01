function solve() {
  let text = document.getElementById('input').value;
  let output = document.getElementById('output');

  let splittedText = text.split('.').filter((el)=>el.length>0);

  for (let i = 0; i < splittedText.length; i += 3) {
    let arr = [];
    for (let y = 0; y < 3; y++) {
      if (splittedText[i + y]) {
        arr.push(splittedText[i + y]);
      }
    }
    let paragraph = arr.join('. ') + '.';
    output.innerHTML += `<p>${paragraph}</p>`;
  }
}