let adTodo = document.getElementById('adTodo');
let todoconatainer = document.getElementById('todoconatainer');
let inputField = document.getElementById('inputField');

adTodo.addEventListener('click',function(){

var paragraph = document.createElement('p')
paragraph.classList.add('paragraph-styling');
paragraph.innerText = inputField.value;
todoconatainer.appendChild(paragraph);
inputField.value="";
paragraph.addEventListener('click' , function(){
    paragraph.style.textDecoration="line-through"
})
  paragraph.addEventListener('dblclick' , function(){
    todoconatainer.removeChild(paragraph);
})

})