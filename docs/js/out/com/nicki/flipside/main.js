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
com.nicki.flipside.main._BANG_app = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"play?","play?",1098824048),false,new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"r","r",-471384190),null], null),new cljs.core.Keyword(null,"pathway","pathway",2057031186),cljs.core.PersistentVector.EMPTY], null));
}
/**
 * move the character to the next tile in the pathway
 */
com.nicki.flipside.main.move_character = (function com$nicki$flipside$main$move_character(app){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"c","c",-1763192079)], null),cljs.core.first.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app),(0)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"r","r",-471384190)], null),cljs.core.second.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app),(0))));
});
/**
 * drop the first tile from the pathway vector
 */
com.nicki.flipside.main.drop_first_tile = (function com$nicki$flipside$main$drop_first_tile(app){
return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathway","pathway",2057031186)], null),(function (p1__44224_SHARP_){
return cljs.core.vec.call(null,cljs.core.rest.call(null,p1__44224_SHARP_));
}));
});
/**
 * given two tiles in the grid, check if they share an edge
 */
com.nicki.flipside.main.adjacent_tiles_QMARK_ = (function com$nicki$flipside$main$adjacent_tiles_QMARK_(vec1,vec2){
var vec__44231 = vec1;
var c1 = cljs.core.nth.call(null,vec__44231,(0),null);
var r1 = cljs.core.nth.call(null,vec__44231,(1),null);
var vec__44234 = vec2;
var c2 = cljs.core.nth.call(null,vec__44234,(0),null);
var r2 = cljs.core.nth.call(null,vec__44234,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,vec1)) || (cljs.core._EQ_.call(null,cljs.core.PersistentVector.EMPTY,vec2))){
return true;
} else {
if((cljs.core._EQ_.call(null,null,vec1)) || (cljs.core._EQ_.call(null,null,vec2))){
return true;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,r1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c2,r2], null))){
return false;
} else {
if((cljs.core._EQ_.call(null,c1,c2)) && ((((-1) <= (r1 - r2))) && (((r1 - r2) <= (1))))){
return true;
} else {
if((cljs.core._EQ_.call(null,r1,r2)) && ((((-1) <= (c1 - c2))) && (((c1 - c2) <= (1))))){
return true;
} else {
return false;

}
}
}
}
}
});
com.nicki.flipside.main.add_to_pathway = (function com$nicki$flipside$main$add_to_pathway(app,c,r){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),cljs.core.last.call(null,cljs.core.butlast.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))))){
return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathway","pathway",2057031186)], null),cljs.core.pop);
} else {
if(cljs.core.truth_(com.nicki.flipside.main.adjacent_tiles_QMARK_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),cljs.core.last.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))))){
return cljs.core.update_in.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathway","pathway",2057031186)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null));
} else {
return app;

}
}
});
com.nicki.flipside.main.tick = (function com$nicki$flipside$main$tick(app){

if(((1) < cljs.core.count.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app)))){
return com.nicki.flipside.main.drop_first_tile.call(null,com.nicki.flipside.main.move_character.call(null,app));
} else {
return app;
}
});
com.nicki.flipside.main.trigger_BANG_ = (function com$nicki$flipside$main$trigger_BANG_(event){
return cljs.core.swap_BANG_.call(null,com.nicki.flipside.main._BANG_app,(function (app){
try{if(((!((event == null)))?((((event.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event.cljs$core$ILookup$)))?true:(((!event.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event))){
try{var event_tick__44260 = cljs.core.get.call(null,event,new cljs.core.Keyword("event","tick","event/tick",-1302073830),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((event_tick__44260 === null)){
return com.nicki.flipside.main.tick.call(null,app);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44268){if((e44268 instanceof Error)){
var e__38640__auto__ = e44268;
if((e__38640__auto__ === cljs.core.match.backtrack)){
try{var event_hover_tile__44259 = cljs.core.get.call(null,event,new cljs.core.Keyword("event","hover-tile","event/hover-tile",-1882048031),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(((!((event_hover_tile__44259 == null)))?((((event_hover_tile__44259.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === event_hover_tile__44259.cljs$core$ILookup$)))?true:(((!event_hover_tile__44259.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event_hover_tile__44259):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,event_hover_tile__44259))){
try{var event_hover_tile__44259_r__44264 = cljs.core.get.call(null,event_hover_tile__44259,new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_hover_tile__44259_r__44264,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
try{var event_hover_tile__44259_c__44265 = cljs.core.get.call(null,event_hover_tile__44259,new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if(cljs.core.not_EQ_.call(null,event_hover_tile__44259_c__44265,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780))){
var c = cljs.core.get.call(null,event_hover_tile__44259,new cljs.core.Keyword(null,"c","c",-1763192079));
var r = cljs.core.get.call(null,event_hover_tile__44259,new cljs.core.Keyword(null,"r","r",-471384190));
return com.nicki.flipside.main.add_to_pathway.call(null,app,c,r);
} else {
throw cljs.core.match.backtrack;

}
}catch (e44272){if((e44272 instanceof Error)){
var e__38640__auto____$1 = e44272;
if((e__38640__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__38640__auto____$1;
}
} else {
throw e44272;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44271){if((e44271 instanceof Error)){
var e__38640__auto____$1 = e44271;
if((e__38640__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__38640__auto____$1;
}
} else {
throw e44271;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44269){if((e44269 instanceof Error)){
var e__38640__auto____$1 = e44269;
if((e__38640__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__38640__auto____$1;
}
} else {
throw e44269;

}
}} else {
throw e__38640__auto__;
}
} else {
throw e44268;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44266){if((e44266 instanceof Error)){
var e__38640__auto__ = e44266;
if((e__38640__auto__ === cljs.core.match.backtrack)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event)].join('')));
} else {
throw e__38640__auto__;
}
} else {
throw e44266;

}
}}));
});
com.nicki.flipside.main._STAR_grid = rum.core.build_defc.call(null,(function (columns,rows,box_size,app){
return React.createElement("div",({"className": "grid"}),cljs.core.into_array.call(null,(function (){var iter__36749__auto__ = (function com$nicki$flipside$main$iter__44274(s__44275){
return (new cljs.core.LazySeq(null,(function (){
var s__44275__$1 = s__44275;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__44275__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var c = cljs.core.first.call(null,xs__7309__auto__);
var iterys__36745__auto__ = ((function (s__44275__$1,c,xs__7309__auto__,temp__6753__auto__){
return (function com$nicki$flipside$main$iter__44274_$_iter__44276(s__44277){
return (new cljs.core.LazySeq(null,((function (s__44275__$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__44277__$1 = s__44277;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__44277__$1);
if(temp__6753__auto____$1){
var s__44277__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__44277__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__44277__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__44279 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__44278 = (0);
while(true){
if((i__44278 < size__36748__auto__)){
var r = cljs.core._nth.call(null,c__36747__auto__,i__44278);
cljs.core.chunk_append.call(null,b__44279,React.createElement("div",({"style": ({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "transform": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px")].join('')}), "className": "grid-box-positioner"}),React.createElement("div",({"onMouseOver": ((function (i__44278,s__44275__$1,r,c__36747__auto__,size__36748__auto__,b__44279,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
return com.nicki.flipside.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","hover-tile","event/hover-tile",-1882048031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null));
});})(i__44278,s__44275__$1,r,c__36747__auto__,size__36748__auto__,b__44279,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
, "data-box-in-path": (cljs.core.truth_(cljs.core.some.call(null,((function (i__44278,s__44275__$1,r,c__36747__auto__,size__36748__auto__,b__44279,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (p1__44273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),p1__44273_SHARP_);
});})(i__44278,s__44275__$1,r,c__36747__auto__,size__36748__auto__,b__44279,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app)))?true:false), "className": "grid-box"}),React.createElement("div",({"className": "front"})),React.createElement("div",({"className": "back"})))));

var G__44284 = (i__44278 + (1));
i__44278 = G__44284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44279),com$nicki$flipside$main$iter__44274_$_iter__44276.call(null,cljs.core.chunk_rest.call(null,s__44277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__44279),null);
}
} else {
var r = cljs.core.first.call(null,s__44277__$2);
return cljs.core.cons.call(null,React.createElement("div",({"style": ({"width": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(box_size),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''), "transform": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d("),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * c)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((box_size * r)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px")].join('')}), "className": "grid-box-positioner"}),React.createElement("div",({"onMouseOver": ((function (s__44275__$1,r,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (){
return com.nicki.flipside.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","hover-tile","event/hover-tile",-1882048031),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),c,new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null));
});})(s__44275__$1,r,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
, "data-box-in-path": (cljs.core.truth_(cljs.core.some.call(null,((function (s__44275__$1,r,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__){
return (function (p1__44273_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null),p1__44273_SHARP_);
});})(s__44275__$1,r,s__44277__$2,temp__6753__auto____$1,c,xs__7309__auto__,temp__6753__auto__))
,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app)))?true:false), "className": "grid-box"}),React.createElement("div",({"className": "front"})),React.createElement("div",({"className": "back"})))),com$nicki$flipside$main$iter__44274_$_iter__44276.call(null,cljs.core.rest.call(null,s__44277__$2)));
}
} else {
return null;
}
break;
}
});})(s__44275__$1,c,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__44275__$1,c,xs__7309__auto__,temp__6753__auto__))
;
var fs__36746__auto__ = cljs.core.seq.call(null,iterys__36745__auto__.call(null,cljs.core.range.call(null,(1),(rows + (1)))));
if(fs__36746__auto__){
return cljs.core.concat.call(null,fs__36746__auto__,com$nicki$flipside$main$iter__44274.call(null,cljs.core.rest.call(null,s__44275__$1)));
} else {
var G__44285 = cljs.core.rest.call(null,s__44275__$1);
s__44275__$1 = G__44285;
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
})()));
}),null,"*grid");
com.nicki.flipside.main._STAR_character = rum.core.build_defc.call(null,(function (box_size,app){
var c = cljs.core.first.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app)));
var r = cljs.core.second.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app)));
return React.createElement("img",({"src": "content/banana.svg", "style": ({"width": "40px", "height": "40px", "transform": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("translate3d("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + (box_size * c))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((5) + (box_size * r))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px, 0px)")].join('')})}));
}),null,"*character");
com.nicki.flipside.main._STAR_app = rum.core.build_defc.call(null,(function (trigger_BANG_,app){
var attrs44286 = com.nicki.flipside.main._STAR_grid.call(null,com.nicki.flipside.main.num_of_grid_columns,com.nicki.flipside.main.num_of_grid_rows,com.nicki.flipside.main.grid_box_size,app);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs44286))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["app"], null)], null),attrs44286)):({"className": "app"})),((cljs.core.map_QMARK_.call(null,attrs44286))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,com.nicki.flipside.main._STAR_character.call(null,com.nicki.flipside.main.grid_box_size,app))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs44286),sablono.interpreter.interpret.call(null,com.nicki.flipside.main._STAR_character.call(null,com.nicki.flipside.main.grid_box_size,app))], null)));
}),null,"*app");
com.nicki.flipside.main.render_BANG_ = (function com$nicki$flipside$main$render_BANG_(app){
ReactDOM.render(com.nicki.flipside.main._STAR_app.call(null,com.nicki.flipside.main.trigger_BANG_,app),document.getElementById("container"));

var res__38111__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(app))].join('');
console.log(res__38111__auto__);

return res__38111__auto__;
});
if(typeof com.nicki.flipside.main.hack !== 'undefined'){
} else {
com.nicki.flipside.main.hack = (function (){
cljs.core.add_watch.call(null,com.nicki.flipside.main._BANG_app,new cljs.core.Keyword(null,"re-render","re-render",1133553258),(function (_,___$1,old,new$){
return com.nicki.flipside.main.render_BANG_.call(null,new$);
}));

return setInterval((function (){
return com.nicki.flipside.main.trigger_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("event","tick","event/tick",-1302073830),null], null));
}),(400));
})()
;
}
var fake_app_44287 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pathway","pathway",2057031186),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(com.nicki.flipside.main.add_to_pathway.call(null,fake_app_44287,(1),(1))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null))){
} else {
var res__38111__auto___44288 = "Test failed: a tile can't be added to an empty pathway";
console.log(res__38111__auto___44288);

}
var fake_app_44289 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pathway","pathway",2057031186),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(com.nicki.flipside.main.add_to_pathway.call(null,com.nicki.flipside.main.add_to_pathway.call(null,fake_app_44289,(1),(1)),(2),(1))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)], null))){
} else {
var res__38111__auto___44290 = "Test failed: a tile can't be added to a non-empty pathway";
console.log(res__38111__auto___44290);

}
var fake_app_44291 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pathway","pathway",2057031186),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(com.nicki.flipside.main.add_to_pathway.call(null,com.nicki.flipside.main.add_to_pathway.call(null,fake_app_44291,(1),(1)),(2),(2))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null))){
} else {
var res__38111__auto___44292 = "Test failed: you're letting diagonal tiles be added to the pathway";
console.log(res__38111__auto___44292);

}
var fake_app_44293 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pathway","pathway",2057031186),cljs.core.PersistentVector.EMPTY], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pathway","pathway",2057031186).cljs$core$IFn$_invoke$arity$1(com.nicki.flipside.main.add_to_pathway.call(null,com.nicki.flipside.main.add_to_pathway.call(null,fake_app_44293,(1),(1)),(3),(2))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null))){
} else {
var res__38111__auto___44294 = "Test failed: you're letting gaps be created in the pathway";
console.log(res__38111__auto___44294);

}
var fake_app_44295 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathway","pathway",2057031186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"r","r",-471384190),null], null)], null);
var character_map_to_vec_44296 = ((function (fake_app_44295){
return (function (map){
var c = new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(map));
var r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(map));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,r], null);
});})(fake_app_44295))
;
if(cljs.core.truth_(com.nicki.flipside.main.adjacent_tiles_QMARK_.call(null,character_map_to_vec_44296.call(null,com.nicki.flipside.main.tick.call(null,com.nicki.flipside.main.add_to_pathway.call(null,com.nicki.flipside.main.add_to_pathway.call(null,fake_app_44295,(1),(2)),(2),(2)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)))){
} else {
var res__38111__auto___44297 = "Test failed: your character might not be adjacent to the beginning of the pathway";
console.log(res__38111__auto___44297);

}
var fake_app_44298 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pathway","pathway",2057031186),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"c","c",-1763192079),null,new cljs.core.Keyword(null,"r","r",-471384190),null], null),new cljs.core.Keyword(null,"bombs","bombs",1955561180),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null)], null),new cljs.core.Keyword(null,"dead?","dead?",990391228),false], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(com.nicki.flipside.main.tick.call(null,com.nicki.flipside.main.tick.call(null,com.nicki.flipside.main.add_to_pathway.call(null,com.nicki.flipside.main.add_to_pathway.call(null,fake_app_44298,(1),(2)),(2),(2))))))){
} else {
var res__38111__auto___44299 = "Test failed: your character should die when it runs into a bomb";
console.log(res__38111__auto___44299);

}

//# sourceMappingURL=main.js.map?rel=1512349701825