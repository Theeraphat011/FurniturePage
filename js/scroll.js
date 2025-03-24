const scrollFade = (parent, element, className, offSetTop, offSetBottom = 0) => {
    const windowHeight = window.innerHeight;
    const triggerTop = parent.getBoundingClientRect().top;
    const triggerBottom = parent.getBoundingClientRect().bottom;

    if (triggerTop <= windowHeight - offSetTop && triggerBottom  >= offSetBottom) {
        element.classList.add(className);
    } else {
        element.classList.remove(className);
    }
};

const newStore = document.querySelector('#new-store');
const boxStoreLeft = document.querySelector('#store-left');
const boxStoreRight = document.querySelector('#store-right');

const trending = document.querySelector('#trending');
const trendTitle = document.querySelector('#trend-title');
const trendImg = document.querySelector('#trend-img');

document.addEventListener('scroll', () => {
    scrollFade(newStore, boxStoreLeft, 'animateleft', 100);
    scrollFade(newStore, boxStoreRight, 'animateright', 100); 
    scrollFade(trending, trendTitle, 'animateright', 100); 
    scrollFade(trending, trendImg, 'animateleft', 100); 
});
