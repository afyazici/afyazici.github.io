document.getElementById("search-button").addEventListener("click", function() {
   var searchTerm = document.getElementById("search-bar").value.toLowerCase();

   var machineElements = document.querySelectorAll(".Machines .Machines-box");

   var resultsFound = false; // Sonuç bulunup bulunmadığını kontrol etmek için bir değişken

   machineElements.forEach(function(machine) {
      var machineName = machine.querySelector("h3").textContent.toLowerCase();
      if (machineName.includes(searchTerm)) {
         machine.style.display = "block"; // Eşleşenleri göster
         resultsFound = true; // Sonuç bulunduğunu işaretlemek için
      } else {
         machine.style.display = "none"; // Eşleşmeyenleri gizle
      }
   });

   // Sonuç bulunmadıysa bir mesaj göster
   var noResultsMessage = document.getElementById("no-results-message");
   if (!resultsFound) {
      noResultsMessage.style.display = "block";
   } else {
      noResultsMessage.style.display = "none";
   }

   // Sonuçları yan yana koymak için aşağıdaki kodu ekleyin
   var visibleMachines = Array.from(machineElements).filter(function(machine) {
      return machine.style.display !== "none";
   });

   var machinesContainer = document.querySelector(".Machines");
   machinesContainer.innerHTML = "";

   visibleMachines.forEach(function(machine) {
      machinesContainer.appendChild(machine);
   });
});