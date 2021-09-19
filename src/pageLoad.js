function loadHeader(){
    const headerContainer = document.createElement('header');
        const logoContainer = document.createElement('div');
        const logo = document.createElement('img');
        const logoDesc = document.createElement('span');
        const tabsContainer = document.createElement('ul');
        const homeTab = document.createElement('li');
        const shopTab = document.createElement('li');
        const contactTab = document.createElement('li');
        logo.src = "../src/restaurant-logo.png";

        // add styles
        homeTab.classList.add('tabitems');
        shopTab.classList.add('tabitems');
        contactTab.classList.add('tabitems');
        headerContainer.classList.add('header');
        logo.classList.add('logo');
        tabsContainer.classList.add('tabs');

        // add content
        logoDesc.textContent = 'Slamburger';
        homeTab.textContent = 'Home';
        shopTab.textContent = 'Shop';
        contactTab.textContent = 'Contact';

        // render
        logoContainer.append(logo, logoDesc);
        tabsContainer.append(homeTab, shopTab, contactTab);
        headerContainer.append(logoContainer, tabsContainer);
        document.body.append(headerContainer);
}

function pageLoad(){
    // create elements
    const contentContainer = document.createElement('div');
        const headLineContainer = document.createElement('div');
        const intro = document.createElement('p');
        const header = document.createElement('h1');
        const description = document.createElement('p');
        const thumbnail = document.createElement('img');
        const footer = document.createElement('footer');

    // add styles
        contentContainer.classList.add('content');
        headLineContainer.classList.add('headline');
        thumbnail.classList.add('thumbnail');
        
    // add content
        thumbnail.src = "../src/menu/thumbnail.png";
        intro.textContent = 'Welcome to the';
        header.textContent = 'BEST BURGER JOINT IN TOWN';
        description.textContent = 'Each burger is made from the freshest ingredients, from our organically grown cows. Each juicy bite will leave your mouth watering wanting more. Order now to experience the drip!';
        footer.textContent = 'Made by Keane Andre';

    // render
        headLineContainer.append(intro, header, description);
        contentContainer.append(headLineContainer, thumbnail);
        document.body.append(footer);
        footer.insertAdjacentElement('beforebegin', contentContainer);

};

export { pageLoad, loadHeader };