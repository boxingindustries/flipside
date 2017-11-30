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
var args51417 = [];
var len__37108__auto___51420 = arguments.length;
var i__37109__auto___51421 = (0);
while(true){
if((i__37109__auto___51421 < len__37108__auto___51420)){
args51417.push((arguments[i__37109__auto___51421]));

var G__51422 = (i__37109__auto___51421 + (1));
i__37109__auto___51421 = G__51422;
continue;
} else {
}
break;
}

var G__51419 = args51417.length;
switch (G__51419) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51417.length)].join('')));

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
var len__37108__auto___51425 = arguments.length;
var i__37109__auto___51426 = (0);
while(true){
if((i__37109__auto___51426 < len__37108__auto___51425)){
args__37115__auto__.push((arguments[i__37109__auto___51426]));

var G__51427 = (i__37109__auto___51426 + (1));
i__37109__auto___51426 = G__51427;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51424){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51424));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__37115__auto__ = [];
var len__37108__auto___51429 = arguments.length;
var i__37109__auto___51430 = (0);
while(true){
if((i__37109__auto___51430 < len__37108__auto___51429)){
args__37115__auto__.push((arguments[i__37109__auto___51430]));

var G__51431 = (i__37109__auto___51430 + (1));
i__37109__auto___51430 = G__51431;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51428){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51428));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51432){
var map__51435 = p__51432;
var map__51435__$1 = ((((!((map__51435 == null)))?((((map__51435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51435.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51435):map__51435);
var message = cljs.core.get.call(null,map__51435__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51435__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__44331__auto___51597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___51597,ch){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___51597,ch){
return (function (state_51566){
var state_val_51567 = (state_51566[(1)]);
if((state_val_51567 === (7))){
var inst_51562 = (state_51566[(2)]);
var state_51566__$1 = state_51566;
var statearr_51568_51598 = state_51566__$1;
(statearr_51568_51598[(2)] = inst_51562);

(statearr_51568_51598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (1))){
var state_51566__$1 = state_51566;
var statearr_51569_51599 = state_51566__$1;
(statearr_51569_51599[(2)] = null);

(statearr_51569_51599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (4))){
var inst_51519 = (state_51566[(7)]);
var inst_51519__$1 = (state_51566[(2)]);
var state_51566__$1 = (function (){var statearr_51570 = state_51566;
(statearr_51570[(7)] = inst_51519__$1);

return statearr_51570;
})();
if(cljs.core.truth_(inst_51519__$1)){
var statearr_51571_51600 = state_51566__$1;
(statearr_51571_51600[(1)] = (5));

} else {
var statearr_51572_51601 = state_51566__$1;
(statearr_51572_51601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (15))){
var inst_51526 = (state_51566[(8)]);
var inst_51541 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51526);
var inst_51542 = cljs.core.first.call(null,inst_51541);
var inst_51543 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51542);
var inst_51544 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51543)].join('');
var inst_51545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51544);
var state_51566__$1 = state_51566;
var statearr_51573_51602 = state_51566__$1;
(statearr_51573_51602[(2)] = inst_51545);

(statearr_51573_51602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (13))){
var inst_51550 = (state_51566[(2)]);
var state_51566__$1 = state_51566;
var statearr_51574_51603 = state_51566__$1;
(statearr_51574_51603[(2)] = inst_51550);

(statearr_51574_51603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (6))){
var state_51566__$1 = state_51566;
var statearr_51575_51604 = state_51566__$1;
(statearr_51575_51604[(2)] = null);

(statearr_51575_51604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (17))){
var inst_51548 = (state_51566[(2)]);
var state_51566__$1 = state_51566;
var statearr_51576_51605 = state_51566__$1;
(statearr_51576_51605[(2)] = inst_51548);

(statearr_51576_51605[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (3))){
var inst_51564 = (state_51566[(2)]);
var state_51566__$1 = state_51566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51566__$1,inst_51564);
} else {
if((state_val_51567 === (12))){
var inst_51525 = (state_51566[(9)]);
var inst_51539 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51525,opts);
var state_51566__$1 = state_51566;
if(cljs.core.truth_(inst_51539)){
var statearr_51577_51606 = state_51566__$1;
(statearr_51577_51606[(1)] = (15));

} else {
var statearr_51578_51607 = state_51566__$1;
(statearr_51578_51607[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (2))){
var state_51566__$1 = state_51566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51566__$1,(4),ch);
} else {
if((state_val_51567 === (11))){
var inst_51526 = (state_51566[(8)]);
var inst_51531 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51532 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51526);
var inst_51533 = cljs.core.async.timeout.call(null,(1000));
var inst_51534 = [inst_51532,inst_51533];
var inst_51535 = (new cljs.core.PersistentVector(null,2,(5),inst_51531,inst_51534,null));
var state_51566__$1 = state_51566;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51566__$1,(14),inst_51535);
} else {
if((state_val_51567 === (9))){
var inst_51526 = (state_51566[(8)]);
var inst_51552 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51553 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51526);
var inst_51554 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51553);
var inst_51555 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51554)].join('');
var inst_51556 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51555);
var state_51566__$1 = (function (){var statearr_51579 = state_51566;
(statearr_51579[(10)] = inst_51552);

return statearr_51579;
})();
var statearr_51580_51608 = state_51566__$1;
(statearr_51580_51608[(2)] = inst_51556);

(statearr_51580_51608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (5))){
var inst_51519 = (state_51566[(7)]);
var inst_51521 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51522 = (new cljs.core.PersistentArrayMap(null,2,inst_51521,null));
var inst_51523 = (new cljs.core.PersistentHashSet(null,inst_51522,null));
var inst_51524 = figwheel.client.focus_msgs.call(null,inst_51523,inst_51519);
var inst_51525 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51524);
var inst_51526 = cljs.core.first.call(null,inst_51524);
var inst_51527 = figwheel.client.autoload_QMARK_.call(null);
var state_51566__$1 = (function (){var statearr_51581 = state_51566;
(statearr_51581[(9)] = inst_51525);

(statearr_51581[(8)] = inst_51526);

return statearr_51581;
})();
if(cljs.core.truth_(inst_51527)){
var statearr_51582_51609 = state_51566__$1;
(statearr_51582_51609[(1)] = (8));

} else {
var statearr_51583_51610 = state_51566__$1;
(statearr_51583_51610[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (14))){
var inst_51537 = (state_51566[(2)]);
var state_51566__$1 = state_51566;
var statearr_51584_51611 = state_51566__$1;
(statearr_51584_51611[(2)] = inst_51537);

(statearr_51584_51611[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (16))){
var state_51566__$1 = state_51566;
var statearr_51585_51612 = state_51566__$1;
(statearr_51585_51612[(2)] = null);

(statearr_51585_51612[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (10))){
var inst_51558 = (state_51566[(2)]);
var state_51566__$1 = (function (){var statearr_51586 = state_51566;
(statearr_51586[(11)] = inst_51558);

return statearr_51586;
})();
var statearr_51587_51613 = state_51566__$1;
(statearr_51587_51613[(2)] = null);

(statearr_51587_51613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51567 === (8))){
var inst_51525 = (state_51566[(9)]);
var inst_51529 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51525,opts);
var state_51566__$1 = state_51566;
if(cljs.core.truth_(inst_51529)){
var statearr_51588_51614 = state_51566__$1;
(statearr_51588_51614[(1)] = (11));

} else {
var statearr_51589_51615 = state_51566__$1;
(statearr_51589_51615[(1)] = (12));

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
});})(c__44331__auto___51597,ch))
;
return ((function (switch__44217__auto__,c__44331__auto___51597,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__44218__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__44218__auto____0 = (function (){
var statearr_51593 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51593[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__44218__auto__);

(statearr_51593[(1)] = (1));

return statearr_51593;
});
var figwheel$client$file_reloader_plugin_$_state_machine__44218__auto____1 = (function (state_51566){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_51566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e51594){if((e51594 instanceof Object)){
var ex__44221__auto__ = e51594;
var statearr_51595_51616 = state_51566;
(statearr_51595_51616[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51617 = state_51566;
state_51566 = G__51617;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__44218__auto__ = function(state_51566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__44218__auto____1.call(this,state_51566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__44218__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__44218__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___51597,ch))
})();
var state__44333__auto__ = (function (){var statearr_51596 = f__44332__auto__.call(null);
(statearr_51596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___51597);

return statearr_51596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___51597,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51618_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51618_SHARP_));
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
var base_path_51621 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51621){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51620){if((e51620 instanceof Error)){
var e = e51620;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51621], null));
} else {
var e = e51620;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51621))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51622){
var map__51631 = p__51622;
var map__51631__$1 = ((((!((map__51631 == null)))?((((map__51631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51631):map__51631);
var opts = map__51631__$1;
var build_id = cljs.core.get.call(null,map__51631__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51631,map__51631__$1,opts,build_id){
return (function (p__51633){
var vec__51634 = p__51633;
var seq__51635 = cljs.core.seq.call(null,vec__51634);
var first__51636 = cljs.core.first.call(null,seq__51635);
var seq__51635__$1 = cljs.core.next.call(null,seq__51635);
var map__51637 = first__51636;
var map__51637__$1 = ((((!((map__51637 == null)))?((((map__51637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51637):map__51637);
var msg = map__51637__$1;
var msg_name = cljs.core.get.call(null,map__51637__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51635__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51634,seq__51635,first__51636,seq__51635__$1,map__51637,map__51637__$1,msg,msg_name,_,map__51631,map__51631__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51634,seq__51635,first__51636,seq__51635__$1,map__51637,map__51637__$1,msg,msg_name,_,map__51631,map__51631__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51631,map__51631__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51645){
var vec__51646 = p__51645;
var seq__51647 = cljs.core.seq.call(null,vec__51646);
var first__51648 = cljs.core.first.call(null,seq__51647);
var seq__51647__$1 = cljs.core.next.call(null,seq__51647);
var map__51649 = first__51648;
var map__51649__$1 = ((((!((map__51649 == null)))?((((map__51649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51649):map__51649);
var msg = map__51649__$1;
var msg_name = cljs.core.get.call(null,map__51649__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51647__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51651){
var map__51663 = p__51651;
var map__51663__$1 = ((((!((map__51663 == null)))?((((map__51663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51663):map__51663);
var on_compile_warning = cljs.core.get.call(null,map__51663__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51663__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51663,map__51663__$1,on_compile_warning,on_compile_fail){
return (function (p__51665){
var vec__51666 = p__51665;
var seq__51667 = cljs.core.seq.call(null,vec__51666);
var first__51668 = cljs.core.first.call(null,seq__51667);
var seq__51667__$1 = cljs.core.next.call(null,seq__51667);
var map__51669 = first__51668;
var map__51669__$1 = ((((!((map__51669 == null)))?((((map__51669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51669):map__51669);
var msg = map__51669__$1;
var msg_name = cljs.core.get.call(null,map__51669__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51667__$1;
var pred__51671 = cljs.core._EQ_;
var expr__51672 = msg_name;
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51672))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51671.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51672))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51663,map__51663__$1,on_compile_warning,on_compile_fail))
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
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__,msg_hist,msg_names,msg){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__,msg_hist,msg_names,msg){
return (function (state_51900){
var state_val_51901 = (state_51900[(1)]);
if((state_val_51901 === (7))){
var inst_51820 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51820)){
var statearr_51902_51952 = state_51900__$1;
(statearr_51902_51952[(1)] = (8));

} else {
var statearr_51903_51953 = state_51900__$1;
(statearr_51903_51953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (20))){
var inst_51894 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51904_51954 = state_51900__$1;
(statearr_51904_51954[(2)] = inst_51894);

(statearr_51904_51954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (27))){
var inst_51890 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51905_51955 = state_51900__$1;
(statearr_51905_51955[(2)] = inst_51890);

(statearr_51905_51955[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (1))){
var inst_51813 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51813)){
var statearr_51906_51956 = state_51900__$1;
(statearr_51906_51956[(1)] = (2));

} else {
var statearr_51907_51957 = state_51900__$1;
(statearr_51907_51957[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (24))){
var inst_51892 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51908_51958 = state_51900__$1;
(statearr_51908_51958[(2)] = inst_51892);

(statearr_51908_51958[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (4))){
var inst_51898 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51900__$1,inst_51898);
} else {
if((state_val_51901 === (15))){
var inst_51896 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51909_51959 = state_51900__$1;
(statearr_51909_51959[(2)] = inst_51896);

(statearr_51909_51959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (21))){
var inst_51849 = (state_51900[(2)]);
var inst_51850 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51851 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51850);
var state_51900__$1 = (function (){var statearr_51910 = state_51900;
(statearr_51910[(7)] = inst_51849);

return statearr_51910;
})();
var statearr_51911_51960 = state_51900__$1;
(statearr_51911_51960[(2)] = inst_51851);

(statearr_51911_51960[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (31))){
var inst_51879 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51879)){
var statearr_51912_51961 = state_51900__$1;
(statearr_51912_51961[(1)] = (34));

} else {
var statearr_51913_51962 = state_51900__$1;
(statearr_51913_51962[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (32))){
var inst_51888 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51914_51963 = state_51900__$1;
(statearr_51914_51963[(2)] = inst_51888);

(statearr_51914_51963[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (33))){
var inst_51875 = (state_51900[(2)]);
var inst_51876 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51877 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51876);
var state_51900__$1 = (function (){var statearr_51915 = state_51900;
(statearr_51915[(8)] = inst_51875);

return statearr_51915;
})();
var statearr_51916_51964 = state_51900__$1;
(statearr_51916_51964[(2)] = inst_51877);

(statearr_51916_51964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (13))){
var inst_51834 = figwheel.client.heads_up.clear.call(null);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(16),inst_51834);
} else {
if((state_val_51901 === (22))){
var inst_51855 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51856 = figwheel.client.heads_up.append_warning_message.call(null,inst_51855);
var state_51900__$1 = state_51900;
var statearr_51917_51965 = state_51900__$1;
(statearr_51917_51965[(2)] = inst_51856);

(statearr_51917_51965[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (36))){
var inst_51886 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51918_51966 = state_51900__$1;
(statearr_51918_51966[(2)] = inst_51886);

(statearr_51918_51966[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (29))){
var inst_51866 = (state_51900[(2)]);
var inst_51867 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51868 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51867);
var state_51900__$1 = (function (){var statearr_51919 = state_51900;
(statearr_51919[(9)] = inst_51866);

return statearr_51919;
})();
var statearr_51920_51967 = state_51900__$1;
(statearr_51920_51967[(2)] = inst_51868);

(statearr_51920_51967[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (6))){
var inst_51815 = (state_51900[(10)]);
var state_51900__$1 = state_51900;
var statearr_51921_51968 = state_51900__$1;
(statearr_51921_51968[(2)] = inst_51815);

(statearr_51921_51968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (28))){
var inst_51862 = (state_51900[(2)]);
var inst_51863 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51864 = figwheel.client.heads_up.display_warning.call(null,inst_51863);
var state_51900__$1 = (function (){var statearr_51922 = state_51900;
(statearr_51922[(11)] = inst_51862);

return statearr_51922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(29),inst_51864);
} else {
if((state_val_51901 === (25))){
var inst_51860 = figwheel.client.heads_up.clear.call(null);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(28),inst_51860);
} else {
if((state_val_51901 === (34))){
var inst_51881 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(37),inst_51881);
} else {
if((state_val_51901 === (17))){
var inst_51840 = (state_51900[(2)]);
var inst_51841 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51842 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51841);
var state_51900__$1 = (function (){var statearr_51923 = state_51900;
(statearr_51923[(12)] = inst_51840);

return statearr_51923;
})();
var statearr_51924_51969 = state_51900__$1;
(statearr_51924_51969[(2)] = inst_51842);

(statearr_51924_51969[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (3))){
var inst_51832 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51832)){
var statearr_51925_51970 = state_51900__$1;
(statearr_51925_51970[(1)] = (13));

} else {
var statearr_51926_51971 = state_51900__$1;
(statearr_51926_51971[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (12))){
var inst_51828 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51927_51972 = state_51900__$1;
(statearr_51927_51972[(2)] = inst_51828);

(statearr_51927_51972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (2))){
var inst_51815 = (state_51900[(10)]);
var inst_51815__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51900__$1 = (function (){var statearr_51928 = state_51900;
(statearr_51928[(10)] = inst_51815__$1);

return statearr_51928;
})();
if(cljs.core.truth_(inst_51815__$1)){
var statearr_51929_51973 = state_51900__$1;
(statearr_51929_51973[(1)] = (5));

} else {
var statearr_51930_51974 = state_51900__$1;
(statearr_51930_51974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (23))){
var inst_51858 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51858)){
var statearr_51931_51975 = state_51900__$1;
(statearr_51931_51975[(1)] = (25));

} else {
var statearr_51932_51976 = state_51900__$1;
(statearr_51932_51976[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (35))){
var state_51900__$1 = state_51900;
var statearr_51933_51977 = state_51900__$1;
(statearr_51933_51977[(2)] = null);

(statearr_51933_51977[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (19))){
var inst_51853 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51853)){
var statearr_51934_51978 = state_51900__$1;
(statearr_51934_51978[(1)] = (22));

} else {
var statearr_51935_51979 = state_51900__$1;
(statearr_51935_51979[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (11))){
var inst_51824 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51936_51980 = state_51900__$1;
(statearr_51936_51980[(2)] = inst_51824);

(statearr_51936_51980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (9))){
var inst_51826 = figwheel.client.heads_up.clear.call(null);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(12),inst_51826);
} else {
if((state_val_51901 === (5))){
var inst_51817 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51900__$1 = state_51900;
var statearr_51937_51981 = state_51900__$1;
(statearr_51937_51981[(2)] = inst_51817);

(statearr_51937_51981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (14))){
var inst_51844 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51844)){
var statearr_51938_51982 = state_51900__$1;
(statearr_51938_51982[(1)] = (18));

} else {
var statearr_51939_51983 = state_51900__$1;
(statearr_51939_51983[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (26))){
var inst_51870 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51900__$1 = state_51900;
if(cljs.core.truth_(inst_51870)){
var statearr_51940_51984 = state_51900__$1;
(statearr_51940_51984[(1)] = (30));

} else {
var statearr_51941_51985 = state_51900__$1;
(statearr_51941_51985[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (16))){
var inst_51836 = (state_51900[(2)]);
var inst_51837 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51838 = figwheel.client.heads_up.display_exception.call(null,inst_51837);
var state_51900__$1 = (function (){var statearr_51942 = state_51900;
(statearr_51942[(13)] = inst_51836);

return statearr_51942;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(17),inst_51838);
} else {
if((state_val_51901 === (30))){
var inst_51872 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51873 = figwheel.client.heads_up.display_warning.call(null,inst_51872);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(33),inst_51873);
} else {
if((state_val_51901 === (10))){
var inst_51830 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51943_51986 = state_51900__$1;
(statearr_51943_51986[(2)] = inst_51830);

(statearr_51943_51986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (18))){
var inst_51846 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51847 = figwheel.client.heads_up.display_exception.call(null,inst_51846);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(21),inst_51847);
} else {
if((state_val_51901 === (37))){
var inst_51883 = (state_51900[(2)]);
var state_51900__$1 = state_51900;
var statearr_51944_51987 = state_51900__$1;
(statearr_51944_51987[(2)] = inst_51883);

(statearr_51944_51987[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51901 === (8))){
var inst_51822 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51900__$1 = state_51900;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51900__$1,(11),inst_51822);
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
});})(c__44331__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__44217__auto__,c__44331__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto____0 = (function (){
var statearr_51948 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51948[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto__);

(statearr_51948[(1)] = (1));

return statearr_51948;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto____1 = (function (state_51900){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_51900);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e51949){if((e51949 instanceof Object)){
var ex__44221__auto__ = e51949;
var statearr_51950_51988 = state_51900;
(statearr_51950_51988[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51900);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51949;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51989 = state_51900;
state_51900 = G__51989;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto__ = function(state_51900){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto____1.call(this,state_51900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__,msg_hist,msg_names,msg))
})();
var state__44333__auto__ = (function (){var statearr_51951 = f__44332__auto__.call(null);
(statearr_51951[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_51951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__,msg_hist,msg_names,msg))
);

return c__44331__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__44331__auto___52052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___52052,ch){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___52052,ch){
return (function (state_52035){
var state_val_52036 = (state_52035[(1)]);
if((state_val_52036 === (1))){
var state_52035__$1 = state_52035;
var statearr_52037_52053 = state_52035__$1;
(statearr_52037_52053[(2)] = null);

(statearr_52037_52053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52036 === (2))){
var state_52035__$1 = state_52035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52035__$1,(4),ch);
} else {
if((state_val_52036 === (3))){
var inst_52033 = (state_52035[(2)]);
var state_52035__$1 = state_52035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52035__$1,inst_52033);
} else {
if((state_val_52036 === (4))){
var inst_52023 = (state_52035[(7)]);
var inst_52023__$1 = (state_52035[(2)]);
var state_52035__$1 = (function (){var statearr_52038 = state_52035;
(statearr_52038[(7)] = inst_52023__$1);

return statearr_52038;
})();
if(cljs.core.truth_(inst_52023__$1)){
var statearr_52039_52054 = state_52035__$1;
(statearr_52039_52054[(1)] = (5));

} else {
var statearr_52040_52055 = state_52035__$1;
(statearr_52040_52055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52036 === (5))){
var inst_52023 = (state_52035[(7)]);
var inst_52025 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_52023);
var state_52035__$1 = state_52035;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52035__$1,(8),inst_52025);
} else {
if((state_val_52036 === (6))){
var state_52035__$1 = state_52035;
var statearr_52041_52056 = state_52035__$1;
(statearr_52041_52056[(2)] = null);

(statearr_52041_52056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52036 === (7))){
var inst_52031 = (state_52035[(2)]);
var state_52035__$1 = state_52035;
var statearr_52042_52057 = state_52035__$1;
(statearr_52042_52057[(2)] = inst_52031);

(statearr_52042_52057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52036 === (8))){
var inst_52027 = (state_52035[(2)]);
var state_52035__$1 = (function (){var statearr_52043 = state_52035;
(statearr_52043[(8)] = inst_52027);

return statearr_52043;
})();
var statearr_52044_52058 = state_52035__$1;
(statearr_52044_52058[(2)] = null);

(statearr_52044_52058[(1)] = (2));


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
});})(c__44331__auto___52052,ch))
;
return ((function (switch__44217__auto__,c__44331__auto___52052,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__44218__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__44218__auto____0 = (function (){
var statearr_52048 = [null,null,null,null,null,null,null,null,null];
(statearr_52048[(0)] = figwheel$client$heads_up_plugin_$_state_machine__44218__auto__);

(statearr_52048[(1)] = (1));

return statearr_52048;
});
var figwheel$client$heads_up_plugin_$_state_machine__44218__auto____1 = (function (state_52035){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_52035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e52049){if((e52049 instanceof Object)){
var ex__44221__auto__ = e52049;
var statearr_52050_52059 = state_52035;
(statearr_52050_52059[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52049;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52060 = state_52035;
state_52035 = G__52060;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__44218__auto__ = function(state_52035){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__44218__auto____1.call(this,state_52035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__44218__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__44218__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___52052,ch))
})();
var state__44333__auto__ = (function (){var statearr_52051 = f__44332__auto__.call(null);
(statearr_52051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___52052);

return statearr_52051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___52052,ch))
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
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__){
return (function (state_52081){
var state_val_52082 = (state_52081[(1)]);
if((state_val_52082 === (1))){
var inst_52076 = cljs.core.async.timeout.call(null,(3000));
var state_52081__$1 = state_52081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52081__$1,(2),inst_52076);
} else {
if((state_val_52082 === (2))){
var inst_52078 = (state_52081[(2)]);
var inst_52079 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_52081__$1 = (function (){var statearr_52083 = state_52081;
(statearr_52083[(7)] = inst_52078);

return statearr_52083;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52081__$1,inst_52079);
} else {
return null;
}
}
});})(c__44331__auto__))
;
return ((function (switch__44217__auto__,c__44331__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__44218__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__44218__auto____0 = (function (){
var statearr_52087 = [null,null,null,null,null,null,null,null];
(statearr_52087[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__44218__auto__);

(statearr_52087[(1)] = (1));

return statearr_52087;
});
var figwheel$client$enforce_project_plugin_$_state_machine__44218__auto____1 = (function (state_52081){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_52081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e52088){if((e52088 instanceof Object)){
var ex__44221__auto__ = e52088;
var statearr_52089_52091 = state_52081;
(statearr_52089_52091[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52092 = state_52081;
state_52081 = G__52092;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__44218__auto__ = function(state_52081){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__44218__auto____1.call(this,state_52081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__44218__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__44218__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__))
})();
var state__44333__auto__ = (function (){var statearr_52090 = f__44332__auto__.call(null);
(statearr_52090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_52090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__))
);

return c__44331__auto__;
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
var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__,figwheel_version,temp__6753__auto__){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__,figwheel_version,temp__6753__auto__){
return (function (state_52115){
var state_val_52116 = (state_52115[(1)]);
if((state_val_52116 === (1))){
var inst_52109 = cljs.core.async.timeout.call(null,(2000));
var state_52115__$1 = state_52115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52115__$1,(2),inst_52109);
} else {
if((state_val_52116 === (2))){
var inst_52111 = (state_52115[(2)]);
var inst_52112 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_52113 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_52112);
var state_52115__$1 = (function (){var statearr_52117 = state_52115;
(statearr_52117[(7)] = inst_52111);

return statearr_52117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52115__$1,inst_52113);
} else {
return null;
}
}
});})(c__44331__auto__,figwheel_version,temp__6753__auto__))
;
return ((function (switch__44217__auto__,c__44331__auto__,figwheel_version,temp__6753__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto____0 = (function (){
var statearr_52121 = [null,null,null,null,null,null,null,null];
(statearr_52121[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto__);

(statearr_52121[(1)] = (1));

return statearr_52121;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto____1 = (function (state_52115){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_52115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e52122){if((e52122 instanceof Object)){
var ex__44221__auto__ = e52122;
var statearr_52123_52125 = state_52115;
(statearr_52123_52125[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52126 = state_52115;
state_52115 = G__52126;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto__ = function(state_52115){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto____1.call(this,state_52115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__,figwheel_version,temp__6753__auto__))
})();
var state__44333__auto__ = (function (){var statearr_52124 = f__44332__auto__.call(null);
(statearr_52124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_52124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__,figwheel_version,temp__6753__auto__))
);

return c__44331__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__52127){
var map__52131 = p__52127;
var map__52131__$1 = ((((!((map__52131 == null)))?((((map__52131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52131.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52131):map__52131);
var file = cljs.core.get.call(null,map__52131__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__52131__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__52131__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__52133 = "";
var G__52133__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52133),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__52133);
var G__52133__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52133__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__52133__$1);
if(cljs.core.truth_((function (){var and__35875__auto__ = line;
if(cljs.core.truth_(and__35875__auto__)){
return column;
} else {
return and__35875__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52133__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__52133__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__52134){
var map__52141 = p__52134;
var map__52141__$1 = ((((!((map__52141 == null)))?((((map__52141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52141):map__52141);
var ed = map__52141__$1;
var formatted_exception = cljs.core.get.call(null,map__52141__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__52141__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__52141__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__52143_52147 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__52144_52148 = null;
var count__52145_52149 = (0);
var i__52146_52150 = (0);
while(true){
if((i__52146_52150 < count__52145_52149)){
var msg_52151 = cljs.core._nth.call(null,chunk__52144_52148,i__52146_52150);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52151);

var G__52152 = seq__52143_52147;
var G__52153 = chunk__52144_52148;
var G__52154 = count__52145_52149;
var G__52155 = (i__52146_52150 + (1));
seq__52143_52147 = G__52152;
chunk__52144_52148 = G__52153;
count__52145_52149 = G__52154;
i__52146_52150 = G__52155;
continue;
} else {
var temp__6753__auto___52156 = cljs.core.seq.call(null,seq__52143_52147);
if(temp__6753__auto___52156){
var seq__52143_52157__$1 = temp__6753__auto___52156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52143_52157__$1)){
var c__36798__auto___52158 = cljs.core.chunk_first.call(null,seq__52143_52157__$1);
var G__52159 = cljs.core.chunk_rest.call(null,seq__52143_52157__$1);
var G__52160 = c__36798__auto___52158;
var G__52161 = cljs.core.count.call(null,c__36798__auto___52158);
var G__52162 = (0);
seq__52143_52147 = G__52159;
chunk__52144_52148 = G__52160;
count__52145_52149 = G__52161;
i__52146_52150 = G__52162;
continue;
} else {
var msg_52163 = cljs.core.first.call(null,seq__52143_52157__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_52163);

var G__52164 = cljs.core.next.call(null,seq__52143_52157__$1);
var G__52165 = null;
var G__52166 = (0);
var G__52167 = (0);
seq__52143_52147 = G__52164;
chunk__52144_52148 = G__52165;
count__52145_52149 = G__52166;
i__52146_52150 = G__52167;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__52168){
var map__52171 = p__52168;
var map__52171__$1 = ((((!((map__52171 == null)))?((((map__52171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52171):map__52171);
var w = map__52171__$1;
var message = cljs.core.get.call(null,map__52171__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__52183 = cljs.core.seq.call(null,plugins);
var chunk__52184 = null;
var count__52185 = (0);
var i__52186 = (0);
while(true){
if((i__52186 < count__52185)){
var vec__52187 = cljs.core._nth.call(null,chunk__52184,i__52186);
var k = cljs.core.nth.call(null,vec__52187,(0),null);
var plugin = cljs.core.nth.call(null,vec__52187,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52193 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52183,chunk__52184,count__52185,i__52186,pl_52193,vec__52187,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_52193.call(null,msg_hist);
});})(seq__52183,chunk__52184,count__52185,i__52186,pl_52193,vec__52187,k,plugin))
);
} else {
}

var G__52194 = seq__52183;
var G__52195 = chunk__52184;
var G__52196 = count__52185;
var G__52197 = (i__52186 + (1));
seq__52183 = G__52194;
chunk__52184 = G__52195;
count__52185 = G__52196;
i__52186 = G__52197;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__52183);
if(temp__6753__auto__){
var seq__52183__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52183__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__52183__$1);
var G__52198 = cljs.core.chunk_rest.call(null,seq__52183__$1);
var G__52199 = c__36798__auto__;
var G__52200 = cljs.core.count.call(null,c__36798__auto__);
var G__52201 = (0);
seq__52183 = G__52198;
chunk__52184 = G__52199;
count__52185 = G__52200;
i__52186 = G__52201;
continue;
} else {
var vec__52190 = cljs.core.first.call(null,seq__52183__$1);
var k = cljs.core.nth.call(null,vec__52190,(0),null);
var plugin = cljs.core.nth.call(null,vec__52190,(1),null);
if(cljs.core.truth_(plugin)){
var pl_52202 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__52183,chunk__52184,count__52185,i__52186,pl_52202,vec__52190,k,plugin,seq__52183__$1,temp__6753__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_52202.call(null,msg_hist);
});})(seq__52183,chunk__52184,count__52185,i__52186,pl_52202,vec__52190,k,plugin,seq__52183__$1,temp__6753__auto__))
);
} else {
}

var G__52203 = cljs.core.next.call(null,seq__52183__$1);
var G__52204 = null;
var G__52205 = (0);
var G__52206 = (0);
seq__52183 = G__52203;
chunk__52184 = G__52204;
count__52185 = G__52205;
i__52186 = G__52206;
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
var args52207 = [];
var len__37108__auto___52214 = arguments.length;
var i__37109__auto___52215 = (0);
while(true){
if((i__37109__auto___52215 < len__37108__auto___52214)){
args52207.push((arguments[i__37109__auto___52215]));

var G__52216 = (i__37109__auto___52215 + (1));
i__37109__auto___52215 = G__52216;
continue;
} else {
}
break;
}

var G__52209 = args52207.length;
switch (G__52209) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args52207.length)].join('')));

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

var seq__52210_52218 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__52211_52219 = null;
var count__52212_52220 = (0);
var i__52213_52221 = (0);
while(true){
if((i__52213_52221 < count__52212_52220)){
var msg_52222 = cljs.core._nth.call(null,chunk__52211_52219,i__52213_52221);
figwheel.client.socket.handle_incoming_message.call(null,msg_52222);

var G__52223 = seq__52210_52218;
var G__52224 = chunk__52211_52219;
var G__52225 = count__52212_52220;
var G__52226 = (i__52213_52221 + (1));
seq__52210_52218 = G__52223;
chunk__52211_52219 = G__52224;
count__52212_52220 = G__52225;
i__52213_52221 = G__52226;
continue;
} else {
var temp__6753__auto___52227 = cljs.core.seq.call(null,seq__52210_52218);
if(temp__6753__auto___52227){
var seq__52210_52228__$1 = temp__6753__auto___52227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52210_52228__$1)){
var c__36798__auto___52229 = cljs.core.chunk_first.call(null,seq__52210_52228__$1);
var G__52230 = cljs.core.chunk_rest.call(null,seq__52210_52228__$1);
var G__52231 = c__36798__auto___52229;
var G__52232 = cljs.core.count.call(null,c__36798__auto___52229);
var G__52233 = (0);
seq__52210_52218 = G__52230;
chunk__52211_52219 = G__52231;
count__52212_52220 = G__52232;
i__52213_52221 = G__52233;
continue;
} else {
var msg_52234 = cljs.core.first.call(null,seq__52210_52228__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_52234);

var G__52235 = cljs.core.next.call(null,seq__52210_52228__$1);
var G__52236 = null;
var G__52237 = (0);
var G__52238 = (0);
seq__52210_52218 = G__52235;
chunk__52211_52219 = G__52236;
count__52212_52220 = G__52237;
i__52213_52221 = G__52238;
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
var len__37108__auto___52243 = arguments.length;
var i__37109__auto___52244 = (0);
while(true){
if((i__37109__auto___52244 < len__37108__auto___52243)){
args__37115__auto__.push((arguments[i__37109__auto___52244]));

var G__52245 = (i__37109__auto___52244 + (1));
i__37109__auto___52244 = G__52245;
continue;
} else {
}
break;
}

var argseq__37116__auto__ = ((((0) < args__37115__auto__.length))?(new cljs.core.IndexedSeq(args__37115__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__37116__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__52240){
var map__52241 = p__52240;
var map__52241__$1 = ((((!((map__52241 == null)))?((((map__52241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52241):map__52241);
var opts = map__52241__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq52239){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52239));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e52247){if((e52247 instanceof Error)){
var e = e52247;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e52247;

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
return (function (p__52251){
var map__52252 = p__52251;
var map__52252__$1 = ((((!((map__52252 == null)))?((((map__52252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52252):map__52252);
var msg_name = cljs.core.get.call(null,map__52252__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1511925506013