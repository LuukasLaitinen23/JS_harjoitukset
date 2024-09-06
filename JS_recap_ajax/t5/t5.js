'use strict';

import {fetchData} from './fetchData.js';

const target = document.querySelector('tbody');
const modal = document.querySelector('dialog');
const info = document.getElementById('info');
const closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', function () {
  modal.close();
});

const apiURL = 'https://media1.edu.metropolia.fi/restaurant/api/v1/restaurants';

async function renderRestaurants() {
  const restaurants = await fetchData(apiURL);

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  for (const restaurant of restaurants) {
    if (restaurant) {
      const {_id} = restaurant;

      const name = document.createElement('td');
      name.innerText = restaurant.name;

      const address = document.createElement('td');
      address.innerText = restaurant.address;

      const row = document.createElement('tr');

      row.addEventListener('click', async () => {
        modal.showModal();
        info.innerHTML = '<div>Ladataa...</div>';

        const highlights = document.querySelectorAll('.highlight');
        for (const highlighted of highlights) {
          highlighted.classList.remove('highlight');
        }

        row.classList.add('highlight');

        const menu = await fetchData(`${apiURL}/daily/${_id}/fi`);
        let listHTML = '';

        for (const course of menu.courses) {
          const {name, price, diets} = course;
          listHTML += `
            <li>
              <h4>${name || 'ei ilmoitettu'}</h4>
              <p>Hinta: ${price || 'ei ilmoitettu '}</p>
              <p>Allergeenit: ${diets || 'ei ilmoitettu'}</p>
            </li>
            `;
        }
        const restaurantHTML = `
          <header>
            <h3>${restaurant.name}</h3>
            <p>${restaurant.company}</h3>
          </header>
          <address>
            ${restaurant.address} <br>
            ${restaurant.postalCode} ${restaurant.city} <br>
            ${restaurant.phone} <br>
          </address>
          <div>
              <h3>Päivän ruokalista</h3>
              <ul>
                ${listHTML}
              </ul>
            </div>
        `;
        info.innerHTML = '';
        info.insertAdjacentHTML('beforeend', restaurantHTML);
      });

      row.append(name, address);
      target.append(row);
    }
  }
}

renderRestaurants();
