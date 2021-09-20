function shopTab(){
    const footer = document.querySelector('footer');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('menu');
    
    const disclaimer = document.createElement('p');
    disclaimer.textContent = 'DISCLAIMER: None of the items, nor pictures here belong to me, nor are actually for sale, they are just used as placeholder pictures for this page';

    // Item #1
    const origSlam = document.createElement('div');
    const osHeader = document.createElement('h1');
    const osDesc = document.createElement('p');
    const osThumbnail = document.createElement('img');
    origSlam.classList.add('headline');
    osThumbnail.classList.add('thumbnail')
    osThumbnail.src = "./images/menu/thumbnail.png";
    osHeader.textContent = "Original Slamburger";
    osDesc.textContent = "$6.99";
    origSlam.append(osHeader, osDesc, osThumbnail);

    const tripleSlam = document.createElement('div');
    const tsHeader = document.createElement('h1');
    const tsDesc = document.createElement('p');
    const tsThumbnail = document.createElement('img');
    tripleSlam.classList.add('headline');
    tsThumbnail.classList.add('thumbnail')
    tsThumbnail.src = "./images/menu/TripleDownDecker.png";
    tsHeader.textContent = "Triple Slamburger";
    tsDesc.textContent = "$10.99";
    tripleSlam.append(tsHeader, tsDesc, tsThumbnail);

    const crispyChicken = document.createElement('div');
    const ccHeader = document.createElement('h1');
    const ccDesc = document.createElement('p');
    const ccThumbnail = document.createElement('img');
    crispyChicken.classList.add('headline');
    ccThumbnail.classList.add('thumbnail')
    ccThumbnail.src = "./images/menu/CrispyChicken.png";
    ccHeader.textContent = "Crispy Chicken SB";
    ccDesc.textContent = "$7.99";
    crispyChicken.append(ccHeader, ccDesc, ccThumbnail);

    const fishWich = document.createElement('div');
    const fwHeader = document.createElement('h1');
    const fwDesc = document.createElement('p');
    const fwThumbnail = document.createElement('img');
    fishWich.classList.add('headline');
    fwThumbnail.classList.add('thumbnail')
    fwThumbnail.src = "./images/menu/FishWich.png";
    fwHeader.textContent = "Fish n Wich";
    fwDesc.textContent = "$5.99";
    fishWich.append(fwHeader, fwDesc, fwThumbnail);

    const signatureFries = document.createElement('div');
    const sfHeader = document.createElement('h1');
    const sfDesc = document.createElement('p');
    const sfThumbnail = document.createElement('img');
    signatureFries.classList.add('headline');
    sfThumbnail.classList.add('thumbnail')
    sfThumbnail.src = "./images/menu/SignatureFries.png";
    sfHeader.textContent = "Signature Fries";
    sfDesc.textContent = "$2.99";
    signatureFries.append(sfHeader, sfDesc, sfThumbnail);

    const curlyFries = document.createElement('div');
    const cfHeader = document.createElement('h1');
    const cfDesc = document.createElement('p');
    const cfThumbnail = document.createElement('img');
    curlyFries.classList.add('headline');
    cfThumbnail.classList.add('thumbnail')
    cfThumbnail.src = "./images/menu/CurlyFries.png";
    cfHeader.textContent = "Curly Fries";
    cfDesc.textContent = "$3.99";
    curlyFries.append(cfHeader, cfDesc, cfThumbnail);

    // Item #7
    const nuggets = document.createElement('div');
    const nHeader = document.createElement('h1');
    const nDesc = document.createElement('p');
    const nThumbnail = document.createElement('img');
    nuggets.classList.add('headline');
    nThumbnail.classList.add('thumbnail')
    nThumbnail.src = "./images/menu/Nuggets.png";
    nHeader.textContent = "Slamnuggs (6pcs)";
    nDesc.textContent = "$3.50";
    nuggets.append(nHeader, nDesc, nThumbnail);

    // render
    contentContainer.append(disclaimer, origSlam, tripleSlam, crispyChicken, fishWich, signatureFries, curlyFries, nuggets);
    footer.insertAdjacentElement('beforebegin', contentContainer);
    // document.body.append(contentContainer);

};

export { shopTab }