
const Link = document.getElementById('link');

const input = document.getElementById('input');
const btnShortenerLink = document.getElementById('btnShortenerLink');

const btnDomain1 = document.getElementById('btnDomain1');
const btnDomain2 = document.getElementById('btnDomain2');
const btnDomain3 = document.getElementById('btnDomain3');

btnShortenerLink.addEventListener('click', shortenerLink);

let count; 

btnDomain1.addEventListener('click', () => {count = 1});
btnDomain2.addEventListener('click', () => {count = 2});
btnDomain3.addEventListener('click', () => {count = 3});



async function shortenerLink() {
    let url = input.value;
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const data = await response.json();
    const {result} = data;

    if(count == 1) {
        Link.innerHTML = result.short_link;
        Link.href = result.full_short_link;
    }
    else if(count ==2) {
        Link.innerHTML = result.short_link2;
        Link.href = result.full_short_link2;
    }
    else {
        Link.innerHTML = result.short_link3;
        Link.href = result.full_short_link3;
    }

    
}

