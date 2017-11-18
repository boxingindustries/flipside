// Compiled by ClojureScript 1.9.494 {}
goog.provide('com.nicki.flipside.main');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('datascript.core');
goog.require('rum.core');
cljs.core.enable_console_print_BANG_.call(null);
com.nicki.flipside.main.grid_box_size = (50);
com.nicki.flipside.main.num_of_grid_rows = (10);
com.nicki.flipside.main.num_of_grid_columns = (10);
if(typeof com.nicki.flipside.main._BANG_app !== 'undefined'){
} else {
com.nicki.flipside.main._BANG_app = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"play?","play?",1098824048),false,new cljs.core.Keyword(null,"grid","grid",402978600),(function (){var iter__36749__auto__ = (function com$nicki$flipside$main$iter__42850(s__42851){
return (new cljs.core.LazySeq(null,(function (){
var s__42851__$1 = s__42851;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__42851__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var c = cljs.core.first.call(null,xs__7309__auto__);
var iterys__36745__auto__ = ((function (s__42851__$1,c,xs__7309__auto__,temp__6753__auto__){
return (function com$nicki$flipside$main$iter__42850_$_iter__42852(s__42853){
return (new cljs.core.LazySeq(null,((function (s__42851__$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__42853__$1 = s__42853;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__42853__$1);
if(temp__6753__auto____$1){
var s__42853__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42853__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__42853__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__42855 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__42854 = (0);
while(true){
if((i__42854 < size__36748__auto__)){
var r = cljs.core._nth.call(null,c__36747__auto__,i__42854);
cljs.core.chunk_append.call(null,b__42855,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null));

var G__42856 = (i__42854 + (1));
i__42854 = G__42856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42855),com$nicki$flipside$main$iter__42850_$_iter__42852.call(null,cljs.core.chunk_rest.call(null,s__42853__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42855),null);
}
} else {
var r = cljs.core.first.call(null,s__42853__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),com$nicki$flipside$main$iter__42850_$_iter__42852.call(null,cljs.core.rest.call(null,s__42853__$2)));
}
} else {
return null;
}
break;
}
});})(s__42851__$1,c,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__42851__$1,c,xs__7309__auto__,temp__6753__auto__))
;
var fs__36746__auto__ = cljs.core.seq.call(null,iterys__36745__auto__.call(null,cljs.core.range.call(null,(1),(com.nicki.flipside.main.num_of_grid_rows + (1)))));
if(fs__36746__auto__){
return cljs.core.concat.call(null,fs__36746__auto__,com$nicki$flipside$main$iter__42850.call(null,cljs.core.rest.call(null,s__42851__$1)));
} else {
var G__42857 = cljs.core.rest.call(null,s__42851__$1);
s__42851__$1 = G__42857;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,cljs.core.range.call(null,(1),(com.nicki.flipside.main.num_of_grid_columns + (1))));
})(),new cljs.core.Keyword(null,"pathway","pathway",2057031186),cljs.core.PersistentVector.EMPTY], null));
}
com.nicki.flipside.main.trigger_BANG_ = (function com$nicki$flipside$main$trigger_BANG_(event){
return cljs.core.swap_BANG_.call(null,com.nicki.flipside.main._BANG_app,(function (app){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event.cljs$core$ILookup$)))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_hover_tile__42876 = cljs.core.get.call(null,event,new cljs.core.Keyword("event","hover-tile","event/hover-tile",-1882048031),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((!((event_hover_tile__42876 == null)))?((((event_hover_tile__42876.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event_hover_tile__42876.cljs$core$ILookup$)))?true:(((!event_hover_tile__42876.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event_hover_tile__42876):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event_hover_tile__42876))){
try{var event_hover_tile__42876_r__42880 = cljs.core.get.call(null,event_hover_tile__42876,new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_hover_tile__42876_r__42880,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var event_hover_tile__42876_c__42881 = cljs.core.get.call(null,event_hover_tile__42876,new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_hover_tile__42876_c__42881,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var c = cljs.core.get.call(null,event_hover_tile__42876,new cljs.core.Keyword(null,"c","c",-1763192079));
var r = cljs.core.get.call(null,event_hover_tile__42876,new cljs.core.Keyword(null,"r","r",-471384190));
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),cljs.core.butlast.call(null,cljs.core.last.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))))){
var res__38111__auto___42888 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))].join('');
console.log(res__38111__auto___42888);


return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathway","pathway",2057031186)], null),cljs.core.pop);
} else {
var res__38111__auto___42889 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))].join('');
console.log(res__38111__auto___42889);


