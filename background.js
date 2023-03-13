chrome.action.disable()

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === "loading") {
		if (tab.url.includes("https://steamcommunity.com/market/listings/730")) {
			chrome.scripting.insertCSS({
				files: ["./style.css"],
				target: {
					tabId,
				},
			})
		}
	}
	if (changeInfo.status === "complete") {
		if (tab.url.includes("https://steamcommunity.com/market/listings/730")) {
			chrome.action.enable(tabId)
		} else {
			chrome.action.disable(tabId)
		}
	}
})
