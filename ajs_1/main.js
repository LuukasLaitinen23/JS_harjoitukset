'use strict';

import {restaurantModal, restaurantRow} from './components.js';
import {fetchData} from './utils.js';
import {apiURL} from './variables.js';

const target = document.querySelector('tbody');
const modal = document.querySelector('dialog');
const info = document.getElementById('info');
const closeModal = document.getElementById('close-modal');

closeModal.addEventListener('click', () => {
  modal.close();
});

const renderRestaurants = async () => {
  const restaurants = await fetchData(apiURL);

  restaurants.sort((a, b) => a.name.localeCompare(b.name));

  for (const restaurant of restaurants) {
    if (restaurant) {
      const {_id} = restaurant;

      const row = restaurantRow(restaurant);

      row.addEventListener('click', async () => {
        modal.showModal();
        info.innerHTML = '<div>Ladataan...</div>';

        const highlights = document.querySelectorAll('.highlight');
        for (const highlighted of highlights) {
          highlighted.classList.remove('highlight');
        }
        row.classList.add('highlight');

        const menu = await fetchData(`${apiURL}/daily/${_id}/fi`);
        const restaurantHTML = restaurantModal(restaurant, menu);

        info.innerHTML = '';
        info.insertAdjacentHTML('beforeend', restaurantHTML);
      });
      target.append(row);
    }
  }
};

renderRestaurants();
