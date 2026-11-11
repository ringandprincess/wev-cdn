// Published as m.js in the public repo ringandprincess/wev-cdn; the bookmark loads it.
// jsDelivr tells browsers to cache m.js for 7 days, so m.js itself never changes: it loads the real
// bundle (formai.js = dist/m.js) with an hourly ?v=, so an update reaches every phone within an hour.
(function () {
  var d = document, s = d.createElement('script'), t = window.trustedTypes;
  var u = 'https://cdn.jsdelivr.net/gh/ringandprincess/wev-cdn@main/formai.js?v=' + Math.floor(Date.now() / 3600000);
  s.src = t ? t.createPolicy('fl' + Date.now(), { createScriptURL: function (x) { return x; } }).createScriptURL(u) : u;
  d.body.appendChild(s);
})();
