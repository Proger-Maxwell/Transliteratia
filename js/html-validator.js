
function htmlValidate(){
    alert('hi');
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
  