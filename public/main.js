
    var header = document.getElementById("navBar")
    var sticky = header.offsetTop;
    document.body.onscroll = function() {myFunction()}


function myFunction() {
console.log('called');
if(window.pageYOffset>=sticky){
   header.classList.add('first-active')
   
}else{
   header.classList.remove('first-active')
}
}
