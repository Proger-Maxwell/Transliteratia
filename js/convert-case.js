
function convertCase(){
    alert('hi');
}



document.querySelectorAll('.convert-case-text').forEach(item => {
    item.addEventListener('input', event => {
        convertCase();
    });
  });
  
  document.getElementById('convert-case-copy').addEventListener("click", function(event){
    event.preventDefault();
    let copyText = document.getElementById("convert-case-result").value;
    navigator.clipboard.writeText(copyText);
  });
  