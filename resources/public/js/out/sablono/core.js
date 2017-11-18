// Compiled by ClojureScript 1.9.494 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__38247__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38244 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__38245 = cljs.core.seq.call(null,vec__38244);
var first__38246 = cljs.core.first.call(null,seq__38245);
var seq__38245__$1 = cljs.core.next.call(null,seq__38245);
var tag = first__38246;
var body = seq__38245__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38248__i = 0, G__38248__a = new Array(arguments.length -  0);
while (G__38248__i < G__38248__a.length) {G__38248__a[G__38248__i] = arguments[G__38248__i + 0]; ++G__38248__i;}
  args = new cljs.core.IndexedSeq(G__38248__a,0);
} 
return G__38247__delegate.call(this,args);};
G__38247.cljs$lang$maxFixedArity = 0;
G__38247.cljs$lang$applyTo = (function (arglist__38249){
var args = cljs.core.seq(arglist__38249);
return G__38247__delegate(args);
});
G__38247.cljs$core$IFn$_invoke$arity$variadic = G__38247__delegate;
return G__38247;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36749__auto__ = (function sablono$core$update_arglists_$_iter__38254(s__38255){
return (new cljs.core.LazySeq(null,(function (){
var s__38255__$1 = s__38255;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38255__$1);
if(temp__6753__auto__){
var s__38255__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38255__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38255__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38257 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38256 = (0);
while(true){
if((i__38256 < size__36748__auto__)){
var args = cljs.core._nth.call(null,c__36747__auto__,i__38256);
cljs.core.chunk_append.call(null,b__38257,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38258 = (i__38256 + (1));
i__38256 = G__38258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38257),sablono$core$update_arglists_$_iter__38254.call(null,cljs.core.chunk_rest.call(null,s__38255__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38257),null);
}
} else {
var args = cljs.core.first.call(null,s__38255__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38254.call(null,cljs.core.rest.call(null,s__38255__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38264 = arguments.length;
var i__37109__auto___38265 = (0);
while(true){
if((i__37109__auto___38265 < len__37108__auto___38264)){
args__37115__auto__.push((arguments[i__37109__auto___38265]));

var G__38266 = (i__37109__auto___38265 + (1));
i__37109__auto___38265 = G__38266;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36749__auto__ = (function sablono$core$iter__38260(s__38261){
return (new cljs.core.LazySeq(null,(function (){
var s__38261__$1 = s__38261;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38261__$1);
if(temp__6753__auto__){
var s__38261__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38261__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38261__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38263 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38262 = (0);
while(true){
if((i__38262 < size__36748__auto__)){
var style = cljs.core._nth.call(null,c__36747__auto__,i__38262);
cljs.core.chunk_append.call(null,b__38263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38267 = (i__38262 + (1));
i__38262 = G__38267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38263),sablono$core$iter__38260.call(null,cljs.core.chunk_rest.call(null,s__38261__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38263),null);
}
} else {
var style = cljs.core.first.call(null,s__38261__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38260.call(null,cljs.core.rest.call(null,s__38261__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq38259){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38259));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to38268 = (function sablono$core$link_to38268(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38271 = arguments.length;
var i__37109__auto___38272 = (0);
while(true){
if((i__37109__auto___38272 < len__37108__auto___38271)){
args__37115__auto__.push((arguments[i__37109__auto___38272]));

var G__38273 = (i__37109__auto___38272 + (1));
i__37109__auto___38272 = G__38273;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38268.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.link_to38268.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38268.cljs$lang$maxFixedArity = (1);

sablono.core.link_to38268.cljs$lang$applyTo = (function (seq38269){
var G__38270 = cljs.core.first.call(null,seq38269);
var seq38269__$1 = cljs.core.next.call(null,seq38269);
return sablono.core.link_to38268.cljs$core$IFn$_invoke$arity$variadic(G__38270,seq38269__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38268);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38274 = (function sablono$core$mail_to38274(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38281 = arguments.length;
var i__37109__auto___38282 = (0);
while(true){
if((i__37109__auto___38282 < len__37108__auto___38281)){
args__37115__auto__.push((arguments[i__37109__auto___38282]));

var G__38283 = (i__37109__auto___38282 + (1));
i__37109__auto___38282 = G__38283;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38274.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.mail_to38274.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38277){
var vec__38278 = p__38277;
var content = cljs.core.nth.call(null,vec__38278,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35887__auto__ = content;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38274.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to38274.cljs$lang$applyTo = (function (seq38275){
var G__38276 = cljs.core.first.call(null,seq38275);
var seq38275__$1 = cljs.core.next.call(null,seq38275);
return sablono.core.mail_to38274.cljs$core$IFn$_invoke$arity$variadic(G__38276,seq38275__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38274);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38284 = (function sablono$core$unordered_list38284(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36749__auto__ = (function sablono$core$unordered_list38284_$_iter__38289(s__38290){
return (new cljs.core.LazySeq(null,(function (){
var s__38290__$1 = s__38290;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38290__$1);
if(temp__6753__auto__){
var s__38290__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38290__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38290__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38292 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38291 = (0);
while(true){
if((i__38291 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__38291);
cljs.core.chunk_append.call(null,b__38292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38293 = (i__38291 + (1));
i__38291 = G__38293;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38292),sablono$core$unordered_list38284_$_iter__38289.call(null,cljs.core.chunk_rest.call(null,s__38290__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38292),null);
}
} else {
var x = cljs.core.first.call(null,s__38290__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38284_$_iter__38289.call(null,cljs.core.rest.call(null,s__38290__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38284);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38294 = (function sablono$core$ordered_list38294(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36749__auto__ = (function sablono$core$ordered_list38294_$_iter__38299(s__38300){
return (new cljs.core.LazySeq(null,(function (){
var s__38300__$1 = s__38300;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38300__$1);
if(temp__6753__auto__){
var s__38300__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38300__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38300__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38302 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38301 = (0);
while(true){
if((i__38301 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__38301);
cljs.core.chunk_append.call(null,b__38302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38303 = (i__38301 + (1));
i__38301 = G__38303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38302),sablono$core$ordered_list38294_$_iter__38299.call(null,cljs.core.chunk_rest.call(null,s__38300__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38302),null);
}
} else {
var x = cljs.core.first.call(null,s__38300__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38294_$_iter__38299.call(null,cljs.core.rest.call(null,s__38300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38294);
/**
 * Create an image element.
 */
sablono.core.image38304 = (function sablono$core$image38304(var_args){
var args38305 = [];
var len__37108__auto___38308 = arguments.length;
var i__37109__auto___38309 = (0);
while(true){
if((i__37109__auto___38309 < len__37108__auto___38308)){
args38305.push((arguments[i__37109__auto___38309]));

var G__38310 = (i__37109__auto___38309 + (1));
i__37109__auto___38309 = G__38310;
continue;
} else {
}
break;
}

var G__38307 = args38305.length;
switch (G__38307) {
case 1:
return sablono.core.image38304.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38304.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38305.length)].join('')));

}
});

sablono.core.image38304.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38304.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38304.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38304);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38312_SHARP_,p2__38313_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38312_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38313_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38314_SHARP_,p2__38315_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38314_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38315_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field38316 = (function sablono$core$color_field38316(var_args){
var args38317 = [];
var len__37108__auto___38384 = arguments.length;
var i__37109__auto___38385 = (0);
while(true){
if((i__37109__auto___38385 < len__37108__auto___38384)){
args38317.push((arguments[i__37109__auto___38385]));

var G__38386 = (i__37109__auto___38385 + (1));
i__37109__auto___38385 = G__38386;
continue;
} else {
}
break;
}

var G__38319 = args38317.length;
switch (G__38319) {
case 1:
return sablono.core.color_field38316.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38316.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38317.length)].join('')));

}
});

sablono.core.color_field38316.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.color_field38316.call(null,name__38231__auto__,null);
});

sablono.core.color_field38316.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.color_field38316.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38316);

/**
 * Creates a date input field.
 */
sablono.core.date_field38320 = (function sablono$core$date_field38320(var_args){
var args38321 = [];
var len__37108__auto___38388 = arguments.length;
var i__37109__auto___38389 = (0);
while(true){
if((i__37109__auto___38389 < len__37108__auto___38388)){
args38321.push((arguments[i__37109__auto___38389]));

var G__38390 = (i__37109__auto___38389 + (1));
i__37109__auto___38389 = G__38390;
continue;
} else {
}
break;
}

var G__38323 = args38321.length;
switch (G__38323) {
case 1:
return sablono.core.date_field38320.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38320.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38321.length)].join('')));

}
});

sablono.core.date_field38320.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.date_field38320.call(null,name__38231__auto__,null);
});

sablono.core.date_field38320.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.date_field38320.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38320);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38324 = (function sablono$core$datetime_field38324(var_args){
var args38325 = [];
var len__37108__auto___38392 = arguments.length;
var i__37109__auto___38393 = (0);
while(true){
if((i__37109__auto___38393 < len__37108__auto___38392)){
args38325.push((arguments[i__37109__auto___38393]));

var G__38394 = (i__37109__auto___38393 + (1));
i__37109__auto___38393 = G__38394;
continue;
} else {
}
break;
}

var G__38327 = args38325.length;
switch (G__38327) {
case 1:
return sablono.core.datetime_field38324.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38324.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38325.length)].join('')));

}
});

sablono.core.datetime_field38324.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.datetime_field38324.call(null,name__38231__auto__,null);
});

sablono.core.datetime_field38324.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.datetime_field38324.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38324);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38328 = (function sablono$core$datetime_local_field38328(var_args){
var args38329 = [];
var len__37108__auto___38396 = arguments.length;
var i__37109__auto___38397 = (0);
while(true){
if((i__37109__auto___38397 < len__37108__auto___38396)){
args38329.push((arguments[i__37109__auto___38397]));

var G__38398 = (i__37109__auto___38397 + (1));
i__37109__auto___38397 = G__38398;
continue;
} else {
}
break;
}

var G__38331 = args38329.length;
switch (G__38331) {
case 1:
return sablono.core.datetime_local_field38328.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38328.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38329.length)].join('')));

}
});

sablono.core.datetime_local_field38328.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.datetime_local_field38328.call(null,name__38231__auto__,null);
});

sablono.core.datetime_local_field38328.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.datetime_local_field38328.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38328);

/**
 * Creates a email input field.
 */
sablono.core.email_field38332 = (function sablono$core$email_field38332(var_args){
var args38333 = [];
var len__37108__auto___38400 = arguments.length;
var i__37109__auto___38401 = (0);
while(true){
if((i__37109__auto___38401 < len__37108__auto___38400)){
args38333.push((arguments[i__37109__auto___38401]));

var G__38402 = (i__37109__auto___38401 + (1));
i__37109__auto___38401 = G__38402;
continue;
} else {
}
break;
}

var G__38335 = args38333.length;
switch (G__38335) {
case 1:
return sablono.core.email_field38332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38333.length)].join('')));

}
});

sablono.core.email_field38332.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.email_field38332.call(null,name__38231__auto__,null);
});

sablono.core.email_field38332.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.email_field38332.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38332);

/**
 * Creates a file input field.
 */
sablono.core.file_field38336 = (function sablono$core$file_field38336(var_args){
var args38337 = [];
var len__37108__auto___38404 = arguments.length;
var i__37109__auto___38405 = (0);
while(true){
if((i__37109__auto___38405 < len__37108__auto___38404)){
args38337.push((arguments[i__37109__auto___38405]));

var G__38406 = (i__37109__auto___38405 + (1));
i__37109__auto___38405 = G__38406;
continue;
} else {
}
break;
}

var G__38339 = args38337.length;
switch (G__38339) {
case 1:
return sablono.core.file_field38336.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38336.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38337.length)].join('')));

}
});

sablono.core.file_field38336.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.file_field38336.call(null,name__38231__auto__,null);
});

sablono.core.file_field38336.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.file_field38336.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38336);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38340 = (function sablono$core$hidden_field38340(var_args){
var args38341 = [];
var len__37108__auto___38408 = arguments.length;
var i__37109__auto___38409 = (0);
while(true){
if((i__37109__auto___38409 < len__37108__auto___38408)){
args38341.push((arguments[i__37109__auto___38409]));

var G__38410 = (i__37109__auto___38409 + (1));
i__37109__auto___38409 = G__38410;
continue;
} else {
}
break;
}

var G__38343 = args38341.length;
switch (G__38343) {
case 1:
return sablono.core.hidden_field38340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38341.length)].join('')));

}
});

sablono.core.hidden_field38340.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.hidden_field38340.call(null,name__38231__auto__,null);
});

sablono.core.hidden_field38340.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.hidden_field38340.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38340);

/**
 * Creates a month input field.
 */
sablono.core.month_field38344 = (function sablono$core$month_field38344(var_args){
var args38345 = [];
var len__37108__auto___38412 = arguments.length;
var i__37109__auto___38413 = (0);
while(true){
if((i__37109__auto___38413 < len__37108__auto___38412)){
args38345.push((arguments[i__37109__auto___38413]));

var G__38414 = (i__37109__auto___38413 + (1));
i__37109__auto___38413 = G__38414;
continue;
} else {
}
break;
}

var G__38347 = args38345.length;
switch (G__38347) {
case 1:
return sablono.core.month_field38344.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38344.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38345.length)].join('')));

}
});

