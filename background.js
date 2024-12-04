chrome.tabs.onActivated.addListener(async (activeInfo) => {
  const tab = await chrome.tabs.get(activeInfo.tabId);
  if (tab.url.includes("youtube.com")) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"]
      });
  }
});
