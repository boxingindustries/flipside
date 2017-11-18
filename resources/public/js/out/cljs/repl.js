// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50954){
var map__50979 = p__50954;
var map__50979__$1 = ((((!((map__50979 == null)))?((((map__50979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50979):map__50979);
var m = map__50979__$1;
var n = cljs.core.get.call(null,map__50979__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50979__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6753__auto__)){
var ns = temp__6753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50981_51003 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50982_51004 = null;
var count__50983_51005 = (0);
var i__50984_51006 = (0);
while(true){
if((i__50984_51006 < count__50983_51005)){
var f_51007 = cljs.core._nth.call(null,chunk__50982_51004,i__50984_51006);
cljs.core.println.call(null,"  ",f_51007);

var G__51008 = seq__50981_51003;
var G__51009 = chunk__50982_51004;
var G__51010 = count__50983_51005;
var G__51011 = (i__50984_51006 + (1));
seq__50981_51003 = G__51008;
chunk__50982_51004 = G__51009;
count__50983_51005 = G__51010;
i__50984_51006 = G__51011;
continue;
} else {
var temp__6753__auto___51012 = cljs.core.seq.call(null,seq__50981_51003);
if(temp__6753__auto___51012){
var seq__50981_51013__$1 = temp__6753__auto___51012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50981_51013__$1)){
var c__36798__auto___51014 = cljs.core.chunk_first.call(null,seq__50981_51013__$1);
var G__51015 = cljs.core.chunk_rest.call(null,seq__50981_51013__$1);
var G__51016 = c__36798__auto___51014;
var G__51017 = cljs.core.count.call(null,c__36798__auto___51014);
var G__51018 = (0);
seq__50981_51003 = G__51015;
chunk__50982_51004 = G__51016;
count__50983_51005 = G__51017;
i__50984_51006 = G__51018;
continue;
} else {
var f_51019 = cljs.core.first.call(null,seq__50981_51013__$1);
cljs.core.println.call(null,"  ",f_51019);

var G__51020 = cljs.core.next.call(null,seq__50981_51013__$1);
var G__51021 = null;
var G__51022 = (0);
var G__51023 = (0);
seq__50981_51003 = G__51020;
chunk__50982_51004 = G__51021;
count__50983_51005 = G__51022;
i__50984_51006 = G__51023;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51024 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35887__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51024);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51024)))?cljs.core.second.call(null,arglists_51024):arglists_51024));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50985_51025 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50986_51026 = null;
var count__50987_51027 = (0);
var i__50988_51028 = (0);
while(true){
if((i__50988_51028 < count__50987_51027)){
var vec__50989_51029 = cljs.core._nth.call(null,chunk__50986_51026,i__50988_51028);
var name_51030 = cljs.core.nth.call(null,vec__50989_51029,(0),null);
var map__50992_51031 = cljs.core.nth.call(null,vec__50989_51029,(1),null);
var map__50992_51032__$1 = ((((!((map__50992_51031 == null)))?((((map__50992_51031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50992_51031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50992_51031):map__50992_51031);
var doc_51033 = cljs.core.get.call(null,map__50992_51032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51034 = cljs.core.get.call(null,map__50992_51032__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51030);

cljs.core.println.call(null," ",arglists_51034);

if(cljs.core.truth_(doc_51033)){
cljs.core.println.call(null," ",doc_51033);
} else {
}

var G__51035 = seq__50985_51025;
var G__51036 = chunk__50986_51026;
var G__51037 = count__50987_51027;
var G__51038 = (i__50988_51028 + (1));
seq__50985_51025 = G__51035;
chunk__50986_51026 = G__51036;
count__50987_51027 = G__51037;
i__50988_51028 = G__51038;
continue;
} else {
var temp__6753__auto___51039 = cljs.core.seq.call(null,seq__50985_51025);
if(temp__6753__auto___51039){
var seq__50985_51040__$1 = temp__6753__auto___51039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50985_51040__$1)){
var c__36798__auto___51041 = cljs.core.chunk_first.call(null,seq__50985_51040__$1);
var G__51042 = cljs.core.chunk_rest.call(null,seq__50985_51040__$1);
var G__51043 = c__36798__auto___51041;
var G__51044 = cljs.core.count.call(null,c__36798__auto___51041);
var G__51045 = (0);
seq__50985_51025 = G__51042;
chunk__50986_51026 = G__51043;
count__50987_51027 = G__51044;
i__50988_51028 = G__51045;
continue;
} else {
var vec__50994_51046 = cljs.core.first.call(null,seq__50985_51040__$1);
var name_51047 = cljs.core.nth.call(null,vec__50994_51046,(0),null);
var map__50997_51048 = cljs.core.nth.call(null,vec__50994_51046,(1),null);
var map__50997_51049__$1 = ((((!((map__50997_51048 == null)))?((((map__50997_51048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50997_51048.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50997_51048):map__50997_51048);
var doc_51050 = cljs.core.get.call(null,map__50997_51049__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51051 = cljs.core.get.call(null,map__50997_51049__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51047);

cljs.core.println.call(null," ",arglists_51051);

if(cljs.core.truth_(doc_51050)){
cljs.core.println.call(null," ",doc_51050);
} else {
}

var G__51052 = cljs.core.next.call(null,seq__50985_51040__$1);
var G__51053 = null;
var G__51054 = (0);
var G__51055 = (0);
seq__50985_51025 = G__51052;
chunk__50986_51026 = G__51053;
count__50987_51027 = G__51054;
i__50988_51028 = G__51055;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__6753__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6753__auto__)){
var fnspec = temp__6753__auto__;
cljs.core.print.call(null,"Spec");

var seq__50999 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51000 = null;
var count__51001 = (0);
var i__51002 = (0);
while(true){
if((i__51002 < count__51001)){
var role = cljs.core._nth.call(null,chunk__51000,i__51002);
var temp__6753__auto___51056__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___51056__$1)){
var spec_51057 = temp__6753__auto___51056__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_51057));
} else {
}

var G__51058 = seq__50999;
var G__51059 = chunk__51000;
var G__51060 = count__51001;
var G__51061 = (i__51002 + (1));
seq__50999 = G__51058;
chunk__51000 = G__51059;
count__51001 = G__51060;
i__51002 = G__51061;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__50999);
if(temp__6753__auto____$1){
var seq__50999__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50999__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__50999__$1);
var G__51062 = cljs.core.chunk_rest.call(null,seq__50999__$1);
var G__51063 = c__36798__auto__;
var G__51064 = cljs.core.count.call(null,c__36798__auto__);
var G__51065 = (0);
seq__50999 = G__51062;
chunk__51000 = G__51063;
count__51001 = G__51064;
i__51002 = G__51065;
continue;
} else {
var role = cljs.core.first.call(null,seq__50999__$1);
var temp__6753__auto___51066__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___51066__$2)){
var spec_51067 = temp__6753__auto___51066__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_51067));
} else {
}

var G__51068 = cljs.core.next.call(null,seq__50999__$1);
var G__51069 = null;
var G__51070 = (0);
var G__51071 = (0);
seq__50999 = G__51068;
chunk__51000 = G__51069;
count__51001 = G__51070;
i__51002 = G__51071;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1509941620800