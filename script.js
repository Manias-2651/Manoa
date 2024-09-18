async function fetchTrendingEvent() {
    const response = await fetch('https://api.example.com/trending'); // Remplacez par une API réelle
    const data = await response.json();
    return data[0].title; // Récupérer le titre de l'événement
}

async function updateSiteTitle() {
    const eventName = await fetchTrendingEvent();
    document.title = eventName; // Change le titre du site
    document.getElementById('site-name').innerText = `Événement du Jour : ${eventName}`;
}

// Initialisation
updateSiteTitle();