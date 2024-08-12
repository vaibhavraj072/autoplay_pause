chrome.tabs.onActivated.addListener(activeInfo => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab.url.includes("youtube.com")) {
      chrome.tabs.sendMessage(tab.id, { action: "tabChanged", active: true });
    } else {
      chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
        tabs.forEach((ytab) => {
          chrome.tabs.sendMessage(ytab.id, { action: "tabChanged", active: false });
        });
      });
    }
  });
});
