// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args51393 = [];
var len__37108__auto___51396 = arguments.length;
var i__37109__auto___51397 = (0);
while(true){
if((i__37109__auto___51397 < len__37108__auto___51396)){
args51393.push((arguments[i__37109__auto___51397]));

var G__51398 = (i__37109__auto___51397 + (1));
i__37109__auto___51397 = G__51398;
continue;
} else {
}
break;
}

var G__51395 = args51393.length;
switch (G__51395) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51393.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__37115__auto__ = [];
var len__37108__auto___51401 = arguments.length;
var i__37109__auto___51402 = (0);
while(true){
if((i__37109__auto___51402 < len__37108__auto___51401)){
args__37115__auto__.push((arguments[i__37109__auto___51402]));

var G__51403 = (i__37109__auto___51402 + (1));
i__37109__auto___51402 = G__51403;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51400){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51400));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37115__auto__ = [];
var len__37108__auto___51405 = arguments.length;
var i__37109__auto___51406 = (0);
while(true){
if((i__37109__auto___51406 < len__37108__auto___51405)){
args__37115__auto__.push((arguments[i__37109__auto___51406]));

var G__51407 = (i__37109__auto___51406 + (1));
i__37109__auto___51406 = G__51407;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51404){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51404));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51408){
var map__51411 = p__51408;
var map__51411__$1 = ((((!((map__51411 == null)))?((((map__51411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51411):map__51411);
var message = cljs.core.get.call(null,map__51411__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51411__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__35887__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__35875__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__35875__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__35875__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__44307__auto___51573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___51573,ch){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___51573,ch){
return (function (state_51542){
var state_val_51543 = (state_51542[(1)]);
if((state_val_51543 === (7))){
var inst_51538 = (state_51542[(2)]);
var state_51542__$1 = state_51542;
var statearr_51544_51574 = state_51542__$1;
(statearr_51544_51574[(2)] = inst_51538);

(statearr_51544_51574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (1))){
var state_51542__$1 = state_51542;
var statearr_51545_51575 = state_51542__$1;
(statearr_51545_51575[(2)] = null);

(statearr_51545_51575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (4))){
var inst_51495 = (state_51542[(7)]);
var inst_51495__$1 = (state_51542[(2)]);
var state_51542__$1 = (function (){var statearr_51546 = state_51542;
(statearr_51546[(7)] = inst_51495__$1);

return statearr_51546;
})();
if(cljs.core.truth_(inst_51495__$1)){
var statearr_51547_51576 = state_51542__$1;
(statearr_51547_51576[(1)] = (5));

} else {
var statearr_51548_51577 = state_51542__$1;
(statearr_51548_51577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (15))){
var inst_51502 = (state_51542[(8)]);
var inst_51517 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51502);
var inst_51518 = cljs.core.first.call(null,inst_51517);
var inst_51519 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51518);
var inst_51520 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51519)].join('');
var inst_51521 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51520);
var state_51542__$1 = state_51542;
var statearr_51549_51578 = state_51542__$1;
(statearr_51549_51578[(2)] = inst_51521);

(statearr_51549_51578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (13))){
var inst_51526 = (state_51542[(2)]);
var state_51542__$1 = state_51542;
var statearr_51550_51579 = state_51542__$1;
(statearr_51550_51579[(2)] = inst_51526);

(statearr_51550_51579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (6))){
var state_51542__$1 = state_51542;
var statearr_51551_51580 = state_51542__$1;
(statearr_51551_51580[(2)] = null);

(statearr_51551_51580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (17))){
var inst_51524 = (state_51542[(2)]);
var state_51542__$1 = state_51542;
var statearr_51552_51581 = state_51542__$1;
(statearr_51552_51581[(2)] = inst_51524);

(statearr_51552_51581[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (3))){
var inst_51540 = (state_51542[(2)]);
var state_51542__$1 = state_51542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51542__$1,inst_51540);
} else {
if((state_val_51543 === (12))){
var inst_51501 = (state_51542[(9)]);
var inst_51515 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51501,opts);
var state_51542__$1 = state_51542;
if(cljs.core.truth_(inst_51515)){
var statearr_51553_51582 = state_51542__$1;
(statearr_51553_51582[(1)] = (15));

} else {
var statearr_51554_51583 = state_51542__$1;
(statearr_51554_51583[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (2))){
var state_51542__$1 = state_51542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51542__$1,(4),ch);
} else {
if((state_val_51543 === (11))){
var inst_51502 = (state_51542[(8)]);
var inst_51507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51508 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51502);
var inst_51509 = cljs.core.async.timeout.call(null,(1000));
var inst_51510 = [inst_51508,inst_51509];
var inst_51511 = (new cljs.core.PersistentVector(null,2,(5),inst_51507,inst_51510,null));
var state_51542__$1 = state_51542;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51542__$1,(14),inst_51511);
} else {
if((state_val_51543 === (9))){
var inst_51502 = (state_51542[(8)]);
var inst_51528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51529 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51502);
var inst_51530 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51529);
var inst_51531 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51530)].join('');
var inst_51532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51531);
var state_51542__$1 = (function (){var statearr_51555 = state_51542;
(statearr_51555[(10)] = inst_51528);

return statearr_51555;
})();
var statearr_51556_51584 = state_51542__$1;
(statearr_51556_51584[(2)] = inst_51532);

(statearr_51556_51584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (5))){
var inst_51495 = (state_51542[(7)]);
var inst_51497 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51498 = (new cljs.core.PersistentArrayMap(null,2,inst_51497,null));
var inst_51499 = (new cljs.core.PersistentHashSet(null,inst_51498,null));
var inst_51500 = figwheel.client.focus_msgs.call(null,inst_51499,inst_51495);
var inst_51501 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51500);
var inst_51502 = cljs.core.first.call(null,inst_51500);
var inst_51503 = figwheel.client.autoload_QMARK_.call(null);
var state_51542__$1 = (function (){var statearr_51557 = state_51542;
(statearr_51557[(8)] = inst_51502);

(statearr_51557[(9)] = inst_51501);

return statearr_51557;
})();
if(cljs.core.truth_(inst_51503)){
var statearr_51558_51585 = state_51542__$1;
(statearr_51558_51585[(1)] = (8));

} else {
var statearr_51559_51586 = state_51542__$1;
(statearr_51559_51586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (14))){
var inst_51513 = (state_51542[(2)]);
var state_51542__$1 = state_51542;
var statearr_51560_51587 = state_51542__$1;
(statearr_51560_51587[(2)] = inst_51513);

(statearr_51560_51587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (16))){
var state_51542__$1 = state_51542;
var statearr_51561_51588 = state_51542__$1;
(statearr_51561_51588[(2)] = null);

(statearr_51561_51588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (10))){
var inst_51534 = (state_51542[(2)]);
var state_51542__$1 = (function (){var statearr_51562 = state_51542;
(statearr_51562[(11)] = inst_51534);

return statearr_51562;
})();
var statearr_51563_51589 = state_51542__$1;
(statearr_51563_51589[(2)] = null);

(statearr_51563_51589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51543 === (8))){
var inst_51501 = (state_51542[(9)]);
var inst_51505 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51501,opts);
var state_51542__$1 = state_51542;
if(cljs.core.truth_(inst_51505)){
var statearr_51564_51590 = state_51542__$1;
(statearr_51564_51590[(1)] = (11));

} else {
var statearr_51565_51591 = state_51542__$1;
(statearr_51565_51591[(1)] = (12));

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
});})(c__44307__auto___51573,ch))
;
return ((function (switch__44193__auto__,c__44307__auto___51573,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44194__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44194__auto____0 = (function (){
var statearr_51569 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51569[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44194__auto__);

(statearr_51569[(1)] = (1));

return statearr_51569;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44194__auto____1 = (function (state_51542){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_51542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e51570){if((e51570 instanceof Object)){
var ex__44197__auto__ = e51570;
var statearr_51571_51592 = state_51542;
(statearr_51571_51592[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51593 = state_51542;
state_51542 = G__51593;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44194__auto__ = function(state_51542){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44194__auto____1.call(this,state_51542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44194__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44194__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___51573,ch))
})();
var state__44309__auto__ = (function (){var statearr_51572 = f__44308__auto__.call(null);
(statearr_51572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___51573);

return statearr_51572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___51573,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51594_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51594_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51597 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51597){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51596){if((e51596 instanceof Error)){
var e = e51596;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51597], null));
} else {
var e = e51596;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51597))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51598){
var map__51607 = p__51598;
var map__51607__$1 = ((((!((map__51607 == null)))?((((map__51607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51607):map__51607);
var opts = map__51607__$1;
var build_id = cljs.core.get.call(null,map__51607__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51607,map__51607__$1,opts,build_id){
return (function (p__51609){
var vec__51610 = p__51609;
var seq__51611 = cljs.core.seq.call(null,vec__51610);
var first__51612 = cljs.core.first.call(null,seq__51611);
var seq__51611__$1 = cljs.core.next.call(null,seq__51611);
var map__51613 = first__51612;
var map__51613__$1 = ((((!((map__51613 == null)))?((((map__51613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51613):map__51613);
var msg = map__51613__$1;
var msg_name = cljs.core.get.call(null,map__51613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51611__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51610,seq__51611,first__51612,seq__51611__$1,map__51613,map__51613__$1,msg,msg_name,_,map__51607,map__51607__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51610,seq__51611,first__51612,seq__51611__$1,map__51613,map__51613__$1,msg,msg_name,_,map__51607,map__51607__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51607,map__51607__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51621){
var vec__51622 = p__51621;
var seq__51623 = cljs.core.seq.call(null,vec__51622);
var first__51624 = cljs.core.first.call(null,seq__51623);
var seq__51623__$1 = cljs.core.next.call(null,seq__51623);
var map__51625 = first__51624;
var map__51625__$1 = ((((!((map__51625 == null)))?((((map__51625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51625):map__51625);
var msg = map__51625__$1;
var msg_name = cljs.core.get.call(null,map__51625__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51623__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51627){
var map__51639 = p__51627;
var map__51639__$1 = ((((!((map__51639 == null)))?((((map__51639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51639.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51639):map__51639);
var on_compile_warning = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51639__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51639,map__51639__$1,on_compile_warning,on_compile_fail){
return (function (p__51641){
var vec__51642 = p__51641;
var seq__51643 = cljs.core.seq.call(null,vec__51642);
var first__51644 = cljs.core.first.call(null,seq__51643);
var seq__51643__$1 = cljs.core.next.call(null,seq__51643);
var map__51645 = first__51644;
var map__51645__$1 = ((((!((map__51645 == null)))?((((map__51645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51645):map__51645);
var msg = map__51645__$1;
var msg_name = cljs.core.get.call(null,map__51645__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51643__$1;
var pred__51647 = cljs.core._EQ_;
var expr__51648 = msg_name;
if(cljs.core.truth_(pred__51647.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51648))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51647.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51648))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51639,map__51639__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__,msg_hist,msg_names,msg){
return (function (state_51876){
var state_val_51877 = (state_51876[(1)]);
if((state_val_51877 === (7))){
var inst_51796 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51796)){
var statearr_51878_51928 = state_51876__$1;
(statearr_51878_51928[(1)] = (8));

} else {
var statearr_51879_51929 = state_51876__$1;
(statearr_51879_51929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (20))){
var inst_51870 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51880_51930 = state_51876__$1;
(statearr_51880_51930[(2)] = inst_51870);

(statearr_51880_51930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (27))){
var inst_51866 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51881_51931 = state_51876__$1;
(statearr_51881_51931[(2)] = inst_51866);

(statearr_51881_51931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (1))){
var inst_51789 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51789)){
var statearr_51882_51932 = state_51876__$1;
(statearr_51882_51932[(1)] = (2));

} else {
var statearr_51883_51933 = state_51876__$1;
(statearr_51883_51933[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (24))){
var inst_51868 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51884_51934 = state_51876__$1;
(statearr_51884_51934[(2)] = inst_51868);

(statearr_51884_51934[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (4))){
var inst_51874 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51876__$1,inst_51874);
} else {
if((state_val_51877 === (15))){
var inst_51872 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51885_51935 = state_51876__$1;
(statearr_51885_51935[(2)] = inst_51872);

(statearr_51885_51935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (21))){
var inst_51825 = (state_51876[(2)]);
var inst_51826 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51827 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51826);
var state_51876__$1 = (function (){var statearr_51886 = state_51876;
(statearr_51886[(7)] = inst_51825);

return statearr_51886;
})();
var statearr_51887_51936 = state_51876__$1;
(statearr_51887_51936[(2)] = inst_51827);

(statearr_51887_51936[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (31))){
var inst_51855 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51855)){
var statearr_51888_51937 = state_51876__$1;
(statearr_51888_51937[(1)] = (34));

} else {
var statearr_51889_51938 = state_51876__$1;
(statearr_51889_51938[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (32))){
var inst_51864 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51890_51939 = state_51876__$1;
(statearr_51890_51939[(2)] = inst_51864);

(statearr_51890_51939[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (33))){
var inst_51851 = (state_51876[(2)]);
var inst_51852 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51853 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51852);
var state_51876__$1 = (function (){var statearr_51891 = state_51876;
(statearr_51891[(8)] = inst_51851);

return statearr_51891;
})();
var statearr_51892_51940 = state_51876__$1;
(statearr_51892_51940[(2)] = inst_51853);

(statearr_51892_51940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (13))){
var inst_51810 = figwheel.client.heads_up.clear.call(null);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(16),inst_51810);
} else {
if((state_val_51877 === (22))){
var inst_51831 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51832 = figwheel.client.heads_up.append_warning_message.call(null,inst_51831);
var state_51876__$1 = state_51876;
var statearr_51893_51941 = state_51876__$1;
(statearr_51893_51941[(2)] = inst_51832);

(statearr_51893_51941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (36))){
var inst_51862 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51894_51942 = state_51876__$1;
(statearr_51894_51942[(2)] = inst_51862);

(statearr_51894_51942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (29))){
var inst_51842 = (state_51876[(2)]);
var inst_51843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51844 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51843);
var state_51876__$1 = (function (){var statearr_51895 = state_51876;
(statearr_51895[(9)] = inst_51842);

return statearr_51895;
})();
var statearr_51896_51943 = state_51876__$1;
(statearr_51896_51943[(2)] = inst_51844);

(statearr_51896_51943[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (6))){
var inst_51791 = (state_51876[(10)]);
var state_51876__$1 = state_51876;
var statearr_51897_51944 = state_51876__$1;
(statearr_51897_51944[(2)] = inst_51791);

(statearr_51897_51944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (28))){
var inst_51838 = (state_51876[(2)]);
var inst_51839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51840 = figwheel.client.heads_up.display_warning.call(null,inst_51839);
var state_51876__$1 = (function (){var statearr_51898 = state_51876;
(statearr_51898[(11)] = inst_51838);

return statearr_51898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(29),inst_51840);
} else {
if((state_val_51877 === (25))){
var inst_51836 = figwheel.client.heads_up.clear.call(null);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(28),inst_51836);
} else {
if((state_val_51877 === (34))){
var inst_51857 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(37),inst_51857);
} else {
if((state_val_51877 === (17))){
var inst_51816 = (state_51876[(2)]);
var inst_51817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51818 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51817);
var state_51876__$1 = (function (){var statearr_51899 = state_51876;
(statearr_51899[(12)] = inst_51816);

return statearr_51899;
})();
var statearr_51900_51945 = state_51876__$1;
(statearr_51900_51945[(2)] = inst_51818);

(statearr_51900_51945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (3))){
var inst_51808 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51808)){
var statearr_51901_51946 = state_51876__$1;
(statearr_51901_51946[(1)] = (13));

} else {
var statearr_51902_51947 = state_51876__$1;
(statearr_51902_51947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (12))){
var inst_51804 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51903_51948 = state_51876__$1;
(statearr_51903_51948[(2)] = inst_51804);

(statearr_51903_51948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (2))){
var inst_51791 = (state_51876[(10)]);
var inst_51791__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51876__$1 = (function (){var statearr_51904 = state_51876;
(statearr_51904[(10)] = inst_51791__$1);

return statearr_51904;
})();
if(cljs.core.truth_(inst_51791__$1)){
var statearr_51905_51949 = state_51876__$1;
(statearr_51905_51949[(1)] = (5));

} else {
var statearr_51906_51950 = state_51876__$1;
(statearr_51906_51950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (23))){
var inst_51834 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51834)){
var statearr_51907_51951 = state_51876__$1;
(statearr_51907_51951[(1)] = (25));

} else {
var statearr_51908_51952 = state_51876__$1;
(statearr_51908_51952[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (35))){
var state_51876__$1 = state_51876;
var statearr_51909_51953 = state_51876__$1;
(statearr_51909_51953[(2)] = null);

(statearr_51909_51953[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (19))){
var inst_51829 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51829)){
var statearr_51910_51954 = state_51876__$1;
(statearr_51910_51954[(1)] = (22));

} else {
var statearr_51911_51955 = state_51876__$1;
(statearr_51911_51955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (11))){
var inst_51800 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51912_51956 = state_51876__$1;
(statearr_51912_51956[(2)] = inst_51800);

(statearr_51912_51956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (9))){
var inst_51802 = figwheel.client.heads_up.clear.call(null);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(12),inst_51802);
} else {
if((state_val_51877 === (5))){
var inst_51793 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51876__$1 = state_51876;
var statearr_51913_51957 = state_51876__$1;
(statearr_51913_51957[(2)] = inst_51793);

(statearr_51913_51957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (14))){
var inst_51820 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51820)){
var statearr_51914_51958 = state_51876__$1;
(statearr_51914_51958[(1)] = (18));

} else {
var statearr_51915_51959 = state_51876__$1;
(statearr_51915_51959[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (26))){
var inst_51846 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51876__$1 = state_51876;
if(cljs.core.truth_(inst_51846)){
var statearr_51916_51960 = state_51876__$1;
(statearr_51916_51960[(1)] = (30));

} else {
var statearr_51917_51961 = state_51876__$1;
(statearr_51917_51961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (16))){
var inst_51812 = (state_51876[(2)]);
var inst_51813 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51814 = figwheel.client.heads_up.display_exception.call(null,inst_51813);
var state_51876__$1 = (function (){var statearr_51918 = state_51876;
(statearr_51918[(13)] = inst_51812);

return statearr_51918;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(17),inst_51814);
} else {
if((state_val_51877 === (30))){
var inst_51848 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51849 = figwheel.client.heads_up.display_warning.call(null,inst_51848);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(33),inst_51849);
} else {
if((state_val_51877 === (10))){
var inst_51806 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51919_51962 = state_51876__$1;
(statearr_51919_51962[(2)] = inst_51806);

(statearr_51919_51962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (18))){
var inst_51822 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51823 = figwheel.client.heads_up.display_exception.call(null,inst_51822);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(21),inst_51823);
} else {
if((state_val_51877 === (37))){
var inst_51859 = (state_51876[(2)]);
var state_51876__$1 = state_51876;
var statearr_51920_51963 = state_51876__$1;
(statearr_51920_51963[(2)] = inst_51859);

(statearr_51920_51963[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51877 === (8))){
var inst_51798 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51876__$1 = state_51876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51876__$1,(11),inst_51798);
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
});})(c__44307__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44193__auto__,c__44307__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto____0 = (function (){
var statearr_51924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51924[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto__);

(statearr_51924[(1)] = (1));

return statearr_51924;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto____1 = (function (state_51876){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_51876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e51925){if((e51925 instanceof Object)){
var ex__44197__auto__ = e51925;
var statearr_51926_51964 = state_51876;
(statearr_51926_51964[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51965 = state_51876;
state_51876 = G__51965;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto__ = function(state_51876){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto____1.call(this,state_51876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__,msg_hist,msg_names,msg))
})();
var state__44309__auto__ = (function (){var statearr_51927 = f__44308__auto__.call(null);
(statearr_51927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_51927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__,msg_hist,msg_names,msg))
);

return c__44307__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44307__auto___52028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___52028,ch){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___52028,ch){
return (function (state_52011){
var state_val_52012 = (state_52011[(1)]);
if((state_val_52012 === (1))){
var state_52011__$1 = state_52011;
var statearr_52013_52029 = state_52011__$1;
(statearr_52013_52029[(2)] = null);

(statearr_52013_52029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52012 === (2))){
var state_52011__$1 = state_52011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52011__$1,(4),ch);
} else {
if((state_val_52012 === (3))){
var inst_52009 = (state_52011[(2)]);
var state_52011__$1 = state_52011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52011__$1,inst_52009);
} else {
if((state_val_52012 === (4))){
var inst_51999 = (state_52011[(7)]);
var inst_51999__$1 = (state_52011[(2)]);
var state_52011__$1 = (function (){var statearr_52014 = state_52011;
(statearr_52014[(7)] = inst_51999__$1);

return statearr_52014;
})();
if(cljs.core.truth_(inst_51999__$1)){
var statearr_52015_52030 = state_52011__$1;
(statearr_52015_52030[(1)] = (5));

} else {
var statearr_52016_52031 = state_52011__$1;
(statearr_52016_52031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52012 === (5))){
var inst_51999 = (state_52011[(7)]);
var inst_52001 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51999);
var state_52011__$1 = state_52011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52011__$1,(8),inst_52001);
} else {
if((state_val_52012 === (6))){
var state_52011__$1 = state_52011;
var statearr_52017_52032 = state_52011__$1;
(statearr_52017_52032[(2)] = null);

(statearr_52017_52032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52012 === (7))){
var inst_52007 = (state_52011[(2)]);
var state_52011__$1 = state_52011;
var statearr_52018_52033 = state_52011__$1;
(statearr_52018_52033[(2)] = inst_52007);

(statearr_52018_52033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52012 === (8))){
var inst_52003 = (state_52011[(2)]);
var state_52011__$1 = (function (){var statearr_52019 = state_52011;
(statearr_52019[(8)] = inst_52003);

return statearr_52019;
})();
var statearr_52020_52034 = state_52011__$1;
(statearr_52020_52034[(2)] = null);

(statearr_52020_52034[(1)] = (2));


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
});})(c__44307__auto___52028,ch))
;
return ((function (switch__44193__auto__,c__44307__auto___52028,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44194__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44194__auto____0 = (function (){
var statearr_52024 = [null,null,null,null,null,null,null,null,null];
(statearr_52024[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44194__auto__);

(statearr_52024[(1)] = (1));

return statearr_52024;
});
var figwheel$client$heads_up_plugin_$_state_machine__44194__auto____1 = (function (state_52011){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_52011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e52025){if((e52025 instanceof Object)){
var ex__44197__auto__ = e52025;
var statearr_52026_52035 = state_52011;
(statearr_52026_52035[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52036 = state_52011;
state_52011 = G__52036;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44194__auto__ = function(state_52011){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44194__auto____1.call(this,state_52011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44194__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44194__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___52028,ch))
})();
var state__44309__auto__ = (function (){var statearr_52027 = f__44308__auto__.call(null);
(statearr_52027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___52028);

return statearr_52027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___52028,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_52057){
var state_val_52058 = (state_52057[(1)]);
if((state_val_52058 === (1))){
var inst_52052 = cljs.core.async.timeout.call(null,(3000));
var state_52057__$1 = state_52057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52057__$1,(2),inst_52052);
} else {
if((state_val_52058 === (2))){
var inst_52054 = (state_52057[(2)]);
var inst_52055 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52057__$1 = (function (){var statearr_52059 = state_52057;
(statearr_52059[(7)] = inst_52054);

return statearr_52059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52057__$1,inst_52055);
} else {
return null;
}
}
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44194__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44194__auto____0 = (function (){
var statearr_52063 = [null,null,null,null,null,null,null,null];
(statearr_52063[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44194__auto__);

(statearr_52063[(1)] = (1));

return statearr_52063;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44194__auto____1 = (function (state_52057){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_52057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e52064){if((e52064 instanceof Object)){
var ex__44197__auto__ = e52064;
var statearr_52065_52067 = state_52057;
(statearr_52065_52067[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52068 = state_52057;
state_52057 = G__52068;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44194__auto__ = function(state_52057){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44194__auto____1.call(this,state_52057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44194__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44194__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_52066 = f__44308__auto__.call(null);
(statearr_52066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_52066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__6753__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6753__auto__)){
var figwheel_version = temp__6753__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__,figwheel_version,temp__6753__auto__){
return (function (state_52091){
var state_val_52092 = (state_52091[(1)]);
if((state_val_52092 === (1))){
var inst_52085 = cljs.core.async.timeout.call(null,(2000));
var state_52091__$1 = state_52091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52091__$1,(2),inst_52085);
} else {
if((state_val_52092 === (2))){
var inst_52087 = (state_52091[(2)]);
var inst_52088 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52089 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52088);
var state_52091__$1 = (function (){var statearr_52093 = state_52091;
(statearr_52093[(7)] = inst_52087);

return statearr_52093;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52091__$1,inst_52089);
} else {
return null;
}
}
});})(c__44307__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto____0 = (function (){
var statearr_52097 = [null,null,null,null,null,null,null,null];
(statearr_52097[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto__);

(statearr_52097[(1)] = (1));

return statearr_52097;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto____1 = (function (state_52091){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_52091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e52098){if((e52098 instanceof Object)){
var ex__44197__auto__ = e52098;
var statearr_52099_52101 = state_52091;
(statearr_52099_52101[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52102 = state_52091;
state_52091 = G__52102;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto__ = function(state_52091){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto____1.call(this,state_52091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__,figwheel_version,temp__6753__auto__))
})();
var state__44309__auto__ = (function (){var statearr_52100 = f__44308__auto__.call(null);
(statearr_52100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_52100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__,figwheel_version,temp__6753__auto__))
);

return c__44307__auto__;
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
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52103){
var map__52107 = p__52103;
var map__52107__$1 = ((((!((map__52107 == null)))?((((map__52107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52107.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52107):map__52107);
var file = cljs.core.get.call(null,map__52107__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52107__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52107__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52109 = "";
var G__52109__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52109),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__52109);
var G__52109__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52109__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__52109__$1);
if(cljs.core.truth_((function (){var and__35875__auto__ = line;
if(cljs.core.truth_(and__35875__auto__)){
return column;
} else {
return and__35875__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52109__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__52109__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52110){
var map__52117 = p__52110;
var map__52117__$1 = ((((!((map__52117 == null)))?((((map__52117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52117):map__52117);
var ed = map__52117__$1;
var formatted_exception = cljs.core.get.call(null,map__52117__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52117__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52117__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52119_52123 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52120_52124 = null;
var count__52121_52125 = (0);
var i__52122_52126 = (0);
while(true){
if((i__52122_52126 < count__52121_52125)){
var msg_52127 = cljs.core._nth.call(null,chunk__52120_52124,i__52122_52126);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52127);

var G__52128 = seq__52119_52123;
var G__52129 = chunk__52120_52124;
var G__52130 = count__52121_52125;
var G__52131 = (i__52122_52126 + (1));
seq__52119_52123 = G__52128;
chunk__52120_52124 = G__52129;
count__52121_52125 = G__52130;
i__52122_52126 = G__52131;
continue;
} else {
var temp__6753__auto___52132 = cljs.core.seq.call(null,seq__52119_52123);
if(temp__6753__auto___52132){
var seq__52119_52133__$1 = temp__6753__auto___52132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52119_52133__$1)){
var c__36798__auto___52134 = cljs.core.chunk_first.call(null,seq__52119_52133__$1);
var G__52135 = cljs.core.chunk_rest.call(null,seq__52119_52133__$1);
var G__52136 = c__36798__auto___52134;
var G__52137 = cljs.core.count.call(null,c__36798__auto___52134);
var G__52138 = (0);
seq__52119_52123 = G__52135;
chunk__52120_52124 = G__52136;
count__52121_52125 = G__52137;
i__52122_52126 = G__52138;
continue;
} else {
var msg_52139 = cljs.core.first.call(null,seq__52119_52133__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52139);

var G__52140 = cljs.core.next.call(null,seq__52119_52133__$1);
var G__52141 = null;
var G__52142 = (0);
var G__52143 = (0);
seq__52119_52123 = G__52140;
chunk__52120_52124 = G__52141;
count__52121_52125 = G__52142;
i__52122_52126 = G__52143;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52144){
var map__52147 = p__52144;
var map__52147__$1 = ((((!((map__52147 == null)))?((((map__52147.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52147.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52147):map__52147);
var w = map__52147__$1;
var message = cljs.core.get.call(null,map__52147__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__35875__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__35875__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__35875__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__52159 = cljs.core.seq.call(null,plugins);
var chunk__52160 = null;
var count__52161 = (0);
var i__52162 = (0);
while(true){
if((i__52162 < count__52161)){
var vec__52163 = cljs.core._nth.call(null,chunk__52160,i__52162);
var k = cljs.core.nth.call(null,vec__52163,(0),null);
var plugin = cljs.core.nth.call(null,vec__52163,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52169 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52159,chunk__52160,count__52161,i__52162,pl_52169,vec__52163,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52169.call(null,msg_hist);
});})(seq__52159,chunk__52160,count__52161,i__52162,pl_52169,vec__52163,k,plugin))
);
} else {
}

var G__52170 = seq__52159;
var G__52171 = chunk__52160;
var G__52172 = count__52161;
var G__52173 = (i__52162 + (1));
seq__52159 = G__52170;
chunk__52160 = G__52171;
count__52161 = G__52172;
i__52162 = G__52173;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__52159);
if(temp__6753__auto__){
var seq__52159__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52159__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__52159__$1);
var G__52174 = cljs.core.chunk_rest.call(null,seq__52159__$1);
var G__52175 = c__36798__auto__;
var G__52176 = cljs.core.count.call(null,c__36798__auto__);
var G__52177 = (0);
seq__52159 = G__52174;
chunk__52160 = G__52175;
count__52161 = G__52176;
i__52162 = G__52177;
continue;
} else {
var vec__52166 = cljs.core.first.call(null,seq__52159__$1);
var k = cljs.core.nth.call(null,vec__52166,(0),null);
var plugin = cljs.core.nth.call(null,vec__52166,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52178 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52159,chunk__52160,count__52161,i__52162,pl_52178,vec__52166,k,plugin,seq__52159__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52178.call(null,msg_hist);
});})(seq__52159,chunk__52160,count__52161,i__52162,pl_52178,vec__52166,k,plugin,seq__52159__$1,temp__6753__auto__))
);
} else {
}

var G__52179 = cljs.core.next.call(null,seq__52159__$1);
var G__52180 = null;
var G__52181 = (0);
var G__52182 = (0);
seq__52159 = G__52179;
chunk__52160 = G__52180;
count__52161 = G__52181;
i__52162 = G__52182;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args52183 = [];
var len__37108__auto___52190 = arguments.length;
var i__37109__auto___52191 = (0);
while(true){
if((i__37109__auto___52191 < len__37108__auto___52190)){
args52183.push((arguments[i__37109__auto___52191]));

var G__52192 = (i__37109__auto___52191 + (1));
i__37109__auto___52191 = G__52192;
continue;
} else {
}
break;
}

var G__52185 = args52183.length;
switch (G__52185) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52183.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__52186_52194 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52187_52195 = null;
var count__52188_52196 = (0);
var i__52189_52197 = (0);
while(true){
if((i__52189_52197 < count__52188_52196)){
var msg_52198 = cljs.core._nth.call(null,chunk__52187_52195,i__52189_52197);
figwheel.client.socket.handle_incoming_message.call(null,msg_52198);

var G__52199 = seq__52186_52194;
var G__52200 = chunk__52187_52195;
var G__52201 = count__52188_52196;
var G__52202 = (i__52189_52197 + (1));
seq__52186_52194 = G__52199;
chunk__52187_52195 = G__52200;
count__52188_52196 = G__52201;
i__52189_52197 = G__52202;
continue;
} else {
var temp__6753__auto___52203 = cljs.core.seq.call(null,seq__52186_52194);
if(temp__6753__auto___52203){
var seq__52186_52204__$1 = temp__6753__auto___52203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52186_52204__$1)){
var c__36798__auto___52205 = cljs.core.chunk_first.call(null,seq__52186_52204__$1);
var G__52206 = cljs.core.chunk_rest.call(null,seq__52186_52204__$1);
var G__52207 = c__36798__auto___52205;
var G__52208 = cljs.core.count.call(null,c__36798__auto___52205);
var G__52209 = (0);
seq__52186_52194 = G__52206;
chunk__52187_52195 = G__52207;
count__52188_52196 = G__52208;
i__52189_52197 = G__52209;
continue;
} else {
var msg_52210 = cljs.core.first.call(null,seq__52186_52204__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52210);

var G__52211 = cljs.core.next.call(null,seq__52186_52204__$1);
var G__52212 = null;
var G__52213 = (0);
var G__52214 = (0);
seq__52186_52194 = G__52211;
chunk__52187_52195 = G__52212;
count__52188_52196 = G__52213;
i__52189_52197 = G__52214;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__37115__auto__ = [];
var len__37108__auto___52219 = arguments.length;
var i__37109__auto___52220 = (0);
while(true){
if((i__37109__auto___52220 < len__37108__auto___52219)){
args__37115__auto__.push((arguments[i__37109__auto___52220]));

var G__52221 = (i__37109__auto___52220 + (1));
i__37109__auto___52220 = G__52221;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52216){
var map__52217 = p__52216;
var map__52217__$1 = ((((!((map__52217 == null)))?((((map__52217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52217.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52217):map__52217);
var opts = map__52217__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52215){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52215));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52223){if((e52223 instanceof Error)){
var e = e52223;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52223;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__52227){
var map__52228 = p__52227;
var map__52228__$1 = ((((!((map__52228 == null)))?((((map__52228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52228):map__52228);
var msg_name = cljs.core.get.call(null,map__52228__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1509941621646