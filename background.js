var CSS='body{background: black; color: white;}div[class="_type_serif_title_medium pass_color_to_child_links"]{color:#df7272;}'
var enable = true;
//method to enable nightmode
function enableNightMode() {
	browser.tabs.insertCSS({code: CSS});
	enable = false;
}

//method to disable nightmode
function disableNightMode(){
	browser.tabs.removeCSS({code: CSS});
	enable = true;
}

//method to toggle mode
function toggleNightMode(tab){
	if(tab.url.indexOf("https://www.quora.com/")!=-1){
		if(enable){
			console.log("enabled");
			enableNightMode();
		}else{
			console.log("disbled");
			disableNightMode();
		}
	}
}

//when the browser tab is refreshed
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
	if(tab.url.indexOf("https://www.quora.com")!=-1){
		disableNightMode();
	}
});

//event handler when you click the button in the toolbar
browser.browserAction.onClicked.addListener(toggleNightMode);
