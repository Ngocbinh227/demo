function toggleHeart(button) {
    if (button.innerText === '❤️') {
        button.innerText = '🤍';
    } else {
        button.innerText = '❤️';
    }
}