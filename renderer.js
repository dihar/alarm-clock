// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

document.querySelector('alarm-app').addEventListener('resolve', onResolve);
function onResolve(){
	document.querySelector('.md-preloader').remove();
};