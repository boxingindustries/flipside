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
var G__38248__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__38245 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__38246 = cljs.core.seq.call(null,vec__38245);
var first__38247 = cljs.core.first.call(null,seq__38246);
var seq__38246__$1 = cljs.core.next.call(null,seq__38246);
var tag = first__38247;
var body = seq__38246__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__38248 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38249__i = 0, G__38249__a = new Array(arguments.length -  0);
while (G__38249__i < G__38249__a.length) {G__38249__a[G__38249__i] = arguments[G__38249__i + 0]; ++G__38249__i;}
  args = new cljs.core.IndexedSeq(G__38249__a,0);
} 
return G__38248__delegate.call(this,args);};
G__38248.cljs$lang$maxFixedArity = 0;
G__38248.cljs$lang$applyTo = (function (arglist__38250){
var args = cljs.core.seq(arglist__38250);
return G__38248__delegate(args);
});
G__38248.cljs$core$IFn$_invoke$arity$variadic = G__38248__delegate;
return G__38248;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__36749__auto__ = (function sablono$core$update_arglists_$_iter__38255(s__38256){
return (new cljs.core.LazySeq(null,(function (){
var s__38256__$1 = s__38256;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38256__$1);
if(temp__6753__auto__){
var s__38256__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38256__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38256__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38258 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38257 = (0);
while(true){
if((i__38257 < size__36748__auto__)){
var args = cljs.core._nth.call(null,c__36747__auto__,i__38257);
cljs.core.chunk_append.call(null,b__38258,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__38259 = (i__38257 + (1));
i__38257 = G__38259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38258),sablono$core$update_arglists_$_iter__38255.call(null,cljs.core.chunk_rest.call(null,s__38256__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38258),null);
}
} else {
var args = cljs.core.first.call(null,s__38256__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__38255.call(null,cljs.core.rest.call(null,s__38256__$2)));
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
var len__37108__auto___38265 = arguments.length;
var i__37109__auto___38266 = (0);
while(true){
if((i__37109__auto___38266 < len__37108__auto___38265)){
args__37115__auto__.push((arguments[i__37109__auto___38266]));

var G__38267 = (i__37109__auto___38266 + (1));
i__37109__auto___38266 = G__38267;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__36749__auto__ = (function sablono$core$iter__38261(s__38262){
return (new cljs.core.LazySeq(null,(function (){
var s__38262__$1 = s__38262;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38262__$1);
if(temp__6753__auto__){
var s__38262__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38262__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38262__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38264 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38263 = (0);
while(true){
if((i__38263 < size__36748__auto__)){
var style = cljs.core._nth.call(null,c__36747__auto__,i__38263);
cljs.core.chunk_append.call(null,b__38264,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__38268 = (i__38263 + (1));
i__38263 = G__38268;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38264),sablono$core$iter__38261.call(null,cljs.core.chunk_rest.call(null,s__38262__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38264),null);
}
} else {
var style = cljs.core.first.call(null,s__38262__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__38261.call(null,cljs.core.rest.call(null,s__38262__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq38260){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38260));
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
sablono.core.link_to38269 = (function sablono$core$link_to38269(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38272 = arguments.length;
var i__37109__auto___38273 = (0);
while(true){
if((i__37109__auto___38273 < len__37108__auto___38272)){
args__37115__auto__.push((arguments[i__37109__auto___38273]));

var G__38274 = (i__37109__auto___38273 + (1));
i__37109__auto___38273 = G__38274;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to38269.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.link_to38269.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to38269.cljs$lang$maxFixedArity = (1);

sablono.core.link_to38269.cljs$lang$applyTo = (function (seq38270){
var G__38271 = cljs.core.first.call(null,seq38270);
var seq38270__$1 = cljs.core.next.call(null,seq38270);
return sablono.core.link_to38269.cljs$core$IFn$_invoke$arity$variadic(G__38271,seq38270__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38269);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to38275 = (function sablono$core$mail_to38275(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38282 = arguments.length;
var i__37109__auto___38283 = (0);
while(true){
if((i__37109__auto___38283 < len__37108__auto___38282)){
args__37115__auto__.push((arguments[i__37109__auto___38283]));

var G__38284 = (i__37109__auto___38283 + (1));
i__37109__auto___38283 = G__38284;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to38275.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.mail_to38275.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__38278){
var vec__38279 = p__38278;
var content = cljs.core.nth.call(null,vec__38279,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__35887__auto__ = content;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to38275.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to38275.cljs$lang$applyTo = (function (seq38276){
var G__38277 = cljs.core.first.call(null,seq38276);
var seq38276__$1 = cljs.core.next.call(null,seq38276);
return sablono.core.mail_to38275.cljs$core$IFn$_invoke$arity$variadic(G__38277,seq38276__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38275);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list38285 = (function sablono$core$unordered_list38285(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__36749__auto__ = (function sablono$core$unordered_list38285_$_iter__38290(s__38291){
return (new cljs.core.LazySeq(null,(function (){
var s__38291__$1 = s__38291;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38291__$1);
if(temp__6753__auto__){
var s__38291__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38291__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38291__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38293 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38292 = (0);
while(true){
if((i__38292 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__38292);
cljs.core.chunk_append.call(null,b__38293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38294 = (i__38292 + (1));
i__38292 = G__38294;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38293),sablono$core$unordered_list38285_$_iter__38290.call(null,cljs.core.chunk_rest.call(null,s__38291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38293),null);
}
} else {
var x = cljs.core.first.call(null,s__38291__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list38285_$_iter__38290.call(null,cljs.core.rest.call(null,s__38291__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38285);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list38295 = (function sablono$core$ordered_list38295(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__36749__auto__ = (function sablono$core$ordered_list38295_$_iter__38300(s__38301){
return (new cljs.core.LazySeq(null,(function (){
var s__38301__$1 = s__38301;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38301__$1);
if(temp__6753__auto__){
var s__38301__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38301__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38301__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38303 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38302 = (0);
while(true){
if((i__38302 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__38302);
cljs.core.chunk_append.call(null,b__38303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__38304 = (i__38302 + (1));
i__38302 = G__38304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38303),sablono$core$ordered_list38295_$_iter__38300.call(null,cljs.core.chunk_rest.call(null,s__38301__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38303),null);
}
} else {
var x = cljs.core.first.call(null,s__38301__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list38295_$_iter__38300.call(null,cljs.core.rest.call(null,s__38301__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38295);
/**
 * Create an image element.
 */
sablono.core.image38305 = (function sablono$core$image38305(var_args){
var args38306 = [];
var len__37108__auto___38309 = arguments.length;
var i__37109__auto___38310 = (0);
while(true){
if((i__37109__auto___38310 < len__37108__auto___38309)){
args38306.push((arguments[i__37109__auto___38310]));

var G__38311 = (i__37109__auto___38310 + (1));
i__37109__auto___38310 = G__38311;
continue;
} else {
}
break;
}

var G__38308 = args38306.length;
switch (G__38308) {
case 1:
return sablono.core.image38305.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image38305.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38306.length)].join('')));

}
});

sablono.core.image38305.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image38305.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image38305.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38305);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__38313_SHARP_,p2__38314_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38313_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38314_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38315_SHARP_,p2__38316_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38315_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38316_SHARP_)].join('');
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
sablono.core.color_field38317 = (function sablono$core$color_field38317(var_args){
var args38318 = [];
var len__37108__auto___38385 = arguments.length;
var i__37109__auto___38386 = (0);
while(true){
if((i__37109__auto___38386 < len__37108__auto___38385)){
args38318.push((arguments[i__37109__auto___38386]));

var G__38387 = (i__37109__auto___38386 + (1));
i__37109__auto___38386 = G__38387;
continue;
} else {
}
break;
}

var G__38320 = args38318.length;
switch (G__38320) {
case 1:
return sablono.core.color_field38317.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38317.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38318.length)].join('')));

}
});

sablono.core.color_field38317.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.color_field38317.call(null,name__38232__auto__,null);
});

sablono.core.color_field38317.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.color_field38317.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38317);

/**
 * Creates a date input field.
 */
sablono.core.date_field38321 = (function sablono$core$date_field38321(var_args){
var args38322 = [];
var len__37108__auto___38389 = arguments.length;
var i__37109__auto___38390 = (0);
while(true){
if((i__37109__auto___38390 < len__37108__auto___38389)){
args38322.push((arguments[i__37109__auto___38390]));

var G__38391 = (i__37109__auto___38390 + (1));
i__37109__auto___38390 = G__38391;
continue;
} else {
}
break;
}

var G__38324 = args38322.length;
switch (G__38324) {
case 1:
return sablono.core.date_field38321.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38321.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38322.length)].join('')));

}
});

sablono.core.date_field38321.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.date_field38321.call(null,name__38232__auto__,null);
});

sablono.core.date_field38321.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.date_field38321.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38321);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38325 = (function sablono$core$datetime_field38325(var_args){
var args38326 = [];
var len__37108__auto___38393 = arguments.length;
var i__37109__auto___38394 = (0);
while(true){
if((i__37109__auto___38394 < len__37108__auto___38393)){
args38326.push((arguments[i__37109__auto___38394]));

var G__38395 = (i__37109__auto___38394 + (1));
i__37109__auto___38394 = G__38395;
continue;
} else {
}
break;
}

var G__38328 = args38326.length;
switch (G__38328) {
case 1:
return sablono.core.datetime_field38325.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38325.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38326.length)].join('')));

}
});

sablono.core.datetime_field38325.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.datetime_field38325.call(null,name__38232__auto__,null);
});

sablono.core.datetime_field38325.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.datetime_field38325.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38325);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38329 = (function sablono$core$datetime_local_field38329(var_args){
var args38330 = [];
var len__37108__auto___38397 = arguments.length;
var i__37109__auto___38398 = (0);
while(true){
if((i__37109__auto___38398 < len__37108__auto___38397)){
args38330.push((arguments[i__37109__auto___38398]));

var G__38399 = (i__37109__auto___38398 + (1));
i__37109__auto___38398 = G__38399;
continue;
} else {
}
break;
}

var G__38332 = args38330.length;
switch (G__38332) {
case 1:
return sablono.core.datetime_local_field38329.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38329.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38330.length)].join('')));

}
});

sablono.core.datetime_local_field38329.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.datetime_local_field38329.call(null,name__38232__auto__,null);
});

sablono.core.datetime_local_field38329.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.datetime_local_field38329.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38329);

/**
 * Creates a email input field.
 */
sablono.core.email_field38333 = (function sablono$core$email_field38333(var_args){
var args38334 = [];
var len__37108__auto___38401 = arguments.length;
var i__37109__auto___38402 = (0);
while(true){
if((i__37109__auto___38402 < len__37108__auto___38401)){
args38334.push((arguments[i__37109__auto___38402]));

var G__38403 = (i__37109__auto___38402 + (1));
i__37109__auto___38402 = G__38403;
continue;
} else {
}
break;
}

var G__38336 = args38334.length;
switch (G__38336) {
case 1:
return sablono.core.email_field38333.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38333.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38334.length)].join('')));

}
});

sablono.core.email_field38333.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.email_field38333.call(null,name__38232__auto__,null);
});

sablono.core.email_field38333.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.email_field38333.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38333);

/**
 * Creates a file input field.
 */
sablono.core.file_field38337 = (function sablono$core$file_field38337(var_args){
var args38338 = [];
var len__37108__auto___38405 = arguments.length;
var i__37109__auto___38406 = (0);
while(true){
if((i__37109__auto___38406 < len__37108__auto___38405)){
args38338.push((arguments[i__37109__auto___38406]));

var G__38407 = (i__37109__auto___38406 + (1));
i__37109__auto___38406 = G__38407;
continue;
} else {
}
break;
}

var G__38340 = args38338.length;
switch (G__38340) {
case 1:
return sablono.core.file_field38337.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38337.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38338.length)].join('')));

}
});

sablono.core.file_field38337.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.file_field38337.call(null,name__38232__auto__,null);
});

sablono.core.file_field38337.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.file_field38337.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38337);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38341 = (function sablono$core$hidden_field38341(var_args){
var args38342 = [];
var len__37108__auto___38409 = arguments.length;
var i__37109__auto___38410 = (0);
while(true){
if((i__37109__auto___38410 < len__37108__auto___38409)){
args38342.push((arguments[i__37109__auto___38410]));

var G__38411 = (i__37109__auto___38410 + (1));
i__37109__auto___38410 = G__38411;
continue;
} else {
}
break;
}

var G__38344 = args38342.length;
switch (G__38344) {
case 1:
return sablono.core.hidden_field38341.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38341.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38342.length)].join('')));

}
});

