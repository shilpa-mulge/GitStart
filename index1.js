
const a=document.querySelectorAll("li")
a[1].style.color="green"
const odd=document.querySelectorAll("li:nth-child(odd)");
for(var i=0;i<odd.length;i++){
odd[i].style.backgroundColor="green"
}