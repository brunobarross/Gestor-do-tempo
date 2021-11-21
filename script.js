const wrapper = document.querySelector('.dashboard__wrapper-data');

let data;

const menuItems = document.querySelectorAll('.dashboard__wrapper-menu-nav li')

const arrayId = ['work', 'play', 'study', 'exercise', 'social', 'self'];



window.onload = function () {
    document.querySelector('#daily').click();
}



function getContent(event, title, timeframes, index) {
    event.preventDefault();
    if (event.target.textContent == 'Daily') {
        wrapper.innerHTML = '';
        return `
       <div class="dashboard__wrapper-data-item" id="work">
       <div class="card__background">
         <img src="images/icon-work.svg" />
       </div>
       <div class="card__text">
         <p>${title}</p>
         <h3>${timeframes.daily.current}hrs</h3>
         <span>Last Week - ${timeframes.daily.previous}hrs</span>
       </div>
     </div>
       `
    }

    if (event.target.textContent == 'Weekly') {
        wrapper.innerHTML = '';
        return `
       <div class="dashboard__wrapper-data-item" id="work">
       <div class="card__background">
         <img src="images/icon-work.svg" />
       </div>
       <div class="card__text">
         <p>${title}</p>
         <h3>${timeframes.weekly.current}hrs</h3>
         <span>Last Week - ${timeframes.weekly.previous}hrs</span>
       </div>
     </div>
       `
    }

    if (event.target.textContent == 'Monthly') {
        wrapper.innerHTML = '';
        return `
       <div class="dashboard__wrapper-data-item" id="work">
       <div class="card__background">
         <img src="images/icon-work.svg" />
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

    const mapData = data.map(({ title, timeframes }) => {
        return getContent(event, title, timeframes);
    })

    wrapper.innerHTML += mapData.join('');

}





menuItems.forEach((item) => {
    item.addEventListener("click", getData);
})



