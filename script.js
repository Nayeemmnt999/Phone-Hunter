// const loadData = (searchText) => {
//     fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
//     .then(res => res.json())
//     .then(data => phoneData(data.data))
// }
const loadData = async(searchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    phoneData(data.data , dataLimit);
}
const phoneData = (phones , dataLimit)=> {
   
    const display = document.getElementById('display-data');
    display.textContent = '' ;

    const showMore = document.getElementById('show-more');
    if( dataLimit && phones.length > 10){
      phones = phones.slice(0, 10)
      
      showMore.classList.remove('d-none')
    }
    else{
      showMore.classList.add('d-none')
    }
    
    // not found massage 
    const noPhone = document.getElementById('not-found-message')
    if(phones.length === 0){
        noPhone.classList.remove('d-none')
    }
    else{
      noPhone.classList.add('d-none')
    }

    phones.forEach(phone =>{
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div id = "card" class="card p-4 ">
        <img src="${phone.image}" id = "card-img" class="card-img-top p-4" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <button class = "btn btn-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">Show more</button>
        </div>
      </div>
        `;
        display.appendChild(createDiv)
    })
    isLoader(false)
}

document.getElementById('search-btn').addEventListener('click', function(){
  processBtnSearch(10)
})
// for enter event 
document.getElementById('search-field').addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    processBtnSearch(10)
  }
})
// btn serach function 
const processBtnSearch = (dataLimit) => {
      isLoader(true)
  const searchField = document.getElementById('search-field');
  const searchValue = searchField.value;
  loadData(searchValue , dataLimit)
}

const isLoader = load => {
  const getLoader = document.getElementById('loder') ;
  if(load){
    getLoader.classList.remove('d-none')
  }
  else{
    getLoader.classList.add('d-none')
  }
}
document.getElementById('show-more').addEventListener('click', function(){
  processBtnSearch()
})




const showMoreDetailsApi = async id =>{
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  const res = await fetch(url);
  const data = await res.json();
  showMoreDetails(data.data);
}

const showMoreDetails = phone => {
  console.log(phone);
  const phoneTitle = document.getElementById('staticBackdropLabel');
  phoneTitle.innerText = phone

}

loadData('phone')