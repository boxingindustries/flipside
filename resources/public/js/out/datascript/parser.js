// Compiled by ClojureScript 1.9.494 {}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('datascript.db');

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__36605__auto__ = (((_ == null))?null:_);
var m__36606__auto__ = (datascript.parser._collect[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,_,pred,acc);
} else {
var m__36606__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,_,pred,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__36605__auto__ = (((_ == null))?null:_);
var m__36606__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,_,acc);
} else {
var m__36606__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,_,acc);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__36605__auto__ = (((_ == null))?null:_);
var m__36606__auto__ = (datascript.parser._postwalk[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,_,f);
} else {
var m__36606__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,_,f);
} else {
throw cljs.core.missing_protocol.call(null,"ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,(function (p1__39634_SHARP_,p2__39633_SHARP_){
var temp__6751__auto__ = parse_el.call(null,p2__39633_SHARP_);
if(cljs.core.truth_(temp__6751__auto__)){
var parsed = temp__6751__auto__;
return cljs.core.conj.call(null,p1__39634_SHARP_,parsed);
} else {
return cljs.core.reduced.call(null,null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__37115__auto__ = [];
var len__37108__auto___39643 = arguments.length;
var i__37109__auto___39644 = (0);
while(true){
if((i__37109__auto___39644 < len__37108__auto___39643)){
args__37115__auto__.push((arguments[i__37109__auto___39644]));

var G__39645 = (i__37109__auto___39644 + (1));
i__37109__auto___39644 = G__39645;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__39638){
var vec__39639 = p__39638;
var acc = cljs.core.nth.call(null,vec__39639,(0),null);
var acc__$1 = (function (){var or__35887__auto__ = acc;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(pred.call(null,form))){
return cljs.core.conj.call(null,acc__$1,form);
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect.call(null,form,pred,acc__$1);
} else {
if(cljs.core.truth_(datascript.db.seqable_QMARK_.call(null,form))){
return cljs.core.reduce.call(null,((function (acc__$1,vec__39639,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.call(null,pred,form__$1,acc__$2);
});})(acc__$1,vec__39639,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq39635){
var G__39636 = cljs.core.first.call(null,seq39635);
var seq39635__$1 = cljs.core.next.call(null,seq39635);
var G__39637 = cljs.core.first.call(null,seq39635__$1);
var seq39635__$2 = cljs.core.next.call(null,seq39635__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__39636,G__39637,seq39635__$2);
});

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__35887__auto__ = cljs.core.empty_QMARK_.call(null,coll);
if(or__35887__auto__){
return or__35887__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return f.call(null,datascript.parser._postwalk.call(null,form,f));
} else {
if(cljs.core.map_QMARK_.call(null,form)){
return f.call(null,cljs.core.reduce.call(null,(function (form__$1,p__39654){
var vec__39655 = p__39654;
var k = cljs.core.nth.call(null,vec__39655,(0),null);
var v = cljs.core.nth.call(null,vec__39655,(1),null);
return cljs.core.assoc.call(null,form__$1,k,datascript.parser.postwalk.call(null,v,f));
}),form,form));
} else {
if(cljs.core.seq_QMARK_.call(null,form)){
return f.call(null,cljs.core.map.call(null,(function (p1__39646_SHARP_){
return datascript.parser.postwalk.call(null,p1__39646_SHARP_,f);
}),form));
} else {
if(cljs.core.coll_QMARK_.call(null,form)){
return f.call(null,cljs.core.into.call(null,cljs.core.empty.call(null,form),cljs.core.map.call(null,(function (p1__39647_SHARP_){
return datascript.parser.postwalk.call(null,p1__39647_SHARP_,f);
}),form)));
} else {
return f.call(null,form);

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"source","source",-433931539),source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__35887__auto__ = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,obj));
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39662,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39664 = k39662;
switch (G__39664) {
default:
return cljs.core.get.call(null,self__.__extmap,k39662,else__36565__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Placeholder{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39661){
var self__ = this;
var G__39661__$1 = this;
return (new cljs.core.RecordIter((0),G__39661__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39661){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39665 = cljs.core.keyword_identical_QMARK_;
var expr__39666 = k__36570__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39661),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39661){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Placeholder(G__39661,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39658){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39659,acc39660){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39660;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39660){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39660;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__39663){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.call(null,G__39663),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39673,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39675 = (((k39673 instanceof cljs.core.Keyword))?k39673.fqn:null);
switch (G__39675) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39673,else__36565__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Variable{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39672){
var self__ = this;
var G__39672__$1 = this;
return (new cljs.core.RecordIter((0),G__39672__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39672){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39676 = cljs.core.keyword_identical_QMARK_;
var expr__39677 = k__36570__auto__;
if(cljs.core.truth_(pred__39676.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__39677))){
return (new datascript.parser.Variable(G__39672,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39672),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39672){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__39672,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39669){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk.call(null,self__.symbol,f39669),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39670,acc39671){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39670,self__.symbol,acc39671);
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39671){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39671,self__.symbol);
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__39674){
return (new datascript.parser.Variable(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__39674),null,cljs.core.dissoc.call(null,G__39674,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39684,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39686 = (((k39684 instanceof cljs.core.Keyword))?k39684.fqn:null);
switch (G__39686) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39684,else__36565__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.SrcVar{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39683){
var self__ = this;
var G__39683__$1 = this;
return (new cljs.core.RecordIter((0),G__39683__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39683){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39687 = cljs.core.keyword_identical_QMARK_;
var expr__39688 = k__36570__auto__;
if(cljs.core.truth_(pred__39687.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__39688))){
return (new datascript.parser.SrcVar(G__39683,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39683),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39683){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__39683,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39680){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk.call(null,self__.symbol,f39680),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39681,acc39682){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39681,self__.symbol,acc39682);
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39682){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39682,self__.symbol);
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__39685){
return (new datascript.parser.SrcVar(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__39685),null,cljs.core.dissoc.call(null,G__39685,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39695,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39697 = k39695;
switch (G__39697) {
default:
return cljs.core.get.call(null,self__.__extmap,k39695,else__36565__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39694){
var self__ = this;
var G__39694__$1 = this;
return (new cljs.core.RecordIter((0),G__39694__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39694){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39698 = cljs.core.keyword_identical_QMARK_;
var expr__39699 = k__36570__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39694),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39694){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__39694,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39691){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39692,acc39693){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39693;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39693){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39693;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__39696){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.call(null,G__39696),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39706,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39708 = k39706;
switch (G__39708) {
default:
return cljs.core.get.call(null,self__.__extmap,k39706,else__36565__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.RulesVar{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39705){
var self__ = this;
var G__39705__$1 = this;
return (new cljs.core.RecordIter((0),G__39705__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39705){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39709 = cljs.core.keyword_identical_QMARK_;
var expr__39710 = k__36570__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39705),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39705){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.RulesVar(G__39705,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39702){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39703,acc39704){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39704;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39704){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39704;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__39707){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.call(null,G__39707),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39717,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39719 = (((k39717 instanceof cljs.core.Keyword))?k39717.fqn:null);
switch (G__39719) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39717,else__36565__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Constant{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39716){
var self__ = this;
var G__39716__$1 = this;
return (new cljs.core.RecordIter((0),G__39716__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39716){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39720 = cljs.core.keyword_identical_QMARK_;
var expr__39721 = k__36570__auto__;
if(cljs.core.truth_(pred__39720.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__39721))){
return (new datascript.parser.Constant(G__39716,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39716),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39716){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__39716,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39713){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk.call(null,self__.value,f39713),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39714,acc39715){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39714,self__.value,acc39715);
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39715){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39715,self__.value);
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__39718){
return (new datascript.parser.Constant(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__39718),null,cljs.core.dissoc.call(null,G__39718,new cljs.core.Keyword(null,"value","value",305978217)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39728,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39730 = (((k39728 instanceof cljs.core.Keyword))?k39728.fqn:null);
switch (G__39730) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39728,else__36565__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39727){
var self__ = this;
var G__39727__$1 = this;
return (new cljs.core.RecordIter((0),G__39727__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39727){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39731 = cljs.core.keyword_identical_QMARK_;
var expr__39732 = k__36570__auto__;
if(cljs.core.truth_(pred__39731.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),expr__39732))){
return (new datascript.parser.PlainSymbol(G__39727,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39727),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"symbol","symbol",-1038572696),self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39727){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__39727,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39724){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk.call(null,self__.symbol,f39724),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39725,acc39726){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39725,self__.symbol,acc39726);
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39726){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39726,self__.symbol);
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"symbol","symbol",601958831,null)], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__39729){
return (new datascript.parser.PlainSymbol(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(G__39729),null,cljs.core.dissoc.call(null,G__39729,new cljs.core.Keyword(null,"symbol","symbol",-1038572696)),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.name.call(null,form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,datascript.parser.parse_variable.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_src_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_rules_var.call(null,form))) && (cljs.core.not.call(null,datascript.parser.parse_placeholder.call(null,form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol.call(null,form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__35887__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_constant.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return datascript.parser.parse_src_var.call(null,form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39739,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39741 = (((k39739 instanceof cljs.core.Keyword))?k39739.fqn:null);
switch (G__39741) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39739,else__36565__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.RuleVars{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39738){
var self__ = this;
var G__39738__$1 = this;
return (new cljs.core.RecordIter((0),G__39738__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"free","free",801364328),null,new cljs.core.Keyword(null,"required","required",1807647006),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39738){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39742 = cljs.core.keyword_identical_QMARK_;
var expr__39743 = k__36570__auto__;
if(cljs.core.truth_(pred__39742.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__39743))){
return (new datascript.parser.RuleVars(G__39738,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39742.call(null,new cljs.core.Keyword(null,"free","free",801364328),expr__39743))){
return (new datascript.parser.RuleVars(self__.required,G__39738,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39738),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"free","free",801364328),self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39738){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__39738,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39735){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk.call(null,self__.required,f39735),datascript.parser.postwalk.call(null,self__.free,f39735),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39736,acc39737){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39736,self__.free,datascript.parser.collect.call(null,pred39736,self__.required,acc39737));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39737){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39737,self__.required),self__.free);
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"required","required",-846788763,null),new cljs.core.Symbol(null,"free","free",-1853071441,null)], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__39740){
return (new datascript.parser.RuleVars(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__39740),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(G__39740),null,cljs.core.dissoc.call(null,G__39740,new cljs.core.Keyword(null,"required","required",1807647006),new cljs.core.Keyword(null,"free","free",801364328)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__39749 = ((cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,form),cljs.core.next.call(null,form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.call(null,vec__39749,(0),null);
var rest = cljs.core.nth.call(null,vec__39749,(1),null);
var required_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_.call(null,required_STAR_)) && (cljs.core.empty_QMARK_.call(null,free_STAR_))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,cljs.core.concat.call(null,required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule-vars","parser/rule-vars",-1493174969),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count.call(null,new cljs.core.Keyword(null,"free","free",801364328).cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39756,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39758 = k39756;
switch (G__39758) {
default:
return cljs.core.get.call(null,self__.__extmap,k39756,else__36565__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39755){
var self__ = this;
var G__39755__$1 = this;
return (new cljs.core.RecordIter((0),G__39755__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39755){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39759 = cljs.core.keyword_identical_QMARK_;
var expr__39760 = k__36570__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39755),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39755){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__39755,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39752){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39753,acc39754){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39754;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39754){
var self__ = this;
var ___5116__auto____$1 = this;
return acc39754;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__39757){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.call(null,G__39757),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39767,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39769 = (((k39767 instanceof cljs.core.Keyword))?k39767.fqn:null);
switch (G__39769) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39767,else__36565__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.BindScalar{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39766){
var self__ = this;
var G__39766__$1 = this;
return (new cljs.core.RecordIter((0),G__39766__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variable","variable",-281346492)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variable","variable",-281346492),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39766){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39770 = cljs.core.keyword_identical_QMARK_;
var expr__39771 = k__36570__auto__;
if(cljs.core.truth_(pred__39770.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__39771))){
return (new datascript.parser.BindScalar(G__39766,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39766),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39766){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__39766,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39763){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk.call(null,self__.variable,f39763),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39764,acc39765){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39764,self__.variable,acc39765);
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39765){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39765,self__.variable);
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"variable","variable",1359185035,null)], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__39768){
return (new datascript.parser.BindScalar(new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__39768),null,cljs.core.dissoc.call(null,G__39768,new cljs.core.Keyword(null,"variable","variable",-281346492)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39778,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39780 = (((k39778 instanceof cljs.core.Keyword))?k39778.fqn:null);
switch (G__39780) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39778,else__36565__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.BindTuple{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39777){
var self__ = this;
var G__39777__$1 = this;
return (new cljs.core.RecordIter((0),G__39777__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39777){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39781 = cljs.core.keyword_identical_QMARK_;
var expr__39782 = k__36570__auto__;
if(cljs.core.truth_(pred__39781.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__39782))){
return (new datascript.parser.BindTuple(G__39777,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39777),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39777){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__39777,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39774){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk.call(null,self__.bindings,f39774),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39775,acc39776){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39775,self__.bindings,acc39776);
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39776){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39776,self__.bindings);
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__39779){
return (new datascript.parser.BindTuple(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__39779),null,cljs.core.dissoc.call(null,G__39779,new cljs.core.Keyword(null,"bindings","bindings",1271397192)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39789,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39791 = (((k39789 instanceof cljs.core.Keyword))?k39789.fqn:null);
switch (G__39791) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39789,else__36565__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.BindColl{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39788){
var self__ = this;
var G__39788__$1 = this;
return (new cljs.core.RecordIter((0),G__39788__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39788){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39792 = cljs.core.keyword_identical_QMARK_;
var expr__39793 = k__36570__auto__;
if(cljs.core.truth_(pred__39792.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__39793))){
return (new datascript.parser.BindColl(G__39788,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39788),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39788){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__39788,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39785){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk.call(null,self__.binding,f39785),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39786,acc39787){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39786,self__.binding,acc39787);
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39787){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39787,self__.binding);
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__39790){
return (new datascript.parser.BindColl(new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__39790),null,cljs.core.dissoc.call(null,G__39790,new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),form)){
return datascript.parser.with_source.call(null,(new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__6753__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var var$ = temp__6753__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__35875__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(2));
if(cljs.core.truth_(and__35875__auto__)){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,"...","...",-1926939749,null));
} else {
return and__35875__auto__;
}
})())){
var temp__6751__auto__ = datascript.parser.parse_binding.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__6751__auto__)){
var sub_bind = temp__6751__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__35887__auto__ = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__6753__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__6753__auto__)){
var sub_bindings = temp__6753__auto__;
if(!(cljs.core.empty_QMARK_.call(null,sub_bindings))){
return datascript.parser.with_source.call(null,(new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__35875__auto__ = datascript.parser.of_size_QMARK_.call(null,form,(1));
if(cljs.core.truth_(and__35875__auto__)){
return cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,form));
} else {
return and__35875__auto__;
}
})())){
return datascript.parser.with_source.call(null,(new datascript.parser.BindColl(datascript.parser.parse_bind_tuple.call(null,cljs.core.first.call(null,form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__35887__auto__ = datascript.parser.parse_bind_coll.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_bind_rel.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
var or__35887__auto____$2 = datascript.parser.parse_bind_tuple.call(null,form);
if(cljs.core.truth_(or__35887__auto____$2)){
return or__35887__auto____$2;
} else {
var or__35887__auto____$3 = datascript.parser.parse_bind_ignore.call(null,form);
if(cljs.core.truth_(or__35887__auto____$3)){
return or__35887__auto____$3;
} else {
var or__35887__auto____$4 = datascript.parser.parse_bind_scalar.call(null,form);
if(cljs.core.truth_(or__35887__auto____$4)){
return or__35887__auto____$4;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","binding","parser/binding",-346395752),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__36605__auto__ = (((this$ == null))?null:this$);
var m__36606__auto__ = (datascript.parser._find_vars[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,this$);
} else {
var m__36606__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,cljs.core.last.call(null,self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39800,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39802 = (((k39800 instanceof cljs.core.Keyword))?k39800.fqn:null);
switch (G__39802) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39800,else__36565__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Aggregate{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39799){
var self__ = this;
var G__39799__$1 = this;
return (new cljs.core.RecordIter((0),G__39799__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39799){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39803 = cljs.core.keyword_identical_QMARK_;
var expr__39804 = k__36570__auto__;
if(cljs.core.truth_(pred__39803.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__39804))){
return (new datascript.parser.Aggregate(G__39799,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39803.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__39804))){
return (new datascript.parser.Aggregate(self__.fn,G__39799,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39799),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39799){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__39799,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39796){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk.call(null,self__.fn,f39796),datascript.parser.postwalk.call(null,self__.args,f39796),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39797,acc39798){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39797,self__.args,datascript.parser.collect.call(null,pred39797,self__.fn,acc39798));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39798){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39798,self__.fn),self__.args);
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__39801){
return (new datascript.parser.Aggregate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__39801),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__39801),null,cljs.core.dissoc.call(null,G__39801,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars.call(null,self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39811,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39813 = (((k39811 instanceof cljs.core.Keyword))?k39811.fqn:null);
switch (G__39813) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39811,else__36565__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Pull{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39810){
var self__ = this;
var G__39810__$1 = this;
return (new cljs.core.RecordIter((0),G__39810__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"variable","variable",-281346492),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39810){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39814 = cljs.core.keyword_identical_QMARK_;
var expr__39815 = k__36570__auto__;
if(cljs.core.truth_(pred__39814.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__39815))){
return (new datascript.parser.Pull(G__39810,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39814.call(null,new cljs.core.Keyword(null,"variable","variable",-281346492),expr__39815))){
return (new datascript.parser.Pull(self__.source,G__39810,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39814.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__39815))){
return (new datascript.parser.Pull(self__.source,self__.variable,G__39810,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39810),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"variable","variable",-281346492),self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39810){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__39810,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39807){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk.call(null,self__.source,f39807),datascript.parser.postwalk.call(null,self__.variable,f39807),datascript.parser.postwalk.call(null,self__.pattern,f39807),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39808,acc39809){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39808,self__.pattern,datascript.parser.collect.call(null,pred39808,self__.variable,datascript.parser.collect.call(null,pred39808,self__.source,acc39809)));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39809){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39809,self__.source),self__.variable),self__.pattern);
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"variable","variable",1359185035,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__39812){
return (new datascript.parser.Pull(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__39812),new cljs.core.Keyword(null,"variable","variable",-281346492).cljs$core$IFn$_invoke$arity$1(G__39812),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__39812),null,cljs.core.dissoc.call(null,G__39812,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"variable","variable",-281346492),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__36605__auto__ = (((this$ == null))?null:this$);
var m__36606__auto__ = (datascript.parser.find_elements[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,this$);
} else {
var m__36606__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39822,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39824 = (((k39822 instanceof cljs.core.Keyword))?k39822.fqn:null);
switch (G__39824) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39822,else__36565__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.FindRel{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39821){
var self__ = this;
var G__39821__$1 = this;
return (new cljs.core.RecordIter((0),G__39821__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39821){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39825 = cljs.core.keyword_identical_QMARK_;
var expr__39826 = k__36570__auto__;
if(cljs.core.truth_(pred__39825.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__39826))){
return (new datascript.parser.FindRel(G__39821,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39821),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39821){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__39821,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39818){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk.call(null,self__.elements,f39818),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39819,acc39820){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39819,self__.elements,acc39820);
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39820){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39820,self__.elements);
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__39823){
return (new datascript.parser.FindRel(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__39823),null,cljs.core.dissoc.call(null,G__39823,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39833,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39835 = (((k39833 instanceof cljs.core.Keyword))?k39833.fqn:null);
switch (G__39835) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39833,else__36565__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.FindColl{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39832){
var self__ = this;
var G__39832__$1 = this;
return (new cljs.core.RecordIter((0),G__39832__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39832){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39836 = cljs.core.keyword_identical_QMARK_;
var expr__39837 = k__36570__auto__;
if(cljs.core.truth_(pred__39836.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__39837))){
return (new datascript.parser.FindColl(G__39832,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39832),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39832){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__39832,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39829){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk.call(null,self__.element,f39829),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39830,acc39831){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39830,self__.element,acc39831);
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39831){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39831,self__.element);
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__39834){
return (new datascript.parser.FindColl(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__39834),null,cljs.core.dissoc.call(null,G__39834,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39844,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39846 = (((k39844 instanceof cljs.core.Keyword))?k39844.fqn:null);
switch (G__39846) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39844,else__36565__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.FindScalar{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39843){
var self__ = this;
var G__39843__$1 = this;
return (new cljs.core.RecordIter((0),G__39843__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"element","element",1974019749)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39843){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39847 = cljs.core.keyword_identical_QMARK_;
var expr__39848 = k__36570__auto__;
if(cljs.core.truth_(pred__39847.call(null,new cljs.core.Keyword(null,"element","element",1974019749),expr__39848))){
return (new datascript.parser.FindScalar(G__39843,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39843),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"element","element",1974019749),self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39843){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__39843,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39840){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk.call(null,self__.element,f39840),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39841,acc39842){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39841,self__.element,acc39842);
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39842){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39842,self__.element);
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"element","element",-680416020,null)], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__39845){
return (new datascript.parser.FindScalar(new cljs.core.Keyword(null,"element","element",1974019749).cljs$core$IFn$_invoke$arity$1(G__39845),null,cljs.core.dissoc.call(null,G__39845,new cljs.core.Keyword(null,"element","element",1974019749)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39855,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39857 = (((k39855 instanceof cljs.core.Keyword))?k39855.fqn:null);
switch (G__39857) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39855,else__36565__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.FindTuple{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39854){
var self__ = this;
var G__39854__$1 = this;
return (new cljs.core.RecordIter((0),G__39854__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elements","elements",657646735)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elements","elements",657646735),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39854){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39858 = cljs.core.keyword_identical_QMARK_;
var expr__39859 = k__36570__auto__;
if(cljs.core.truth_(pred__39858.call(null,new cljs.core.Keyword(null,"elements","elements",657646735),expr__39859))){
return (new datascript.parser.FindTuple(G__39854,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39854),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"elements","elements",657646735),self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39854){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__39854,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39851){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk.call(null,self__.elements,f39851),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39852,acc39853){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39852,self__.elements,acc39853);
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39853){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39853,self__.elements);
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elements","elements",-1996789034,null)], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__39856){
return (new datascript.parser.FindTuple(new cljs.core.Keyword(null,"elements","elements",657646735).cljs$core$IFn$_invoke$arity$1(G__39856),null,cljs.core.dissoc.call(null,G__39856,new cljs.core.Keyword(null,"elements","elements",657646735)),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.call(null,datascript.parser._find_vars,datascript.parser.find_elements.call(null,find));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && ((cljs.core.count.call(null,form) >= (2)))){
var vec__39865 = form;
var seq__39866 = cljs.core.seq.call(null,vec__39865);
var first__39867 = cljs.core.first.call(null,seq__39866);
var seq__39866__$1 = cljs.core.next.call(null,seq__39866);
var fn = first__39867;
var args = seq__39866__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__35875__auto__ = fn_STAR_;
if(cljs.core.truth_(and__35875__auto__)){
return args_STAR_;
} else {
return and__35875__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"aggregate","aggregate",-1142967327,null)))){
if((cljs.core.count.call(null,form) >= (3))){
var vec__39871 = form;
var seq__39872 = cljs.core.seq.call(null,vec__39871);
var first__39873 = cljs.core.first.call(null,seq__39872);
var seq__39872__$1 = cljs.core.next.call(null,seq__39872);
var _ = first__39873;
var first__39873__$1 = cljs.core.first.call(null,seq__39872__$1);
var seq__39872__$2 = cljs.core.next.call(null,seq__39872__$1);
var fn = first__39873__$1;
var args = seq__39872__$2;
var fn_STAR_ = datascript.parser.parse_variable.call(null,fn);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__35875__auto__ = fn_STAR_;
if(cljs.core.truth_(and__35875__auto__)){
return args_STAR_;
} else {
return and__35875__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,form),new cljs.core.Symbol(null,"pull","pull",779986722,null)))){
if((((3) <= cljs.core.count.call(null,form))) && ((cljs.core.count.call(null,form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(4));
var src = ((long_QMARK_)?cljs.core.nth.call(null,form,(1)):new cljs.core.Symbol(null,"$","$",-1580747756,null));
var vec__39877 = ((long_QMARK_)?cljs.core.nnext.call(null,form):cljs.core.next.call(null,form));
var var$ = cljs.core.nth.call(null,vec__39877,(0),null);
var pattern = cljs.core.nth.call(null,vec__39877,(1),null);
var src_STAR_ = datascript.parser.parse_src_var.call(null,src);
var var_STAR_ = datascript.parser.parse_variable.call(null,var$);
var pattern_STAR_ = (function (){var or__35887__auto__ = datascript.parser.parse_variable.call(null,pattern);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_plain_variable.call(null,pattern);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__35875__auto__ = src_STAR_;
if(cljs.core.truth_(and__35875__auto__)){
var and__35875__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__35875__auto____$1)){
return pattern_STAR_;
} else {
return and__35875__auto____$1;
}
} else {
return and__35875__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__35887__auto__ = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_pull_expr.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
var or__35887__auto____$2 = datascript.parser.parse_aggregate_custom.call(null,form);
if(cljs.core.truth_(or__35887__auto____$2)){
return or__35887__auto____$2;
} else {
return datascript.parser.parse_aggregate.call(null,form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__39881 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,form);
if((G__39881 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__39881,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
if((cljs.core.sequential_QMARK_.call(null,inner)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,inner),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,inner),new cljs.core.Symbol(null,"...","...",-1926939749,null)))){
var G__39883 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,inner));
if((G__39883 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__39883,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(2))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,form),new cljs.core.Symbol(null,".",".",1975675962,null)))){
var G__39885 = datascript.parser.parse_find_elem.call(null,cljs.core.first.call(null,form));
if((G__39885 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__39885,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),(1)))){
var inner = cljs.core.first.call(null,form);
var G__39887 = datascript.parser.parse_seq.call(null,datascript.parser.parse_find_elem,inner);
if((G__39887 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__39887,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__35887__auto__ = datascript.parser.parse_find_rel.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_find_coll.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
var or__35887__auto____$2 = datascript.parser.parse_find_scalar.call(null,form);
if(cljs.core.truth_(or__35887__auto____$2)){
return or__35887__auto____$2;
} else {
var or__35887__auto____$3 = datascript.parser.parse_find_tuple.call(null,form);
if(cljs.core.truth_(or__35887__auto____$3)){
return or__35887__auto____$3;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","find","parser/find",-801023103),new cljs.core.Keyword(null,"fragment","fragment",826775688),form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__35887__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","with","parser/with",-386255821),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__6751__auto__ = (function (){var or__35887__auto__ = datascript.parser.parse_src_var.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_rules_var.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return datascript.parser.parse_plain_variable.call(null,form);
}
}
})();
if(cljs.core.truth_(temp__6751__auto__)){
var var$ = temp__6751__auto__;
return datascript.parser.with_source.call(null,(new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding.call(null,form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__35887__auto__ = datascript.parser.parse_seq.call(null,datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","in","parser/in",1617442048),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39892,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39894 = (((k39892 instanceof cljs.core.Keyword))?k39892.fqn:null);
switch (G__39894) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39892,else__36565__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Pattern{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39891){
var self__ = this;
var G__39891__$1 = this;
return (new cljs.core.RecordIter((0),G__39891__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"pattern","pattern",242135423),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39891){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39895 = cljs.core.keyword_identical_QMARK_;
var expr__39896 = k__36570__auto__;
if(cljs.core.truth_(pred__39895.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__39896))){
return (new datascript.parser.Pattern(G__39891,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39895.call(null,new cljs.core.Keyword(null,"pattern","pattern",242135423),expr__39896))){
return (new datascript.parser.Pattern(self__.source,G__39891,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39891),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pattern","pattern",242135423),self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39891){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__39891,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39888){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk.call(null,self__.source,f39888),datascript.parser.postwalk.call(null,self__.pattern,f39888),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39889,acc39890){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39889,self__.pattern,datascript.parser.collect.call(null,pred39889,self__.source,acc39890));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39890){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39890,self__.source),self__.pattern);
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__39893){
return (new datascript.parser.Pattern(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__39893),new cljs.core.Keyword(null,"pattern","pattern",242135423).cljs$core$IFn$_invoke$arity$1(G__39893),null,cljs.core.dissoc.call(null,G__39893,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"pattern","pattern",242135423)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39903,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39905 = (((k39903 instanceof cljs.core.Keyword))?k39903.fqn:null);
switch (G__39905) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39903,else__36565__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Predicate{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39902){
var self__ = this;
var G__39902__$1 = this;
return (new cljs.core.RecordIter((0),G__39902__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39902){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39906 = cljs.core.keyword_identical_QMARK_;
var expr__39907 = k__36570__auto__;
if(cljs.core.truth_(pred__39906.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__39907))){
return (new datascript.parser.Predicate(G__39902,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39906.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__39907))){
return (new datascript.parser.Predicate(self__.fn,G__39902,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39902),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39902){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__39902,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39899){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk.call(null,self__.fn,f39899),datascript.parser.postwalk.call(null,self__.args,f39899),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39900,acc39901){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39900,self__.args,datascript.parser.collect.call(null,pred39900,self__.fn,acc39901));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39901){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39901,self__.fn),self__.args);
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__39904){
return (new datascript.parser.Predicate(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__39904),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__39904),null,cljs.core.dissoc.call(null,G__39904,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39914,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39916 = (((k39914 instanceof cljs.core.Keyword))?k39914.fqn:null);
switch (G__39916) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39914,else__36565__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Function{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39913){
var self__ = this;
var G__39913__$1 = this;
return (new cljs.core.RecordIter((0),G__39913__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"binding","binding",539932593),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39913){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39917 = cljs.core.keyword_identical_QMARK_;
var expr__39918 = k__36570__auto__;
if(cljs.core.truth_(pred__39917.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),expr__39918))){
return (new datascript.parser.Function(G__39913,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39917.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__39918))){
return (new datascript.parser.Function(self__.fn,G__39913,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39917.call(null,new cljs.core.Keyword(null,"binding","binding",539932593),expr__39918))){
return (new datascript.parser.Function(self__.fn,self__.args,G__39913,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39913),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"binding","binding",539932593),self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39913){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__39913,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39910){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Function(datascript.parser.postwalk.call(null,self__.fn,f39910),datascript.parser.postwalk.call(null,self__.args,f39910),datascript.parser.postwalk.call(null,self__.binding,f39910),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39911,acc39912){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39911,self__.binding,datascript.parser.collect.call(null,pred39911,self__.args,datascript.parser.collect.call(null,pred39911,self__.fn,acc39912)));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39912){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39912,self__.fn),self__.args),self__.binding);
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null)], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__39915){
return (new datascript.parser.Function(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(G__39915),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__39915),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(G__39915),null,cljs.core.dissoc.call(null,G__39915,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"binding","binding",539932593)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39925,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39927 = (((k39925 instanceof cljs.core.Keyword))?k39925.fqn:null);
switch (G__39927) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39925,else__36565__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39924){
var self__ = this;
var G__39924__$1 = this;
return (new cljs.core.RecordIter((0),G__39924__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"source","source",-433931539),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39924){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39928 = cljs.core.keyword_identical_QMARK_;
var expr__39929 = k__36570__auto__;
if(cljs.core.truth_(pred__39928.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__39929))){
return (new datascript.parser.RuleExpr(G__39924,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39928.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__39929))){
return (new datascript.parser.RuleExpr(self__.source,G__39924,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39928.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__39929))){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__39924,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39924),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39924){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__39924,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39921){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk.call(null,self__.source,f39921),datascript.parser.postwalk.call(null,self__.name,f39921),datascript.parser.postwalk.call(null,self__.args,f39921),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39922,acc39923){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39922,self__.args,datascript.parser.collect.call(null,pred39922,self__.name,datascript.parser.collect.call(null,pred39922,self__.source,acc39923)));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39923){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39923,self__.source),self__.name),self__.args);
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__39926){
return (new datascript.parser.RuleExpr(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__39926),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__39926),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__39926),null,cljs.core.dissoc.call(null,G__39926,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"args","args",1315556576)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39936,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39938 = (((k39936 instanceof cljs.core.Keyword))?k39936.fqn:null);
switch (G__39938) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39936,else__36565__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Not{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39935){
var self__ = this;
var G__39935__$1 = this;
return (new cljs.core.RecordIter((0),G__39935__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39935){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39939 = cljs.core.keyword_identical_QMARK_;
var expr__39940 = k__36570__auto__;
if(cljs.core.truth_(pred__39939.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__39940))){
return (new datascript.parser.Not(G__39935,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39939.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__39940))){
return (new datascript.parser.Not(self__.source,G__39935,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39939.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__39940))){
return (new datascript.parser.Not(self__.source,self__.vars,G__39935,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39935),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39935){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__39935,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39932){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Not(datascript.parser.postwalk.call(null,self__.source,f39932),datascript.parser.postwalk.call(null,self__.vars,f39932),datascript.parser.postwalk.call(null,self__.clauses,f39932),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39933,acc39934){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39933,self__.clauses,datascript.parser.collect.call(null,pred39933,self__.vars,datascript.parser.collect.call(null,pred39933,self__.source,acc39934)));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39934){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39934,self__.source),self__.vars),self__.clauses);
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__39937){
return (new datascript.parser.Not(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__39937),new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__39937),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__39937),null,cljs.core.dissoc.call(null,G__39937,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39947,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39949 = (((k39947 instanceof cljs.core.Keyword))?k39947.fqn:null);
switch (G__39949) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39947,else__36565__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Or{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39946){
var self__ = this;
var G__39946__$1 = this;
return (new cljs.core.RecordIter((0),G__39946__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),null,new cljs.core.Keyword(null,"source","source",-433931539),null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39946){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39950 = cljs.core.keyword_identical_QMARK_;
var expr__39951 = k__36570__auto__;
if(cljs.core.truth_(pred__39950.call(null,new cljs.core.Keyword(null,"source","source",-433931539),expr__39951))){
return (new datascript.parser.Or(G__39946,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39950.call(null,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),expr__39951))){
return (new datascript.parser.Or(self__.source,G__39946,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__39950.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__39951))){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__39946,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39946),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"source","source",-433931539),self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39946){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__39946,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39943){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Or(datascript.parser.postwalk.call(null,self__.source,f39943),datascript.parser.postwalk.call(null,self__.rule_vars,f39943),datascript.parser.postwalk.call(null,self__.clauses,f39943),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39944,acc39945){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39944,self__.clauses,datascript.parser.collect.call(null,pred39944,self__.rule_vars,datascript.parser.collect.call(null,pred39944,self__.source,acc39945)));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39945){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc39945,self__.source),self__.rule_vars),self__.clauses);
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"rule-vars","rule-vars",-988463249,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__39948){
return (new datascript.parser.Or(new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(G__39948),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(G__39948),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__39948),null,cljs.core.dissoc.call(null,G__39948,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k39958,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__39960 = (((k39958 instanceof cljs.core.Keyword))?k39958.fqn:null);
switch (G__39960) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k39958,else__36565__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.And{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39957){
var self__ = this;
var G__39957__$1 = this;
return (new cljs.core.RecordIter((0),G__39957__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__39957){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__39961 = cljs.core.keyword_identical_QMARK_;
var expr__39962 = k__36570__auto__;
if(cljs.core.truth_(pred__39961.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__39962))){
return (new datascript.parser.And(G__39957,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__39957),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__39957){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__39957,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f39954){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.And(datascript.parser.postwalk.call(null,self__.clauses,f39954),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred39955,acc39956){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred39955,self__.clauses,acc39956);
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc39956){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,acc39956,self__.clauses);
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__39959){
return (new datascript.parser.And(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__39959),null,cljs.core.dissoc.call(null,G__39959,new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__35887__auto__ = datascript.parser.parse_placeholder.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_variable.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return datascript.parser.parse_constant.call(null,form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var temp__6751__auto__ = datascript.parser.parse_src_var.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__6751__auto__)){
var source_STAR_ = temp__6751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next.call(null,form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__6753__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__39968 = temp__6753__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__39968,(0),null);
var next_form = cljs.core.nth.call(null,vec__39968,(1),null);
var temp__6753__auto____$1 = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__6753__auto____$1)){
var pattern_STAR_ = temp__6753__auto____$1;
if(!(cljs.core.empty_QMARK_.call(null,pattern_STAR_))){
return datascript.parser.with_source.call(null,(new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__39974 = form;
var seq__39975 = cljs.core.seq.call(null,vec__39974);
var first__39976 = cljs.core.first.call(null,seq__39975);
var seq__39975__$1 = cljs.core.next.call(null,seq__39975);
var fn = first__39976;
var args = seq__39975__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__35887__auto__ = datascript.parser.parse_plain_symbol.call(null,fn);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return datascript.parser.parse_variable.call(null,fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__35875__auto__ = fn_STAR_;
if(cljs.core.truth_(and__35875__auto__)){
return args_STAR_;
} else {
return and__35875__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(1)))){
var temp__6753__auto__ = datascript.parser.parse_call.call(null,cljs.core.first.call(null,form));
if(cljs.core.truth_(temp__6753__auto__)){
var vec__39980 = temp__6753__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__39980,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__39980,(1),null);
return datascript.parser.with_source.call(null,(new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_.call(null,form,(2)))){
var vec__39989 = form;
var call = cljs.core.nth.call(null,vec__39989,(0),null);
var binding = cljs.core.nth.call(null,vec__39989,(1),null);
var temp__6753__auto__ = datascript.parser.parse_call.call(null,call);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__39992 = temp__6753__auto__;
var fn_STAR_ = cljs.core.nth.call(null,vec__39992,(0),null);
var args_STAR_ = cljs.core.nth.call(null,vec__39992,(1),null);
var temp__6753__auto____$1 = datascript.parser.parse_binding.call(null,binding);
if(cljs.core.truth_(temp__6753__auto____$1)){
var binding_STAR_ = temp__6753__auto____$1;
return datascript.parser.with_source.call(null,(new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__6753__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__40001 = temp__6753__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__40001,(0),null);
var next_form = cljs.core.nth.call(null,vec__40001,(1),null);
var vec__40004 = next_form;
var seq__40005 = cljs.core.seq.call(null,vec__40004);
var first__40006 = cljs.core.first.call(null,seq__40005);
var seq__40005__$1 = cljs.core.next.call(null,seq__40005);
var name = first__40006;
var args = seq__40005__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol.call(null,name);
var args_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_.call(null,args)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.call(null,acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.call(null,acc,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
return datascript.parser.collect_vars_acc.call(null,acc,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520).cljs$core$IFn$_invoke$arity$1(form));
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars.call(null,form,acc);
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return cljs.core.reduce.call(null,datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc.call(null,cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,datascript.parser.collect_vars.call(null,form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_40009 = clojure.set.difference.call(null,cljs.core.set.call(null,vars),cljs.core.set.call(null,datascript.parser.collect_vars.call(null,clauses)));
if(cljs.core.empty_QMARK_.call(null,undeclared_40009)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variable not declared inside clauses: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_40009)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,vars)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(clause),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__6753__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__40016 = temp__6753__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__40016,(0),null);
var next_form = cljs.core.nth.call(null,vec__40016,(1),null);
var vec__40019 = next_form;
var seq__40020 = cljs.core.seq.call(null,vec__40019);
var first__40021 = cljs.core.first.call(null,seq__40020);
var seq__40020__$1 = cljs.core.next.call(null,seq__40020);
var sym = first__40021;
var clauses = seq__40020__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not","not",1044554643,null),sym)){
var temp__6751__auto__ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_(temp__6751__auto__)){
var clauses_STAR_ = temp__6751__auto__;
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__6753__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__40028 = temp__6753__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__40028,(0),null);
var next_form = cljs.core.nth.call(null,vec__40028,(1),null);
var vec__40031 = next_form;
var seq__40032 = cljs.core.seq.call(null,vec__40031);
var first__40033 = cljs.core.first.call(null,seq__40032);
var seq__40032__$1 = cljs.core.next.call(null,seq__40032);
var sym = first__40033;
var first__40033__$1 = cljs.core.first.call(null,seq__40032__$1);
var seq__40032__$2 = cljs.core.next.call(null,seq__40032__$1);
var vars = first__40033__$1;
var clauses = seq__40032__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"not-join","not-join",-645515756,null),sym)){
var vars_STAR_ = datascript.parser.parse_seq.call(null,datascript.parser.parse_variable,vars);
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,clauses);
if(cljs.core.truth_((function (){var and__35875__auto__ = vars_STAR_;
if(cljs.core.truth_(and__35875__auto__)){
return clauses_STAR_;
} else {
return and__35875__auto__;
}
})())){
return datascript.parser.validate_not.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__40042 = clause;
var map__40042__$1 = ((((!((map__40042 == null)))?((((map__40042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40042):map__40042);
var map__40043 = cljs.core.get.call(null,map__40042__$1,new cljs.core.Keyword(null,"rule-vars","rule-vars",1665972520));
var map__40043__$1 = ((((!((map__40043 == null)))?((((map__40043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40043):map__40043);
var required = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var free = cljs.core.get.call(null,map__40043__$1,new cljs.core.Keyword(null,"free","free",801364328));
var clauses = cljs.core.get.call(null,map__40042__$1,new cljs.core.Keyword(null,"clauses","clauses",1454841241));
var vars = cljs.core.concat.call(null,required,free);
var seq__40046_40050 = cljs.core.seq.call(null,clauses);
var chunk__40047_40051 = null;
var count__40048_40052 = (0);
var i__40049_40053 = (0);
while(true){
if((i__40049_40053 < count__40048_40052)){
var clause_40054__$1 = cljs.core._nth.call(null,chunk__40047_40051,i__40049_40053);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_40054__$1], null),form);

var G__40055 = seq__40046_40050;
var G__40056 = chunk__40047_40051;
var G__40057 = count__40048_40052;
var G__40058 = (i__40049_40053 + (1));
seq__40046_40050 = G__40055;
chunk__40047_40051 = G__40056;
count__40048_40052 = G__40057;
i__40049_40053 = G__40058;
continue;
} else {
var temp__6753__auto___40059 = cljs.core.seq.call(null,seq__40046_40050);
if(temp__6753__auto___40059){
var seq__40046_40060__$1 = temp__6753__auto___40059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40046_40060__$1)){
var c__36798__auto___40061 = cljs.core.chunk_first.call(null,seq__40046_40060__$1);
var G__40062 = cljs.core.chunk_rest.call(null,seq__40046_40060__$1);
var G__40063 = c__36798__auto___40061;
var G__40064 = cljs.core.count.call(null,c__36798__auto___40061);
var G__40065 = (0);
seq__40046_40050 = G__40062;
chunk__40047_40051 = G__40063;
count__40048_40052 = G__40064;
i__40049_40053 = G__40065;
continue;
} else {
var clause_40066__$1 = cljs.core.first.call(null,seq__40046_40060__$1);
datascript.parser.validate_join_vars.call(null,vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_40066__$1], null),form);

var G__40067 = cljs.core.next.call(null,seq__40046_40060__$1);
var G__40068 = null;
var G__40069 = (0);
var G__40070 = (0);
seq__40046_40050 = G__40067;
chunk__40047_40051 = G__40068;
count__40048_40052 = G__40069;
i__40049_40053 = G__40070;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.first.call(null,form)))){
var clauses_STAR_ = datascript.parser.parse_clauses.call(null,cljs.core.next.call(null,form));
if(cljs.core.truth_(cljs.core.not_empty.call(null,clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__6753__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__40077 = temp__6753__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__40077,(0),null);
var next_form = cljs.core.nth.call(null,vec__40077,(1),null);
var vec__40080 = next_form;
var seq__40081 = cljs.core.seq.call(null,vec__40080);
var first__40082 = cljs.core.first.call(null,seq__40081);
var seq__40081__$1 = cljs.core.next.call(null,seq__40081);
var sym = first__40082;
var clauses = seq__40081__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or","or",1876275696,null),sym)){
var temp__6751__auto__ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__6751__auto__)){
var clauses_STAR_ = temp__6751__auto__;
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct.call(null,clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__6753__auto__ = datascript.parser.take_source.call(null,form);
if(cljs.core.truth_(temp__6753__auto__)){
var vec__40089 = temp__6753__auto__;
var source_STAR_ = cljs.core.nth.call(null,vec__40089,(0),null);
var next_form = cljs.core.nth.call(null,vec__40089,(1),null);
var vec__40092 = next_form;
var seq__40093 = cljs.core.seq.call(null,vec__40092);
var first__40094 = cljs.core.first.call(null,seq__40093);
var seq__40093__$1 = cljs.core.next.call(null,seq__40093);
var sym = first__40094;
var first__40094__$1 = cljs.core.first.call(null,seq__40093__$1);
var seq__40093__$2 = cljs.core.next.call(null,seq__40093__$1);
var vars = first__40094__$1;
var clauses = seq__40093__$2;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"or-join","or-join",591375469,null),sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = datascript.parser.parse_seq.call(null,cljs.core.some_fn.call(null,datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__35875__auto__ = vars_STAR_;
if(cljs.core.truth_(and__35875__auto__)){
return clauses_STAR_;
} else {
return and__35875__auto__;
}
})())){
return datascript.parser.validate_or.call(null,datascript.parser.with_source.call(null,(new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__35887__auto__ = datascript.parser.parse_not.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = datascript.parser.parse_not_join.call(null,form);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
var or__35887__auto____$2 = datascript.parser.parse_or.call(null,form);
if(cljs.core.truth_(or__35887__auto____$2)){
return or__35887__auto____$2;
} else {
var or__35887__auto____$3 = datascript.parser.parse_or_join.call(null,form);
if(cljs.core.truth_(or__35887__auto____$3)){
return or__35887__auto____$3;
} else {
var or__35887__auto____$4 = datascript.parser.parse_pred.call(null,form);
if(cljs.core.truth_(or__35887__auto____$4)){
return or__35887__auto____$4;
} else {
var or__35887__auto____$5 = datascript.parser.parse_fn.call(null,form);
if(cljs.core.truth_(or__35887__auto____$5)){
return or__35887__auto____$5;
} else {
var or__35887__auto____$6 = datascript.parser.parse_rule_expr.call(null,form);
if(cljs.core.truth_(or__35887__auto____$6)){
return or__35887__auto____$6;
} else {
var or__35887__auto____$7 = datascript.parser.parse_pattern.call(null,form);
if(cljs.core.truth_(or__35887__auto____$7)){
return or__35887__auto____$7;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq.call(null,datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__35887__auto__ = datascript.parser.parse_clauses.call(null,form);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","where","parser/where",-966053850),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k40100,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__40102 = (((k40100 instanceof cljs.core.Keyword))?k40100.fqn:null);
switch (G__40102) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40100,else__36565__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40099){
var self__ = this;
var G__40099__$1 = this;
return (new cljs.core.RecordIter((0),G__40099__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),null,new cljs.core.Keyword(null,"vars","vars",-2046957217),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__40099){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__40103 = cljs.core.keyword_identical_QMARK_;
var expr__40104 = k__36570__auto__;
if(cljs.core.truth_(pred__40103.call(null,new cljs.core.Keyword(null,"vars","vars",-2046957217),expr__40104))){
return (new datascript.parser.RuleBranch(G__40099,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40103.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241),expr__40104))){
return (new datascript.parser.RuleBranch(self__.vars,G__40099,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__40099),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"vars","vars",-2046957217),self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"clauses","clauses",1454841241),self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__40099){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__40099,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f40096){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk.call(null,self__.vars,f40096),datascript.parser.postwalk.call(null,self__.clauses,f40096),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred40097,acc40098){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred40097,self__.clauses,datascript.parser.collect.call(null,pred40097,self__.vars,acc40098));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc40098){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc40098,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vars","vars",-406425690,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__40101){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(G__40101),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(G__40101),null,cljs.core.dissoc.call(null,G__40101,new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.Keyword(null,"clauses","clauses",1454841241)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k40111,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__40113 = (((k40111 instanceof cljs.core.Keyword))?k40111.fqn:null);
switch (G__40113) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40111,else__36565__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Rule{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40110){
var self__ = this;
var G__40110__$1 = this;
return (new cljs.core.RecordIter((0),G__40110__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"branches","branches",-1240337268),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__40110){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__40114 = cljs.core.keyword_identical_QMARK_;
var expr__40115 = k__36570__auto__;
if(cljs.core.truth_(pred__40114.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__40115))){
return (new datascript.parser.Rule(G__40110,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40114.call(null,new cljs.core.Keyword(null,"branches","branches",-1240337268),expr__40115))){
return (new datascript.parser.Rule(self__.name,G__40110,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__40110),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"branches","branches",-1240337268),self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__40110){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__40110,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f40107){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk.call(null,self__.name,f40107),datascript.parser.postwalk.call(null,self__.branches,f40107),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred40108,acc40109){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred40108,self__.branches,datascript.parser.collect.call(null,pred40108,self__.name,acc40109));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc40109){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc40109,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"branches","branches",400194259,null)], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__40112){
return (new datascript.parser.Rule(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__40112),new cljs.core.Keyword(null,"branches","branches",-1240337268).cljs$core$IFn$_invoke$arity$1(G__40112),null,cljs.core.dissoc.call(null,G__40112,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"branches","branches",-1240337268)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.call(null,(function (p1__40118_SHARP_){
return (p1__40118_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.PersistentHashSet.EMPTY);
var used_vars = datascript.parser.collect.call(null,((function (declared_vars){
return (function (p1__40119_SHARP_){
return (p1__40119_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.PersistentHashSet.EMPTY);
var undeclared_vars = clojure.set.difference.call(null,used_vars,declared_vars);
if(cljs.core.empty_QMARK_.call(null,undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Reference to the unknown variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),undeclared_vars)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"vars","vars",-2046957217),undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_.call(null,form)){
var vec__40126 = form;
var seq__40127 = cljs.core.seq.call(null,vec__40126);
var first__40128 = cljs.core.first.call(null,seq__40127);
var seq__40127__$1 = cljs.core.next.call(null,seq__40127);
var head = first__40128;
var clauses = seq__40127__$1;
if(cljs.core.sequential_QMARK_.call(null,head)){
var vec__40129 = head;
var seq__40130 = cljs.core.seq.call(null,vec__40129);
var first__40131 = cljs.core.first.call(null,seq__40130);
var seq__40130__$1 = cljs.core.next.call(null,seq__40130);
var name = first__40131;
var vars = seq__40130__$1;
var name_STAR_ = (function (){var or__35887__auto__ = datascript.parser.parse_plain_symbol.call(null,name);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars.call(null,vars);
var clauses_STAR_ = (function (){var or__35887__auto__ = cljs.core.not_empty.call(null,datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
})();
datascript.parser.validate_vars.call(null,vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name_STAR_,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars_STAR_,new cljs.core.Keyword(null,"clauses","clauses",1454841241),clauses_STAR_], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,branches));
var arity0 = datascript.parser.rule_vars_arity.call(null,vars0);
var seq__40138 = cljs.core.seq.call(null,cljs.core.next.call(null,branches));
var chunk__40140 = null;
var count__40141 = (0);
var i__40142 = (0);
while(true){
if((i__40142 < count__40141)){
var b = cljs.core._nth.call(null,chunk__40140,i__40142);
var vars_40144 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_40144))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_40144)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__40145 = seq__40138;
var G__40146 = chunk__40140;
var G__40147 = count__40141;
var G__40148 = (i__40142 + (1));
seq__40138 = G__40145;
chunk__40140 = G__40146;
count__40141 = G__40147;
i__40142 = G__40148;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__40138);
if(temp__6753__auto__){
var seq__40138__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40138__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__40138__$1);
var G__40149 = cljs.core.chunk_rest.call(null,seq__40138__$1);
var G__40150 = c__36798__auto__;
var G__40151 = cljs.core.count.call(null,c__36798__auto__);
var G__40152 = (0);
seq__40138 = G__40149;
chunk__40140 = G__40150;
count__40141 = G__40151;
i__40142 = G__40152;
continue;
} else {
var b = cljs.core.first.call(null,seq__40138__$1);
var vars_40153 = new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.call(null,arity0,datascript.parser.rule_vars_arity.call(null,vars_40153))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(name))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datascript.parser.flatten_rule_vars.call(null,vars_40153)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","rule","parser/rule",-464044566),new cljs.core.Keyword(null,"rule","rule",729973257),name], null));
} else {
}

var G__40154 = cljs.core.next.call(null,seq__40138__$1);
var G__40155 = null;
var G__40156 = (0);
var G__40157 = (0);
seq__40138 = G__40154;
chunk__40140 = G__40155;
count__40141 = G__40156;
i__40142 = G__40157;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec.call(null,(function (){var iter__36749__auto__ = (function datascript$parser$parse_rules_$_iter__40175(s__40176){
return (new cljs.core.LazySeq(null,(function (){
var s__40176__$1 = s__40176;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40176__$1);
if(temp__6753__auto__){
var s__40176__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40176__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__40176__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__40178 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__40177 = (0);
while(true){
if((i__40177 < size__36748__auto__)){
var vec__40185 = cljs.core._nth.call(null,c__36747__auto__,i__40177);
var name = cljs.core.nth.call(null,vec__40185,(0),null);
var branches = cljs.core.nth.call(null,vec__40185,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (i__40177,vec__40185,name,branches,c__36747__auto__,size__36748__auto__,b__40178,s__40176__$2,temp__6753__auto__){
return (function (p1__40158_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__40158_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__40158_SHARP_),null,null,null));
});})(i__40177,vec__40185,name,branches,c__36747__auto__,size__36748__auto__,b__40178,s__40176__$2,temp__6753__auto__))
,branches);
cljs.core.chunk_append.call(null,b__40178,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__40191 = (i__40177 + (1));
i__40177 = G__40191;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40178),datascript$parser$parse_rules_$_iter__40175.call(null,cljs.core.chunk_rest.call(null,s__40176__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40178),null);
}
} else {
var vec__40188 = cljs.core.first.call(null,s__40176__$2);
var name = cljs.core.nth.call(null,vec__40188,(0),null);
var branches = cljs.core.nth.call(null,vec__40188,(1),null);
var branches__$1 = cljs.core.mapv.call(null,((function (vec__40188,name,branches,s__40176__$2,temp__6753__auto__){
return (function (p1__40158_SHARP_){
return (new datascript.parser.RuleBranch(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(p1__40158_SHARP_),new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(p1__40158_SHARP_),null,null,null));
});})(vec__40188,name,branches,s__40176__$2,temp__6753__auto__))
,branches);
return cljs.core.cons.call(null,(function (){
datascript.parser.validate_arity.call(null,name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__40175.call(null,cljs.core.rest.call(null,s__40176__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,cljs.core.group_by.call(null,new cljs.core.Keyword(null,"name","name",1843675177),datascript.parser.parse_seq.call(null,datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__36562__auto__,k__36563__auto__){
var self__ = this;
var this__36562__auto____$1 = this;
return this__36562__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__36563__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__36564__auto__,k40196,else__36565__auto__){
var self__ = this;
var this__36564__auto____$1 = this;
var G__40198 = (((k40196 instanceof cljs.core.Keyword))?k40196.fqn:null);
switch (G__40198) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k40196,else__36565__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__36576__auto__,writer__36577__auto__,opts__36578__auto__){
var self__ = this;
var this__36576__auto____$1 = this;
var pr_pair__36579__auto__ = ((function (this__36576__auto____$1){
return (function (keyval__36580__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,cljs.core.pr_writer,""," ","",opts__36578__auto__,keyval__36580__auto__);
});})(this__36576__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__36577__auto__,pr_pair__36579__auto__,"#datascript.parser.Query{",", ","}",opts__36578__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40195){
var self__ = this;
var G__40195__$1 = this;
return (new cljs.core.RecordIter((0),G__40195__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__36560__auto__){
var self__ = this;
var this__36560__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__36556__auto__){
var self__ = this;
var this__36556__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__36566__auto__){
var self__ = this;
var this__36566__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__36557__auto__){
var self__ = this;
var this__36557__auto____$1 = this;
var h__36329__auto__ = self__.__hash;
if(!((h__36329__auto__ == null))){
return h__36329__auto__;
} else {
var h__36329__auto____$1 = cljs.core.hash_imap.call(null,this__36557__auto____$1);
self__.__hash = h__36329__auto____$1;

return h__36329__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__36558__auto__,other__36559__auto__){
var self__ = this;
var this__36558__auto____$1 = this;
if(cljs.core.truth_((function (){var and__35875__auto__ = other__36559__auto__;
if(cljs.core.truth_(and__35875__auto__)){
return ((this__36558__auto____$1.constructor === other__36559__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__36558__auto____$1,other__36559__auto__));
} else {
return and__35875__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__36571__auto__,k__36572__auto__){
var self__ = this;
var this__36571__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),null,new cljs.core.Keyword(null,"where","where",-2044795965),null,new cljs.core.Keyword(null,"with","with",-1536296876),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null),k__36572__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__36571__auto____$1),self__.__meta),k__36572__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__36572__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__36569__auto__,k__36570__auto__,G__40195){
var self__ = this;
var this__36569__auto____$1 = this;
var pred__40199 = cljs.core.keyword_identical_QMARK_;
var expr__40200 = k__36570__auto__;
if(cljs.core.truth_(pred__40199.call(null,new cljs.core.Keyword(null,"find","find",496279456),expr__40200))){
return (new datascript.parser.Query(G__40195,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40199.call(null,new cljs.core.Keyword(null,"with","with",-1536296876),expr__40200))){
return (new datascript.parser.Query(self__.find,G__40195,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40199.call(null,new cljs.core.Keyword(null,"in","in",-1531184865),expr__40200))){
return (new datascript.parser.Query(self__.find,self__.with$,G__40195,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__40199.call(null,new cljs.core.Keyword(null,"where","where",-2044795965),expr__40200))){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__40195,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__36570__auto__,G__40195),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__36574__auto__){
var self__ = this;
var this__36574__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"find","find",496279456),self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"with","with",-1536296876),self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"in","in",-1531184865),self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"where","where",-2044795965),self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__36561__auto__,G__40195){
var self__ = this;
var this__36561__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__40195,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__36567__auto__,entry__36568__auto__){
var self__ = this;
var this__36567__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__36568__auto__)){
return this__36567__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__36568__auto__,(0)),cljs.core._nth.call(null,entry__36568__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__36567__auto____$1,entry__36568__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__5113__auto__,f40192){
var self__ = this;
var this__5113__auto____$1 = this;
var new__5114__auto__ = (new datascript.parser.Query(datascript.parser.postwalk.call(null,self__.find,f40192),datascript.parser.postwalk.call(null,self__.with$,f40192),datascript.parser.postwalk.call(null,self__.in$,f40192),datascript.parser.postwalk.call(null,self__.where,f40192),null,null,null));
var temp__6751__auto__ = cljs.core.meta.call(null,this__5113__auto____$1);
if(cljs.core.truth_(temp__6751__auto__)){
var meta__5115__auto__ = temp__6751__auto__;
return cljs.core.with_meta.call(null,new__5114__auto__,meta__5115__auto__);
} else {
return new__5114__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___5116__auto__,pred40193,acc40194){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect.call(null,pred40193,self__.where,datascript.parser.collect.call(null,pred40193,self__.in$,datascript.parser.collect.call(null,pred40193,self__.with$,datascript.parser.collect.call(null,pred40193,self__.find,acc40194))));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___5116__auto__,acc40194){
var self__ = this;
var ___5116__auto____$1 = this;
return datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,datascript.parser.collect_vars_acc.call(null,acc40194,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"find","find",2136810983,null),new cljs.core.Symbol(null,"with","with",104234651,null),new cljs.core.Symbol(null,"in","in",109346662,null),new cljs.core.Symbol(null,"where","where",-404264438,null)], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__36598__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__36598__auto__,writer__36599__auto__){
return cljs.core._write.call(null,writer__36599__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__40197){
return (new datascript.parser.Query(new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(G__40197),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(G__40197),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(G__40197),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(G__40197),null,cljs.core.dissoc.call(null,G__40197,new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Keyword(null,"with","with",-1536296876),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"where","where",-2044795965)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__6751__auto__ = cljs.core.first.call(null,qs);
if(cljs.core.truth_(temp__6751__auto__)){
var q = temp__6751__auto__;
if((q instanceof cljs.core.Keyword)){
var G__40203 = parsed;
var G__40204 = q;
var G__40205 = cljs.core.next.call(null,qs);
parsed = G__40203;
key = G__40204;
qs = G__40205;
continue;
} else {
var G__40206 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__40207 = key;
var G__40208 = cljs.core.next.call(null,qs);
parsed = G__40206;
key = G__40207;
qs = G__40208;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_40215 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_40216 = cljs.core.set.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
var in_vars_40217 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_40218 = cljs.core.set.call(null,datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q)));
var unknown_40219 = clojure.set.difference.call(null,clojure.set.union.call(null,find_vars_40215,with_vars_40216),clojure.set.union.call(null,where_vars_40218,in_vars_40217));
var shared_40220 = clojure.set.intersection.call(null,find_vars_40215,with_vars_40216);
if(cljs.core.empty_QMARK_.call(null,unknown_40219)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query for unknown vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_40219)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_40219,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

if(cljs.core.empty_QMARK_.call(null,shared_40220)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":in and :with should not use same variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),shared_40220)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),shared_40220,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_vars_40221 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_sources_40222 = datascript.parser.collect.call(null,((function (in_vars_40221){
return (function (p1__40209_SHARP_){
return (p1__40209_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_40221))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
var in_rules_40223 = datascript.parser.collect.call(null,((function (in_vars_40221,in_sources_40222){
return (function (p1__40210_SHARP_){
return (p1__40210_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_40221,in_sources_40222))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__35875__auto__ = datascript.parser.distinct_QMARK_.call(null,in_vars_40221);
if(cljs.core.truth_(and__35875__auto__)){
var and__35875__auto____$1 = datascript.parser.distinct_QMARK_.call(null,in_sources_40222);
if(cljs.core.truth_(and__35875__auto____$1)){
return datascript.parser.distinct_QMARK_.call(null,in_rules_40223);
} else {
return and__35875__auto____$1;
}
} else {
return and__35875__auto__;
}
})())){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var with_vars_40224 = datascript.parser.collect_vars.call(null,new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_.call(null,with_vars_40224))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var in_sources_40225 = datascript.parser.collect.call(null,(function (p1__40211_SHARP_){
return (p1__40211_SHARP_ instanceof datascript.parser.SrcVar);
}),new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var where_sources_40226 = datascript.parser.collect.call(null,((function (in_sources_40225){
return (function (p1__40212_SHARP_){
return (p1__40212_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_40225))
,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q),cljs.core.PersistentHashSet.EMPTY);
var unknown_40227 = clojure.set.difference.call(null,where_sources_40226,in_sources_40225);
if(cljs.core.empty_QMARK_.call(null,unknown_40227)){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Where uses unknown source vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.mapv.call(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),unknown_40227)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"vars","vars",-2046957217),unknown_40227,new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
}

var rule_exprs = datascript.parser.collect.call(null,(function (p1__40213_SHARP_){
return (p1__40213_SHARP_ instanceof datascript.parser.RuleExpr);
}),new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect.call(null,((function (rule_exprs){
return (function (p1__40214_SHARP_){
return (p1__40214_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_.call(null,rule_exprs))) && (cljs.core.empty_QMARK_.call(null,rules_vars))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_.call(null,q))?q:((cljs.core.sequential_QMARK_.call(null,q))?datascript.parser.query__GT_map.call(null,q):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("parser","query","parser/query",1877320671),new cljs.core.Keyword(null,"form","form",-1624062471),q], null))})()
));
var res = datascript.parser.map__GT_Query.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"find","find",496279456),datascript.parser.parse_find.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"with","with",-1536296876),(function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__6753__auto__)){
var with$ = temp__6753__auto__;
return datascript.parser.parse_with.call(null,with$);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"in","in",-1531184865),datascript.parser.parse_in.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null))),new cljs.core.Keyword(null,"where","where",-2044795965),datascript.parser.parse_where.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query.call(null,res,q);

return res;
});

//# sourceMappingURL=parser.js.map?rel=1509941609288