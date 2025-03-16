const form = document.getElementById('mediaKitForm');
const generatedKit = document.getElementById('generatedKit');
const companyName = document.getElementById('companyName');
const companyDescription = document.getElementById('companyDescription');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');

// Get the elements where generated data will be displayed
const generatedCompanyName = document.getElementById('generatedCompanyName');
const generatedCompanyDescription = document.getElementById('generatedCompanyDescription');
const generatedContactName = document.getElementById('generatedContactName');
const generatedContactEmail = document.getElementById('generatedContactEmail');

// Listen for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page refresh on form submit

    // Get the values entered by the user
    const company = companyName.value;
    const description = companyDescription.value;
    const contact = contactName.value;
    const email = contactEmail.value;

    // Update the generated kit with the data
    generatedCompanyName.textContent = company;
    generatedCompanyDescription.textContent = description;
    generatedContactName.textContent = contact;
    generatedContactEmail.textContent = email;

    // Show the generated kit section and hide the form
    generatedKit.classList.remove('hidden');
    form.reset(); // Clear the form fields
});