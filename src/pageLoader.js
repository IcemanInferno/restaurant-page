function buildButton(id, text) {
    const button = document.createElement('button');
    button.textContent = text;
    button.setAttribute('id', id);
    return button;
}

function buildNav() {
    const nav = document.createElement('nav');
    
    const menuBtn = buildButton('menu-button', 'Menu');
    const contactBtn = buildButton('contact-button', 'Contact');

    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}


function pageLoader() {
    const content = document.getElementById('content');

    const header = document.createElement('h1');
    header.textContent = "The Log and the Axe";

    const description = document.createElement('p');
    description.textContent = `This bar and restaurant was built by founder Darren Loggins. 
                                After a long and eventful adventure involving dungeons and dragons he decided to settle down. 
                                Now this bar and restaurant is known throughout the land as a great place to have a drink and meal with friends.`;

    // const image = document.createElement('img');
    // image.src="../images/tavern.jpg";

    content.appendChild(header);
    content.appendChild(description);
    // content.appendChild(image);

    const nav = buildNav();
    content.appendChild(nav);

    const tabContent = document.createElement('div');
    tabContent.setAttribute('id', 'tab-content');
    content.appendChild(tabContent);

};


export { pageLoader };