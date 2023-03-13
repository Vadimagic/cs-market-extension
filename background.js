chrome.action.disable()

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	console.log(1)
	if (changeInfo.status === "loading") {
		console.log(2)
		console.log(tab.url)
		console.log(
			tab.url.includes("https://steamcommunity.com/market/listings/730")
		)
		if (tab.url.includes("https://steamcommunity.com/market/listings/730")) {
			console.log(3)
			chrome.scripting.insertCSS(
				{
					files: ["./style.css"],
					target: {
						tabId,
					},
				},
				() => {
					console.log("Inserted")
				}
			)
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
