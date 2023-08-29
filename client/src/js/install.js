const butInstall = document.getElementById('buttonInstall');

let vectorPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// DONE
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    vectorPrompt = event;
    butInstall.style.display= 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
