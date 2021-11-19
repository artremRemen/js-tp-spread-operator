const text = document.querySelector('.jump');
const textsplit = text.innerHTML.split('');
text.textContent=''
for (let i = 0; i < textsplit.length; i++) {
    let element = textsplit[i];
    let eSpan = document.createElement('span');
    if (element === ' ') {
        element = '\u00A0';
        console.log(element)
    }
    eSpan.textContent=element;
    text.appendChild(eSpan);
}