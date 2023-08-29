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
butInstall.addEventListener('click', async () => {
    if (vectorPrompt) {
        vectorPrompt.prompt();

        const result = await vectorPrompt.userChoice;
        if (result.outcome === 'accepted') {
            console.log('User accepted the installation prompt.');
            } else {
            console.log('User dismissed the installation prompt.');
            }
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App is installed.');
});
