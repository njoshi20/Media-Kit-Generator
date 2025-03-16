document.getElementById('mediaKitForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get values from form
    const brandName = document.getElementById('brandName').value;
    const brandDescription = document.getElementById('brandDescription').value;
    const brandLogo = document.getElementById('brandLogo').value;

    // Log the values to the console (this is just for testing)
    console.log('Brand Name:', brandName);
    console.log('Brand Description:', brandDescription);
    console.log('Brand Logo URL:', brandLogo);

    // Display the generated media kit (this will display below the form in the browser)
    const mediaKit = `
        <h2>Media Kit for ${brandName}</h2>
        <p><strong>Description:</strong> ${brandDescription}</p>
        <p><strong>Logo:</strong> <img src="${brandLogo}" alt="${brandName} Logo" style="max-width: 100px;"></p>
    `;
    document.body.innerHTML += mediaKit;
});