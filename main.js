document.addEventListener("DOMContentLoaded", () => {
    const btnOn = document.getElementById('btn-on');
    const btnOff = document.getElementById('btn-off');
    const lightOn = document.getElementById('light-on');
    const lightOff = document.getElementById('light-off');
    btnOff.style.display = 'none';
    lightOn.style.display = 'none';

    btnOn.addEventListener('click', () => {
        btnOff.style.display = 'block';
        btnOn.style.display = 'none';
        lightOn.style.display = 'block';
        lightOff.style.display = 'none';
    });

    btnOff.addEventListener('click', () => {
        btnOn.style.display = 'block';
        btnOff.style.display = 'none';
        lightOn.style.display = 'none';
        lightOff.style.display = 'block';
    });
});