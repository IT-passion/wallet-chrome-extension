// if you checked "fancy-settings" in extensionizr.com, uncomment this lines

// var settings = new Store("settings", {
//     "sample_setting": "This is how you use Store.js to remember values"
// });


//example of using a message handler from the inject scripts
chrome.runtime.onMessage.addListener ( (message) => {
	chrome.storage.local.get(["count"], (result) => {
        const count = result.count ? result.count++ : 1;
    	chrome.storage.local.set({count});
        console.log(count);
    });
});
