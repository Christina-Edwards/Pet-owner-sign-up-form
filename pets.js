const ownerList = document.getElementById("ownerList");

const card = document.createElement("div");
card.className = "card p-3 mb-2";
card.innerHTML = `
  <h5>${petOwner.name}</h5>
  <p><strong>Email:</strong> ${petOwner.email}</p>
  <p><strong>Phone:</strong> ${petOwner.phone}</p>
  <p><strong>Location:</strong> ${petOwner.city}, ${petOwner.zip}</p>
  <p><strong>Pet:</strong> ${petOwner.petName} (${petOwner.petType})</p>
`;

ownerList.appendChild(card);