sablono.core.hidden_field38341.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.hidden_field38341.call(null,name__38232__auto__,null);
});

sablono.core.hidden_field38341.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.hidden_field38341.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38341);

/**
 * Creates a month input field.
 */
sablono.core.month_field38345 = (function sablono$core$month_field38345(var_args){
var args38346 = [];
var len__37108__auto___38413 = arguments.length;
var i__37109__auto___38414 = (0);
while(true){
if((i__37109__auto___38414 < len__37108__auto___38413)){
args38346.push((arguments[i__37109__auto___38414]));

var G__38415 = (i__37109__auto___38414 + (1));
i__37109__auto___38414 = G__38415;
continue;
} else {
}
break;
}

var G__38348 = args38346.length;
switch (G__38348) {
case 1:
return sablono.core.month_field38345.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38345.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38346.length)].join('')));

}
});

sablono.core.month_field38345.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.month_field38345.call(null,name__38232__auto__,null);
});

sablono.core.month_field38345.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.month_field38345.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38345);

/**
 * Creates a number input field.
 */
sablono.core.number_field38349 = (function sablono$core$number_field38349(var_args){
var args38350 = [];
var len__37108__auto___38417 = arguments.length;
var i__37109__auto___38418 = (0);
while(true){
if((i__37109__auto___38418 < len__37108__auto___38417)){
args38350.push((arguments[i__37109__auto___38418]));

var G__38419 = (i__37109__auto___38418 + (1));
i__37109__auto___38418 = G__38419;
continue;
} else {
}
break;
}

var G__38352 = args38350.length;
switch (G__38352) {
case 1:
return sablono.core.number_field38349.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38349.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38350.length)].join('')));

}
});

