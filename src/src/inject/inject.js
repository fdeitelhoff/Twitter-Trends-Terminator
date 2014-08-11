/*
 * Searches for the 'module trends' class name, which is used for the Twitter trends div element.
 * If this div is found, it gets removed from the document DOM.
 *
 */
 
// Some magic string constants
var trendsClassName = 'module trends'
var whoToFollowClassName = 'module roaming-module wtf-module js-wtf-module'
 
chrome.storage.sync.get({
    trends: true,
    whoToFollow: false
}, function(items) {
    
	var trends = items.trends
	var whoToFollow = items.whoToFollow
	
	var trendsElement = document.getElementsByClassName(trendsClassName)
    var whoToFollowElement = document.getElementsByClassName(whoToFollowClassName)
	
	if (trendsElement.length == 1 && trends) {
        trendsElement[0].remove()
    }
	
    if (whoToFollowElement.length == 1 && whoToFollow) {
	    whoToFollowElement[0].remove()
    }
})