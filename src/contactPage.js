function buildContactPage() {
    const content = document.getElementById('tab-content');
    content.textContent = ''; // Clear previous
    
    const contactPage = document.createElement('div');

    const phoneTitle = document.createElement('h2');
    const phoneNumber = document.createElement('p');
    phoneTitle.textContent = "Phone";
    phoneNumber.textContent = "1215 7712 45";
    phoneTitle.appendChild(phoneNumber);

    const addressTitle = document.createElement('h2');
    const address = document.createElement('p');
    addressTitle.textContent = "Address";
    address.textContent = " 11 Stump Street, Neverwinter";
    addressTitle.appendChild(address);

    contactPage.appendChild(phoneTitle);
    contactPage.appendChild(addressTitle);

    content.appendChild(contactPage);
};

export{ buildContactPage };

