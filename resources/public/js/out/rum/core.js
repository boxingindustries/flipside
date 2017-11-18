// Compiled by ClojureScript 1.9.494 {}
goog.provide('rum.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('rum.cursor');
goog.require('rum.util');
goog.require('rum.derived_atom');
/**
 * Given React component, returns Rum state associated with it
 */
rum.core.state = (function rum$core$state(comp){
return (comp.state[":rum/state"]);
});
rum.core.build_class = (function rum$core$build_class(render,mixins,display_name){
var init = rum.util.collect.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),mixins);
var will_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var render__$1 = render;
var wrap_render = rum.util.collect.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),mixins);
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,render__$1,wrap_render){
return (function (p1__38944_SHARP_,p2__38943_SHARP_){
return p2__38943_SHARP_.call(null,p1__38944_SHARP_);
});})(init,will_mount,render__$1,wrap_render))
,render__$1,wrap_render);
var did_mount = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var did_remount = rum.util.collect.call(null,new cljs.core.Keyword(null,"did-remount","did-remount",1362550500),mixins);
var should_update = rum.util.collect.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),mixins);
var will_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"will-update","will-update",328062998),new cljs.core.Keyword(null,"before-render","before-render",71256781)], null),mixins);
var did_update = rum.util.collect_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"did-update","did-update",-2143702256),new cljs.core.Keyword(null,"after-render","after-render",1997533433)], null),mixins);
var will_unmount = rum.util.collect.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),mixins);
var child_context = rum.util.collect.call(null,new cljs.core.Keyword(null,"child-context","child-context",-1375270295),mixins);
var class_props = cljs.core.reduce.call(null,cljs.core.merge,rum.util.collect.call(null,new cljs.core.Keyword(null,"class-properties","class-properties",1351279702),mixins));
return React.createClass(cljs.core.clj__GT_js.call(null,rum.util.filter_vals.call(null,cljs.core.some_QMARK_,cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"getChildContext","getChildContext",-1321948108),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[((cljs.core.empty_QMARK_.call(null,did_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,___$1){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),display_name,((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_unmount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var state = cljs.core.merge.call(null,old_state,(next_props[":rum/initial-state"]));
var next_state = cljs.core.reduce.call(null,((function (old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__38946_SHARP_,p2__38945_SHARP_){
return p2__38945_SHARP_.call(null,old_state,p1__38946_SHARP_);
});})(old_state,state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,state,did_remount);
return this$.setState(({":rum/state": cljs.core.volatile_BANG_.call(null,next_state)}));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,should_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (next_props,next_state){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_state[":rum/state"]));
var or__35887__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__38947_SHARP_){
return p1__38947_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,should_update);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return false;
}
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = rum.core.state.call(null,this$);
var vec__38952 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__38952,(0),null);
var next_state = cljs.core.nth.call(null,vec__38952,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,child_context))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var state = cljs.core.deref.call(null,rum.core.state.call(null,this$));
return cljs.core.clj__GT_js.call(null,cljs.core.transduce.call(null,cljs.core.map.call(null,((function (state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (p1__38948_SHARP_){
return p1__38948_SHARP_.call(null,state);
});})(state,this$,init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,child_context));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_update))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (_,next_state){
var this$ = this;
var new_state = (next_state[":rum/state"]);
return cljs.core._vreset_BANG_.call(null,new_state,rum.util.call_all.call(null,cljs.core._deref.call(null,new_state),will_update));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
var props = this$.props;
var state = rum.util.call_all.call(null,cljs.core.assoc.call(null,(props[":rum/initial-state"]),new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$),init,props);
return ({":rum/state": cljs.core.volatile_BANG_.call(null,state)});
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
,((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),did_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
),((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.core.state.call(null,this$),rum.util.call_all.call(null,cljs.core._deref.call(null,rum.core.state.call(null,this$)),will_mount));
});})(init,will_mount,render__$1,wrap_render,wrapped_render,did_mount,did_remount,should_update,will_update,did_update,will_unmount,child_context,class_props))
)]),class_props))));
});
rum.core.build_ctor = (function rum$core$build_ctor(render,mixins,display_name){
var class$ = rum.core.build_class.call(null,render,mixins,display_name);
var key_fn = cljs.core.first.call(null,rum.util.collect.call(null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),mixins));
var ctor = ((!((key_fn == null)))?((function (class$,key_fn){
return (function() { 
var G__38955__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null), "key": cljs.core.apply.call(null,key_fn,args)});
return React.createElement(class$,props);
};
var G__38955 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38956__i = 0, G__38956__a = new Array(arguments.length -  0);
while (G__38956__i < G__38956__a.length) {G__38956__a[G__38956__i] = arguments[G__38956__i + 0]; ++G__38956__i;}
  args = new cljs.core.IndexedSeq(G__38956__a,0);
} 
return G__38955__delegate.call(this,args);};
G__38955.cljs$lang$maxFixedArity = 0;
G__38955.cljs$lang$applyTo = (function (arglist__38957){
var args = cljs.core.seq(arglist__38957);
return G__38955__delegate(args);
});
G__38955.cljs$core$IFn$_invoke$arity$variadic = G__38955__delegate;
return G__38955;
})()
;})(class$,key_fn))
:((function (class$,key_fn){
return (function() { 
var G__38958__delegate = function (args){
var props = ({":rum/initial-state": new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null)});
return React.createElement(class$,props);
};
var G__38958 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38959__i = 0, G__38959__a = new Array(arguments.length -  0);
while (G__38959__i < G__38959__a.length) {G__38959__a[G__38959__i] = arguments[G__38959__i + 0]; ++G__38959__i;}
  args = new cljs.core.IndexedSeq(G__38959__a,0);
} 
return G__38958__delegate.call(this,args);};
G__38958.cljs$lang$maxFixedArity = 0;
G__38958.cljs$lang$applyTo = (function (arglist__38960){
var args = cljs.core.seq(arglist__38960);
return G__38958__delegate(args);
});
G__38958.cljs$core$IFn$_invoke$arity$variadic = G__38958__delegate;
return G__38958;
})()
;})(class$,key_fn))
);
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
});
rum.core.build_defc = (function rum$core$build_defc(render_body,mixins,display_name){
if(cljs.core.empty_QMARK_.call(null,mixins)){
var class$ = (function (props){
return cljs.core.apply.call(null,render_body,(props[":rum/args"]));
});
var _ = (class$["displayName"] = display_name);
var ctor = ((function (class$,_){
return (function() { 
var G__38961__delegate = function (args){
return React.createElement(class$,({":rum/args": args}));
};
var G__38961 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38962__i = 0, G__38962__a = new Array(arguments.length -  0);
while (G__38962__i < G__38962__a.length) {G__38962__a[G__38962__i] = arguments[G__38962__i + 0]; ++G__38962__i;}
  args = new cljs.core.IndexedSeq(G__38962__a,0);
} 
return G__38961__delegate.call(this,args);};
G__38961.cljs$lang$maxFixedArity = 0;
G__38961.cljs$lang$applyTo = (function (arglist__38963){
var args = cljs.core.seq(arglist__38963);
return G__38961__delegate(args);
});
G__38961.cljs$core$IFn$_invoke$arity$variadic = G__38961__delegate;
return G__38961;
})()
;})(class$,_))
;
return cljs.core.with_meta.call(null,ctor,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class$], null));
} else {
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
}
});
rum.core.build_defcs = (function rum$core$build_defcs(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.build_defcc = (function rum$core$build_defcc(render_body,mixins,display_name){
var render = (function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_body,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
});
return rum.core.build_ctor.call(null,render,mixins,display_name);
});
rum.core.schedule = (function (){var or__35887__auto__ = (function (){var and__35875__auto__ = typeof window !== 'undefined';
if(and__35875__auto__){
var or__35887__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
var or__35887__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__35887__auto____$2)){
return or__35887__auto____$2;
} else {
return window.msRequestAnimationFrame;
}
}
}
} else {
return and__35875__auto__;
}
})();
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return ((function (or__35887__auto__){
return (function (p1__38964_SHARP_){
return setTimeout(p1__38964_SHARP_,(16));
});
;})(or__35887__auto__))
}
})();
rum.core.batch = (function (){var or__35887__auto__ = ((typeof ReactNative !== 'undefined')?ReactNative.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = ((typeof ReactDOM !== 'undefined')?ReactDOM.unstable_batchedUpdates:null);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return ((function (or__35887__auto____$1,or__35887__auto__){
return (function (f,a){
return f.call(null,a);
});
;})(or__35887__auto____$1,or__35887__auto__))
}
}
})();
rum.core.empty_queue = cljs.core.PersistentVector.EMPTY;
rum.core.render_queue = cljs.core.volatile_BANG_.call(null,rum.core.empty_queue);
rum.core.render_all = (function rum$core$render_all(queue){
var seq__38971 = cljs.core.seq.call(null,queue);
var chunk__38973 = null;
var count__38974 = (0);
var i__38975 = (0);
while(true){
if((i__38975 < count__38974)){
var comp = cljs.core._nth.call(null,chunk__38973,i__38975);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__38977 = seq__38971;
var G__38978 = chunk__38973;
var G__38979 = count__38974;
var G__38980 = (i__38975 + (1));
seq__38971 = G__38977;
chunk__38973 = G__38978;
count__38974 = G__38979;
i__38975 = G__38980;
continue;
} else {
var G__38981 = seq__38971;
var G__38982 = chunk__38973;
var G__38983 = count__38974;
var G__38984 = (i__38975 + (1));
seq__38971 = G__38981;
chunk__38973 = G__38982;
count__38974 = G__38983;
i__38975 = G__38984;
continue;
}
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__38971);
if(temp__6753__auto__){
var seq__38971__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38971__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__38971__$1);
var G__38985 = cljs.core.chunk_rest.call(null,seq__38971__$1);
var G__38986 = c__36798__auto__;
var G__38987 = cljs.core.count.call(null,c__36798__auto__);
var G__38988 = (0);
seq__38971 = G__38985;
chunk__38973 = G__38986;
count__38974 = G__38987;
i__38975 = G__38988;
continue;
} else {
var comp = cljs.core.first.call(null,seq__38971__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__38989 = cljs.core.next.call(null,seq__38971__$1);
var G__38990 = null;
var G__38991 = (0);
var G__38992 = (0);
seq__38971 = G__38989;
chunk__38973 = G__38990;
count__38974 = G__38991;
i__38975 = G__38992;
continue;
} else {
var G__38993 = cljs.core.next.call(null,seq__38971__$1);
var G__38994 = null;
var G__38995 = (0);
var G__38996 = (0);
seq__38971 = G__38993;
chunk__38973 = G__38994;
count__38974 = G__38995;
i__38975 = G__38996;
continue;
}
}
} else {
return null;
}
}
break;
}
});
rum.core.render = (function rum$core$render(){
var queue = cljs.core.deref.call(null,rum.core.render_queue);
cljs.core.vreset_BANG_.call(null,rum.core.render_queue,rum.core.empty_queue);

return rum.core.batch.call(null,rum.core.render_all,queue);
});
/**
 * Schedules react component to be rendered on next animation frame
 */
