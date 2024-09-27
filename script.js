// script.js

document.getElementById('generate-card').addEventListener('click', function() {
  // Get user input from the form
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const division = document.getElementById('division').value;
  const officePhone = document.getElementById('office-phone').value;
  const mobilePhone = document.getElementById('mobile-phone').value;
  const email = document.getElementById('email').value;

  // Get selected image for the back of the card
  const selectedImage = document.getElementById('image-dropdown').value;
  const imageURL = `https://library.gov/images/${selectedImage}.jpg`;

  // Update the business card preview (Front Side)
  const cardPreview = document.getElementById('card-preview');
  cardPreview.innerHTML = `
    <div>
      <h3>${firstName} ${lastName}</h3>
      <p>Division: ${division}</p>
      <p>Office Phone: ${officePhone}</p>
      <p>Mobile Phone: ${mobilePhone}</p>
      <p>Email: ${email}</p>
    </div>
  `;

  // Generate QR Code for the back of the card
  const qrCodeContainer = document.getElementById('qr-code');
  qrCodeContainer.innerHTML = '';  // Clear previous QR code

  const qrCode = new QRCode(qrCodeContainer, {
    text: imageURL,
    width: 128,
    height: 128,
  });

  // Add the selected image to the preview
  cardPreview.innerHTML += `<div><img src="${imageURL}" alt="Selected Image" width="100"></div>`;
});
