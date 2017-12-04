// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50978){
var map__51003 = p__50978;
var map__51003__$1 = ((((!((map__51003 == null)))?((((map__51003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51003):map__51003);
var m = map__51003__$1;
var n = cljs.core.get.call(null,map__51003__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51003__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__51005_51027 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51006_51028 = null;
var count__51007_51029 = (0);
var i__51008_51030 = (0);
while(true){
if((i__51008_51030 < count__51007_51029)){
var f_51031 = cljs.core._nth.call(null,chunk__51006_51028,i__51008_51030);
cljs.core.println.call(null,"  ",f_51031);

var G__51032 = seq__51005_51027;
var G__51033 = chunk__51006_51028;
var G__51034 = count__51007_51029;
var G__51035 = (i__51008_51030 + (1));
seq__51005_51027 = G__51032;
chunk__51006_51028 = G__51033;
count__51007_51029 = G__51034;
i__51008_51030 = G__51035;
continue;
} else {
var temp__6753__auto___51036 = cljs.core.seq.call(null,seq__51005_51027);
if(temp__6753__auto___51036){
var seq__51005_51037__$1 = temp__6753__auto___51036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51005_51037__$1)){
var c__36798__auto___51038 = cljs.core.chunk_first.call(null,seq__51005_51037__$1);
var G__51039 = cljs.core.chunk_rest.call(null,seq__51005_51037__$1);
var G__51040 = c__36798__auto___51038;
var G__51041 = cljs.core.count.call(null,c__36798__auto___51038);
var G__51042 = (0);
seq__51005_51027 = G__51039;
chunk__51006_51028 = G__51040;
count__51007_51029 = G__51041;
i__51008_51030 = G__51042;
continue;
} else {
var f_51043 = cljs.core.first.call(null,seq__51005_51037__$1);
cljs.core.println.call(null,"  ",f_51043);

var G__51044 = cljs.core.next.call(null,seq__51005_51037__$1);
var G__51045 = null;
var G__51046 = (0);
var G__51047 = (0);
seq__51005_51027 = G__51044;
chunk__51006_51028 = G__51045;
count__51007_51029 = G__51046;
i__51008_51030 = G__51047;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51048 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__35887__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51048);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51048)))?cljs.core.second.call(null,arglists_51048):arglists_51048));
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
var seq__51009_51049 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51010_51050 = null;
var count__51011_51051 = (0);
var i__51012_51052 = (0);
while(true){
if((i__51012_51052 < count__51011_51051)){
var vec__51013_51053 = cljs.core._nth.call(null,chunk__51010_51050,i__51012_51052);
var name_51054 = cljs.core.nth.call(null,vec__51013_51053,(0),null);
var map__51016_51055 = cljs.core.nth.call(null,vec__51013_51053,(1),null);
var map__51016_51056__$1 = ((((!((map__51016_51055 == null)))?((((map__51016_51055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51016_51055.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51016_51055):map__51016_51055);
var doc_51057 = cljs.core.get.call(null,map__51016_51056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51058 = cljs.core.get.call(null,map__51016_51056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51054);

cljs.core.println.call(null," ",arglists_51058);

if(cljs.core.truth_(doc_51057)){
cljs.core.println.call(null," ",doc_51057);
} else {
}

var G__51059 = seq__51009_51049;
var G__51060 = chunk__51010_51050;
var G__51061 = count__51011_51051;
var G__51062 = (i__51012_51052 + (1));
seq__51009_51049 = G__51059;
chunk__51010_51050 = G__51060;
count__51011_51051 = G__51061;
i__51012_51052 = G__51062;
continue;
} else {
var temp__6753__auto___51063 = cljs.core.seq.call(null,seq__51009_51049);
if(temp__6753__auto___51063){
var seq__51009_51064__$1 = temp__6753__auto___51063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51009_51064__$1)){
var c__36798__auto___51065 = cljs.core.chunk_first.call(null,seq__51009_51064__$1);
var G__51066 = cljs.core.chunk_rest.call(null,seq__51009_51064__$1);
var G__51067 = c__36798__auto___51065;
var G__51068 = cljs.core.count.call(null,c__36798__auto___51065);
var G__51069 = (0);
seq__51009_51049 = G__51066;
chunk__51010_51050 = G__51067;
count__51011_51051 = G__51068;
i__51012_51052 = G__51069;
continue;
} else {
var vec__51018_51070 = cljs.core.first.call(null,seq__51009_51064__$1);
var name_51071 = cljs.core.nth.call(null,vec__51018_51070,(0),null);
var map__51021_51072 = cljs.core.nth.call(null,vec__51018_51070,(1),null);
var map__51021_51073__$1 = ((((!((map__51021_51072 == null)))?((((map__51021_51072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51021_51072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51021_51072):map__51021_51072);
var doc_51074 = cljs.core.get.call(null,map__51021_51073__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51075 = cljs.core.get.call(null,map__51021_51073__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51071);

cljs.core.println.call(null," ",arglists_51075);

if(cljs.core.truth_(doc_51074)){
cljs.core.println.call(null," ",doc_51074);
} else {
}

var G__51076 = cljs.core.next.call(null,seq__51009_51064__$1);
var G__51077 = null;
var G__51078 = (0);
var G__51079 = (0);
seq__51009_51049 = G__51076;
chunk__51010_51050 = G__51077;
count__51011_51051 = G__51078;
i__51012_51052 = G__51079;
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

var seq__51023 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51024 = null;
var count__51025 = (0);
var i__51026 = (0);
while(true){
if((i__51026 < count__51025)){
var role = cljs.core._nth.call(null,chunk__51024,i__51026);
var temp__6753__auto___51080__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___51080__$1)){
var spec_51081 = temp__6753__auto___51080__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_51081));
} else {
}

var G__51082 = seq__51023;
var G__51083 = chunk__51024;
var G__51084 = count__51025;
var G__51085 = (i__51026 + (1));
seq__51023 = G__51082;
chunk__51024 = G__51083;
count__51025 = G__51084;
i__51026 = G__51085;
continue;
} else {
var temp__6753__auto____$1 = cljs.core.seq.call(null,seq__51023);
if(temp__6753__auto____$1){
var seq__51023__$1 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51023__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__51023__$1);
var G__51086 = cljs.core.chunk_rest.call(null,seq__51023__$1);
var G__51087 = c__36798__auto__;
var G__51088 = cljs.core.count.call(null,c__36798__auto__);
var G__51089 = (0);
seq__51023 = G__51086;
chunk__51024 = G__51087;
count__51025 = G__51088;
i__51026 = G__51089;
continue;
} else {
var role = cljs.core.first.call(null,seq__51023__$1);
var temp__6753__auto___51090__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6753__auto___51090__$2)){
var spec_51091 = temp__6753__auto___51090__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_51091));
} else {
}

var G__51092 = cljs.core.next.call(null,seq__51023__$1);
var G__51093 = null;
var G__51094 = (0);
var G__51095 = (0);
seq__51023 = G__51092;
chunk__51024 = G__51093;
count__51025 = G__51094;
i__51026 = G__51095;
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

//# sourceMappingURL=repl.js.map?rel=1511925504847