rum.core.request_render = (function rum$core$request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.core.render_queue))){
rum.core.schedule.call(null,rum.core.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.core.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core.render_queue),component));
});
/**
 * Add component to the DOM tree. Idempotent. Subsequent mounts will just update component
 */
rum.core.mount = (function rum$core$mount(component,node){
ReactDOM.render(component,node);

return null;
});
/**
 * Removes component from the DOM tree
 */
rum.core.unmount = (function rum$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
/**
 * Adds React key to component
 */
rum.core.with_key = (function rum$core$with_key(component,key){
return React.cloneElement(component,({"key": key}),null);
});
/**
 * Adds React ref (string or callback) to component
 */
rum.core.with_ref = (function rum$core$with_ref(component,ref){
return React.cloneElement(component,({"ref": ref}),null);
});
/**
 * Given state, returns top-level DOM node. Can’t be called during render
 */
rum.core.dom_node = (function rum$core$dom_node(state){
return ReactDOM.findDOMNode(new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});
/**
 * Given state and ref handle, returns React component
 */
rum.core.ref = (function rum$core$ref(state,key){
return ((new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state)["refs"])[cljs.core.name.call(null,key)]);
});
/**
 * Given state and ref handle, returns DOM node associated with ref
 */
rum.core.ref_node = (function rum$core$ref_node(state,key){
return ReactDOM.findDOMNode(rum.core.ref.call(null,state,cljs.core.name.call(null,key)));
});
/**
 * Mixin. Will avoid re-render if none of component’s arguments have changed.
 * Does equality check (=) on all arguments
 */
rum.core.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
/**
 * Mixin constructor. Adds an atom to component’s state that can be used to keep stuff
 * during component’s lifecycle. Component will be re-rendered if atom’s value changes.
 * Atom is stored under user-provided key or under `:rum/local` by default
 */
rum.core.local = (function rum$core$local(var_args){
var args38997 = [];
var len__37108__auto___39000 = arguments.length;
var i__37109__auto___39001 = (0);
while(true){
if((i__37109__auto___39001 < len__37108__auto___39000)){
args38997.push((arguments[i__37109__auto___39001]));

var G__39002 = (i__37109__auto___39001 + (1));
i__37109__auto___39001 = G__39002;
continue;
} else {
}
break;
}

var G__38999 = args38997.length;
switch (G__38999) {
case 1:
return rum.core.local.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rum.core.local.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38997.length)].join('')));

}
});

