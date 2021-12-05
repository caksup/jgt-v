/*!
 * HTML Scratch Card Script
 * Author: Cynoinfotech
 * Version 1.0.0
 */
(function(c,k,n,l){function d(a,b){this.element=a;this.lastPoint=this.isDrawing="";this._name="scratchCard";this._defaults=c.fn.scratchCard.defaults;this.options=c.extend({},this._defaults,b);this.init()}c.extend(d.prototype,{init:function(){this.buildElement();this.bindCanvas()},buildElement:function(){this.$element=c(this.element);this.$element.css({position:"relative",cursor:"pointer",width:this.options.width,height:this.options.height});this.options.inpopup&&this.bindCynoModal()},bindCynoModal:function(){this.$element.addClass("cyno-modal");
this.$element.cynoModal({autoTrigger:this.options.autoTrigger,triggerAfter:this.options.triggerAfter,triggerOn:this.options.triggerOn});this.$element.css({position:"absolute"})},bindCanvas:function(){this.$element.prepend('<canvas class="canvas" width="'+this.options.width+'" height="'+this.options.height+'" style="position: absolute;top: 0;z-index: 10;"></canvas>');this.initCanvas()},initCanvas:function(){var a=this;a.options.canvas=a.$element.find("canvas").get(0);a.options.ctx=a.options.canvas.getContext("2d");
var b=new Image,f=new Image;b.src=a.options.coverImage;f.src=a.options.brushImage;b.onload=function(){a.options.ctx.drawImage(b,0,0)};a.$element.find("canvas").on("mousedown touchstart."+a._name,function(b){a.isDrawing=!0;a.lastPoint=a.getMouse(b,a.options.canvas)});a.$element.find("canvas").on("mousemove touchmove."+a._name,function(b){if(a.isDrawing){b.preventDefault();b=a.getMouse(b,a.options.canvas);for(var m=a.distanceBetween(a.lastPoint,b),c=a.angleBetween(a.lastPoint,b),d,h,g=0;g<m;g++)d=a.lastPoint.x+
Math.sin(c)*g-25,h=a.lastPoint.y+Math.cos(c)*g-25,a.options.ctx.globalCompositeOperation="destination-out",a.options.ctx.drawImage(f,d,h);a.lastPoint=b;a.handlePercentage(a.getFilledInPixels(32),a.options.scratched)}});a.$element.find("canvas").on("mouseup touchend."+a._name,function(b){a.isDrawing=!1})},distanceBetween:function(a,b){return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))},angleBetween:function(a,b){return Math.atan2(b.x-a.x,b.y-a.y)},getFilledInPixels:function(a){if(!a||1>a)a=
1;for(var b=this.options.ctx.getImageData(0,0,this.options.canvas.width,this.options.canvas.height).data,f=b.length,c=f/a,e,d=e=0;d<f;d+=a)0===parseInt(b[d])&&e++;return Math.round(e/c*100)},getMouse:function(a,b){var c=0,d=0;if(b.offsetParent!==l){do c+=b.offsetLeft,d+=b.offsetTop;while(b=b.offsetParent)}if(this.hasTouch()){var e=a.originalEvent.touches[0];c=e.pageX-c;d=e.pageY-d}else c=a.pageX-c,d=a.pageY-d;return{x:c,y:d}},hasTouch:function(){return"ontouchstart"in k||0<navigator.maxTouchPoints||
0<navigator.msMaxTouchPoints},handlePercentage:function(a,b){(a||0)>b&&this.$element.find("canvas").fadeOut("slow")}});c.fn.scratchCard=function(a){this.each(function(){c.data(this,"plugin_scratchCard")||c.data(this,"plugin_scratchCard",new d(this,a))});return this};c.fn.scratchCard.defaults={width:"300",height:"300",scratched:"40",coverImage:"s/ekupon-jc-12-21.png",brushImage:"assets/images/brush.png",inpopup:!1,triggerOn:"",autoTrigger:!1,triggerAfter:5}})(jQuery,window,document);
