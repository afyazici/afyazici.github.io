document.getElementById("search-button").addEventListener("click", function() {
   var searchTerm = document.getElementById("search-bar").value.toLowerCase();

   var machineElements = document.querySelectorAll(".Machines .Machines-box");

   machineElements.forEach(function(machine) {
      var machineName = machine.querySelector("h3").textContent.toLowerCase();
      if (machineName.includes(searchTerm)) {
         machine.style.display = "block"; // Eşleşenleri göster
      } else {
         machine.style.display = "none"; // Eşleşmeyenleri gizle
      }
   });
});