rum.core.local.cljs$core$IFn$_invoke$arity$1 = (function (initial){
return rum.core.local.call(null,initial,new cljs.core.Keyword("rum","local","rum/local",-1497916586));
});

rum.core.local.cljs$core$IFn$_invoke$arity$2 = (function (initial,key){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),(function (state){
var local_state = cljs.core.atom.call(null,initial);
var component = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
cljs.core.add_watch.call(null,local_state,key,((function (local_state,component){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,component);
});})(local_state,component))
);

return cljs.core.assoc.call(null,state,key,local_state);
})], null);
});

rum.core.local.cljs$lang$maxFixedArity = 2;

/**
 * Mixin. Works in conjunction with `rum.core/react`
 */
rum.core.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (state,props){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142),cljs.core.random_uuid.call(null));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_39004 = rum.core._STAR_reactions_STAR_;
rum.core._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

try{var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__39005 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__39005,(0),null);
var next_state = cljs.core.nth.call(null,vec__39005,(1),null);
var new_reactions = cljs.core.deref.call(null,rum.core._STAR_reactions_STAR_);
var key = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__39008_39020 = cljs.core.seq.call(null,old_reactions);
var chunk__39009_39021 = null;
var count__39010_39022 = (0);
var i__39011_39023 = (0);
while(true){
if((i__39011_39023 < count__39010_39022)){
var ref_39024 = cljs.core._nth.call(null,chunk__39009_39021,i__39011_39023);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_39024)){
} else {
cljs.core.remove_watch.call(null,ref_39024,key);
}

