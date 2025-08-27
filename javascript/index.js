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

        // calling alert
        

        // reduce coin per call
        const totalCoin = document.getElementById("coin")
        let finalCoin = parseInt(totalCoin.innerText)
        if(finalCoin >= 20) {
            const serviceName = btn.parentNode.parentNode.children[2].innerText
            const serviceNumber = btn.parentNode.parentNode.children[3].innerText
            alert(`📞 Calling ${serviceName} ${serviceNumber}....`)
            
            finalCoin -= 20; 
            totalCoin.innerText = finalCoin; 
        }
        else{
            alert(`কল করার মত পর্যাপ্ত কয়েন নেই`)
        }

    })
}

// copy button click

button("copy-btn", "copy-point");