sablono.core.month_field38344.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.month_field38344.call(null,name__38231__auto__,null);
});

sablono.core.month_field38344.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.month_field38344.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38344);

/**
 * Creates a number input field.
 */
sablono.core.number_field38348 = (function sablono$core$number_field38348(var_args){
var args38349 = [];
var len__37108__auto___38416 = arguments.length;
var i__37109__auto___38417 = (0);
while(true){
if((i__37109__auto___38417 < len__37108__auto___38416)){
args38349.push((arguments[i__37109__auto___38417]));

var G__38418 = (i__37109__auto___38417 + (1));
i__37109__auto___38417 = G__38418;
continue;
} else {
}
break;
}

var G__38351 = args38349.length;
switch (G__38351) {
case 1:
return sablono.core.number_field38348.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38349.length)].join('')));

}
});

sablono.core.number_field38348.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.number_field38348.call(null,name__38231__auto__,null);
});

sablono.core.number_field38348.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.number_field38348.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38348);

/**
 * Creates a password input field.
 */
sablono.core.password_field38352 = (function sablono$core$password_field38352(var_args){
var args38353 = [];
var len__37108__auto___38420 = arguments.length;
var i__37109__auto___38421 = (0);
while(true){
if((i__37109__auto___38421 < len__37108__auto___38420)){
args38353.push((arguments[i__37109__auto___38421]));

var G__38422 = (i__37109__auto___38421 + (1));
i__37109__auto___38421 = G__38422;
continue;
} else {
}
break;
}

var G__38355 = args38353.length;
switch (G__38355) {
case 1:
return sablono.core.password_field38352.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38352.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38353.length)].join('')));

}
});

