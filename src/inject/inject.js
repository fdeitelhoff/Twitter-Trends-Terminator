/*
 * Searches for the 'module trends' class name, which is used for the Twitter trends div element.
 * If this div is found, it gets removed from the document DOM.
 *
 */

chrome.storage.sync.get({
    removeTrends: true,
    removeFollowerSuggestions: false
}, function(items) {
    
	var removeTrends = items.removeTrends
	var removeFollowerSuggestions = items.removeFollowerSuggestions
	
	var moduleTrends = document.getElementsByClassName('module trends')
    var followerSuggestions = document.getElementsByClassName('dashboard dashboard-right')
	
	if (moduleTrends.length == 1 && removeTrends) {
        moduleTrends[0].remove()
    }
	
    if (followerSuggestions.length > 0 && removeFollowerSuggestions) {
	    followerSuggestions[0].childNodes[1].remove()
    }
})