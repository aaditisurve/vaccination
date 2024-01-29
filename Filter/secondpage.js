

document.addEventListener("DOMContentLoaded", function() {
    const queryParams = new URLSearchParams(window.location.search);
    const hospitalName = queryParams.get("hospitalName");
    const childName = queryParams.get("childName");
    const age = queryParams.get("age");
    const vaccineName = queryParams.get("vaccineName");
    const vaccinePrice = queryParams.get("vaccinePrice");

    document.getElementById("hospitalName").value = hospitalName;
    document.getElementById("childName").value = childName;
    document.getElementById("age").value = age;
    document.getElementById("vaccineName").value = vaccineName;
    document.getElementById("vaccinePrice").value = `$${vaccinePrice}`;
});
