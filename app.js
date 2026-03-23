(function () {
  console.log("✅ JS loaded from Cloudflare Pages");
 
  document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM ready");
 
    const div = document.createElement("div");
    div.innerText = "JS loaded successfully ✅";
    div.style.padding = "10px";
    div.style.background = "#e6ffe6";
 
    document.body.appendChild(div);
  });
})();
