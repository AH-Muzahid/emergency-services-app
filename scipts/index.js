// Clear History Functionality

const callHistoryList = document.getElementById('callHistoryList');
callHistoryList.innerHTML = "";

document.getElementById("clearHistoryBtn").addEventListener("click", function () {
    callHistoryList.innerHTML = "";

});


// Call Button Functionality

let coinCount = 100;
const coinCountDisplay = document.getElementById('coin-count');
coinCountDisplay.textContent = coinCount;

// Recharge Functionality
function rechargeToast(message, onRecharge) {
    const toastContainer = document.createElement('div');
    toastContainer.id = 'toast-content';
    toastContainer.className = 'toast toast-center toast-middle flex items-center justify-center z-50';

    toastContainer.innerHTML = `
      <div class="alert alert-info flex flex-col items-center gap-2">
        <span>${message}</span>
        <button class="btn btn-success btn-sm mt-2" id="recharge-btn">Recharge Now</button>
      </div>
    `;
    document.body.appendChild(toastContainer);

     document.addEventListener('mousedown', function (e) {
        if (!document.getElementById('toast-content').contains(e.target)) {
            toastContainer.remove();
        }
    });
   toastContainer.querySelector('#recharge-btn').onclick = function () {
    if (typeof onRecharge === 'function') onRecharge();
    toastContainer.remove();
    return;
};
}

const callButtons = document.querySelectorAll(".call-btn");
callButtons.forEach(button => {
    button.addEventListener("click", function () {
        if (coinCount < 20) {
            rechargeToast(
                "❌ Insufficient coins! You need at least 20 coins to make a call. <br> 💰 Please recharge your account.",
                function () {
                    coinCount = 100;
                    coinCountDisplay.textContent = coinCount;
                    alert("✅ Recharge successful! You have been credited with 100 coins.");
                }
            );
            return;
        }

        const card = this.closest('.card');
        const serviceNameElem = card.querySelector('.service-name');
        const serviceNumberElem = card.querySelector('.service-number');
        const serviceName = serviceNameElem.textContent.trim();
        const serviceNumber = serviceNumberElem.textContent.trim();
        coinCount -= 20;
        coinCountDisplay.textContent = coinCount;
        alert(`📞 Calling ${serviceName}\nNumber: ${serviceNumber}\n\n✅ Call initiated successfully!\n💰 20 coins deducted. Remaining: ${coinCount} coins`)

        const callHistory = document.getElementById('callHistoryList');
        const newCall = document.createElement('div');
        newCall.className = 'flex justify-between items-center bg-[#FAFAFA] p-4 rounded-md';
        newCall.innerHTML = `
                        <div>
                            <p class="font-bold">${serviceName}</p>
                            <p class="text-sm text-gray-500">${serviceNumber}</p>
                        </div>
                        <span class="text-xs text-gray-400">${new Date().toLocaleTimeString()}</span>
                    `;
        callHistory.insertBefore(newCall, callHistory.firstChild);

    });
});



//   Heart Count Functionality
let heartCount = 0;
const heartCountDisplay = document.getElementById('heart-count');
const heartButtons = document.querySelectorAll(".heart-btn");

heartButtons.forEach(button => {
    button.addEventListener("click", function () {
        heartCount++;
        heartCountDisplay.textContent = heartCount;
    });
});

document.querySelectorAll('.heart-btn').forEach(heart => {
    heart.addEventListener('click', function () {
        this.classList.toggle('fas');
        this.classList.toggle('text-red-500');
    });
});




//   Copy Button Functionality
let copyCount = 0;
const copyCountDisplay = document.getElementById('copy-count');
const copyButtons = document.querySelectorAll(".copy-btn");

copyButtons.forEach(button => {
    button.addEventListener("click", function () {
        copyCount++;
        copyCountDisplay.textContent = copyCount;

        const card = this.closest('.card');
        const serviceNumberElem = card.querySelector('.service-number');
        const serviceNumber = serviceNumberElem.textContent.trim();
        navigator.clipboard.writeText(serviceNumber);
        alert(`Copy to Clipboard :  ${serviceNumber}`);

        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied';
        this.classList.add('bg-green-100', 'text-green-600');

        setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.remove('bg-green-100', 'text-green-600');
        }, 2000);
    });
});