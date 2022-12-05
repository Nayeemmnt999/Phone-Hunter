// const loadData = (searchText) => {
//     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
//     .then(res => res.json())
//     .then(data => phoneData(data.data))
// }
const loadData = async(searchText) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    phoneData(data.data);
}
const phoneData = phones => {
   
    const display = document.getElementById('display-data');
    display.textContent = '' ;
    phones.forEach(phone =>{
        console.log(phone);
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div id = "card" class="card p-4 ">
        <img src="${phone.image}" id = "card-img" class="card-img-top p-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button class = "btn btn-primary">Buy Now </button>
        </div>
        
      </div>
        `;
        display.appendChild(createDiv)
    })
}

document.getElementById('search-btn').addEventListener('click', function(){
  const searchField = document.getElementById('search-field');
  const searchValue = searchField.value;
  loadData(searchValue) 
})

loadData()