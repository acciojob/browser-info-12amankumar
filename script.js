//your JS code here. If required.
let data=document.getElementById("browser-info");
let browserName = navigator.appName;
            let version = navigator.appVersion;
            data.innerHTML = "You are using " + browserName + " version " + version;
