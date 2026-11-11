document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.container');
    const anoBtn = document.getElementById('anoBtn');
    const neBtn = document.getElementById('neBtn');

    neBtn.addEventListener('mouseover', moveButton);
    neBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveButton();
    });

    function moveButton() {
        const offset = 20;

        const maxLeft = window.innerWidth - neBtn.offsetWidth - offset;
        const maxTop = window.innerHeight - neBtn.offsetHeight - offset;

        const randomLeft = Math.random() * maxLeft;
        const randomTop = Math.random() * maxTop;

        neBtn.style.position = 'fixed';
        neBtn.style.left = Math.max(offset, Math.min(randomLeft, maxLeft)) + 'px';
        neBtn.style.top = Math.max(offset, Math.min(randomTop, maxTop)) + 'px';
    }

    anoBtn.addEventListener('click', () => {
        mainContainer.innerHTML = '<h1>Hurá! Já tě miluju taky! ❤️</h1><p style="font-size: 5rem;">🎉🥳🎉</p>';
    });
});