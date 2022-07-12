// //this will log in the devTools console log
// let url = "";
// let popUpInfo = "";

// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
// console.log('message :', message);

// //   chrome.runtime.sendMessage({ data: 'info' }, function (response) {
// //     console.log('Response: ' + response)
// //   });

// });

// chrome.runtime.sendMessage({data:popUpInfo},function(response){
	
// });

chrome.tabs.onActivated.addListener((tab) => {
  chrome.tabs.get(tab.tabId, (current_tab_info) => {
    if (tab.tabId) {
      chrome.tabs.insertCSS(null, {file: "./mystyle.css"})
      chrome.tabs.executeScript(null, { file: "./contentScript.js" }, () => {
        console.log("Injected!");
      });
    }
  });
});

// // chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
// //     url = tabs[0].url;
// //     // use `url` here inside the callback because it's asynchronous!
// // });

// // chrome.browserAction.onClicked.addListener(function(tab){

// //     chrome.tabs.create({'url': chrome.extension.getURL('popup.html')},function(tab) {
// //         chrome.tabs.sendMessage(id, data, function (url) {
// //             console.log(url);
// //         });
// //    });
// //   })

    // chrome.tabs.onActivated.addListener((tab) => {
    //       chrome.tabs.get(tab.tabId, (current_tab_info) => {
    //         if (tab.tabId) {
    //                 chrome.tabs.executeScript(null, { file: "./contentScript.js" }, () => {
    //                             console.log("contentScript script Injected!");
    //                     });
    //         }
    //       });
    //     });


    const messageQueue = ['Title Here', 'content'];
    let textToPopUp = '';
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        // Arbitrary string allowing the background to distinguish
  // message types. You might also be able to determine this
  // from the `sender`.
  if(message.type == 'second'){

    
  }else if(message.type === 'from_content_script') {
    messageQueue.push(message);
    
  } else if (message.type === 'from_popup') {

      // sendResponse(messageQueue[0]);
    // fetchData().then(x =>{
    //     console.log('then fetch :', x);
    //     textToPopUp = x;
    //     return textToPopUp;
    //   }).then(()=>{

    //     sendResponse(textToPopUp)
    //   })
    fetchData().then((result)=> {
      textToPopUp = result.location.name;
      console.log('textToPopUp 0:', result);
      console.log('textToPopUp 1:', textToPopUp);
      return textToPopUp;
  });
  
  
}
  sendResponse(textToPopUp)
});


// async function fetchData() {
//     const res = await fetch ("https://app.surferseo.com/api/v1/locations");
//     const record = await res.json();
//     console.log('Inside Fetch :', record[1]);
//     return record[1];
// };

async function fetchData() {
  const rapidapi_key = process.env.API_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': rapidapi_key,
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

  const res = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Porto%2C%20Portugal', options);
  const record = await res.json();
  // console.log('record :', record);

  return record;

// 	res.then(response => {
//     console.log('Response 0: ' + response.json());
//     return response.json()})
// 	.then(response => {
//     console.log('Response 1: ' + response); 
//     return response})
// 	.catch(err => console.error(err));
};
