// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37221 = arguments.length;
var i__37109__auto___37222 = (0);
while(true){
if((i__37109__auto___37222 < len__37108__auto___37221)){
args__37115__auto__.push((arguments[i__37109__auto___37222]));

var G__37223 = (i__37109__auto___37222 + (1));
i__37109__auto___37222 = G__37223;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq37220){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37220));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37225 = arguments.length;
var i__37109__auto___37226 = (0);
while(true){
if((i__37109__auto___37226 < len__37108__auto___37225)){
args__37115__auto__.push((arguments[i__37109__auto___37226]));

var G__37227 = (i__37109__auto___37226 + (1));
i__37109__auto___37226 = G__37227;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq37224){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37224));
});

var g_QMARK__37228 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_37229 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37228){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__37228))
,null));
var mkg_37230 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__37228,g_37229){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__37228,g_37229))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__37228,g_37229,mkg_37230){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37228).call(null,x);
});})(g_QMARK__37228,g_37229,mkg_37230))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__37228,g_37229,mkg_37230){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_37230).call(null,gfn);
});})(g_QMARK__37228,g_37229,mkg_37230))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__37228,g_37229,mkg_37230){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_37229).call(null,generator);
});})(g_QMARK__37228,g_37229,mkg_37230))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__37192__auto___37250 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__37192__auto___37250){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37251 = arguments.length;
var i__37109__auto___37252 = (0);
while(true){
if((i__37109__auto___37252 < len__37108__auto___37251)){
args__37115__auto__.push((arguments[i__37109__auto___37252]));

var G__37253 = (i__37109__auto___37252 + (1));
i__37109__auto___37252 = G__37253;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37250))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37250){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37250),args);
});})(g__37192__auto___37250))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__37192__auto___37250){
return (function (seq37231){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37231));
});})(g__37192__auto___37250))
;


var g__37192__auto___37254 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__37192__auto___37254){
return (function cljs$spec$impl$gen$list(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37255 = arguments.length;
var i__37109__auto___37256 = (0);
while(true){
if((i__37109__auto___37256 < len__37108__auto___37255)){
args__37115__auto__.push((arguments[i__37109__auto___37256]));

var G__37257 = (i__37109__auto___37256 + (1));
i__37109__auto___37256 = G__37257;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37254))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37254){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37254),args);
});})(g__37192__auto___37254))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__37192__auto___37254){
return (function (seq37232){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37232));
});})(g__37192__auto___37254))
;


var g__37192__auto___37258 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__37192__auto___37258){
return (function cljs$spec$impl$gen$map(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37259 = arguments.length;
var i__37109__auto___37260 = (0);
while(true){
if((i__37109__auto___37260 < len__37108__auto___37259)){
args__37115__auto__.push((arguments[i__37109__auto___37260]));

var G__37261 = (i__37109__auto___37260 + (1));
i__37109__auto___37260 = G__37261;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37258))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37258){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37258),args);
});})(g__37192__auto___37258))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__37192__auto___37258){
return (function (seq37233){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37233));
});})(g__37192__auto___37258))
;


var g__37192__auto___37262 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__37192__auto___37262){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37263 = arguments.length;
var i__37109__auto___37264 = (0);
while(true){
if((i__37109__auto___37264 < len__37108__auto___37263)){
args__37115__auto__.push((arguments[i__37109__auto___37264]));

var G__37265 = (i__37109__auto___37264 + (1));
i__37109__auto___37264 = G__37265;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37262))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37262){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37262),args);
});})(g__37192__auto___37262))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__37192__auto___37262){
return (function (seq37234){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37234));
});})(g__37192__auto___37262))
;


var g__37192__auto___37266 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__37192__auto___37266){
return (function cljs$spec$impl$gen$set(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37267 = arguments.length;
var i__37109__auto___37268 = (0);
while(true){
if((i__37109__auto___37268 < len__37108__auto___37267)){
args__37115__auto__.push((arguments[i__37109__auto___37268]));

var G__37269 = (i__37109__auto___37268 + (1));
i__37109__auto___37268 = G__37269;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37266))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37266){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37266),args);
});})(g__37192__auto___37266))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__37192__auto___37266){
return (function (seq37235){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37235));
});})(g__37192__auto___37266))
;


