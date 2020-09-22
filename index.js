const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4) {
    document.querySelector('.post1').innerHTML = xhr.responseText;
  }
}
xhr.open('GET', 'example1.html');
xhr.send();

fetch('example2.html')
  .then(res => res.text())
  .then(text => document.querySelector('.post2').innerHTML = text)

async function getData(file, locus) {
  let response = await fetch(file);
  let text = await response.text();
  document.querySelector(locus).innerHTML = text;
}

getData('example3.html', '.post3');

// aaaa

const xhr =  new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState == 4) {
    document.querySelector('.post1').innerHTML = xhr.responseText;
  }
}
