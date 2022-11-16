document.title="Selector"
console.log(document.head)
document.getElementById('main-header').style.border='solid 1px black'
const A=document.getElementsByClassName('title')
console.log(A)
A[0].style.color="green"
A[0].style.fontWeight="bold"