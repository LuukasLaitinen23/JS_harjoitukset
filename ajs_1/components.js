'use strict';

const restaurantRow = (restaurant) => {
  const {name, company, address} = restaurant;

  const nameTd = document.createElement('td');
  nameTd.innerText = name;

  const companyTd = document.createElement('td');
  companyTd.innerText = company;

  const addressTd = document.createElement('td');
  addressTd.innerText = address;

  const row = document.createElement('tr');
  row.append(nameTd, companyTd, addressTd);
  return row;
};

const restaurantModal = (restaurant, menu) => {
  const {name, company, address, city, phone, postalCode} = restaurant;
  const {courses} = menu;

  let menuHTML = '';

  courses.forEach(async (course) => {
    const {name, price, diets} = course;
    menuHTML += `
      <li>
        <h4>${name || 'ei ilmoitettu'}</h4>
        <p>Hinta: ${price || 'ei ilmoitettu '}</p>
        <p>Allergeenit: ${diets || 'ei ilmoitettu'}</p>
      </li>
    `;
  });

  const restaurantHTML = `
          <header>
            <h3>${name}</h3>
            <p>${company}</h3>
          </header>
          <address>
            ${address} <br>
            ${postalCode} ${city} <br>
            ${phone} <br>
          </address>
          <div>
            <h3>Päivän ruokalista</h3>
            <ul>
              ${menuHTML}
            </ul>
          </div>
        `;

  return restaurantHTML;
};

export {restaurantRow, restaurantModal};
