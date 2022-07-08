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
  if (message.type === 'from_content_script') {
      messageQueue.push(message);
    } else if (message.type === 'from_popup') {
    //   sendResponse(messageQueue[0]);
    fetchData().then(x =>{
        console.log('then fetch :', x);
        textToPopUp = x;
        return textToPopUp;
    }).then(sendResponse(textToPopUp));

    // sendResponse(textToPopUp);
    
}
});

async function fetchData() {
    let text = '';
    const res=await fetch ("https://app.surferseo.com/api/v1/locations");
    const record=await res.json();
    // test = record.data[0];

    // console.log('From contentScript test :', test);
    console.log('Inside Fetch :', record[1]);
    text = record[1];
    return text;
};
