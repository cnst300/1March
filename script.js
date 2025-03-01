function createButterfly() {
    var butterflyContainer = document.createElement('div');
    butterflyContainer.style.position = 'absolute';
    butterflyContainer.style.top = '80%'; 
    butterflyContainer.style.left = '80%';
    butterflyContainer.style.transform = 'translate(-50%, -50%)'; // Aliniază elementul exact la mijlocul coordonatelor

    document.body.appendChild(butterflyContainer);

    lottie.loadAnimation({
        container: butterflyContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/f75a55bc-bbe7-40e1-a5a0-9169d23ac95d/LhPYPoNtEZ.json'
    });

    var butterflyContainer = document.createElement('div');
    butterflyContainer.style.position = 'absolute';
    butterflyContainer.style.top = "30%"; 
    butterflyContainer.style.left = '19%'; 
    butterflyContainer.style.transform = 'translate(-50%, -50%)'; // Aliniază elementul exact la mijlocul coordonatelor

    document.body.appendChild(butterflyContainer);

    lottie.loadAnimation({
        container: butterflyContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://lottie.host/f75a55bc-bbe7-40e1-a5a0-9169d23ac95d/LhPYPoNtEZ.json'
    });
}

    createButterfly();