sablono.core.password_field38352.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.password_field38352.call(null,name__38231__auto__,null);
});

sablono.core.password_field38352.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.password_field38352.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38352);

/**
 * Creates a range input field.
 */
sablono.core.range_field38356 = (function sablono$core$range_field38356(var_args){
var args38357 = [];
var len__37108__auto___38424 = arguments.length;
var i__37109__auto___38425 = (0);
while(true){
if((i__37109__auto___38425 < len__37108__auto___38424)){
args38357.push((arguments[i__37109__auto___38425]));

var G__38426 = (i__37109__auto___38425 + (1));
i__37109__auto___38425 = G__38426;
continue;
} else {
}
break;
}

var G__38359 = args38357.length;
switch (G__38359) {
case 1:
return sablono.core.range_field38356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38357.length)].join('')));

}
});

sablono.core.range_field38356.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.range_field38356.call(null,name__38231__auto__,null);
});

sablono.core.range_field38356.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.range_field38356.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38356);

/**
 * Creates a search input field.
 */
sablono.core.search_field38360 = (function sablono$core$search_field38360(var_args){
var args38361 = [];
var len__37108__auto___38428 = arguments.length;
var i__37109__auto___38429 = (0);
while(true){
if((i__37109__auto___38429 < len__37108__auto___38428)){
args38361.push((arguments[i__37109__auto___38429]));

var G__38430 = (i__37109__auto___38429 + (1));
i__37109__auto___38429 = G__38430;
continue;
} else {
}
break;
}

var G__38363 = args38361.length;
switch (G__38363) {
case 1:
return sablono.core.search_field38360.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38360.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38361.length)].join('')));

}
});

