function solve() {
  let text = document.getElementById('text').value;
  let caseToCast = document.getElementById('naming-convention').value;
  let words = text.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].toLowerCase();
    console.log(words[i]);
  }

  if (caseToCast == 'Pascal Case') {
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    document.getElementById('result').textContent = words.join('');
  } else if (caseToCast == 'Camel Case') {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    document.getElementById('result').textContent = words.join('');
  } else {
    document.getElementById('result').textContent = 'Error!';
  }
}