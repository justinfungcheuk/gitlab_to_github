for (let button of document.querySelectorAll('.play-button')) {
    button.addEventListener('click', function() {
        if (button.classList.contains('pause-button')) {
            button.classList.remove('pause-button');
        } else {
            button.classList.add('pause-button');
        }
    });
}