var G__39025 = seq__39008_39020;
var G__39026 = chunk__39009_39021;
var G__39027 = count__39010_39022;
var G__39028 = (i__39011_39023 + (1));
seq__39008_39020 = G__39025;
chunk__39009_39021 = G__39026;
count__39010_39022 = G__39027;
i__39011_39023 = G__39028;
continue;
} else {
var temp__6753__auto___39029 = cljs.core.seq.call(null,seq__39008_39020);
if(temp__6753__auto___39029){
var seq__39008_39030__$1 = temp__6753__auto___39029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39008_39030__$1)){
var c__36798__auto___39031 = cljs.core.chunk_first.call(null,seq__39008_39030__$1);
var G__39032 = cljs.core.chunk_rest.call(null,seq__39008_39030__$1);
var G__39033 = c__36798__auto___39031;
var G__39034 = cljs.core.count.call(null,c__36798__auto___39031);
var G__39035 = (0);
seq__39008_39020 = G__39032;
chunk__39009_39021 = G__39033;
count__39010_39022 = G__39034;
i__39011_39023 = G__39035;
continue;
} else {
var ref_39036 = cljs.core.first.call(null,seq__39008_39030__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_39036)){
} else {
cljs.core.remove_watch.call(null,ref_39036,key);
}

var G__39037 = cljs.core.next.call(null,seq__39008_39030__$1);
var G__39038 = null;
var G__39039 = (0);
var G__39040 = (0);
seq__39008_39020 = G__39037;
chunk__39009_39021 = G__39038;
count__39010_39022 = G__39039;
i__39011_39023 = G__39040;
continue;
}
} else {
}
}
break;
}

