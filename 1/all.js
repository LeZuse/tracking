(function() {
var oldonload = window.onload;
window.onload = function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('head')[0];
    s.appendChild(fbds);
    _fbq.loaded = true;
  }
  _fbq.push(['addPixelId', '734613796561703']);
  if(oldonload) {oldonload()};
};
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);


var google_conversion_id = 1003415762;
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
(function() {
var oldonload = window.onload;
window.onload = function() {
  var tag = document.createElement('script');
  // tag.src = '//www.googleadservices.com/pagead/conversion.js';
  tag.innerHTML = 'document.write(\'<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>\');';
  var s = document.getElementsByTagName('head')[0];
  // document.write('<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>');
  s.appendChild(tag);
  if(oldonload) {oldonload()};
};
})();


adroll_adv_id = "EN2QNXTGSNBBLKA4A6YGFV";
adroll_pix_id = "Z6Q5RNRMTRCVVAEW722SNF";
(function () {
var oldonload = window.onload;
window.onload = function(){
   __adroll_loaded=true;
   var scr = document.createElement("script");
   var host = (("https:" == document.location.protocol) ? "https://s.adroll.com" : "http://a.adroll.com");
   scr.setAttribute('async', 'true');
   scr.type = "text/javascript";
   scr.src = host + "/j/roundtrip.js";
   ((document.getElementsByTagName('head') || [null])[0] ||
    document.getElementsByTagName('script')[0].parentNode).appendChild(scr);
   if(oldonload) {oldonload()}};
}());
