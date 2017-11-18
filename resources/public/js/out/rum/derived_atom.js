// Compiled by ClojureScript 1.9.494 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var args37494 = [];
var len__37108__auto___37514 = arguments.length;
var i__37109__auto___37515 = (0);
while(true){
if((i__37109__auto___37515 < len__37108__auto___37514)){
args37494.push((arguments[i__37109__auto___37515]));

var G__37516 = (i__37109__auto___37515 + (1));
i__37109__auto___37515 = G__37516;
continue;
} else {
}
break;
}

var G__37496 = args37494.length;
switch (G__37496) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37494.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__37497 = opts;
var map__37497__$1 = ((((!((map__37497 == null)))?((((map__37497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37497):map__37497);
var ref = cljs.core.get.call(null,map__37497__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__37497__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__37499 = cljs.core.count.call(null,refs);
switch (G__37499) {
case (1):
var vec__37500 = refs;
var a = cljs.core.nth.call(null,vec__37500,(0),null);
return ((function (vec__37500,a,G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__37500,a,G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__37503 = refs;
var a = cljs.core.nth.call(null,vec__37503,(0),null);
var b = cljs.core.nth.call(null,vec__37503,(1),null);
return ((function (vec__37503,a,b,G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__37503,a,b,G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__37506 = refs;
var a = cljs.core.nth.call(null,vec__37506,(0),null);
var b = cljs.core.nth.call(null,vec__37506,(1),null);
var c = cljs.core.nth.call(null,vec__37506,(2),null);
return ((function (vec__37506,a,b,c,G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__37506,a,b,c,G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__37499,map__37497,map__37497__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__37509 = ref;
cljs.core.reset_BANG_.call(null,G__37509,recalc.call(null));

return G__37509;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__37497,map__37497__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__37497,map__37497__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__37497,map__37497__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__37497,map__37497__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__37510_37519 = cljs.core.seq.call(null,refs);
var chunk__37511_37520 = null;
var count__37512_37521 = (0);
var i__37513_37522 = (0);
while(true){
if((i__37513_37522 < count__37512_37521)){
var ref_37523__$1 = cljs.core._nth.call(null,chunk__37511_37520,i__37513_37522);
cljs.core.add_watch.call(null,ref_37523__$1,key,watch);

var G__37524 = seq__37510_37519;
var G__37525 = chunk__37511_37520;
var G__37526 = count__37512_37521;
var G__37527 = (i__37513_37522 + (1));
seq__37510_37519 = G__37524;
chunk__37511_37520 = G__37525;
count__37512_37521 = G__37526;
i__37513_37522 = G__37527;
continue;
} else {
var temp__6753__auto___37528 = cljs.core.seq.call(null,seq__37510_37519);
if(temp__6753__auto___37528){
var seq__37510_37529__$1 = temp__6753__auto___37528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37510_37529__$1)){
var c__36798__auto___37530 = cljs.core.chunk_first.call(null,seq__37510_37529__$1);
var G__37531 = cljs.core.chunk_rest.call(null,seq__37510_37529__$1);
var G__37532 = c__36798__auto___37530;
var G__37533 = cljs.core.count.call(null,c__36798__auto___37530);
var G__37534 = (0);
seq__37510_37519 = G__37531;
chunk__37511_37520 = G__37532;
count__37512_37521 = G__37533;
i__37513_37522 = G__37534;
continue;
} else {
var ref_37535__$1 = cljs.core.first.call(null,seq__37510_37529__$1);
cljs.core.add_watch.call(null,ref_37535__$1,key,watch);

var G__37536 = cljs.core.next.call(null,seq__37510_37529__$1);
var G__37537 = null;
var G__37538 = (0);
var G__37539 = (0);
seq__37510_37519 = G__37536;
chunk__37511_37520 = G__37537;
count__37512_37521 = G__37538;
i__37513_37522 = G__37539;
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


//# sourceMappingURL=derived_atom.js.map?rel=1509941604612