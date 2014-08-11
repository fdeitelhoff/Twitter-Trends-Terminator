function save_options() {
  
  var trends = document.getElementById('remove-trends').checked;
  var whoToFollow = document.getElementById('remove-follower-suggestions').checked;
  
  chrome.storage.sync.set({
    trends: trends,
    whoToFollow: whoToFollow
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
    trends: true,
    whoToFollow: false
  }, function(items) {
    document.getElementById('remove-trends').checked = items.trends;
    document.getElementById('remove-follower-suggestions').checked = items.whoToFollow;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);