var seq__39012_39041 = cljs.core.seq.call(null,new_reactions);
var chunk__39013_39042 = null;
var count__39014_39043 = (0);
var i__39015_39044 = (0);
while(true){
if((i__39015_39044 < count__39014_39043)){
var ref_39045 = cljs.core._nth.call(null,chunk__39013_39042,i__39015_39044);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_39045)){
} else {
cljs.core.add_watch.call(null,ref_39045,key,((function (seq__39012_39041,chunk__39013_39042,count__39014_39043,i__39015_39044,ref_39045,comp,old_reactions,vec__39005,dom,next_state,new_reactions,key,_STAR_reactions_STAR_39004){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__39012_39041,chunk__39013_39042,count__39014_39043,i__39015_39044,ref_39045,comp,old_reactions,vec__39005,dom,next_state,new_reactions,key,_STAR_reactions_STAR_39004))
);
}

var G__39046 = seq__39012_39041;
var G__39047 = chunk__39013_39042;
var G__39048 = count__39014_39043;
var G__39049 = (i__39015_39044 + (1));
seq__39012_39041 = G__39046;
chunk__39013_39042 = G__39047;
count__39014_39043 = G__39048;
i__39015_39044 = G__39049;
continue;
} else {
var temp__6753__auto___39050 = cljs.core.seq.call(null,seq__39012_39041);
if(temp__6753__auto___39050){
var seq__39012_39051__$1 = temp__6753__auto___39050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39012_39051__$1)){
var c__36798__auto___39052 = cljs.core.chunk_first.call(null,seq__39012_39051__$1);
var G__39053 = cljs.core.chunk_rest.call(null,seq__39012_39051__$1);
var G__39054 = c__36798__auto___39052;
var G__39055 = cljs.core.count.call(null,c__36798__auto___39052);
var G__39056 = (0);
seq__39012_39041 = G__39053;
chunk__39013_39042 = G__39054;
count__39014_39043 = G__39055;
i__39015_39044 = G__39056;
continue;
} else {
var ref_39057 = cljs.core.first.call(null,seq__39012_39051__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_39057)){
} else {
cljs.core.add_watch.call(null,ref_39057,key,((function (seq__39012_39041,chunk__39013_39042,count__39014_39043,i__39015_39044,ref_39057,seq__39012_39051__$1,temp__6753__auto___39050,comp,old_reactions,vec__39005,dom,next_state,new_reactions,key,_STAR_reactions_STAR_39004){
return (function (_,___$1,___$2,___$3){
return rum.core.request_render.call(null,comp);
});})(seq__39012_39041,chunk__39013_39042,count__39014_39043,i__39015_39044,ref_39057,seq__39012_39051__$1,temp__6753__auto___39050,comp,old_reactions,vec__39005,dom,next_state,new_reactions,key,_STAR_reactions_STAR_39004))
);
}

