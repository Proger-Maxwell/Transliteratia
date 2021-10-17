
function copyElementToClipboard(text) {
  text[0].select();
  document.execCommand("copy");
}


function transliteriatia() {
  var strCode = document.getElementById("transliteriatia-code").value;
  var strName = document.getElementById("transliteriatia-name").value;
  var str = strCode + strName;
  var space = '-';
  var link = '';
  var transl = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'і': 'i', 'є': 'ye', 'ґ': 'g',
    'з': 'z', 'и': 'i', 'й': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
    'о': 'o', 'п': 'p', 'р': 'r','с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h',
    'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'sh','ъ': space,
    'ы': 'y', 'ь': space, 'э': 'e', 'ю': 'yu', 'я': 'ya'
  }
    if (str != ''){

      str = str.toLowerCase(); // в нижний регистр

      for (var i = 0; i < str.length; i++){
        if (/[А-Яа-яёЁЇїІіЄєҐґ]/.test(str.charAt(i))){ // заменяем символы на укр
          link += transl[str.charAt(i)];
        } else if (/[a-z0-9]/.test(str.charAt(i))){ // символы на анг. оставляем как есть
          link += str.charAt(i);
        } else {
          if (link.slice(-1) !== space) link += space; // прочие символы заменяем на space
        }
      }


      document.getElementById("transliteriatia-result").value = link;
      return link;
    }
}




document.querySelectorAll('.data').forEach(item => {
  item.addEventListener('input', event => {
    transliteriatia();
  });
});

document.getElementById("copy").addEventListener("click", function(event){
  event.preventDefault();
  copyElementToClipboard(transliteriatia());
  
});


// var area = document.getElementsByClassName("data");
// area.forEach(element => element.addEventListener('input'), transliteriatia());


