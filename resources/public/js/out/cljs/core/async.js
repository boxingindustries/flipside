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
var args44390 = [];
var len__37108__auto___44396 = arguments.length;
var i__37109__auto___44397 = (0);
while(true){
if((i__37109__auto___44397 < len__37108__auto___44396)){
args44390.push((arguments[i__37109__auto___44397]));

var G__44398 = (i__37109__auto___44397 + (1));
i__37109__auto___44397 = G__44398;
continue;
} else {
}
break;
}

var G__44392 = args44390.length;
switch (G__44392) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44390.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async44393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44393 = (function (f,blockable,meta44394){
this.f = f;
this.blockable = blockable;
this.meta44394 = meta44394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44395,meta44394__$1){
var self__ = this;
var _44395__$1 = this;
return (new cljs.core.async.t_cljs$core$async44393(self__.f,self__.blockable,meta44394__$1));
});

cljs.core.async.t_cljs$core$async44393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44395){
var self__ = this;
var _44395__$1 = this;
return self__.meta44394;
});

cljs.core.async.t_cljs$core$async44393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44394","meta44394",-1253264525,null)], null);
});

cljs.core.async.t_cljs$core$async44393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44393";

cljs.core.async.t_cljs$core$async44393.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async44393");
});

cljs.core.async.__GT_t_cljs$core$async44393 = (function cljs$core$async$__GT_t_cljs$core$async44393(f__$1,blockable__$1,meta44394){
return (new cljs.core.async.t_cljs$core$async44393(f__$1,blockable__$1,meta44394));
});

}

return (new cljs.core.async.t_cljs$core$async44393(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args44402 = [];
var len__37108__auto___44405 = arguments.length;
var i__37109__auto___44406 = (0);
while(true){
if((i__37109__auto___44406 < len__37108__auto___44405)){
args44402.push((arguments[i__37109__auto___44406]));

var G__44407 = (i__37109__auto___44406 + (1));
i__37109__auto___44406 = G__44407;
continue;
} else {
}
break;
}

var G__44404 = args44402.length;
switch (G__44404) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44402.length)].join('')));

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
var args44409 = [];
var len__37108__auto___44412 = arguments.length;
var i__37109__auto___44413 = (0);
while(true){
if((i__37109__auto___44413 < len__37108__auto___44412)){
args44409.push((arguments[i__37109__auto___44413]));

var G__44414 = (i__37109__auto___44413 + (1));
i__37109__auto___44413 = G__44414;
continue;
} else {
}
break;
}

var G__44411 = args44409.length;
switch (G__44411) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44409.length)].join('')));

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
var args44416 = [];
var len__37108__auto___44419 = arguments.length;
var i__37109__auto___44420 = (0);
while(true){
if((i__37109__auto___44420 < len__37108__auto___44419)){
args44416.push((arguments[i__37109__auto___44420]));

var G__44421 = (i__37109__auto___44420 + (1));
i__37109__auto___44420 = G__44421;
continue;
} else {
}
break;
}

var G__44418 = args44416.length;
switch (G__44418) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44416.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44423 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44423);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44423,ret){
return (function (){
return fn1.call(null,val_44423);
});})(val_44423,ret))
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
var args44424 = [];
var len__37108__auto___44427 = arguments.length;
var i__37109__auto___44428 = (0);
while(true){
if((i__37109__auto___44428 < len__37108__auto___44427)){
args44424.push((arguments[i__37109__auto___44428]));

var G__44429 = (i__37109__auto___44428 + (1));
i__37109__auto___44428 = G__44429;
continue;
} else {
}
break;
}

var G__44426 = args44424.length;
switch (G__44426) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44424.length)].join('')));

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
var n__36908__auto___44431 = n;
var x_44432 = (0);
while(true){
if((x_44432 < n__36908__auto___44431)){
(a[x_44432] = (0));

var G__44433 = (x_44432 + (1));
x_44432 = G__44433;
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

var G__44434 = (i + (1));
i = G__44434;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async44438 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44438 = (function (flag,meta44439){
this.flag = flag;
this.meta44439 = meta44439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44440,meta44439__$1){
var self__ = this;
var _44440__$1 = this;
return (new cljs.core.async.t_cljs$core$async44438(self__.flag,meta44439__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44440){
var self__ = this;
var _44440__$1 = this;
return self__.meta44439;
});})(flag))
;

cljs.core.async.t_cljs$core$async44438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44438.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44439","meta44439",-1187770426,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44438.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44438";

cljs.core.async.t_cljs$core$async44438.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async44438");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async44438 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44438(flag__$1,meta44439){
return (new cljs.core.async.t_cljs$core$async44438(flag__$1,meta44439));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44438(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async44444 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44444 = (function (flag,cb,meta44445){
this.flag = flag;
this.cb = cb;
this.meta44445 = meta44445;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async44444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44446,meta44445__$1){
var self__ = this;
var _44446__$1 = this;
return (new cljs.core.async.t_cljs$core$async44444(self__.flag,self__.cb,meta44445__$1));
});

cljs.core.async.t_cljs$core$async44444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44446){
var self__ = this;
var _44446__$1 = this;
return self__.meta44445;
});

cljs.core.async.t_cljs$core$async44444.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44444.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44444.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44444.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44444.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44445","meta44445",1552495723,null)], null);
});

cljs.core.async.t_cljs$core$async44444.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44444.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44444";

cljs.core.async.t_cljs$core$async44444.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async44444");
});

cljs.core.async.__GT_t_cljs$core$async44444 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44444(flag__$1,cb__$1,meta44445){
return (new cljs.core.async.t_cljs$core$async44444(flag__$1,cb__$1,meta44445));
});

}

