function solve() {
  document.querySelector('textarea').value = '';
  document.querySelector('#exercise > button:nth-child(3)').addEventListener('click', generate);
  document.querySelector('#exercise > button:nth-child(6)').addEventListener('click', buy);
  document.querySelector('#exercise > textarea:nth-child(5)').value='';

  function generate() {
    const input = document.querySelector('textarea').value;
    const products = JSON.parse(input);
    for (let i = 0; i < products.length; i++) {
      let name = products[i].name;
      let img = products[i].img;
      let price = Number(products[i].price);
      let decFactor = Number(products[i].decFactor);

      let tr = document.createElement('tr');

      tr.innerHTML = `<td><img src=${img}></td>
    <td><p>${name}</p></td>
    <td><p>${price}</p></td>
    <td><p>${decFactor}</p></td>
    <td><input type="checkbox"/></td>`

      document.querySelector('tbody').appendChild(tr);
    }
    document.querySelector('textarea').value = '';
  }

  function buy() {
    const rows = [...document.querySelectorAll('tbody tr')];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let boughtProducts = new Set();
    for (const row of rows) {
      let isChecked = row.querySelector('td input[type="checkbox"]').checked;

      if (isChecked) {
        let productName=row.querySelector('td:nth-child(2)').children[0].textContent;
        let price=Number(row.querySelector('td:nth-child(3)').children[0].textContent);
        let currDecFactor=Number(row.querySelector('td:nth-child(4)').children[0].textContent);

        totalPrice+=price;
        boughtProducts.add(productName);
        totalDecFactor+=currDecFactor;
      }
    }
    let avgDecFactor = totalDecFactor / boughtProducts.size;
    const output = document.querySelector('#exercise > textarea:nth-child(5)');
    output.value = `Bought furniture: ${[...boughtProducts].join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${avgDecFactor}`
  }
}