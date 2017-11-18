// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__37115__auto__ = [];
var len__37108__auto___51094 = arguments.length;
var i__37109__auto___51095 = (0);
while(true){
if((i__37109__auto___51095 < len__37108__auto___51094)){
args__37115__auto__.push((arguments[i__37109__auto___51095]));

var G__51096 = (i__37109__auto___51095 + (1));
i__37109__auto___51095 = G__51096;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((2) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__37116__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__51086_51097 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__51087_51098 = null;
var count__51088_51099 = (0);
var i__51089_51100 = (0);
while(true){
if((i__51089_51100 < count__51088_51099)){
var k_51101 = cljs.core._nth.call(null,chunk__51087_51098,i__51089_51100);
e.setAttribute(cljs.core.name.call(null,k_51101),cljs.core.get.call(null,attrs,k_51101));

var G__51102 = seq__51086_51097;
var G__51103 = chunk__51087_51098;
var G__51104 = count__51088_51099;
var G__51105 = (i__51089_51100 + (1));
seq__51086_51097 = G__51102;
chunk__51087_51098 = G__51103;
count__51088_51099 = G__51104;
i__51089_51100 = G__51105;
continue;
} else {
var temp__6753__auto___51106 = cljs.core.seq.call(null,seq__51086_51097);
if(temp__6753__auto___51106){
var seq__51086_51107__$1 = temp__6753__auto___51106;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51086_51107__$1)){
var c__36798__auto___51108 = cljs.core.chunk_first.call(null,seq__51086_51107__$1);
var G__51109 = cljs.core.chunk_rest.call(null,seq__51086_51107__$1);
var G__51110 = c__36798__auto___51108;
var G__51111 = cljs.core.count.call(null,c__36798__auto___51108);
var G__51112 = (0);
seq__51086_51097 = G__51109;
chunk__51087_51098 = G__51110;
count__51088_51099 = G__51111;
i__51089_51100 = G__51112;
continue;
} else {
var k_51113 = cljs.core.first.call(null,seq__51086_51107__$1);
e.setAttribute(cljs.core.name.call(null,k_51113),cljs.core.get.call(null,attrs,k_51113));

var G__51114 = cljs.core.next.call(null,seq__51086_51107__$1);
var G__51115 = null;
var G__51116 = (0);
var G__51117 = (0);
seq__51086_51097 = G__51114;
chunk__51087_51098 = G__51115;
count__51088_51099 = G__51116;
i__51089_51100 = G__51117;
continue;
}
} else {
}
}
break;
}

var seq__51090_51118 = cljs.core.seq.call(null,children);
var chunk__51091_51119 = null;
var count__51092_51120 = (0);
var i__51093_51121 = (0);
while(true){
if((i__51093_51121 < count__51092_51120)){
var ch_51122 = cljs.core._nth.call(null,chunk__51091_51119,i__51093_51121);
e.appendChild(ch_51122);

var G__51123 = seq__51090_51118;
var G__51124 = chunk__51091_51119;
var G__51125 = count__51092_51120;
var G__51126 = (i__51093_51121 + (1));
seq__51090_51118 = G__51123;
chunk__51091_51119 = G__51124;
count__51092_51120 = G__51125;
i__51093_51121 = G__51126;
continue;
} else {
var temp__6753__auto___51127 = cljs.core.seq.call(null,seq__51090_51118);
if(temp__6753__auto___51127){
var seq__51090_51128__$1 = temp__6753__auto___51127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51090_51128__$1)){
var c__36798__auto___51129 = cljs.core.chunk_first.call(null,seq__51090_51128__$1);
var G__51130 = cljs.core.chunk_rest.call(null,seq__51090_51128__$1);
var G__51131 = c__36798__auto___51129;
var G__51132 = cljs.core.count.call(null,c__36798__auto___51129);
var G__51133 = (0);
seq__51090_51118 = G__51130;
chunk__51091_51119 = G__51131;
count__51092_51120 = G__51132;
i__51093_51121 = G__51133;
continue;
} else {
var ch_51134 = cljs.core.first.call(null,seq__51090_51128__$1);
e.appendChild(ch_51134);

var G__51135 = cljs.core.next.call(null,seq__51090_51128__$1);
var G__51136 = null;
var G__51137 = (0);
var G__51138 = (0);
seq__51090_51118 = G__51135;
chunk__51091_51119 = G__51136;
count__51092_51120 = G__51137;
i__51093_51121 = G__51138;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq51083){
var G__51084 = cljs.core.first.call(null,seq51083);
var seq51083__$1 = cljs.core.next.call(null,seq51083);
var G__51085 = cljs.core.first.call(null,seq51083__$1);
var seq51083__$2 = cljs.core.next.call(null,seq51083__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__51084,G__51085,seq51083__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__36918__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__36919__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__36920__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__36921__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__36922__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__36918__auto__,prefer_table__36919__auto__,method_cache__36920__auto__,cached_hierarchy__36921__auto__,hierarchy__36922__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__36918__auto__,prefer_table__36919__auto__,method_cache__36920__auto__,cached_hierarchy__36921__auto__,hierarchy__36922__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__36922__auto__,method_table__36918__auto__,prefer_table__36919__auto__,method_cache__36920__auto__,cached_hierarchy__36921__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_51139 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_51139.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_51139.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_51139.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_51139);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__51140,st_map){
var map__51147 = p__51140;
var map__51147__$1 = ((((!((map__51147 == null)))?((((map__51147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51147):map__51147);
var container_el = cljs.core.get.call(null,map__51147__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__51147,map__51147__$1,container_el){
return (function (p__51149){
var vec__51150 = p__51149;
var k = cljs.core.nth.call(null,vec__51150,(0),null);
var v = cljs.core.nth.call(null,vec__51150,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__51147,map__51147__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__51153,dom_str){
var map__51156 = p__51153;
var map__51156__$1 = ((((!((map__51156 == null)))?((((map__51156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51156):map__51156);
var c = map__51156__$1;
var content_area_el = cljs.core.get.call(null,map__51156__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__51158){
var map__51161 = p__51158;
var map__51161__$1 = ((((!((map__51161 == null)))?((((map__51161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51161):map__51161);
var content_area_el = cljs.core.get.call(null,map__51161__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_51204){
var state_val_51205 = (state_51204[(1)]);
if((state_val_51205 === (1))){
var inst_51189 = (state_51204[(7)]);
var inst_51189__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_51190 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51191 = ["10px","10px","100%","68px","1.0"];
var inst_51192 = cljs.core.PersistentHashMap.fromArrays(inst_51190,inst_51191);
var inst_51193 = cljs.core.merge.call(null,inst_51192,style);
var inst_51194 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51189__$1,inst_51193);
var inst_51195 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_51189__$1,msg);
var inst_51196 = cljs.core.async.timeout.call(null,(300));
var state_51204__$1 = (function (){var statearr_51206 = state_51204;
(statearr_51206[(8)] = inst_51194);

(statearr_51206[(7)] = inst_51189__$1);

(statearr_51206[(9)] = inst_51195);

return statearr_51206;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51204__$1,(2),inst_51196);
} else {
if((state_val_51205 === (2))){
var inst_51189 = (state_51204[(7)]);
var inst_51198 = (state_51204[(2)]);
var inst_51199 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_51200 = ["auto"];
var inst_51201 = cljs.core.PersistentHashMap.fromArrays(inst_51199,inst_51200);
var inst_51202 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51189,inst_51201);
var state_51204__$1 = (function (){var statearr_51207 = state_51204;
(statearr_51207[(10)] = inst_51198);

return statearr_51207;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51204__$1,inst_51202);
} else {
return null;
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto____0 = (function (){
var statearr_51211 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51211[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto__);

(statearr_51211[(1)] = (1));

return statearr_51211;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto____1 = (function (state_51204){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_51204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e51212){if((e51212 instanceof Object)){
var ex__44197__auto__ = e51212;
var statearr_51213_51215 = state_51204;
(statearr_51213_51215[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51216 = state_51204;
state_51204 = G__51216;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto__ = function(state_51204){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto____1.call(this,state_51204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_51214 = f__44308__auto__.call(null);
(statearr_51214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_51214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args51217 = [];
var len__37108__auto___51220 = arguments.length;
var i__37109__auto___51221 = (0);
while(true){
if((i__37109__auto___51221 < len__37108__auto___51220)){
args51217.push((arguments[i__37109__auto___51221]));

var G__51222 = (i__37109__auto___51221 + (1));
i__37109__auto___51221 = G__51222;
continue;
} else {
}
break;
}

var G__51219 = args51217.length;
switch (G__51219) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51217.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__51224){
var map__51227 = p__51224;
var map__51227__$1 = ((((!((map__51227 == null)))?((((map__51227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51227.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51227):map__51227);
var file = cljs.core.get.call(null,map__51227__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51227__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51227__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__35887__auto__ = file;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__51229){
var vec__51236 = p__51229;
var typ = cljs.core.nth.call(null,vec__51236,(0),null);
var line_number = cljs.core.nth.call(null,vec__51236,(1),null);
var line = cljs.core.nth.call(null,vec__51236,(2),null);
var pred__51239 = cljs.core._EQ_;
var expr__51240 = typ;
if(cljs.core.truth_(pred__51239.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__51240))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__51239.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__51240))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__51239.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__51240))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__51242_SHARP_){
return cljs.core.update_in.call(null,p1__51242_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__51243_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__51243_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__51246){
var map__51249 = p__51246;
var map__51249__$1 = ((((!((map__51249 == null)))?((((map__51249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51249.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51249):map__51249);
var exception = map__51249__$1;
var message = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__51249__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__35875__auto__ = file;
if(cljs.core.truth_(and__35875__auto__)){
return line;
} else {
return and__35875__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__51249,map__51249__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__51244_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51244_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__51249,map__51249__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__51249,map__51249__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__51245_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__51245_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__51245_SHARP_)))].join('');
});})(last_message,map__51249,map__51249__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__51251){
var map__51254 = p__51251;
var map__51254__$1 = ((((!((map__51254 == null)))?((((map__51254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51254):map__51254);
var file = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__51259 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__51259__$1 = ((((!((map__51259 == null)))?((((map__51259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51259):map__51259);
var head = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51259__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__51262){
var map__51265 = p__51262;
var map__51265__$1 = ((((!((map__51265 == null)))?((((map__51265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51265):map__51265);
var warning_data = map__51265__$1;
var file = cljs.core.get.call(null,map__51265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51265__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51265__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__51265__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__51265__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__35875__auto__ = file;
if(cljs.core.truth_(and__35875__auto__)){
return line;
} else {
return and__35875__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__51265,map__51265__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__51261_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51261_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__51265,map__51265__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__51269 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__51269__$1 = ((((!((map__51269 == null)))?((((map__51269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51269):map__51269);
var head = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__51271){
var map__51275 = p__51271;
var map__51275__$1 = ((((!((map__51275 == null)))?((((map__51275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51275):map__51275);
var warning_data = map__51275__$1;
var message = cljs.core.get.call(null,map__51275__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__51275__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51275__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51275__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51277 = message;
var G__51277__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51277),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51277);
var G__51277__$2 = (cljs.core.truth_((function (){var and__35875__auto__ = line;
if(cljs.core.truth_(and__35875__auto__)){
return column;
} else {
return and__35875__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51277__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__51277__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51277__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__51277__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__51278){
var map__51283 = p__51278;
var map__51283__$1 = ((((!((map__51283 == null)))?((((map__51283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51283.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51283):map__51283);
var warning_data = map__51283__$1;
var message = cljs.core.get.call(null,map__51283__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__51283__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51283__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51283__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__51285 = figwheel.client.heads_up.ensure_container.call(null);
var map__51285__$1 = ((((!((map__51285 == null)))?((((map__51285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51285):map__51285);
var content_area_el = cljs.core.get.call(null,map__51285__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__6753__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__6753__auto__)){
var last_child = temp__6753__auto__;
var temp__6751__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__6751__auto__)){
var message_count = temp__6751__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_51333){
var state_val_51334 = (state_51333[(1)]);
if((state_val_51334 === (1))){
var inst_51316 = (state_51333[(7)]);
var inst_51316__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_51317 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_51318 = ["0.0"];
var inst_51319 = cljs.core.PersistentHashMap.fromArrays(inst_51317,inst_51318);
var inst_51320 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51316__$1,inst_51319);
var inst_51321 = cljs.core.async.timeout.call(null,(300));
var state_51333__$1 = (function (){var statearr_51335 = state_51333;
(statearr_51335[(7)] = inst_51316__$1);

(statearr_51335[(8)] = inst_51320);

return statearr_51335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51333__$1,(2),inst_51321);
} else {
if((state_val_51334 === (2))){
var inst_51316 = (state_51333[(7)]);
var inst_51323 = (state_51333[(2)]);
var inst_51324 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_51325 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_51326 = cljs.core.PersistentHashMap.fromArrays(inst_51324,inst_51325);
var inst_51327 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_51316,inst_51326);
var inst_51328 = cljs.core.async.timeout.call(null,(200));
var state_51333__$1 = (function (){var statearr_51336 = state_51333;
(statearr_51336[(9)] = inst_51323);

(statearr_51336[(10)] = inst_51327);

return statearr_51336;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51333__$1,(3),inst_51328);
} else {
if((state_val_51334 === (3))){
var inst_51316 = (state_51333[(7)]);
var inst_51330 = (state_51333[(2)]);
var inst_51331 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_51316,"");
var state_51333__$1 = (function (){var statearr_51337 = state_51333;
(statearr_51337[(11)] = inst_51330);

return statearr_51337;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51333__$1,inst_51331);
} else {
return null;
}
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__44194__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__44194__auto____0 = (function (){
var statearr_51341 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51341[(0)] = figwheel$client$heads_up$clear_$_state_machine__44194__auto__);

(statearr_51341[(1)] = (1));

return statearr_51341;
});
var figwheel$client$heads_up$clear_$_state_machine__44194__auto____1 = (function (state_51333){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_51333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e51342){if((e51342 instanceof Object)){
var ex__44197__auto__ = e51342;
var statearr_51343_51345 = state_51333;
(statearr_51343_51345[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51346 = state_51333;
state_51333 = G__51346;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__44194__auto__ = function(state_51333){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__44194__auto____1.call(this,state_51333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__44194__auto____0;
figwheel$client$heads_up$clear_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__44194__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_51344 = f__44308__auto__.call(null);
(statearr_51344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_51344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_51378){
var state_val_51379 = (state_51378[(1)]);
if((state_val_51379 === (1))){
var inst_51368 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_51378__$1 = state_51378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51378__$1,(2),inst_51368);
} else {
if((state_val_51379 === (2))){
var inst_51370 = (state_51378[(2)]);
var inst_51371 = cljs.core.async.timeout.call(null,(400));
var state_51378__$1 = (function (){var statearr_51380 = state_51378;
(statearr_51380[(7)] = inst_51370);

return statearr_51380;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51378__$1,(3),inst_51371);
} else {
if((state_val_51379 === (3))){
var inst_51373 = (state_51378[(2)]);
var inst_51374 = figwheel.client.heads_up.clear.call(null);
var state_51378__$1 = (function (){var statearr_51381 = state_51378;
(statearr_51381[(8)] = inst_51373);

return statearr_51381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51378__$1,(4),inst_51374);
} else {
if((state_val_51379 === (4))){
var inst_51376 = (state_51378[(2)]);
var state_51378__$1 = state_51378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51378__$1,inst_51376);
} else {
return null;
}
}
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto____0 = (function (){
var statearr_51385 = [null,null,null,null,null,null,null,null,null];
(statearr_51385[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto__);

(statearr_51385[(1)] = (1));

return statearr_51385;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto____1 = (function (state_51378){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_51378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e51386){if((e51386 instanceof Object)){
var ex__44197__auto__ = e51386;
var statearr_51387_51389 = state_51378;
(statearr_51387_51389[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51390 = state_51378;
state_51378 = G__51390;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto__ = function(state_51378){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto____1.call(this,state_51378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_51388 = f__44308__auto__.call(null);
(statearr_51388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_51388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__6753__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__6753__auto__)){
var el = temp__6753__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1509941621131