sablono.core.search_field38360.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.search_field38360.call(null,name__38231__auto__,null);
});

sablono.core.search_field38360.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.search_field38360.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38360);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38364 = (function sablono$core$tel_field38364(var_args){
var args38365 = [];
var len__37108__auto___38432 = arguments.length;
var i__37109__auto___38433 = (0);
while(true){
if((i__37109__auto___38433 < len__37108__auto___38432)){
args38365.push((arguments[i__37109__auto___38433]));

var G__38434 = (i__37109__auto___38433 + (1));
i__37109__auto___38433 = G__38434;
continue;
} else {
}
break;
}

var G__38367 = args38365.length;
switch (G__38367) {
case 1:
return sablono.core.tel_field38364.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38364.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38365.length)].join('')));

}
});

sablono.core.tel_field38364.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.tel_field38364.call(null,name__38231__auto__,null);
});

sablono.core.tel_field38364.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.tel_field38364.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38364);

/**
 * Creates a text input field.
 */
sablono.core.text_field38368 = (function sablono$core$text_field38368(var_args){
var args38369 = [];
var len__37108__auto___38436 = arguments.length;
var i__37109__auto___38437 = (0);
while(true){
if((i__37109__auto___38437 < len__37108__auto___38436)){
args38369.push((arguments[i__37109__auto___38437]));

var G__38438 = (i__37109__auto___38437 + (1));
i__37109__auto___38437 = G__38438;
continue;
} else {
}
break;
}

var G__38371 = args38369.length;
switch (G__38371) {
case 1:
return sablono.core.text_field38368.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38368.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38369.length)].join('')));

}
});

