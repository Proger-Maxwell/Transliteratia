
function convertCase(){
  var caseText = document.getElementById("convert-case-text").value;
  var result = '';
  if(document.getElementById('normal').checked) {
    var caseTextArr = caseText.split('. ');
    caseTextArr.forEach(function(element, index) {
      caseTextArr[index] = toNormal(element);
    });
    result = caseTextArr.join('. ');

  }else if(document.getElementById('all-big').checked) {
    result = toBIG(caseText);

  }else if(document.getElementById('all-little').checked) {
    result = tolittle(caseText);
  }
  document.getElementById("convert-case-result").value = result;
  navigator.clipboard.writeText(result);
}



document.querySelectorAll('.convert-case-text').forEach(item => {
    item.addEventListener('input', event => {
        convertCase();
    });
});
  
document.getElementById('convert-case-copy').addEventListener("click", function(event){
  event.preventDefault();
  var copyText = document.getElementById("convert-case-result").value;
  navigator.clipboard.writeText(copyText);
});
  

function toNormal(text){
  text = tolittle(text);
  if(!text){return text;}
  return text[0].toUpperCase() + text.slice(1);
}

function toBIG(text){;
  text = text.toUpperCase();
  return text;
}

function tolittle(text){
  text = text.toLowerCase();
  return text;
}