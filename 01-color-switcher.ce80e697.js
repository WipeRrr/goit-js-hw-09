!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),a=null;function d(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){a=setInterval(d,1e3),t.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){n.disabled=!0,t.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.ce80e697.js.map