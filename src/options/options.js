function save_options() {
  
  var removeTrends = document.getElementById('remove-trends').checked;
  var removeFollowerSuggestions = document.getElementById('remove-follower-suggestions').checked;
  
  chrome.storage.sync.set({
    removeTrends: removeTrends,
    removeFollowerSuggestions: removeFollowerSuggestions
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    removeTrends: true,
    removeFollowerSuggestions: false
  }, function(items) {
    document.getElementById('remove-trends').checked = items.removeTrends;
    document.getElementById('remove-follower-suggestions').checked = items.removeFollowerSuggestions;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);