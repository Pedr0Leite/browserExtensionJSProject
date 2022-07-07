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

// chrome.tabs.onActivated.addListener((tab) => {
//   chrome.tabs.get(tab.tabId, (current_tab_info) => {
//     if (tab.tabId) {
//       chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
//         console.log("Injected!");
//       });
//     }
//   });
// });

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

    chrome.tabs.onActivated.addListener((tab) => {
          chrome.tabs.get(tab.tabId, (current_tab_info) => {
            if (tab.tabId) {
                    chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
                                console.log("Foreground script Injected!");
                        });
            }
          });
        });