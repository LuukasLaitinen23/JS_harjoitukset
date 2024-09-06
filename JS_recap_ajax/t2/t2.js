'use strict';

async function post() {
  const payload = {
    name: 'pekka',
    job: 'web developer',
  };
  const response = await fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  console.log(data);
}

post()
