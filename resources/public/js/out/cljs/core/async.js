// Compiled by ClojureScript 1.9.494 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args44366 = [];
var len__37108__auto___44372 = arguments.length;
var i__37109__auto___44373 = (0);
while(true){
if((i__37109__auto___44373 < len__37108__auto___44372)){
args44366.push((arguments[i__37109__auto___44373]));

var G__44374 = (i__37109__auto___44373 + (1));
i__37109__auto___44373 = G__44374;
continue;
} else {
}
break;
}

var G__44368 = args44366.length;
switch (G__44368) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44366.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44369 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44369 = (function (f,blockable,meta44370){
this.f = f;
this.blockable = blockable;
this.meta44370 = meta44370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44371,meta44370__$1){
var self__ = this;
var _44371__$1 = this;
return (new cljs.core.async.t_cljs$core$async44369(self__.f,self__.blockable,meta44370__$1));
});

cljs.core.async.t_cljs$core$async44369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44371){
var self__ = this;
var _44371__$1 = this;
return self__.meta44370;
});

cljs.core.async.t_cljs$core$async44369.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44369.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44370","meta44370",568108904,null)], null);
});

cljs.core.async.t_cljs$core$async44369.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44369";

cljs.core.async.t_cljs$core$async44369.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async44369");
});

cljs.core.async.__GT_t_cljs$core$async44369 = (function cljs$core$async$__GT_t_cljs$core$async44369(f__$1,blockable__$1,meta44370){
return (new cljs.core.async.t_cljs$core$async44369(f__$1,blockable__$1,meta44370));
});

}

return (new cljs.core.async.t_cljs$core$async44369(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args44378 = [];
var len__37108__auto___44381 = arguments.length;
var i__37109__auto___44382 = (0);
while(true){
if((i__37109__auto___44382 < len__37108__auto___44381)){
args44378.push((arguments[i__37109__auto___44382]));

var G__44383 = (i__37109__auto___44382 + (1));
i__37109__auto___44382 = G__44383;
continue;
} else {
}
break;
}

var G__44380 = args44378.length;
switch (G__44380) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44378.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args44385 = [];
var len__37108__auto___44388 = arguments.length;
var i__37109__auto___44389 = (0);
while(true){
if((i__37109__auto___44389 < len__37108__auto___44388)){
args44385.push((arguments[i__37109__auto___44389]));

var G__44390 = (i__37109__auto___44389 + (1));
i__37109__auto___44389 = G__44390;
continue;
} else {
}
break;
}

var G__44387 = args44385.length;
switch (G__44387) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44385.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args44392 = [];
var len__37108__auto___44395 = arguments.length;
var i__37109__auto___44396 = (0);
while(true){
if((i__37109__auto___44396 < len__37108__auto___44395)){
args44392.push((arguments[i__37109__auto___44396]));

var G__44397 = (i__37109__auto___44396 + (1));
i__37109__auto___44396 = G__44397;
continue;
} else {
}
break;
}

var G__44394 = args44392.length;
switch (G__44394) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44392.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44399 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44399);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44399,ret){
return (function (){
return fn1.call(null,val_44399);
});})(val_44399,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args44400 = [];
var len__37108__auto___44403 = arguments.length;
var i__37109__auto___44404 = (0);
while(true){
if((i__37109__auto___44404 < len__37108__auto___44403)){
args44400.push((arguments[i__37109__auto___44404]));

var G__44405 = (i__37109__auto___44404 + (1));
i__37109__auto___44404 = G__44405;
continue;
} else {
}
break;
}

var G__44402 = args44400.length;
switch (G__44402) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44400.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6751__auto__)){
var ret = temp__6751__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6751__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6751__auto__)){
var retb = temp__6751__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6751__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6751__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__36908__auto___44407 = n;
var x_44408 = (0);
while(true){
if((x_44408 < n__36908__auto___44407)){
(a[x_44408] = (0));

var G__44409 = (x_44408 + (1));
x_44408 = G__44409;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44410 = (i + (1));
i = G__44410;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44414 = (function (flag,meta44415){
this.flag = flag;
this.meta44415 = meta44415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44416,meta44415__$1){
var self__ = this;
var _44416__$1 = this;
return (new cljs.core.async.t_cljs$core$async44414(self__.flag,meta44415__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44416){
var self__ = this;
var _44416__$1 = this;
return self__.meta44415;
});})(flag))
;

cljs.core.async.t_cljs$core$async44414.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44414.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44414.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44415","meta44415",1804190265,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44414";

cljs.core.async.t_cljs$core$async44414.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async44414");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44414 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44414(flag__$1,meta44415){
return (new cljs.core.async.t_cljs$core$async44414(flag__$1,meta44415));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44414(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44420 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44420 = (function (flag,cb,meta44421){
this.flag = flag;
this.cb = cb;
this.meta44421 = meta44421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44422,meta44421__$1){
var self__ = this;
var _44422__$1 = this;
return (new cljs.core.async.t_cljs$core$async44420(self__.flag,self__.cb,meta44421__$1));
});

cljs.core.async.t_cljs$core$async44420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44422){
var self__ = this;
var _44422__$1 = this;
return self__.meta44421;
});

cljs.core.async.t_cljs$core$async44420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44421","meta44421",771736403,null)], null);
});

cljs.core.async.t_cljs$core$async44420.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44420";

cljs.core.async.t_cljs$core$async44420.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async44420");
});

cljs.core.async.__GT_t_cljs$core$async44420 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44420(flag__$1,cb__$1,meta44421){
return (new cljs.core.async.t_cljs$core$async44420(flag__$1,cb__$1,meta44421));
});

}