var g__37192__auto___37270 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__37192__auto___37270){
return (function cljs$spec$impl$gen$vector(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37271 = arguments.length;
var i__37109__auto___37272 = (0);
while(true){
if((i__37109__auto___37272 < len__37108__auto___37271)){
args__37115__auto__.push((arguments[i__37109__auto___37272]));

var G__37273 = (i__37109__auto___37272 + (1));
i__37109__auto___37272 = G__37273;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37270))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37270){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37270),args);
});})(g__37192__auto___37270))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__37192__auto___37270){
return (function (seq37236){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37236));
});})(g__37192__auto___37270))
;


var g__37192__auto___37274 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__37192__auto___37274){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37275 = arguments.length;
var i__37109__auto___37276 = (0);
while(true){
if((i__37109__auto___37276 < len__37108__auto___37275)){
args__37115__auto__.push((arguments[i__37109__auto___37276]));

var G__37277 = (i__37109__auto___37276 + (1));
i__37109__auto___37276 = G__37277;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37274))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37274){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37274),args);
});})(g__37192__auto___37274))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__37192__auto___37274){
return (function (seq37237){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37237));
});})(g__37192__auto___37274))
;


var g__37192__auto___37278 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__37192__auto___37278){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37279 = arguments.length;
var i__37109__auto___37280 = (0);
while(true){
if((i__37109__auto___37280 < len__37108__auto___37279)){
args__37115__auto__.push((arguments[i__37109__auto___37280]));

var G__37281 = (i__37109__auto___37280 + (1));
i__37109__auto___37280 = G__37281;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37278))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37278){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37278),args);
});})(g__37192__auto___37278))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__37192__auto___37278){
return (function (seq37238){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37238));
});})(g__37192__auto___37278))
;


var g__37192__auto___37282 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__37192__auto___37282){
return (function cljs$spec$impl$gen$elements(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37283 = arguments.length;
var i__37109__auto___37284 = (0);
while(true){
if((i__37109__auto___37284 < len__37108__auto___37283)){
args__37115__auto__.push((arguments[i__37109__auto___37284]));

var G__37285 = (i__37109__auto___37284 + (1));
i__37109__auto___37284 = G__37285;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37282))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37282){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37282),args);
});})(g__37192__auto___37282))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__37192__auto___37282){
return (function (seq37239){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37239));
});})(g__37192__auto___37282))
;


var g__37192__auto___37286 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__37192__auto___37286){
return (function cljs$spec$impl$gen$bind(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37287 = arguments.length;
var i__37109__auto___37288 = (0);
while(true){
if((i__37109__auto___37288 < len__37108__auto___37287)){
args__37115__auto__.push((arguments[i__37109__auto___37288]));

var G__37289 = (i__37109__auto___37288 + (1));
i__37109__auto___37288 = G__37289;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37286))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37286){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37286),args);
});})(g__37192__auto___37286))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__37192__auto___37286){
return (function (seq37240){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37240));
});})(g__37192__auto___37286))
;


var g__37192__auto___37290 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__37192__auto___37290){
return (function cljs$spec$impl$gen$choose(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37291 = arguments.length;
var i__37109__auto___37292 = (0);
while(true){
if((i__37109__auto___37292 < len__37108__auto___37291)){
args__37115__auto__.push((arguments[i__37109__auto___37292]));

var G__37293 = (i__37109__auto___37292 + (1));
i__37109__auto___37292 = G__37293;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37290))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37290){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37290),args);
});})(g__37192__auto___37290))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__37192__auto___37290){
return (function (seq37241){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37241));
});})(g__37192__auto___37290))
;


var g__37192__auto___37294 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__37192__auto___37294){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37295 = arguments.length;
var i__37109__auto___37296 = (0);
while(true){
if((i__37109__auto___37296 < len__37108__auto___37295)){
args__37115__auto__.push((arguments[i__37109__auto___37296]));

var G__37297 = (i__37109__auto___37296 + (1));
i__37109__auto___37296 = G__37297;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37294))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37294){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37294),args);
});})(g__37192__auto___37294))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__37192__auto___37294){
return (function (seq37242){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37242));
});})(g__37192__auto___37294))
;


