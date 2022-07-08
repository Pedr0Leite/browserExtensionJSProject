// // chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
// //     console.log(msg);
// //   });

// //this sends info to background as soon as the popup is open/clicked
// var infoData = 'HANDSHAKE? DONT KNOW!'

// chrome.runtime.sendMessage({data:infoData},function(response){
	
// });

// // chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
// //     document.getElementById("first").innerHTML = 'addListener';
// //     // document.getElementById("second").innerHTML = response;
    
// // });

// async function fetchData() {
//     const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
//     const record=await res.json();
//     // document.getElementById("first").innerHTML = record.data[0].areaName;
//     $("#first").text(record.data[0].areaName);
//     $("h3").append('ADD');
// }
// fetchData();

chrome.runtime.sendMessage({type: 'from_popup'}, (response) => {
    // do stuff with response (which will be the value of messageQueue
    // sent from background.js).
        $("#first").text(response);
        // $("h3").append(response);
        // $("#textArea").append(response);
  });