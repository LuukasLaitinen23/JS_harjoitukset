'use strict';

let div = document.getElementById('target');

function getCurrentDate() {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  let now = new Date();

  return now.toLocaleDateString('fi-FI', options);
}


let browserInfo = navigator.userAgent;
let osInfo = navigator.userAgentData.platform;
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;
let availWidth = window.screen.availWidth;
let availHeight = window.screen.availHeight;

div.innerHTML = `
  <p>Browser: ${browserInfo}</p>
  <p>Operating system: ${osInfo}</p>
  <p>Screen width: ${screenWidth}</p>
  <p>Screen height: ${screenHeight}</p>
  <p>Available width: ${availWidth}</p>
  <p>Available height: ${availHeight}</p>
  <p>Current date and time: ${getCurrentDate()}</p>
`;