return (new cljs.core.async.t_cljs$core$async44444(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44447_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44447_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44448_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44448_SHARP_,port], null));
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
var G__44449 = (i + (1));
i = G__44449;
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
var len__37108__auto___44455 = arguments.length;
var i__37109__auto___44456 = (0);
while(true){
if((i__37109__auto___44456 < len__37108__auto___44455)){
args__37115__auto__.push((arguments[i__37109__auto___44456]));

var G__44457 = (i__37109__auto___44456 + (1));
i__37109__auto___44456 = G__44457;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((1) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__37116__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44452){
var map__44453 = p__44452;
var map__44453__$1 = ((((!((map__44453 == null)))?((((map__44453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44453.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44453):map__44453);
var opts = map__44453__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44450){
var G__44451 = cljs.core.first.call(null,seq44450);
var seq44450__$1 = cljs.core.next.call(null,seq44450);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__44451,seq44450__$1);
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
var args44458 = [];
var len__37108__auto___44508 = arguments.length;
var i__37109__auto___44509 = (0);
while(true){
if((i__37109__auto___44509 < len__37108__auto___44508)){
args44458.push((arguments[i__37109__auto___44509]));

var G__44510 = (i__37109__auto___44509 + (1));
i__37109__auto___44509 = G__44510;
continue;
} else {
}
break;
}

var G__44460 = args44458.length;
switch (G__44460) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44458.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44331__auto___44512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___44512){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___44512){
return (function (state_44484){
var state_val_44485 = (state_44484[(1)]);
if((state_val_44485 === (7))){
var inst_44480 = (state_44484[(2)]);
var state_44484__$1 = state_44484;
var statearr_44486_44513 = state_44484__$1;
(statearr_44486_44513[(2)] = inst_44480);

(statearr_44486_44513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (1))){
var state_44484__$1 = state_44484;
var statearr_44487_44514 = state_44484__$1;
(statearr_44487_44514[(2)] = null);

(statearr_44487_44514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (4))){
var inst_44463 = (state_44484[(7)]);
var inst_44463__$1 = (state_44484[(2)]);
var inst_44464 = (inst_44463__$1 == null);
var state_44484__$1 = (function (){var statearr_44488 = state_44484;
(statearr_44488[(7)] = inst_44463__$1);

return statearr_44488;
})();
if(cljs.core.truth_(inst_44464)){
var statearr_44489_44515 = state_44484__$1;
(statearr_44489_44515[(1)] = (5));

} else {
var statearr_44490_44516 = state_44484__$1;
(statearr_44490_44516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (13))){
var state_44484__$1 = state_44484;
var statearr_44491_44517 = state_44484__$1;
(statearr_44491_44517[(2)] = null);

(statearr_44491_44517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (6))){
var inst_44463 = (state_44484[(7)]);
var state_44484__$1 = state_44484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44484__$1,(11),to,inst_44463);
} else {
if((state_val_44485 === (3))){
var inst_44482 = (state_44484[(2)]);
var state_44484__$1 = state_44484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44484__$1,inst_44482);
} else {
if((state_val_44485 === (12))){
var state_44484__$1 = state_44484;
var statearr_44492_44518 = state_44484__$1;
(statearr_44492_44518[(2)] = null);

(statearr_44492_44518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (2))){
var state_44484__$1 = state_44484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44484__$1,(4),from);
} else {
if((state_val_44485 === (11))){
var inst_44473 = (state_44484[(2)]);
var state_44484__$1 = state_44484;
if(cljs.core.truth_(inst_44473)){
var statearr_44493_44519 = state_44484__$1;
(statearr_44493_44519[(1)] = (12));

} else {
var statearr_44494_44520 = state_44484__$1;
(statearr_44494_44520[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (9))){
var state_44484__$1 = state_44484;
var statearr_44495_44521 = state_44484__$1;
(statearr_44495_44521[(2)] = null);

(statearr_44495_44521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (5))){
var state_44484__$1 = state_44484;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44496_44522 = state_44484__$1;
(statearr_44496_44522[(1)] = (8));

} else {
var statearr_44497_44523 = state_44484__$1;
(statearr_44497_44523[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (14))){
var inst_44478 = (state_44484[(2)]);
var state_44484__$1 = state_44484;
var statearr_44498_44524 = state_44484__$1;
(statearr_44498_44524[(2)] = inst_44478);

(statearr_44498_44524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (10))){
var inst_44470 = (state_44484[(2)]);
var state_44484__$1 = state_44484;
var statearr_44499_44525 = state_44484__$1;
(statearr_44499_44525[(2)] = inst_44470);

(statearr_44499_44525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44485 === (8))){
var inst_44467 = cljs.core.async.close_BANG_.call(null,to);
var state_44484__$1 = state_44484;
var statearr_44500_44526 = state_44484__$1;
(statearr_44500_44526[(2)] = inst_44467);

(statearr_44500_44526[(1)] = (10));


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
});})(c__44331__auto___44512))
;
return ((function (switch__44217__auto__,c__44331__auto___44512){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_44504 = [null,null,null,null,null,null,null,null];
(statearr_44504[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_44504[(1)] = (1));

return statearr_44504;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_44484){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_44484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e44505){if((e44505 instanceof Object)){
var ex__44221__auto__ = e44505;
var statearr_44506_44527 = state_44484;
(statearr_44506_44527[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44528 = state_44484;
state_44484 = G__44528;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_44484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_44484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___44512))
})();
var state__44333__auto__ = (function (){var statearr_44507 = f__44332__auto__.call(null);
(statearr_44507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___44512);

return statearr_44507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___44512))
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
return (function (p__44716){
var vec__44717 = p__44716;
var v = cljs.core.nth.call(null,vec__44717,(0),null);
var p = cljs.core.nth.call(null,vec__44717,(1),null);
var job = vec__44717;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__44331__auto___44903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___44903,res,vec__44717,v,p,job,jobs,results){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___44903,res,vec__44717,v,p,job,jobs,results){
return (function (state_44724){
var state_val_44725 = (state_44724[(1)]);
if((state_val_44725 === (1))){
var state_44724__$1 = state_44724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44724__$1,(2),res,v);
} else {
if((state_val_44725 === (2))){
var inst_44721 = (state_44724[(2)]);
var inst_44722 = cljs.core.async.close_BANG_.call(null,res);
var state_44724__$1 = (function (){var statearr_44726 = state_44724;
(statearr_44726[(7)] = inst_44721);

return statearr_44726;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44724__$1,inst_44722);
} else {
return null;
}
}
});})(c__44331__auto___44903,res,vec__44717,v,p,job,jobs,results))
;
return ((function (switch__44217__auto__,c__44331__auto___44903,res,vec__44717,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0 = (function (){
var statearr_44730 = [null,null,null,null,null,null,null,null];
(statearr_44730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__);

(statearr_44730[(1)] = (1));

return statearr_44730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1 = (function (state_44724){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_44724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e44731){if((e44731 instanceof Object)){
var ex__44221__auto__ = e44731;
var statearr_44732_44904 = state_44724;
(statearr_44732_44904[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44905 = state_44724;
state_44724 = G__44905;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = function(state_44724){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1.call(this,state_44724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___44903,res,vec__44717,v,p,job,jobs,results))
})();
var state__44333__auto__ = (function (){var statearr_44733 = f__44332__auto__.call(null);
(statearr_44733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___44903);

return statearr_44733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___44903,res,vec__44717,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44734){
var vec__44735 = p__44734;
var v = cljs.core.nth.call(null,vec__44735,(0),null);
var p = cljs.core.nth.call(null,vec__44735,(1),null);
var job = vec__44735;
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
var n__36908__auto___44906 = n;
var __44907 = (0);
while(true){
if((__44907 < n__36908__auto___44906)){
var G__44738_44908 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__44738_44908) {
case "compute":
var c__44331__auto___44910 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44907,c__44331__auto___44910,G__44738_44908,n__36908__auto___44906,jobs,results,process,async){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (__44907,c__44331__auto___44910,G__44738_44908,n__36908__auto___44906,jobs,results,process,async){
return (function (state_44751){
var state_val_44752 = (state_44751[(1)]);
if((state_val_44752 === (1))){
var state_44751__$1 = state_44751;
var statearr_44753_44911 = state_44751__$1;
(statearr_44753_44911[(2)] = null);

(statearr_44753_44911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44752 === (2))){
var state_44751__$1 = state_44751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44751__$1,(4),jobs);
} else {
if((state_val_44752 === (3))){
var inst_44749 = (state_44751[(2)]);
var state_44751__$1 = state_44751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44751__$1,inst_44749);
} else {
if((state_val_44752 === (4))){
var inst_44741 = (state_44751[(2)]);
var inst_44742 = process.call(null,inst_44741);
var state_44751__$1 = state_44751;
if(cljs.core.truth_(inst_44742)){
var statearr_44754_44912 = state_44751__$1;
(statearr_44754_44912[(1)] = (5));

} else {
var statearr_44755_44913 = state_44751__$1;
(statearr_44755_44913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44752 === (5))){
var state_44751__$1 = state_44751;
var statearr_44756_44914 = state_44751__$1;
(statearr_44756_44914[(2)] = null);

(statearr_44756_44914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44752 === (6))){
var state_44751__$1 = state_44751;
var statearr_44757_44915 = state_44751__$1;
(statearr_44757_44915[(2)] = null);

(statearr_44757_44915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44752 === (7))){
var inst_44747 = (state_44751[(2)]);
var state_44751__$1 = state_44751;
var statearr_44758_44916 = state_44751__$1;
(statearr_44758_44916[(2)] = inst_44747);

(statearr_44758_44916[(1)] = (3));


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
});})(__44907,c__44331__auto___44910,G__44738_44908,n__36908__auto___44906,jobs,results,process,async))
;
return ((function (__44907,switch__44217__auto__,c__44331__auto___44910,G__44738_44908,n__36908__auto___44906,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0 = (function (){
var statearr_44762 = [null,null,null,null,null,null,null];
(statearr_44762[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__);

(statearr_44762[(1)] = (1));

return statearr_44762;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1 = (function (state_44751){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_44751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e44763){if((e44763 instanceof Object)){
var ex__44221__auto__ = e44763;
var statearr_44764_44917 = state_44751;
(statearr_44764_44917[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44918 = state_44751;
state_44751 = G__44918;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = function(state_44751){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1.call(this,state_44751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__;
})()
;})(__44907,switch__44217__auto__,c__44331__auto___44910,G__44738_44908,n__36908__auto___44906,jobs,results,process,async))
})();
var state__44333__auto__ = (function (){var statearr_44765 = f__44332__auto__.call(null);
(statearr_44765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___44910);

return statearr_44765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(__44907,c__44331__auto___44910,G__44738_44908,n__36908__auto___44906,jobs,results,process,async))
);


break;
case "async":
var c__44331__auto___44919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44907,c__44331__auto___44919,G__44738_44908,n__36908__auto___44906,jobs,results,process,async){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (__44907,c__44331__auto___44919,G__44738_44908,n__36908__auto___44906,jobs,results,process,async){
return (function (state_44778){
var state_val_44779 = (state_44778[(1)]);
if((state_val_44779 === (1))){
var state_44778__$1 = state_44778;
var statearr_44780_44920 = state_44778__$1;
(statearr_44780_44920[(2)] = null);

(statearr_44780_44920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44779 === (2))){
var state_44778__$1 = state_44778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44778__$1,(4),jobs);
} else {
if((state_val_44779 === (3))){
var inst_44776 = (state_44778[(2)]);
var state_44778__$1 = state_44778;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44778__$1,inst_44776);
} else {
if((state_val_44779 === (4))){
var inst_44768 = (state_44778[(2)]);
var inst_44769 = async.call(null,inst_44768);
var state_44778__$1 = state_44778;
if(cljs.core.truth_(inst_44769)){
var statearr_44781_44921 = state_44778__$1;
(statearr_44781_44921[(1)] = (5));

} else {
var statearr_44782_44922 = state_44778__$1;
(statearr_44782_44922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44779 === (5))){
var state_44778__$1 = state_44778;
var statearr_44783_44923 = state_44778__$1;
(statearr_44783_44923[(2)] = null);

(statearr_44783_44923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44779 === (6))){
var state_44778__$1 = state_44778;
var statearr_44784_44924 = state_44778__$1;
(statearr_44784_44924[(2)] = null);

(statearr_44784_44924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44779 === (7))){
var inst_44774 = (state_44778[(2)]);
var state_44778__$1 = state_44778;
var statearr_44785_44925 = state_44778__$1;
(statearr_44785_44925[(2)] = inst_44774);

(statearr_44785_44925[(1)] = (3));


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
});})(__44907,c__44331__auto___44919,G__44738_44908,n__36908__auto___44906,jobs,results,process,async))
;
return ((function (__44907,switch__44217__auto__,c__44331__auto___44919,G__44738_44908,n__36908__auto___44906,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0 = (function (){
var statearr_44789 = [null,null,null,null,null,null,null];
(statearr_44789[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__);

(statearr_44789[(1)] = (1));

return statearr_44789;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1 = (function (state_44778){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_44778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e44790){if((e44790 instanceof Object)){
var ex__44221__auto__ = e44790;
var statearr_44791_44926 = state_44778;
(statearr_44791_44926[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44790;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44927 = state_44778;
state_44778 = G__44927;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = function(state_44778){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1.call(this,state_44778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__;
})()
;})(__44907,switch__44217__auto__,c__44331__auto___44919,G__44738_44908,n__36908__auto___44906,jobs,results,process,async))
})();
var state__44333__auto__ = (function (){var statearr_44792 = f__44332__auto__.call(null);
(statearr_44792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___44919);

return statearr_44792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(__44907,c__44331__auto___44919,G__44738_44908,n__36908__auto___44906,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__44928 = (__44907 + (1));
__44907 = G__44928;
continue;
} else {
}
break;
}

var c__44331__auto___44929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___44929,jobs,results,process,async){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___44929,jobs,results,process,async){
return (function (state_44814){
var state_val_44815 = (state_44814[(1)]);
if((state_val_44815 === (1))){
var state_44814__$1 = state_44814;
var statearr_44816_44930 = state_44814__$1;
(statearr_44816_44930[(2)] = null);

(statearr_44816_44930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (2))){
var state_44814__$1 = state_44814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44814__$1,(4),from);
} else {
if((state_val_44815 === (3))){
var inst_44812 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44814__$1,inst_44812);
} else {
if((state_val_44815 === (4))){
var inst_44795 = (state_44814[(7)]);
var inst_44795__$1 = (state_44814[(2)]);
var inst_44796 = (inst_44795__$1 == null);
var state_44814__$1 = (function (){var statearr_44817 = state_44814;
(statearr_44817[(7)] = inst_44795__$1);

return statearr_44817;
})();
if(cljs.core.truth_(inst_44796)){
var statearr_44818_44931 = state_44814__$1;
(statearr_44818_44931[(1)] = (5));

} else {
var statearr_44819_44932 = state_44814__$1;
(statearr_44819_44932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (5))){
var inst_44798 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44814__$1 = state_44814;
var statearr_44820_44933 = state_44814__$1;
(statearr_44820_44933[(2)] = inst_44798);

(statearr_44820_44933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (6))){
var inst_44795 = (state_44814[(7)]);
var inst_44800 = (state_44814[(8)]);
var inst_44800__$1 = cljs.core.async.chan.call(null,(1));
var inst_44801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44802 = [inst_44795,inst_44800__$1];
var inst_44803 = (new cljs.core.PersistentVector(null,2,(5),inst_44801,inst_44802,null));
var state_44814__$1 = (function (){var statearr_44821 = state_44814;
(statearr_44821[(8)] = inst_44800__$1);

return statearr_44821;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44814__$1,(8),jobs,inst_44803);
} else {
if((state_val_44815 === (7))){
var inst_44810 = (state_44814[(2)]);
var state_44814__$1 = state_44814;
var statearr_44822_44934 = state_44814__$1;
(statearr_44822_44934[(2)] = inst_44810);

(statearr_44822_44934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44815 === (8))){
var inst_44800 = (state_44814[(8)]);
var inst_44805 = (state_44814[(2)]);
var state_44814__$1 = (function (){var statearr_44823 = state_44814;
(statearr_44823[(9)] = inst_44805);

return statearr_44823;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44814__$1,(9),results,inst_44800);
} else {
if((state_val_44815 === (9))){
var inst_44807 = (state_44814[(2)]);
var state_44814__$1 = (function (){var statearr_44824 = state_44814;
(statearr_44824[(10)] = inst_44807);

return statearr_44824;
})();
var statearr_44825_44935 = state_44814__$1;
(statearr_44825_44935[(2)] = null);

(statearr_44825_44935[(1)] = (2));


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
});})(c__44331__auto___44929,jobs,results,process,async))
;
return ((function (switch__44217__auto__,c__44331__auto___44929,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0 = (function (){
var statearr_44829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__);

(statearr_44829[(1)] = (1));

return statearr_44829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1 = (function (state_44814){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_44814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e44830){if((e44830 instanceof Object)){
var ex__44221__auto__ = e44830;
var statearr_44831_44936 = state_44814;
(statearr_44831_44936[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44937 = state_44814;
state_44814 = G__44937;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = function(state_44814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1.call(this,state_44814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___44929,jobs,results,process,async))
})();
var state__44333__auto__ = (function (){var statearr_44832 = f__44332__auto__.call(null);
(statearr_44832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___44929);

return statearr_44832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___44929,jobs,results,process,async))
);


var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__,jobs,results,process,async){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__,jobs,results,process,async){
return (function (state_44870){
var state_val_44871 = (state_44870[(1)]);
if((state_val_44871 === (7))){
var inst_44866 = (state_44870[(2)]);
var state_44870__$1 = state_44870;
var statearr_44872_44938 = state_44870__$1;
(statearr_44872_44938[(2)] = inst_44866);

(statearr_44872_44938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (20))){
var state_44870__$1 = state_44870;
var statearr_44873_44939 = state_44870__$1;
(statearr_44873_44939[(2)] = null);

(statearr_44873_44939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (1))){
var state_44870__$1 = state_44870;
var statearr_44874_44940 = state_44870__$1;
(statearr_44874_44940[(2)] = null);

(statearr_44874_44940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (4))){
var inst_44835 = (state_44870[(7)]);
var inst_44835__$1 = (state_44870[(2)]);
var inst_44836 = (inst_44835__$1 == null);
var state_44870__$1 = (function (){var statearr_44875 = state_44870;
(statearr_44875[(7)] = inst_44835__$1);

return statearr_44875;
})();
if(cljs.core.truth_(inst_44836)){
var statearr_44876_44941 = state_44870__$1;
(statearr_44876_44941[(1)] = (5));

} else {
var statearr_44877_44942 = state_44870__$1;
(statearr_44877_44942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (15))){
var inst_44848 = (state_44870[(8)]);
var state_44870__$1 = state_44870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44870__$1,(18),to,inst_44848);
} else {
if((state_val_44871 === (21))){
var inst_44861 = (state_44870[(2)]);
var state_44870__$1 = state_44870;
var statearr_44878_44943 = state_44870__$1;
(statearr_44878_44943[(2)] = inst_44861);

(statearr_44878_44943[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (13))){
var inst_44863 = (state_44870[(2)]);
var state_44870__$1 = (function (){var statearr_44879 = state_44870;
(statearr_44879[(9)] = inst_44863);

return statearr_44879;
})();
var statearr_44880_44944 = state_44870__$1;
(statearr_44880_44944[(2)] = null);

(statearr_44880_44944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (6))){
var inst_44835 = (state_44870[(7)]);
var state_44870__$1 = state_44870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44870__$1,(11),inst_44835);
} else {
if((state_val_44871 === (17))){
var inst_44856 = (state_44870[(2)]);
var state_44870__$1 = state_44870;
if(cljs.core.truth_(inst_44856)){
var statearr_44881_44945 = state_44870__$1;
(statearr_44881_44945[(1)] = (19));

} else {
var statearr_44882_44946 = state_44870__$1;
(statearr_44882_44946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (3))){
var inst_44868 = (state_44870[(2)]);
var state_44870__$1 = state_44870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44870__$1,inst_44868);
} else {
if((state_val_44871 === (12))){
var inst_44845 = (state_44870[(10)]);
var state_44870__$1 = state_44870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44870__$1,(14),inst_44845);
} else {
if((state_val_44871 === (2))){
var state_44870__$1 = state_44870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44870__$1,(4),results);
} else {
if((state_val_44871 === (19))){
var state_44870__$1 = state_44870;
var statearr_44883_44947 = state_44870__$1;
(statearr_44883_44947[(2)] = null);

(statearr_44883_44947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (11))){
var inst_44845 = (state_44870[(2)]);
var state_44870__$1 = (function (){var statearr_44884 = state_44870;
(statearr_44884[(10)] = inst_44845);

return statearr_44884;
})();
var statearr_44885_44948 = state_44870__$1;
(statearr_44885_44948[(2)] = null);

(statearr_44885_44948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (9))){
var state_44870__$1 = state_44870;
var statearr_44886_44949 = state_44870__$1;
(statearr_44886_44949[(2)] = null);

(statearr_44886_44949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (5))){
var state_44870__$1 = state_44870;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44887_44950 = state_44870__$1;
(statearr_44887_44950[(1)] = (8));

} else {
var statearr_44888_44951 = state_44870__$1;
(statearr_44888_44951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (14))){
var inst_44850 = (state_44870[(11)]);
var inst_44848 = (state_44870[(8)]);
var inst_44848__$1 = (state_44870[(2)]);
var inst_44849 = (inst_44848__$1 == null);
var inst_44850__$1 = cljs.core.not.call(null,inst_44849);
var state_44870__$1 = (function (){var statearr_44889 = state_44870;
(statearr_44889[(11)] = inst_44850__$1);

(statearr_44889[(8)] = inst_44848__$1);

return statearr_44889;
})();
if(inst_44850__$1){
var statearr_44890_44952 = state_44870__$1;
(statearr_44890_44952[(1)] = (15));

} else {
var statearr_44891_44953 = state_44870__$1;
(statearr_44891_44953[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (16))){
var inst_44850 = (state_44870[(11)]);
var state_44870__$1 = state_44870;
var statearr_44892_44954 = state_44870__$1;
(statearr_44892_44954[(2)] = inst_44850);

(statearr_44892_44954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (10))){
var inst_44842 = (state_44870[(2)]);
var state_44870__$1 = state_44870;
var statearr_44893_44955 = state_44870__$1;
(statearr_44893_44955[(2)] = inst_44842);

(statearr_44893_44955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (18))){
var inst_44853 = (state_44870[(2)]);
var state_44870__$1 = state_44870;
var statearr_44894_44956 = state_44870__$1;
(statearr_44894_44956[(2)] = inst_44853);

(statearr_44894_44956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44871 === (8))){
var inst_44839 = cljs.core.async.close_BANG_.call(null,to);
var state_44870__$1 = state_44870;
var statearr_44895_44957 = state_44870__$1;
(statearr_44895_44957[(2)] = inst_44839);

(statearr_44895_44957[(1)] = (10));


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
});})(c__44331__auto__,jobs,results,process,async))
;
return ((function (switch__44217__auto__,c__44331__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0 = (function (){
var statearr_44899 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44899[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__);

(statearr_44899[(1)] = (1));

return statearr_44899;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1 = (function (state_44870){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_44870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e44900){if((e44900 instanceof Object)){
var ex__44221__auto__ = e44900;
var statearr_44901_44958 = state_44870;
(statearr_44901_44958[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44900;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44959 = state_44870;
state_44870 = G__44959;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__ = function(state_44870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1.call(this,state_44870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44218__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__,jobs,results,process,async))
})();
var state__44333__auto__ = (function (){var statearr_44902 = f__44332__auto__.call(null);
(statearr_44902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_44902;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__,jobs,results,process,async))
);

return c__44331__auto__;
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
var args44960 = [];
var len__37108__auto___44963 = arguments.length;
var i__37109__auto___44964 = (0);
while(true){
if((i__37109__auto___44964 < len__37108__auto___44963)){
args44960.push((arguments[i__37109__auto___44964]));

var G__44965 = (i__37109__auto___44964 + (1));
i__37109__auto___44964 = G__44965;
continue;
} else {
}
break;
}

var G__44962 = args44960.length;
switch (G__44962) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44960.length)].join('')));

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
var args44967 = [];
var len__37108__auto___44970 = arguments.length;
var i__37109__auto___44971 = (0);
while(true){
if((i__37109__auto___44971 < len__37108__auto___44970)){
args44967.push((arguments[i__37109__auto___44971]));

var G__44972 = (i__37109__auto___44971 + (1));
i__37109__auto___44971 = G__44972;
continue;
} else {
}
break;
}

var G__44969 = args44967.length;
switch (G__44969) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44967.length)].join('')));

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
var args44974 = [];
var len__37108__auto___45027 = arguments.length;
var i__37109__auto___45028 = (0);
while(true){
if((i__37109__auto___45028 < len__37108__auto___45027)){
args44974.push((arguments[i__37109__auto___45028]));

var G__45029 = (i__37109__auto___45028 + (1));
i__37109__auto___45028 = G__45029;
continue;
} else {
}
break;
}

var G__44976 = args44974.length;
switch (G__44976) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args44974.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__44331__auto___45031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___45031,tc,fc){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___45031,tc,fc){
return (function (state_45002){
var state_val_45003 = (state_45002[(1)]);
if((state_val_45003 === (7))){
var inst_44998 = (state_45002[(2)]);
var state_45002__$1 = state_45002;
var statearr_45004_45032 = state_45002__$1;
(statearr_45004_45032[(2)] = inst_44998);

(statearr_45004_45032[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (1))){
var state_45002__$1 = state_45002;
var statearr_45005_45033 = state_45002__$1;
(statearr_45005_45033[(2)] = null);

(statearr_45005_45033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (4))){
var inst_44979 = (state_45002[(7)]);
var inst_44979__$1 = (state_45002[(2)]);
var inst_44980 = (inst_44979__$1 == null);
var state_45002__$1 = (function (){var statearr_45006 = state_45002;
(statearr_45006[(7)] = inst_44979__$1);

return statearr_45006;
})();
if(cljs.core.truth_(inst_44980)){
var statearr_45007_45034 = state_45002__$1;
(statearr_45007_45034[(1)] = (5));

} else {
var statearr_45008_45035 = state_45002__$1;
(statearr_45008_45035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (13))){
var state_45002__$1 = state_45002;
var statearr_45009_45036 = state_45002__$1;
(statearr_45009_45036[(2)] = null);

(statearr_45009_45036[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (6))){
var inst_44979 = (state_45002[(7)]);
var inst_44985 = p.call(null,inst_44979);
var state_45002__$1 = state_45002;
if(cljs.core.truth_(inst_44985)){
var statearr_45010_45037 = state_45002__$1;
(statearr_45010_45037[(1)] = (9));

} else {
var statearr_45011_45038 = state_45002__$1;
(statearr_45011_45038[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (3))){
var inst_45000 = (state_45002[(2)]);
var state_45002__$1 = state_45002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45002__$1,inst_45000);
} else {
if((state_val_45003 === (12))){
var state_45002__$1 = state_45002;
var statearr_45012_45039 = state_45002__$1;
(statearr_45012_45039[(2)] = null);

(statearr_45012_45039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (2))){
var state_45002__$1 = state_45002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45002__$1,(4),ch);
} else {
if((state_val_45003 === (11))){
var inst_44979 = (state_45002[(7)]);
var inst_44989 = (state_45002[(2)]);
var state_45002__$1 = state_45002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45002__$1,(8),inst_44989,inst_44979);
} else {
if((state_val_45003 === (9))){
var state_45002__$1 = state_45002;
var statearr_45013_45040 = state_45002__$1;
(statearr_45013_45040[(2)] = tc);

(statearr_45013_45040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (5))){
var inst_44982 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44983 = cljs.core.async.close_BANG_.call(null,fc);
var state_45002__$1 = (function (){var statearr_45014 = state_45002;
(statearr_45014[(8)] = inst_44982);

return statearr_45014;
})();
var statearr_45015_45041 = state_45002__$1;
(statearr_45015_45041[(2)] = inst_44983);

(statearr_45015_45041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (14))){
var inst_44996 = (state_45002[(2)]);
var state_45002__$1 = state_45002;
var statearr_45016_45042 = state_45002__$1;
(statearr_45016_45042[(2)] = inst_44996);

(statearr_45016_45042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (10))){
var state_45002__$1 = state_45002;
var statearr_45017_45043 = state_45002__$1;
(statearr_45017_45043[(2)] = fc);

(statearr_45017_45043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45003 === (8))){
var inst_44991 = (state_45002[(2)]);
var state_45002__$1 = state_45002;
if(cljs.core.truth_(inst_44991)){
var statearr_45018_45044 = state_45002__$1;
(statearr_45018_45044[(1)] = (12));

} else {
var statearr_45019_45045 = state_45002__$1;
(statearr_45019_45045[(1)] = (13));

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
});})(c__44331__auto___45031,tc,fc))
;
return ((function (switch__44217__auto__,c__44331__auto___45031,tc,fc){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_45023 = [null,null,null,null,null,null,null,null,null];
(statearr_45023[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_45023[(1)] = (1));

return statearr_45023;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_45002){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_45002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e45024){if((e45024 instanceof Object)){
var ex__44221__auto__ = e45024;
var statearr_45025_45046 = state_45002;
(statearr_45025_45046[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45047 = state_45002;
state_45002 = G__45047;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_45002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_45002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___45031,tc,fc))
})();
var state__44333__auto__ = (function (){var statearr_45026 = f__44332__auto__.call(null);
(statearr_45026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___45031);

return statearr_45026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___45031,tc,fc))
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
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__){
return (function (state_45111){
var state_val_45112 = (state_45111[(1)]);
if((state_val_45112 === (7))){
var inst_45107 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
var statearr_45113_45134 = state_45111__$1;
(statearr_45113_45134[(2)] = inst_45107);

(statearr_45113_45134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (1))){
var inst_45091 = init;
var state_45111__$1 = (function (){var statearr_45114 = state_45111;
(statearr_45114[(7)] = inst_45091);

return statearr_45114;
})();
var statearr_45115_45135 = state_45111__$1;
(statearr_45115_45135[(2)] = null);

(statearr_45115_45135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (4))){
var inst_45094 = (state_45111[(8)]);
var inst_45094__$1 = (state_45111[(2)]);
var inst_45095 = (inst_45094__$1 == null);
var state_45111__$1 = (function (){var statearr_45116 = state_45111;
(statearr_45116[(8)] = inst_45094__$1);

return statearr_45116;
})();
if(cljs.core.truth_(inst_45095)){
var statearr_45117_45136 = state_45111__$1;
(statearr_45117_45136[(1)] = (5));

} else {
var statearr_45118_45137 = state_45111__$1;
(statearr_45118_45137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (6))){
var inst_45091 = (state_45111[(7)]);
var inst_45094 = (state_45111[(8)]);
var inst_45098 = (state_45111[(9)]);
var inst_45098__$1 = f.call(null,inst_45091,inst_45094);
var inst_45099 = cljs.core.reduced_QMARK_.call(null,inst_45098__$1);
var state_45111__$1 = (function (){var statearr_45119 = state_45111;
(statearr_45119[(9)] = inst_45098__$1);

return statearr_45119;
})();
if(inst_45099){
var statearr_45120_45138 = state_45111__$1;
(statearr_45120_45138[(1)] = (8));

} else {
var statearr_45121_45139 = state_45111__$1;
(statearr_45121_45139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (3))){
var inst_45109 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45111__$1,inst_45109);
} else {
if((state_val_45112 === (2))){
var state_45111__$1 = state_45111;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45111__$1,(4),ch);
} else {
if((state_val_45112 === (9))){
var inst_45098 = (state_45111[(9)]);
var inst_45091 = inst_45098;
var state_45111__$1 = (function (){var statearr_45122 = state_45111;
(statearr_45122[(7)] = inst_45091);

return statearr_45122;
})();
var statearr_45123_45140 = state_45111__$1;
(statearr_45123_45140[(2)] = null);

(statearr_45123_45140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (5))){
var inst_45091 = (state_45111[(7)]);
var state_45111__$1 = state_45111;
var statearr_45124_45141 = state_45111__$1;
(statearr_45124_45141[(2)] = inst_45091);

(statearr_45124_45141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (10))){
var inst_45105 = (state_45111[(2)]);
var state_45111__$1 = state_45111;
var statearr_45125_45142 = state_45111__$1;
(statearr_45125_45142[(2)] = inst_45105);

(statearr_45125_45142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45112 === (8))){
var inst_45098 = (state_45111[(9)]);
var inst_45101 = cljs.core.deref.call(null,inst_45098);
var state_45111__$1 = state_45111;
var statearr_45126_45143 = state_45111__$1;
(statearr_45126_45143[(2)] = inst_45101);

(statearr_45126_45143[(1)] = (10));


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
});})(c__44331__auto__))
;
return ((function (switch__44217__auto__,c__44331__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__44218__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44218__auto____0 = (function (){
var statearr_45130 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45130[(0)] = cljs$core$async$reduce_$_state_machine__44218__auto__);

(statearr_45130[(1)] = (1));

return statearr_45130;
});
var cljs$core$async$reduce_$_state_machine__44218__auto____1 = (function (state_45111){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_45111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e45131){if((e45131 instanceof Object)){
var ex__44221__auto__ = e45131;
var statearr_45132_45144 = state_45111;
(statearr_45132_45144[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45145 = state_45111;
state_45111 = G__45145;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44218__auto__ = function(state_45111){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44218__auto____1.call(this,state_45111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44218__auto____0;
cljs$core$async$reduce_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44218__auto____1;
return cljs$core$async$reduce_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__))
})();
var state__44333__auto__ = (function (){var statearr_45133 = f__44332__auto__.call(null);
(statearr_45133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_45133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__))
);

return c__44331__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__,f__$1){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__,f__$1){
return (function (state_45165){
var state_val_45166 = (state_45165[(1)]);
if((state_val_45166 === (1))){
var inst_45160 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_45165__$1 = state_45165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45165__$1,(2),inst_45160);
} else {
if((state_val_45166 === (2))){
var inst_45162 = (state_45165[(2)]);
var inst_45163 = f__$1.call(null,inst_45162);
var state_45165__$1 = state_45165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45165__$1,inst_45163);
} else {
return null;
}
}
});})(c__44331__auto__,f__$1))
;
return ((function (switch__44217__auto__,c__44331__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__44218__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44218__auto____0 = (function (){
var statearr_45170 = [null,null,null,null,null,null,null];
(statearr_45170[(0)] = cljs$core$async$transduce_$_state_machine__44218__auto__);

(statearr_45170[(1)] = (1));

return statearr_45170;
});
var cljs$core$async$transduce_$_state_machine__44218__auto____1 = (function (state_45165){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_45165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e45171){if((e45171 instanceof Object)){
var ex__44221__auto__ = e45171;
var statearr_45172_45174 = state_45165;
(statearr_45172_45174[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45175 = state_45165;
state_45165 = G__45175;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44218__auto__ = function(state_45165){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44218__auto____1.call(this,state_45165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44218__auto____0;
cljs$core$async$transduce_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44218__auto____1;
return cljs$core$async$transduce_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__,f__$1))
})();
var state__44333__auto__ = (function (){var statearr_45173 = f__44332__auto__.call(null);
(statearr_45173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_45173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__,f__$1))
);

return c__44331__auto__;
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
var args45176 = [];
var len__37108__auto___45228 = arguments.length;
var i__37109__auto___45229 = (0);
while(true){
if((i__37109__auto___45229 < len__37108__auto___45228)){
args45176.push((arguments[i__37109__auto___45229]));

var G__45230 = (i__37109__auto___45229 + (1));
i__37109__auto___45229 = G__45230;
continue;
} else {
}
break;
}

var G__45178 = args45176.length;
switch (G__45178) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45176.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__){
return (function (state_45203){
var state_val_45204 = (state_45203[(1)]);
if((state_val_45204 === (7))){
var inst_45185 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45205_45232 = state_45203__$1;
(statearr_45205_45232[(2)] = inst_45185);

(statearr_45205_45232[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (1))){
var inst_45179 = cljs.core.seq.call(null,coll);
var inst_45180 = inst_45179;
var state_45203__$1 = (function (){var statearr_45206 = state_45203;
(statearr_45206[(7)] = inst_45180);

return statearr_45206;
})();
var statearr_45207_45233 = state_45203__$1;
(statearr_45207_45233[(2)] = null);

(statearr_45207_45233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (4))){
var inst_45180 = (state_45203[(7)]);
var inst_45183 = cljs.core.first.call(null,inst_45180);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45203__$1,(7),ch,inst_45183);
} else {
if((state_val_45204 === (13))){
var inst_45197 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45208_45234 = state_45203__$1;
(statearr_45208_45234[(2)] = inst_45197);

(statearr_45208_45234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (6))){
var inst_45188 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45188)){
var statearr_45209_45235 = state_45203__$1;
(statearr_45209_45235[(1)] = (8));

} else {
var statearr_45210_45236 = state_45203__$1;
(statearr_45210_45236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (3))){
var inst_45201 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45203__$1,inst_45201);
} else {
if((state_val_45204 === (12))){
var state_45203__$1 = state_45203;
var statearr_45211_45237 = state_45203__$1;
(statearr_45211_45237[(2)] = null);

(statearr_45211_45237[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (2))){
var inst_45180 = (state_45203[(7)]);
var state_45203__$1 = state_45203;
if(cljs.core.truth_(inst_45180)){
var statearr_45212_45238 = state_45203__$1;
(statearr_45212_45238[(1)] = (4));

} else {
var statearr_45213_45239 = state_45203__$1;
(statearr_45213_45239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (11))){
var inst_45194 = cljs.core.async.close_BANG_.call(null,ch);
var state_45203__$1 = state_45203;
var statearr_45214_45240 = state_45203__$1;
(statearr_45214_45240[(2)] = inst_45194);

(statearr_45214_45240[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (9))){
var state_45203__$1 = state_45203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45215_45241 = state_45203__$1;
(statearr_45215_45241[(1)] = (11));

} else {
var statearr_45216_45242 = state_45203__$1;
(statearr_45216_45242[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (5))){
var inst_45180 = (state_45203[(7)]);
var state_45203__$1 = state_45203;
var statearr_45217_45243 = state_45203__$1;
(statearr_45217_45243[(2)] = inst_45180);

(statearr_45217_45243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (10))){
var inst_45199 = (state_45203[(2)]);
var state_45203__$1 = state_45203;
var statearr_45218_45244 = state_45203__$1;
(statearr_45218_45244[(2)] = inst_45199);

(statearr_45218_45244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45204 === (8))){
var inst_45180 = (state_45203[(7)]);
var inst_45190 = cljs.core.next.call(null,inst_45180);
var inst_45180__$1 = inst_45190;
var state_45203__$1 = (function (){var statearr_45219 = state_45203;
(statearr_45219[(7)] = inst_45180__$1);

return statearr_45219;
})();
var statearr_45220_45245 = state_45203__$1;
(statearr_45220_45245[(2)] = null);

(statearr_45220_45245[(1)] = (2));


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
});})(c__44331__auto__))
;
return ((function (switch__44217__auto__,c__44331__auto__){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_45224 = [null,null,null,null,null,null,null,null];
(statearr_45224[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_45224[(1)] = (1));

return statearr_45224;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_45203){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_45203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e45225){if((e45225 instanceof Object)){
var ex__44221__auto__ = e45225;
var statearr_45226_45246 = state_45203;
(statearr_45226_45246[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45225;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45247 = state_45203;
state_45203 = G__45247;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_45203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_45203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__))
})();
var state__44333__auto__ = (function (){var statearr_45227 = f__44332__auto__.call(null);
(statearr_45227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_45227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__))
);

return c__44331__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async45473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45473 = (function (ch,cs,meta45474){
this.ch = ch;
this.cs = cs;
this.meta45474 = meta45474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45475,meta45474__$1){
var self__ = this;
var _45475__$1 = this;
return (new cljs.core.async.t_cljs$core$async45473(self__.ch,self__.cs,meta45474__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45475){
var self__ = this;
var _45475__$1 = this;
return self__.meta45474;
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45474","meta45474",1820357088,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45473";

cljs.core.async.t_cljs$core$async45473.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async45473");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async45473 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45473(ch__$1,cs__$1,meta45474){
return (new cljs.core.async.t_cljs$core$async45473(ch__$1,cs__$1,meta45474));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45473(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44331__auto___45698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___45698,cs,m,dchan,dctr,done){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___45698,cs,m,dchan,dctr,done){
return (function (state_45610){
var state_val_45611 = (state_45610[(1)]);
if((state_val_45611 === (7))){
var inst_45606 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45612_45699 = state_45610__$1;
(statearr_45612_45699[(2)] = inst_45606);

(statearr_45612_45699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (20))){
var inst_45509 = (state_45610[(7)]);
var inst_45521 = cljs.core.first.call(null,inst_45509);
var inst_45522 = cljs.core.nth.call(null,inst_45521,(0),null);
var inst_45523 = cljs.core.nth.call(null,inst_45521,(1),null);
var state_45610__$1 = (function (){var statearr_45613 = state_45610;
(statearr_45613[(8)] = inst_45522);

return statearr_45613;
})();
if(cljs.core.truth_(inst_45523)){
var statearr_45614_45700 = state_45610__$1;
(statearr_45614_45700[(1)] = (22));

} else {
var statearr_45615_45701 = state_45610__$1;
(statearr_45615_45701[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (27))){
var inst_45478 = (state_45610[(9)]);
var inst_45553 = (state_45610[(10)]);
var inst_45551 = (state_45610[(11)]);
var inst_45558 = (state_45610[(12)]);
var inst_45558__$1 = cljs.core._nth.call(null,inst_45551,inst_45553);
var inst_45559 = cljs.core.async.put_BANG_.call(null,inst_45558__$1,inst_45478,done);
var state_45610__$1 = (function (){var statearr_45616 = state_45610;
(statearr_45616[(12)] = inst_45558__$1);

return statearr_45616;
})();
if(cljs.core.truth_(inst_45559)){
var statearr_45617_45702 = state_45610__$1;
(statearr_45617_45702[(1)] = (30));

} else {
var statearr_45618_45703 = state_45610__$1;
(statearr_45618_45703[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (1))){
var state_45610__$1 = state_45610;
var statearr_45619_45704 = state_45610__$1;
(statearr_45619_45704[(2)] = null);

(statearr_45619_45704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (24))){
var inst_45509 = (state_45610[(7)]);
var inst_45528 = (state_45610[(2)]);
var inst_45529 = cljs.core.next.call(null,inst_45509);
var inst_45487 = inst_45529;
var inst_45488 = null;
var inst_45489 = (0);
var inst_45490 = (0);
var state_45610__$1 = (function (){var statearr_45620 = state_45610;
(statearr_45620[(13)] = inst_45487);

(statearr_45620[(14)] = inst_45490);

(statearr_45620[(15)] = inst_45528);

(statearr_45620[(16)] = inst_45489);

(statearr_45620[(17)] = inst_45488);

return statearr_45620;
})();
var statearr_45621_45705 = state_45610__$1;
(statearr_45621_45705[(2)] = null);

(statearr_45621_45705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (39))){
var state_45610__$1 = state_45610;
var statearr_45625_45706 = state_45610__$1;
(statearr_45625_45706[(2)] = null);

(statearr_45625_45706[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (4))){
var inst_45478 = (state_45610[(9)]);
var inst_45478__$1 = (state_45610[(2)]);
var inst_45479 = (inst_45478__$1 == null);
var state_45610__$1 = (function (){var statearr_45626 = state_45610;
(statearr_45626[(9)] = inst_45478__$1);

return statearr_45626;
})();
if(cljs.core.truth_(inst_45479)){
var statearr_45627_45707 = state_45610__$1;
(statearr_45627_45707[(1)] = (5));

} else {
var statearr_45628_45708 = state_45610__$1;
(statearr_45628_45708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (15))){
var inst_45487 = (state_45610[(13)]);
var inst_45490 = (state_45610[(14)]);
var inst_45489 = (state_45610[(16)]);
var inst_45488 = (state_45610[(17)]);
var inst_45505 = (state_45610[(2)]);
var inst_45506 = (inst_45490 + (1));
var tmp45622 = inst_45487;
var tmp45623 = inst_45489;
var tmp45624 = inst_45488;
var inst_45487__$1 = tmp45622;
var inst_45488__$1 = tmp45624;
var inst_45489__$1 = tmp45623;
var inst_45490__$1 = inst_45506;
var state_45610__$1 = (function (){var statearr_45629 = state_45610;
(statearr_45629[(13)] = inst_45487__$1);

(statearr_45629[(18)] = inst_45505);

(statearr_45629[(14)] = inst_45490__$1);

(statearr_45629[(16)] = inst_45489__$1);

(statearr_45629[(17)] = inst_45488__$1);

return statearr_45629;
})();
var statearr_45630_45709 = state_45610__$1;
(statearr_45630_45709[(2)] = null);

(statearr_45630_45709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (21))){
var inst_45532 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45634_45710 = state_45610__$1;
(statearr_45634_45710[(2)] = inst_45532);

(statearr_45634_45710[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (31))){
var inst_45558 = (state_45610[(12)]);
var inst_45562 = done.call(null,null);
var inst_45563 = cljs.core.async.untap_STAR_.call(null,m,inst_45558);
var state_45610__$1 = (function (){var statearr_45635 = state_45610;
(statearr_45635[(19)] = inst_45562);

return statearr_45635;
})();
var statearr_45636_45711 = state_45610__$1;
(statearr_45636_45711[(2)] = inst_45563);

(statearr_45636_45711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (32))){
var inst_45553 = (state_45610[(10)]);
var inst_45552 = (state_45610[(20)]);
var inst_45551 = (state_45610[(11)]);
var inst_45550 = (state_45610[(21)]);
var inst_45565 = (state_45610[(2)]);
var inst_45566 = (inst_45553 + (1));
var tmp45631 = inst_45552;
var tmp45632 = inst_45551;
var tmp45633 = inst_45550;
var inst_45550__$1 = tmp45633;
var inst_45551__$1 = tmp45632;
var inst_45552__$1 = tmp45631;
var inst_45553__$1 = inst_45566;
var state_45610__$1 = (function (){var statearr_45637 = state_45610;
(statearr_45637[(10)] = inst_45553__$1);

(statearr_45637[(22)] = inst_45565);

(statearr_45637[(20)] = inst_45552__$1);

(statearr_45637[(11)] = inst_45551__$1);

(statearr_45637[(21)] = inst_45550__$1);

return statearr_45637;
})();
var statearr_45638_45712 = state_45610__$1;
(statearr_45638_45712[(2)] = null);

(statearr_45638_45712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (40))){
var inst_45578 = (state_45610[(23)]);
var inst_45582 = done.call(null,null);
var inst_45583 = cljs.core.async.untap_STAR_.call(null,m,inst_45578);
var state_45610__$1 = (function (){var statearr_45639 = state_45610;
(statearr_45639[(24)] = inst_45582);

return statearr_45639;
})();
var statearr_45640_45713 = state_45610__$1;
(statearr_45640_45713[(2)] = inst_45583);

(statearr_45640_45713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (33))){
var inst_45569 = (state_45610[(25)]);
var inst_45571 = cljs.core.chunked_seq_QMARK_.call(null,inst_45569);
var state_45610__$1 = state_45610;
if(inst_45571){
var statearr_45641_45714 = state_45610__$1;
(statearr_45641_45714[(1)] = (36));

} else {
var statearr_45642_45715 = state_45610__$1;
(statearr_45642_45715[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (13))){
var inst_45499 = (state_45610[(26)]);
var inst_45502 = cljs.core.async.close_BANG_.call(null,inst_45499);
var state_45610__$1 = state_45610;
var statearr_45643_45716 = state_45610__$1;
(statearr_45643_45716[(2)] = inst_45502);

(statearr_45643_45716[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (22))){
var inst_45522 = (state_45610[(8)]);
var inst_45525 = cljs.core.async.close_BANG_.call(null,inst_45522);
var state_45610__$1 = state_45610;
var statearr_45644_45717 = state_45610__$1;
(statearr_45644_45717[(2)] = inst_45525);

(statearr_45644_45717[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (36))){
var inst_45569 = (state_45610[(25)]);
var inst_45573 = cljs.core.chunk_first.call(null,inst_45569);
var inst_45574 = cljs.core.chunk_rest.call(null,inst_45569);
var inst_45575 = cljs.core.count.call(null,inst_45573);
var inst_45550 = inst_45574;
var inst_45551 = inst_45573;
var inst_45552 = inst_45575;
var inst_45553 = (0);
var state_45610__$1 = (function (){var statearr_45645 = state_45610;
(statearr_45645[(10)] = inst_45553);

(statearr_45645[(20)] = inst_45552);

(statearr_45645[(11)] = inst_45551);

(statearr_45645[(21)] = inst_45550);

return statearr_45645;
})();
var statearr_45646_45718 = state_45610__$1;
(statearr_45646_45718[(2)] = null);

(statearr_45646_45718[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (41))){
var inst_45569 = (state_45610[(25)]);
var inst_45585 = (state_45610[(2)]);
var inst_45586 = cljs.core.next.call(null,inst_45569);
var inst_45550 = inst_45586;
var inst_45551 = null;
var inst_45552 = (0);
var inst_45553 = (0);
var state_45610__$1 = (function (){var statearr_45647 = state_45610;
(statearr_45647[(10)] = inst_45553);

(statearr_45647[(20)] = inst_45552);

(statearr_45647[(27)] = inst_45585);

(statearr_45647[(11)] = inst_45551);

(statearr_45647[(21)] = inst_45550);

return statearr_45647;
})();
var statearr_45648_45719 = state_45610__$1;
(statearr_45648_45719[(2)] = null);

(statearr_45648_45719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (43))){
var state_45610__$1 = state_45610;
var statearr_45649_45720 = state_45610__$1;
(statearr_45649_45720[(2)] = null);

(statearr_45649_45720[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (29))){
var inst_45594 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45650_45721 = state_45610__$1;
(statearr_45650_45721[(2)] = inst_45594);

(statearr_45650_45721[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (44))){
var inst_45603 = (state_45610[(2)]);
var state_45610__$1 = (function (){var statearr_45651 = state_45610;
(statearr_45651[(28)] = inst_45603);

return statearr_45651;
})();
var statearr_45652_45722 = state_45610__$1;
(statearr_45652_45722[(2)] = null);

(statearr_45652_45722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (6))){
var inst_45542 = (state_45610[(29)]);
var inst_45541 = cljs.core.deref.call(null,cs);
var inst_45542__$1 = cljs.core.keys.call(null,inst_45541);
var inst_45543 = cljs.core.count.call(null,inst_45542__$1);
var inst_45544 = cljs.core.reset_BANG_.call(null,dctr,inst_45543);
var inst_45549 = cljs.core.seq.call(null,inst_45542__$1);
var inst_45550 = inst_45549;
var inst_45551 = null;
var inst_45552 = (0);
var inst_45553 = (0);
var state_45610__$1 = (function (){var statearr_45653 = state_45610;
(statearr_45653[(29)] = inst_45542__$1);

(statearr_45653[(10)] = inst_45553);

(statearr_45653[(30)] = inst_45544);

(statearr_45653[(20)] = inst_45552);

(statearr_45653[(11)] = inst_45551);

(statearr_45653[(21)] = inst_45550);

return statearr_45653;
})();
var statearr_45654_45723 = state_45610__$1;
(statearr_45654_45723[(2)] = null);

(statearr_45654_45723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (28))){
var inst_45569 = (state_45610[(25)]);
var inst_45550 = (state_45610[(21)]);
var inst_45569__$1 = cljs.core.seq.call(null,inst_45550);
var state_45610__$1 = (function (){var statearr_45655 = state_45610;
(statearr_45655[(25)] = inst_45569__$1);

return statearr_45655;
})();
if(inst_45569__$1){
var statearr_45656_45724 = state_45610__$1;
(statearr_45656_45724[(1)] = (33));

} else {
var statearr_45657_45725 = state_45610__$1;
(statearr_45657_45725[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (25))){
var inst_45553 = (state_45610[(10)]);
var inst_45552 = (state_45610[(20)]);
var inst_45555 = (inst_45553 < inst_45552);
var inst_45556 = inst_45555;
var state_45610__$1 = state_45610;
if(cljs.core.truth_(inst_45556)){
var statearr_45658_45726 = state_45610__$1;
(statearr_45658_45726[(1)] = (27));

} else {
var statearr_45659_45727 = state_45610__$1;
(statearr_45659_45727[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (34))){
var state_45610__$1 = state_45610;
var statearr_45660_45728 = state_45610__$1;
(statearr_45660_45728[(2)] = null);

(statearr_45660_45728[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (17))){
var state_45610__$1 = state_45610;
var statearr_45661_45729 = state_45610__$1;
(statearr_45661_45729[(2)] = null);

(statearr_45661_45729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (3))){
var inst_45608 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45610__$1,inst_45608);
} else {
if((state_val_45611 === (12))){
var inst_45537 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45662_45730 = state_45610__$1;
(statearr_45662_45730[(2)] = inst_45537);

(statearr_45662_45730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (2))){
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45610__$1,(4),ch);
} else {
if((state_val_45611 === (23))){
var state_45610__$1 = state_45610;
var statearr_45663_45731 = state_45610__$1;
(statearr_45663_45731[(2)] = null);

(statearr_45663_45731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (35))){
var inst_45592 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45664_45732 = state_45610__$1;
(statearr_45664_45732[(2)] = inst_45592);

(statearr_45664_45732[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (19))){
var inst_45509 = (state_45610[(7)]);
var inst_45513 = cljs.core.chunk_first.call(null,inst_45509);
var inst_45514 = cljs.core.chunk_rest.call(null,inst_45509);
var inst_45515 = cljs.core.count.call(null,inst_45513);
var inst_45487 = inst_45514;
var inst_45488 = inst_45513;
var inst_45489 = inst_45515;
var inst_45490 = (0);
var state_45610__$1 = (function (){var statearr_45665 = state_45610;
(statearr_45665[(13)] = inst_45487);

(statearr_45665[(14)] = inst_45490);

(statearr_45665[(16)] = inst_45489);

(statearr_45665[(17)] = inst_45488);

return statearr_45665;
})();
var statearr_45666_45733 = state_45610__$1;
(statearr_45666_45733[(2)] = null);

(statearr_45666_45733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (11))){
var inst_45487 = (state_45610[(13)]);
var inst_45509 = (state_45610[(7)]);
var inst_45509__$1 = cljs.core.seq.call(null,inst_45487);
var state_45610__$1 = (function (){var statearr_45667 = state_45610;
(statearr_45667[(7)] = inst_45509__$1);

return statearr_45667;
})();
if(inst_45509__$1){
var statearr_45668_45734 = state_45610__$1;
(statearr_45668_45734[(1)] = (16));

} else {
var statearr_45669_45735 = state_45610__$1;
(statearr_45669_45735[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (9))){
var inst_45539 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45670_45736 = state_45610__$1;
(statearr_45670_45736[(2)] = inst_45539);

(statearr_45670_45736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (5))){
var inst_45485 = cljs.core.deref.call(null,cs);
var inst_45486 = cljs.core.seq.call(null,inst_45485);
var inst_45487 = inst_45486;
var inst_45488 = null;
var inst_45489 = (0);
var inst_45490 = (0);
var state_45610__$1 = (function (){var statearr_45671 = state_45610;
(statearr_45671[(13)] = inst_45487);

(statearr_45671[(14)] = inst_45490);

(statearr_45671[(16)] = inst_45489);

(statearr_45671[(17)] = inst_45488);

return statearr_45671;
})();
var statearr_45672_45737 = state_45610__$1;
(statearr_45672_45737[(2)] = null);

(statearr_45672_45737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (14))){
var state_45610__$1 = state_45610;
var statearr_45673_45738 = state_45610__$1;
(statearr_45673_45738[(2)] = null);

(statearr_45673_45738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (45))){
var inst_45600 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45674_45739 = state_45610__$1;
(statearr_45674_45739[(2)] = inst_45600);

(statearr_45674_45739[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (26))){
var inst_45542 = (state_45610[(29)]);
var inst_45596 = (state_45610[(2)]);
var inst_45597 = cljs.core.seq.call(null,inst_45542);
var state_45610__$1 = (function (){var statearr_45675 = state_45610;
(statearr_45675[(31)] = inst_45596);

return statearr_45675;
})();
if(inst_45597){
var statearr_45676_45740 = state_45610__$1;
(statearr_45676_45740[(1)] = (42));

} else {
var statearr_45677_45741 = state_45610__$1;
(statearr_45677_45741[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (16))){
var inst_45509 = (state_45610[(7)]);
var inst_45511 = cljs.core.chunked_seq_QMARK_.call(null,inst_45509);
var state_45610__$1 = state_45610;
if(inst_45511){
var statearr_45678_45742 = state_45610__$1;
(statearr_45678_45742[(1)] = (19));

} else {
var statearr_45679_45743 = state_45610__$1;
(statearr_45679_45743[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (38))){
var inst_45589 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45680_45744 = state_45610__$1;
(statearr_45680_45744[(2)] = inst_45589);

(statearr_45680_45744[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (30))){
var state_45610__$1 = state_45610;
var statearr_45681_45745 = state_45610__$1;
(statearr_45681_45745[(2)] = null);

(statearr_45681_45745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (10))){
var inst_45490 = (state_45610[(14)]);
var inst_45488 = (state_45610[(17)]);
var inst_45498 = cljs.core._nth.call(null,inst_45488,inst_45490);
var inst_45499 = cljs.core.nth.call(null,inst_45498,(0),null);
var inst_45500 = cljs.core.nth.call(null,inst_45498,(1),null);
var state_45610__$1 = (function (){var statearr_45682 = state_45610;
(statearr_45682[(26)] = inst_45499);

return statearr_45682;
})();
if(cljs.core.truth_(inst_45500)){
var statearr_45683_45746 = state_45610__$1;
(statearr_45683_45746[(1)] = (13));

} else {
var statearr_45684_45747 = state_45610__$1;
(statearr_45684_45747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (18))){
var inst_45535 = (state_45610[(2)]);
var state_45610__$1 = state_45610;
var statearr_45685_45748 = state_45610__$1;
(statearr_45685_45748[(2)] = inst_45535);

(statearr_45685_45748[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (42))){
var state_45610__$1 = state_45610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45610__$1,(45),dchan);
} else {
if((state_val_45611 === (37))){
var inst_45578 = (state_45610[(23)]);
var inst_45478 = (state_45610[(9)]);
var inst_45569 = (state_45610[(25)]);
var inst_45578__$1 = cljs.core.first.call(null,inst_45569);
var inst_45579 = cljs.core.async.put_BANG_.call(null,inst_45578__$1,inst_45478,done);
var state_45610__$1 = (function (){var statearr_45686 = state_45610;
(statearr_45686[(23)] = inst_45578__$1);

return statearr_45686;
})();
if(cljs.core.truth_(inst_45579)){
var statearr_45687_45749 = state_45610__$1;
(statearr_45687_45749[(1)] = (39));

} else {
var statearr_45688_45750 = state_45610__$1;
(statearr_45688_45750[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45611 === (8))){
var inst_45490 = (state_45610[(14)]);
var inst_45489 = (state_45610[(16)]);
var inst_45492 = (inst_45490 < inst_45489);
var inst_45493 = inst_45492;
var state_45610__$1 = state_45610;
if(cljs.core.truth_(inst_45493)){
var statearr_45689_45751 = state_45610__$1;
(statearr_45689_45751[(1)] = (10));

} else {
var statearr_45690_45752 = state_45610__$1;
(statearr_45690_45752[(1)] = (11));

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
});})(c__44331__auto___45698,cs,m,dchan,dctr,done))
;
return ((function (switch__44217__auto__,c__44331__auto___45698,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__44218__auto__ = null;
var cljs$core$async$mult_$_state_machine__44218__auto____0 = (function (){
var statearr_45694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45694[(0)] = cljs$core$async$mult_$_state_machine__44218__auto__);

(statearr_45694[(1)] = (1));

return statearr_45694;
});
var cljs$core$async$mult_$_state_machine__44218__auto____1 = (function (state_45610){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_45610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e45695){if((e45695 instanceof Object)){
var ex__44221__auto__ = e45695;
var statearr_45696_45753 = state_45610;
(statearr_45696_45753[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45754 = state_45610;
state_45610 = G__45754;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44218__auto__ = function(state_45610){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44218__auto____1.call(this,state_45610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44218__auto____0;
cljs$core$async$mult_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44218__auto____1;
return cljs$core$async$mult_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___45698,cs,m,dchan,dctr,done))
})();
var state__44333__auto__ = (function (){var statearr_45697 = f__44332__auto__.call(null);
(statearr_45697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___45698);

return statearr_45697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___45698,cs,m,dchan,dctr,done))
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
var args45755 = [];
var len__37108__auto___45758 = arguments.length;
var i__37109__auto___45759 = (0);
while(true){
if((i__37109__auto___45759 < len__37108__auto___45758)){
args45755.push((arguments[i__37109__auto___45759]));

var G__45760 = (i__37109__auto___45759 + (1));
i__37109__auto___45759 = G__45760;
continue;
} else {
}
break;
}

var G__45757 = args45755.length;
switch (G__45757) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45755.length)].join('')));

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
var len__37108__auto___45772 = arguments.length;
var i__37109__auto___45773 = (0);
while(true){
if((i__37109__auto___45773 < len__37108__auto___45772)){
args__37115__auto__.push((arguments[i__37109__auto___45773]));

var G__45774 = (i__37109__auto___45773 + (1));
i__37109__auto___45773 = G__45774;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((3) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__37116__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45766){
var map__45767 = p__45766;
var map__45767__$1 = ((((!((map__45767 == null)))?((((map__45767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45767):map__45767);
var opts = map__45767__$1;
var statearr_45769_45775 = state;
(statearr_45769_45775[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6753__auto__ = cljs.core.async.do_alts.call(null,((function (map__45767,map__45767__$1,opts){
return (function (val){
var statearr_45770_45776 = state;
(statearr_45770_45776[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45767,map__45767__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6753__auto__)){
var cb = temp__6753__auto__;
var statearr_45771_45777 = state;
(statearr_45771_45777[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45762){
var G__45763 = cljs.core.first.call(null,seq45762);
var seq45762__$1 = cljs.core.next.call(null,seq45762);
var G__45764 = cljs.core.first.call(null,seq45762__$1);
var seq45762__$2 = cljs.core.next.call(null,seq45762__$1);
var G__45765 = cljs.core.first.call(null,seq45762__$2);
var seq45762__$3 = cljs.core.next.call(null,seq45762__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45763,G__45764,G__45765,seq45762__$3);
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
if(typeof cljs.core.async.t_cljs$core$async45945 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45945 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta45946){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta45946 = meta45946;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45947,meta45946__$1){
var self__ = this;
var _45947__$1 = this;
return (new cljs.core.async.t_cljs$core$async45945(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta45946__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45947){
var self__ = this;
var _45947__$1 = this;
return self__.meta45946;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45945.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta45946","meta45946",1499838719,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45945.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45945.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45945";

cljs.core.async.t_cljs$core$async45945.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async45945");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async45945 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45945(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45946){
return (new cljs.core.async.t_cljs$core$async45945(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta45946));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45945(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44331__auto___46112 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_46049){
var state_val_46050 = (state_46049[(1)]);
if((state_val_46050 === (7))){
var inst_45964 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
var statearr_46051_46113 = state_46049__$1;
(statearr_46051_46113[(2)] = inst_45964);

(statearr_46051_46113[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (20))){
var inst_45976 = (state_46049[(7)]);
var state_46049__$1 = state_46049;
var statearr_46052_46114 = state_46049__$1;
(statearr_46052_46114[(2)] = inst_45976);

(statearr_46052_46114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (27))){
var state_46049__$1 = state_46049;
var statearr_46053_46115 = state_46049__$1;
(statearr_46053_46115[(2)] = null);

(statearr_46053_46115[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (1))){
var inst_45951 = (state_46049[(8)]);
var inst_45951__$1 = calc_state.call(null);
var inst_45953 = (inst_45951__$1 == null);
var inst_45954 = cljs.core.not.call(null,inst_45953);
var state_46049__$1 = (function (){var statearr_46054 = state_46049;
(statearr_46054[(8)] = inst_45951__$1);

return statearr_46054;
})();
if(inst_45954){
var statearr_46055_46116 = state_46049__$1;
(statearr_46055_46116[(1)] = (2));

} else {
var statearr_46056_46117 = state_46049__$1;
(statearr_46056_46117[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (24))){
var inst_46023 = (state_46049[(9)]);
var inst_46000 = (state_46049[(10)]);
var inst_46009 = (state_46049[(11)]);
var inst_46023__$1 = inst_46000.call(null,inst_46009);
var state_46049__$1 = (function (){var statearr_46057 = state_46049;
(statearr_46057[(9)] = inst_46023__$1);

return statearr_46057;
})();
if(cljs.core.truth_(inst_46023__$1)){
var statearr_46058_46118 = state_46049__$1;
(statearr_46058_46118[(1)] = (29));

} else {
var statearr_46059_46119 = state_46049__$1;
(statearr_46059_46119[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (4))){
var inst_45967 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_45967)){
var statearr_46060_46120 = state_46049__$1;
(statearr_46060_46120[(1)] = (8));

} else {
var statearr_46061_46121 = state_46049__$1;
(statearr_46061_46121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (15))){
var inst_45994 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_45994)){
var statearr_46062_46122 = state_46049__$1;
(statearr_46062_46122[(1)] = (19));

} else {
var statearr_46063_46123 = state_46049__$1;
(statearr_46063_46123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (21))){
var inst_45999 = (state_46049[(12)]);
var inst_45999__$1 = (state_46049[(2)]);
var inst_46000 = cljs.core.get.call(null,inst_45999__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46001 = cljs.core.get.call(null,inst_45999__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46002 = cljs.core.get.call(null,inst_45999__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46049__$1 = (function (){var statearr_46064 = state_46049;
(statearr_46064[(13)] = inst_46001);

(statearr_46064[(10)] = inst_46000);

(statearr_46064[(12)] = inst_45999__$1);

return statearr_46064;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_46049__$1,(22),inst_46002);
} else {
if((state_val_46050 === (31))){
var inst_46031 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_46031)){
var statearr_46065_46124 = state_46049__$1;
(statearr_46065_46124[(1)] = (32));

} else {
var statearr_46066_46125 = state_46049__$1;
(statearr_46066_46125[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (32))){
var inst_46008 = (state_46049[(14)]);
var state_46049__$1 = state_46049;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46049__$1,(35),out,inst_46008);
} else {
if((state_val_46050 === (33))){
var inst_45999 = (state_46049[(12)]);
var inst_45976 = inst_45999;
var state_46049__$1 = (function (){var statearr_46067 = state_46049;
(statearr_46067[(7)] = inst_45976);

return statearr_46067;
})();
var statearr_46068_46126 = state_46049__$1;
(statearr_46068_46126[(2)] = null);

(statearr_46068_46126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (13))){
var inst_45976 = (state_46049[(7)]);
var inst_45983 = inst_45976.cljs$lang$protocol_mask$partition0$;
var inst_45984 = (inst_45983 & (64));
var inst_45985 = inst_45976.cljs$core$ISeq$;
var inst_45986 = (cljs.core.PROTOCOL_SENTINEL === inst_45985);
var inst_45987 = (inst_45984) || (inst_45986);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_45987)){
var statearr_46069_46127 = state_46049__$1;
(statearr_46069_46127[(1)] = (16));

} else {
var statearr_46070_46128 = state_46049__$1;
(statearr_46070_46128[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (22))){
var inst_46008 = (state_46049[(14)]);
var inst_46009 = (state_46049[(11)]);
var inst_46007 = (state_46049[(2)]);
var inst_46008__$1 = cljs.core.nth.call(null,inst_46007,(0),null);
var inst_46009__$1 = cljs.core.nth.call(null,inst_46007,(1),null);
var inst_46010 = (inst_46008__$1 == null);
var inst_46011 = cljs.core._EQ_.call(null,inst_46009__$1,change);
var inst_46012 = (inst_46010) || (inst_46011);
var state_46049__$1 = (function (){var statearr_46071 = state_46049;
(statearr_46071[(14)] = inst_46008__$1);

(statearr_46071[(11)] = inst_46009__$1);

return statearr_46071;
})();
if(cljs.core.truth_(inst_46012)){
var statearr_46072_46129 = state_46049__$1;
(statearr_46072_46129[(1)] = (23));

} else {
var statearr_46073_46130 = state_46049__$1;
(statearr_46073_46130[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (36))){
var inst_45999 = (state_46049[(12)]);
var inst_45976 = inst_45999;
var state_46049__$1 = (function (){var statearr_46074 = state_46049;
(statearr_46074[(7)] = inst_45976);

return statearr_46074;
})();
var statearr_46075_46131 = state_46049__$1;
(statearr_46075_46131[(2)] = null);

(statearr_46075_46131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (29))){
var inst_46023 = (state_46049[(9)]);
var state_46049__$1 = state_46049;
var statearr_46076_46132 = state_46049__$1;
(statearr_46076_46132[(2)] = inst_46023);

(statearr_46076_46132[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (6))){
var state_46049__$1 = state_46049;
var statearr_46077_46133 = state_46049__$1;
(statearr_46077_46133[(2)] = false);

(statearr_46077_46133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (28))){
var inst_46019 = (state_46049[(2)]);
var inst_46020 = calc_state.call(null);
var inst_45976 = inst_46020;
var state_46049__$1 = (function (){var statearr_46078 = state_46049;
(statearr_46078[(7)] = inst_45976);

(statearr_46078[(15)] = inst_46019);

return statearr_46078;
})();
var statearr_46079_46134 = state_46049__$1;
(statearr_46079_46134[(2)] = null);

(statearr_46079_46134[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (25))){
var inst_46045 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
var statearr_46080_46135 = state_46049__$1;
(statearr_46080_46135[(2)] = inst_46045);

(statearr_46080_46135[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (34))){
var inst_46043 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
var statearr_46081_46136 = state_46049__$1;
(statearr_46081_46136[(2)] = inst_46043);

(statearr_46081_46136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (17))){
var state_46049__$1 = state_46049;
var statearr_46082_46137 = state_46049__$1;
(statearr_46082_46137[(2)] = false);

(statearr_46082_46137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (3))){
var state_46049__$1 = state_46049;
var statearr_46083_46138 = state_46049__$1;
(statearr_46083_46138[(2)] = false);

(statearr_46083_46138[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (12))){
var inst_46047 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46049__$1,inst_46047);
} else {
if((state_val_46050 === (2))){
var inst_45951 = (state_46049[(8)]);
var inst_45956 = inst_45951.cljs$lang$protocol_mask$partition0$;
var inst_45957 = (inst_45956 & (64));
var inst_45958 = inst_45951.cljs$core$ISeq$;
var inst_45959 = (cljs.core.PROTOCOL_SENTINEL === inst_45958);
var inst_45960 = (inst_45957) || (inst_45959);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_45960)){
var statearr_46084_46139 = state_46049__$1;
(statearr_46084_46139[(1)] = (5));

} else {
var statearr_46085_46140 = state_46049__$1;
(statearr_46085_46140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (23))){
var inst_46008 = (state_46049[(14)]);
var inst_46014 = (inst_46008 == null);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_46014)){
var statearr_46086_46141 = state_46049__$1;
(statearr_46086_46141[(1)] = (26));

} else {
var statearr_46087_46142 = state_46049__$1;
(statearr_46087_46142[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (35))){
var inst_46034 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
if(cljs.core.truth_(inst_46034)){
var statearr_46088_46143 = state_46049__$1;
(statearr_46088_46143[(1)] = (36));

} else {
var statearr_46089_46144 = state_46049__$1;
(statearr_46089_46144[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (19))){
var inst_45976 = (state_46049[(7)]);
var inst_45996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45976);
var state_46049__$1 = state_46049;
var statearr_46090_46145 = state_46049__$1;
(statearr_46090_46145[(2)] = inst_45996);

(statearr_46090_46145[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (11))){
var inst_45976 = (state_46049[(7)]);
var inst_45980 = (inst_45976 == null);
var inst_45981 = cljs.core.not.call(null,inst_45980);
var state_46049__$1 = state_46049;
if(inst_45981){
var statearr_46091_46146 = state_46049__$1;
(statearr_46091_46146[(1)] = (13));

} else {
var statearr_46092_46147 = state_46049__$1;
(statearr_46092_46147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (9))){
var inst_45951 = (state_46049[(8)]);
var state_46049__$1 = state_46049;
var statearr_46093_46148 = state_46049__$1;
(statearr_46093_46148[(2)] = inst_45951);

(statearr_46093_46148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (5))){
var state_46049__$1 = state_46049;
var statearr_46094_46149 = state_46049__$1;
(statearr_46094_46149[(2)] = true);

(statearr_46094_46149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (14))){
var state_46049__$1 = state_46049;
var statearr_46095_46150 = state_46049__$1;
(statearr_46095_46150[(2)] = false);

(statearr_46095_46150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (26))){
var inst_46009 = (state_46049[(11)]);
var inst_46016 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_46009);
var state_46049__$1 = state_46049;
var statearr_46096_46151 = state_46049__$1;
(statearr_46096_46151[(2)] = inst_46016);

(statearr_46096_46151[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (16))){
var state_46049__$1 = state_46049;
var statearr_46097_46152 = state_46049__$1;
(statearr_46097_46152[(2)] = true);

(statearr_46097_46152[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (38))){
var inst_46039 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
var statearr_46098_46153 = state_46049__$1;
(statearr_46098_46153[(2)] = inst_46039);

(statearr_46098_46153[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (30))){
var inst_46001 = (state_46049[(13)]);
var inst_46000 = (state_46049[(10)]);
var inst_46009 = (state_46049[(11)]);
var inst_46026 = cljs.core.empty_QMARK_.call(null,inst_46000);
var inst_46027 = inst_46001.call(null,inst_46009);
var inst_46028 = cljs.core.not.call(null,inst_46027);
var inst_46029 = (inst_46026) && (inst_46028);
var state_46049__$1 = state_46049;
var statearr_46099_46154 = state_46049__$1;
(statearr_46099_46154[(2)] = inst_46029);

(statearr_46099_46154[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (10))){
var inst_45951 = (state_46049[(8)]);
var inst_45972 = (state_46049[(2)]);
var inst_45973 = cljs.core.get.call(null,inst_45972,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45974 = cljs.core.get.call(null,inst_45972,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45975 = cljs.core.get.call(null,inst_45972,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45976 = inst_45951;
var state_46049__$1 = (function (){var statearr_46100 = state_46049;
(statearr_46100[(16)] = inst_45973);

(statearr_46100[(7)] = inst_45976);

(statearr_46100[(17)] = inst_45975);

(statearr_46100[(18)] = inst_45974);

return statearr_46100;
})();
var statearr_46101_46155 = state_46049__$1;
(statearr_46101_46155[(2)] = null);

(statearr_46101_46155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (18))){
var inst_45991 = (state_46049[(2)]);
var state_46049__$1 = state_46049;
var statearr_46102_46156 = state_46049__$1;
(statearr_46102_46156[(2)] = inst_45991);

(statearr_46102_46156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (37))){
var state_46049__$1 = state_46049;
var statearr_46103_46157 = state_46049__$1;
(statearr_46103_46157[(2)] = null);

(statearr_46103_46157[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46050 === (8))){
var inst_45951 = (state_46049[(8)]);
var inst_45969 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45951);
var state_46049__$1 = state_46049;
var statearr_46104_46158 = state_46049__$1;
(statearr_46104_46158[(2)] = inst_45969);

(statearr_46104_46158[(1)] = (10));


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
});})(c__44331__auto___46112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__44217__auto__,c__44331__auto___46112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__44218__auto__ = null;
var cljs$core$async$mix_$_state_machine__44218__auto____0 = (function (){
var statearr_46108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46108[(0)] = cljs$core$async$mix_$_state_machine__44218__auto__);

(statearr_46108[(1)] = (1));

return statearr_46108;
});
var cljs$core$async$mix_$_state_machine__44218__auto____1 = (function (state_46049){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46109){if((e46109 instanceof Object)){
var ex__44221__auto__ = e46109;
var statearr_46110_46159 = state_46049;
(statearr_46110_46159[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46160 = state_46049;
state_46049 = G__46160;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44218__auto__ = function(state_46049){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44218__auto____1.call(this,state_46049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44218__auto____0;
cljs$core$async$mix_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44218__auto____1;
return cljs$core$async$mix_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44333__auto__ = (function (){var statearr_46111 = f__44332__auto__.call(null);
(statearr_46111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46112);

return statearr_46111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46112,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args46161 = [];
var len__37108__auto___46164 = arguments.length;
var i__37109__auto___46165 = (0);
while(true){
if((i__37109__auto___46165 < len__37108__auto___46164)){
args46161.push((arguments[i__37109__auto___46165]));

var G__46166 = (i__37109__auto___46165 + (1));
i__37109__auto___46165 = G__46166;
continue;
} else {
}
break;
}

var G__46163 = args46161.length;
switch (G__46163) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46161.length)].join('')));

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
var args46169 = [];
var len__37108__auto___46294 = arguments.length;
var i__37109__auto___46295 = (0);
while(true){
if((i__37109__auto___46295 < len__37108__auto___46294)){
args46169.push((arguments[i__37109__auto___46295]));

var G__46296 = (i__37109__auto___46295 + (1));
i__37109__auto___46295 = G__46296;
continue;
} else {
}
break;
}

var G__46171 = args46169.length;
switch (G__46171) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46169.length)].join('')));

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
return (function (p1__46168_SHARP_){
if(cljs.core.truth_(p1__46168_SHARP_.call(null,topic))){
return p1__46168_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__46168_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__35887__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async46172 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46172 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46173){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46173 = meta46173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_46174,meta46173__$1){
var self__ = this;
var _46174__$1 = this;
return (new cljs.core.async.t_cljs$core$async46172(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46173__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_46174){
var self__ = this;
var _46174__$1 = this;
return self__.meta46173;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46173","meta46173",-778880297,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async46172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46172";

cljs.core.async.t_cljs$core$async46172.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46172");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async46172 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async46172(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46173){
return (new cljs.core.async.t_cljs$core$async46172(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46173));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async46172(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44331__auto___46298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46298,mults,ensure_mult,p){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46298,mults,ensure_mult,p){
return (function (state_46246){
var state_val_46247 = (state_46246[(1)]);
if((state_val_46247 === (7))){
var inst_46242 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
var statearr_46248_46299 = state_46246__$1;
(statearr_46248_46299[(2)] = inst_46242);

(statearr_46248_46299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (20))){
var state_46246__$1 = state_46246;
var statearr_46249_46300 = state_46246__$1;
(statearr_46249_46300[(2)] = null);

(statearr_46249_46300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (1))){
var state_46246__$1 = state_46246;
var statearr_46250_46301 = state_46246__$1;
(statearr_46250_46301[(2)] = null);

(statearr_46250_46301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (24))){
var inst_46225 = (state_46246[(7)]);
var inst_46234 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_46225);
var state_46246__$1 = state_46246;
var statearr_46251_46302 = state_46246__$1;
(statearr_46251_46302[(2)] = inst_46234);

(statearr_46251_46302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (4))){
var inst_46177 = (state_46246[(8)]);
var inst_46177__$1 = (state_46246[(2)]);
var inst_46178 = (inst_46177__$1 == null);
var state_46246__$1 = (function (){var statearr_46252 = state_46246;
(statearr_46252[(8)] = inst_46177__$1);

return statearr_46252;
})();
if(cljs.core.truth_(inst_46178)){
var statearr_46253_46303 = state_46246__$1;
(statearr_46253_46303[(1)] = (5));

} else {
var statearr_46254_46304 = state_46246__$1;
(statearr_46254_46304[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (15))){
var inst_46219 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
var statearr_46255_46305 = state_46246__$1;
(statearr_46255_46305[(2)] = inst_46219);

(statearr_46255_46305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (21))){
var inst_46239 = (state_46246[(2)]);
var state_46246__$1 = (function (){var statearr_46256 = state_46246;
(statearr_46256[(9)] = inst_46239);

return statearr_46256;
})();
var statearr_46257_46306 = state_46246__$1;
(statearr_46257_46306[(2)] = null);

(statearr_46257_46306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (13))){
var inst_46201 = (state_46246[(10)]);
var inst_46203 = cljs.core.chunked_seq_QMARK_.call(null,inst_46201);
var state_46246__$1 = state_46246;
if(inst_46203){
var statearr_46258_46307 = state_46246__$1;
(statearr_46258_46307[(1)] = (16));

} else {
var statearr_46259_46308 = state_46246__$1;
(statearr_46259_46308[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (22))){
var inst_46231 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
if(cljs.core.truth_(inst_46231)){
var statearr_46260_46309 = state_46246__$1;
(statearr_46260_46309[(1)] = (23));

} else {
var statearr_46261_46310 = state_46246__$1;
(statearr_46261_46310[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (6))){
var inst_46177 = (state_46246[(8)]);
var inst_46227 = (state_46246[(11)]);
var inst_46225 = (state_46246[(7)]);
var inst_46225__$1 = topic_fn.call(null,inst_46177);
var inst_46226 = cljs.core.deref.call(null,mults);
var inst_46227__$1 = cljs.core.get.call(null,inst_46226,inst_46225__$1);
var state_46246__$1 = (function (){var statearr_46262 = state_46246;
(statearr_46262[(11)] = inst_46227__$1);

(statearr_46262[(7)] = inst_46225__$1);

return statearr_46262;
})();
if(cljs.core.truth_(inst_46227__$1)){
var statearr_46263_46311 = state_46246__$1;
(statearr_46263_46311[(1)] = (19));

} else {
var statearr_46264_46312 = state_46246__$1;
(statearr_46264_46312[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (25))){
var inst_46236 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
var statearr_46265_46313 = state_46246__$1;
(statearr_46265_46313[(2)] = inst_46236);

(statearr_46265_46313[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (17))){
var inst_46201 = (state_46246[(10)]);
var inst_46210 = cljs.core.first.call(null,inst_46201);
var inst_46211 = cljs.core.async.muxch_STAR_.call(null,inst_46210);
var inst_46212 = cljs.core.async.close_BANG_.call(null,inst_46211);
var inst_46213 = cljs.core.next.call(null,inst_46201);
var inst_46187 = inst_46213;
var inst_46188 = null;
var inst_46189 = (0);
var inst_46190 = (0);
var state_46246__$1 = (function (){var statearr_46266 = state_46246;
(statearr_46266[(12)] = inst_46189);

(statearr_46266[(13)] = inst_46187);

(statearr_46266[(14)] = inst_46212);

(statearr_46266[(15)] = inst_46188);

(statearr_46266[(16)] = inst_46190);

return statearr_46266;
})();
var statearr_46267_46314 = state_46246__$1;
(statearr_46267_46314[(2)] = null);

(statearr_46267_46314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (3))){
var inst_46244 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46246__$1,inst_46244);
} else {
if((state_val_46247 === (12))){
var inst_46221 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
var statearr_46268_46315 = state_46246__$1;
(statearr_46268_46315[(2)] = inst_46221);

(statearr_46268_46315[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (2))){
var state_46246__$1 = state_46246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46246__$1,(4),ch);
} else {
if((state_val_46247 === (23))){
var state_46246__$1 = state_46246;
var statearr_46269_46316 = state_46246__$1;
(statearr_46269_46316[(2)] = null);

(statearr_46269_46316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (19))){
var inst_46177 = (state_46246[(8)]);
var inst_46227 = (state_46246[(11)]);
var inst_46229 = cljs.core.async.muxch_STAR_.call(null,inst_46227);
var state_46246__$1 = state_46246;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46246__$1,(22),inst_46229,inst_46177);
} else {
if((state_val_46247 === (11))){
var inst_46187 = (state_46246[(13)]);
var inst_46201 = (state_46246[(10)]);
var inst_46201__$1 = cljs.core.seq.call(null,inst_46187);
var state_46246__$1 = (function (){var statearr_46270 = state_46246;
(statearr_46270[(10)] = inst_46201__$1);

return statearr_46270;
})();
if(inst_46201__$1){
var statearr_46271_46317 = state_46246__$1;
(statearr_46271_46317[(1)] = (13));

} else {
var statearr_46272_46318 = state_46246__$1;
(statearr_46272_46318[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (9))){
var inst_46223 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
var statearr_46273_46319 = state_46246__$1;
(statearr_46273_46319[(2)] = inst_46223);

(statearr_46273_46319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (5))){
var inst_46184 = cljs.core.deref.call(null,mults);
var inst_46185 = cljs.core.vals.call(null,inst_46184);
var inst_46186 = cljs.core.seq.call(null,inst_46185);
var inst_46187 = inst_46186;
var inst_46188 = null;
var inst_46189 = (0);
var inst_46190 = (0);
var state_46246__$1 = (function (){var statearr_46274 = state_46246;
(statearr_46274[(12)] = inst_46189);

(statearr_46274[(13)] = inst_46187);

(statearr_46274[(15)] = inst_46188);

(statearr_46274[(16)] = inst_46190);

return statearr_46274;
})();
var statearr_46275_46320 = state_46246__$1;
(statearr_46275_46320[(2)] = null);

(statearr_46275_46320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (14))){
var state_46246__$1 = state_46246;
var statearr_46279_46321 = state_46246__$1;
(statearr_46279_46321[(2)] = null);

(statearr_46279_46321[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (16))){
var inst_46201 = (state_46246[(10)]);
var inst_46205 = cljs.core.chunk_first.call(null,inst_46201);
var inst_46206 = cljs.core.chunk_rest.call(null,inst_46201);
var inst_46207 = cljs.core.count.call(null,inst_46205);
var inst_46187 = inst_46206;
var inst_46188 = inst_46205;
var inst_46189 = inst_46207;
var inst_46190 = (0);
var state_46246__$1 = (function (){var statearr_46280 = state_46246;
(statearr_46280[(12)] = inst_46189);

(statearr_46280[(13)] = inst_46187);

(statearr_46280[(15)] = inst_46188);

(statearr_46280[(16)] = inst_46190);

return statearr_46280;
})();
var statearr_46281_46322 = state_46246__$1;
(statearr_46281_46322[(2)] = null);

(statearr_46281_46322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (10))){
var inst_46189 = (state_46246[(12)]);
var inst_46187 = (state_46246[(13)]);
var inst_46188 = (state_46246[(15)]);
var inst_46190 = (state_46246[(16)]);
var inst_46195 = cljs.core._nth.call(null,inst_46188,inst_46190);
var inst_46196 = cljs.core.async.muxch_STAR_.call(null,inst_46195);
var inst_46197 = cljs.core.async.close_BANG_.call(null,inst_46196);
var inst_46198 = (inst_46190 + (1));
var tmp46276 = inst_46189;
var tmp46277 = inst_46187;
var tmp46278 = inst_46188;
var inst_46187__$1 = tmp46277;
var inst_46188__$1 = tmp46278;
var inst_46189__$1 = tmp46276;
var inst_46190__$1 = inst_46198;
var state_46246__$1 = (function (){var statearr_46282 = state_46246;
(statearr_46282[(12)] = inst_46189__$1);

(statearr_46282[(13)] = inst_46187__$1);

(statearr_46282[(17)] = inst_46197);

(statearr_46282[(15)] = inst_46188__$1);

(statearr_46282[(16)] = inst_46190__$1);

return statearr_46282;
})();
var statearr_46283_46323 = state_46246__$1;
(statearr_46283_46323[(2)] = null);

(statearr_46283_46323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (18))){
var inst_46216 = (state_46246[(2)]);
var state_46246__$1 = state_46246;
var statearr_46284_46324 = state_46246__$1;
(statearr_46284_46324[(2)] = inst_46216);

(statearr_46284_46324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46247 === (8))){
var inst_46189 = (state_46246[(12)]);
var inst_46190 = (state_46246[(16)]);
var inst_46192 = (inst_46190 < inst_46189);
var inst_46193 = inst_46192;
var state_46246__$1 = state_46246;
if(cljs.core.truth_(inst_46193)){
var statearr_46285_46325 = state_46246__$1;
(statearr_46285_46325[(1)] = (10));

} else {
var statearr_46286_46326 = state_46246__$1;
(statearr_46286_46326[(1)] = (11));

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
});})(c__44331__auto___46298,mults,ensure_mult,p))
;
return ((function (switch__44217__auto__,c__44331__auto___46298,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_46290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46290[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_46290[(1)] = (1));

return statearr_46290;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_46246){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46291){if((e46291 instanceof Object)){
var ex__44221__auto__ = e46291;
var statearr_46292_46327 = state_46246;
(statearr_46292_46327[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46328 = state_46246;
state_46246 = G__46328;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_46246){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_46246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46298,mults,ensure_mult,p))
})();
var state__44333__auto__ = (function (){var statearr_46293 = f__44332__auto__.call(null);
(statearr_46293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46298);

return statearr_46293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46298,mults,ensure_mult,p))
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
var args46329 = [];
var len__37108__auto___46332 = arguments.length;
var i__37109__auto___46333 = (0);
while(true){
if((i__37109__auto___46333 < len__37108__auto___46332)){
args46329.push((arguments[i__37109__auto___46333]));

var G__46334 = (i__37109__auto___46333 + (1));
i__37109__auto___46333 = G__46334;
continue;
} else {
}
break;
}

var G__46331 = args46329.length;
switch (G__46331) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46329.length)].join('')));

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
var args46336 = [];
var len__37108__auto___46339 = arguments.length;
var i__37109__auto___46340 = (0);
while(true){
if((i__37109__auto___46340 < len__37108__auto___46339)){
args46336.push((arguments[i__37109__auto___46340]));

var G__46341 = (i__37109__auto___46340 + (1));
i__37109__auto___46340 = G__46341;
continue;
} else {
}
break;
}

var G__46338 = args46336.length;
switch (G__46338) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46336.length)].join('')));

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
var args46343 = [];
var len__37108__auto___46414 = arguments.length;
var i__37109__auto___46415 = (0);
while(true){
if((i__37109__auto___46415 < len__37108__auto___46414)){
args46343.push((arguments[i__37109__auto___46415]));

var G__46416 = (i__37109__auto___46415 + (1));
i__37109__auto___46415 = G__46416;
continue;
} else {
}
break;
}

var G__46345 = args46343.length;
switch (G__46345) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46343.length)].join('')));

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
var c__44331__auto___46418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46384){
var state_val_46385 = (state_46384[(1)]);
if((state_val_46385 === (7))){
var state_46384__$1 = state_46384;
var statearr_46386_46419 = state_46384__$1;
(statearr_46386_46419[(2)] = null);

(statearr_46386_46419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (1))){
var state_46384__$1 = state_46384;
var statearr_46387_46420 = state_46384__$1;
(statearr_46387_46420[(2)] = null);

(statearr_46387_46420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (4))){
var inst_46348 = (state_46384[(7)]);
var inst_46350 = (inst_46348 < cnt);
var state_46384__$1 = state_46384;
if(cljs.core.truth_(inst_46350)){
var statearr_46388_46421 = state_46384__$1;
(statearr_46388_46421[(1)] = (6));

} else {
var statearr_46389_46422 = state_46384__$1;
(statearr_46389_46422[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (15))){
var inst_46380 = (state_46384[(2)]);
var state_46384__$1 = state_46384;
var statearr_46390_46423 = state_46384__$1;
(statearr_46390_46423[(2)] = inst_46380);

(statearr_46390_46423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (13))){
var inst_46373 = cljs.core.async.close_BANG_.call(null,out);
var state_46384__$1 = state_46384;
var statearr_46391_46424 = state_46384__$1;
(statearr_46391_46424[(2)] = inst_46373);

(statearr_46391_46424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (6))){
var state_46384__$1 = state_46384;
var statearr_46392_46425 = state_46384__$1;
(statearr_46392_46425[(2)] = null);

(statearr_46392_46425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (3))){
var inst_46382 = (state_46384[(2)]);
var state_46384__$1 = state_46384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46384__$1,inst_46382);
} else {
if((state_val_46385 === (12))){
var inst_46370 = (state_46384[(8)]);
var inst_46370__$1 = (state_46384[(2)]);
var inst_46371 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46370__$1);
var state_46384__$1 = (function (){var statearr_46393 = state_46384;
(statearr_46393[(8)] = inst_46370__$1);

return statearr_46393;
})();
if(cljs.core.truth_(inst_46371)){
var statearr_46394_46426 = state_46384__$1;
(statearr_46394_46426[(1)] = (13));

} else {
var statearr_46395_46427 = state_46384__$1;
(statearr_46395_46427[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (2))){
var inst_46347 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_46348 = (0);
var state_46384__$1 = (function (){var statearr_46396 = state_46384;
(statearr_46396[(7)] = inst_46348);

(statearr_46396[(9)] = inst_46347);

return statearr_46396;
})();
var statearr_46397_46428 = state_46384__$1;
(statearr_46397_46428[(2)] = null);

(statearr_46397_46428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (11))){
var inst_46348 = (state_46384[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46384,(10),Object,null,(9));
var inst_46357 = chs__$1.call(null,inst_46348);
var inst_46358 = done.call(null,inst_46348);
var inst_46359 = cljs.core.async.take_BANG_.call(null,inst_46357,inst_46358);
var state_46384__$1 = state_46384;
var statearr_46398_46429 = state_46384__$1;
(statearr_46398_46429[(2)] = inst_46359);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46384__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (9))){
var inst_46348 = (state_46384[(7)]);
var inst_46361 = (state_46384[(2)]);
var inst_46362 = (inst_46348 + (1));
var inst_46348__$1 = inst_46362;
var state_46384__$1 = (function (){var statearr_46399 = state_46384;
(statearr_46399[(7)] = inst_46348__$1);

(statearr_46399[(10)] = inst_46361);

return statearr_46399;
})();
var statearr_46400_46430 = state_46384__$1;
(statearr_46400_46430[(2)] = null);

(statearr_46400_46430[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (5))){
var inst_46368 = (state_46384[(2)]);
var state_46384__$1 = (function (){var statearr_46401 = state_46384;
(statearr_46401[(11)] = inst_46368);

return statearr_46401;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46384__$1,(12),dchan);
} else {
if((state_val_46385 === (14))){
var inst_46370 = (state_46384[(8)]);
var inst_46375 = cljs.core.apply.call(null,f,inst_46370);
var state_46384__$1 = state_46384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46384__$1,(16),out,inst_46375);
} else {
if((state_val_46385 === (16))){
var inst_46377 = (state_46384[(2)]);
var state_46384__$1 = (function (){var statearr_46402 = state_46384;
(statearr_46402[(12)] = inst_46377);

return statearr_46402;
})();
var statearr_46403_46431 = state_46384__$1;
(statearr_46403_46431[(2)] = null);

(statearr_46403_46431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (10))){
var inst_46352 = (state_46384[(2)]);
var inst_46353 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_46384__$1 = (function (){var statearr_46404 = state_46384;
(statearr_46404[(13)] = inst_46352);

return statearr_46404;
})();
var statearr_46405_46432 = state_46384__$1;
(statearr_46405_46432[(2)] = inst_46353);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46384__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46385 === (8))){
var inst_46366 = (state_46384[(2)]);
var state_46384__$1 = state_46384;
var statearr_46406_46433 = state_46384__$1;
(statearr_46406_46433[(2)] = inst_46366);

(statearr_46406_46433[(1)] = (5));


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
});})(c__44331__auto___46418,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__44217__auto__,c__44331__auto___46418,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_46410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46410[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_46410[(1)] = (1));

return statearr_46410;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_46384){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46411){if((e46411 instanceof Object)){
var ex__44221__auto__ = e46411;
var statearr_46412_46434 = state_46384;
(statearr_46412_46434[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46435 = state_46384;
state_46384 = G__46435;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_46384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_46384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46418,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44333__auto__ = (function (){var statearr_46413 = f__44332__auto__.call(null);
(statearr_46413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46418);

return statearr_46413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46418,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args46437 = [];
var len__37108__auto___46495 = arguments.length;
var i__37109__auto___46496 = (0);
while(true){
if((i__37109__auto___46496 < len__37108__auto___46495)){
args46437.push((arguments[i__37109__auto___46496]));

var G__46497 = (i__37109__auto___46496 + (1));
i__37109__auto___46496 = G__46497;
continue;
} else {
}
break;
}

var G__46439 = args46437.length;
switch (G__46439) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46437.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44331__auto___46499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46499,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46499,out){
return (function (state_46471){
var state_val_46472 = (state_46471[(1)]);
if((state_val_46472 === (7))){
var inst_46450 = (state_46471[(7)]);
var inst_46451 = (state_46471[(8)]);
var inst_46450__$1 = (state_46471[(2)]);
var inst_46451__$1 = cljs.core.nth.call(null,inst_46450__$1,(0),null);
var inst_46452 = cljs.core.nth.call(null,inst_46450__$1,(1),null);
var inst_46453 = (inst_46451__$1 == null);
var state_46471__$1 = (function (){var statearr_46473 = state_46471;
(statearr_46473[(9)] = inst_46452);

(statearr_46473[(7)] = inst_46450__$1);

(statearr_46473[(8)] = inst_46451__$1);

return statearr_46473;
})();
if(cljs.core.truth_(inst_46453)){
var statearr_46474_46500 = state_46471__$1;
(statearr_46474_46500[(1)] = (8));

} else {
var statearr_46475_46501 = state_46471__$1;
(statearr_46475_46501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (1))){
var inst_46440 = cljs.core.vec.call(null,chs);
var inst_46441 = inst_46440;
var state_46471__$1 = (function (){var statearr_46476 = state_46471;
(statearr_46476[(10)] = inst_46441);

return statearr_46476;
})();
var statearr_46477_46502 = state_46471__$1;
(statearr_46477_46502[(2)] = null);

(statearr_46477_46502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (4))){
var inst_46441 = (state_46471[(10)]);
var state_46471__$1 = state_46471;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46471__$1,(7),inst_46441);
} else {
if((state_val_46472 === (6))){
var inst_46467 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46478_46503 = state_46471__$1;
(statearr_46478_46503[(2)] = inst_46467);

(statearr_46478_46503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (3))){
var inst_46469 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46471__$1,inst_46469);
} else {
if((state_val_46472 === (2))){
var inst_46441 = (state_46471[(10)]);
var inst_46443 = cljs.core.count.call(null,inst_46441);
var inst_46444 = (inst_46443 > (0));
var state_46471__$1 = state_46471;
if(cljs.core.truth_(inst_46444)){
var statearr_46480_46504 = state_46471__$1;
(statearr_46480_46504[(1)] = (4));

} else {
var statearr_46481_46505 = state_46471__$1;
(statearr_46481_46505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (11))){
var inst_46441 = (state_46471[(10)]);
var inst_46460 = (state_46471[(2)]);
var tmp46479 = inst_46441;
var inst_46441__$1 = tmp46479;
var state_46471__$1 = (function (){var statearr_46482 = state_46471;
(statearr_46482[(11)] = inst_46460);

(statearr_46482[(10)] = inst_46441__$1);

return statearr_46482;
})();
var statearr_46483_46506 = state_46471__$1;
(statearr_46483_46506[(2)] = null);

(statearr_46483_46506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (9))){
var inst_46451 = (state_46471[(8)]);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46471__$1,(11),out,inst_46451);
} else {
if((state_val_46472 === (5))){
var inst_46465 = cljs.core.async.close_BANG_.call(null,out);
var state_46471__$1 = state_46471;
var statearr_46484_46507 = state_46471__$1;
(statearr_46484_46507[(2)] = inst_46465);

(statearr_46484_46507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (10))){
var inst_46463 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46485_46508 = state_46471__$1;
(statearr_46485_46508[(2)] = inst_46463);

(statearr_46485_46508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (8))){
var inst_46452 = (state_46471[(9)]);
var inst_46441 = (state_46471[(10)]);
var inst_46450 = (state_46471[(7)]);
var inst_46451 = (state_46471[(8)]);
var inst_46455 = (function (){var cs = inst_46441;
var vec__46446 = inst_46450;
var v = inst_46451;
var c = inst_46452;
return ((function (cs,vec__46446,v,c,inst_46452,inst_46441,inst_46450,inst_46451,state_val_46472,c__44331__auto___46499,out){
return (function (p1__46436_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__46436_SHARP_);
});
;})(cs,vec__46446,v,c,inst_46452,inst_46441,inst_46450,inst_46451,state_val_46472,c__44331__auto___46499,out))
})();
var inst_46456 = cljs.core.filterv.call(null,inst_46455,inst_46441);
var inst_46441__$1 = inst_46456;
var state_46471__$1 = (function (){var statearr_46486 = state_46471;
(statearr_46486[(10)] = inst_46441__$1);

return statearr_46486;
})();
var statearr_46487_46509 = state_46471__$1;
(statearr_46487_46509[(2)] = null);

(statearr_46487_46509[(1)] = (2));


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
});})(c__44331__auto___46499,out))
;
return ((function (switch__44217__auto__,c__44331__auto___46499,out){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_46491 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46491[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_46491[(1)] = (1));

return statearr_46491;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_46471){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46492){if((e46492 instanceof Object)){
var ex__44221__auto__ = e46492;
var statearr_46493_46510 = state_46471;
(statearr_46493_46510[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46511 = state_46471;
state_46471 = G__46511;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_46471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_46471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46499,out))
})();
var state__44333__auto__ = (function (){var statearr_46494 = f__44332__auto__.call(null);
(statearr_46494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46499);

return statearr_46494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46499,out))
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
var args46512 = [];
var len__37108__auto___46561 = arguments.length;
var i__37109__auto___46562 = (0);
while(true){
if((i__37109__auto___46562 < len__37108__auto___46561)){
args46512.push((arguments[i__37109__auto___46562]));

var G__46563 = (i__37109__auto___46562 + (1));
i__37109__auto___46562 = G__46563;
continue;
} else {
}
break;
}

var G__46514 = args46512.length;
switch (G__46514) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46512.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44331__auto___46565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46565,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46565,out){
return (function (state_46538){
var state_val_46539 = (state_46538[(1)]);
if((state_val_46539 === (7))){
var inst_46520 = (state_46538[(7)]);
var inst_46520__$1 = (state_46538[(2)]);
var inst_46521 = (inst_46520__$1 == null);
var inst_46522 = cljs.core.not.call(null,inst_46521);
var state_46538__$1 = (function (){var statearr_46540 = state_46538;
(statearr_46540[(7)] = inst_46520__$1);

return statearr_46540;
})();
if(inst_46522){
var statearr_46541_46566 = state_46538__$1;
(statearr_46541_46566[(1)] = (8));

} else {
var statearr_46542_46567 = state_46538__$1;
(statearr_46542_46567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (1))){
var inst_46515 = (0);
var state_46538__$1 = (function (){var statearr_46543 = state_46538;
(statearr_46543[(8)] = inst_46515);

return statearr_46543;
})();
var statearr_46544_46568 = state_46538__$1;
(statearr_46544_46568[(2)] = null);

(statearr_46544_46568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (4))){
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46538__$1,(7),ch);
} else {
if((state_val_46539 === (6))){
var inst_46533 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46545_46569 = state_46538__$1;
(statearr_46545_46569[(2)] = inst_46533);

(statearr_46545_46569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (3))){
var inst_46535 = (state_46538[(2)]);
var inst_46536 = cljs.core.async.close_BANG_.call(null,out);
var state_46538__$1 = (function (){var statearr_46546 = state_46538;
(statearr_46546[(9)] = inst_46535);

return statearr_46546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46538__$1,inst_46536);
} else {
if((state_val_46539 === (2))){
var inst_46515 = (state_46538[(8)]);
var inst_46517 = (inst_46515 < n);
var state_46538__$1 = state_46538;
if(cljs.core.truth_(inst_46517)){
var statearr_46547_46570 = state_46538__$1;
(statearr_46547_46570[(1)] = (4));

} else {
var statearr_46548_46571 = state_46538__$1;
(statearr_46548_46571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (11))){
var inst_46515 = (state_46538[(8)]);
var inst_46525 = (state_46538[(2)]);
var inst_46526 = (inst_46515 + (1));
var inst_46515__$1 = inst_46526;
var state_46538__$1 = (function (){var statearr_46549 = state_46538;
(statearr_46549[(10)] = inst_46525);

(statearr_46549[(8)] = inst_46515__$1);

return statearr_46549;
})();
var statearr_46550_46572 = state_46538__$1;
(statearr_46550_46572[(2)] = null);

(statearr_46550_46572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (9))){
var state_46538__$1 = state_46538;
var statearr_46551_46573 = state_46538__$1;
(statearr_46551_46573[(2)] = null);

(statearr_46551_46573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (5))){
var state_46538__$1 = state_46538;
var statearr_46552_46574 = state_46538__$1;
(statearr_46552_46574[(2)] = null);

(statearr_46552_46574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (10))){
var inst_46530 = (state_46538[(2)]);
var state_46538__$1 = state_46538;
var statearr_46553_46575 = state_46538__$1;
(statearr_46553_46575[(2)] = inst_46530);

(statearr_46553_46575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46539 === (8))){
var inst_46520 = (state_46538[(7)]);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46538__$1,(11),out,inst_46520);
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
});})(c__44331__auto___46565,out))
;
return ((function (switch__44217__auto__,c__44331__auto___46565,out){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_46557 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46557[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_46557[(1)] = (1));

return statearr_46557;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_46538){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46558){if((e46558 instanceof Object)){
var ex__44221__auto__ = e46558;
var statearr_46559_46576 = state_46538;
(statearr_46559_46576[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46577 = state_46538;
state_46538 = G__46577;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_46538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_46538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46565,out))
})();
var state__44333__auto__ = (function (){var statearr_46560 = f__44332__auto__.call(null);
(statearr_46560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46565);

return statearr_46560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46565,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46585 = (function (f,ch,meta46586){
this.f = f;
this.ch = ch;
this.meta46586 = meta46586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46587,meta46586__$1){
var self__ = this;
var _46587__$1 = this;
return (new cljs.core.async.t_cljs$core$async46585(self__.f,self__.ch,meta46586__$1));
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46587){
var self__ = this;
var _46587__$1 = this;
return self__.meta46586;
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async46588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46588 = (function (f,ch,meta46586,_,fn1,meta46589){
this.f = f;
this.ch = ch;
this.meta46586 = meta46586;
this._ = _;
this.fn1 = fn1;
this.meta46589 = meta46589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46590,meta46589__$1){
var self__ = this;
var _46590__$1 = this;
return (new cljs.core.async.t_cljs$core$async46588(self__.f,self__.ch,self__.meta46586,self__._,self__.fn1,meta46589__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46590){
var self__ = this;
var _46590__$1 = this;
return self__.meta46589;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46588.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46588.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46588.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46588.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46578_SHARP_){
return f1.call(null,(((p1__46578_SHARP_ == null))?null:self__.f.call(null,p1__46578_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46588.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46586","meta46586",213826587,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46585","cljs.core.async/t_cljs$core$async46585",-1062350084,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46589","meta46589",839907485,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46588";

cljs.core.async.t_cljs$core$async46588.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46588");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async46588 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46588(f__$1,ch__$1,meta46586__$1,___$2,fn1__$1,meta46589){
return (new cljs.core.async.t_cljs$core$async46588(f__$1,ch__$1,meta46586__$1,___$2,fn1__$1,meta46589));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46588(self__.f,self__.ch,self__.meta46586,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46586","meta46586",213826587,null)], null);
});

cljs.core.async.t_cljs$core$async46585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46585";

cljs.core.async.t_cljs$core$async46585.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46585");
});

cljs.core.async.__GT_t_cljs$core$async46585 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46585(f__$1,ch__$1,meta46586){
return (new cljs.core.async.t_cljs$core$async46585(f__$1,ch__$1,meta46586));
});

}

return (new cljs.core.async.t_cljs$core$async46585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async46594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46594 = (function (f,ch,meta46595){
this.f = f;
this.ch = ch;
this.meta46595 = meta46595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46596,meta46595__$1){
var self__ = this;
var _46596__$1 = this;
return (new cljs.core.async.t_cljs$core$async46594(self__.f,self__.ch,meta46595__$1));
});

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46596){
var self__ = this;
var _46596__$1 = this;
return self__.meta46595;
});

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46594.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async46594.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46595","meta46595",1782315075,null)], null);
});

cljs.core.async.t_cljs$core$async46594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46594";

cljs.core.async.t_cljs$core$async46594.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46594");
});

cljs.core.async.__GT_t_cljs$core$async46594 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46594(f__$1,ch__$1,meta46595){
return (new cljs.core.async.t_cljs$core$async46594(f__$1,ch__$1,meta46595));
});

}

return (new cljs.core.async.t_cljs$core$async46594(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async46600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46600 = (function (p,ch,meta46601){
this.p = p;
this.ch = ch;
this.meta46601 = meta46601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46602,meta46601__$1){
var self__ = this;
var _46602__$1 = this;
return (new cljs.core.async.t_cljs$core$async46600(self__.p,self__.ch,meta46601__$1));
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46602){
var self__ = this;
var _46602__$1 = this;
return self__.meta46601;
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46601","meta46601",404800969,null)], null);
});

cljs.core.async.t_cljs$core$async46600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46600";

cljs.core.async.t_cljs$core$async46600.cljs$lang$ctorPrWriter = (function (this__36544__auto__,writer__36545__auto__,opt__36546__auto__){
return cljs.core._write.call(null,writer__36545__auto__,"cljs.core.async/t_cljs$core$async46600");
});

cljs.core.async.__GT_t_cljs$core$async46600 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46600(p__$1,ch__$1,meta46601){
return (new cljs.core.async.t_cljs$core$async46600(p__$1,ch__$1,meta46601));
});

}

return (new cljs.core.async.t_cljs$core$async46600(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args46603 = [];
var len__37108__auto___46647 = arguments.length;
var i__37109__auto___46648 = (0);
while(true){
if((i__37109__auto___46648 < len__37108__auto___46647)){
args46603.push((arguments[i__37109__auto___46648]));

var G__46649 = (i__37109__auto___46648 + (1));
i__37109__auto___46648 = G__46649;
continue;
} else {
}
break;
}

var G__46605 = args46603.length;
switch (G__46605) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46603.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44331__auto___46651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46651,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46651,out){
return (function (state_46626){
var state_val_46627 = (state_46626[(1)]);
if((state_val_46627 === (7))){
var inst_46622 = (state_46626[(2)]);
var state_46626__$1 = state_46626;
var statearr_46628_46652 = state_46626__$1;
(statearr_46628_46652[(2)] = inst_46622);

(statearr_46628_46652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (1))){
var state_46626__$1 = state_46626;
var statearr_46629_46653 = state_46626__$1;
(statearr_46629_46653[(2)] = null);

(statearr_46629_46653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (4))){
var inst_46608 = (state_46626[(7)]);
var inst_46608__$1 = (state_46626[(2)]);
var inst_46609 = (inst_46608__$1 == null);
var state_46626__$1 = (function (){var statearr_46630 = state_46626;
(statearr_46630[(7)] = inst_46608__$1);

return statearr_46630;
})();
if(cljs.core.truth_(inst_46609)){
var statearr_46631_46654 = state_46626__$1;
(statearr_46631_46654[(1)] = (5));

} else {
var statearr_46632_46655 = state_46626__$1;
(statearr_46632_46655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (6))){
var inst_46608 = (state_46626[(7)]);
var inst_46613 = p.call(null,inst_46608);
var state_46626__$1 = state_46626;
if(cljs.core.truth_(inst_46613)){
var statearr_46633_46656 = state_46626__$1;
(statearr_46633_46656[(1)] = (8));

} else {
var statearr_46634_46657 = state_46626__$1;
(statearr_46634_46657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (3))){
var inst_46624 = (state_46626[(2)]);
var state_46626__$1 = state_46626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46626__$1,inst_46624);
} else {
if((state_val_46627 === (2))){
var state_46626__$1 = state_46626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46626__$1,(4),ch);
} else {
if((state_val_46627 === (11))){
var inst_46616 = (state_46626[(2)]);
var state_46626__$1 = state_46626;
var statearr_46635_46658 = state_46626__$1;
(statearr_46635_46658[(2)] = inst_46616);

(statearr_46635_46658[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (9))){
var state_46626__$1 = state_46626;
var statearr_46636_46659 = state_46626__$1;
(statearr_46636_46659[(2)] = null);

(statearr_46636_46659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (5))){
var inst_46611 = cljs.core.async.close_BANG_.call(null,out);
var state_46626__$1 = state_46626;
var statearr_46637_46660 = state_46626__$1;
(statearr_46637_46660[(2)] = inst_46611);

(statearr_46637_46660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (10))){
var inst_46619 = (state_46626[(2)]);
var state_46626__$1 = (function (){var statearr_46638 = state_46626;
(statearr_46638[(8)] = inst_46619);

return statearr_46638;
})();
var statearr_46639_46661 = state_46626__$1;
(statearr_46639_46661[(2)] = null);

(statearr_46639_46661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46627 === (8))){
var inst_46608 = (state_46626[(7)]);
var state_46626__$1 = state_46626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46626__$1,(11),out,inst_46608);
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
});})(c__44331__auto___46651,out))
;
return ((function (switch__44217__auto__,c__44331__auto___46651,out){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_46643 = [null,null,null,null,null,null,null,null,null];
(statearr_46643[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_46643[(1)] = (1));

return statearr_46643;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_46626){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46644){if((e46644 instanceof Object)){
var ex__44221__auto__ = e46644;
var statearr_46645_46662 = state_46626;
(statearr_46645_46662[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46644;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46663 = state_46626;
state_46626 = G__46663;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_46626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_46626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46651,out))
})();
var state__44333__auto__ = (function (){var statearr_46646 = f__44332__auto__.call(null);
(statearr_46646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46651);

return statearr_46646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46651,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args46664 = [];
var len__37108__auto___46667 = arguments.length;
var i__37109__auto___46668 = (0);
while(true){
if((i__37109__auto___46668 < len__37108__auto___46667)){
args46664.push((arguments[i__37109__auto___46668]));

var G__46669 = (i__37109__auto___46668 + (1));
i__37109__auto___46668 = G__46669;
continue;
} else {
}
break;
}

var G__46666 = args46664.length;
switch (G__46666) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46664.length)].join('')));

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
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__){
return (function (state_46836){
var state_val_46837 = (state_46836[(1)]);
if((state_val_46837 === (7))){
var inst_46832 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46838_46879 = state_46836__$1;
(statearr_46838_46879[(2)] = inst_46832);

(statearr_46838_46879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (20))){
var inst_46802 = (state_46836[(7)]);
var inst_46813 = (state_46836[(2)]);
var inst_46814 = cljs.core.next.call(null,inst_46802);
var inst_46788 = inst_46814;
var inst_46789 = null;
var inst_46790 = (0);
var inst_46791 = (0);
var state_46836__$1 = (function (){var statearr_46839 = state_46836;
(statearr_46839[(8)] = inst_46788);

(statearr_46839[(9)] = inst_46813);

(statearr_46839[(10)] = inst_46789);

(statearr_46839[(11)] = inst_46790);

(statearr_46839[(12)] = inst_46791);

return statearr_46839;
})();
var statearr_46840_46880 = state_46836__$1;
(statearr_46840_46880[(2)] = null);

(statearr_46840_46880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (1))){
var state_46836__$1 = state_46836;
var statearr_46841_46881 = state_46836__$1;
(statearr_46841_46881[(2)] = null);

(statearr_46841_46881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (4))){
var inst_46777 = (state_46836[(13)]);
var inst_46777__$1 = (state_46836[(2)]);
var inst_46778 = (inst_46777__$1 == null);
var state_46836__$1 = (function (){var statearr_46842 = state_46836;
(statearr_46842[(13)] = inst_46777__$1);

return statearr_46842;
})();
if(cljs.core.truth_(inst_46778)){
var statearr_46843_46882 = state_46836__$1;
(statearr_46843_46882[(1)] = (5));

} else {
var statearr_46844_46883 = state_46836__$1;
(statearr_46844_46883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (15))){
var state_46836__$1 = state_46836;
var statearr_46848_46884 = state_46836__$1;
(statearr_46848_46884[(2)] = null);

(statearr_46848_46884[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (21))){
var state_46836__$1 = state_46836;
var statearr_46849_46885 = state_46836__$1;
(statearr_46849_46885[(2)] = null);

(statearr_46849_46885[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (13))){
var inst_46788 = (state_46836[(8)]);
var inst_46789 = (state_46836[(10)]);
var inst_46790 = (state_46836[(11)]);
var inst_46791 = (state_46836[(12)]);
var inst_46798 = (state_46836[(2)]);
var inst_46799 = (inst_46791 + (1));
var tmp46845 = inst_46788;
var tmp46846 = inst_46789;
var tmp46847 = inst_46790;
var inst_46788__$1 = tmp46845;
var inst_46789__$1 = tmp46846;
var inst_46790__$1 = tmp46847;
var inst_46791__$1 = inst_46799;
var state_46836__$1 = (function (){var statearr_46850 = state_46836;
(statearr_46850[(8)] = inst_46788__$1);

(statearr_46850[(14)] = inst_46798);

(statearr_46850[(10)] = inst_46789__$1);

(statearr_46850[(11)] = inst_46790__$1);

(statearr_46850[(12)] = inst_46791__$1);

return statearr_46850;
})();
var statearr_46851_46886 = state_46836__$1;
(statearr_46851_46886[(2)] = null);

(statearr_46851_46886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (22))){
var state_46836__$1 = state_46836;
var statearr_46852_46887 = state_46836__$1;
(statearr_46852_46887[(2)] = null);

(statearr_46852_46887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (6))){
var inst_46777 = (state_46836[(13)]);
var inst_46786 = f.call(null,inst_46777);
var inst_46787 = cljs.core.seq.call(null,inst_46786);
var inst_46788 = inst_46787;
var inst_46789 = null;
var inst_46790 = (0);
var inst_46791 = (0);
var state_46836__$1 = (function (){var statearr_46853 = state_46836;
(statearr_46853[(8)] = inst_46788);

(statearr_46853[(10)] = inst_46789);

(statearr_46853[(11)] = inst_46790);

(statearr_46853[(12)] = inst_46791);

return statearr_46853;
})();
var statearr_46854_46888 = state_46836__$1;
(statearr_46854_46888[(2)] = null);

(statearr_46854_46888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (17))){
var inst_46802 = (state_46836[(7)]);
var inst_46806 = cljs.core.chunk_first.call(null,inst_46802);
var inst_46807 = cljs.core.chunk_rest.call(null,inst_46802);
var inst_46808 = cljs.core.count.call(null,inst_46806);
var inst_46788 = inst_46807;
var inst_46789 = inst_46806;
var inst_46790 = inst_46808;
var inst_46791 = (0);
var state_46836__$1 = (function (){var statearr_46855 = state_46836;
(statearr_46855[(8)] = inst_46788);

(statearr_46855[(10)] = inst_46789);

(statearr_46855[(11)] = inst_46790);

(statearr_46855[(12)] = inst_46791);

return statearr_46855;
})();
var statearr_46856_46889 = state_46836__$1;
(statearr_46856_46889[(2)] = null);

(statearr_46856_46889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (3))){
var inst_46834 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46836__$1,inst_46834);
} else {
if((state_val_46837 === (12))){
var inst_46822 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46857_46890 = state_46836__$1;
(statearr_46857_46890[(2)] = inst_46822);

(statearr_46857_46890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (2))){
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46836__$1,(4),in$);
} else {
if((state_val_46837 === (23))){
var inst_46830 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46858_46891 = state_46836__$1;
(statearr_46858_46891[(2)] = inst_46830);

(statearr_46858_46891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (19))){
var inst_46817 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46859_46892 = state_46836__$1;
(statearr_46859_46892[(2)] = inst_46817);

(statearr_46859_46892[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (11))){
var inst_46788 = (state_46836[(8)]);
var inst_46802 = (state_46836[(7)]);
var inst_46802__$1 = cljs.core.seq.call(null,inst_46788);
var state_46836__$1 = (function (){var statearr_46860 = state_46836;
(statearr_46860[(7)] = inst_46802__$1);

return statearr_46860;
})();
if(inst_46802__$1){
var statearr_46861_46893 = state_46836__$1;
(statearr_46861_46893[(1)] = (14));

} else {
var statearr_46862_46894 = state_46836__$1;
(statearr_46862_46894[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (9))){
var inst_46824 = (state_46836[(2)]);
var inst_46825 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_46836__$1 = (function (){var statearr_46863 = state_46836;
(statearr_46863[(15)] = inst_46824);

return statearr_46863;
})();
if(cljs.core.truth_(inst_46825)){
var statearr_46864_46895 = state_46836__$1;
(statearr_46864_46895[(1)] = (21));

} else {
var statearr_46865_46896 = state_46836__$1;
(statearr_46865_46896[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (5))){
var inst_46780 = cljs.core.async.close_BANG_.call(null,out);
var state_46836__$1 = state_46836;
var statearr_46866_46897 = state_46836__$1;
(statearr_46866_46897[(2)] = inst_46780);

(statearr_46866_46897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (14))){
var inst_46802 = (state_46836[(7)]);
var inst_46804 = cljs.core.chunked_seq_QMARK_.call(null,inst_46802);
var state_46836__$1 = state_46836;
if(inst_46804){
var statearr_46867_46898 = state_46836__$1;
(statearr_46867_46898[(1)] = (17));

} else {
var statearr_46868_46899 = state_46836__$1;
(statearr_46868_46899[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (16))){
var inst_46820 = (state_46836[(2)]);
var state_46836__$1 = state_46836;
var statearr_46869_46900 = state_46836__$1;
(statearr_46869_46900[(2)] = inst_46820);

(statearr_46869_46900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46837 === (10))){
var inst_46789 = (state_46836[(10)]);
var inst_46791 = (state_46836[(12)]);
var inst_46796 = cljs.core._nth.call(null,inst_46789,inst_46791);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46836__$1,(13),out,inst_46796);
} else {
if((state_val_46837 === (18))){
var inst_46802 = (state_46836[(7)]);
var inst_46811 = cljs.core.first.call(null,inst_46802);
var state_46836__$1 = state_46836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46836__$1,(20),out,inst_46811);
} else {
if((state_val_46837 === (8))){
var inst_46790 = (state_46836[(11)]);
var inst_46791 = (state_46836[(12)]);
var inst_46793 = (inst_46791 < inst_46790);
var inst_46794 = inst_46793;
var state_46836__$1 = state_46836;
if(cljs.core.truth_(inst_46794)){
var statearr_46870_46901 = state_46836__$1;
(statearr_46870_46901[(1)] = (10));

} else {
var statearr_46871_46902 = state_46836__$1;
(statearr_46871_46902[(1)] = (11));

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
});})(c__44331__auto__))
;
return ((function (switch__44217__auto__,c__44331__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44218__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44218__auto____0 = (function (){
var statearr_46875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46875[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44218__auto__);

(statearr_46875[(1)] = (1));

return statearr_46875;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44218__auto____1 = (function (state_46836){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46876){if((e46876 instanceof Object)){
var ex__44221__auto__ = e46876;
var statearr_46877_46903 = state_46836;
(statearr_46877_46903[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46904 = state_46836;
state_46836 = G__46904;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44218__auto__ = function(state_46836){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44218__auto____1.call(this,state_46836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44218__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44218__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__))
})();
var state__44333__auto__ = (function (){var statearr_46878 = f__44332__auto__.call(null);
(statearr_46878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_46878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__))
);

return c__44331__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args46905 = [];
var len__37108__auto___46908 = arguments.length;
var i__37109__auto___46909 = (0);
while(true){
if((i__37109__auto___46909 < len__37108__auto___46908)){
args46905.push((arguments[i__37109__auto___46909]));

var G__46910 = (i__37109__auto___46909 + (1));
i__37109__auto___46909 = G__46910;
continue;
} else {
}
break;
}

var G__46907 = args46905.length;
switch (G__46907) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46905.length)].join('')));

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
var args46912 = [];
var len__37108__auto___46915 = arguments.length;
var i__37109__auto___46916 = (0);
while(true){
if((i__37109__auto___46916 < len__37108__auto___46915)){
args46912.push((arguments[i__37109__auto___46916]));

var G__46917 = (i__37109__auto___46916 + (1));
i__37109__auto___46916 = G__46917;
continue;
} else {
}
break;
}

var G__46914 = args46912.length;
switch (G__46914) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46912.length)].join('')));

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
var args46919 = [];
var len__37108__auto___46970 = arguments.length;
var i__37109__auto___46971 = (0);
while(true){
if((i__37109__auto___46971 < len__37108__auto___46970)){
args46919.push((arguments[i__37109__auto___46971]));

var G__46972 = (i__37109__auto___46971 + (1));
i__37109__auto___46971 = G__46972;
continue;
} else {
}
break;
}

var G__46921 = args46919.length;
switch (G__46921) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46919.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44331__auto___46974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___46974,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___46974,out){
return (function (state_46945){
var state_val_46946 = (state_46945[(1)]);
if((state_val_46946 === (7))){
var inst_46940 = (state_46945[(2)]);
var state_46945__$1 = state_46945;
var statearr_46947_46975 = state_46945__$1;
(statearr_46947_46975[(2)] = inst_46940);

(statearr_46947_46975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (1))){
var inst_46922 = null;
var state_46945__$1 = (function (){var statearr_46948 = state_46945;
(statearr_46948[(7)] = inst_46922);

return statearr_46948;
})();
var statearr_46949_46976 = state_46945__$1;
(statearr_46949_46976[(2)] = null);

(statearr_46949_46976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (4))){
var inst_46925 = (state_46945[(8)]);
var inst_46925__$1 = (state_46945[(2)]);
var inst_46926 = (inst_46925__$1 == null);
var inst_46927 = cljs.core.not.call(null,inst_46926);
var state_46945__$1 = (function (){var statearr_46950 = state_46945;
(statearr_46950[(8)] = inst_46925__$1);

return statearr_46950;
})();
if(inst_46927){
var statearr_46951_46977 = state_46945__$1;
(statearr_46951_46977[(1)] = (5));

} else {
var statearr_46952_46978 = state_46945__$1;
(statearr_46952_46978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (6))){
var state_46945__$1 = state_46945;
var statearr_46953_46979 = state_46945__$1;
(statearr_46953_46979[(2)] = null);

(statearr_46953_46979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (3))){
var inst_46942 = (state_46945[(2)]);
var inst_46943 = cljs.core.async.close_BANG_.call(null,out);
var state_46945__$1 = (function (){var statearr_46954 = state_46945;
(statearr_46954[(9)] = inst_46942);

return statearr_46954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46945__$1,inst_46943);
} else {
if((state_val_46946 === (2))){
var state_46945__$1 = state_46945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46945__$1,(4),ch);
} else {
if((state_val_46946 === (11))){
var inst_46925 = (state_46945[(8)]);
var inst_46934 = (state_46945[(2)]);
var inst_46922 = inst_46925;
var state_46945__$1 = (function (){var statearr_46955 = state_46945;
(statearr_46955[(10)] = inst_46934);

(statearr_46955[(7)] = inst_46922);

return statearr_46955;
})();
var statearr_46956_46980 = state_46945__$1;
(statearr_46956_46980[(2)] = null);

(statearr_46956_46980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (9))){
var inst_46925 = (state_46945[(8)]);
var state_46945__$1 = state_46945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46945__$1,(11),out,inst_46925);
} else {
if((state_val_46946 === (5))){
var inst_46925 = (state_46945[(8)]);
var inst_46922 = (state_46945[(7)]);
var inst_46929 = cljs.core._EQ_.call(null,inst_46925,inst_46922);
var state_46945__$1 = state_46945;
if(inst_46929){
var statearr_46958_46981 = state_46945__$1;
(statearr_46958_46981[(1)] = (8));

} else {
var statearr_46959_46982 = state_46945__$1;
(statearr_46959_46982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (10))){
var inst_46937 = (state_46945[(2)]);
var state_46945__$1 = state_46945;
var statearr_46960_46983 = state_46945__$1;
(statearr_46960_46983[(2)] = inst_46937);

(statearr_46960_46983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46946 === (8))){
var inst_46922 = (state_46945[(7)]);
var tmp46957 = inst_46922;
var inst_46922__$1 = tmp46957;
var state_46945__$1 = (function (){var statearr_46961 = state_46945;
(statearr_46961[(7)] = inst_46922__$1);

return statearr_46961;
})();
var statearr_46962_46984 = state_46945__$1;
(statearr_46962_46984[(2)] = null);

(statearr_46962_46984[(1)] = (2));


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
});})(c__44331__auto___46974,out))
;
return ((function (switch__44217__auto__,c__44331__auto___46974,out){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_46966 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46966[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_46966[(1)] = (1));

return statearr_46966;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_46945){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_46945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e46967){if((e46967 instanceof Object)){
var ex__44221__auto__ = e46967;
var statearr_46968_46985 = state_46945;
(statearr_46968_46985[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46986 = state_46945;
state_46945 = G__46986;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_46945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_46945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___46974,out))
})();
var state__44333__auto__ = (function (){var statearr_46969 = f__44332__auto__.call(null);
(statearr_46969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___46974);

return statearr_46969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___46974,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args46987 = [];
var len__37108__auto___47057 = arguments.length;
var i__37109__auto___47058 = (0);
while(true){
if((i__37109__auto___47058 < len__37108__auto___47057)){
args46987.push((arguments[i__37109__auto___47058]));

var G__47059 = (i__37109__auto___47058 + (1));
i__37109__auto___47058 = G__47059;
continue;
} else {
}
break;
}

var G__46989 = args46987.length;
switch (G__46989) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46987.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44331__auto___47061 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___47061,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___47061,out){
return (function (state_47027){
var state_val_47028 = (state_47027[(1)]);
if((state_val_47028 === (7))){
var inst_47023 = (state_47027[(2)]);
var state_47027__$1 = state_47027;
var statearr_47029_47062 = state_47027__$1;
(statearr_47029_47062[(2)] = inst_47023);

(statearr_47029_47062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (1))){
var inst_46990 = (new Array(n));
var inst_46991 = inst_46990;
var inst_46992 = (0);
var state_47027__$1 = (function (){var statearr_47030 = state_47027;
(statearr_47030[(7)] = inst_46991);

(statearr_47030[(8)] = inst_46992);

return statearr_47030;
})();
var statearr_47031_47063 = state_47027__$1;
(statearr_47031_47063[(2)] = null);

(statearr_47031_47063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (4))){
var inst_46995 = (state_47027[(9)]);
var inst_46995__$1 = (state_47027[(2)]);
var inst_46996 = (inst_46995__$1 == null);
var inst_46997 = cljs.core.not.call(null,inst_46996);
var state_47027__$1 = (function (){var statearr_47032 = state_47027;
(statearr_47032[(9)] = inst_46995__$1);

return statearr_47032;
})();
if(inst_46997){
var statearr_47033_47064 = state_47027__$1;
(statearr_47033_47064[(1)] = (5));

} else {
var statearr_47034_47065 = state_47027__$1;
(statearr_47034_47065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (15))){
var inst_47017 = (state_47027[(2)]);
var state_47027__$1 = state_47027;
var statearr_47035_47066 = state_47027__$1;
(statearr_47035_47066[(2)] = inst_47017);

(statearr_47035_47066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (13))){
var state_47027__$1 = state_47027;
var statearr_47036_47067 = state_47027__$1;
(statearr_47036_47067[(2)] = null);

(statearr_47036_47067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (6))){
var inst_46992 = (state_47027[(8)]);
var inst_47013 = (inst_46992 > (0));
var state_47027__$1 = state_47027;
if(cljs.core.truth_(inst_47013)){
var statearr_47037_47068 = state_47027__$1;
(statearr_47037_47068[(1)] = (12));

} else {
var statearr_47038_47069 = state_47027__$1;
(statearr_47038_47069[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (3))){
var inst_47025 = (state_47027[(2)]);
var state_47027__$1 = state_47027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47027__$1,inst_47025);
} else {
if((state_val_47028 === (12))){
var inst_46991 = (state_47027[(7)]);
var inst_47015 = cljs.core.vec.call(null,inst_46991);
var state_47027__$1 = state_47027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47027__$1,(15),out,inst_47015);
} else {
if((state_val_47028 === (2))){
var state_47027__$1 = state_47027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47027__$1,(4),ch);
} else {
if((state_val_47028 === (11))){
var inst_47007 = (state_47027[(2)]);
var inst_47008 = (new Array(n));
var inst_46991 = inst_47008;
var inst_46992 = (0);
var state_47027__$1 = (function (){var statearr_47039 = state_47027;
(statearr_47039[(7)] = inst_46991);

(statearr_47039[(10)] = inst_47007);

(statearr_47039[(8)] = inst_46992);

return statearr_47039;
})();
var statearr_47040_47070 = state_47027__$1;
(statearr_47040_47070[(2)] = null);

(statearr_47040_47070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (9))){
var inst_46991 = (state_47027[(7)]);
var inst_47005 = cljs.core.vec.call(null,inst_46991);
var state_47027__$1 = state_47027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47027__$1,(11),out,inst_47005);
} else {
if((state_val_47028 === (5))){
var inst_46991 = (state_47027[(7)]);
var inst_47000 = (state_47027[(11)]);
var inst_46995 = (state_47027[(9)]);
var inst_46992 = (state_47027[(8)]);
var inst_46999 = (inst_46991[inst_46992] = inst_46995);
var inst_47000__$1 = (inst_46992 + (1));
var inst_47001 = (inst_47000__$1 < n);
var state_47027__$1 = (function (){var statearr_47041 = state_47027;
(statearr_47041[(11)] = inst_47000__$1);

(statearr_47041[(12)] = inst_46999);

return statearr_47041;
})();
if(cljs.core.truth_(inst_47001)){
var statearr_47042_47071 = state_47027__$1;
(statearr_47042_47071[(1)] = (8));

} else {
var statearr_47043_47072 = state_47027__$1;
(statearr_47043_47072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (14))){
var inst_47020 = (state_47027[(2)]);
var inst_47021 = cljs.core.async.close_BANG_.call(null,out);
var state_47027__$1 = (function (){var statearr_47045 = state_47027;
(statearr_47045[(13)] = inst_47020);

return statearr_47045;
})();
var statearr_47046_47073 = state_47027__$1;
(statearr_47046_47073[(2)] = inst_47021);

(statearr_47046_47073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (10))){
var inst_47011 = (state_47027[(2)]);
var state_47027__$1 = state_47027;
var statearr_47047_47074 = state_47027__$1;
(statearr_47047_47074[(2)] = inst_47011);

(statearr_47047_47074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47028 === (8))){
var inst_46991 = (state_47027[(7)]);
var inst_47000 = (state_47027[(11)]);
var tmp47044 = inst_46991;
var inst_46991__$1 = tmp47044;
var inst_46992 = inst_47000;
var state_47027__$1 = (function (){var statearr_47048 = state_47027;
(statearr_47048[(7)] = inst_46991__$1);

(statearr_47048[(8)] = inst_46992);

return statearr_47048;
})();
var statearr_47049_47075 = state_47027__$1;
(statearr_47049_47075[(2)] = null);

(statearr_47049_47075[(1)] = (2));


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
});})(c__44331__auto___47061,out))
;
return ((function (switch__44217__auto__,c__44331__auto___47061,out){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_47053 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47053[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_47053[(1)] = (1));

return statearr_47053;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_47027){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_47027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e47054){if((e47054 instanceof Object)){
var ex__44221__auto__ = e47054;
var statearr_47055_47076 = state_47027;
(statearr_47055_47076[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47077 = state_47027;
state_47027 = G__47077;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_47027){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_47027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___47061,out))
})();
var state__44333__auto__ = (function (){var statearr_47056 = f__44332__auto__.call(null);
(statearr_47056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___47061);

return statearr_47056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___47061,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args47078 = [];
var len__37108__auto___47152 = arguments.length;
var i__37109__auto___47153 = (0);
while(true){
if((i__37109__auto___47153 < len__37108__auto___47152)){
args47078.push((arguments[i__37109__auto___47153]));

var G__47154 = (i__37109__auto___47153 + (1));
i__37109__auto___47153 = G__47154;
continue;
} else {
}
break;
}

var G__47080 = args47078.length;
switch (G__47080) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args47078.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__44331__auto___47156 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___47156,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___47156,out){
return (function (state_47122){
var state_val_47123 = (state_47122[(1)]);
if((state_val_47123 === (7))){
var inst_47118 = (state_47122[(2)]);
var state_47122__$1 = state_47122;
var statearr_47124_47157 = state_47122__$1;
(statearr_47124_47157[(2)] = inst_47118);

(statearr_47124_47157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (1))){
var inst_47081 = [];
var inst_47082 = inst_47081;
var inst_47083 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47122__$1 = (function (){var statearr_47125 = state_47122;
(statearr_47125[(7)] = inst_47083);

(statearr_47125[(8)] = inst_47082);

return statearr_47125;
})();
var statearr_47126_47158 = state_47122__$1;
(statearr_47126_47158[(2)] = null);

(statearr_47126_47158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (4))){
var inst_47086 = (state_47122[(9)]);
var inst_47086__$1 = (state_47122[(2)]);
var inst_47087 = (inst_47086__$1 == null);
var inst_47088 = cljs.core.not.call(null,inst_47087);
var state_47122__$1 = (function (){var statearr_47127 = state_47122;
(statearr_47127[(9)] = inst_47086__$1);

return statearr_47127;
})();
if(inst_47088){
var statearr_47128_47159 = state_47122__$1;
(statearr_47128_47159[(1)] = (5));

} else {
var statearr_47129_47160 = state_47122__$1;
(statearr_47129_47160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (15))){
var inst_47112 = (state_47122[(2)]);
var state_47122__$1 = state_47122;
var statearr_47130_47161 = state_47122__$1;
(statearr_47130_47161[(2)] = inst_47112);

(statearr_47130_47161[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (13))){
var state_47122__$1 = state_47122;
var statearr_47131_47162 = state_47122__$1;
(statearr_47131_47162[(2)] = null);

(statearr_47131_47162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (6))){
var inst_47082 = (state_47122[(8)]);
var inst_47107 = inst_47082.length;
var inst_47108 = (inst_47107 > (0));
var state_47122__$1 = state_47122;
if(cljs.core.truth_(inst_47108)){
var statearr_47132_47163 = state_47122__$1;
(statearr_47132_47163[(1)] = (12));

} else {
var statearr_47133_47164 = state_47122__$1;
(statearr_47133_47164[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (3))){
var inst_47120 = (state_47122[(2)]);
var state_47122__$1 = state_47122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47122__$1,inst_47120);
} else {
if((state_val_47123 === (12))){
var inst_47082 = (state_47122[(8)]);
var inst_47110 = cljs.core.vec.call(null,inst_47082);
var state_47122__$1 = state_47122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47122__$1,(15),out,inst_47110);
} else {
if((state_val_47123 === (2))){
var state_47122__$1 = state_47122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47122__$1,(4),ch);
} else {
if((state_val_47123 === (11))){
var inst_47090 = (state_47122[(10)]);
var inst_47086 = (state_47122[(9)]);
var inst_47100 = (state_47122[(2)]);
var inst_47101 = [];
var inst_47102 = inst_47101.push(inst_47086);
var inst_47082 = inst_47101;
var inst_47083 = inst_47090;
var state_47122__$1 = (function (){var statearr_47134 = state_47122;
(statearr_47134[(7)] = inst_47083);

(statearr_47134[(11)] = inst_47100);

(statearr_47134[(12)] = inst_47102);

(statearr_47134[(8)] = inst_47082);

return statearr_47134;
})();
var statearr_47135_47165 = state_47122__$1;
(statearr_47135_47165[(2)] = null);

(statearr_47135_47165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (9))){
var inst_47082 = (state_47122[(8)]);
var inst_47098 = cljs.core.vec.call(null,inst_47082);
var state_47122__$1 = state_47122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_47122__$1,(11),out,inst_47098);
} else {
if((state_val_47123 === (5))){
var inst_47090 = (state_47122[(10)]);
var inst_47083 = (state_47122[(7)]);
var inst_47086 = (state_47122[(9)]);
var inst_47090__$1 = f.call(null,inst_47086);
var inst_47091 = cljs.core._EQ_.call(null,inst_47090__$1,inst_47083);
var inst_47092 = cljs.core.keyword_identical_QMARK_.call(null,inst_47083,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47093 = (inst_47091) || (inst_47092);
var state_47122__$1 = (function (){var statearr_47136 = state_47122;
(statearr_47136[(10)] = inst_47090__$1);

return statearr_47136;
})();
if(cljs.core.truth_(inst_47093)){
var statearr_47137_47166 = state_47122__$1;
(statearr_47137_47166[(1)] = (8));

} else {
var statearr_47138_47167 = state_47122__$1;
(statearr_47138_47167[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (14))){
var inst_47115 = (state_47122[(2)]);
var inst_47116 = cljs.core.async.close_BANG_.call(null,out);
var state_47122__$1 = (function (){var statearr_47140 = state_47122;
(statearr_47140[(13)] = inst_47115);

return statearr_47140;
})();
var statearr_47141_47168 = state_47122__$1;
(statearr_47141_47168[(2)] = inst_47116);

(statearr_47141_47168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (10))){
var inst_47105 = (state_47122[(2)]);
var state_47122__$1 = state_47122;
var statearr_47142_47169 = state_47122__$1;
(statearr_47142_47169[(2)] = inst_47105);

(statearr_47142_47169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47123 === (8))){
var inst_47090 = (state_47122[(10)]);
var inst_47086 = (state_47122[(9)]);
var inst_47082 = (state_47122[(8)]);
var inst_47095 = inst_47082.push(inst_47086);
var tmp47139 = inst_47082;
var inst_47082__$1 = tmp47139;
var inst_47083 = inst_47090;
var state_47122__$1 = (function (){var statearr_47143 = state_47122;
(statearr_47143[(7)] = inst_47083);

(statearr_47143[(14)] = inst_47095);

(statearr_47143[(8)] = inst_47082__$1);

return statearr_47143;
})();
var statearr_47144_47170 = state_47122__$1;
(statearr_47144_47170[(2)] = null);

(statearr_47144_47170[(1)] = (2));


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
});})(c__44331__auto___47156,out))
;
return ((function (switch__44217__auto__,c__44331__auto___47156,out){
return (function() {
var cljs$core$async$state_machine__44218__auto__ = null;
var cljs$core$async$state_machine__44218__auto____0 = (function (){
var statearr_47148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47148[(0)] = cljs$core$async$state_machine__44218__auto__);

(statearr_47148[(1)] = (1));

return statearr_47148;
});
var cljs$core$async$state_machine__44218__auto____1 = (function (state_47122){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_47122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e47149){if((e47149 instanceof Object)){
var ex__44221__auto__ = e47149;
var statearr_47150_47171 = state_47122;
(statearr_47150_47171[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47172 = state_47122;
state_47122 = G__47172;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
cljs$core$async$state_machine__44218__auto__ = function(state_47122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44218__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44218__auto____1.call(this,state_47122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44218__auto____0;
cljs$core$async$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44218__auto____1;
return cljs$core$async$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___47156,out))
})();
var state__44333__auto__ = (function (){var statearr_47151 = f__44332__auto__.call(null);
(statearr_47151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___47156);

return statearr_47151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___47156,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1511925498131