var g__37192__auto___37298 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__37192__auto___37298){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37299 = arguments.length;
var i__37109__auto___37300 = (0);
while(true){
if((i__37109__auto___37300 < len__37108__auto___37299)){
args__37115__auto__.push((arguments[i__37109__auto___37300]));

var G__37301 = (i__37109__auto___37300 + (1));
i__37109__auto___37300 = G__37301;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37298))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37298){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37298),args);
});})(g__37192__auto___37298))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__37192__auto___37298){
return (function (seq37243){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37243));
});})(g__37192__auto___37298))
;


var g__37192__auto___37302 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__37192__auto___37302){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37303 = arguments.length;
var i__37109__auto___37304 = (0);
while(true){
if((i__37109__auto___37304 < len__37108__auto___37303)){
args__37115__auto__.push((arguments[i__37109__auto___37304]));

var G__37305 = (i__37109__auto___37304 + (1));
i__37109__auto___37304 = G__37305;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37302))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37302){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37302),args);
});})(g__37192__auto___37302))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__37192__auto___37302){
return (function (seq37244){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37244));
});})(g__37192__auto___37302))
;


var g__37192__auto___37306 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__37192__auto___37306){
return (function cljs$spec$impl$gen$sample(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37307 = arguments.length;
var i__37109__auto___37308 = (0);
while(true){
if((i__37109__auto___37308 < len__37108__auto___37307)){
args__37115__auto__.push((arguments[i__37109__auto___37308]));

var G__37309 = (i__37109__auto___37308 + (1));
i__37109__auto___37308 = G__37309;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37306))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37306){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37306),args);
});})(g__37192__auto___37306))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__37192__auto___37306){
return (function (seq37245){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37245));
});})(g__37192__auto___37306))
;


var g__37192__auto___37310 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__37192__auto___37310){
return (function cljs$spec$impl$gen$return(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37311 = arguments.length;
var i__37109__auto___37312 = (0);
while(true){
if((i__37109__auto___37312 < len__37108__auto___37311)){
args__37115__auto__.push((arguments[i__37109__auto___37312]));

var G__37313 = (i__37109__auto___37312 + (1));
i__37109__auto___37312 = G__37313;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37310))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37310){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37310),args);
});})(g__37192__auto___37310))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__37192__auto___37310){
return (function (seq37246){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37246));
});})(g__37192__auto___37310))
;


var g__37192__auto___37314 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__37192__auto___37314){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37315 = arguments.length;
var i__37109__auto___37316 = (0);
while(true){
if((i__37109__auto___37316 < len__37108__auto___37315)){
args__37115__auto__.push((arguments[i__37109__auto___37316]));

var G__37317 = (i__37109__auto___37316 + (1));
i__37109__auto___37316 = G__37317;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37314))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37314){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37314),args);
});})(g__37192__auto___37314))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__37192__auto___37314){
return (function (seq37247){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37247));
});})(g__37192__auto___37314))
;


var g__37192__auto___37318 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__37192__auto___37318){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37319 = arguments.length;
var i__37109__auto___37320 = (0);
while(true){
if((i__37109__auto___37320 < len__37108__auto___37319)){
args__37115__auto__.push((arguments[i__37109__auto___37320]));

var G__37321 = (i__37109__auto___37320 + (1));
i__37109__auto___37320 = G__37321;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37318))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37318){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37318),args);
});})(g__37192__auto___37318))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__37192__auto___37318){
return (function (seq37248){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37248));
});})(g__37192__auto___37318))
;


var g__37192__auto___37322 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.impl.gen.frequency = ((function (g__37192__auto___37322){
return (function cljs$spec$impl$gen$frequency(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37323 = arguments.length;
var i__37109__auto___37324 = (0);
while(true){
if((i__37109__auto___37324 < len__37108__auto___37323)){
args__37115__auto__.push((arguments[i__37109__auto___37324]));

var G__37325 = (i__37109__auto___37324 + (1));
i__37109__auto___37324 = G__37325;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37192__auto___37322))
;

cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37192__auto___37322){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__37192__auto___37322),args);
});})(g__37192__auto___37322))
;

cljs.spec.impl.gen.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.frequency.cljs$lang$applyTo = ((function (g__37192__auto___37322){
return (function (seq37249){
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37249));
});})(g__37192__auto___37322))
;

