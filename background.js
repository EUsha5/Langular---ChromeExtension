chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.onClicked.addListener(function(activeTab) {
    chrome.tabs
      .insertCSS(activeTab.id, { css: "extensions.css" })
      .executeScript(activeTab.id, {
        file: "langular.js"
      });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([
        {
          conditions: [
            new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {
                hostContains: ".dropbox.com"
              }
            })
          ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
        }
      ]);
    });
  });
});