var G__39058 = cljs.core.next.call(null,seq__39012_39051__$1);
var G__39059 = null;
var G__39060 = (0);
var G__39061 = (0);
seq__39012_39041 = G__39058;
chunk__39013_39042 = G__39059;
count__39014_39043 = G__39060;
i__39015_39044 = G__39061;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new_reactions)], null);
}finally {rum.core._STAR_reactions_STAR_ = _STAR_reactions_STAR_39004;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_39062 = new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142).cljs$core$IFn$_invoke$arity$1(state);
var seq__39016_39063 = cljs.core.seq.call(null,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325).cljs$core$IFn$_invoke$arity$1(state));
var chunk__39017_39064 = null;
var count__39018_39065 = (0);
var i__39019_39066 = (0);
while(true){
if((i__39019_39066 < count__39018_39065)){
var ref_39067 = cljs.core._nth.call(null,chunk__39017_39064,i__39019_39066);
cljs.core.remove_watch.call(null,ref_39067,key_39062);

var G__39068 = seq__39016_39063;
var G__39069 = chunk__39017_39064;
var G__39070 = count__39018_39065;
var G__39071 = (i__39019_39066 + (1));
seq__39016_39063 = G__39068;
chunk__39017_39064 = G__39069;
count__39018_39065 = G__39070;
i__39019_39066 = G__39071;
continue;
} else {
var temp__6753__auto___39072 = cljs.core.seq.call(null,seq__39016_39063);
if(temp__6753__auto___39072){
var seq__39016_39073__$1 = temp__6753__auto___39072;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39016_39073__$1)){
var c__36798__auto___39074 = cljs.core.chunk_first.call(null,seq__39016_39073__$1);
var G__39075 = cljs.core.chunk_rest.call(null,seq__39016_39073__$1);
var G__39076 = c__36798__auto___39074;
var G__39077 = cljs.core.count.call(null,c__36798__auto___39074);
var G__39078 = (0);
seq__39016_39063 = G__39075;
chunk__39017_39064 = G__39076;
count__39018_39065 = G__39077;
i__39019_39066 = G__39078;
continue;
} else {
var ref_39079 = cljs.core.first.call(null,seq__39016_39073__$1);
cljs.core.remove_watch.call(null,ref_39079,key_39062);

var G__39080 = cljs.core.next.call(null,seq__39016_39073__$1);
var G__39081 = null;
var G__39082 = (0);
var G__39083 = (0);
seq__39016_39063 = G__39080;
chunk__39017_39064 = G__39081;
count__39018_39065 = G__39082;
i__39019_39066 = G__39083;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum.reactive","refs","rum.reactive/refs",-814076325),new cljs.core.Keyword("rum.reactive","key","rum.reactive/key",-803425142));
})], null);
/**
 * Works in conjunction with `rum.core/reactive` mixin. Use this function instead of
 * `deref` inside render, and your component will subscribe to changes happening
 * to the derefed atom.
 */