sablono.core.text_field38368.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.text_field38368.call(null,name__38231__auto__,null);
});

sablono.core.text_field38368.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.text_field38368.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38368);

/**
 * Creates a time input field.
 */
sablono.core.time_field38372 = (function sablono$core$time_field38372(var_args){
var args38373 = [];
var len__37108__auto___38440 = arguments.length;
var i__37109__auto___38441 = (0);
while(true){
if((i__37109__auto___38441 < len__37108__auto___38440)){
args38373.push((arguments[i__37109__auto___38441]));

var G__38442 = (i__37109__auto___38441 + (1));
i__37109__auto___38441 = G__38442;
continue;
} else {
}
break;
}

var G__38375 = args38373.length;
switch (G__38375) {
case 1:
return sablono.core.time_field38372.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38372.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38373.length)].join('')));

}
});

sablono.core.time_field38372.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.time_field38372.call(null,name__38231__auto__,null);
});

sablono.core.time_field38372.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.time_field38372.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38372);

/**
 * Creates a url input field.
 */
sablono.core.url_field38376 = (function sablono$core$url_field38376(var_args){
var args38377 = [];
var len__37108__auto___38444 = arguments.length;
var i__37109__auto___38445 = (0);
while(true){
if((i__37109__auto___38445 < len__37108__auto___38444)){
args38377.push((arguments[i__37109__auto___38445]));

var G__38446 = (i__37109__auto___38445 + (1));
i__37109__auto___38445 = G__38446;
continue;
} else {
}
break;
}

var G__38379 = args38377.length;
switch (G__38379) {
case 1:
return sablono.core.url_field38376.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38376.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38377.length)].join('')));

}
});

sablono.core.url_field38376.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.url_field38376.call(null,name__38231__auto__,null);
});

sablono.core.url_field38376.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.url_field38376.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38376);

/**
 * Creates a week input field.
 */
sablono.core.week_field38380 = (function sablono$core$week_field38380(var_args){
var args38381 = [];
var len__37108__auto___38448 = arguments.length;
var i__37109__auto___38449 = (0);
while(true){
if((i__37109__auto___38449 < len__37108__auto___38448)){
args38381.push((arguments[i__37109__auto___38449]));

var G__38450 = (i__37109__auto___38449 + (1));
i__37109__auto___38449 = G__38450;
continue;
} else {
}
break;
}

var G__38383 = args38381.length;
switch (G__38383) {
case 1:
return sablono.core.week_field38380.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38380.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38381.length)].join('')));

}
});

sablono.core.week_field38380.cljs$core$IFn$_invoke$arity$1 = (function (name__38231__auto__){
return sablono.core.week_field38380.call(null,name__38231__auto__,null);
});

sablono.core.week_field38380.cljs$core$IFn$_invoke$arity$2 = (function (name__38231__auto__,value__38232__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38231__auto__,value__38232__auto__);
});

sablono.core.week_field38380.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38380);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38452 = (function sablono$core$check_box38452(var_args){
var args38453 = [];
var len__37108__auto___38456 = arguments.length;
var i__37109__auto___38457 = (0);
while(true){
if((i__37109__auto___38457 < len__37108__auto___38456)){
args38453.push((arguments[i__37109__auto___38457]));

var G__38458 = (i__37109__auto___38457 + (1));
i__37109__auto___38457 = G__38458;
continue;
} else {
}
break;
}

var G__38455 = args38453.length;
switch (G__38455) {
case 1:
return sablono.core.check_box38452.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38452.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38452.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38453.length)].join('')));

}
});

sablono.core.check_box38452.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38452.call(null,name,null);
});

