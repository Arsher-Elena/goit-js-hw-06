document.querySelector('body').style.backgroundColor = '#eaf1fad0';
const inputRange = document.getElementById('font-size-control');
const textRef = document.getElementById('text');


function fontSizeControl(evt) {
    textRef.style.fontSize = evt.currentTarget.value + 'px';
}

inputRange.addEventListener('input', fontSizeControl);