// Call History Functionality


const callHistoryList = document.getElementById('callHistoryList');

document.getElementById("clearHistoryBtn").addEventListener("click", function() {
    callHistoryList.innerHTML = "";

  });






//   Heart Count Functionality
let heartCount = 0;
const heartCountDisplay = document.getElementById('heart-count');
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(button => {
    button.addEventListener("click", function() {
        heartCount++;
        heartCountDisplay.textContent = heartCount;
    });
});