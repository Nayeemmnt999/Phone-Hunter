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
    phones = phones.slice(0, 20)
    const noPhone = document.getElementById('not-found-message')
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
      noPhone.classList.add('d-none')
    }
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
    isLoader(false)
}

document.getElementById('search-btn').addEventListener('click', function(){
  isLoader(true)
  const searchField = document.getElementById('search-field');
  const searchValue = searchField.value;
  loadData(searchValue) 
})

const isLoader = load => {
  const getLoader = document.getElementById('loder') ;
  if(load){
    getLoader.classList.remove('d-none')
  }
  else{
    getLoader.classList.add('d-none')
  }



}

loadData()