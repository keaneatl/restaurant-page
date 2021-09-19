import { pageLoad, loadHeader } from './pageLoad';
import { shopTab } from './shop';
import { contactTab } from './contact';
import location from './location.png';
import restuarantLogo from './restaurant-logo.png';
import callIcon from './icons/call-svgrepo-com.svg';
import locIcon from './icons/location-svgrepo-com.svg';
import './styles.css';

// shopTab();
// pageLoad();
// contactTab();

const switchTab = (() => {
    loadHeader();
    pageLoad();

    // cache DOM
    const tabItems = Array.from(document.querySelectorAll('.tabitems'));

    // bind events
    tabItems[0].addEventListener('click', () => {
        const checkMenu = document.querySelector('.menu');
        const checkTab = document.querySelector('.contact');

       if (checkMenu !== null){
            checkMenu.remove();
            pageLoad();
        }
        else if (checkTab !== null){
            checkTab.remove();
            pageLoad();
        }
        return
    })
    tabItems[1].addEventListener('click', () => {
        const checkHome = document.querySelector('.content');
        const checkMenu = document.querySelector('.menu');
        const checkTab = document.querySelector('.contact');
        if (checkHome !== null){
            checkHome.remove();
            shopTab();
        } 
        else if (checkMenu !== null){
            checkMenu.remove();
            shopTab();
        }
        else if (checkTab !== null){
            checkTab.remove();
            shopTab();
        }
        return
    })

    tabItems[2].addEventListener('click', () => {
        const checkHome = document.querySelector('.content');
        const checkMenu = document.querySelector('.menu');
        const checkTab = document.querySelector('.contact');
        if (checkHome !== null){
            checkHome.remove();
            contactTab();
        } 
        else if (checkMenu !== null){
            checkMenu.remove();
            contactTab();
        }
        else if (checkTab !== null){
            checkTab.remove();
            contactTab();
        }
        return
    })
})();