return (new cljs.core.async.t_cljs$core$async44420(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44423_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44423_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44424_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44424_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__35887__auto__ = wport;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44425 = (i + (1));
i = G__44425;
continue;
}
} else {
return null;
}
break;
}
})();
var or__35887__auto__ = ret;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6753__auto__ = (function (){var and__35875__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__35875__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__35875__auto__;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var got = temp__6753__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___44431 = arguments.length;
var i__37109__auto___44432 = (0);
while(true){
if((i__37109__auto___44432 < len__37108__auto___44431)){
args__37115__auto__.push((arguments[i__37109__auto___44432]));

var G__44433 = (i__37109__auto___44432 + (1));
i__37109__auto___44432 = G__44433;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44428){
var map__44429 = p__44428;
var map__44429__$1 = ((((!((map__44429 == null)))?((((map__44429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44429):map__44429);
var opts = map__44429__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44426){
var G__44427 = cljs.core.first.call(null,seq44426);
var seq44426__$1 = cljs.core.next.call(null,seq44426);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44427,seq44426__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args44434 = [];
var len__37108__auto___44484 = arguments.length;
var i__37109__auto___44485 = (0);
while(true){
if((i__37109__auto___44485 < len__37108__auto___44484)){
args44434.push((arguments[i__37109__auto___44485]));

var G__44486 = (i__37109__auto___44485 + (1));
i__37109__auto___44485 = G__44486;
continue;
} else {
}
break;
}

var G__44436 = args44434.length;
switch (G__44436) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44434.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44307__auto___44488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___44488){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___44488){
return (function (state_44460){
var state_val_44461 = (state_44460[(1)]);
if((state_val_44461 === (7))){
var inst_44456 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
var statearr_44462_44489 = state_44460__$1;
(statearr_44462_44489[(2)] = inst_44456);

(statearr_44462_44489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (1))){
var state_44460__$1 = state_44460;
var statearr_44463_44490 = state_44460__$1;
(statearr_44463_44490[(2)] = null);

(statearr_44463_44490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (4))){
var inst_44439 = (state_44460[(7)]);
var inst_44439__$1 = (state_44460[(2)]);
var inst_44440 = (inst_44439__$1 == null);
var state_44460__$1 = (function (){var statearr_44464 = state_44460;
(statearr_44464[(7)] = inst_44439__$1);

return statearr_44464;
})();
if(cljs.core.truth_(inst_44440)){
var statearr_44465_44491 = state_44460__$1;
(statearr_44465_44491[(1)] = (5));

} else {
var statearr_44466_44492 = state_44460__$1;
(statearr_44466_44492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (13))){
var state_44460__$1 = state_44460;
var statearr_44467_44493 = state_44460__$1;
(statearr_44467_44493[(2)] = null);

(statearr_44467_44493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (6))){
var inst_44439 = (state_44460[(7)]);
var state_44460__$1 = state_44460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44460__$1,(11),to,inst_44439);
} else {
if((state_val_44461 === (3))){
var inst_44458 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44460__$1,inst_44458);
} else {
if((state_val_44461 === (12))){
var state_44460__$1 = state_44460;
var statearr_44468_44494 = state_44460__$1;
(statearr_44468_44494[(2)] = null);

(statearr_44468_44494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (2))){
var state_44460__$1 = state_44460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44460__$1,(4),from);
} else {
if((state_val_44461 === (11))){
var inst_44449 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
if(cljs.core.truth_(inst_44449)){
var statearr_44469_44495 = state_44460__$1;
(statearr_44469_44495[(1)] = (12));

} else {
var statearr_44470_44496 = state_44460__$1;
(statearr_44470_44496[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (9))){
var state_44460__$1 = state_44460;
var statearr_44471_44497 = state_44460__$1;
(statearr_44471_44497[(2)] = null);

(statearr_44471_44497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (5))){
var state_44460__$1 = state_44460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44472_44498 = state_44460__$1;
(statearr_44472_44498[(1)] = (8));

} else {
var statearr_44473_44499 = state_44460__$1;
(statearr_44473_44499[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (14))){
var inst_44454 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
var statearr_44474_44500 = state_44460__$1;
(statearr_44474_44500[(2)] = inst_44454);

(statearr_44474_44500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (10))){
var inst_44446 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
var statearr_44475_44501 = state_44460__$1;
(statearr_44475_44501[(2)] = inst_44446);

(statearr_44475_44501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (8))){
var inst_44443 = cljs.core.async.close_BANG_.call(null,to);
var state_44460__$1 = state_44460;
var statearr_44476_44502 = state_44460__$1;
(statearr_44476_44502[(2)] = inst_44443);

(statearr_44476_44502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___44488))
;
return ((function (switch__44193__auto__,c__44307__auto___44488){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_44480 = [null,null,null,null,null,null,null,null];
(statearr_44480[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_44480[(1)] = (1));

return statearr_44480;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_44460){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e44481){if((e44481 instanceof Object)){
var ex__44197__auto__ = e44481;
var statearr_44482_44503 = state_44460;
(statearr_44482_44503[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44504 = state_44460;
state_44460 = G__44504;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_44460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_44460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___44488))
})();
var state__44309__auto__ = (function (){var statearr_44483 = f__44308__auto__.call(null);
(statearr_44483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___44488);

return statearr_44483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___44488))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44692){
var vec__44693 = p__44692;
var v = cljs.core.nth.call(null,vec__44693,(0),null);
var p = cljs.core.nth.call(null,vec__44693,(1),null);
var job = vec__44693;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44307__auto___44879 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___44879,res,vec__44693,v,p,job,jobs,results){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___44879,res,vec__44693,v,p,job,jobs,results){
return (function (state_44700){
var state_val_44701 = (state_44700[(1)]);
if((state_val_44701 === (1))){
var state_44700__$1 = state_44700;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44700__$1,(2),res,v);
} else {
if((state_val_44701 === (2))){
var inst_44697 = (state_44700[(2)]);
var inst_44698 = cljs.core.async.close_BANG_.call(null,res);
var state_44700__$1 = (function (){var statearr_44702 = state_44700;
(statearr_44702[(7)] = inst_44697);

return statearr_44702;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44700__$1,inst_44698);
} else {
return null;
}
}
});})(c__44307__auto___44879,res,vec__44693,v,p,job,jobs,results))
;
return ((function (switch__44193__auto__,c__44307__auto___44879,res,vec__44693,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0 = (function (){
var statearr_44706 = [null,null,null,null,null,null,null,null];
(statearr_44706[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__);

(statearr_44706[(1)] = (1));

return statearr_44706;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1 = (function (state_44700){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e44707){if((e44707 instanceof Object)){
var ex__44197__auto__ = e44707;
var statearr_44708_44880 = state_44700;
(statearr_44708_44880[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44881 = state_44700;
state_44700 = G__44881;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = function(state_44700){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1.call(this,state_44700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___44879,res,vec__44693,v,p,job,jobs,results))
})();
var state__44309__auto__ = (function (){var statearr_44709 = f__44308__auto__.call(null);
(statearr_44709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___44879);

return statearr_44709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___44879,res,vec__44693,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44710){
var vec__44711 = p__44710;
var v = cljs.core.nth.call(null,vec__44711,(0),null);
var p = cljs.core.nth.call(null,vec__44711,(1),null);
var job = vec__44711;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__36908__auto___44882 = n;
var __44883 = (0);
while(true){
if((__44883 < n__36908__auto___44882)){
var G__44714_44884 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44714_44884) {
case "compute":
var c__44307__auto___44886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44883,c__44307__auto___44886,G__44714_44884,n__36908__auto___44882,jobs,results,process,async){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (__44883,c__44307__auto___44886,G__44714_44884,n__36908__auto___44882,jobs,results,process,async){
return (function (state_44727){
var state_val_44728 = (state_44727[(1)]);
if((state_val_44728 === (1))){
var state_44727__$1 = state_44727;
var statearr_44729_44887 = state_44727__$1;
(statearr_44729_44887[(2)] = null);

(statearr_44729_44887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (2))){
var state_44727__$1 = state_44727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44727__$1,(4),jobs);
} else {
if((state_val_44728 === (3))){
var inst_44725 = (state_44727[(2)]);
var state_44727__$1 = state_44727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44727__$1,inst_44725);
} else {
if((state_val_44728 === (4))){
var inst_44717 = (state_44727[(2)]);
var inst_44718 = process.call(null,inst_44717);
var state_44727__$1 = state_44727;
if(cljs.core.truth_(inst_44718)){
var statearr_44730_44888 = state_44727__$1;
(statearr_44730_44888[(1)] = (5));

} else {
var statearr_44731_44889 = state_44727__$1;
(statearr_44731_44889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (5))){
var state_44727__$1 = state_44727;
var statearr_44732_44890 = state_44727__$1;
(statearr_44732_44890[(2)] = null);

(statearr_44732_44890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (6))){
var state_44727__$1 = state_44727;
var statearr_44733_44891 = state_44727__$1;
(statearr_44733_44891[(2)] = null);

(statearr_44733_44891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44728 === (7))){
var inst_44723 = (state_44727[(2)]);
var state_44727__$1 = state_44727;
var statearr_44734_44892 = state_44727__$1;
(statearr_44734_44892[(2)] = inst_44723);

(statearr_44734_44892[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44883,c__44307__auto___44886,G__44714_44884,n__36908__auto___44882,jobs,results,process,async))
;
return ((function (__44883,switch__44193__auto__,c__44307__auto___44886,G__44714_44884,n__36908__auto___44882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0 = (function (){
var statearr_44738 = [null,null,null,null,null,null,null];
(statearr_44738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__);

(statearr_44738[(1)] = (1));

return statearr_44738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1 = (function (state_44727){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e44739){if((e44739 instanceof Object)){
var ex__44197__auto__ = e44739;
var statearr_44740_44893 = state_44727;
(statearr_44740_44893[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44894 = state_44727;
state_44727 = G__44894;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = function(state_44727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1.call(this,state_44727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__;
})()
;})(__44883,switch__44193__auto__,c__44307__auto___44886,G__44714_44884,n__36908__auto___44882,jobs,results,process,async))
})();
var state__44309__auto__ = (function (){var statearr_44741 = f__44308__auto__.call(null);
(statearr_44741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___44886);

return statearr_44741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(__44883,c__44307__auto___44886,G__44714_44884,n__36908__auto___44882,jobs,results,process,async))
);


break;
case "async":
var c__44307__auto___44895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44883,c__44307__auto___44895,G__44714_44884,n__36908__auto___44882,jobs,results,process,async){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (__44883,c__44307__auto___44895,G__44714_44884,n__36908__auto___44882,jobs,results,process,async){
return (function (state_44754){
var state_val_44755 = (state_44754[(1)]);
if((state_val_44755 === (1))){
var state_44754__$1 = state_44754;
var statearr_44756_44896 = state_44754__$1;
(statearr_44756_44896[(2)] = null);

(statearr_44756_44896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (2))){
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44754__$1,(4),jobs);
} else {
if((state_val_44755 === (3))){
var inst_44752 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44754__$1,inst_44752);
} else {
if((state_val_44755 === (4))){
var inst_44744 = (state_44754[(2)]);
var inst_44745 = async.call(null,inst_44744);
var state_44754__$1 = state_44754;
if(cljs.core.truth_(inst_44745)){
var statearr_44757_44897 = state_44754__$1;
(statearr_44757_44897[(1)] = (5));

} else {
var statearr_44758_44898 = state_44754__$1;
(statearr_44758_44898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (5))){
var state_44754__$1 = state_44754;
var statearr_44759_44899 = state_44754__$1;
(statearr_44759_44899[(2)] = null);

(statearr_44759_44899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (6))){
var state_44754__$1 = state_44754;
var statearr_44760_44900 = state_44754__$1;
(statearr_44760_44900[(2)] = null);

(statearr_44760_44900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44755 === (7))){
var inst_44750 = (state_44754[(2)]);
var state_44754__$1 = state_44754;
var statearr_44761_44901 = state_44754__$1;
(statearr_44761_44901[(2)] = inst_44750);

(statearr_44761_44901[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44883,c__44307__auto___44895,G__44714_44884,n__36908__auto___44882,jobs,results,process,async))
;
return ((function (__44883,switch__44193__auto__,c__44307__auto___44895,G__44714_44884,n__36908__auto___44882,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0 = (function (){
var statearr_44765 = [null,null,null,null,null,null,null];
(statearr_44765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__);

(statearr_44765[(1)] = (1));

return statearr_44765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1 = (function (state_44754){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e44766){if((e44766 instanceof Object)){
var ex__44197__auto__ = e44766;
var statearr_44767_44902 = state_44754;
(statearr_44767_44902[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44903 = state_44754;
state_44754 = G__44903;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = function(state_44754){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1.call(this,state_44754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__;
})()
;})(__44883,switch__44193__auto__,c__44307__auto___44895,G__44714_44884,n__36908__auto___44882,jobs,results,process,async))
})();
var state__44309__auto__ = (function (){var statearr_44768 = f__44308__auto__.call(null);
(statearr_44768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___44895);

return statearr_44768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(__44883,c__44307__auto___44895,G__44714_44884,n__36908__auto___44882,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__44904 = (__44883 + (1));
__44883 = G__44904;
continue;
} else {
}
break;
}

var c__44307__auto___44905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___44905,jobs,results,process,async){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___44905,jobs,results,process,async){
return (function (state_44790){
var state_val_44791 = (state_44790[(1)]);
if((state_val_44791 === (1))){
var state_44790__$1 = state_44790;
var statearr_44792_44906 = state_44790__$1;
(statearr_44792_44906[(2)] = null);

(statearr_44792_44906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (2))){
var state_44790__$1 = state_44790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44790__$1,(4),from);
} else {
if((state_val_44791 === (3))){
var inst_44788 = (state_44790[(2)]);
var state_44790__$1 = state_44790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44790__$1,inst_44788);
} else {
if((state_val_44791 === (4))){
var inst_44771 = (state_44790[(7)]);
var inst_44771__$1 = (state_44790[(2)]);
var inst_44772 = (inst_44771__$1 == null);
var state_44790__$1 = (function (){var statearr_44793 = state_44790;
(statearr_44793[(7)] = inst_44771__$1);

return statearr_44793;
})();
if(cljs.core.truth_(inst_44772)){
var statearr_44794_44907 = state_44790__$1;
(statearr_44794_44907[(1)] = (5));

} else {
var statearr_44795_44908 = state_44790__$1;
(statearr_44795_44908[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (5))){
var inst_44774 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44790__$1 = state_44790;
var statearr_44796_44909 = state_44790__$1;
(statearr_44796_44909[(2)] = inst_44774);

(statearr_44796_44909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (6))){
var inst_44776 = (state_44790[(8)]);
var inst_44771 = (state_44790[(7)]);
var inst_44776__$1 = cljs.core.async.chan.call(null,(1));
var inst_44777 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44778 = [inst_44771,inst_44776__$1];
var inst_44779 = (new cljs.core.PersistentVector(null,2,(5),inst_44777,inst_44778,null));
var state_44790__$1 = (function (){var statearr_44797 = state_44790;
(statearr_44797[(8)] = inst_44776__$1);

return statearr_44797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44790__$1,(8),jobs,inst_44779);
} else {
if((state_val_44791 === (7))){
var inst_44786 = (state_44790[(2)]);
var state_44790__$1 = state_44790;
var statearr_44798_44910 = state_44790__$1;
(statearr_44798_44910[(2)] = inst_44786);

(statearr_44798_44910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44791 === (8))){
var inst_44776 = (state_44790[(8)]);
var inst_44781 = (state_44790[(2)]);
var state_44790__$1 = (function (){var statearr_44799 = state_44790;
(statearr_44799[(9)] = inst_44781);

return statearr_44799;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44790__$1,(9),results,inst_44776);
} else {
if((state_val_44791 === (9))){
var inst_44783 = (state_44790[(2)]);
var state_44790__$1 = (function (){var statearr_44800 = state_44790;
(statearr_44800[(10)] = inst_44783);

return statearr_44800;
})();
var statearr_44801_44911 = state_44790__$1;
(statearr_44801_44911[(2)] = null);

(statearr_44801_44911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___44905,jobs,results,process,async))
;
return ((function (switch__44193__auto__,c__44307__auto___44905,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0 = (function (){
var statearr_44805 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44805[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__);

(statearr_44805[(1)] = (1));

return statearr_44805;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1 = (function (state_44790){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e44806){if((e44806 instanceof Object)){
var ex__44197__auto__ = e44806;
var statearr_44807_44912 = state_44790;
(statearr_44807_44912[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44913 = state_44790;
state_44790 = G__44913;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = function(state_44790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1.call(this,state_44790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___44905,jobs,results,process,async))
})();
var state__44309__auto__ = (function (){var statearr_44808 = f__44308__auto__.call(null);
(statearr_44808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___44905);

return statearr_44808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___44905,jobs,results,process,async))
);


var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__,jobs,results,process,async){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__,jobs,results,process,async){
return (function (state_44846){
var state_val_44847 = (state_44846[(1)]);
if((state_val_44847 === (7))){
var inst_44842 = (state_44846[(2)]);
var state_44846__$1 = state_44846;
var statearr_44848_44914 = state_44846__$1;
(statearr_44848_44914[(2)] = inst_44842);

(statearr_44848_44914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (20))){
var state_44846__$1 = state_44846;
var statearr_44849_44915 = state_44846__$1;
(statearr_44849_44915[(2)] = null);

(statearr_44849_44915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (1))){
var state_44846__$1 = state_44846;
var statearr_44850_44916 = state_44846__$1;
(statearr_44850_44916[(2)] = null);

(statearr_44850_44916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (4))){
var inst_44811 = (state_44846[(7)]);
var inst_44811__$1 = (state_44846[(2)]);
var inst_44812 = (inst_44811__$1 == null);
var state_44846__$1 = (function (){var statearr_44851 = state_44846;
(statearr_44851[(7)] = inst_44811__$1);

return statearr_44851;
})();
if(cljs.core.truth_(inst_44812)){
var statearr_44852_44917 = state_44846__$1;
(statearr_44852_44917[(1)] = (5));

} else {
var statearr_44853_44918 = state_44846__$1;
(statearr_44853_44918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (15))){
var inst_44824 = (state_44846[(8)]);
var state_44846__$1 = state_44846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44846__$1,(18),to,inst_44824);
} else {
if((state_val_44847 === (21))){
var inst_44837 = (state_44846[(2)]);
var state_44846__$1 = state_44846;
var statearr_44854_44919 = state_44846__$1;
(statearr_44854_44919[(2)] = inst_44837);

(statearr_44854_44919[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (13))){
var inst_44839 = (state_44846[(2)]);
var state_44846__$1 = (function (){var statearr_44855 = state_44846;
(statearr_44855[(9)] = inst_44839);

return statearr_44855;
})();
var statearr_44856_44920 = state_44846__$1;
(statearr_44856_44920[(2)] = null);

(statearr_44856_44920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (6))){
var inst_44811 = (state_44846[(7)]);
var state_44846__$1 = state_44846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44846__$1,(11),inst_44811);
} else {
if((state_val_44847 === (17))){
var inst_44832 = (state_44846[(2)]);
var state_44846__$1 = state_44846;
if(cljs.core.truth_(inst_44832)){
var statearr_44857_44921 = state_44846__$1;
(statearr_44857_44921[(1)] = (19));

} else {
var statearr_44858_44922 = state_44846__$1;
(statearr_44858_44922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (3))){
var inst_44844 = (state_44846[(2)]);
var state_44846__$1 = state_44846;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44846__$1,inst_44844);
} else {
if((state_val_44847 === (12))){
var inst_44821 = (state_44846[(10)]);
var state_44846__$1 = state_44846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44846__$1,(14),inst_44821);
} else {
if((state_val_44847 === (2))){
var state_44846__$1 = state_44846;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44846__$1,(4),results);
} else {
if((state_val_44847 === (19))){
var state_44846__$1 = state_44846;
var statearr_44859_44923 = state_44846__$1;
(statearr_44859_44923[(2)] = null);

(statearr_44859_44923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (11))){
var inst_44821 = (state_44846[(2)]);
var state_44846__$1 = (function (){var statearr_44860 = state_44846;
(statearr_44860[(10)] = inst_44821);

return statearr_44860;
})();
var statearr_44861_44924 = state_44846__$1;
(statearr_44861_44924[(2)] = null);

(statearr_44861_44924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (9))){
var state_44846__$1 = state_44846;
var statearr_44862_44925 = state_44846__$1;
(statearr_44862_44925[(2)] = null);

(statearr_44862_44925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (5))){
var state_44846__$1 = state_44846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44863_44926 = state_44846__$1;
(statearr_44863_44926[(1)] = (8));

} else {
var statearr_44864_44927 = state_44846__$1;
(statearr_44864_44927[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (14))){
var inst_44826 = (state_44846[(11)]);
var inst_44824 = (state_44846[(8)]);
var inst_44824__$1 = (state_44846[(2)]);
var inst_44825 = (inst_44824__$1 == null);
var inst_44826__$1 = cljs.core.not.call(null,inst_44825);
var state_44846__$1 = (function (){var statearr_44865 = state_44846;
(statearr_44865[(11)] = inst_44826__$1);

(statearr_44865[(8)] = inst_44824__$1);

return statearr_44865;
})();
if(inst_44826__$1){
var statearr_44866_44928 = state_44846__$1;
(statearr_44866_44928[(1)] = (15));

} else {
var statearr_44867_44929 = state_44846__$1;
(statearr_44867_44929[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (16))){
var inst_44826 = (state_44846[(11)]);
var state_44846__$1 = state_44846;
var statearr_44868_44930 = state_44846__$1;
(statearr_44868_44930[(2)] = inst_44826);

(statearr_44868_44930[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (10))){
var inst_44818 = (state_44846[(2)]);
var state_44846__$1 = state_44846;
var statearr_44869_44931 = state_44846__$1;
(statearr_44869_44931[(2)] = inst_44818);

(statearr_44869_44931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (18))){
var inst_44829 = (state_44846[(2)]);
var state_44846__$1 = state_44846;
var statearr_44870_44932 = state_44846__$1;
(statearr_44870_44932[(2)] = inst_44829);

(statearr_44870_44932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44847 === (8))){
var inst_44815 = cljs.core.async.close_BANG_.call(null,to);
var state_44846__$1 = state_44846;
var statearr_44871_44933 = state_44846__$1;
(statearr_44871_44933[(2)] = inst_44815);

(statearr_44871_44933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto__,jobs,results,process,async))
;
return ((function (switch__44193__auto__,c__44307__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0 = (function (){
var statearr_44875 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__);

(statearr_44875[(1)] = (1));

return statearr_44875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1 = (function (state_44846){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e44876){if((e44876 instanceof Object)){
var ex__44197__auto__ = e44876;
var statearr_44877_44934 = state_44846;
(statearr_44877_44934[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44935 = state_44846;
state_44846 = G__44935;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__ = function(state_44846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1.call(this,state_44846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44194__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__,jobs,results,process,async))
})();
var state__44309__auto__ = (function (){var statearr_44878 = f__44308__auto__.call(null);
(statearr_44878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_44878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__,jobs,results,process,async))
);

return c__44307__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args44936 = [];
var len__37108__auto___44939 = arguments.length;
var i__37109__auto___44940 = (0);
while(true){
if((i__37109__auto___44940 < len__37108__auto___44939)){
args44936.push((arguments[i__37109__auto___44940]));

var G__44941 = (i__37109__auto___44940 + (1));
i__37109__auto___44940 = G__44941;
continue;
} else {
}
break;
}

var G__44938 = args44936.length;
switch (G__44938) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44936.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args44943 = [];
var len__37108__auto___44946 = arguments.length;
var i__37109__auto___44947 = (0);
while(true){
if((i__37109__auto___44947 < len__37108__auto___44946)){
args44943.push((arguments[i__37109__auto___44947]));

var G__44948 = (i__37109__auto___44947 + (1));
i__37109__auto___44947 = G__44948;
continue;
} else {
}
break;
}

var G__44945 = args44943.length;
switch (G__44945) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44943.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args44950 = [];
var len__37108__auto___45003 = arguments.length;
var i__37109__auto___45004 = (0);
while(true){
if((i__37109__auto___45004 < len__37108__auto___45003)){
args44950.push((arguments[i__37109__auto___45004]));

var G__45005 = (i__37109__auto___45004 + (1));
i__37109__auto___45004 = G__45005;
continue;
} else {
}
break;
}

var G__44952 = args44950.length;
switch (G__44952) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44950.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44307__auto___45007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___45007,tc,fc){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___45007,tc,fc){
return (function (state_44978){
var state_val_44979 = (state_44978[(1)]);
if((state_val_44979 === (7))){
var inst_44974 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44980_45008 = state_44978__$1;
(statearr_44980_45008[(2)] = inst_44974);

(statearr_44980_45008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (1))){
var state_44978__$1 = state_44978;
var statearr_44981_45009 = state_44978__$1;
(statearr_44981_45009[(2)] = null);

(statearr_44981_45009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (4))){
var inst_44955 = (state_44978[(7)]);
var inst_44955__$1 = (state_44978[(2)]);
var inst_44956 = (inst_44955__$1 == null);
var state_44978__$1 = (function (){var statearr_44982 = state_44978;
(statearr_44982[(7)] = inst_44955__$1);

return statearr_44982;
})();
if(cljs.core.truth_(inst_44956)){
var statearr_44983_45010 = state_44978__$1;
(statearr_44983_45010[(1)] = (5));

} else {
var statearr_44984_45011 = state_44978__$1;
(statearr_44984_45011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (13))){
var state_44978__$1 = state_44978;
var statearr_44985_45012 = state_44978__$1;
(statearr_44985_45012[(2)] = null);

(statearr_44985_45012[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (6))){
var inst_44955 = (state_44978[(7)]);
var inst_44961 = p.call(null,inst_44955);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44961)){
var statearr_44986_45013 = state_44978__$1;
(statearr_44986_45013[(1)] = (9));

} else {
var statearr_44987_45014 = state_44978__$1;
(statearr_44987_45014[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (3))){
var inst_44976 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44978__$1,inst_44976);
} else {
if((state_val_44979 === (12))){
var state_44978__$1 = state_44978;
var statearr_44988_45015 = state_44978__$1;
(statearr_44988_45015[(2)] = null);

(statearr_44988_45015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (2))){
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44978__$1,(4),ch);
} else {
if((state_val_44979 === (11))){
var inst_44955 = (state_44978[(7)]);
var inst_44965 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44978__$1,(8),inst_44965,inst_44955);
} else {
if((state_val_44979 === (9))){
var state_44978__$1 = state_44978;
var statearr_44989_45016 = state_44978__$1;
(statearr_44989_45016[(2)] = tc);

(statearr_44989_45016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (5))){
var inst_44958 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44959 = cljs.core.async.close_BANG_.call(null,fc);
var state_44978__$1 = (function (){var statearr_44990 = state_44978;
(statearr_44990[(8)] = inst_44958);

return statearr_44990;
})();
var statearr_44991_45017 = state_44978__$1;
(statearr_44991_45017[(2)] = inst_44959);

(statearr_44991_45017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (14))){
var inst_44972 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
var statearr_44992_45018 = state_44978__$1;
(statearr_44992_45018[(2)] = inst_44972);

(statearr_44992_45018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (10))){
var state_44978__$1 = state_44978;
var statearr_44993_45019 = state_44978__$1;
(statearr_44993_45019[(2)] = fc);

(statearr_44993_45019[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44979 === (8))){
var inst_44967 = (state_44978[(2)]);
var state_44978__$1 = state_44978;
if(cljs.core.truth_(inst_44967)){
var statearr_44994_45020 = state_44978__$1;
(statearr_44994_45020[(1)] = (12));

} else {
var statearr_44995_45021 = state_44978__$1;
(statearr_44995_45021[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___45007,tc,fc))
;
return ((function (switch__44193__auto__,c__44307__auto___45007,tc,fc){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_44999 = [null,null,null,null,null,null,null,null,null];
(statearr_44999[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_44999[(1)] = (1));

return statearr_44999;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_44978){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_44978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e45000){if((e45000 instanceof Object)){
var ex__44197__auto__ = e45000;
var statearr_45001_45022 = state_44978;
(statearr_45001_45022[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45023 = state_44978;
state_44978 = G__45023;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_44978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_44978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___45007,tc,fc))
})();
var state__44309__auto__ = (function (){var statearr_45002 = f__44308__auto__.call(null);
(statearr_45002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___45007);

return statearr_45002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___45007,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_45087){
var state_val_45088 = (state_45087[(1)]);
if((state_val_45088 === (7))){
var inst_45083 = (state_45087[(2)]);
var state_45087__$1 = state_45087;
var statearr_45089_45110 = state_45087__$1;
(statearr_45089_45110[(2)] = inst_45083);

(statearr_45089_45110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (1))){
var inst_45067 = init;
var state_45087__$1 = (function (){var statearr_45090 = state_45087;
(statearr_45090[(7)] = inst_45067);

return statearr_45090;
})();
var statearr_45091_45111 = state_45087__$1;
(statearr_45091_45111[(2)] = null);

(statearr_45091_45111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (4))){
var inst_45070 = (state_45087[(8)]);
var inst_45070__$1 = (state_45087[(2)]);
var inst_45071 = (inst_45070__$1 == null);
var state_45087__$1 = (function (){var statearr_45092 = state_45087;
(statearr_45092[(8)] = inst_45070__$1);

return statearr_45092;
})();
if(cljs.core.truth_(inst_45071)){
var statearr_45093_45112 = state_45087__$1;
(statearr_45093_45112[(1)] = (5));

} else {
var statearr_45094_45113 = state_45087__$1;
(statearr_45094_45113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (6))){
var inst_45070 = (state_45087[(8)]);
var inst_45074 = (state_45087[(9)]);
var inst_45067 = (state_45087[(7)]);
var inst_45074__$1 = f.call(null,inst_45067,inst_45070);
var inst_45075 = cljs.core.reduced_QMARK_.call(null,inst_45074__$1);
var state_45087__$1 = (function (){var statearr_45095 = state_45087;
(statearr_45095[(9)] = inst_45074__$1);

return statearr_45095;
})();
if(inst_45075){
var statearr_45096_45114 = state_45087__$1;
(statearr_45096_45114[(1)] = (8));

} else {
var statearr_45097_45115 = state_45087__$1;
(statearr_45097_45115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (3))){
var inst_45085 = (state_45087[(2)]);
var state_45087__$1 = state_45087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45087__$1,inst_45085);
} else {
if((state_val_45088 === (2))){
var state_45087__$1 = state_45087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45087__$1,(4),ch);
} else {
if((state_val_45088 === (9))){
var inst_45074 = (state_45087[(9)]);
var inst_45067 = inst_45074;
var state_45087__$1 = (function (){var statearr_45098 = state_45087;
(statearr_45098[(7)] = inst_45067);

return statearr_45098;
})();
var statearr_45099_45116 = state_45087__$1;
(statearr_45099_45116[(2)] = null);

(statearr_45099_45116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (5))){
var inst_45067 = (state_45087[(7)]);
var state_45087__$1 = state_45087;
var statearr_45100_45117 = state_45087__$1;
(statearr_45100_45117[(2)] = inst_45067);

(statearr_45100_45117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (10))){
var inst_45081 = (state_45087[(2)]);
var state_45087__$1 = state_45087;
var statearr_45101_45118 = state_45087__$1;
(statearr_45101_45118[(2)] = inst_45081);

(statearr_45101_45118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45088 === (8))){
var inst_45074 = (state_45087[(9)]);
var inst_45077 = cljs.core.deref.call(null,inst_45074);
var state_45087__$1 = state_45087;
var statearr_45102_45119 = state_45087__$1;
(statearr_45102_45119[(2)] = inst_45077);

(statearr_45102_45119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44194__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44194__auto____0 = (function (){
var statearr_45106 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45106[(0)] = cljs$core$async$reduce_$_state_machine__44194__auto__);

(statearr_45106[(1)] = (1));

return statearr_45106;
});
var cljs$core$async$reduce_$_state_machine__44194__auto____1 = (function (state_45087){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_45087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e45107){if((e45107 instanceof Object)){
var ex__44197__auto__ = e45107;
var statearr_45108_45120 = state_45087;
(statearr_45108_45120[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45121 = state_45087;
state_45087 = G__45121;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44194__auto__ = function(state_45087){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44194__auto____1.call(this,state_45087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44194__auto____0;
cljs$core$async$reduce_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44194__auto____1;
return cljs$core$async$reduce_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_45109 = f__44308__auto__.call(null);
(statearr_45109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_45109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__,f__$1){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__,f__$1){
return (function (state_45141){
var state_val_45142 = (state_45141[(1)]);
if((state_val_45142 === (1))){
var inst_45136 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45141__$1 = state_45141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45141__$1,(2),inst_45136);
} else {
if((state_val_45142 === (2))){
var inst_45138 = (state_45141[(2)]);
var inst_45139 = f__$1.call(null,inst_45138);
var state_45141__$1 = state_45141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45141__$1,inst_45139);
} else {
return null;
}
}
});})(c__44307__auto__,f__$1))
;
return ((function (switch__44193__auto__,c__44307__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44194__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44194__auto____0 = (function (){
var statearr_45146 = [null,null,null,null,null,null,null];
(statearr_45146[(0)] = cljs$core$async$transduce_$_state_machine__44194__auto__);

(statearr_45146[(1)] = (1));

return statearr_45146;
});
var cljs$core$async$transduce_$_state_machine__44194__auto____1 = (function (state_45141){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_45141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e45147){if((e45147 instanceof Object)){
var ex__44197__auto__ = e45147;
var statearr_45148_45150 = state_45141;
(statearr_45148_45150[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45151 = state_45141;
state_45141 = G__45151;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44194__auto__ = function(state_45141){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44194__auto____1.call(this,state_45141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44194__auto____0;
cljs$core$async$transduce_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44194__auto____1;
return cljs$core$async$transduce_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__,f__$1))
})();
var state__44309__auto__ = (function (){var statearr_45149 = f__44308__auto__.call(null);
(statearr_45149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_45149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__,f__$1))
);

return c__44307__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args45152 = [];
var len__37108__auto___45204 = arguments.length;
var i__37109__auto___45205 = (0);
while(true){
if((i__37109__auto___45205 < len__37108__auto___45204)){
args45152.push((arguments[i__37109__auto___45205]));

var G__45206 = (i__37109__auto___45205 + (1));
i__37109__auto___45205 = G__45206;
continue;
} else {
}
break;
}

var G__45154 = args45152.length;
switch (G__45154) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45152.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_45179){
var state_val_45180 = (state_45179[(1)]);
if((state_val_45180 === (7))){
var inst_45161 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
var statearr_45181_45208 = state_45179__$1;
(statearr_45181_45208[(2)] = inst_45161);

(statearr_45181_45208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (1))){
var inst_45155 = cljs.core.seq.call(null,coll);
var inst_45156 = inst_45155;
var state_45179__$1 = (function (){var statearr_45182 = state_45179;
(statearr_45182[(7)] = inst_45156);

return statearr_45182;
})();
var statearr_45183_45209 = state_45179__$1;
(statearr_45183_45209[(2)] = null);

(statearr_45183_45209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (4))){
var inst_45156 = (state_45179[(7)]);
var inst_45159 = cljs.core.first.call(null,inst_45156);
var state_45179__$1 = state_45179;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45179__$1,(7),ch,inst_45159);
} else {
if((state_val_45180 === (13))){
var inst_45173 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
var statearr_45184_45210 = state_45179__$1;
(statearr_45184_45210[(2)] = inst_45173);

(statearr_45184_45210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (6))){
var inst_45164 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
if(cljs.core.truth_(inst_45164)){
var statearr_45185_45211 = state_45179__$1;
(statearr_45185_45211[(1)] = (8));

} else {
var statearr_45186_45212 = state_45179__$1;
(statearr_45186_45212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (3))){
var inst_45177 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45179__$1,inst_45177);
} else {
if((state_val_45180 === (12))){
var state_45179__$1 = state_45179;
var statearr_45187_45213 = state_45179__$1;
(statearr_45187_45213[(2)] = null);

(statearr_45187_45213[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (2))){
var inst_45156 = (state_45179[(7)]);
var state_45179__$1 = state_45179;
if(cljs.core.truth_(inst_45156)){
var statearr_45188_45214 = state_45179__$1;
(statearr_45188_45214[(1)] = (4));

} else {
var statearr_45189_45215 = state_45179__$1;
(statearr_45189_45215[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (11))){
var inst_45170 = cljs.core.async.close_BANG_.call(null,ch);
var state_45179__$1 = state_45179;
var statearr_45190_45216 = state_45179__$1;
(statearr_45190_45216[(2)] = inst_45170);

(statearr_45190_45216[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (9))){
var state_45179__$1 = state_45179;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45191_45217 = state_45179__$1;
(statearr_45191_45217[(1)] = (11));

} else {
var statearr_45192_45218 = state_45179__$1;
(statearr_45192_45218[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (5))){
var inst_45156 = (state_45179[(7)]);
var state_45179__$1 = state_45179;
var statearr_45193_45219 = state_45179__$1;
(statearr_45193_45219[(2)] = inst_45156);

(statearr_45193_45219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (10))){
var inst_45175 = (state_45179[(2)]);
var state_45179__$1 = state_45179;
var statearr_45194_45220 = state_45179__$1;
(statearr_45194_45220[(2)] = inst_45175);

(statearr_45194_45220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45180 === (8))){
var inst_45156 = (state_45179[(7)]);
var inst_45166 = cljs.core.next.call(null,inst_45156);
var inst_45156__$1 = inst_45166;
var state_45179__$1 = (function (){var statearr_45195 = state_45179;
(statearr_45195[(7)] = inst_45156__$1);

return statearr_45195;
})();
var statearr_45196_45221 = state_45179__$1;
(statearr_45196_45221[(2)] = null);

(statearr_45196_45221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_45200 = [null,null,null,null,null,null,null,null];
(statearr_45200[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_45200[(1)] = (1));

return statearr_45200;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_45179){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_45179);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e45201){if((e45201 instanceof Object)){
var ex__44197__auto__ = e45201;
var statearr_45202_45222 = state_45179;
(statearr_45202_45222[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45179);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45223 = state_45179;
state_45179 = G__45223;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_45179){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_45179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_45203 = f__44308__auto__.call(null);
(statearr_45203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_45203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__36605__auto__ = (((_ == null))?null:_);
var m__36606__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,_);
} else {
var m__36606__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__36606__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m);
} else {
var m__36606__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45449 = (function (ch,cs,meta45450){
this.ch = ch;
this.cs = cs;
this.meta45450 = meta45450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45451,meta45450__$1){
var self__ = this;
var _45451__$1 = this;
return (new cljs.core.async.t_cljs$core$async45449(self__.ch,self__.cs,meta45450__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45451){
var self__ = this;
var _45451__$1 = this;
return self__.meta45450;
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45450","meta45450",1508491573,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45449";

cljs.core.async.t_cljs$core$async45449.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async45449");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45449 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45449(ch__$1,cs__$1,meta45450){
return (new cljs.core.async.t_cljs$core$async45449(ch__$1,cs__$1,meta45450));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45449(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__44307__auto___45674 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___45674,cs,m,dchan,dctr,done){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___45674,cs,m,dchan,dctr,done){
return (function (state_45586){
var state_val_45587 = (state_45586[(1)]);
if((state_val_45587 === (7))){
var inst_45582 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45588_45675 = state_45586__$1;
(statearr_45588_45675[(2)] = inst_45582);

(statearr_45588_45675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (20))){
var inst_45485 = (state_45586[(7)]);
var inst_45497 = cljs.core.first.call(null,inst_45485);
var inst_45498 = cljs.core.nth.call(null,inst_45497,(0),null);
var inst_45499 = cljs.core.nth.call(null,inst_45497,(1),null);
var state_45586__$1 = (function (){var statearr_45589 = state_45586;
(statearr_45589[(8)] = inst_45498);

return statearr_45589;
})();
if(cljs.core.truth_(inst_45499)){
var statearr_45590_45676 = state_45586__$1;
(statearr_45590_45676[(1)] = (22));

} else {
var statearr_45591_45677 = state_45586__$1;
(statearr_45591_45677[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (27))){
var inst_45534 = (state_45586[(9)]);
var inst_45527 = (state_45586[(10)]);
var inst_45454 = (state_45586[(11)]);
var inst_45529 = (state_45586[(12)]);
var inst_45534__$1 = cljs.core._nth.call(null,inst_45527,inst_45529);
var inst_45535 = cljs.core.async.put_BANG_.call(null,inst_45534__$1,inst_45454,done);
var state_45586__$1 = (function (){var statearr_45592 = state_45586;
(statearr_45592[(9)] = inst_45534__$1);

return statearr_45592;
})();
if(cljs.core.truth_(inst_45535)){
var statearr_45593_45678 = state_45586__$1;
(statearr_45593_45678[(1)] = (30));

} else {
var statearr_45594_45679 = state_45586__$1;
(statearr_45594_45679[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (1))){
var state_45586__$1 = state_45586;
var statearr_45595_45680 = state_45586__$1;
(statearr_45595_45680[(2)] = null);

(statearr_45595_45680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (24))){
var inst_45485 = (state_45586[(7)]);
var inst_45504 = (state_45586[(2)]);
var inst_45505 = cljs.core.next.call(null,inst_45485);
var inst_45463 = inst_45505;
var inst_45464 = null;
var inst_45465 = (0);
var inst_45466 = (0);
var state_45586__$1 = (function (){var statearr_45596 = state_45586;
(statearr_45596[(13)] = inst_45466);

(statearr_45596[(14)] = inst_45463);

(statearr_45596[(15)] = inst_45465);

(statearr_45596[(16)] = inst_45504);

(statearr_45596[(17)] = inst_45464);

return statearr_45596;
})();
var statearr_45597_45681 = state_45586__$1;
(statearr_45597_45681[(2)] = null);

(statearr_45597_45681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (39))){
var state_45586__$1 = state_45586;
var statearr_45601_45682 = state_45586__$1;
(statearr_45601_45682[(2)] = null);

(statearr_45601_45682[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (4))){
var inst_45454 = (state_45586[(11)]);
var inst_45454__$1 = (state_45586[(2)]);
var inst_45455 = (inst_45454__$1 == null);
var state_45586__$1 = (function (){var statearr_45602 = state_45586;
(statearr_45602[(11)] = inst_45454__$1);

return statearr_45602;
})();
if(cljs.core.truth_(inst_45455)){
var statearr_45603_45683 = state_45586__$1;
(statearr_45603_45683[(1)] = (5));

} else {
var statearr_45604_45684 = state_45586__$1;
(statearr_45604_45684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (15))){
var inst_45466 = (state_45586[(13)]);
var inst_45463 = (state_45586[(14)]);
var inst_45465 = (state_45586[(15)]);
var inst_45464 = (state_45586[(17)]);
var inst_45481 = (state_45586[(2)]);
var inst_45482 = (inst_45466 + (1));
var tmp45598 = inst_45463;
var tmp45599 = inst_45465;
var tmp45600 = inst_45464;
var inst_45463__$1 = tmp45598;
var inst_45464__$1 = tmp45600;
var inst_45465__$1 = tmp45599;
var inst_45466__$1 = inst_45482;
var state_45586__$1 = (function (){var statearr_45605 = state_45586;
(statearr_45605[(13)] = inst_45466__$1);

(statearr_45605[(18)] = inst_45481);

(statearr_45605[(14)] = inst_45463__$1);

(statearr_45605[(15)] = inst_45465__$1);

(statearr_45605[(17)] = inst_45464__$1);

return statearr_45605;
})();
var statearr_45606_45685 = state_45586__$1;
(statearr_45606_45685[(2)] = null);

(statearr_45606_45685[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (21))){
var inst_45508 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45610_45686 = state_45586__$1;
(statearr_45610_45686[(2)] = inst_45508);

(statearr_45610_45686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (31))){
var inst_45534 = (state_45586[(9)]);
var inst_45538 = done.call(null,null);
var inst_45539 = cljs.core.async.untap_STAR_.call(null,m,inst_45534);
var state_45586__$1 = (function (){var statearr_45611 = state_45586;
(statearr_45611[(19)] = inst_45538);

return statearr_45611;
})();
var statearr_45612_45687 = state_45586__$1;
(statearr_45612_45687[(2)] = inst_45539);

(statearr_45612_45687[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (32))){
var inst_45527 = (state_45586[(10)]);
var inst_45528 = (state_45586[(20)]);
var inst_45529 = (state_45586[(12)]);
var inst_45526 = (state_45586[(21)]);
var inst_45541 = (state_45586[(2)]);
var inst_45542 = (inst_45529 + (1));
var tmp45607 = inst_45527;
var tmp45608 = inst_45528;
var tmp45609 = inst_45526;
var inst_45526__$1 = tmp45609;
var inst_45527__$1 = tmp45607;
var inst_45528__$1 = tmp45608;
var inst_45529__$1 = inst_45542;
var state_45586__$1 = (function (){var statearr_45613 = state_45586;
(statearr_45613[(10)] = inst_45527__$1);

(statearr_45613[(20)] = inst_45528__$1);

(statearr_45613[(22)] = inst_45541);

(statearr_45613[(12)] = inst_45529__$1);

(statearr_45613[(21)] = inst_45526__$1);

return statearr_45613;
})();
var statearr_45614_45688 = state_45586__$1;
(statearr_45614_45688[(2)] = null);

(statearr_45614_45688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (40))){
var inst_45554 = (state_45586[(23)]);
var inst_45558 = done.call(null,null);
var inst_45559 = cljs.core.async.untap_STAR_.call(null,m,inst_45554);
var state_45586__$1 = (function (){var statearr_45615 = state_45586;
(statearr_45615[(24)] = inst_45558);

return statearr_45615;
})();
var statearr_45616_45689 = state_45586__$1;
(statearr_45616_45689[(2)] = inst_45559);

(statearr_45616_45689[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (33))){
var inst_45545 = (state_45586[(25)]);
var inst_45547 = cljs.core.chunked_seq_QMARK_.call(null,inst_45545);
var state_45586__$1 = state_45586;
if(inst_45547){
var statearr_45617_45690 = state_45586__$1;
(statearr_45617_45690[(1)] = (36));

} else {
var statearr_45618_45691 = state_45586__$1;
(statearr_45618_45691[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (13))){
var inst_45475 = (state_45586[(26)]);
var inst_45478 = cljs.core.async.close_BANG_.call(null,inst_45475);
var state_45586__$1 = state_45586;
var statearr_45619_45692 = state_45586__$1;
(statearr_45619_45692[(2)] = inst_45478);

(statearr_45619_45692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (22))){
var inst_45498 = (state_45586[(8)]);
var inst_45501 = cljs.core.async.close_BANG_.call(null,inst_45498);
var state_45586__$1 = state_45586;
var statearr_45620_45693 = state_45586__$1;
(statearr_45620_45693[(2)] = inst_45501);

(statearr_45620_45693[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (36))){
var inst_45545 = (state_45586[(25)]);
var inst_45549 = cljs.core.chunk_first.call(null,inst_45545);
var inst_45550 = cljs.core.chunk_rest.call(null,inst_45545);
var inst_45551 = cljs.core.count.call(null,inst_45549);
var inst_45526 = inst_45550;
var inst_45527 = inst_45549;
var inst_45528 = inst_45551;
var inst_45529 = (0);
var state_45586__$1 = (function (){var statearr_45621 = state_45586;
(statearr_45621[(10)] = inst_45527);

(statearr_45621[(20)] = inst_45528);

(statearr_45621[(12)] = inst_45529);

(statearr_45621[(21)] = inst_45526);

return statearr_45621;
})();
var statearr_45622_45694 = state_45586__$1;
(statearr_45622_45694[(2)] = null);

(statearr_45622_45694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (41))){
var inst_45545 = (state_45586[(25)]);
var inst_45561 = (state_45586[(2)]);
var inst_45562 = cljs.core.next.call(null,inst_45545);
var inst_45526 = inst_45562;
var inst_45527 = null;
var inst_45528 = (0);
var inst_45529 = (0);
var state_45586__$1 = (function (){var statearr_45623 = state_45586;
(statearr_45623[(10)] = inst_45527);

(statearr_45623[(27)] = inst_45561);

(statearr_45623[(20)] = inst_45528);

(statearr_45623[(12)] = inst_45529);

(statearr_45623[(21)] = inst_45526);

return statearr_45623;
})();
var statearr_45624_45695 = state_45586__$1;
(statearr_45624_45695[(2)] = null);

(statearr_45624_45695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (43))){
var state_45586__$1 = state_45586;
var statearr_45625_45696 = state_45586__$1;
(statearr_45625_45696[(2)] = null);

(statearr_45625_45696[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (29))){
var inst_45570 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45626_45697 = state_45586__$1;
(statearr_45626_45697[(2)] = inst_45570);

(statearr_45626_45697[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (44))){
var inst_45579 = (state_45586[(2)]);
var state_45586__$1 = (function (){var statearr_45627 = state_45586;
(statearr_45627[(28)] = inst_45579);

return statearr_45627;
})();
var statearr_45628_45698 = state_45586__$1;
(statearr_45628_45698[(2)] = null);

(statearr_45628_45698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (6))){
var inst_45518 = (state_45586[(29)]);
var inst_45517 = cljs.core.deref.call(null,cs);
var inst_45518__$1 = cljs.core.keys.call(null,inst_45517);
var inst_45519 = cljs.core.count.call(null,inst_45518__$1);
var inst_45520 = cljs.core.reset_BANG_.call(null,dctr,inst_45519);
var inst_45525 = cljs.core.seq.call(null,inst_45518__$1);
var inst_45526 = inst_45525;
var inst_45527 = null;
var inst_45528 = (0);
var inst_45529 = (0);
var state_45586__$1 = (function (){var statearr_45629 = state_45586;
(statearr_45629[(29)] = inst_45518__$1);

(statearr_45629[(10)] = inst_45527);

(statearr_45629[(20)] = inst_45528);

(statearr_45629[(12)] = inst_45529);

(statearr_45629[(21)] = inst_45526);

(statearr_45629[(30)] = inst_45520);

return statearr_45629;
})();
var statearr_45630_45699 = state_45586__$1;
(statearr_45630_45699[(2)] = null);

(statearr_45630_45699[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (28))){
var inst_45545 = (state_45586[(25)]);
var inst_45526 = (state_45586[(21)]);
var inst_45545__$1 = cljs.core.seq.call(null,inst_45526);
var state_45586__$1 = (function (){var statearr_45631 = state_45586;
(statearr_45631[(25)] = inst_45545__$1);

return statearr_45631;
})();
if(inst_45545__$1){
var statearr_45632_45700 = state_45586__$1;
(statearr_45632_45700[(1)] = (33));

} else {
var statearr_45633_45701 = state_45586__$1;
(statearr_45633_45701[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (25))){
var inst_45528 = (state_45586[(20)]);
var inst_45529 = (state_45586[(12)]);
var inst_45531 = (inst_45529 < inst_45528);
var inst_45532 = inst_45531;
var state_45586__$1 = state_45586;
if(cljs.core.truth_(inst_45532)){
var statearr_45634_45702 = state_45586__$1;
(statearr_45634_45702[(1)] = (27));

} else {
var statearr_45635_45703 = state_45586__$1;
(statearr_45635_45703[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (34))){
var state_45586__$1 = state_45586;
var statearr_45636_45704 = state_45586__$1;
(statearr_45636_45704[(2)] = null);

(statearr_45636_45704[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (17))){
var state_45586__$1 = state_45586;
var statearr_45637_45705 = state_45586__$1;
(statearr_45637_45705[(2)] = null);

(statearr_45637_45705[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (3))){
var inst_45584 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45586__$1,inst_45584);
} else {
if((state_val_45587 === (12))){
var inst_45513 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45638_45706 = state_45586__$1;
(statearr_45638_45706[(2)] = inst_45513);

(statearr_45638_45706[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (2))){
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45586__$1,(4),ch);
} else {
if((state_val_45587 === (23))){
var state_45586__$1 = state_45586;
var statearr_45639_45707 = state_45586__$1;
(statearr_45639_45707[(2)] = null);

(statearr_45639_45707[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (35))){
var inst_45568 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45640_45708 = state_45586__$1;
(statearr_45640_45708[(2)] = inst_45568);

(statearr_45640_45708[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (19))){
var inst_45485 = (state_45586[(7)]);
var inst_45489 = cljs.core.chunk_first.call(null,inst_45485);
var inst_45490 = cljs.core.chunk_rest.call(null,inst_45485);
var inst_45491 = cljs.core.count.call(null,inst_45489);
var inst_45463 = inst_45490;
var inst_45464 = inst_45489;
var inst_45465 = inst_45491;
var inst_45466 = (0);
var state_45586__$1 = (function (){var statearr_45641 = state_45586;
(statearr_45641[(13)] = inst_45466);

(statearr_45641[(14)] = inst_45463);

(statearr_45641[(15)] = inst_45465);

(statearr_45641[(17)] = inst_45464);

return statearr_45641;
})();
var statearr_45642_45709 = state_45586__$1;
(statearr_45642_45709[(2)] = null);

(statearr_45642_45709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (11))){
var inst_45485 = (state_45586[(7)]);
var inst_45463 = (state_45586[(14)]);
var inst_45485__$1 = cljs.core.seq.call(null,inst_45463);
var state_45586__$1 = (function (){var statearr_45643 = state_45586;
(statearr_45643[(7)] = inst_45485__$1);

return statearr_45643;
})();
if(inst_45485__$1){
var statearr_45644_45710 = state_45586__$1;
(statearr_45644_45710[(1)] = (16));

} else {
var statearr_45645_45711 = state_45586__$1;
(statearr_45645_45711[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (9))){
var inst_45515 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45646_45712 = state_45586__$1;
(statearr_45646_45712[(2)] = inst_45515);

(statearr_45646_45712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (5))){
var inst_45461 = cljs.core.deref.call(null,cs);
var inst_45462 = cljs.core.seq.call(null,inst_45461);
var inst_45463 = inst_45462;
var inst_45464 = null;
var inst_45465 = (0);
var inst_45466 = (0);
var state_45586__$1 = (function (){var statearr_45647 = state_45586;
(statearr_45647[(13)] = inst_45466);

(statearr_45647[(14)] = inst_45463);

(statearr_45647[(15)] = inst_45465);

(statearr_45647[(17)] = inst_45464);

return statearr_45647;
})();
var statearr_45648_45713 = state_45586__$1;
(statearr_45648_45713[(2)] = null);

(statearr_45648_45713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (14))){
var state_45586__$1 = state_45586;
var statearr_45649_45714 = state_45586__$1;
(statearr_45649_45714[(2)] = null);

(statearr_45649_45714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (45))){
var inst_45576 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45650_45715 = state_45586__$1;
(statearr_45650_45715[(2)] = inst_45576);

(statearr_45650_45715[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (26))){
var inst_45518 = (state_45586[(29)]);
var inst_45572 = (state_45586[(2)]);
var inst_45573 = cljs.core.seq.call(null,inst_45518);
var state_45586__$1 = (function (){var statearr_45651 = state_45586;
(statearr_45651[(31)] = inst_45572);

return statearr_45651;
})();
if(inst_45573){
var statearr_45652_45716 = state_45586__$1;
(statearr_45652_45716[(1)] = (42));

} else {
var statearr_45653_45717 = state_45586__$1;
(statearr_45653_45717[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (16))){
var inst_45485 = (state_45586[(7)]);
var inst_45487 = cljs.core.chunked_seq_QMARK_.call(null,inst_45485);
var state_45586__$1 = state_45586;
if(inst_45487){
var statearr_45654_45718 = state_45586__$1;
(statearr_45654_45718[(1)] = (19));

} else {
var statearr_45655_45719 = state_45586__$1;
(statearr_45655_45719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (38))){
var inst_45565 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45656_45720 = state_45586__$1;
(statearr_45656_45720[(2)] = inst_45565);

(statearr_45656_45720[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (30))){
var state_45586__$1 = state_45586;
var statearr_45657_45721 = state_45586__$1;
(statearr_45657_45721[(2)] = null);

(statearr_45657_45721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (10))){
var inst_45466 = (state_45586[(13)]);
var inst_45464 = (state_45586[(17)]);
var inst_45474 = cljs.core._nth.call(null,inst_45464,inst_45466);
var inst_45475 = cljs.core.nth.call(null,inst_45474,(0),null);
var inst_45476 = cljs.core.nth.call(null,inst_45474,(1),null);
var state_45586__$1 = (function (){var statearr_45658 = state_45586;
(statearr_45658[(26)] = inst_45475);

return statearr_45658;
})();
if(cljs.core.truth_(inst_45476)){
var statearr_45659_45722 = state_45586__$1;
(statearr_45659_45722[(1)] = (13));

} else {
var statearr_45660_45723 = state_45586__$1;
(statearr_45660_45723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (18))){
var inst_45511 = (state_45586[(2)]);
var state_45586__$1 = state_45586;
var statearr_45661_45724 = state_45586__$1;
(statearr_45661_45724[(2)] = inst_45511);

(statearr_45661_45724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (42))){
var state_45586__$1 = state_45586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45586__$1,(45),dchan);
} else {
if((state_val_45587 === (37))){
var inst_45545 = (state_45586[(25)]);
var inst_45454 = (state_45586[(11)]);
var inst_45554 = (state_45586[(23)]);
var inst_45554__$1 = cljs.core.first.call(null,inst_45545);
var inst_45555 = cljs.core.async.put_BANG_.call(null,inst_45554__$1,inst_45454,done);
var state_45586__$1 = (function (){var statearr_45662 = state_45586;
(statearr_45662[(23)] = inst_45554__$1);

return statearr_45662;
})();
if(cljs.core.truth_(inst_45555)){
var statearr_45663_45725 = state_45586__$1;
(statearr_45663_45725[(1)] = (39));

} else {
var statearr_45664_45726 = state_45586__$1;
(statearr_45664_45726[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45587 === (8))){
var inst_45466 = (state_45586[(13)]);
var inst_45465 = (state_45586[(15)]);
var inst_45468 = (inst_45466 < inst_45465);
var inst_45469 = inst_45468;
var state_45586__$1 = state_45586;
if(cljs.core.truth_(inst_45469)){
var statearr_45665_45727 = state_45586__$1;
(statearr_45665_45727[(1)] = (10));

} else {
var statearr_45666_45728 = state_45586__$1;
(statearr_45666_45728[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___45674,cs,m,dchan,dctr,done))
;
return ((function (switch__44193__auto__,c__44307__auto___45674,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44194__auto__ = null;
var cljs$core$async$mult_$_state_machine__44194__auto____0 = (function (){
var statearr_45670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45670[(0)] = cljs$core$async$mult_$_state_machine__44194__auto__);

(statearr_45670[(1)] = (1));

return statearr_45670;
});
var cljs$core$async$mult_$_state_machine__44194__auto____1 = (function (state_45586){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_45586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e45671){if((e45671 instanceof Object)){
var ex__44197__auto__ = e45671;
var statearr_45672_45729 = state_45586;
(statearr_45672_45729[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45730 = state_45586;
state_45586 = G__45730;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44194__auto__ = function(state_45586){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44194__auto____1.call(this,state_45586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44194__auto____0;
cljs$core$async$mult_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44194__auto____1;
return cljs$core$async$mult_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___45674,cs,m,dchan,dctr,done))
})();
var state__44309__auto__ = (function (){var statearr_45673 = f__44308__auto__.call(null);
(statearr_45673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___45674);

return statearr_45673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___45674,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args45731 = [];
var len__37108__auto___45734 = arguments.length;
var i__37109__auto___45735 = (0);
while(true){
if((i__37109__auto___45735 < len__37108__auto___45734)){
args45731.push((arguments[i__37109__auto___45735]));

var G__45736 = (i__37109__auto___45735 + (1));
i__37109__auto___45735 = G__45736;
continue;
} else {
}
break;
}

var G__45733 = args45731.length;
switch (G__45733) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45731.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m);
} else {
var m__36606__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,state_map);
} else {
var m__36606__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__36605__auto__ = (((m == null))?null:m);
var m__36606__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,m,mode);
} else {
var m__36606__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__37115__auto__ = [];
var len__37108__auto___45748 = arguments.length;
var i__37109__auto___45749 = (0);
while(true){
if((i__37109__auto___45749 < len__37108__auto___45748)){
args__37115__auto__.push((arguments[i__37109__auto___45749]));

var G__45750 = (i__37109__auto___45749 + (1));
i__37109__auto___45749 = G__45750;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((3) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37116__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45742){
var map__45743 = p__45742;
var map__45743__$1 = ((((!((map__45743 == null)))?((((map__45743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45743):map__45743);
var opts = map__45743__$1;
var statearr_45745_45751 = state;
(statearr_45745_45751[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__45743,map__45743__$1,opts){
return (function (val){
var statearr_45746_45752 = state;
(statearr_45746_45752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45743,map__45743__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_45747_45753 = state;
(statearr_45747_45753[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45738){
var G__45739 = cljs.core.first.call(null,seq45738);
var seq45738__$1 = cljs.core.next.call(null,seq45738);
var G__45740 = cljs.core.first.call(null,seq45738__$1);
var seq45738__$2 = cljs.core.next.call(null,seq45738__$1);
var G__45741 = cljs.core.first.call(null,seq45738__$2);
var seq45738__$3 = cljs.core.next.call(null,seq45738__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45739,G__45740,G__45741,seq45738__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async45921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45921 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45922){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45922 = meta45922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45923,meta45922__$1){
var self__ = this;
var _45923__$1 = this;
return (new cljs.core.async.t_cljs$core$async45921(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45922__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45923){
var self__ = this;
var _45923__$1 = this;
return self__.meta45922;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45922","meta45922",-1000323322,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45921";

cljs.core.async.t_cljs$core$async45921.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async45921");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45921 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45921(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45922){
return (new cljs.core.async.t_cljs$core$async45921(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45922));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45921(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44307__auto___46088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46025){
var state_val_46026 = (state_46025[(1)]);
if((state_val_46026 === (7))){
var inst_45940 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46027_46089 = state_46025__$1;
(statearr_46027_46089[(2)] = inst_45940);

(statearr_46027_46089[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (20))){
var inst_45952 = (state_46025[(7)]);
var state_46025__$1 = state_46025;
var statearr_46028_46090 = state_46025__$1;
(statearr_46028_46090[(2)] = inst_45952);

(statearr_46028_46090[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (27))){
var state_46025__$1 = state_46025;
var statearr_46029_46091 = state_46025__$1;
(statearr_46029_46091[(2)] = null);

(statearr_46029_46091[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (1))){
var inst_45927 = (state_46025[(8)]);
var inst_45927__$1 = calc_state.call(null);
var inst_45929 = (inst_45927__$1 == null);
var inst_45930 = cljs.core.not.call(null,inst_45929);
var state_46025__$1 = (function (){var statearr_46030 = state_46025;
(statearr_46030[(8)] = inst_45927__$1);

return statearr_46030;
})();
if(inst_45930){
var statearr_46031_46092 = state_46025__$1;
(statearr_46031_46092[(1)] = (2));

} else {
var statearr_46032_46093 = state_46025__$1;
(statearr_46032_46093[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (24))){
var inst_45985 = (state_46025[(9)]);
var inst_45976 = (state_46025[(10)]);
var inst_45999 = (state_46025[(11)]);
var inst_45999__$1 = inst_45976.call(null,inst_45985);
var state_46025__$1 = (function (){var statearr_46033 = state_46025;
(statearr_46033[(11)] = inst_45999__$1);

return statearr_46033;
})();
if(cljs.core.truth_(inst_45999__$1)){
var statearr_46034_46094 = state_46025__$1;
(statearr_46034_46094[(1)] = (29));

} else {
var statearr_46035_46095 = state_46025__$1;
(statearr_46035_46095[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (4))){
var inst_45943 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_45943)){
var statearr_46036_46096 = state_46025__$1;
(statearr_46036_46096[(1)] = (8));

} else {
var statearr_46037_46097 = state_46025__$1;
(statearr_46037_46097[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (15))){
var inst_45970 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_45970)){
var statearr_46038_46098 = state_46025__$1;
(statearr_46038_46098[(1)] = (19));

} else {
var statearr_46039_46099 = state_46025__$1;
(statearr_46039_46099[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (21))){
var inst_45975 = (state_46025[(12)]);
var inst_45975__$1 = (state_46025[(2)]);
var inst_45976 = cljs.core.get.call(null,inst_45975__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45977 = cljs.core.get.call(null,inst_45975__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45978 = cljs.core.get.call(null,inst_45975__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46025__$1 = (function (){var statearr_46040 = state_46025;
(statearr_46040[(13)] = inst_45977);

(statearr_46040[(10)] = inst_45976);

(statearr_46040[(12)] = inst_45975__$1);

return statearr_46040;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46025__$1,(22),inst_45978);
} else {
if((state_val_46026 === (31))){
var inst_46007 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_46007)){
var statearr_46041_46100 = state_46025__$1;
(statearr_46041_46100[(1)] = (32));

} else {
var statearr_46042_46101 = state_46025__$1;
(statearr_46042_46101[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (32))){
var inst_45984 = (state_46025[(14)]);
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46025__$1,(35),out,inst_45984);
} else {
if((state_val_46026 === (33))){
var inst_45975 = (state_46025[(12)]);
var inst_45952 = inst_45975;
var state_46025__$1 = (function (){var statearr_46043 = state_46025;
(statearr_46043[(7)] = inst_45952);

return statearr_46043;
})();
var statearr_46044_46102 = state_46025__$1;
(statearr_46044_46102[(2)] = null);

(statearr_46044_46102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (13))){
var inst_45952 = (state_46025[(7)]);
var inst_45959 = inst_45952.cljs$lang$protocol_mask$partition0$;
var inst_45960 = (inst_45959 & (64));
var inst_45961 = inst_45952.cljs$core$ISeq$;
var inst_45962 = (cljs.core.PROTOCOL_SENTINEL === inst_45961);
var inst_45963 = (inst_45960) || (inst_45962);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_45963)){
var statearr_46045_46103 = state_46025__$1;
(statearr_46045_46103[(1)] = (16));

} else {
var statearr_46046_46104 = state_46025__$1;
(statearr_46046_46104[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (22))){
var inst_45984 = (state_46025[(14)]);
var inst_45985 = (state_46025[(9)]);
var inst_45983 = (state_46025[(2)]);
var inst_45984__$1 = cljs.core.nth.call(null,inst_45983,(0),null);
var inst_45985__$1 = cljs.core.nth.call(null,inst_45983,(1),null);
var inst_45986 = (inst_45984__$1 == null);
var inst_45987 = cljs.core._EQ_.call(null,inst_45985__$1,change);
var inst_45988 = (inst_45986) || (inst_45987);
var state_46025__$1 = (function (){var statearr_46047 = state_46025;
(statearr_46047[(14)] = inst_45984__$1);

(statearr_46047[(9)] = inst_45985__$1);

return statearr_46047;
})();
if(cljs.core.truth_(inst_45988)){
var statearr_46048_46105 = state_46025__$1;
(statearr_46048_46105[(1)] = (23));

} else {
var statearr_46049_46106 = state_46025__$1;
(statearr_46049_46106[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (36))){
var inst_45975 = (state_46025[(12)]);
var inst_45952 = inst_45975;
var state_46025__$1 = (function (){var statearr_46050 = state_46025;
(statearr_46050[(7)] = inst_45952);

return statearr_46050;
})();
var statearr_46051_46107 = state_46025__$1;
(statearr_46051_46107[(2)] = null);

(statearr_46051_46107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (29))){
var inst_45999 = (state_46025[(11)]);
var state_46025__$1 = state_46025;
var statearr_46052_46108 = state_46025__$1;
(statearr_46052_46108[(2)] = inst_45999);

(statearr_46052_46108[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (6))){
var state_46025__$1 = state_46025;
var statearr_46053_46109 = state_46025__$1;
(statearr_46053_46109[(2)] = false);

(statearr_46053_46109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (28))){
var inst_45995 = (state_46025[(2)]);
var inst_45996 = calc_state.call(null);
var inst_45952 = inst_45996;
var state_46025__$1 = (function (){var statearr_46054 = state_46025;
(statearr_46054[(15)] = inst_45995);

(statearr_46054[(7)] = inst_45952);

return statearr_46054;
})();
var statearr_46055_46110 = state_46025__$1;
(statearr_46055_46110[(2)] = null);

(statearr_46055_46110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (25))){
var inst_46021 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46056_46111 = state_46025__$1;
(statearr_46056_46111[(2)] = inst_46021);

(statearr_46056_46111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (34))){
var inst_46019 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46057_46112 = state_46025__$1;
(statearr_46057_46112[(2)] = inst_46019);

(statearr_46057_46112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (17))){
var state_46025__$1 = state_46025;
var statearr_46058_46113 = state_46025__$1;
(statearr_46058_46113[(2)] = false);

(statearr_46058_46113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (3))){
var state_46025__$1 = state_46025;
var statearr_46059_46114 = state_46025__$1;
(statearr_46059_46114[(2)] = false);

(statearr_46059_46114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (12))){
var inst_46023 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46025__$1,inst_46023);
} else {
if((state_val_46026 === (2))){
var inst_45927 = (state_46025[(8)]);
var inst_45932 = inst_45927.cljs$lang$protocol_mask$partition0$;
var inst_45933 = (inst_45932 & (64));
var inst_45934 = inst_45927.cljs$core$ISeq$;
var inst_45935 = (cljs.core.PROTOCOL_SENTINEL === inst_45934);
var inst_45936 = (inst_45933) || (inst_45935);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_45936)){
var statearr_46060_46115 = state_46025__$1;
(statearr_46060_46115[(1)] = (5));

} else {
var statearr_46061_46116 = state_46025__$1;
(statearr_46061_46116[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (23))){
var inst_45984 = (state_46025[(14)]);
var inst_45990 = (inst_45984 == null);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_45990)){
var statearr_46062_46117 = state_46025__$1;
(statearr_46062_46117[(1)] = (26));

} else {
var statearr_46063_46118 = state_46025__$1;
(statearr_46063_46118[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (35))){
var inst_46010 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
if(cljs.core.truth_(inst_46010)){
var statearr_46064_46119 = state_46025__$1;
(statearr_46064_46119[(1)] = (36));

} else {
var statearr_46065_46120 = state_46025__$1;
(statearr_46065_46120[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (19))){
var inst_45952 = (state_46025[(7)]);
var inst_45972 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45952);
var state_46025__$1 = state_46025;
var statearr_46066_46121 = state_46025__$1;
(statearr_46066_46121[(2)] = inst_45972);

(statearr_46066_46121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (11))){
var inst_45952 = (state_46025[(7)]);
var inst_45956 = (inst_45952 == null);
var inst_45957 = cljs.core.not.call(null,inst_45956);
var state_46025__$1 = state_46025;
if(inst_45957){
var statearr_46067_46122 = state_46025__$1;
(statearr_46067_46122[(1)] = (13));

} else {
var statearr_46068_46123 = state_46025__$1;
(statearr_46068_46123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (9))){
var inst_45927 = (state_46025[(8)]);
var state_46025__$1 = state_46025;
var statearr_46069_46124 = state_46025__$1;
(statearr_46069_46124[(2)] = inst_45927);

(statearr_46069_46124[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (5))){
var state_46025__$1 = state_46025;
var statearr_46070_46125 = state_46025__$1;
(statearr_46070_46125[(2)] = true);

(statearr_46070_46125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (14))){
var state_46025__$1 = state_46025;
var statearr_46071_46126 = state_46025__$1;
(statearr_46071_46126[(2)] = false);

(statearr_46071_46126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (26))){
var inst_45985 = (state_46025[(9)]);
var inst_45992 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45985);
var state_46025__$1 = state_46025;
var statearr_46072_46127 = state_46025__$1;
(statearr_46072_46127[(2)] = inst_45992);

(statearr_46072_46127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (16))){
var state_46025__$1 = state_46025;
var statearr_46073_46128 = state_46025__$1;
(statearr_46073_46128[(2)] = true);

(statearr_46073_46128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (38))){
var inst_46015 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46074_46129 = state_46025__$1;
(statearr_46074_46129[(2)] = inst_46015);

(statearr_46074_46129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (30))){
var inst_45985 = (state_46025[(9)]);
var inst_45977 = (state_46025[(13)]);
var inst_45976 = (state_46025[(10)]);
var inst_46002 = cljs.core.empty_QMARK_.call(null,inst_45976);
var inst_46003 = inst_45977.call(null,inst_45985);
var inst_46004 = cljs.core.not.call(null,inst_46003);
var inst_46005 = (inst_46002) && (inst_46004);
var state_46025__$1 = state_46025;
var statearr_46075_46130 = state_46025__$1;
(statearr_46075_46130[(2)] = inst_46005);

(statearr_46075_46130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (10))){
var inst_45927 = (state_46025[(8)]);
var inst_45948 = (state_46025[(2)]);
var inst_45949 = cljs.core.get.call(null,inst_45948,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45950 = cljs.core.get.call(null,inst_45948,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45951 = cljs.core.get.call(null,inst_45948,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45952 = inst_45927;
var state_46025__$1 = (function (){var statearr_46076 = state_46025;
(statearr_46076[(16)] = inst_45951);

(statearr_46076[(17)] = inst_45950);

(statearr_46076[(7)] = inst_45952);

(statearr_46076[(18)] = inst_45949);

return statearr_46076;
})();
var statearr_46077_46131 = state_46025__$1;
(statearr_46077_46131[(2)] = null);

(statearr_46077_46131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (18))){
var inst_45967 = (state_46025[(2)]);
var state_46025__$1 = state_46025;
var statearr_46078_46132 = state_46025__$1;
(statearr_46078_46132[(2)] = inst_45967);

(statearr_46078_46132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (37))){
var state_46025__$1 = state_46025;
var statearr_46079_46133 = state_46025__$1;
(statearr_46079_46133[(2)] = null);

(statearr_46079_46133[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46026 === (8))){
var inst_45927 = (state_46025[(8)]);
var inst_45945 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45927);
var state_46025__$1 = state_46025;
var statearr_46080_46134 = state_46025__$1;
(statearr_46080_46134[(2)] = inst_45945);

(statearr_46080_46134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44193__auto__,c__44307__auto___46088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44194__auto__ = null;
var cljs$core$async$mix_$_state_machine__44194__auto____0 = (function (){
var statearr_46084 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46084[(0)] = cljs$core$async$mix_$_state_machine__44194__auto__);

(statearr_46084[(1)] = (1));

return statearr_46084;
});
var cljs$core$async$mix_$_state_machine__44194__auto____1 = (function (state_46025){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46085){if((e46085 instanceof Object)){
var ex__44197__auto__ = e46085;
var statearr_46086_46135 = state_46025;
(statearr_46086_46135[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46136 = state_46025;
state_46025 = G__46136;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44194__auto__ = function(state_46025){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44194__auto____1.call(this,state_46025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44194__auto____0;
cljs$core$async$mix_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44194__auto____1;
return cljs$core$async$mix_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44309__auto__ = (function (){var statearr_46087 = f__44308__auto__.call(null);
(statearr_46087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46088);

return statearr_46087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46088,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__36606__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p,v,ch);
} else {
var m__36606__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args46137 = [];
var len__37108__auto___46140 = arguments.length;
var i__37109__auto___46141 = (0);
while(true){
if((i__37109__auto___46141 < len__37108__auto___46140)){
args46137.push((arguments[i__37109__auto___46141]));

var G__46142 = (i__37109__auto___46141 + (1));
i__37109__auto___46141 = G__46142;
continue;
} else {
}
break;
}

var G__46139 = args46137.length;
switch (G__46139) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46137.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p);
} else {
var m__36606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__36605__auto__ = (((p == null))?null:p);
var m__36606__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__36605__auto__)]);
if(!((m__36606__auto__ == null))){
return m__36606__auto__.call(null,p,v);
} else {
var m__36606__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__36606__auto____$1 == null))){
return m__36606__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args46145 = [];
var len__37108__auto___46270 = arguments.length;
var i__37109__auto___46271 = (0);
while(true){
if((i__37109__auto___46271 < len__37108__auto___46270)){
args46145.push((arguments[i__37109__auto___46271]));

var G__46272 = (i__37109__auto___46271 + (1));
i__37109__auto___46271 = G__46272;
continue;
} else {
}
break;
}

var G__46147 = args46145.length;
switch (G__46147) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46145.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__35887__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__35887__auto__,mults){
return (function (p1__46144_SHARP_){
if(cljs.core.truth_(p1__46144_SHARP_.call(null,topic))){
return p1__46144_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46144_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35887__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46148 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46149){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46149 = meta46149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46150,meta46149__$1){
var self__ = this;
var _46150__$1 = this;
return (new cljs.core.async.t_cljs$core$async46148(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46149__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46150){
var self__ = this;
var _46150__$1 = this;
return self__.meta46149;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6753__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6753__auto__)){
var m = temp__6753__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46149","meta46149",-885274241,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46148";

cljs.core.async.t_cljs$core$async46148.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46148");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46148 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46148(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46149){
return (new cljs.core.async.t_cljs$core$async46148(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46149));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46148(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44307__auto___46274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46274,mults,ensure_mult,p){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46274,mults,ensure_mult,p){
return (function (state_46222){
var state_val_46223 = (state_46222[(1)]);
if((state_val_46223 === (7))){
var inst_46218 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46224_46275 = state_46222__$1;
(statearr_46224_46275[(2)] = inst_46218);

(statearr_46224_46275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (20))){
var state_46222__$1 = state_46222;
var statearr_46225_46276 = state_46222__$1;
(statearr_46225_46276[(2)] = null);

(statearr_46225_46276[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (1))){
var state_46222__$1 = state_46222;
var statearr_46226_46277 = state_46222__$1;
(statearr_46226_46277[(2)] = null);

(statearr_46226_46277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (24))){
var inst_46201 = (state_46222[(7)]);
var inst_46210 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46201);
var state_46222__$1 = state_46222;
var statearr_46227_46278 = state_46222__$1;
(statearr_46227_46278[(2)] = inst_46210);

(statearr_46227_46278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (4))){
var inst_46153 = (state_46222[(8)]);
var inst_46153__$1 = (state_46222[(2)]);
var inst_46154 = (inst_46153__$1 == null);
var state_46222__$1 = (function (){var statearr_46228 = state_46222;
(statearr_46228[(8)] = inst_46153__$1);

return statearr_46228;
})();
if(cljs.core.truth_(inst_46154)){
var statearr_46229_46279 = state_46222__$1;
(statearr_46229_46279[(1)] = (5));

} else {
var statearr_46230_46280 = state_46222__$1;
(statearr_46230_46280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (15))){
var inst_46195 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46231_46281 = state_46222__$1;
(statearr_46231_46281[(2)] = inst_46195);

(statearr_46231_46281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (21))){
var inst_46215 = (state_46222[(2)]);
var state_46222__$1 = (function (){var statearr_46232 = state_46222;
(statearr_46232[(9)] = inst_46215);

return statearr_46232;
})();
var statearr_46233_46282 = state_46222__$1;
(statearr_46233_46282[(2)] = null);

(statearr_46233_46282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (13))){
var inst_46177 = (state_46222[(10)]);
var inst_46179 = cljs.core.chunked_seq_QMARK_.call(null,inst_46177);
var state_46222__$1 = state_46222;
if(inst_46179){
var statearr_46234_46283 = state_46222__$1;
(statearr_46234_46283[(1)] = (16));

} else {
var statearr_46235_46284 = state_46222__$1;
(statearr_46235_46284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (22))){
var inst_46207 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
if(cljs.core.truth_(inst_46207)){
var statearr_46236_46285 = state_46222__$1;
(statearr_46236_46285[(1)] = (23));

} else {
var statearr_46237_46286 = state_46222__$1;
(statearr_46237_46286[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (6))){
var inst_46203 = (state_46222[(11)]);
var inst_46153 = (state_46222[(8)]);
var inst_46201 = (state_46222[(7)]);
var inst_46201__$1 = topic_fn.call(null,inst_46153);
var inst_46202 = cljs.core.deref.call(null,mults);
var inst_46203__$1 = cljs.core.get.call(null,inst_46202,inst_46201__$1);
var state_46222__$1 = (function (){var statearr_46238 = state_46222;
(statearr_46238[(11)] = inst_46203__$1);

(statearr_46238[(7)] = inst_46201__$1);

return statearr_46238;
})();
if(cljs.core.truth_(inst_46203__$1)){
var statearr_46239_46287 = state_46222__$1;
(statearr_46239_46287[(1)] = (19));

} else {
var statearr_46240_46288 = state_46222__$1;
(statearr_46240_46288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (25))){
var inst_46212 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46241_46289 = state_46222__$1;
(statearr_46241_46289[(2)] = inst_46212);

(statearr_46241_46289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (17))){
var inst_46177 = (state_46222[(10)]);
var inst_46186 = cljs.core.first.call(null,inst_46177);
var inst_46187 = cljs.core.async.muxch_STAR_.call(null,inst_46186);
var inst_46188 = cljs.core.async.close_BANG_.call(null,inst_46187);
var inst_46189 = cljs.core.next.call(null,inst_46177);
var inst_46163 = inst_46189;
var inst_46164 = null;
var inst_46165 = (0);
var inst_46166 = (0);
var state_46222__$1 = (function (){var statearr_46242 = state_46222;
(statearr_46242[(12)] = inst_46164);

(statearr_46242[(13)] = inst_46163);

(statearr_46242[(14)] = inst_46165);

(statearr_46242[(15)] = inst_46166);

(statearr_46242[(16)] = inst_46188);

return statearr_46242;
})();
var statearr_46243_46290 = state_46222__$1;
(statearr_46243_46290[(2)] = null);

(statearr_46243_46290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (3))){
var inst_46220 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46222__$1,inst_46220);
} else {
if((state_val_46223 === (12))){
var inst_46197 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46244_46291 = state_46222__$1;
(statearr_46244_46291[(2)] = inst_46197);

(statearr_46244_46291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (2))){
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46222__$1,(4),ch);
} else {
if((state_val_46223 === (23))){
var state_46222__$1 = state_46222;
var statearr_46245_46292 = state_46222__$1;
(statearr_46245_46292[(2)] = null);

(statearr_46245_46292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (19))){
var inst_46203 = (state_46222[(11)]);
var inst_46153 = (state_46222[(8)]);
var inst_46205 = cljs.core.async.muxch_STAR_.call(null,inst_46203);
var state_46222__$1 = state_46222;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46222__$1,(22),inst_46205,inst_46153);
} else {
if((state_val_46223 === (11))){
var inst_46177 = (state_46222[(10)]);
var inst_46163 = (state_46222[(13)]);
var inst_46177__$1 = cljs.core.seq.call(null,inst_46163);
var state_46222__$1 = (function (){var statearr_46246 = state_46222;
(statearr_46246[(10)] = inst_46177__$1);

return statearr_46246;
})();
if(inst_46177__$1){
var statearr_46247_46293 = state_46222__$1;
(statearr_46247_46293[(1)] = (13));

} else {
var statearr_46248_46294 = state_46222__$1;
(statearr_46248_46294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (9))){
var inst_46199 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46249_46295 = state_46222__$1;
(statearr_46249_46295[(2)] = inst_46199);

(statearr_46249_46295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (5))){
var inst_46160 = cljs.core.deref.call(null,mults);
var inst_46161 = cljs.core.vals.call(null,inst_46160);
var inst_46162 = cljs.core.seq.call(null,inst_46161);
var inst_46163 = inst_46162;
var inst_46164 = null;
var inst_46165 = (0);
var inst_46166 = (0);
var state_46222__$1 = (function (){var statearr_46250 = state_46222;
(statearr_46250[(12)] = inst_46164);

(statearr_46250[(13)] = inst_46163);

(statearr_46250[(14)] = inst_46165);

(statearr_46250[(15)] = inst_46166);

return statearr_46250;
})();
var statearr_46251_46296 = state_46222__$1;
(statearr_46251_46296[(2)] = null);

(statearr_46251_46296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (14))){
var state_46222__$1 = state_46222;
var statearr_46255_46297 = state_46222__$1;
(statearr_46255_46297[(2)] = null);

(statearr_46255_46297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (16))){
var inst_46177 = (state_46222[(10)]);
var inst_46181 = cljs.core.chunk_first.call(null,inst_46177);
var inst_46182 = cljs.core.chunk_rest.call(null,inst_46177);
var inst_46183 = cljs.core.count.call(null,inst_46181);
var inst_46163 = inst_46182;
var inst_46164 = inst_46181;
var inst_46165 = inst_46183;
var inst_46166 = (0);
var state_46222__$1 = (function (){var statearr_46256 = state_46222;
(statearr_46256[(12)] = inst_46164);

(statearr_46256[(13)] = inst_46163);

(statearr_46256[(14)] = inst_46165);

(statearr_46256[(15)] = inst_46166);

return statearr_46256;
})();
var statearr_46257_46298 = state_46222__$1;
(statearr_46257_46298[(2)] = null);

(statearr_46257_46298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (10))){
var inst_46164 = (state_46222[(12)]);
var inst_46163 = (state_46222[(13)]);
var inst_46165 = (state_46222[(14)]);
var inst_46166 = (state_46222[(15)]);
var inst_46171 = cljs.core._nth.call(null,inst_46164,inst_46166);
var inst_46172 = cljs.core.async.muxch_STAR_.call(null,inst_46171);
var inst_46173 = cljs.core.async.close_BANG_.call(null,inst_46172);
var inst_46174 = (inst_46166 + (1));
var tmp46252 = inst_46164;
var tmp46253 = inst_46163;
var tmp46254 = inst_46165;
var inst_46163__$1 = tmp46253;
var inst_46164__$1 = tmp46252;
var inst_46165__$1 = tmp46254;
var inst_46166__$1 = inst_46174;
var state_46222__$1 = (function (){var statearr_46258 = state_46222;
(statearr_46258[(12)] = inst_46164__$1);

(statearr_46258[(13)] = inst_46163__$1);

(statearr_46258[(14)] = inst_46165__$1);

(statearr_46258[(15)] = inst_46166__$1);

(statearr_46258[(17)] = inst_46173);

return statearr_46258;
})();
var statearr_46259_46299 = state_46222__$1;
(statearr_46259_46299[(2)] = null);

(statearr_46259_46299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (18))){
var inst_46192 = (state_46222[(2)]);
var state_46222__$1 = state_46222;
var statearr_46260_46300 = state_46222__$1;
(statearr_46260_46300[(2)] = inst_46192);

(statearr_46260_46300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46223 === (8))){
var inst_46165 = (state_46222[(14)]);
var inst_46166 = (state_46222[(15)]);
var inst_46168 = (inst_46166 < inst_46165);
var inst_46169 = inst_46168;
var state_46222__$1 = state_46222;
if(cljs.core.truth_(inst_46169)){
var statearr_46261_46301 = state_46222__$1;
(statearr_46261_46301[(1)] = (10));

} else {
var statearr_46262_46302 = state_46222__$1;
(statearr_46262_46302[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46274,mults,ensure_mult,p))
;
return ((function (switch__44193__auto__,c__44307__auto___46274,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_46266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46266[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_46266[(1)] = (1));

return statearr_46266;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_46222){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46222);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46267){if((e46267 instanceof Object)){
var ex__44197__auto__ = e46267;
var statearr_46268_46303 = state_46222;
(statearr_46268_46303[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46304 = state_46222;
state_46222 = G__46304;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_46222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_46222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46274,mults,ensure_mult,p))
})();
var state__44309__auto__ = (function (){var statearr_46269 = f__44308__auto__.call(null);
(statearr_46269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46274);

return statearr_46269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46274,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args46305 = [];
var len__37108__auto___46308 = arguments.length;
var i__37109__auto___46309 = (0);
while(true){
if((i__37109__auto___46309 < len__37108__auto___46308)){
args46305.push((arguments[i__37109__auto___46309]));

var G__46310 = (i__37109__auto___46309 + (1));
i__37109__auto___46309 = G__46310;
continue;
} else {
}
break;
}

var G__46307 = args46305.length;
switch (G__46307) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46305.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args46312 = [];
var len__37108__auto___46315 = arguments.length;
var i__37109__auto___46316 = (0);
while(true){
if((i__37109__auto___46316 < len__37108__auto___46315)){
args46312.push((arguments[i__37109__auto___46316]));

var G__46317 = (i__37109__auto___46316 + (1));
i__37109__auto___46316 = G__46317;
continue;
} else {
}
break;
}

var G__46314 = args46312.length;
switch (G__46314) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46312.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args46319 = [];
var len__37108__auto___46390 = arguments.length;
var i__37109__auto___46391 = (0);
while(true){
if((i__37109__auto___46391 < len__37108__auto___46390)){
args46319.push((arguments[i__37109__auto___46391]));

var G__46392 = (i__37109__auto___46391 + (1));
i__37109__auto___46391 = G__46392;
continue;
} else {
}
break;
}

var G__46321 = args46319.length;
switch (G__46321) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46319.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__44307__auto___46394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46360){
var state_val_46361 = (state_46360[(1)]);
if((state_val_46361 === (7))){
var state_46360__$1 = state_46360;
var statearr_46362_46395 = state_46360__$1;
(statearr_46362_46395[(2)] = null);

(statearr_46362_46395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (1))){
var state_46360__$1 = state_46360;
var statearr_46363_46396 = state_46360__$1;
(statearr_46363_46396[(2)] = null);

(statearr_46363_46396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (4))){
var inst_46324 = (state_46360[(7)]);
var inst_46326 = (inst_46324 < cnt);
var state_46360__$1 = state_46360;
if(cljs.core.truth_(inst_46326)){
var statearr_46364_46397 = state_46360__$1;
(statearr_46364_46397[(1)] = (6));

} else {
var statearr_46365_46398 = state_46360__$1;
(statearr_46365_46398[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (15))){
var inst_46356 = (state_46360[(2)]);
var state_46360__$1 = state_46360;
var statearr_46366_46399 = state_46360__$1;
(statearr_46366_46399[(2)] = inst_46356);

(statearr_46366_46399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (13))){
var inst_46349 = cljs.core.async.close_BANG_.call(null,out);
var state_46360__$1 = state_46360;
var statearr_46367_46400 = state_46360__$1;
(statearr_46367_46400[(2)] = inst_46349);

(statearr_46367_46400[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (6))){
var state_46360__$1 = state_46360;
var statearr_46368_46401 = state_46360__$1;
(statearr_46368_46401[(2)] = null);

(statearr_46368_46401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (3))){
var inst_46358 = (state_46360[(2)]);
var state_46360__$1 = state_46360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46360__$1,inst_46358);
} else {
if((state_val_46361 === (12))){
var inst_46346 = (state_46360[(8)]);
var inst_46346__$1 = (state_46360[(2)]);
var inst_46347 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46346__$1);
var state_46360__$1 = (function (){var statearr_46369 = state_46360;
(statearr_46369[(8)] = inst_46346__$1);

return statearr_46369;
})();
if(cljs.core.truth_(inst_46347)){
var statearr_46370_46402 = state_46360__$1;
(statearr_46370_46402[(1)] = (13));

} else {
var statearr_46371_46403 = state_46360__$1;
(statearr_46371_46403[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (2))){
var inst_46323 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46324 = (0);
var state_46360__$1 = (function (){var statearr_46372 = state_46360;
(statearr_46372[(9)] = inst_46323);

(statearr_46372[(7)] = inst_46324);

return statearr_46372;
})();
var statearr_46373_46404 = state_46360__$1;
(statearr_46373_46404[(2)] = null);

(statearr_46373_46404[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (11))){
var inst_46324 = (state_46360[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46360,(10),Object,null,(9));
var inst_46333 = chs__$1.call(null,inst_46324);
var inst_46334 = done.call(null,inst_46324);
var inst_46335 = cljs.core.async.take_BANG_.call(null,inst_46333,inst_46334);
var state_46360__$1 = state_46360;
var statearr_46374_46405 = state_46360__$1;
(statearr_46374_46405[(2)] = inst_46335);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (9))){
var inst_46324 = (state_46360[(7)]);
var inst_46337 = (state_46360[(2)]);
var inst_46338 = (inst_46324 + (1));
var inst_46324__$1 = inst_46338;
var state_46360__$1 = (function (){var statearr_46375 = state_46360;
(statearr_46375[(10)] = inst_46337);

(statearr_46375[(7)] = inst_46324__$1);

return statearr_46375;
})();
var statearr_46376_46406 = state_46360__$1;
(statearr_46376_46406[(2)] = null);

(statearr_46376_46406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (5))){
var inst_46344 = (state_46360[(2)]);
var state_46360__$1 = (function (){var statearr_46377 = state_46360;
(statearr_46377[(11)] = inst_46344);

return statearr_46377;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46360__$1,(12),dchan);
} else {
if((state_val_46361 === (14))){
var inst_46346 = (state_46360[(8)]);
var inst_46351 = cljs.core.apply.call(null,f,inst_46346);
var state_46360__$1 = state_46360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46360__$1,(16),out,inst_46351);
} else {
if((state_val_46361 === (16))){
var inst_46353 = (state_46360[(2)]);
var state_46360__$1 = (function (){var statearr_46378 = state_46360;
(statearr_46378[(12)] = inst_46353);

return statearr_46378;
})();
var statearr_46379_46407 = state_46360__$1;
(statearr_46379_46407[(2)] = null);

(statearr_46379_46407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (10))){
var inst_46328 = (state_46360[(2)]);
var inst_46329 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46360__$1 = (function (){var statearr_46380 = state_46360;
(statearr_46380[(13)] = inst_46328);

return statearr_46380;
})();
var statearr_46381_46408 = state_46360__$1;
(statearr_46381_46408[(2)] = inst_46329);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46360__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (8))){
var inst_46342 = (state_46360[(2)]);
var state_46360__$1 = state_46360;
var statearr_46382_46409 = state_46360__$1;
(statearr_46382_46409[(2)] = inst_46342);

(statearr_46382_46409[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46394,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44193__auto__,c__44307__auto___46394,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_46386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46386[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_46386[(1)] = (1));

return statearr_46386;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_46360){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46387){if((e46387 instanceof Object)){
var ex__44197__auto__ = e46387;
var statearr_46388_46410 = state_46360;
(statearr_46388_46410[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46411 = state_46360;
state_46360 = G__46411;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_46360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_46360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46394,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44309__auto__ = (function (){var statearr_46389 = f__44308__auto__.call(null);
(statearr_46389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46394);

return statearr_46389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46394,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args46413 = [];
var len__37108__auto___46471 = arguments.length;
var i__37109__auto___46472 = (0);
while(true){
if((i__37109__auto___46472 < len__37108__auto___46471)){
args46413.push((arguments[i__37109__auto___46472]));

var G__46473 = (i__37109__auto___46472 + (1));
i__37109__auto___46472 = G__46473;
continue;
} else {
}
break;
}

var G__46415 = args46413.length;
switch (G__46415) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46413.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44307__auto___46475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46475,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46475,out){
return (function (state_46447){
var state_val_46448 = (state_46447[(1)]);
if((state_val_46448 === (7))){
var inst_46426 = (state_46447[(7)]);
var inst_46427 = (state_46447[(8)]);
var inst_46426__$1 = (state_46447[(2)]);
var inst_46427__$1 = cljs.core.nth.call(null,inst_46426__$1,(0),null);
var inst_46428 = cljs.core.nth.call(null,inst_46426__$1,(1),null);
var inst_46429 = (inst_46427__$1 == null);
var state_46447__$1 = (function (){var statearr_46449 = state_46447;
(statearr_46449[(9)] = inst_46428);

(statearr_46449[(7)] = inst_46426__$1);

(statearr_46449[(8)] = inst_46427__$1);

return statearr_46449;
})();
if(cljs.core.truth_(inst_46429)){
var statearr_46450_46476 = state_46447__$1;
(statearr_46450_46476[(1)] = (8));

} else {
var statearr_46451_46477 = state_46447__$1;
(statearr_46451_46477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (1))){
var inst_46416 = cljs.core.vec.call(null,chs);
var inst_46417 = inst_46416;
var state_46447__$1 = (function (){var statearr_46452 = state_46447;
(statearr_46452[(10)] = inst_46417);

return statearr_46452;
})();
var statearr_46453_46478 = state_46447__$1;
(statearr_46453_46478[(2)] = null);

(statearr_46453_46478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (4))){
var inst_46417 = (state_46447[(10)]);
var state_46447__$1 = state_46447;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46447__$1,(7),inst_46417);
} else {
if((state_val_46448 === (6))){
var inst_46443 = (state_46447[(2)]);
var state_46447__$1 = state_46447;
var statearr_46454_46479 = state_46447__$1;
(statearr_46454_46479[(2)] = inst_46443);

(statearr_46454_46479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (3))){
var inst_46445 = (state_46447[(2)]);
var state_46447__$1 = state_46447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46447__$1,inst_46445);
} else {
if((state_val_46448 === (2))){
var inst_46417 = (state_46447[(10)]);
var inst_46419 = cljs.core.count.call(null,inst_46417);
var inst_46420 = (inst_46419 > (0));
var state_46447__$1 = state_46447;
if(cljs.core.truth_(inst_46420)){
var statearr_46456_46480 = state_46447__$1;
(statearr_46456_46480[(1)] = (4));

} else {
var statearr_46457_46481 = state_46447__$1;
(statearr_46457_46481[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (11))){
var inst_46417 = (state_46447[(10)]);
var inst_46436 = (state_46447[(2)]);
var tmp46455 = inst_46417;
var inst_46417__$1 = tmp46455;
var state_46447__$1 = (function (){var statearr_46458 = state_46447;
(statearr_46458[(11)] = inst_46436);

(statearr_46458[(10)] = inst_46417__$1);

return statearr_46458;
})();
var statearr_46459_46482 = state_46447__$1;
(statearr_46459_46482[(2)] = null);

(statearr_46459_46482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (9))){
var inst_46427 = (state_46447[(8)]);
var state_46447__$1 = state_46447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46447__$1,(11),out,inst_46427);
} else {
if((state_val_46448 === (5))){
var inst_46441 = cljs.core.async.close_BANG_.call(null,out);
var state_46447__$1 = state_46447;
var statearr_46460_46483 = state_46447__$1;
(statearr_46460_46483[(2)] = inst_46441);

(statearr_46460_46483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (10))){
var inst_46439 = (state_46447[(2)]);
var state_46447__$1 = state_46447;
var statearr_46461_46484 = state_46447__$1;
(statearr_46461_46484[(2)] = inst_46439);

(statearr_46461_46484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46448 === (8))){
var inst_46428 = (state_46447[(9)]);
var inst_46426 = (state_46447[(7)]);
var inst_46427 = (state_46447[(8)]);
var inst_46417 = (state_46447[(10)]);
var inst_46431 = (function (){var cs = inst_46417;
var vec__46422 = inst_46426;
var v = inst_46427;
var c = inst_46428;
return ((function (cs,vec__46422,v,c,inst_46428,inst_46426,inst_46427,inst_46417,state_val_46448,c__44307__auto___46475,out){
return (function (p1__46412_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46412_SHARP_);
});
;})(cs,vec__46422,v,c,inst_46428,inst_46426,inst_46427,inst_46417,state_val_46448,c__44307__auto___46475,out))
})();
var inst_46432 = cljs.core.filterv.call(null,inst_46431,inst_46417);
var inst_46417__$1 = inst_46432;
var state_46447__$1 = (function (){var statearr_46462 = state_46447;
(statearr_46462[(10)] = inst_46417__$1);

return statearr_46462;
})();
var statearr_46463_46485 = state_46447__$1;
(statearr_46463_46485[(2)] = null);

(statearr_46463_46485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46475,out))
;
return ((function (switch__44193__auto__,c__44307__auto___46475,out){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_46467 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46467[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_46467[(1)] = (1));

return statearr_46467;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_46447){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46468){if((e46468 instanceof Object)){
var ex__44197__auto__ = e46468;
var statearr_46469_46486 = state_46447;
(statearr_46469_46486[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46487 = state_46447;
state_46447 = G__46487;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_46447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_46447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46475,out))
})();
var state__44309__auto__ = (function (){var statearr_46470 = f__44308__auto__.call(null);
(statearr_46470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46475);

return statearr_46470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46475,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args46488 = [];
var len__37108__auto___46537 = arguments.length;
var i__37109__auto___46538 = (0);
while(true){
if((i__37109__auto___46538 < len__37108__auto___46537)){
args46488.push((arguments[i__37109__auto___46538]));

var G__46539 = (i__37109__auto___46538 + (1));
i__37109__auto___46538 = G__46539;
continue;
} else {
}
break;
}

var G__46490 = args46488.length;
switch (G__46490) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46488.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44307__auto___46541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46541,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46541,out){
return (function (state_46514){
var state_val_46515 = (state_46514[(1)]);
if((state_val_46515 === (7))){
var inst_46496 = (state_46514[(7)]);
var inst_46496__$1 = (state_46514[(2)]);
var inst_46497 = (inst_46496__$1 == null);
var inst_46498 = cljs.core.not.call(null,inst_46497);
var state_46514__$1 = (function (){var statearr_46516 = state_46514;
(statearr_46516[(7)] = inst_46496__$1);

return statearr_46516;
})();
if(inst_46498){
var statearr_46517_46542 = state_46514__$1;
(statearr_46517_46542[(1)] = (8));

} else {
var statearr_46518_46543 = state_46514__$1;
(statearr_46518_46543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (1))){
var inst_46491 = (0);
var state_46514__$1 = (function (){var statearr_46519 = state_46514;
(statearr_46519[(8)] = inst_46491);

return statearr_46519;
})();
var statearr_46520_46544 = state_46514__$1;
(statearr_46520_46544[(2)] = null);

(statearr_46520_46544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (4))){
var state_46514__$1 = state_46514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46514__$1,(7),ch);
} else {
if((state_val_46515 === (6))){
var inst_46509 = (state_46514[(2)]);
var state_46514__$1 = state_46514;
var statearr_46521_46545 = state_46514__$1;
(statearr_46521_46545[(2)] = inst_46509);

(statearr_46521_46545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (3))){
var inst_46511 = (state_46514[(2)]);
var inst_46512 = cljs.core.async.close_BANG_.call(null,out);
var state_46514__$1 = (function (){var statearr_46522 = state_46514;
(statearr_46522[(9)] = inst_46511);

return statearr_46522;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46514__$1,inst_46512);
} else {
if((state_val_46515 === (2))){
var inst_46491 = (state_46514[(8)]);
var inst_46493 = (inst_46491 < n);
var state_46514__$1 = state_46514;
if(cljs.core.truth_(inst_46493)){
var statearr_46523_46546 = state_46514__$1;
(statearr_46523_46546[(1)] = (4));

} else {
var statearr_46524_46547 = state_46514__$1;
(statearr_46524_46547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (11))){
var inst_46491 = (state_46514[(8)]);
var inst_46501 = (state_46514[(2)]);
var inst_46502 = (inst_46491 + (1));
var inst_46491__$1 = inst_46502;
var state_46514__$1 = (function (){var statearr_46525 = state_46514;
(statearr_46525[(8)] = inst_46491__$1);

(statearr_46525[(10)] = inst_46501);

return statearr_46525;
})();
var statearr_46526_46548 = state_46514__$1;
(statearr_46526_46548[(2)] = null);

(statearr_46526_46548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (9))){
var state_46514__$1 = state_46514;
var statearr_46527_46549 = state_46514__$1;
(statearr_46527_46549[(2)] = null);

(statearr_46527_46549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (5))){
var state_46514__$1 = state_46514;
var statearr_46528_46550 = state_46514__$1;
(statearr_46528_46550[(2)] = null);

(statearr_46528_46550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (10))){
var inst_46506 = (state_46514[(2)]);
var state_46514__$1 = state_46514;
var statearr_46529_46551 = state_46514__$1;
(statearr_46529_46551[(2)] = inst_46506);

(statearr_46529_46551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46515 === (8))){
var inst_46496 = (state_46514[(7)]);
var state_46514__$1 = state_46514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46514__$1,(11),out,inst_46496);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46541,out))
;
return ((function (switch__44193__auto__,c__44307__auto___46541,out){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_46533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46533[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_46533[(1)] = (1));

return statearr_46533;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_46514){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46534){if((e46534 instanceof Object)){
var ex__44197__auto__ = e46534;
var statearr_46535_46552 = state_46514;
(statearr_46535_46552[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46553 = state_46514;
state_46514 = G__46553;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_46514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_46514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46541,out))
})();
var state__44309__auto__ = (function (){var statearr_46536 = f__44308__auto__.call(null);
(statearr_46536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46541);

return statearr_46536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46541,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46561 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46561 = (function (f,ch,meta46562){
this.f = f;
this.ch = ch;
this.meta46562 = meta46562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46563,meta46562__$1){
var self__ = this;
var _46563__$1 = this;
return (new cljs.core.async.t_cljs$core$async46561(self__.f,self__.ch,meta46562__$1));
});

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46563){
var self__ = this;
var _46563__$1 = this;
return self__.meta46562;
});

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46564 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46564 = (function (f,ch,meta46562,_,fn1,meta46565){
this.f = f;
this.ch = ch;
this.meta46562 = meta46562;
this._ = _;
this.fn1 = fn1;
this.meta46565 = meta46565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46566,meta46565__$1){
var self__ = this;
var _46566__$1 = this;
return (new cljs.core.async.t_cljs$core$async46564(self__.f,self__.ch,self__.meta46562,self__._,self__.fn1,meta46565__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46566){
var self__ = this;
var _46566__$1 = this;
return self__.meta46565;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46564.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46554_SHARP_){
return f1.call(null,(((p1__46554_SHARP_ == null))?null:self__.f.call(null,p1__46554_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46564.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46562","meta46562",203892319,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46561","cljs.core.async/t_cljs$core$async46561",1107458277,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46565","meta46565",5302407,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46564.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46564";

cljs.core.async.t_cljs$core$async46564.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46564");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46564 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46564(f__$1,ch__$1,meta46562__$1,___$2,fn1__$1,meta46565){
return (new cljs.core.async.t_cljs$core$async46564(f__$1,ch__$1,meta46562__$1,___$2,fn1__$1,meta46565));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46564(self__.f,self__.ch,self__.meta46562,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__35875__auto__ = ret;
if(cljs.core.truth_(and__35875__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__35875__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46562","meta46562",203892319,null)], null);
});

cljs.core.async.t_cljs$core$async46561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46561";

cljs.core.async.t_cljs$core$async46561.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46561");
});

cljs.core.async.__GT_t_cljs$core$async46561 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46561(f__$1,ch__$1,meta46562){
return (new cljs.core.async.t_cljs$core$async46561(f__$1,ch__$1,meta46562));
});

}

return (new cljs.core.async.t_cljs$core$async46561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46570 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46570 = (function (f,ch,meta46571){
this.f = f;
this.ch = ch;
this.meta46571 = meta46571;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46572,meta46571__$1){
var self__ = this;
var _46572__$1 = this;
return (new cljs.core.async.t_cljs$core$async46570(self__.f,self__.ch,meta46571__$1));
});

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46572){
var self__ = this;
var _46572__$1 = this;
return self__.meta46571;
});

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46570.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46570.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46571","meta46571",-326820488,null)], null);
});

cljs.core.async.t_cljs$core$async46570.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46570.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46570";

cljs.core.async.t_cljs$core$async46570.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46570");
});

cljs.core.async.__GT_t_cljs$core$async46570 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46570(f__$1,ch__$1,meta46571){
return (new cljs.core.async.t_cljs$core$async46570(f__$1,ch__$1,meta46571));
});

}

return (new cljs.core.async.t_cljs$core$async46570(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46576 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46576 = (function (p,ch,meta46577){
this.p = p;
this.ch = ch;
this.meta46577 = meta46577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46578,meta46577__$1){
var self__ = this;
var _46578__$1 = this;
return (new cljs.core.async.t_cljs$core$async46576(self__.p,self__.ch,meta46577__$1));
});

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46578){
var self__ = this;
var _46578__$1 = this;
return self__.meta46577;
});

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46577","meta46577",1548434886,null)], null);
});

cljs.core.async.t_cljs$core$async46576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46576";

cljs.core.async.t_cljs$core$async46576.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46576");
});

cljs.core.async.__GT_t_cljs$core$async46576 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46576(p__$1,ch__$1,meta46577){
return (new cljs.core.async.t_cljs$core$async46576(p__$1,ch__$1,meta46577));
});

}

return (new cljs.core.async.t_cljs$core$async46576(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args46579 = [];
var len__37108__auto___46623 = arguments.length;
var i__37109__auto___46624 = (0);
while(true){
if((i__37109__auto___46624 < len__37108__auto___46623)){
args46579.push((arguments[i__37109__auto___46624]));

var G__46625 = (i__37109__auto___46624 + (1));
i__37109__auto___46624 = G__46625;
continue;
} else {
}
break;
}

var G__46581 = args46579.length;
switch (G__46581) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46579.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44307__auto___46627 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46627,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46627,out){
return (function (state_46602){
var state_val_46603 = (state_46602[(1)]);
if((state_val_46603 === (7))){
var inst_46598 = (state_46602[(2)]);
var state_46602__$1 = state_46602;
var statearr_46604_46628 = state_46602__$1;
(statearr_46604_46628[(2)] = inst_46598);

(statearr_46604_46628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (1))){
var state_46602__$1 = state_46602;
var statearr_46605_46629 = state_46602__$1;
(statearr_46605_46629[(2)] = null);

(statearr_46605_46629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (4))){
var inst_46584 = (state_46602[(7)]);
var inst_46584__$1 = (state_46602[(2)]);
var inst_46585 = (inst_46584__$1 == null);
var state_46602__$1 = (function (){var statearr_46606 = state_46602;
(statearr_46606[(7)] = inst_46584__$1);

return statearr_46606;
})();
if(cljs.core.truth_(inst_46585)){
var statearr_46607_46630 = state_46602__$1;
(statearr_46607_46630[(1)] = (5));

} else {
var statearr_46608_46631 = state_46602__$1;
(statearr_46608_46631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (6))){
var inst_46584 = (state_46602[(7)]);
var inst_46589 = p.call(null,inst_46584);
var state_46602__$1 = state_46602;
if(cljs.core.truth_(inst_46589)){
var statearr_46609_46632 = state_46602__$1;
(statearr_46609_46632[(1)] = (8));

} else {
var statearr_46610_46633 = state_46602__$1;
(statearr_46610_46633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (3))){
var inst_46600 = (state_46602[(2)]);
var state_46602__$1 = state_46602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46602__$1,inst_46600);
} else {
if((state_val_46603 === (2))){
var state_46602__$1 = state_46602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46602__$1,(4),ch);
} else {
if((state_val_46603 === (11))){
var inst_46592 = (state_46602[(2)]);
var state_46602__$1 = state_46602;
var statearr_46611_46634 = state_46602__$1;
(statearr_46611_46634[(2)] = inst_46592);

(statearr_46611_46634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (9))){
var state_46602__$1 = state_46602;
var statearr_46612_46635 = state_46602__$1;
(statearr_46612_46635[(2)] = null);

(statearr_46612_46635[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (5))){
var inst_46587 = cljs.core.async.close_BANG_.call(null,out);
var state_46602__$1 = state_46602;
var statearr_46613_46636 = state_46602__$1;
(statearr_46613_46636[(2)] = inst_46587);

(statearr_46613_46636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (10))){
var inst_46595 = (state_46602[(2)]);
var state_46602__$1 = (function (){var statearr_46614 = state_46602;
(statearr_46614[(8)] = inst_46595);

return statearr_46614;
})();
var statearr_46615_46637 = state_46602__$1;
(statearr_46615_46637[(2)] = null);

(statearr_46615_46637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46603 === (8))){
var inst_46584 = (state_46602[(7)]);
var state_46602__$1 = state_46602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46602__$1,(11),out,inst_46584);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46627,out))
;
return ((function (switch__44193__auto__,c__44307__auto___46627,out){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_46619 = [null,null,null,null,null,null,null,null,null];
(statearr_46619[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_46619[(1)] = (1));

return statearr_46619;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_46602){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46620){if((e46620 instanceof Object)){
var ex__44197__auto__ = e46620;
var statearr_46621_46638 = state_46602;
(statearr_46621_46638[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46639 = state_46602;
state_46602 = G__46639;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_46602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_46602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46627,out))
})();
var state__44309__auto__ = (function (){var statearr_46622 = f__44308__auto__.call(null);
(statearr_46622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46627);

return statearr_46622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46627,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46640 = [];
var len__37108__auto___46643 = arguments.length;
var i__37109__auto___46644 = (0);
while(true){
if((i__37109__auto___46644 < len__37108__auto___46643)){
args46640.push((arguments[i__37109__auto___46644]));

var G__46645 = (i__37109__auto___46644 + (1));
i__37109__auto___46644 = G__46645;
continue;
} else {
}
break;
}

var G__46642 = args46640.length;
switch (G__46642) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46640.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_46812){
var state_val_46813 = (state_46812[(1)]);
if((state_val_46813 === (7))){
var inst_46808 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46814_46855 = state_46812__$1;
(statearr_46814_46855[(2)] = inst_46808);

(statearr_46814_46855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (20))){
var inst_46778 = (state_46812[(7)]);
var inst_46789 = (state_46812[(2)]);
var inst_46790 = cljs.core.next.call(null,inst_46778);
var inst_46764 = inst_46790;
var inst_46765 = null;
var inst_46766 = (0);
var inst_46767 = (0);
var state_46812__$1 = (function (){var statearr_46815 = state_46812;
(statearr_46815[(8)] = inst_46766);

(statearr_46815[(9)] = inst_46767);

(statearr_46815[(10)] = inst_46764);

(statearr_46815[(11)] = inst_46789);

(statearr_46815[(12)] = inst_46765);

return statearr_46815;
})();
var statearr_46816_46856 = state_46812__$1;
(statearr_46816_46856[(2)] = null);

(statearr_46816_46856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (1))){
var state_46812__$1 = state_46812;
var statearr_46817_46857 = state_46812__$1;
(statearr_46817_46857[(2)] = null);

(statearr_46817_46857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (4))){
var inst_46753 = (state_46812[(13)]);
var inst_46753__$1 = (state_46812[(2)]);
var inst_46754 = (inst_46753__$1 == null);
var state_46812__$1 = (function (){var statearr_46818 = state_46812;
(statearr_46818[(13)] = inst_46753__$1);

return statearr_46818;
})();
if(cljs.core.truth_(inst_46754)){
var statearr_46819_46858 = state_46812__$1;
(statearr_46819_46858[(1)] = (5));

} else {
var statearr_46820_46859 = state_46812__$1;
(statearr_46820_46859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (15))){
var state_46812__$1 = state_46812;
var statearr_46824_46860 = state_46812__$1;
(statearr_46824_46860[(2)] = null);

(statearr_46824_46860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (21))){
var state_46812__$1 = state_46812;
var statearr_46825_46861 = state_46812__$1;
(statearr_46825_46861[(2)] = null);

(statearr_46825_46861[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (13))){
var inst_46766 = (state_46812[(8)]);
var inst_46767 = (state_46812[(9)]);
var inst_46764 = (state_46812[(10)]);
var inst_46765 = (state_46812[(12)]);
var inst_46774 = (state_46812[(2)]);
var inst_46775 = (inst_46767 + (1));
var tmp46821 = inst_46766;
var tmp46822 = inst_46764;
var tmp46823 = inst_46765;
var inst_46764__$1 = tmp46822;
var inst_46765__$1 = tmp46823;
var inst_46766__$1 = tmp46821;
var inst_46767__$1 = inst_46775;
var state_46812__$1 = (function (){var statearr_46826 = state_46812;
(statearr_46826[(8)] = inst_46766__$1);

(statearr_46826[(9)] = inst_46767__$1);

(statearr_46826[(10)] = inst_46764__$1);

(statearr_46826[(14)] = inst_46774);

(statearr_46826[(12)] = inst_46765__$1);

return statearr_46826;
})();
var statearr_46827_46862 = state_46812__$1;
(statearr_46827_46862[(2)] = null);

(statearr_46827_46862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (22))){
var state_46812__$1 = state_46812;
var statearr_46828_46863 = state_46812__$1;
(statearr_46828_46863[(2)] = null);

(statearr_46828_46863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (6))){
var inst_46753 = (state_46812[(13)]);
var inst_46762 = f.call(null,inst_46753);
var inst_46763 = cljs.core.seq.call(null,inst_46762);
var inst_46764 = inst_46763;
var inst_46765 = null;
var inst_46766 = (0);
var inst_46767 = (0);
var state_46812__$1 = (function (){var statearr_46829 = state_46812;
(statearr_46829[(8)] = inst_46766);

(statearr_46829[(9)] = inst_46767);

(statearr_46829[(10)] = inst_46764);

(statearr_46829[(12)] = inst_46765);

return statearr_46829;
})();
var statearr_46830_46864 = state_46812__$1;
(statearr_46830_46864[(2)] = null);

(statearr_46830_46864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (17))){
var inst_46778 = (state_46812[(7)]);
var inst_46782 = cljs.core.chunk_first.call(null,inst_46778);
var inst_46783 = cljs.core.chunk_rest.call(null,inst_46778);
var inst_46784 = cljs.core.count.call(null,inst_46782);
var inst_46764 = inst_46783;
var inst_46765 = inst_46782;
var inst_46766 = inst_46784;
var inst_46767 = (0);
var state_46812__$1 = (function (){var statearr_46831 = state_46812;
(statearr_46831[(8)] = inst_46766);

(statearr_46831[(9)] = inst_46767);

(statearr_46831[(10)] = inst_46764);

(statearr_46831[(12)] = inst_46765);

return statearr_46831;
})();
var statearr_46832_46865 = state_46812__$1;
(statearr_46832_46865[(2)] = null);

(statearr_46832_46865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (3))){
var inst_46810 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46812__$1,inst_46810);
} else {
if((state_val_46813 === (12))){
var inst_46798 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46833_46866 = state_46812__$1;
(statearr_46833_46866[(2)] = inst_46798);

(statearr_46833_46866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (2))){
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46812__$1,(4),in$);
} else {
if((state_val_46813 === (23))){
var inst_46806 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46834_46867 = state_46812__$1;
(statearr_46834_46867[(2)] = inst_46806);

(statearr_46834_46867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (19))){
var inst_46793 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46835_46868 = state_46812__$1;
(statearr_46835_46868[(2)] = inst_46793);

(statearr_46835_46868[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (11))){
var inst_46764 = (state_46812[(10)]);
var inst_46778 = (state_46812[(7)]);
var inst_46778__$1 = cljs.core.seq.call(null,inst_46764);
var state_46812__$1 = (function (){var statearr_46836 = state_46812;
(statearr_46836[(7)] = inst_46778__$1);

return statearr_46836;
})();
if(inst_46778__$1){
var statearr_46837_46869 = state_46812__$1;
(statearr_46837_46869[(1)] = (14));

} else {
var statearr_46838_46870 = state_46812__$1;
(statearr_46838_46870[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (9))){
var inst_46800 = (state_46812[(2)]);
var inst_46801 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46812__$1 = (function (){var statearr_46839 = state_46812;
(statearr_46839[(15)] = inst_46800);

return statearr_46839;
})();
if(cljs.core.truth_(inst_46801)){
var statearr_46840_46871 = state_46812__$1;
(statearr_46840_46871[(1)] = (21));

} else {
var statearr_46841_46872 = state_46812__$1;
(statearr_46841_46872[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (5))){
var inst_46756 = cljs.core.async.close_BANG_.call(null,out);
var state_46812__$1 = state_46812;
var statearr_46842_46873 = state_46812__$1;
(statearr_46842_46873[(2)] = inst_46756);

(statearr_46842_46873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (14))){
var inst_46778 = (state_46812[(7)]);
var inst_46780 = cljs.core.chunked_seq_QMARK_.call(null,inst_46778);
var state_46812__$1 = state_46812;
if(inst_46780){
var statearr_46843_46874 = state_46812__$1;
(statearr_46843_46874[(1)] = (17));

} else {
var statearr_46844_46875 = state_46812__$1;
(statearr_46844_46875[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (16))){
var inst_46796 = (state_46812[(2)]);
var state_46812__$1 = state_46812;
var statearr_46845_46876 = state_46812__$1;
(statearr_46845_46876[(2)] = inst_46796);

(statearr_46845_46876[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46813 === (10))){
var inst_46767 = (state_46812[(9)]);
var inst_46765 = (state_46812[(12)]);
var inst_46772 = cljs.core._nth.call(null,inst_46765,inst_46767);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46812__$1,(13),out,inst_46772);
} else {
if((state_val_46813 === (18))){
var inst_46778 = (state_46812[(7)]);
var inst_46787 = cljs.core.first.call(null,inst_46778);
var state_46812__$1 = state_46812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46812__$1,(20),out,inst_46787);
} else {
if((state_val_46813 === (8))){
var inst_46766 = (state_46812[(8)]);
var inst_46767 = (state_46812[(9)]);
var inst_46769 = (inst_46767 < inst_46766);
var inst_46770 = inst_46769;
var state_46812__$1 = state_46812;
if(cljs.core.truth_(inst_46770)){
var statearr_46846_46877 = state_46812__$1;
(statearr_46846_46877[(1)] = (10));

} else {
var statearr_46847_46878 = state_46812__$1;
(statearr_46847_46878[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44194__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44194__auto____0 = (function (){
var statearr_46851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46851[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44194__auto__);

(statearr_46851[(1)] = (1));

return statearr_46851;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44194__auto____1 = (function (state_46812){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46852){if((e46852 instanceof Object)){
var ex__44197__auto__ = e46852;
var statearr_46853_46879 = state_46812;
(statearr_46853_46879[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46880 = state_46812;
state_46812 = G__46880;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44194__auto__ = function(state_46812){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44194__auto____1.call(this,state_46812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44194__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44194__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_46854 = f__44308__auto__.call(null);
(statearr_46854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_46854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46881 = [];
var len__37108__auto___46884 = arguments.length;
var i__37109__auto___46885 = (0);
while(true){
if((i__37109__auto___46885 < len__37108__auto___46884)){
args46881.push((arguments[i__37109__auto___46885]));

var G__46886 = (i__37109__auto___46885 + (1));
i__37109__auto___46885 = G__46886;
continue;
} else {
}
break;
}

var G__46883 = args46881.length;
switch (G__46883) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46881.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args46888 = [];
var len__37108__auto___46891 = arguments.length;
var i__37109__auto___46892 = (0);
while(true){
if((i__37109__auto___46892 < len__37108__auto___46891)){
args46888.push((arguments[i__37109__auto___46892]));

var G__46893 = (i__37109__auto___46892 + (1));
i__37109__auto___46892 = G__46893;
continue;
} else {
}
break;
}

var G__46890 = args46888.length;
switch (G__46890) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46888.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args46895 = [];
var len__37108__auto___46946 = arguments.length;
var i__37109__auto___46947 = (0);
while(true){
if((i__37109__auto___46947 < len__37108__auto___46946)){
args46895.push((arguments[i__37109__auto___46947]));

var G__46948 = (i__37109__auto___46947 + (1));
i__37109__auto___46947 = G__46948;
continue;
} else {
}
break;
}

var G__46897 = args46895.length;
switch (G__46897) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46895.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44307__auto___46950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___46950,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___46950,out){
return (function (state_46921){
var state_val_46922 = (state_46921[(1)]);
if((state_val_46922 === (7))){
var inst_46916 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46923_46951 = state_46921__$1;
(statearr_46923_46951[(2)] = inst_46916);

(statearr_46923_46951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (1))){
var inst_46898 = null;
var state_46921__$1 = (function (){var statearr_46924 = state_46921;
(statearr_46924[(7)] = inst_46898);

return statearr_46924;
})();
var statearr_46925_46952 = state_46921__$1;
(statearr_46925_46952[(2)] = null);

(statearr_46925_46952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (4))){
var inst_46901 = (state_46921[(8)]);
var inst_46901__$1 = (state_46921[(2)]);
var inst_46902 = (inst_46901__$1 == null);
var inst_46903 = cljs.core.not.call(null,inst_46902);
var state_46921__$1 = (function (){var statearr_46926 = state_46921;
(statearr_46926[(8)] = inst_46901__$1);

return statearr_46926;
})();
if(inst_46903){
var statearr_46927_46953 = state_46921__$1;
(statearr_46927_46953[(1)] = (5));

} else {
var statearr_46928_46954 = state_46921__$1;
(statearr_46928_46954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (6))){
var state_46921__$1 = state_46921;
var statearr_46929_46955 = state_46921__$1;
(statearr_46929_46955[(2)] = null);

(statearr_46929_46955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (3))){
var inst_46918 = (state_46921[(2)]);
var inst_46919 = cljs.core.async.close_BANG_.call(null,out);
var state_46921__$1 = (function (){var statearr_46930 = state_46921;
(statearr_46930[(9)] = inst_46918);

return statearr_46930;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46921__$1,inst_46919);
} else {
if((state_val_46922 === (2))){
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46921__$1,(4),ch);
} else {
if((state_val_46922 === (11))){
var inst_46901 = (state_46921[(8)]);
var inst_46910 = (state_46921[(2)]);
var inst_46898 = inst_46901;
var state_46921__$1 = (function (){var statearr_46931 = state_46921;
(statearr_46931[(7)] = inst_46898);

(statearr_46931[(10)] = inst_46910);

return statearr_46931;
})();
var statearr_46932_46956 = state_46921__$1;
(statearr_46932_46956[(2)] = null);

(statearr_46932_46956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (9))){
var inst_46901 = (state_46921[(8)]);
var state_46921__$1 = state_46921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46921__$1,(11),out,inst_46901);
} else {
if((state_val_46922 === (5))){
var inst_46898 = (state_46921[(7)]);
var inst_46901 = (state_46921[(8)]);
var inst_46905 = cljs.core._EQ_.call(null,inst_46901,inst_46898);
var state_46921__$1 = state_46921;
if(inst_46905){
var statearr_46934_46957 = state_46921__$1;
(statearr_46934_46957[(1)] = (8));

} else {
var statearr_46935_46958 = state_46921__$1;
(statearr_46935_46958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (10))){
var inst_46913 = (state_46921[(2)]);
var state_46921__$1 = state_46921;
var statearr_46936_46959 = state_46921__$1;
(statearr_46936_46959[(2)] = inst_46913);

(statearr_46936_46959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46922 === (8))){
var inst_46898 = (state_46921[(7)]);
var tmp46933 = inst_46898;
var inst_46898__$1 = tmp46933;
var state_46921__$1 = (function (){var statearr_46937 = state_46921;
(statearr_46937[(7)] = inst_46898__$1);

return statearr_46937;
})();
var statearr_46938_46960 = state_46921__$1;
(statearr_46938_46960[(2)] = null);

(statearr_46938_46960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___46950,out))
;
return ((function (switch__44193__auto__,c__44307__auto___46950,out){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_46942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46942[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_46942[(1)] = (1));

return statearr_46942;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_46921){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_46921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e46943){if((e46943 instanceof Object)){
var ex__44197__auto__ = e46943;
var statearr_46944_46961 = state_46921;
(statearr_46944_46961[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46962 = state_46921;
state_46921 = G__46962;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_46921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_46921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___46950,out))
})();
var state__44309__auto__ = (function (){var statearr_46945 = f__44308__auto__.call(null);
(statearr_46945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___46950);

return statearr_46945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___46950,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46963 = [];
var len__37108__auto___47033 = arguments.length;
var i__37109__auto___47034 = (0);
while(true){
if((i__37109__auto___47034 < len__37108__auto___47033)){
args46963.push((arguments[i__37109__auto___47034]));

var G__47035 = (i__37109__auto___47034 + (1));
i__37109__auto___47034 = G__47035;
continue;
} else {
}
break;
}

var G__46965 = args46963.length;
switch (G__46965) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46963.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44307__auto___47037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___47037,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___47037,out){
return (function (state_47003){
var state_val_47004 = (state_47003[(1)]);
if((state_val_47004 === (7))){
var inst_46999 = (state_47003[(2)]);
var state_47003__$1 = state_47003;
var statearr_47005_47038 = state_47003__$1;
(statearr_47005_47038[(2)] = inst_46999);

(statearr_47005_47038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (1))){
var inst_46966 = (new Array(n));
var inst_46967 = inst_46966;
var inst_46968 = (0);
var state_47003__$1 = (function (){var statearr_47006 = state_47003;
(statearr_47006[(7)] = inst_46967);

(statearr_47006[(8)] = inst_46968);

return statearr_47006;
})();
var statearr_47007_47039 = state_47003__$1;
(statearr_47007_47039[(2)] = null);

(statearr_47007_47039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (4))){
var inst_46971 = (state_47003[(9)]);
var inst_46971__$1 = (state_47003[(2)]);
var inst_46972 = (inst_46971__$1 == null);
var inst_46973 = cljs.core.not.call(null,inst_46972);
var state_47003__$1 = (function (){var statearr_47008 = state_47003;
(statearr_47008[(9)] = inst_46971__$1);

return statearr_47008;
})();
if(inst_46973){
var statearr_47009_47040 = state_47003__$1;
(statearr_47009_47040[(1)] = (5));

} else {
var statearr_47010_47041 = state_47003__$1;
(statearr_47010_47041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (15))){
var inst_46993 = (state_47003[(2)]);
var state_47003__$1 = state_47003;
var statearr_47011_47042 = state_47003__$1;
(statearr_47011_47042[(2)] = inst_46993);

(statearr_47011_47042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (13))){
var state_47003__$1 = state_47003;
var statearr_47012_47043 = state_47003__$1;
(statearr_47012_47043[(2)] = null);

(statearr_47012_47043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (6))){
var inst_46968 = (state_47003[(8)]);
var inst_46989 = (inst_46968 > (0));
var state_47003__$1 = state_47003;
if(cljs.core.truth_(inst_46989)){
var statearr_47013_47044 = state_47003__$1;
(statearr_47013_47044[(1)] = (12));

} else {
var statearr_47014_47045 = state_47003__$1;
(statearr_47014_47045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (3))){
var inst_47001 = (state_47003[(2)]);
var state_47003__$1 = state_47003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47003__$1,inst_47001);
} else {
if((state_val_47004 === (12))){
var inst_46967 = (state_47003[(7)]);
var inst_46991 = cljs.core.vec.call(null,inst_46967);
var state_47003__$1 = state_47003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47003__$1,(15),out,inst_46991);
} else {
if((state_val_47004 === (2))){
var state_47003__$1 = state_47003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47003__$1,(4),ch);
} else {
if((state_val_47004 === (11))){
var inst_46983 = (state_47003[(2)]);
var inst_46984 = (new Array(n));
var inst_46967 = inst_46984;
var inst_46968 = (0);
var state_47003__$1 = (function (){var statearr_47015 = state_47003;
(statearr_47015[(7)] = inst_46967);

(statearr_47015[(8)] = inst_46968);

(statearr_47015[(10)] = inst_46983);

return statearr_47015;
})();
var statearr_47016_47046 = state_47003__$1;
(statearr_47016_47046[(2)] = null);

(statearr_47016_47046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (9))){
var inst_46967 = (state_47003[(7)]);
var inst_46981 = cljs.core.vec.call(null,inst_46967);
var state_47003__$1 = state_47003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47003__$1,(11),out,inst_46981);
} else {
if((state_val_47004 === (5))){
var inst_46971 = (state_47003[(9)]);
var inst_46976 = (state_47003[(11)]);
var inst_46967 = (state_47003[(7)]);
var inst_46968 = (state_47003[(8)]);
var inst_46975 = (inst_46967[inst_46968] = inst_46971);
var inst_46976__$1 = (inst_46968 + (1));
var inst_46977 = (inst_46976__$1 < n);
var state_47003__$1 = (function (){var statearr_47017 = state_47003;
(statearr_47017[(11)] = inst_46976__$1);

(statearr_47017[(12)] = inst_46975);

return statearr_47017;
})();
if(cljs.core.truth_(inst_46977)){
var statearr_47018_47047 = state_47003__$1;
(statearr_47018_47047[(1)] = (8));

} else {
var statearr_47019_47048 = state_47003__$1;
(statearr_47019_47048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (14))){
var inst_46996 = (state_47003[(2)]);
var inst_46997 = cljs.core.async.close_BANG_.call(null,out);
var state_47003__$1 = (function (){var statearr_47021 = state_47003;
(statearr_47021[(13)] = inst_46996);

return statearr_47021;
})();
var statearr_47022_47049 = state_47003__$1;
(statearr_47022_47049[(2)] = inst_46997);

(statearr_47022_47049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (10))){
var inst_46987 = (state_47003[(2)]);
var state_47003__$1 = state_47003;
var statearr_47023_47050 = state_47003__$1;
(statearr_47023_47050[(2)] = inst_46987);

(statearr_47023_47050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47004 === (8))){
var inst_46976 = (state_47003[(11)]);
var inst_46967 = (state_47003[(7)]);
var tmp47020 = inst_46967;
var inst_46967__$1 = tmp47020;
var inst_46968 = inst_46976;
var state_47003__$1 = (function (){var statearr_47024 = state_47003;
(statearr_47024[(7)] = inst_46967__$1);

(statearr_47024[(8)] = inst_46968);

return statearr_47024;
})();
var statearr_47025_47051 = state_47003__$1;
(statearr_47025_47051[(2)] = null);

(statearr_47025_47051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___47037,out))
;
return ((function (switch__44193__auto__,c__44307__auto___47037,out){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_47029 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47029[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_47029[(1)] = (1));

return statearr_47029;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_47003){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_47003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e47030){if((e47030 instanceof Object)){
var ex__44197__auto__ = e47030;
var statearr_47031_47052 = state_47003;
(statearr_47031_47052[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47053 = state_47003;
state_47003 = G__47053;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_47003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_47003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___47037,out))
})();
var state__44309__auto__ = (function (){var statearr_47032 = f__44308__auto__.call(null);
(statearr_47032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___47037);

return statearr_47032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___47037,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47054 = [];
var len__37108__auto___47128 = arguments.length;
var i__37109__auto___47129 = (0);
while(true){
if((i__37109__auto___47129 < len__37108__auto___47128)){
args47054.push((arguments[i__37109__auto___47129]));

var G__47130 = (i__37109__auto___47129 + (1));
i__37109__auto___47129 = G__47130;
continue;
} else {
}
break;
}

var G__47056 = args47054.length;
switch (G__47056) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47054.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44307__auto___47132 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___47132,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___47132,out){
return (function (state_47098){
var state_val_47099 = (state_47098[(1)]);
if((state_val_47099 === (7))){
var inst_47094 = (state_47098[(2)]);
var state_47098__$1 = state_47098;
var statearr_47100_47133 = state_47098__$1;
(statearr_47100_47133[(2)] = inst_47094);

(statearr_47100_47133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (1))){
var inst_47057 = [];
var inst_47058 = inst_47057;
var inst_47059 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47098__$1 = (function (){var statearr_47101 = state_47098;
(statearr_47101[(7)] = inst_47059);

(statearr_47101[(8)] = inst_47058);

return statearr_47101;
})();
var statearr_47102_47134 = state_47098__$1;
(statearr_47102_47134[(2)] = null);

(statearr_47102_47134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (4))){
var inst_47062 = (state_47098[(9)]);
var inst_47062__$1 = (state_47098[(2)]);
var inst_47063 = (inst_47062__$1 == null);
var inst_47064 = cljs.core.not.call(null,inst_47063);
var state_47098__$1 = (function (){var statearr_47103 = state_47098;
(statearr_47103[(9)] = inst_47062__$1);

return statearr_47103;
})();
if(inst_47064){
var statearr_47104_47135 = state_47098__$1;
(statearr_47104_47135[(1)] = (5));

} else {
var statearr_47105_47136 = state_47098__$1;
(statearr_47105_47136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (15))){
var inst_47088 = (state_47098[(2)]);
var state_47098__$1 = state_47098;
var statearr_47106_47137 = state_47098__$1;
(statearr_47106_47137[(2)] = inst_47088);

(statearr_47106_47137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (13))){
var state_47098__$1 = state_47098;
var statearr_47107_47138 = state_47098__$1;
(statearr_47107_47138[(2)] = null);

(statearr_47107_47138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (6))){
var inst_47058 = (state_47098[(8)]);
var inst_47083 = inst_47058.length;
var inst_47084 = (inst_47083 > (0));
var state_47098__$1 = state_47098;
if(cljs.core.truth_(inst_47084)){
var statearr_47108_47139 = state_47098__$1;
(statearr_47108_47139[(1)] = (12));

} else {
var statearr_47109_47140 = state_47098__$1;
(statearr_47109_47140[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (3))){
var inst_47096 = (state_47098[(2)]);
var state_47098__$1 = state_47098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47098__$1,inst_47096);
} else {
if((state_val_47099 === (12))){
var inst_47058 = (state_47098[(8)]);
var inst_47086 = cljs.core.vec.call(null,inst_47058);
var state_47098__$1 = state_47098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47098__$1,(15),out,inst_47086);
} else {
if((state_val_47099 === (2))){
var state_47098__$1 = state_47098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47098__$1,(4),ch);
} else {
if((state_val_47099 === (11))){
var inst_47062 = (state_47098[(9)]);
var inst_47066 = (state_47098[(10)]);
var inst_47076 = (state_47098[(2)]);
var inst_47077 = [];
var inst_47078 = inst_47077.push(inst_47062);
var inst_47058 = inst_47077;
var inst_47059 = inst_47066;
var state_47098__$1 = (function (){var statearr_47110 = state_47098;
(statearr_47110[(7)] = inst_47059);

(statearr_47110[(8)] = inst_47058);

(statearr_47110[(11)] = inst_47076);

(statearr_47110[(12)] = inst_47078);

return statearr_47110;
})();
var statearr_47111_47141 = state_47098__$1;
(statearr_47111_47141[(2)] = null);

(statearr_47111_47141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (9))){
var inst_47058 = (state_47098[(8)]);
var inst_47074 = cljs.core.vec.call(null,inst_47058);
var state_47098__$1 = state_47098;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47098__$1,(11),out,inst_47074);
} else {
if((state_val_47099 === (5))){
var inst_47062 = (state_47098[(9)]);
var inst_47059 = (state_47098[(7)]);
var inst_47066 = (state_47098[(10)]);
var inst_47066__$1 = f.call(null,inst_47062);
var inst_47067 = cljs.core._EQ_.call(null,inst_47066__$1,inst_47059);
var inst_47068 = cljs.core.keyword_identical_QMARK_.call(null,inst_47059,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47069 = (inst_47067) || (inst_47068);
var state_47098__$1 = (function (){var statearr_47112 = state_47098;
(statearr_47112[(10)] = inst_47066__$1);

return statearr_47112;
})();
if(cljs.core.truth_(inst_47069)){
var statearr_47113_47142 = state_47098__$1;
(statearr_47113_47142[(1)] = (8));

} else {
var statearr_47114_47143 = state_47098__$1;
(statearr_47114_47143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (14))){
var inst_47091 = (state_47098[(2)]);
var inst_47092 = cljs.core.async.close_BANG_.call(null,out);
var state_47098__$1 = (function (){var statearr_47116 = state_47098;
(statearr_47116[(13)] = inst_47091);

return statearr_47116;
})();
var statearr_47117_47144 = state_47098__$1;
(statearr_47117_47144[(2)] = inst_47092);

(statearr_47117_47144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (10))){
var inst_47081 = (state_47098[(2)]);
var state_47098__$1 = state_47098;
var statearr_47118_47145 = state_47098__$1;
(statearr_47118_47145[(2)] = inst_47081);

(statearr_47118_47145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47099 === (8))){
var inst_47062 = (state_47098[(9)]);
var inst_47058 = (state_47098[(8)]);
var inst_47066 = (state_47098[(10)]);
var inst_47071 = inst_47058.push(inst_47062);
var tmp47115 = inst_47058;
var inst_47058__$1 = tmp47115;
var inst_47059 = inst_47066;
var state_47098__$1 = (function (){var statearr_47119 = state_47098;
(statearr_47119[(7)] = inst_47059);

(statearr_47119[(8)] = inst_47058__$1);

(statearr_47119[(14)] = inst_47071);

return statearr_47119;
})();
var statearr_47120_47146 = state_47098__$1;
(statearr_47120_47146[(2)] = null);

(statearr_47120_47146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__44307__auto___47132,out))
;
return ((function (switch__44193__auto__,c__44307__auto___47132,out){
return (function() {
var cljs$core$async$state_machine__44194__auto__ = null;
var cljs$core$async$state_machine__44194__auto____0 = (function (){
var statearr_47124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47124[(0)] = cljs$core$async$state_machine__44194__auto__);

(statearr_47124[(1)] = (1));

return statearr_47124;
});
var cljs$core$async$state_machine__44194__auto____1 = (function (state_47098){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_47098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e47125){if((e47125 instanceof Object)){
var ex__44197__auto__ = e47125;
var statearr_47126_47147 = state_47098;
(statearr_47126_47147[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47098);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47148 = state_47098;
state_47098 = G__47148;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
cljs$core$async$state_machine__44194__auto__ = function(state_47098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44194__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44194__auto____1.call(this,state_47098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44194__auto____0;
cljs$core$async$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44194__auto____1;
return cljs$core$async$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___47132,out))
})();
var state__44309__auto__ = (function (){var statearr_47127 = f__44308__auto__.call(null);
(statearr_47127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___47132);

return statearr_47127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___47132,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1509941615542