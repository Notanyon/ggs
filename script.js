const eng_8_1 = ""; // Replace with your actual key
const eng_8_2 = ""; // Replace with your actual key
const eng_8_3 = ""; // Replace with your actual key
const eng_8_4 = ""; // Replace with your actual key
      function engvk_8_1() {
        const keyInput = document.getElementById("keyInput").value;

        if (keyInput === eng_8_1) {
          alert("Key is valid!");
          // Do something else here if key is valid
        } else {
          alert("Invalid key!");
          reload();
          // Do something else here if key is invalid
        }
      }