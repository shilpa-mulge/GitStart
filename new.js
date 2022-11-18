

//add HEllo word before item List

var itemList=document.querySelector('#items')
var w=document.createElement('h1')
var word=document.createTextNode('HEllo word');
w.appendChild(word)
var d=document.getElementById('main')
d.insertBefore(w,itemList)