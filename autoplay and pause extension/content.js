chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "tabChanged") {
        // Check if the current tab is a YouTube page
        if (window.location.hostname.includes("youtube.com")) {
            // Pause or play all video and audio elements based on your logic
            const mediaElements = document.querySelectorAll("video, audio");
            if (document.hidden) {
                // Tab switched away, pause all media elements
                mediaElements.forEach(element => element.pause());
            } else {
                // Tab switched back, play all media elements
                mediaElements.forEach(element => element.play());
            }
        }
    }
});