var g__37205__auto___37347 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__37205__auto___37347){
return (function cljs$spec$impl$gen$any(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37348 = arguments.length;
var i__37109__auto___37349 = (0);
while(true){
if((i__37109__auto___37349 < len__37108__auto___37348)){
args__37115__auto__.push((arguments[i__37109__auto___37349]));

var G__37350 = (i__37109__auto___37349 + (1));
i__37109__auto___37349 = G__37350;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37347))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37347){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37347);
});})(g__37205__auto___37347))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__37205__auto___37347){
return (function (seq37326){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37326));
});})(g__37205__auto___37347))
;


var g__37205__auto___37351 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__37205__auto___37351){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37352 = arguments.length;
var i__37109__auto___37353 = (0);
while(true){
if((i__37109__auto___37353 < len__37108__auto___37352)){
args__37115__auto__.push((arguments[i__37109__auto___37353]));

var G__37354 = (i__37109__auto___37353 + (1));
i__37109__auto___37353 = G__37354;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37351))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37351){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37351);
});})(g__37205__auto___37351))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__37205__auto___37351){
return (function (seq37327){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37327));
});})(g__37205__auto___37351))
;


var g__37205__auto___37355 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__37205__auto___37355){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37356 = arguments.length;
var i__37109__auto___37357 = (0);
while(true){
if((i__37109__auto___37357 < len__37108__auto___37356)){
args__37115__auto__.push((arguments[i__37109__auto___37357]));

var G__37358 = (i__37109__auto___37357 + (1));
i__37109__auto___37357 = G__37358;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37355))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37355){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37355);
});})(g__37205__auto___37355))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__37205__auto___37355){
return (function (seq37328){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37328));
});})(g__37205__auto___37355))
;


var g__37205__auto___37359 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__37205__auto___37359){
return (function cljs$spec$impl$gen$char(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37360 = arguments.length;
var i__37109__auto___37361 = (0);
while(true){
if((i__37109__auto___37361 < len__37108__auto___37360)){
args__37115__auto__.push((arguments[i__37109__auto___37361]));

var G__37362 = (i__37109__auto___37361 + (1));
i__37109__auto___37361 = G__37362;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37359))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37359){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37359);
});})(g__37205__auto___37359))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__37205__auto___37359){
return (function (seq37329){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37329));
});})(g__37205__auto___37359))
;


var g__37205__auto___37363 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__37205__auto___37363){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37364 = arguments.length;
var i__37109__auto___37365 = (0);
while(true){
if((i__37109__auto___37365 < len__37108__auto___37364)){
args__37115__auto__.push((arguments[i__37109__auto___37365]));

var G__37366 = (i__37109__auto___37365 + (1));
i__37109__auto___37365 = G__37366;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37363))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37363){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37363);
});})(g__37205__auto___37363))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__37205__auto___37363){
return (function (seq37330){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37330));
});})(g__37205__auto___37363))
;


var g__37205__auto___37367 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__37205__auto___37367){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37368 = arguments.length;
var i__37109__auto___37369 = (0);
while(true){
if((i__37109__auto___37369 < len__37108__auto___37368)){
args__37115__auto__.push((arguments[i__37109__auto___37369]));

var G__37370 = (i__37109__auto___37369 + (1));
i__37109__auto___37369 = G__37370;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37367))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37367){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37367);
});})(g__37205__auto___37367))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__37205__auto___37367){
return (function (seq37331){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37331));
});})(g__37205__auto___37367))
;


var g__37205__auto___37371 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__37205__auto___37371){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37372 = arguments.length;
var i__37109__auto___37373 = (0);
while(true){
if((i__37109__auto___37373 < len__37108__auto___37372)){
args__37115__auto__.push((arguments[i__37109__auto___37373]));

var G__37374 = (i__37109__auto___37373 + (1));
i__37109__auto___37373 = G__37374;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37371))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37371){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37371);
});})(g__37205__auto___37371))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__37205__auto___37371){
return (function (seq37332){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37332));
});})(g__37205__auto___37371))
;


