'use strict';

async function get() {
  const response = await fetch('https://reqres.in/api/users/1');
  const data = await response.json()
  console.log(data)
}

get()
