chrome.tabs.onActivated.addListener(tab => {
  // Send a message to the content script when the tab changes
  chrome.tabs.sendMessage(tab.tabId, { action: "tabChanged" });
});
