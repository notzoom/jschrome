  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function(tab) {
    var action_url = "javascript:(function(){if(window.sq){window.sq.closed&&window.document.dispatchEvent(new Event('squirt.again'));}else{window.sq={};window.sq.userId='0414ac76-d792-4a5d-b809-4ae2b9b28010';s=document.createElement('script');s.src=location.protocol+'//1id.com/pic/www.squirt.io.needs.its.own.ssl.certificate/squirt.js';s.s=window.location.search;s.idx=s.s.indexOf('sq-dev');if(s.idx!=-1){s.ampIdx=s.s.indexOf('&',s.idx);s.host=s.s.substring(s.idx+7,s.ampIdx==-1?s.s.length:s.ampIdx);s.src='http://'+(s.host?s.host:'localhost')+':4000/bm/squirt.js';}document.body.appendChild(s);}})(); ";
    chrome.tabs.update(tab.id, {url: action_url});
  });
