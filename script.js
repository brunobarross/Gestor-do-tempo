const wrapper = document.querySelector('.dashboard__wrapper-data');

let data;



const menuItems = document.querySelectorAll('.dashboard__wrapper-menu-nav li')




window.onload = function () {
  document.querySelector('#daily').click();
}



function getContent(event, title, id, image, timeframes) {

  if (event.target.textContent == 'Diário') {
    wrapper.innerHTML = '';
    return `
       <div class="dashboard__wrapper-data-item" id="${id}">
       <div class="card__background">
         <img src="images/${image}.svg" />
       </div>
       <div class="card__text">
         <p>${title}</p>
         <h3>${timeframes.daily.current}hrs</h3>
         <span>Last Week - ${timeframes.daily.previous}hrs</span>
       </div>
     </div>
       `
  }

  if (event.target.textContent == 'Semanal') {
    wrapper.innerHTML = '';
    return `
       <div class="dashboard__wrapper-data-item" id="${id}">
       <div class="card__background">
         <img src="images/${image}.svg" />
       </div>
       <div class="card__text">
         <p>${title}</p>
         <h3>${timeframes.weekly.current}hrs</h3>
         <span>Last Week - ${timeframes.weekly.previous}hrs</span>
       </div>
     </div>
       `
  }

  if (event.target.textContent == 'Mensal') {
    wrapper.innerHTML = '';
    return `
       <div class="dashboard__wrapper-data-item" id="${id}">
       <div class="card__background">
         <img src="images/${image}.svg" />
       </div>
       <div class="card__text">
         <p>${title}</p>
         <h3>${timeframes.monthly.current}hrs</h3>
         <span>Last Week - ${timeframes.weekly.previous}hrs</span>
       </div>
     </div>
       `
  }
}






const getJson = async () => {
  const response = await fetch('./data.json');
  return response.json()
}

const getData = async (event) => {
  const data = await getJson();

  const mapData = data.map(({title, id, image, timeframes}) => {
    return getContent(event, title,id,image,timeframes);
  })

  wrapper.innerHTML += mapData.join('');

}





menuItems.forEach((item) => {
  item.addEventListener("click", getData);
})



