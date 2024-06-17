// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

let id = 0;

// by using an event listener, on click it will create a new entry to the table.
document.getElementById('create').addEventListener('click', () => {//something will happen when the button is clicked. the id 'create' pertains to the create button in the html file
    let table = document.getElementById('list');//reference to the table
    let row = table.insertRow(1);//call  table and insert row. 0 is the header row so I need to set it to 1 which is the second row
    row.setAttribute('id', `item-${id}`);// each row will get an new id and id - integer
    row.insertCell(0).innerHTML = document.getElementById('concert').value;// it's 0 oriented so the first one will be 0. cell or column where the value will go
    row.insertCell(1).innerHTML = document.getElementById('concert-date').value;
    row.insertCell(2).innerHTML = document.getElementById('concert-date-time').value;
    row.insertCell(3).innerHTML = document.getElementById('concert-venue').value;
    row.insertCell(4).innerHTML = document.getElementById('venue-website').value;
    let action = row.insertCell(5);// at the end of the row
    action.appendChild(createDeleteButton(id++));// append a delete button. need id++ to create an id and increment the id by each submissions 
    document.getElementById('concert').value = '';// good user experience we set it to blank for all the values so it refreshes to a blank input space after each submission
    document.getElementById('concert-date').value = '';
    document.getElementById('concert-date-time').value = '';
    document.getElementById('concert-venue').value = '';
    document.getElementById('venue-website').value = '';
    console.log(`Creating row with id: item-${id}`);// logs to the console which item-id is being created
});

function createDeleteButton(id) {
    let button = document.createElement('button');
    button.className = 'btn btn-primary';// bootstrap attributes set on js and not html
    button.id = id;
    button.innerHTML = 'Delete';
    button.onclick = () => {// function that logs which item is being deleted
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
        //parentNode is a property of an HTML element that returns the element's parent node.
        // For a table row, the parent node is usually the <tbody>. 
        // removeChild is a method that removes a specified child element from the DOM.
        // Here, it's called on the parent node of the element to delete the specified child (which is elementToDelete).
    };
        return button;
    }


    document.body.style.backgroundColor = 'rgb(173, 216, 230)';// background color set to light blue with rgb numbers