sablono.core.check_box38452.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38452.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38452.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38452.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38452);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38460 = (function sablono$core$radio_button38460(var_args){
var args38461 = [];
var len__37108__auto___38464 = arguments.length;
var i__37109__auto___38465 = (0);
while(true){
if((i__37109__auto___38465 < len__37108__auto___38464)){
args38461.push((arguments[i__37109__auto___38465]));

var G__38466 = (i__37109__auto___38465 + (1));
i__37109__auto___38465 = G__38466;
continue;
} else {
}
break;
}

var G__38463 = args38461.length;
switch (G__38463) {
case 1:
return sablono.core.radio_button38460.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38460.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38460.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38461.length)].join('')));

}
});

sablono.core.radio_button38460.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38460.call(null,group,null);
});

sablono.core.radio_button38460.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38460.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38460.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38460.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38460);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38468 = (function sablono$core$select_options38468(coll){
var iter__36749__auto__ = (function sablono$core$select_options38468_$_iter__38485(s__38486){
return (new cljs.core.LazySeq(null,(function (){
var s__38486__$1 = s__38486;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38486__$1);
if(temp__6753__auto__){
var s__38486__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38486__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38486__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38488 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38487 = (0);
while(true){
if((i__38487 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__38487);
cljs.core.chunk_append.call(null,b__38488,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38495 = x;
var text = cljs.core.nth.call(null,vec__38495,(0),null);
var val = cljs.core.nth.call(null,vec__38495,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38495,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38468.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38501 = (i__38487 + (1));
i__38487 = G__38501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38488),sablono$core$select_options38468_$_iter__38485.call(null,cljs.core.chunk_rest.call(null,s__38486__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38488),null);
}
} else {
var x = cljs.core.first.call(null,s__38486__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38498 = x;
var text = cljs.core.nth.call(null,vec__38498,(0),null);
var val = cljs.core.nth.call(null,vec__38498,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38498,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38468.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38468_$_iter__38485.call(null,cljs.core.rest.call(null,s__38486__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38468);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38502 = (function sablono$core$drop_down38502(var_args){
var args38503 = [];
var len__37108__auto___38506 = arguments.length;
var i__37109__auto___38507 = (0);
while(true){
if((i__37109__auto___38507 < len__37108__auto___38506)){
args38503.push((arguments[i__37109__auto___38507]));

var G__38508 = (i__37109__auto___38507 + (1));
i__37109__auto___38507 = G__38508;
continue;
} else {
}
break;
}

var G__38505 = args38503.length;
switch (G__38505) {
case 2:
return sablono.core.drop_down38502.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38502.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38503.length)].join('')));

}
});

sablono.core.drop_down38502.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38502.call(null,name,options,null);
});

sablono.core.drop_down38502.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38502.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38502);
/**
 * Creates a text area element.
 */
sablono.core.text_area38510 = (function sablono$core$text_area38510(var_args){
var args38511 = [];
var len__37108__auto___38514 = arguments.length;
var i__37109__auto___38515 = (0);
while(true){
if((i__37109__auto___38515 < len__37108__auto___38514)){
args38511.push((arguments[i__37109__auto___38515]));

var G__38516 = (i__37109__auto___38515 + (1));
i__37109__auto___38515 = G__38516;
continue;
} else {
}
break;
}

var G__38513 = args38511.length;
switch (G__38513) {
case 1:
return sablono.core.text_area38510.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38510.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38511.length)].join('')));

}
});

sablono.core.text_area38510.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38510.call(null,name,null);
});

sablono.core.text_area38510.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area38510.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38510);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38518 = (function sablono$core$label38518(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38518);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38519 = (function sablono$core$submit_button38519(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38519);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38520 = (function sablono$core$reset_button38520(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38520);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38521 = (function sablono$core$form_to38521(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38528 = arguments.length;
var i__37109__auto___38529 = (0);
while(true){
if((i__37109__auto___38529 < len__37108__auto___38528)){
args__37115__auto__.push((arguments[i__37109__auto___38529]));

var G__38530 = (i__37109__auto___38529 + (1));
i__37109__auto___38529 = G__38530;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38521.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.form_to38521.cljs$core$IFn$_invoke$arity$variadic = (function (p__38524,body){
var vec__38525 = p__38524;
var method = cljs.core.nth.call(null,vec__38525,(0),null);
var action = cljs.core.nth.call(null,vec__38525,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38521.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38521.cljs$lang$applyTo = (function (seq38522){
var G__38523 = cljs.core.first.call(null,seq38522);
var seq38522__$1 = cljs.core.next.call(null,seq38522);
return sablono.core.form_to38521.cljs$core$IFn$_invoke$arity$variadic(G__38523,seq38522__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38521);

//# sourceMappingURL=core.js.map?rel=1509941605689