
function transliteriatia() {
  var strCode = document.getElementById("transliteriatia-code").value;
  var strName = document.getElementById("transliteriatia-name").value;
  var str;
  if(strCode && strName){str = strCode +' '+ strName;}else{str = strCode + strName;}
  
  var space = '-';
  var link = '';
  var transl = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'і': 'i', 'є': 'ye', 'ґ': 'g',
    'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
    'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
    'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
  };
    if (str != ''){

      str = str.toLowerCase();

      for (var i = 0; i < str.length; i++){
        if (/[А-Яа-яёЁЇїІіЄєҐґ]/.test(str.charAt(i))){
          link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ 
          link += str.charAt(i);
        } else {
          if (link.slice(-1) !== space){ link += space;} 
        }
      }

      var radio = document.getElementsByName('transliteriatia-adding');
      for(var a=0; a < radio.length; a++){
        if(radio[a].checked){
          link += radio[a].value;
        }
      }

      document.getElementById("transliteriatia-result").value = link;
      navigator.clipboard.writeText(link);
    }
}


document.querySelectorAll('.data').forEach(item => {
  item.addEventListener('input', event => {
    transliteriatia();
  });
});

document.querySelectorAll('.transliteriatia-radio').forEach(item => {
  item.addEventListener('input', event => {
    transliteriatia();
  });
});

document.getElementById("transliteriatia-copy").addEventListener("click", function(event){
  event.preventDefault();
  let copyText = document.getElementById("transliteriatia-result").value;
  navigator.clipboard.writeText(copyText);
});

document.getElementById("plusOne").addEventListener("click", function(event){
  event.preventDefault();
  let copyText = document.getElementById("transliteriatia-result").value;
  let arrayCopyText = copyText.split('-');
  let incriminal = Number(arrayCopyText.pop()) + 1;
  document.getElementById("transliteriatia-result").value = arrayCopyText.join('-')+'-'+incriminal;
  navigator.clipboard.writeText(arrayCopyText.join('-')+'-'+incriminal);
});




