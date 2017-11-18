// Compiled by ClojureScript 1.9.494 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid))){
return datascript.db.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__6753__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__6753__auto__)){
var e = temp__6753__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(datascript.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__40604_SHARP_,p2__40605_SHARP_){
return cljs.core.conj.call(null,p1__40604_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__40605_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__40606_SHARP_,p2__40607_SHARP_){
return cljs.core.conj.call(null,p1__40606_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__40607_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__6751__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var datoms = temp__6751__auto__;
if(datascript.db.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__6751__auto__){
return (function (p1__40608_SHARP_,p2__40609_SHARP_){
return cljs.core.conj.call(null,p1__40608_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__40609_SHARP_)));
});})(datoms,temp__6751__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__36749__auto__ = (function datascript$impl$entity$js_seq_$_iter__40626(s__40627){
return (new cljs.core.LazySeq(null,(function (){
var s__40627__$1 = s__40627;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__40627__$1);
if(temp__6753__auto__){
var s__40627__$2 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40627__$2)){
var c__36747__auto__ = cljs.core.chunk_first.call(null,s__40627__$2);
var size__36748__auto__ = cljs.core.count.call(null,c__36747__auto__);
var b__40629 = cljs.core.chunk_buffer.call(null,size__36748__auto__);
if((function (){var i__40628 = (0);
while(true){
if((i__40628 < size__36748__auto__)){
var vec__40636 = cljs.core._nth.call(null,c__36747__auto__,i__40628);
var a = cljs.core.nth.call(null,vec__40636,(0),null);
var v = cljs.core.nth.call(null,vec__40636,(1),null);
cljs.core.chunk_append.call(null,b__40629,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__40642 = (i__40628 + (1));
i__40628 = G__40642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40629),datascript$impl$entity$js_seq_$_iter__40626.call(null,cljs.core.chunk_rest.call(null,s__40627__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40629),null);
}
} else {
var vec__40639 = cljs.core.first.call(null,s__40627__$2);
var a = cljs.core.nth.call(null,vec__40639,(0),null);
var v = cljs.core.nth.call(null,vec__40639,(1),null);
return cljs.core.cons.call(null,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__40626.call(null,cljs.core.rest.call(null,s__40627__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__36749__auto__.call(null,cljs.core.deref.call(null,e.cache));
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__40665 = null;
var G__40665__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__40644 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__40645 = null;
var count__40646 = (0);
var i__40647 = (0);
while(true){
if((i__40647 < count__40646)){
var vec__40648 = cljs.core._nth.call(null,chunk__40645,i__40647);
var a = cljs.core.nth.call(null,vec__40648,(0),null);
var v = cljs.core.nth.call(null,vec__40648,(1),null);
f.call(null,v,a,this$);

var G__40666 = seq__40644;
var G__40667 = chunk__40645;
var G__40668 = count__40646;
var G__40669 = (i__40647 + (1));
seq__40644 = G__40666;
chunk__40645 = G__40667;
count__40646 = G__40668;
i__40647 = G__40669;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__40644);
if(temp__6753__auto__){
var seq__40644__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40644__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__40644__$1);
var G__40670 = cljs.core.chunk_rest.call(null,seq__40644__$1);
var G__40671 = c__36798__auto__;
var G__40672 = cljs.core.count.call(null,c__36798__auto__);
var G__40673 = (0);
seq__40644 = G__40670;
chunk__40645 = G__40671;
count__40646 = G__40672;
i__40647 = G__40673;
continue;
} else {
var vec__40651 = cljs.core.first.call(null,seq__40644__$1);
var a = cljs.core.nth.call(null,vec__40651,(0),null);
var v = cljs.core.nth.call(null,vec__40651,(1),null);
f.call(null,v,a,this$);

var G__40674 = cljs.core.next.call(null,seq__40644__$1);
var G__40675 = null;
var G__40676 = (0);
var G__40677 = (0);
seq__40644 = G__40674;
chunk__40645 = G__40675;
count__40646 = G__40676;
i__40647 = G__40677;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__40665__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__40654 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__40655 = null;
var count__40656 = (0);
var i__40657 = (0);
while(true){
if((i__40657 < count__40656)){
var vec__40658 = cljs.core._nth.call(null,chunk__40655,i__40657);
var a = cljs.core.nth.call(null,vec__40658,(0),null);
var v = cljs.core.nth.call(null,vec__40658,(1),null);
f.call(use_as_this,v,a,this$);

var G__40678 = seq__40654;
var G__40679 = chunk__40655;
var G__40680 = count__40656;
var G__40681 = (i__40657 + (1));
seq__40654 = G__40678;
chunk__40655 = G__40679;
count__40656 = G__40680;
i__40657 = G__40681;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__40654);
if(temp__6753__auto__){
var seq__40654__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40654__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__40654__$1);
var G__40682 = cljs.core.chunk_rest.call(null,seq__40654__$1);
var G__40683 = c__36798__auto__;
var G__40684 = cljs.core.count.call(null,c__36798__auto__);
var G__40685 = (0);
seq__40654 = G__40682;
chunk__40655 = G__40683;
count__40656 = G__40684;
i__40657 = G__40685;
continue;
} else {
var vec__40661 = cljs.core.first.call(null,seq__40654__$1);
var a = cljs.core.nth.call(null,vec__40661,(0),null);
var v = cljs.core.nth.call(null,vec__40661,(1),null);
f.call(use_as_this,v,a,this$);

var G__40686 = cljs.core.next.call(null,seq__40654__$1);
var G__40687 = null;
var G__40688 = (0);
var G__40689 = (0);
seq__40654 = G__40686;
chunk__40655 = G__40687;
count__40656 = G__40688;
i__40657 = G__40689;
continue;
}
} else {
return null;
}
}
break;
}
});
G__40665 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__40665__1.call(this,f);
case 2:
return G__40665__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40665.cljs$core$IFn$_invoke$arity$1 = G__40665__1;
G__40665.cljs$core$IFn$_invoke$arity$2 = G__40665__2;
return G__40665;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.db.reverse_ref.call(null,attr),null));
} else {
var G__40664 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
if(datascript.db.multival_QMARK_.call(null,self__.db,attr)){
return datascript.impl.entity.multival__GT_js.call(null,G__40664);
} else {
return G__40664;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__40690 = null;
var G__40690__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__40690__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__40690 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__40690__2.call(this,self__,k);
case 3:
return G__40690__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40690.cljs$core$IFn$_invoke$arity$2 = G__40690__2;
G__40690.cljs$core$IFn$_invoke$arity$3 = G__40690__3;
return G__40690;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args40643){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args40643)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args40691 = [];
var len__37108__auto___40694 = arguments.length;
var i__37109__auto___40695 = (0);
while(true){
if((i__37109__auto___40695 < len__37108__auto___40694)){
args40691.push((arguments[i__37109__auto___40695]));

var G__40696 = (i__37109__auto___40695 + (1));
i__37109__auto___40695 = G__40696;
continue;
} else {
}
break;
}

var G__40693 = args40691.length;
switch (G__40693) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40691.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.db.reverse_ref.call(null,attr),not_found);
} else {
var or__35887__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__6751__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__6751__auto__)){
var datoms = temp__6751__auto__;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.db.component_QMARK_.call(null,db,a))?((datascript.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__6753__auto___40698 = cljs.core.not_empty.call(null,datascript.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__6753__auto___40698)){
var datoms_40699 = temp__6753__auto___40698;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_40699)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map?rel=1509941610594