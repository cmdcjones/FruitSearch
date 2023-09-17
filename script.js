const form = document.querySelector("#searchDiv");
const inputElement = form.querySelector("input");
const dropdownElement = form.querySelector("#resultsDropdown")


const results = ['Apple', 'Banana', 'Strawberry', 'Kiwi', 'Grape', 'Mango',
'Lemon', 'Papaya', 'Orange', 'Peach', 'Grapefruit', 'Tomato'];

const Search = () => {
    const searchTerm = inputElement.value.toLowerCase();
    const filteredResults = results.filter(fruit => fruit.toLowerCase().includes(searchTerm));

    dropdownElement.innerHTML = '';

    filteredResults.forEach(fruit => {
        const listItem = document.createElement('div');
        listItem.textContent = fruit;
        listItem.classList.add('dropdown-item');

        listItem.addEventListener('click', () => {
            inputElement.value = fruit;
            dropdownElement.innerHTML = '';
        });

        dropdownElement.appendChild(listItem);

    if (filteredResults.length > 0) {
        dropdownElement.style.display = 'block';
    } else {
        dropdownElement.style.display = 'none';
    }
    });

    console.log(filteredResults);
}

const theEvent = inputElement.addEventListener('input', function(e){
    Search();
    console.log(e);
});

document.addEventListener('click', function(e) {
    if (!form.contains(e.target)) {
        dropdownElement.style.display = 'none';
    }
});

