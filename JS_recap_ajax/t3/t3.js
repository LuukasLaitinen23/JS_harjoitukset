const methods = ['GET', 'POST', 'PUT', 'DELETE'];

async function fetchAPI(method) {
  try {
    const response = await fetch('https://reqres.in/api/qwertyuiop', {
      method,
    });
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.log(error.message);
  }
}

for (const method of methods) {
  fetchAPI(method)
}