sablono.core.number_field38349.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.number_field38349.call(null,name__38232__auto__,null);
});

sablono.core.number_field38349.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.number_field38349.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38349);

/**
 * Creates a password input field.
 */
sablono.core.password_field38353 = (function sablono$core$password_field38353(var_args){
var args38354 = [];
var len__37108__auto___38421 = arguments.length;
var i__37109__auto___38422 = (0);
while(true){
if((i__37109__auto___38422 < len__37108__auto___38421)){
args38354.push((arguments[i__37109__auto___38422]));

var G__38423 = (i__37109__auto___38422 + (1));
i__37109__auto___38422 = G__38423;
continue;
} else {
}
break;
}

var G__38356 = args38354.length;
switch (G__38356) {
case 1:
return sablono.core.password_field38353.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38353.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38354.length)].join('')));

}
});

sablono.core.password_field38353.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.password_field38353.call(null,name__38232__auto__,null);
});

sablono.core.password_field38353.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.password_field38353.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38353);

/**
 * Creates a range input field.
 */
sablono.core.range_field38357 = (function sablono$core$range_field38357(var_args){
var args38358 = [];
var len__37108__auto___38425 = arguments.length;
var i__37109__auto___38426 = (0);
while(true){
if((i__37109__auto___38426 < len__37108__auto___38425)){
args38358.push((arguments[i__37109__auto___38426]));

var G__38427 = (i__37109__auto___38426 + (1));
i__37109__auto___38426 = G__38427;
continue;
} else {
}
break;
}

var G__38360 = args38358.length;
switch (G__38360) {
case 1:
return sablono.core.range_field38357.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38357.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38358.length)].join('')));

}
});

