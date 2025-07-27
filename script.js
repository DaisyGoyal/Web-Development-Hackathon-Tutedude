
const suppliers = [
    { name: "FreshFarm Supplies", location: "Delhi", rating: 4.5, price: "₹500/kg Tomatoes" },
    { name: "Organic Goods", location: "Mumbai", rating: 4.2, price: "₹120/kg Onions" },
    { name: "Local Market Hub", location: "Kolkata", rating: 4.0, price: "₹80/kg Potatoes" },
    { name: "GreenLeaf Vendors", location: "Delhi", rating: 4.7, price: "₹90/kg Spinach" }
];

function displaySuppliers(list) {
    const container = document.getElementById("supplier-list");
    container.innerHTML = "";
    list.forEach(supplier => {
        const card = document.createElement("div");
        card.className = "supplier-card";
        card.innerHTML = `
            <h3>${supplier.name}</h3>
            <p><strong>Location:</strong> ${supplier.location}</p>
            <p><strong>Rating:</strong> ${supplier.rating}⭐</p>
            <p><strong>Price:</strong> ${supplier.price}</p>
            <button onclick="alert('Order placed with ${supplier.name}!')">Order Now</button>
        `;
        container.appendChild(card);
    });
}

function filterSuppliers() {
    const location = document.getElementById("location").value;
    if (location === "All") {
        displaySuppliers(suppliers);
    } else {
        const filtered = suppliers.filter(s => s.location === location);
        displaySuppliers(filtered);
    }
}

// Initial load
displaySuppliers(suppliers);