rum.core.react = (function rum$core$react(ref){
if(cljs.core.truth_(rum.core._STAR_reactions_STAR_)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("rum.core/react is only supported in conjunction with rum.core/reactive"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*reactions*")].join('')));
}

cljs.core._vreset_BANG_.call(null,rum.core._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.core._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});
/**
 * Use this to create “chains” and acyclic graphs of dependent atoms.
 * `derived-atom` will:
 *  - Take N “source” refs
 *  - Set up a watch on each of them
 *  - Create “sink” atom
 *  - When any of source refs changes:
 *     - re-run function `f`, passing N dereferenced values of source refs
 *     - `reset!` result of `f` to the sink atom
 *  - return sink atom
 * 
 *  (def *a (atom 0))
 *  (def *b (atom 1))
 *  (def *x (derived-atom [*a *b] ::key
 *            (fn [a b]
 *              (str a ":" b))))
 *  (type *x) ;; => clojure.lang.Atom
 *  \@*x     ;; => 0:1
 *  (swap! *a inc)
 *  \@*x     ;; => 1:1
 *  (reset! *b 7)
 *  \@*x     ;; => 1:7
 * 
 * Arguments:
 *   refs - sequence of source refs
 *   key  - unique key to register watcher, see `clojure.core/add-watch`
 *   f    - function that must accept N arguments (same as number of source refs)
 *          and return a value to be written to the sink ref.
 *          Note: `f` will be called with already dereferenced values
 *   opts - optional. Map of:
 *     :ref           - Use this as sink ref. By default creates new atom
 *     :check-equals? - Do an equality check on each update: `(= @sink (f new-vals))`.
 *                      If result of `f` is equal to the old one, do not call `reset!`.
 *                      Defaults to `true`. Set to false if calling `=` would be expensive
 */
rum.core.derived_atom = rum.derived_atom.derived_atom;
/**
 * Given atom with deep nested value and path inside it, creates an atom-like structure
 * that can be used separately from main atom, but will sync changes both ways:
 *   
 *   (def db (atom { :users { "Ivan" { :age 30 }}}))
 *   (def ivan (rum/cursor db [:users "Ivan"]))
 *   \@ivan ;; => { :age 30 }
 *   (swap! ivan update :age inc) ;; => { :age 31 }
 *   \@db ;; => { :users { "Ivan" { :age 31 }}}
 *   (swap! db update-in [:users "Ivan" :age] inc) ;; => { :users { "Ivan" { :age 32 }}}
 *   \@ivan ;; => { :age 32 }
 *   
 *   Returned value supports deref, swap!, reset!, watches and metadata.
 *   The only supported option is `:meta`
 */
rum.core.cursor_in = (function rum$core$cursor_in(var_args){
var args__37115__auto__ = [];
var len__37108__auto___39090 = arguments.length;
var i__37109__auto___39091 = (0);
while(true){
if((i__37109__auto___39091 < len__37108__auto___39090)){
args__37115__auto__.push((arguments[i__37109__auto___39091]));

var G__39092 = (i__37109__auto___39091 + (1));
i__37109__auto___39091 = G__39092;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref,path,p__39087){
var map__39088 = p__39087;
var map__39088__$1 = ((((!((map__39088 == null)))?((((map__39088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39088.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39088):map__39088);
var options = map__39088__$1;
if((ref instanceof rum.cursor.Cursor)){
return (new rum.cursor.Cursor(ref.ref,cljs.core.into.call(null,ref.path,path),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
} else {
return (new rum.cursor.Cursor(ref,path,new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(options)));
}
});

rum.core.cursor_in.cljs$lang$maxFixedArity = (2);

rum.core.cursor_in.cljs$lang$applyTo = (function (seq39084){
var G__39085 = cljs.core.first.call(null,seq39084);
var seq39084__$1 = cljs.core.next.call(null,seq39084);
var G__39086 = cljs.core.first.call(null,seq39084__$1);
var seq39084__$2 = cljs.core.next.call(null,seq39084__$1);
return rum.core.cursor_in.cljs$core$IFn$_invoke$arity$variadic(G__39085,G__39086,seq39084__$2);
});

/**
 * Same as `rum.core/cursor-in` but accepts single key instead of path vector
 */
rum.core.cursor = (function rum$core$cursor(var_args){
var args__37115__auto__ = [];
var len__37108__auto___39096 = arguments.length;
var i__37109__auto___39097 = (0);
while(true){
if((i__37109__auto___39097 < len__37108__auto___39096)){
args__37115__auto__.push((arguments[i__37109__auto___39097]));

var G__39098 = (i__37109__auto___39097 + (1));
i__37109__auto___39097 = G__39098;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic = (function (ref,key,options){
return cljs.core.apply.call(null,rum.core.cursor_in,ref,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),options);
});

rum.core.cursor.cljs$lang$maxFixedArity = (2);

rum.core.cursor.cljs$lang$applyTo = (function (seq39093){
var G__39094 = cljs.core.first.call(null,seq39093);
var seq39093__$1 = cljs.core.next.call(null,seq39093);
var G__39095 = cljs.core.first.call(null,seq39093__$1);
var seq39093__$2 = cljs.core.next.call(null,seq39093__$1);
return rum.core.cursor.cljs$core$IFn$_invoke$arity$variadic(G__39094,G__39095,seq39093__$2);
});


//# sourceMappingURL=core.js.map?rel=1509941606195