sablono.core.range_field38357.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.range_field38357.call(null,name__38232__auto__,null);
});

sablono.core.range_field38357.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.range_field38357.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38357);

/**
 * Creates a search input field.
 */
sablono.core.search_field38361 = (function sablono$core$search_field38361(var_args){
var args38362 = [];
var len__37108__auto___38429 = arguments.length;
var i__37109__auto___38430 = (0);
while(true){
if((i__37109__auto___38430 < len__37108__auto___38429)){
args38362.push((arguments[i__37109__auto___38430]));

var G__38431 = (i__37109__auto___38430 + (1));
i__37109__auto___38430 = G__38431;
continue;
} else {
}
break;
}

var G__38364 = args38362.length;
switch (G__38364) {
case 1:
return sablono.core.search_field38361.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38361.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38362.length)].join('')));

}
});

sablono.core.search_field38361.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.search_field38361.call(null,name__38232__auto__,null);
});

sablono.core.search_field38361.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.search_field38361.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38361);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38365 = (function sablono$core$tel_field38365(var_args){
var args38366 = [];
var len__37108__auto___38433 = arguments.length;
var i__37109__auto___38434 = (0);
while(true){
if((i__37109__auto___38434 < len__37108__auto___38433)){
args38366.push((arguments[i__37109__auto___38434]));

var G__38435 = (i__37109__auto___38434 + (1));
i__37109__auto___38434 = G__38435;
continue;
} else {
}
break;
}

var G__38368 = args38366.length;
switch (G__38368) {
case 1:
return sablono.core.tel_field38365.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38365.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38366.length)].join('')));

}
});

