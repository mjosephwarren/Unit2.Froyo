function countFlavors() {
     // Get the flavors from the input form
    const flavorInput = document.getElementById("flavorInput").value;
     // Split the string into an array
    const flavorsArray = splitFlavorsArray(flavorInput);
     // Count the number of each flavor as an object
    const flavorCountObject = countFlavorOccurrences(flavorsArray);
  
    // Access the flavor counts in the table
    const table = document.getElementById("flavorsTable");
  
    // Add rows for each flavor count
    for (const flavor in flavorCountObject) {
        const row = table.insertRow();
        row.insertCell(0).innerHTML = flavor;
        row.insertCell(1).innerHTML = flavorCountObject[flavor];
    }
  
    // Display the flavor count in the console
    console.log("Count:");
    for (const flavor in flavorCountObject) {
      console.log(`${flavor}: ${flavorCountObject[flavor]}`);
    }
  }
  
  // Split the flavors into an array
  function splitFlavorsArray(flavorInput) {
    var flavorsArray = flavorInput.split(",");
    for (var i = 0; i < flavorsArray.length; i++) {
      flavorsArray[i] = flavorsArray[i].trim();
    }
    return flavorsArray;
  }  
  
  // Count the number of each flavors provided by the user
  function countFlavorOccurrences(flavorsArray) {
    const flavorCountObject = {};
  
    flavorsArray.forEach(function(flavor) {
      if (flavorCountObject[flavor]) {
        flavorCountObject[flavor]++;
      } else {
        flavorCountObject[flavor] = 1;
      }
    });
  
    return flavorCountObject;
  }
  