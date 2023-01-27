function calculateCarbonFootprint() {
    // Get input values
    var transportationMiles = document.getElementById("transportation_miles").value;
    var electricityConsumption = document.getElementById("electricity_consumption").value;
    var foodConsumption = document.getElementById("food_consumption").value;
    var housingType = document.getElementById("housing_type").value;
    var waste = document.getElementById("waste").value;
    var waterConsumption = document.getElementById("water_consumption").value;
    var purchases = document.getElementById("purchases").value;
    var eatingOut = document.getElementById("eating_out").checked;
  
    // Assign emissions per mile/kWh/kg for each category
    var transportationEmissions = transportationMiles * 0.27;
    var electricityEmissions = electricityConsumption * 0.43;
    var foodEmissions = foodConsumption * 3;
    var housingEmissions = housingType === "dormitory" ? 100 : 0;
    var wasteEmissions = waste * 0.45;
    var waterEmissions = waterConsumption * 0.09;
    var purchasesEmissions = purchases * 0.15;
