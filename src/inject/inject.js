/*
 * Searches for the 'module trends' class name, which is used for the Twitter trends div element.
 * If this div is found, it gets removed from the document DOM.
 *
 */
 
var moduleTrends = document.getElementsByClassName('module trends')

if (moduleTrends.length == 1) {
    moduleTrends[0].remove()
}