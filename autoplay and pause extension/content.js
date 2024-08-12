chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "tabChanged") {
      const mediaElements = document.querySelectorAll("video, audio");
      if (message.active) {
        // Play all media elements when the tab is active
        mediaElements.forEach(element => element.play());
      } else {
        // Pause all media elements when the tab is not active
        mediaElements.forEach(element => element.pause());
      }
    }
  });
  