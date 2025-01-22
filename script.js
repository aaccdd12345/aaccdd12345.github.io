async function getApiData() {
  try {
    // Use your actual Render API URL here:
    const response = await fetch('https://my-render-api.onrender.com/api');
    const data = await response.json();

    // Update the DOM
    document.getElementById('dynamic-content').textContent = data.message || 'No data found.';
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('dynamic-content').textContent = 'Error fetching data!';
  }
}

// Fetch the API data when the page loads
window.onload = getApiData;
