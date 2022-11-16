/* var itemList=document.querySelector('#items')
console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='grey'
console.log(itemList.parentElement.parentElement) */

//parentElement
 var itemList=document.querySelector('#items')
/*console.log(itemList.parentElement)
itemList.parentElement.style.backgroundColor='grey'
console.log(itemList.parentElement.parentElement)
 */
//childNode
//console.log(itemList.childNodes)
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor="yellow"

//firstChild
/* console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hello 1" */

//Lastchild
/* console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hello 2" */

//nextSibling
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

//previousSibling
//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green'


//create element
//create div
var myDiv=document.createElement('div')

//Addclass
myDiv.className="hello"

//add atribute
myDiv.setAttribute('title','Hello Div')

//textnode
var myDivText=document.createTextNode('HEllo word')

//add text to div
myDiv.appendChild(myDivText)

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
myDiv.style.fontSize='30px'

container.insertBefore(myDiv,h1);

//add HEllo word before item List
var li=document.createElement('li')

var word=document.createTextNode('HEllo word');
li.appendChild(word)
var ul=document.getElementsByTagName('ul')
ul.appendChild(li);



