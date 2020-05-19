for (let button of document.querySelectorAll('.play-button')) {
    button.addEventListener('click', function() {
        // button.classList.remove('play-button');
        if (button.classList.contains('pause-button')) {
            button.classList.remove('pause-button');
        } else {
        button.classList.add('pause-button');
        // 如果button內的classList.containts有pause-button就移除pause-button, 否則就加入pause-button
        }
    })
}
