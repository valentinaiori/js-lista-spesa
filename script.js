
/*
Consegna:
Data una lista della spesa, stampare sulla pagina 
(anche brutalmente, basta che si vedano) gli elementi della lista 
individualmente con un ciclo while.
*/

const shoppingList = ['pomodoro', 'mozzarella', 'pasta', 'basilico', 'parmigiano','olio'];

//recupero container della lista della spesa
const container = document.getElementById('shopping-list-container');

const ul = document.createElement('ul');
container.appendChild(ul);

let i = 0;

while( i < shoppingList.length){
    
    const list = shoppingList[i]
    ul.innerHTML += `<li>${list}</li>` 
    
    console.log(shoppingList[i]); 
    i++;
}
