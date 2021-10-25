
function htmlValidate(){
  var notValidHtml = document.getElementById("html-validator-structure").value;
  var validHtml = '';

  const badTags = new Map([
    ['<P> ', '<p>'],
    [' </ P>', '</p>'],
    [' </ P>', '</p>'],
    ['style = ', 'style='],
    ['height = ', 'height='],
    ['style = ', 'style='],
    ['src = ', 'src='],
    ['<H4> ', '<h4>'],
    [' </ h4>', '</h4>'],
    ['<Ul>', '<ul>'],
    ['</ Ul>', '</ul>'],
    ['<Li> ', '<li>'],
    [' </ Li>', '</li>'],
    ['& gt;', ''],
    [' </ span>', '</span>'],
    ['width =', 'width='],
    ['<H2> ', '<h2>'],
    [' </ h2>', '</h2>'],
    ['<H3> ', '<h3>'],
    ['https: //', 'https://'],
    [' = ', '='],
    ['= ', '='],
    [' =', '='],
    ['. com ', '.com'],
    [' -', '-'],
    ['lol', 'lal'],
    [' &amp;', ''],
    [' nbsp;', ''],
    [' </ strong>', '</strong>']
  ]);



  for (let pair of badTags.entries()) {

    while(notValidHtml.includes(pair[0])){
      notValidHtml = replaceAll(notValidHtml, pair[0], pair[1]);
      console.log(pair[0],pair[1]);
      console.log(notValidHtml);
    }
  }

  document.getElementById("html-validator-result").value = notValidHtml;
  navigator.clipboard.writeText(validHtml);

}

function escapeRegExp(str) {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

document.querySelectorAll('.html-validator-structure').forEach(item => {
    item.addEventListener('input', event => {
        htmlValidate();
    });
  });
  
  document.getElementById('html-validator-copy').addEventListener("click", function(event){
    event.preventDefault();
    let copyText = document.getElementById("html-validator-result").value;
    navigator.clipboard.writeText(copyText);
  });
  