sablono.core.tel_field38365.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.tel_field38365.call(null,name__38232__auto__,null);
});

sablono.core.tel_field38365.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.tel_field38365.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38365);

/**
 * Creates a text input field.
 */
sablono.core.text_field38369 = (function sablono$core$text_field38369(var_args){
var args38370 = [];
var len__37108__auto___38437 = arguments.length;
var i__37109__auto___38438 = (0);
while(true){
if((i__37109__auto___38438 < len__37108__auto___38437)){
args38370.push((arguments[i__37109__auto___38438]));

var G__38439 = (i__37109__auto___38438 + (1));
i__37109__auto___38438 = G__38439;
continue;
} else {
}
break;
}

var G__38372 = args38370.length;
switch (G__38372) {
case 1:
return sablono.core.text_field38369.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38369.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38370.length)].join('')));

}
});

sablono.core.text_field38369.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.text_field38369.call(null,name__38232__auto__,null);
});

sablono.core.text_field38369.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.text_field38369.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38369);

/**
 * Creates a time input field.
 */
sablono.core.time_field38373 = (function sablono$core$time_field38373(var_args){
var args38374 = [];
var len__37108__auto___38441 = arguments.length;
var i__37109__auto___38442 = (0);
while(true){
if((i__37109__auto___38442 < len__37108__auto___38441)){
args38374.push((arguments[i__37109__auto___38442]));

var G__38443 = (i__37109__auto___38442 + (1));
i__37109__auto___38442 = G__38443;
continue;
} else {
}
break;
}

var G__38376 = args38374.length;
switch (G__38376) {
case 1:
return sablono.core.time_field38373.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38373.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38374.length)].join('')));

}
});

