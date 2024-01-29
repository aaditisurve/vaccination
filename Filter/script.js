// Sample hospital data with name, prices for various vaccines, and available vaccines
const hospitals = [
    { 
        name: "Hospital A", 
        prices: {
            vaccineA: 50,
            vaccineB: 60,
            vaccineC: 70,
        },
        vaccines: ["vaccineA", "vaccineB", "vaccineC"],
    },
    { 
        name: "Hospital B", 
        prices: {
            vaccineA: 100,
            vaccineB: 110,
            vaccineC: 120,
        },
        vaccines: ["vaccineA", "vaccineB", "vaccineC"],
    },
    // Add more hospitals with pricing for different vaccines
];

function displayHospitals(hospitals) {
    const hospitalList = document.getElementById("hospitalList");
    hospitalList.innerHTML = "";

    hospitals.forEach((hospital) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = hospital.name;

        const vaccineName = document.createElement("td");
        const selectedVaccine = document.getElementById("vaccine").value;
        vaccineName.textContent = `${selectedVaccine}`;

        const priceCell = document.createElement("td");
        priceCell.textContent = `$${hospital.prices[selectedVaccine]}`;

        const actionCell = document.createElement("td");
        const selectButton = document.createElement("button");
        selectButton.textContent = "Select";
        selectButton.addEventListener("click", () => {
            selectHospital(hospital);
        });
        actionCell.appendChild(selectButton);

        row.appendChild(nameCell);
        row.appendChild(vaccineName);
        row.appendChild(priceCell);
        row.appendChild(actionCell);

        hospitalList.appendChild(row);
    });
}

function selectHospital(hospital) {
    const childName = prompt("Enter child's name:");
    const age = prompt("Enter child's age:");
    const selectedVaccine = document.getElementById("vaccine").value;

    // Construct the URL with query parameters
    const queryParams = new URLSearchParams({
        hospitalName: hospital.name,
        childName: childName,
        age: age,
        vaccineName: selectedVaccine,
        vaccinePrice: hospital.prices[selectedVaccine],
    });

    const redirectURL = `secondpage.html?${queryParams.toString()}`;

    // Redirect to the second page with the constructed URL
    window.location.href = redirectURL;
}

function filterHospitals() {
    const selectedPriceRange = document.getElementById("priceRange").value;
    const selectedVaccine = document.getElementById("vaccine").value;

    const [minPrice, maxPrice] = selectedPriceRange.split("-").map(Number);

    const filteredHospitals = hospitals.filter((hospital) => {
        const price = hospital.prices[selectedVaccine];
        return price >= minPrice && price <= maxPrice && hospital.vaccines.includes(selectedVaccine);
    });

    displayHospitals(filteredHospitals);
}

displayHospitals(hospitals);
