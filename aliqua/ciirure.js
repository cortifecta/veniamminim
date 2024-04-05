const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('https://www.example.com    console.log(response.data);
    // Handle the response data
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle the error
  }
}

fetchData();