sablono.core.time_field38373.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.time_field38373.call(null,name__38232__auto__,null);
});

sablono.core.time_field38373.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.time_field38373.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38373);

/**
 * Creates a url input field.
 */
sablono.core.url_field38377 = (function sablono$core$url_field38377(var_args){
var args38378 = [];
var len__37108__auto___38445 = arguments.length;
var i__37109__auto___38446 = (0);
while(true){
if((i__37109__auto___38446 < len__37108__auto___38445)){
args38378.push((arguments[i__37109__auto___38446]));

var G__38447 = (i__37109__auto___38446 + (1));
i__37109__auto___38446 = G__38447;
continue;
} else {
}
break;
}

var G__38380 = args38378.length;
switch (G__38380) {
case 1:
return sablono.core.url_field38377.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38377.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38378.length)].join('')));

}
});

sablono.core.url_field38377.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.url_field38377.call(null,name__38232__auto__,null);
});

sablono.core.url_field38377.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.url_field38377.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38377);

/**
 * Creates a week input field.
 */
sablono.core.week_field38381 = (function sablono$core$week_field38381(var_args){
var args38382 = [];
var len__37108__auto___38449 = arguments.length;
var i__37109__auto___38450 = (0);
while(true){
if((i__37109__auto___38450 < len__37108__auto___38449)){
args38382.push((arguments[i__37109__auto___38450]));

var G__38451 = (i__37109__auto___38450 + (1));
i__37109__auto___38450 = G__38451;
continue;
} else {
}
break;
}

var G__38384 = args38382.length;
switch (G__38384) {
case 1:
return sablono.core.week_field38381.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38381.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38382.length)].join('')));

}
});

sablono.core.week_field38381.cljs$core$IFn$_invoke$arity$1 = (function (name__38232__auto__){
return sablono.core.week_field38381.call(null,name__38232__auto__,null);
});

sablono.core.week_field38381.cljs$core$IFn$_invoke$arity$2 = (function (name__38232__auto__,value__38233__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__38232__auto__,value__38233__auto__);
});

sablono.core.week_field38381.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38381);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38453 = (function sablono$core$check_box38453(var_args){
var args38454 = [];
var len__37108__auto___38457 = arguments.length;
var i__37109__auto___38458 = (0);
while(true){
if((i__37109__auto___38458 < len__37108__auto___38457)){
args38454.push((arguments[i__37109__auto___38458]));

var G__38459 = (i__37109__auto___38458 + (1));
i__37109__auto___38458 = G__38459;
continue;
} else {
}
break;
}

var G__38456 = args38454.length;
switch (G__38456) {
case 1:
return sablono.core.check_box38453.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38453.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38453.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38454.length)].join('')));

}
});

sablono.core.check_box38453.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38453.call(null,name,null);
});

sablono.core.check_box38453.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38453.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38453.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38453.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38453);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38461 = (function sablono$core$radio_button38461(var_args){
var args38462 = [];
var len__37108__auto___38465 = arguments.length;
var i__37109__auto___38466 = (0);
while(true){
if((i__37109__auto___38466 < len__37108__auto___38465)){
args38462.push((arguments[i__37109__auto___38466]));

var G__38467 = (i__37109__auto___38466 + (1));
i__37109__auto___38466 = G__38467;
continue;
} else {
}
break;
}

var G__38464 = args38462.length;
switch (G__38464) {
case 1:
return sablono.core.radio_button38461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38461.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38462.length)].join('')));

}
});

sablono.core.radio_button38461.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38461.call(null,group,null);
});

