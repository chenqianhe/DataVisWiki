!(function() {
  var url = window.location.href;
  if (!url.includes("datavis.wiki")) {
    document.getElementById("record_id").style.display = "none";
  }
})();