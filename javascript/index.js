// Reusable button

function button(name, id) {
  const buttons = document.getElementsByClassName(name);
  for (const btn of buttons) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let point = document.getElementById(id);
      let pointCount = parseInt(point.innerText);
      pointCount++;
      point.innerText = pointCount;

    });
  }
}


// Heart Button click

button("heart-btn", "heart-point");


// Call button click

const callBtn = document.getElementsByClassName("call-btn");
for (const btn of callBtn) {
    btn.addEventListener("click", function(e){
        e.preventDefault();

        const totalCoin = document.getElementById("coin")
        let finalCoin = parseInt(totalCoin.innerText)

        if(finalCoin >= 20) {
            
            const serviceName = btn.parentNode.parentNode.children[2].innerText
            const serviceNumber = btn.parentNode.parentNode.children[3].innerText
            alert(`📞 Calling ${serviceName} ${serviceNumber}....`)
            
            finalCoin -= 20; 
            totalCoin.innerText = finalCoin; 

            // History push
            const history = document.getElementById("history-section")
            let time = new Date().toLocaleTimeString()
            let newDiv = document.createElement('div')
            const serviceName1 = btn.parentNode.parentNode.children[1].innerText

            newDiv.innerHTML = `
                <div class="bg-[#fafafa] rounded-lg p-4 mt-4 flex justify-between items-center mb-2">
                    <div class="">
                        <h1 class="text-[18px]">${serviceName1}</h1>
                        <p class="text-[18px] text-[#5c5c5c]">${serviceNumber}</p>
                    </div>
                    <p>${time}</p>
                </div>
            `
            history.appendChild(newDiv)
        }
        else{
            alert(`❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।`)
        }

    })
}

// copy button click

button("copy-btn", "copy-point");
 
// copy number after clicking copy button
const buttons = document.getElementsByClassName("copy-btn");
  for (const btn of buttons) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      let copy = btn.parentNode.parentNode.children[3];
      let copyText =  navigator.clipboard.writeText(copy.innerText);
      alert(`নম্বর কপি হয়েছে : ${copy.innerText}`)
    });
  }


// cleat button

document.getElementById("clear-btn").addEventListener('click', function(e){
    e.preventDefault();
    let cardClear = document.getElementById("history-section");
    cardClear.innerText = '';
    
})