sablono.core.radio_button38461.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38461.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38461.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38461.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38461);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38469 = (function sablono$core$select_options38469(coll){
var iter__36749__auto__ = (function sablono$core$select_options38469_$_iter__38486(s__38487){
return (new cljs.core.LazySeq(null,(function (){
var s__38487__$1 = s__38487;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__38487__$1);
if(temp__6753__auto__){
var s__38487__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38487__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__38487__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__38489 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__38488 = (0);
while(true){
if((i__38488 < size__36748__auto__)){
var x = cljs.core._nth.call(null,c__36747__auto__,i__38488);
cljs.core.chunk_append.call(null,b__38489,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38496 = x;
var text = cljs.core.nth.call(null,vec__38496,(0),null);
var val = cljs.core.nth.call(null,vec__38496,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38496,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38469.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38502 = (i__38488 + (1));
i__38488 = G__38502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38489),sablono$core$select_options38469_$_iter__38486.call(null,cljs.core.chunk_rest.call(null,s__38487__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38489),null);
}
} else {
var x = cljs.core.first.call(null,s__38487__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38499 = x;
var text = cljs.core.nth.call(null,vec__38499,(0),null);
var val = cljs.core.nth.call(null,vec__38499,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38499,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38469.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38469_$_iter__38486.call(null,cljs.core.rest.call(null,s__38487__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38469);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38503 = (function sablono$core$drop_down38503(var_args){
var args38504 = [];
var len__37108__auto___38507 = arguments.length;
var i__37109__auto___38508 = (0);
while(true){
if((i__37109__auto___38508 < len__37108__auto___38507)){
args38504.push((arguments[i__37109__auto___38508]));

var G__38509 = (i__37109__auto___38508 + (1));
i__37109__auto___38508 = G__38509;
continue;
} else {
}
break;
}

var G__38506 = args38504.length;
switch (G__38506) {
case 2:
return sablono.core.drop_down38503.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38503.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38504.length)].join('')));

}
});

sablono.core.drop_down38503.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38503.call(null,name,options,null);
});

sablono.core.drop_down38503.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38503.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38503);
/**
 * Creates a text area element.
 */
sablono.core.text_area38511 = (function sablono$core$text_area38511(var_args){
var args38512 = [];
var len__37108__auto___38515 = arguments.length;
var i__37109__auto___38516 = (0);
while(true){
if((i__37109__auto___38516 < len__37108__auto___38515)){
args38512.push((arguments[i__37109__auto___38516]));

var G__38517 = (i__37109__auto___38516 + (1));
i__37109__auto___38516 = G__38517;
continue;
} else {
}
break;
}

var G__38514 = args38512.length;
switch (G__38514) {
case 1:
return sablono.core.text_area38511.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38511.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38512.length)].join('')));

}
});

sablono.core.text_area38511.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38511.call(null,name,null);
});

sablono.core.text_area38511.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__35887__auto__ = value;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area38511.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38511);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38519 = (function sablono$core$label38519(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38519);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38520 = (function sablono$core$submit_button38520(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38520);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38521 = (function sablono$core$reset_button38521(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38521);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38522 = (function sablono$core$form_to38522(var_args){
var args__37115__auto__ = [];
var len__37108__auto___38529 = arguments.length;
var i__37109__auto___38530 = (0);
while(true){
if((i__37109__auto___38530 < len__37108__auto___38529)){
args__37115__auto__.push((arguments[i__37109__auto___38530]));

var G__38531 = (i__37109__auto___38530 + (1));
i__37109__auto___38530 = G__38531;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38522.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

sablono.core.form_to38522.cljs$core$IFn$_invoke$arity$variadic = (function (p__38525,body){
var vec__38526 = p__38525;
var method = cljs.core.nth.call(null,vec__38526,(0),null);
var action = cljs.core.nth.call(null,vec__38526,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38522.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38522.cljs$lang$applyTo = (function (seq38523){
var G__38524 = cljs.core.first.call(null,seq38523);
var seq38523__$1 = cljs.core.next.call(null,seq38523);
return sablono.core.form_to38522.cljs$core$IFn$_invoke$arity$variadic(G__38524,seq38523__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38522);

//# sourceMappingURL=core.js.map?rel=1511925487220