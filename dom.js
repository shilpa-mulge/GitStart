var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var bef=document.getElementById('btn')
var inputType=document.createElement('input')
inputType.className='form-control mr-2';
inputType.id='item1'
form.insertBefore(inputType,bef)

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newItem2=document.getElementById('item1').value;
  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(newItem2));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  var editBtn=document.createElement('button')
editBtn.className='btn btn-danger btn-sm float-right delete';
editBtn.appendChild(document.createTextNode('edit'))

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn)

  // Append li to list
  itemList.appendChild(li);

  //Storing into LocalStorage
  localStorage.setItem('userInput',newItem)
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

//create edit button
 var list=document.getElementsByClassName('list-group-item')
for(var i=0;i<list.length;i++){
var editBtn=document.createElement('button')
editBtn.className='btn btn-danger btn-sm float-right delete';
editBtn.appendChild(document.createTextNode('edit'))
list[i].appendChild(editBtn)
} 