return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathway","pathway",2057031186)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null));
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e42887){if((e42887 instanceof Error)){
var e__38640__auto__ = e42887;
if((e__38640__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__38640__auto__;
}
} else {
throw e42887;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42886){if((e42886 instanceof Error)){
var e__38640__auto__ = e42886;
if((e__38640__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__38640__auto__;
}
} else {
throw e42886;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42884){if((e42884 instanceof Error)){
var e__38640__auto__ = e42884;
if((e__38640__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__38640__auto__;
}
} else {
throw e42884;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e42882){if((e42882 instanceof Error)){
var e__38640__auto__ = e42882;
if((e__38640__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
} else {
throw e__38640__auto__;
}
} else {
throw e42882;

}
}}));
});
com.nicki.flipside.main.draw_grid = (function com$nicki$flipside$main$draw_grid(columns,rows,box_size,app){
var iter__36749__auto__ = (function com$nicki$flipside$main$draw_grid_$_iter__42897(s__42898){
return (new cljs.core.LazySeq(null,(function (){
var s__42898__$1 = s__42898;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__42898__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var c = cljs.core.first.call(null,xs__7309__auto__);
var iterys__36745__auto__ = ((function (s__42898__$1,c,xs__7309__auto__,temp__6753__auto__){
return (function com$nicki$flipside$main$draw_grid_$_iter__42897_$_iter__42899(s__42900){
return (new cljs.core.LazySeq(null,((function (s__42898__$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__42900__$1 = s__42900;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__42900__$1);
if(temp__6753__auto____$1){
var s__42900__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42900__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__42900__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__42902 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__42901 = (0);
while(true){
if((i__42901 < size__36748__auto__)){
var r = cljs.core._nth.call(null,c__36747__auto__,i__42901);
cljs.core.chunk_append.call(null,b__42902,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".grid-box",".grid-box",-1312580984),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",-624763371),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)")].join('')], null),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__42901,s__42898__$1,r,c__36747__auto__,size__36748__auto__,b__42902,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
return com.nicki.flipside.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","hover-tile","event/hover-tile",-1882048031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null));
});})(i__42901,s__42898__$1,r,c__36747__auto__,size__36748__auto__,b__42902,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
,new cljs.core.Keyword(null,"data-box-in-path","data-box-in-path",1850018182),cljs.core.some.call(null,((function (i__42901,s__42898__$1,r,c__36747__auto__,size__36748__auto__,b__42902,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (p1__42890_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),p1__42890_SHARP_);
});})(i__42901,s__42898__$1,r,c__36747__auto__,size__36748__auto__,b__42902,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))], null)], null));

var G__42903 = (i__42901 + (1));
i__42901 = G__42903;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42902),com$nicki$flipside$main$draw_grid_$_iter__42897_$_iter__42899.call(null,cljs.core.chunk_rest.call(null,s__42900__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42902),null);
}
} else {
var r = cljs.core.first.call(null,s__42900__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".grid-box",".grid-box",-1312580984),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),new cljs.core.Keyword(null,"-webkit-transform","-webkit-transform",-624763371),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)")].join('')], null),new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join(''),new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (s__42898__$1,r,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
return com.nicki.flipside.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","hover-tile","event/hover-tile",-1882048031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null));
});})(s__42898__$1,r,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
,new cljs.core.Keyword(null,"data-box-in-path","data-box-in-path",1850018182),cljs.core.some.call(null,((function (s__42898__$1,r,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (p1__42890_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),p1__42890_SHARP_);
});})(s__42898__$1,r,s__42900__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))], null)], null),com$nicki$flipside$main$draw_grid_$_iter__42897_$_iter__42899.call(null,cljs.core.rest.call(null,s__42900__$2)));
}
} else {
return null;
}
break;
}
});})(s__42898__$1,c,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__42898__$1,c,xs__7309__auto__,temp__6753__auto__))
;
var fs__36746__auto__ = cljs.core.seq.call(null,iterys__36745__auto__.call(null,cljs.core.range.call(null,(1),(rows + (1)))));
if(fs__36746__auto__){
return cljs.core.concat.call(null,fs__36746__auto__,com$nicki$flipside$main$draw_grid_$_iter__42897.call(null,cljs.core.rest.call(null,s__42898__$1)));
} else {
var G__42904 = cljs.core.rest.call(null,s__42898__$1);
s__42898__$1 = G__42904;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,cljs.core.range.call(null,(1),(columns + (1))));
});
com.nicki.flipside.main._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,app){
var attrs42905 = com.nicki.flipside.main.draw_grid.call(null,com.nicki.flipside.main.num_of_grid_columns,com.nicki.flipside.main.num_of_grid_rows,com.nicki.flipside.main.grid_box_size,app);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs42905))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app"], null)], null),attrs42905)):({"className": "app"})),((cljs.core.map_QMARK_.call(null,attrs42905))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs42905)], null)));
}),null,"*app");
com.nicki.flipside.main.render_BANG_ = (function com$nicki$flipside$main$render_BANG_(app){
return ReactDOM.render(com.nicki.flipside.main._STAR_app.call(null,com.nicki.flipside.main.trigger_BANG_,app),document.getElementById("container"));
});
if(typeof com.nicki.flipside.main.hack !== 'undefined'){
} else {
com.nicki.flipside.main.hack = (function (){
cljs.core.add_watch.call(null,com.nicki.flipside.main._BANG_app,new cljs.core.Keyword(null,"re-render","re-render",1133553258),(function (_,___$1,old,new$){
return com.nicki.flipside.main.render_BANG_.call(null,new$);
}));

return cljs.core.swap_BANG_.call(null,com.nicki.flipside.main._BANG_app,cljs.core.assoc,new cljs.core.Keyword(null,"play?","play?",1098824048),true);
})()
;
}

//# sourceMappingURL=main.js.map?rel=1510989888349