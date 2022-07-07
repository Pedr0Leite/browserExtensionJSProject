// //this will log in the browser console log
console.log('From foreground')

var test = '';
var test2 = '';

async function fetchData() {
    const res=await fetch ("https://app.surferseo.com/api/v1/locations");
    const record=await res.json();
    // test = record.data[0];

    // console.log('From foreground test :', test);
    console.log('From foreground test2 :', JSON.stringify(record));
}
fetchData();

// "content_scripts":[
//     {
//         "js": ["thirdParty/jquery-3.6.0.min.js","foreground.js"]
//     }
// ]