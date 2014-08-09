/*
 * Listens on the complete event of a tab reload and executes the inject.js script.
 *
 */
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
	chrome.tabs.executeScript(tab.id, {
	  file: "src/inject/inject.js"
	})
  }
})