// Compiled by ClojureScript 1.9.494 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args37495 = [];
var len__37108__auto___37515 = arguments.length;
var i__37109__auto___37516 = (0);
while(true){
if((i__37109__auto___37516 < len__37108__auto___37515)){
args37495.push((arguments[i__37109__auto___37516]));

var G__37517 = (i__37109__auto___37516 + (1));
i__37109__auto___37516 = G__37517;
continue;
} else {
}
break;
}

var G__37497 = args37495.length;
switch (G__37497) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37495.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__37498 = opts;
var map__37498__$1 = ((((!((map__37498 == null)))?((((map__37498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37498):map__37498);
var ref = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__37498__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__37500 = cljs.core.count.call(null,refs);
switch (G__37500) {
case (1):
var vec__37501 = refs;
var a = cljs.core.nth.call(null,vec__37501,(0),null);
return ((function (vec__37501,a,G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__37501,a,G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__37504 = refs;
var a = cljs.core.nth.call(null,vec__37504,(0),null);
var b = cljs.core.nth.call(null,vec__37504,(1),null);
return ((function (vec__37504,a,b,G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__37504,a,b,G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__37507 = refs;
var a = cljs.core.nth.call(null,vec__37507,(0),null);
var b = cljs.core.nth.call(null,vec__37507,(1),null);
var c = cljs.core.nth.call(null,vec__37507,(2),null);
return ((function (vec__37507,a,b,c,G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__37507,a,b,c,G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__37500,map__37498,map__37498__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__37510 = ref;
cljs.core.reset_BANG_.call(null,G__37510,recalc.call(null));

return G__37510;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__37498,map__37498__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__37498,map__37498__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__37498,map__37498__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__37498,map__37498__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__37511_37520 = cljs.core.seq.call(null,refs);
var chunk__37512_37521 = null;
var count__37513_37522 = (0);
var i__37514_37523 = (0);
while(true){
if((i__37514_37523 < count__37513_37522)){
var ref_37524__$1 = cljs.core._nth.call(null,chunk__37512_37521,i__37514_37523);
cljs.core.add_watch.call(null,ref_37524__$1,key,watch);

var G__37525 = seq__37511_37520;
var G__37526 = chunk__37512_37521;
var G__37527 = count__37513_37522;
var G__37528 = (i__37514_37523 + (1));
seq__37511_37520 = G__37525;
chunk__37512_37521 = G__37526;
count__37513_37522 = G__37527;
i__37514_37523 = G__37528;
continue;
} else {
var temp__6753__auto___37529 = cljs.core.seq.call(null,seq__37511_37520);
if(temp__6753__auto___37529){
var seq__37511_37530__$1 = temp__6753__auto___37529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37511_37530__$1)){
var c__36798__auto___37531 = cljs.core.chunk_first.call(null,seq__37511_37530__$1);
var G__37532 = cljs.core.chunk_rest.call(null,seq__37511_37530__$1);
var G__37533 = c__36798__auto___37531;
var G__37534 = cljs.core.count.call(null,c__36798__auto___37531);
var G__37535 = (0);
seq__37511_37520 = G__37532;
chunk__37512_37521 = G__37533;
count__37513_37522 = G__37534;
i__37514_37523 = G__37535;
continue;
} else {
var ref_37536__$1 = cljs.core.first.call(null,seq__37511_37530__$1);
cljs.core.add_watch.call(null,ref_37536__$1,key,watch);

var G__37537 = cljs.core.next.call(null,seq__37511_37530__$1);
var G__37538 = null;
var G__37539 = (0);
var G__37540 = (0);
seq__37511_37520 = G__37537;
chunk__37512_37521 = G__37538;
count__37513_37522 = G__37539;
i__37514_37523 = G__37540;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map?rel=1511925485860