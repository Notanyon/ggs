const sc_8_1_key = "jdwak"; // Replace with your actual key
const sc_8_2_key = ""; // Replace with your actual key
const sc_8_3_key = ""; // Replace with your actual key
const sc_8_4_key = ""; // Replace with your actual key
      function sc_8_1() {
        const keyInput = document.getElementById("keyInput").value;

        if (keyInput === sc_8_1_key) {
          alert("Key is valid!");
          
          // Do something else here if key is valid
        } else {
          alert("Invalid key!");
          location.reload();
          // Do something else here if key is invalid
        }
      }