var g__37205__auto___37375 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__37205__auto___37375){
return (function cljs$spec$impl$gen$double(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37376 = arguments.length;
var i__37109__auto___37377 = (0);
while(true){
if((i__37109__auto___37377 < len__37108__auto___37376)){
args__37115__auto__.push((arguments[i__37109__auto___37377]));

var G__37378 = (i__37109__auto___37377 + (1));
i__37109__auto___37377 = G__37378;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37375))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37375){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37375);
});})(g__37205__auto___37375))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__37205__auto___37375){
return (function (seq37333){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37333));
});})(g__37205__auto___37375))
;


var g__37205__auto___37379 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__37205__auto___37379){
return (function cljs$spec$impl$gen$int(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37380 = arguments.length;
var i__37109__auto___37381 = (0);
while(true){
if((i__37109__auto___37381 < len__37108__auto___37380)){
args__37115__auto__.push((arguments[i__37109__auto___37381]));

var G__37382 = (i__37109__auto___37381 + (1));
i__37109__auto___37381 = G__37382;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37379))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37379){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37379);
});})(g__37205__auto___37379))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__37205__auto___37379){
return (function (seq37334){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37334));
});})(g__37205__auto___37379))
;


var g__37205__auto___37383 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__37205__auto___37383){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37384 = arguments.length;
var i__37109__auto___37385 = (0);
while(true){
if((i__37109__auto___37385 < len__37108__auto___37384)){
args__37115__auto__.push((arguments[i__37109__auto___37385]));

var G__37386 = (i__37109__auto___37385 + (1));
i__37109__auto___37385 = G__37386;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37383))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37383){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37383);
});})(g__37205__auto___37383))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__37205__auto___37383){
return (function (seq37335){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37335));
});})(g__37205__auto___37383))
;


var g__37205__auto___37387 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__37205__auto___37387){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37388 = arguments.length;
var i__37109__auto___37389 = (0);
while(true){
if((i__37109__auto___37389 < len__37108__auto___37388)){
args__37115__auto__.push((arguments[i__37109__auto___37389]));

var G__37390 = (i__37109__auto___37389 + (1));
i__37109__auto___37389 = G__37390;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37387))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37387){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37387);
});})(g__37205__auto___37387))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__37205__auto___37387){
return (function (seq37336){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37336));
});})(g__37205__auto___37387))
;


var g__37205__auto___37391 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__37205__auto___37391){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37392 = arguments.length;
var i__37109__auto___37393 = (0);
while(true){
if((i__37109__auto___37393 < len__37108__auto___37392)){
args__37115__auto__.push((arguments[i__37109__auto___37393]));

var G__37394 = (i__37109__auto___37393 + (1));
i__37109__auto___37393 = G__37394;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37391))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37391){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37391);
});})(g__37205__auto___37391))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__37205__auto___37391){
return (function (seq37337){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37337));
});})(g__37205__auto___37391))
;


var g__37205__auto___37395 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__37205__auto___37395){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37396 = arguments.length;
var i__37109__auto___37397 = (0);
while(true){
if((i__37109__auto___37397 < len__37108__auto___37396)){
args__37115__auto__.push((arguments[i__37109__auto___37397]));

var G__37398 = (i__37109__auto___37397 + (1));
i__37109__auto___37397 = G__37398;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37395))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37395){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37395);
});})(g__37205__auto___37395))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__37205__auto___37395){
return (function (seq37338){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37338));
});})(g__37205__auto___37395))
;


var g__37205__auto___37399 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__37205__auto___37399){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37400 = arguments.length;
var i__37109__auto___37401 = (0);
while(true){
if((i__37109__auto___37401 < len__37108__auto___37400)){
args__37115__auto__.push((arguments[i__37109__auto___37401]));

var G__37402 = (i__37109__auto___37401 + (1));
i__37109__auto___37401 = G__37402;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37399))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37399){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37399);
});})(g__37205__auto___37399))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__37205__auto___37399){
return (function (seq37339){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37339));
});})(g__37205__auto___37399))
;


var g__37205__auto___37403 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__37205__auto___37403){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37404 = arguments.length;
var i__37109__auto___37405 = (0);
while(true){
if((i__37109__auto___37405 < len__37108__auto___37404)){
args__37115__auto__.push((arguments[i__37109__auto___37405]));

var G__37406 = (i__37109__auto___37405 + (1));
i__37109__auto___37405 = G__37406;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37403))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37403){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37403);
});})(g__37205__auto___37403))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__37205__auto___37403){
return (function (seq37340){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37340));
});})(g__37205__auto___37403))
;


