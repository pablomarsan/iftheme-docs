/*
	jQuery ColorBox v1.3.32 - 2013-01-31
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var h=t.createElement(i);return o&&(h.id=U+o),n&&(h.style.cssText=n),e(h)}function n(e){var t=b.length,i=(A+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?T.width():T.height())/100:1)*parseInt(e,10))}function l(e){return _.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)}function r(){var t,i=e.data(N,J);null==i?(_=e.extend({},$),console&&console.log&&console.log("Error: cboxElement missing settings object")):_=e.extend({},i);for(t in _)e.isFunction(_[t])&&"on"!==t.slice(0,2)&&(_[t]=_[t].call(N));_.rel=_.rel||N.rel||e(N).data("rel")||"nofollow",_.href=_.href||e(N).attr("href"),_.title=_.title||N.title,"string"==typeof _.href&&(_.href=e.trim(_.href))}function s(i,o){e(t).trigger(i),rt.trigger(i),e.isFunction(o)&&o.call(N)}function a(){var e,t,i,o,n,h=U+"Slideshow_",l="click."+U;_.slideshow&&b[1]?(t=function(){clearTimeout(e)},i=function(){(_.loop||b[A+1])&&(e=setTimeout(G.next,_.slideshowSpeed))},o=function(){I.html(_.slideshowStop).unbind(l).one(l,n),rt.bind(et,i).bind(Z,t).bind(tt,n),p.removeClass(h+"off").addClass(h+"on")},n=function(){t(),rt.unbind(et,i).unbind(Z,t).unbind(tt,n),I.html(_.slideshowStart).unbind(l).one(l,function(){G.next(),o()}),p.removeClass(h+"on").addClass(h+"off")},_.slideshowAuto?o():n()):p.removeClass(h+"off "+h+"on")}function d(t){j||(N=t,r(),b=e(N),A=0,"nofollow"!==_.rel&&(b=e("."+V).filter(function(){var t,i=e.data(this,J);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===_.rel}),A=b.index(N),-1===A&&(b=b.add(N),A=b.length-1)),P||(P=R=!0,p.css({visibility:"hidden",display:"block"}),C=o(st,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(w),K=g.height()+x.height()+w.outerHeight(!0)-w.height(),z=y.width()+v.width()+w.outerWidth(!0)-w.width(),D=C.outerHeight(!0),B=C.outerWidth(!0),_.returnFocus&&(e(N).blur(),rt.one(it,function(){e(N).focus()})),f.css({opacity:parseFloat(_.opacity),cursor:_.overlayClose?"pointer":"auto",visibility:"visible"}).show(),_.w=h(_.initialWidth,"x"),_.h=h(_.initialHeight,"y"),G.position(),ht&&T.bind("resize."+lt+" scroll."+lt,function(){f.css({width:T.width(),height:T.height(),top:T.scrollTop(),left:T.scrollLeft()})}).trigger("resize."+lt),a(),s(Y,_.onOpen),S.add(H).hide(),F.html(_.close).show()),G.load(!0))}function c(){!p&&t.body&&(X=!1,T=e(i),p=o(st).attr({id:J,"class":nt?U+(ht?"IE6":"IE"):""}).hide(),f=o(st,"Overlay",ht?"position:absolute":"").hide(),W=o(st,"LoadingOverlay").add(o(st,"LoadingGraphic")),m=o(st,"Wrapper"),w=o(st,"Content").append(H=o(st,"Title"),E=o(st,"Current"),L=o(st,"Next"),M=o(st,"Previous"),I=o(st,"Slideshow"),F=o(st,"Close")),m.append(o(st).append(o(st,"TopLeft"),g=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(y=o(st,"MiddleLeft"),w,v=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),x=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),k=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),S=L.add(M).add(E).add(I),e(t.body).append(f,p.append(m,k)))}function u(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),d(this))}return p?(X||(X=!0,L.click(function(){G.next()}),M.click(function(){G.prev()}),F.click(function(){G.close()}),f.click(function(){_.overlayClose&&G.close()}),e(t).bind("keydown."+U,function(e){var t=e.keyCode;P&&_.escKey&&27===t&&(e.preventDefault(),G.close()),P&&_.arrowKey&&b[1]&&(37===t?(e.preventDefault(),M.click()):39===t&&(e.preventDefault(),L.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+U,"."+V,i):e("."+V).live("click."+U,i)),!0):!1}var f,p,m,w,g,y,v,x,b,T,C,k,W,H,E,I,L,M,F,S,_,K,z,D,B,N,A,O,P,R,j,q,G,Q,X,$={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},J="colorbox",U="cbox",V=U+"Element",Y=U+"_open",Z=U+"_load",et=U+"_complete",tt=U+"_cleanup",it=U+"_closed",ot=U+"_purge",nt=!e.support.leadingWhitespace,ht=nt&&!i.XMLHttpRequest,lt=U+"_IE6",rt=e({}),st="div";e.colorbox||(e(c),G=e.fn[J]=e[J]=function(t,i){var o=this;if(t=t||{},c(),u()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,J,e.extend({},e.data(this,J)||$,t))}).addClass(V),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&d(o[0])}return o},G.position=function(e,t){function i(e){g[0].style.width=x[0].style.width=w[0].style.width=parseInt(e.style.width,10)-z+"px",w[0].style.height=y[0].style.height=v[0].style.height=parseInt(e.style.height,10)-K+"px"}var o,n,l,r=0,s=0,a=p.offset();T.unbind("resize."+U),p.css({top:-9e4,left:-9e4}),n=T.scrollTop(),l=T.scrollLeft(),_.fixed&&!ht?(a.top-=n,a.left-=l,p.css({position:"fixed"})):(r=n,s=l,p.css({position:"absolute"})),s+=_.right!==!1?Math.max(T.width()-_.w-B-z-h(_.right,"x"),0):_.left!==!1?h(_.left,"x"):Math.round(Math.max(T.width()-_.w-B-z,0)/2),r+=_.bottom!==!1?Math.max(T.height()-_.h-D-K-h(_.bottom,"y"),0):_.top!==!1?h(_.top,"y"):Math.round(Math.max(T.height()-_.h-D-K,0)/2),p.css({top:a.top,left:a.left,visibility:"visible"}),e=p.width()===_.w+B&&p.height()===_.h+D?0:e||0,m[0].style.width=m[0].style.height="9999px",o={width:_.w+B+z,height:_.h+D+K,top:r,left:s},0===e&&p.css(o),p.dequeue().animate(o,{duration:e,complete:function(){i(this),R=!1,m[0].style.width=_.w+B+z+"px",m[0].style.height=_.h+D+K+"px",_.reposition&&setTimeout(function(){T.bind("resize."+U,G.position)},1),t&&t()},step:function(){i(this)}})},G.resize=function(e){P&&(e=e||{},e.width&&(_.w=h(e.width,"x")-B-z),e.innerWidth&&(_.w=h(e.innerWidth,"x")),C.css({width:_.w}),e.height&&(_.h=h(e.height,"y")-D-K),e.innerHeight&&(_.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(C.css({height:"auto"}),_.h=C.height()),C.css({height:_.h}),G.position("none"===_.transition?0:_.speed))},G.prep=function(t){function i(){return _.w=_.w||C.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function h(){return _.h=_.h||C.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(P){var r,a="none"===_.transition?0:_.speed;C.empty().remove(),C=o(st,"LoadedContent").append(t),C.hide().appendTo(k.show()).css({width:i(),overflow:_.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(w),k.hide(),e(O).css({"float":"none"}),r=function(){function t(){nt&&p[0].style.removeAttribute("filter")}var i,h,r=b.length,d="frameBorder",c="allowTransparency";P&&(h=function(){clearTimeout(q),W.remove(),s(et,_.onComplete)},nt&&O&&C.fadeIn(100),H.html(_.title).add(C).show(),r>1?("string"==typeof _.current&&E.html(_.current.replace("{current}",A+1).replace("{total}",r)).show(),L[_.loop||r-1>A?"show":"hide"]().html(_.next),M[_.loop||A?"show":"hide"]().html(_.previous),_.slideshow&&I.show(),_.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=b[this],n=e.data(o,J);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=o.href,l(t)&&(i=new Image,i.src=t)})):S.hide(),_.iframe?(i=o("iframe")[0],d in i&&(i[d]=0),c in i&&(i[c]="true"),_.scrolling||(i.scrolling="no"),e(i).attr({src:_.href,name:(new Date).getTime(),"class":U+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",h).appendTo(C),rt.one(ot,function(){i.src="//about:blank"}),_.fastIframe&&e(i).trigger("load")):h(),"fade"===_.transition?p.fadeTo(a,1,t):t())},"fade"===_.transition?p.fadeTo(a,0,function(){G.position(0,r)}):G.position(a,r)}},G.load=function(t){var i,n,a,d=G.prep;R=!0,O=!1,N=b[A],t||r(),Q&&p.add(f).removeClass(Q),_.className&&p.add(f).addClass(_.className),Q=_.className,s(ot),s(Z,_.onLoad),_.h=_.height?h(_.height,"y")-D-K:_.innerHeight&&h(_.innerHeight,"y"),_.w=_.width?h(_.width,"x")-B-z:_.innerWidth&&h(_.innerWidth,"x"),_.mw=_.w,_.mh=_.h,_.maxWidth&&(_.mw=h(_.maxWidth,"x")-B-z,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.maxHeight&&(_.mh=h(_.maxHeight,"y")-D-K,_.mh=_.h&&_.h<_.mh?_.h:_.mh),i=_.href,q=setTimeout(function(){W.appendTo(w)},100),_.inline?(a=o(st).hide().insertBefore(e(i)[0]),rt.one(ot,function(){a.replaceWith(C.children())}),d(e(i))):_.iframe?d(" "):_.html?d(_.html):l(i)?(e(O=new Image).addClass(U+"Photo").bind("error",function(){_.title=!1,d(o(st,"Error").html(_.imgError))}).one("load",function(){var e;_.scalePhotos&&(n=function(){O.height-=O.height*e,O.width-=O.width*e},_.mw&&O.width>_.mw&&(e=(O.width-_.mw)/O.width,n()),_.mh&&O.height>_.mh&&(e=(O.height-_.mh)/O.height,n())),_.h&&(O.style.marginTop=Math.max(_.h-O.height,0)/2+"px"),b[1]&&(_.loop||b[A+1])&&(O.style.cursor="pointer",O.onclick=function(){G.next()}),nt&&(O.style.msInterpolationMode="bicubic"),setTimeout(function(){d(O)},1)}),setTimeout(function(){O.src=i},1)):i&&k.load(i,_.data,function(t,i){d("error"===i?o(st,"Error").html(_.xhrError):e(this).contents())})},G.next=function(){!R&&b[1]&&(_.loop||b[A+1])&&(A=n(1),G.load())},G.prev=function(){!R&&b[1]&&(_.loop||A)&&(A=n(-1),G.load())},G.close=function(){P&&!j&&(j=!0,P=!1,s(tt,_.onCleanup),T.unbind("."+U+" ."+lt),f.fadeTo(200,0),p.stop().fadeTo(300,0,function(){p.add(f).css({opacity:1,cursor:"auto"}).hide(),s(ot),C.empty().remove(),setTimeout(function(){j=!1,s(it,_.onClosed)},1)}))},G.remove=function(){e([]).add(p).add(f).remove(),p=null,e("."+V).removeData(J).removeClass(V),e(t).unbind("click."+U)},G.element=function(){return e(N)},G.settings=$)})(jQuery,document,window);
