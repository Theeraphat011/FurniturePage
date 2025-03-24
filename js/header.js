const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', () => {
    const Navbar = document.querySelector('#nav-left');
    Navbar.classList.toggle('active');
});

let titleArray = ['LOW CABINET', 'Credenza', 'Shelf Unit']; 
let i = 0, j = 0, del = false;

const type = () => {
    if (!del && j < titleArray[i].length) {
        j++;
        setTimeout(type, 100); 
    } else if (del && j > 0) {
        j--;
        setTimeout(type, 50);
    } else {
        del = !del;
        if (!del) i = (i + 1) % titleArray.length; 
        setTimeout(type, del ? 1000 : 200); 
    }

    document.getElementById('title-inner').textContent = titleArray[i].slice(0, j);
};

type();

