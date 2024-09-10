'use strict';

import {restaurantModal, restaurantRow} from './components.js';
import {fetchData} from './utils.js';
import {apiURL} from './variables.js';

const target = document.querySelector('tbody');
const modal = document.querySelector('dialog');
const info = document.getElementById('info');
const closeModal = document.getElementById('close-modal');
const sodexoButton = document.getElementById('sodexo');
const compassButton = document.getElementById('compass');
const resetButtton = document.getElementById('reset');

let restaurants = [];

closeModal.addEventListener('click', () => {
  modal.close();
});

const fetchRestaurants = async () => {
  return await fetchData(apiURL);
};

const displayRestaurants = async (restaurants) => {
  try {
    target.innerHTML = '';

    console.log(restaurants);

    restaurants.sort((a, b) => a.name.localeCompare(b.name));

    restaurants.forEach((restaurant) => {
      if (restaurant) {
        const {_id} = restaurant;

        const row = restaurantRow(restaurant);

        row.addEventListener('click', async () => {
          try {
            modal.showModal();
            info.innerHTML = '<div>Ladataan...</div>';

            const highlights = document.querySelectorAll('.highlight');
            highlights.forEach((highlighted) => {
              highlighted.classList.remove('highlight');
            });
            row.classList.add('highlight');

            const menu = await fetchData(`${apiURL}/daily/${_id}/fi`);
            const restaurantHTML = restaurantModal(restaurant, menu);

            info.innerHTML = '';
            info.insertAdjacentHTML('beforeend', restaurantHTML);
          } catch (error) {
            console.log(error);
          }
        });
        target.append(row);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const filterRestaurants = (restaurants, company) => {
  try {
    return restaurants.filter((restaurant) => restaurant.company === company);
  } catch (error) {
    console.log(error);
  }
};

const handleFilterClick = async (event) => {
  const company = event.target.id === 'sodexo' ? 'Sodexo' : 'Compass Group';
  try {
    const filteredRestaurants = filterRestaurants(restaurants, company);
    displayRestaurants(filteredRestaurants);
  } catch (error) {
    console.log(error);
  }
};

const start = async () => {
  try {
    restaurants = await fetchRestaurants();
    displayRestaurants(restaurants);
  } catch (error) {
    console.log(error);
  }
};

sodexoButton.addEventListener('click', handleFilterClick);
compassButton.addEventListener('click', handleFilterClick);
resetButtton.addEventListener('click', start);

start();
