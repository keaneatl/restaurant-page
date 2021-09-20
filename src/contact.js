function contactTab(){

    const footer = document.querySelector('footer');
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contact');

    const contactDetails = document.createElement('ul');
    const phone = document.createElement('li');
    const spanCall = document.createElement('span');
    const callIcon = document.createElement('img');
    phone.classList.add('contactitems');
    contactDetails.classList.add('tabs');
    callIcon.src = "./images/call-svgrepo-com.svg";
    callIcon.classList.add('icons');
    spanCall.textContent = "987 654 321";
    phone.append(callIcon, spanCall);
    
    const address = document.createElement('li'); 
    const spanLoc = document.createElement('span');
    const locIcon = document.createElement('img');
    const locImg = document.createElement('img');
    address.classList.add('contactitems');
    locIcon.src = "./images/location-svgrepo-com.svg";
    locIcon.classList.add('icons');
    locImg.src = "./images/location.png";
    locImg.classList.add('map');
    spanLoc.textContent = "1103 Country Club Dr, Madera, CA 93638";
    address.append(locIcon, spanLoc);

    contactDetails.append(phone, address);
    contentContainer.append(contactDetails, locImg);
    footer.insertAdjacentElement('beforebegin', contentContainer);
    // document.body.append(contentContainer);
};

export { contactTab };