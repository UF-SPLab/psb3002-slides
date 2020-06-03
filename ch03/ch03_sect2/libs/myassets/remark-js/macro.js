/* change font; div; svg for d3; random image; set float; set background effects; add iframe;*/

remark.macros.hello = function () {
  return 'hello, world!';
};

remark.macros.image = function(w, a) {
  var url = this;
  if (!a) a = 'image';
  return '<img src="' + url + '" style="width: ' + w + ';" alt="' + a + '" />';
};

remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.color = function (color) {
  return '<span style="color:' + color + '">' + this + '</span>'
};

remark.macros.textal = function (textal) {
  return '<span style="text-align:' + textal + '">' + this + '</span>'
};

remark.macros.hline = function (hline) {
  return "<html><div style='float:left'></div><hr color='#EB811B' size=1px width=720px></html>"
};

remark.macros.positionThis = function (top, left, deg, width) {
  var el = this;
  if (!deg) deg = '0';
  if (!width) width = '100%';
  return '<div style="position: relative; top:' + top + '!important; left:' + left +'!important; z-index:5; width: ' + width +'; opacity:1.0; -ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+ el +  '</div>';
};

remark.macros.positionShape = function (top, left, deg) {
  var url = this;
  return '<div style="position: absolute; top:' + top + '!important; left:' + left +'!important; z-index:3; opacity:0.75;-ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+'<img src="' + url + '" style="width: 75px;" />' + '</div>';
}; 

remark.macros.positionText = function (top, left, deg, z) {
  var text = this;
  return '<div style="position: absolute; top:' + top + '; left:' + left +'; z-index:'+z+'; opacity:0.75;-ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+ text + '</div>';
}; 

remark.macros.positionImage = function (top, left, deg, width) {
  var url = this;
  if (!deg) deg = '0';
  if (!width) width = '100%';
  return '<div style="position: absolute; top:' + top + '!important; left:' + left +'!important; z-index:1; opacity:1.0; -ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+'<img src="' + url + '" style="width: ' + width +';" />' + '</div>';
}; 

remark.macros.clo = function (top, left, deg, width) {
  var url = this;
  if (!top) top = '40%';
  if (!left) left = '10%';
  if (!deg) deg = '0';
  if (!width) width = '800px';
  return '<div style="position: absolute; top:' + top + '!important; left:' + left +'!important; z-index:1; opacity:1.0; -ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+'<img src="' + url + '" style="width: ' + width +';" />' + '</div>';
}; 

remark.macros.pllo = function (top, left, deg, width) {
  var url = this;
  if (!top) top = '40%';
  if (!left) left = '5%';
  if (!deg) deg = '0';
  if (!width) width = '450px';
  return '<div style="position: absolute; top:' + top + '!important; left:' + left +'!important; z-index:1; opacity:1.0; -ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+'<img src="' + url + '" style="width: ' + width +';" />' + '</div>';
}; 

remark.macros.prhi = function (top, left, deg, width) {
  var url = this;
  if (!top) top = '12%';
  if (!left) left = '50%';
  if (!deg) deg = '0';
  if (!width) width = '450px';
  return '<div style="position: absolute; top:' + top + '!important; left:' + left +'!important; z-index:1; opacity:1.0; -ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+'<img src="' + url + '" style="width: ' + width +';" />' + '</div>';
}; 

remark.macros.prlo = function (top, left, deg, width) {
  var url = this;
  if (!top) top = '50%';
  if (!left) left = '50%';
  if (!deg) deg = '0';
  if (!width) width = '450px';
  return '<div style="position: absolute; top:' + top + '!important; left:' + left +'!important; z-index:1; opacity:1.0; -ms-transform: tb-rl;-webkit-transform:  rotate(' + deg +');-moz-transform: rotate(' + deg +'); transform: :rotate(' + deg +');">'+'<img src="' + url + '" style="width: ' + width +';" />' + '</div>';
}; 

remark.macros.emoji = function (emoji) {
  return '<i class="em-svg em-' + emoji + '"></i>'
};

remark.macros.danger_em = function (danger_em) {
  return '<i class="em em-' + "![:random biohazard_sign, radioactive_sign, fire, lightning, zap, warning, skull_and_crossbones, no_entry_sign, scream]" + '"></i>'
};

remark.macros.cheer_em = function (cheer_em) {
  return '<i class="em em-' + "![:random 100, trophy, sunglasses, doughnut, cookie, gem, gift, star]" + '"></i>'
};

remark.macros.random = function () {
  // params are passed as function arguments: ["one", "of", "these", "words"]
  var i = Math.floor(Math.random() * arguments.length);
  return arguments[i];
};

remark.macros.upper = function () {
  // `this` is the value in the parenthesis, or undefined if left out
  return this.toUpperCase()
};

remark.macros.addupper = function () {
  return "![:upper](word)";
};

remark.macros.lower = function () {
  // `this` is the value in the parenthesis, or undefined if left out
  return this.toLowerCase()
};

remark.macros.header = function (header) {
  return '<div class="header">' + header + '</div>'
};

remark.macros.footer = function () {
  var ftstr = this;
  return "<div class='footer'><span> &emsp; PSB3002 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Physiological Psychology - " + ftstr + "</span></div>"
};