var g__37205__auto___37407 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__37205__auto___37407){
return (function cljs$spec$impl$gen$string(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37408 = arguments.length;
var i__37109__auto___37409 = (0);
while(true){
if((i__37109__auto___37409 < len__37108__auto___37408)){
args__37115__auto__.push((arguments[i__37109__auto___37409]));

var G__37410 = (i__37109__auto___37409 + (1));
i__37109__auto___37409 = G__37410;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37407))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37407){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37407);
});})(g__37205__auto___37407))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__37205__auto___37407){
return (function (seq37341){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37341));
});})(g__37205__auto___37407))
;


var g__37205__auto___37411 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__37205__auto___37411){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37412 = arguments.length;
var i__37109__auto___37413 = (0);
while(true){
if((i__37109__auto___37413 < len__37108__auto___37412)){
args__37115__auto__.push((arguments[i__37109__auto___37413]));

var G__37414 = (i__37109__auto___37413 + (1));
i__37109__auto___37413 = G__37414;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37411))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37411){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37411);
});})(g__37205__auto___37411))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__37205__auto___37411){
return (function (seq37342){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37342));
});})(g__37205__auto___37411))
;


var g__37205__auto___37415 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__37205__auto___37415){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37416 = arguments.length;
var i__37109__auto___37417 = (0);
while(true){
if((i__37109__auto___37417 < len__37108__auto___37416)){
args__37115__auto__.push((arguments[i__37109__auto___37417]));

var G__37418 = (i__37109__auto___37417 + (1));
i__37109__auto___37417 = G__37418;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37415))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37415){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37415);
});})(g__37205__auto___37415))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__37205__auto___37415){
return (function (seq37343){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37343));
});})(g__37205__auto___37415))
;


var g__37205__auto___37419 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__37205__auto___37419){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37420 = arguments.length;
var i__37109__auto___37421 = (0);
while(true){
if((i__37109__auto___37421 < len__37108__auto___37420)){
args__37115__auto__.push((arguments[i__37109__auto___37421]));

var G__37422 = (i__37109__auto___37421 + (1));
i__37109__auto___37421 = G__37422;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37419))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37419){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37419);
});})(g__37205__auto___37419))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__37205__auto___37419){
return (function (seq37344){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37344));
});})(g__37205__auto___37419))
;


var g__37205__auto___37423 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__37205__auto___37423){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37424 = arguments.length;
var i__37109__auto___37425 = (0);
while(true){
if((i__37109__auto___37425 < len__37108__auto___37424)){
args__37115__auto__.push((arguments[i__37109__auto___37425]));

var G__37426 = (i__37109__auto___37425 + (1));
i__37109__auto___37425 = G__37426;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37423))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37423){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37423);
});})(g__37205__auto___37423))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__37205__auto___37423){
return (function (seq37345){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37345));
});})(g__37205__auto___37423))
;


var g__37205__auto___37427 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__37205__auto___37427){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37428 = arguments.length;
var i__37109__auto___37429 = (0);
while(true){
if((i__37109__auto___37429 < len__37108__auto___37428)){
args__37115__auto__.push((arguments[i__37109__auto___37429]));

var G__37430 = (i__37109__auto___37429 + (1));
i__37109__auto___37429 = G__37430;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});})(g__37205__auto___37427))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__37205__auto___37427){
return (function (args){
return cljs.core.deref.call(null,g__37205__auto___37427);
});})(g__37205__auto___37427))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__37205__auto___37427){
return (function (seq37346){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37346));
});})(g__37205__auto___37427))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__37115__auto__ = [];
var len__37108__auto___37433 = arguments.length;
var i__37109__auto___37434 = (0);
while(true){
if((i__37109__auto___37434 < len__37108__auto___37433)){
args__37115__auto__.push((arguments[i__37109__auto___37434]));

var G__37435 = (i__37109__auto___37434 + (1));
i__37109__auto___37434 = G__37435;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__37431_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37431_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq37432){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37432));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__37436_SHARP_){
return (new Date(p1__37436_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1509941604087