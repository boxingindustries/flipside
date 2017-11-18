// Compiled by ClojureScript 1.9.494 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__35887__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__35887__auto__){
return or__35887__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__35887__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48814_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48814_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__48819 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48820 = null;
var count__48821 = (0);
var i__48822 = (0);
while(true){
if((i__48822 < count__48821)){
var n = cljs.core._nth.call(null,chunk__48820,i__48822);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48823 = seq__48819;
var G__48824 = chunk__48820;
var G__48825 = count__48821;
var G__48826 = (i__48822 + (1));
seq__48819 = G__48823;
chunk__48820 = G__48824;
count__48821 = G__48825;
i__48822 = G__48826;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__48819);
if(temp__6753__auto__){
var seq__48819__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48819__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__48819__$1);
var G__48827 = cljs.core.chunk_rest.call(null,seq__48819__$1);
var G__48828 = c__36798__auto__;
var G__48829 = cljs.core.count.call(null,c__36798__auto__);
var G__48830 = (0);
seq__48819 = G__48827;
chunk__48820 = G__48828;
count__48821 = G__48829;
i__48822 = G__48830;
continue;
} else {
var n = cljs.core.first.call(null,seq__48819__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48831 = cljs.core.next.call(null,seq__48819__$1);
var G__48832 = null;
var G__48833 = (0);
var G__48834 = (0);
seq__48819 = G__48831;
chunk__48820 = G__48832;
count__48821 = G__48833;
i__48822 = G__48834;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__48885_48896 = cljs.core.seq.call(null,deps);
var chunk__48886_48897 = null;
var count__48887_48898 = (0);
var i__48888_48899 = (0);
while(true){
if((i__48888_48899 < count__48887_48898)){
var dep_48900 = cljs.core._nth.call(null,chunk__48886_48897,i__48888_48899);
topo_sort_helper_STAR_.call(null,dep_48900,(depth + (1)),state);

var G__48901 = seq__48885_48896;
var G__48902 = chunk__48886_48897;
var G__48903 = count__48887_48898;
var G__48904 = (i__48888_48899 + (1));
seq__48885_48896 = G__48901;
chunk__48886_48897 = G__48902;
count__48887_48898 = G__48903;
i__48888_48899 = G__48904;
continue;
} else {
var temp__6753__auto___48905 = cljs.core.seq.call(null,seq__48885_48896);
if(temp__6753__auto___48905){
var seq__48885_48906__$1 = temp__6753__auto___48905;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48885_48906__$1)){
var c__36798__auto___48907 = cljs.core.chunk_first.call(null,seq__48885_48906__$1);
var G__48908 = cljs.core.chunk_rest.call(null,seq__48885_48906__$1);
var G__48909 = c__36798__auto___48907;
var G__48910 = cljs.core.count.call(null,c__36798__auto___48907);
var G__48911 = (0);
seq__48885_48896 = G__48908;
chunk__48886_48897 = G__48909;
count__48887_48898 = G__48910;
i__48888_48899 = G__48911;
continue;
} else {
var dep_48912 = cljs.core.first.call(null,seq__48885_48906__$1);
topo_sort_helper_STAR_.call(null,dep_48912,(depth + (1)),state);

var G__48913 = cljs.core.next.call(null,seq__48885_48906__$1);
var G__48914 = null;
var G__48915 = (0);
var G__48916 = (0);
seq__48885_48896 = G__48913;
chunk__48886_48897 = G__48914;
count__48887_48898 = G__48915;
i__48888_48899 = G__48916;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48889){
var vec__48893 = p__48889;
var seq__48894 = cljs.core.seq.call(null,vec__48893);
var first__48895 = cljs.core.first.call(null,seq__48894);
var seq__48894__$1 = cljs.core.next.call(null,seq__48894);
var x = first__48895;
var xs = seq__48894__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48893,seq__48894,first__48895,seq__48894__$1,x,xs,get_deps__$1){
return (function (p1__48835_SHARP_){
return clojure.set.difference.call(null,p1__48835_SHARP_,x);
});})(vec__48893,seq__48894,first__48895,seq__48894__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__48929 = cljs.core.seq.call(null,provides);
var chunk__48930 = null;
var count__48931 = (0);
var i__48932 = (0);
while(true){
if((i__48932 < count__48931)){
var prov = cljs.core._nth.call(null,chunk__48930,i__48932);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48933_48941 = cljs.core.seq.call(null,requires);
var chunk__48934_48942 = null;
var count__48935_48943 = (0);
var i__48936_48944 = (0);
while(true){
if((i__48936_48944 < count__48935_48943)){
var req_48945 = cljs.core._nth.call(null,chunk__48934_48942,i__48936_48944);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48945,prov);

var G__48946 = seq__48933_48941;
var G__48947 = chunk__48934_48942;
var G__48948 = count__48935_48943;
var G__48949 = (i__48936_48944 + (1));
seq__48933_48941 = G__48946;
chunk__48934_48942 = G__48947;
count__48935_48943 = G__48948;
i__48936_48944 = G__48949;
continue;
} else {
var temp__6753__auto___48950 = cljs.core.seq.call(null,seq__48933_48941);
if(temp__6753__auto___48950){
var seq__48933_48951__$1 = temp__6753__auto___48950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48933_48951__$1)){
var c__36798__auto___48952 = cljs.core.chunk_first.call(null,seq__48933_48951__$1);
var G__48953 = cljs.core.chunk_rest.call(null,seq__48933_48951__$1);
var G__48954 = c__36798__auto___48952;
var G__48955 = cljs.core.count.call(null,c__36798__auto___48952);
var G__48956 = (0);
seq__48933_48941 = G__48953;
chunk__48934_48942 = G__48954;
count__48935_48943 = G__48955;
i__48936_48944 = G__48956;
continue;
} else {
var req_48957 = cljs.core.first.call(null,seq__48933_48951__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48957,prov);

var G__48958 = cljs.core.next.call(null,seq__48933_48951__$1);
var G__48959 = null;
var G__48960 = (0);
var G__48961 = (0);
seq__48933_48941 = G__48958;
chunk__48934_48942 = G__48959;
count__48935_48943 = G__48960;
i__48936_48944 = G__48961;
continue;
}
} else {
}
}
break;
}

var G__48962 = seq__48929;
var G__48963 = chunk__48930;
var G__48964 = count__48931;
var G__48965 = (i__48932 + (1));
seq__48929 = G__48962;
chunk__48930 = G__48963;
count__48931 = G__48964;
i__48932 = G__48965;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__48929);
if(temp__6753__auto__){
var seq__48929__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48929__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__48929__$1);
var G__48966 = cljs.core.chunk_rest.call(null,seq__48929__$1);
var G__48967 = c__36798__auto__;
var G__48968 = cljs.core.count.call(null,c__36798__auto__);
var G__48969 = (0);
seq__48929 = G__48966;
chunk__48930 = G__48967;
count__48931 = G__48968;
i__48932 = G__48969;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48929__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48937_48970 = cljs.core.seq.call(null,requires);
var chunk__48938_48971 = null;
var count__48939_48972 = (0);
var i__48940_48973 = (0);
while(true){
if((i__48940_48973 < count__48939_48972)){
var req_48974 = cljs.core._nth.call(null,chunk__48938_48971,i__48940_48973);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48974,prov);

var G__48975 = seq__48937_48970;
var G__48976 = chunk__48938_48971;
var G__48977 = count__48939_48972;
var G__48978 = (i__48940_48973 + (1));
seq__48937_48970 = G__48975;
chunk__48938_48971 = G__48976;
count__48939_48972 = G__48977;
i__48940_48973 = G__48978;
continue;
} else {
var temp__6753__auto___48979__$1 = cljs.core.seq.call(null,seq__48937_48970);
if(temp__6753__auto___48979__$1){
var seq__48937_48980__$1 = temp__6753__auto___48979__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48937_48980__$1)){
var c__36798__auto___48981 = cljs.core.chunk_first.call(null,seq__48937_48980__$1);
var G__48982 = cljs.core.chunk_rest.call(null,seq__48937_48980__$1);
var G__48983 = c__36798__auto___48981;
var G__48984 = cljs.core.count.call(null,c__36798__auto___48981);
var G__48985 = (0);
seq__48937_48970 = G__48982;
chunk__48938_48971 = G__48983;
count__48939_48972 = G__48984;
i__48940_48973 = G__48985;
continue;
} else {
var req_48986 = cljs.core.first.call(null,seq__48937_48980__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48986,prov);

var G__48987 = cljs.core.next.call(null,seq__48937_48980__$1);
var G__48988 = null;
var G__48989 = (0);
var G__48990 = (0);
seq__48937_48970 = G__48987;
chunk__48938_48971 = G__48988;
count__48939_48972 = G__48989;
i__48940_48973 = G__48990;
continue;
}
} else {
}
}
break;
}

var G__48991 = cljs.core.next.call(null,seq__48929__$1);
var G__48992 = null;
var G__48993 = (0);
var G__48994 = (0);
seq__48929 = G__48991;
chunk__48930 = G__48992;
count__48931 = G__48993;
i__48932 = G__48994;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__48999_49003 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49000_49004 = null;
var count__49001_49005 = (0);
var i__49002_49006 = (0);
while(true){
if((i__49002_49006 < count__49001_49005)){
var ns_49007 = cljs.core._nth.call(null,chunk__49000_49004,i__49002_49006);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49007);

var G__49008 = seq__48999_49003;
var G__49009 = chunk__49000_49004;
var G__49010 = count__49001_49005;
var G__49011 = (i__49002_49006 + (1));
seq__48999_49003 = G__49008;
chunk__49000_49004 = G__49009;
count__49001_49005 = G__49010;
i__49002_49006 = G__49011;
continue;
} else {
var temp__6753__auto___49012 = cljs.core.seq.call(null,seq__48999_49003);
if(temp__6753__auto___49012){
var seq__48999_49013__$1 = temp__6753__auto___49012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48999_49013__$1)){
var c__36798__auto___49014 = cljs.core.chunk_first.call(null,seq__48999_49013__$1);
var G__49015 = cljs.core.chunk_rest.call(null,seq__48999_49013__$1);
var G__49016 = c__36798__auto___49014;
var G__49017 = cljs.core.count.call(null,c__36798__auto___49014);
var G__49018 = (0);
seq__48999_49003 = G__49015;
chunk__49000_49004 = G__49016;
count__49001_49005 = G__49017;
i__49002_49006 = G__49018;
continue;
} else {
var ns_49019 = cljs.core.first.call(null,seq__48999_49013__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49019);

var G__49020 = cljs.core.next.call(null,seq__48999_49013__$1);
var G__49021 = null;
var G__49022 = (0);
var G__49023 = (0);
seq__48999_49003 = G__49020;
chunk__49000_49004 = G__49021;
count__49001_49005 = G__49022;
i__49002_49006 = G__49023;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__35887__auto__ = goog.require__;
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__49024__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49025__i = 0, G__49025__a = new Array(arguments.length -  0);
while (G__49025__i < G__49025__a.length) {G__49025__a[G__49025__i] = arguments[G__49025__i + 0]; ++G__49025__i;}
  args = new cljs.core.IndexedSeq(G__49025__a,0);
} 
return G__49024__delegate.call(this,args);};
G__49024.cljs$lang$maxFixedArity = 0;
G__49024.cljs$lang$applyTo = (function (arglist__49026){
var args = cljs.core.seq(arglist__49026);
return G__49024__delegate(args);
});
G__49024.cljs$core$IFn$_invoke$arity$variadic = G__49024__delegate;
return G__49024;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49027 = cljs.core._EQ_;
var expr__49028 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49027.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49028))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49027,expr__49028){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49027,expr__49028))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49027,expr__49028){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49030){if((e49030 instanceof Error)){
var e = e49030;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49030;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49027,expr__49028))
} else {
if(cljs.core.truth_(pred__49027.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49028))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49027.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49028))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49027.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49028))){
return ((function (pred__49027,expr__49028){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49031){if((e49031 instanceof Error)){
var e = e49031;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49031;

}
}})());
});
;})(pred__49027,expr__49028))
} else {
return ((function (pred__49027,expr__49028){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49027,expr__49028))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49032,callback){
var map__49035 = p__49032;
var map__49035__$1 = ((((!((map__49035 == null)))?((((map__49035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49035):map__49035);
var file_msg = map__49035__$1;
var request_url = cljs.core.get.call(null,map__49035__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49035,map__49035__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49035,map__49035__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__){
return (function (state_49059){
var state_val_49060 = (state_49059[(1)]);
if((state_val_49060 === (7))){
var inst_49055 = (state_49059[(2)]);
var state_49059__$1 = state_49059;
var statearr_49061_49081 = state_49059__$1;
(statearr_49061_49081[(2)] = inst_49055);

(statearr_49061_49081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (1))){
var state_49059__$1 = state_49059;
var statearr_49062_49082 = state_49059__$1;
(statearr_49062_49082[(2)] = null);

(statearr_49062_49082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (4))){
var inst_49039 = (state_49059[(7)]);
var inst_49039__$1 = (state_49059[(2)]);
var state_49059__$1 = (function (){var statearr_49063 = state_49059;
(statearr_49063[(7)] = inst_49039__$1);

return statearr_49063;
})();
if(cljs.core.truth_(inst_49039__$1)){
var statearr_49064_49083 = state_49059__$1;
(statearr_49064_49083[(1)] = (5));

} else {
var statearr_49065_49084 = state_49059__$1;
(statearr_49065_49084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (6))){
var state_49059__$1 = state_49059;
var statearr_49066_49085 = state_49059__$1;
(statearr_49066_49085[(2)] = null);

(statearr_49066_49085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (3))){
var inst_49057 = (state_49059[(2)]);
var state_49059__$1 = state_49059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49059__$1,inst_49057);
} else {
if((state_val_49060 === (2))){
var state_49059__$1 = state_49059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49059__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49060 === (11))){
var inst_49051 = (state_49059[(2)]);
var state_49059__$1 = (function (){var statearr_49067 = state_49059;
(statearr_49067[(8)] = inst_49051);

return statearr_49067;
})();
var statearr_49068_49086 = state_49059__$1;
(statearr_49068_49086[(2)] = null);

(statearr_49068_49086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (9))){
var inst_49045 = (state_49059[(9)]);
var inst_49043 = (state_49059[(10)]);
var inst_49047 = inst_49045.call(null,inst_49043);
var state_49059__$1 = state_49059;
var statearr_49069_49087 = state_49059__$1;
(statearr_49069_49087[(2)] = inst_49047);

(statearr_49069_49087[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (5))){
var inst_49039 = (state_49059[(7)]);
var inst_49041 = figwheel.client.file_reloading.blocking_load.call(null,inst_49039);
var state_49059__$1 = state_49059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49059__$1,(8),inst_49041);
} else {
if((state_val_49060 === (10))){
var inst_49043 = (state_49059[(10)]);
var inst_49049 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49043);
var state_49059__$1 = state_49059;
var statearr_49070_49088 = state_49059__$1;
(statearr_49070_49088[(2)] = inst_49049);

(statearr_49070_49088[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49060 === (8))){
var inst_49039 = (state_49059[(7)]);
var inst_49045 = (state_49059[(9)]);
var inst_49043 = (state_49059[(2)]);
var inst_49044 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49045__$1 = cljs.core.get.call(null,inst_49044,inst_49039);
var state_49059__$1 = (function (){var statearr_49071 = state_49059;
(statearr_49071[(9)] = inst_49045__$1);

(statearr_49071[(10)] = inst_49043);

return statearr_49071;
})();
if(cljs.core.truth_(inst_49045__$1)){
var statearr_49072_49089 = state_49059__$1;
(statearr_49072_49089[(1)] = (9));

} else {
var statearr_49073_49090 = state_49059__$1;
(statearr_49073_49090[(1)] = (10));

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
});})(c__44307__auto__))
;
return ((function (switch__44193__auto__,c__44307__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44194__auto__ = null;
var figwheel$client$file_reloading$state_machine__44194__auto____0 = (function (){
var statearr_49077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49077[(0)] = figwheel$client$file_reloading$state_machine__44194__auto__);

(statearr_49077[(1)] = (1));

return statearr_49077;
});
var figwheel$client$file_reloading$state_machine__44194__auto____1 = (function (state_49059){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_49059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e49078){if((e49078 instanceof Object)){
var ex__44197__auto__ = e49078;
var statearr_49079_49091 = state_49059;
(statearr_49079_49091[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49092 = state_49059;
state_49059 = G__49092;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44194__auto__ = function(state_49059){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44194__auto____1.call(this,state_49059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44194__auto____0;
figwheel$client$file_reloading$state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44194__auto____1;
return figwheel$client$file_reloading$state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__))
})();
var state__44309__auto__ = (function (){var statearr_49080 = f__44308__auto__.call(null);
(statearr_49080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_49080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__))
);

return c__44307__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49093,callback){
var map__49096 = p__49093;
var map__49096__$1 = ((((!((map__49096 == null)))?((((map__49096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49096.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49096):map__49096);
var file_msg = map__49096__$1;
var namespace = cljs.core.get.call(null,map__49096__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49096,map__49096__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49096,map__49096__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49098){
var map__49101 = p__49098;
var map__49101__$1 = ((((!((map__49101 == null)))?((((map__49101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49101.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49101):map__49101);
var file_msg = map__49101__$1;
var namespace = cljs.core.get.call(null,map__49101__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49103){
var map__49106 = p__49103;
var map__49106__$1 = ((((!((map__49106 == null)))?((((map__49106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49106.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49106):map__49106);
var file_msg = map__49106__$1;
var namespace = cljs.core.get.call(null,map__49106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__35875__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__35875__auto__){
var or__35887__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35887__auto__)){
return or__35887__auto__;
} else {
var or__35887__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__35887__auto____$1)){
return or__35887__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__35875__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49108,callback){
var map__49111 = p__49108;
var map__49111__$1 = ((((!((map__49111 == null)))?((((map__49111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49111.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49111):map__49111);
var file_msg = map__49111__$1;
var request_url = cljs.core.get.call(null,map__49111__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49111__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__44307__auto___49215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto___49215,out){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto___49215,out){
return (function (state_49197){
var state_val_49198 = (state_49197[(1)]);
if((state_val_49198 === (1))){
var inst_49171 = cljs.core.seq.call(null,files);
var inst_49172 = cljs.core.first.call(null,inst_49171);
var inst_49173 = cljs.core.next.call(null,inst_49171);
var inst_49174 = files;
var state_49197__$1 = (function (){var statearr_49199 = state_49197;
(statearr_49199[(7)] = inst_49172);

(statearr_49199[(8)] = inst_49173);

(statearr_49199[(9)] = inst_49174);

return statearr_49199;
})();
var statearr_49200_49216 = state_49197__$1;
(statearr_49200_49216[(2)] = null);

(statearr_49200_49216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (2))){
var inst_49180 = (state_49197[(10)]);
var inst_49174 = (state_49197[(9)]);
var inst_49179 = cljs.core.seq.call(null,inst_49174);
var inst_49180__$1 = cljs.core.first.call(null,inst_49179);
var inst_49181 = cljs.core.next.call(null,inst_49179);
var inst_49182 = (inst_49180__$1 == null);
var inst_49183 = cljs.core.not.call(null,inst_49182);
var state_49197__$1 = (function (){var statearr_49201 = state_49197;
(statearr_49201[(10)] = inst_49180__$1);

(statearr_49201[(11)] = inst_49181);

return statearr_49201;
})();
if(inst_49183){
var statearr_49202_49217 = state_49197__$1;
(statearr_49202_49217[(1)] = (4));

} else {
var statearr_49203_49218 = state_49197__$1;
(statearr_49203_49218[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (3))){
var inst_49195 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49197__$1,inst_49195);
} else {
if((state_val_49198 === (4))){
var inst_49180 = (state_49197[(10)]);
var inst_49185 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49180);
var state_49197__$1 = state_49197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49197__$1,(7),inst_49185);
} else {
if((state_val_49198 === (5))){
var inst_49191 = cljs.core.async.close_BANG_.call(null,out);
var state_49197__$1 = state_49197;
var statearr_49204_49219 = state_49197__$1;
(statearr_49204_49219[(2)] = inst_49191);

(statearr_49204_49219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (6))){
var inst_49193 = (state_49197[(2)]);
var state_49197__$1 = state_49197;
var statearr_49205_49220 = state_49197__$1;
(statearr_49205_49220[(2)] = inst_49193);

(statearr_49205_49220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49198 === (7))){
var inst_49181 = (state_49197[(11)]);
var inst_49187 = (state_49197[(2)]);
var inst_49188 = cljs.core.async.put_BANG_.call(null,out,inst_49187);
var inst_49174 = inst_49181;
var state_49197__$1 = (function (){var statearr_49206 = state_49197;
(statearr_49206[(12)] = inst_49188);

(statearr_49206[(9)] = inst_49174);

return statearr_49206;
})();
var statearr_49207_49221 = state_49197__$1;
(statearr_49207_49221[(2)] = null);

(statearr_49207_49221[(1)] = (2));


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
});})(c__44307__auto___49215,out))
;
return ((function (switch__44193__auto__,c__44307__auto___49215,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto____0 = (function (){
var statearr_49211 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49211[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto__);

(statearr_49211[(1)] = (1));

return statearr_49211;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto____1 = (function (state_49197){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_49197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e49212){if((e49212 instanceof Object)){
var ex__44197__auto__ = e49212;
var statearr_49213_49222 = state_49197;
(statearr_49213_49222[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49223 = state_49197;
state_49197 = G__49223;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto__ = function(state_49197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto____1.call(this,state_49197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto___49215,out))
})();
var state__44309__auto__ = (function (){var statearr_49214 = f__44308__auto__.call(null);
(statearr_49214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto___49215);

return statearr_49214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto___49215,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49224,opts){
var map__49228 = p__49224;
var map__49228__$1 = ((((!((map__49228 == null)))?((((map__49228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49228.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49228):map__49228);
var eval_body = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__35875__auto__ = eval_body;
if(cljs.core.truth_(and__35875__auto__)){
return typeof eval_body === 'string';
} else {
return and__35875__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e49230){var e = e49230;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6751__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__49231_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49231_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6751__auto__)){
var file_msg = temp__6751__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__49240){
var vec__49241 = p__49240;
var k = cljs.core.nth.call(null,vec__49241,(0),null);
var v = cljs.core.nth.call(null,vec__49241,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49244){
var vec__49245 = p__49244;
var k = cljs.core.nth.call(null,vec__49245,(0),null);
var v = cljs.core.nth.call(null,vec__49245,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49251,p__49252){
var map__49500 = p__49251;
var map__49500__$1 = ((((!((map__49500 == null)))?((((map__49500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49500):map__49500);
var opts = map__49500__$1;
var before_jsload = cljs.core.get.call(null,map__49500__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49500__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49500__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49501 = p__49252;
var map__49501__$1 = ((((!((map__49501 == null)))?((((map__49501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49501):map__49501);
var msg = map__49501__$1;
var files = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44307__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44308__auto__ = (function (){var switch__44193__auto__ = ((function (c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49655){
var state_val_49656 = (state_49655[(1)]);
if((state_val_49656 === (7))){
var inst_49517 = (state_49655[(7)]);
var inst_49515 = (state_49655[(8)]);
var inst_49516 = (state_49655[(9)]);
var inst_49518 = (state_49655[(10)]);
var inst_49523 = cljs.core._nth.call(null,inst_49516,inst_49518);
var inst_49524 = figwheel.client.file_reloading.eval_body.call(null,inst_49523,opts);
var inst_49525 = (inst_49518 + (1));
var tmp49657 = inst_49517;
var tmp49658 = inst_49515;
var tmp49659 = inst_49516;
var inst_49515__$1 = tmp49658;
var inst_49516__$1 = tmp49659;
var inst_49517__$1 = tmp49657;
var inst_49518__$1 = inst_49525;
var state_49655__$1 = (function (){var statearr_49660 = state_49655;
(statearr_49660[(7)] = inst_49517__$1);

(statearr_49660[(8)] = inst_49515__$1);

(statearr_49660[(11)] = inst_49524);

(statearr_49660[(9)] = inst_49516__$1);

(statearr_49660[(10)] = inst_49518__$1);

return statearr_49660;
})();
var statearr_49661_49747 = state_49655__$1;
(statearr_49661_49747[(2)] = null);

(statearr_49661_49747[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (20))){
var inst_49558 = (state_49655[(12)]);
var inst_49566 = figwheel.client.file_reloading.sort_files.call(null,inst_49558);
var state_49655__$1 = state_49655;
var statearr_49662_49748 = state_49655__$1;
(statearr_49662_49748[(2)] = inst_49566);

(statearr_49662_49748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (27))){
var state_49655__$1 = state_49655;
var statearr_49663_49749 = state_49655__$1;
(statearr_49663_49749[(2)] = null);

(statearr_49663_49749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (1))){
var inst_49507 = (state_49655[(13)]);
var inst_49504 = before_jsload.call(null,files);
var inst_49505 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49506 = (function (){return ((function (inst_49507,inst_49504,inst_49505,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49248_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49248_SHARP_);
});
;})(inst_49507,inst_49504,inst_49505,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49507__$1 = cljs.core.filter.call(null,inst_49506,files);
var inst_49508 = cljs.core.not_empty.call(null,inst_49507__$1);
var state_49655__$1 = (function (){var statearr_49664 = state_49655;
(statearr_49664[(14)] = inst_49504);

(statearr_49664[(15)] = inst_49505);

(statearr_49664[(13)] = inst_49507__$1);

return statearr_49664;
})();
if(cljs.core.truth_(inst_49508)){
var statearr_49665_49750 = state_49655__$1;
(statearr_49665_49750[(1)] = (2));

} else {
var statearr_49666_49751 = state_49655__$1;
(statearr_49666_49751[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (24))){
var state_49655__$1 = state_49655;
var statearr_49667_49752 = state_49655__$1;
(statearr_49667_49752[(2)] = null);

(statearr_49667_49752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (39))){
var inst_49608 = (state_49655[(16)]);
var state_49655__$1 = state_49655;
var statearr_49668_49753 = state_49655__$1;
(statearr_49668_49753[(2)] = inst_49608);

(statearr_49668_49753[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (46))){
var inst_49650 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
var statearr_49669_49754 = state_49655__$1;
(statearr_49669_49754[(2)] = inst_49650);

(statearr_49669_49754[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (4))){
var inst_49552 = (state_49655[(2)]);
var inst_49553 = cljs.core.List.EMPTY;
var inst_49554 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49553);
var inst_49555 = (function (){return ((function (inst_49552,inst_49553,inst_49554,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49249_SHARP_){
var and__35875__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49249_SHARP_);
if(cljs.core.truth_(and__35875__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49249_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49249_SHARP_)));
} else {
return and__35875__auto__;
}
});
;})(inst_49552,inst_49553,inst_49554,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49556 = cljs.core.filter.call(null,inst_49555,files);
var inst_49557 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49558 = cljs.core.concat.call(null,inst_49556,inst_49557);
var state_49655__$1 = (function (){var statearr_49670 = state_49655;
(statearr_49670[(12)] = inst_49558);

(statearr_49670[(17)] = inst_49552);

(statearr_49670[(18)] = inst_49554);

return statearr_49670;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49671_49755 = state_49655__$1;
(statearr_49671_49755[(1)] = (16));

} else {
var statearr_49672_49756 = state_49655__$1;
(statearr_49672_49756[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (15))){
var inst_49542 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
var statearr_49673_49757 = state_49655__$1;
(statearr_49673_49757[(2)] = inst_49542);

(statearr_49673_49757[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (21))){
var inst_49568 = (state_49655[(19)]);
var inst_49568__$1 = (state_49655[(2)]);
var inst_49569 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49568__$1);
var state_49655__$1 = (function (){var statearr_49674 = state_49655;
(statearr_49674[(19)] = inst_49568__$1);

return statearr_49674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49655__$1,(22),inst_49569);
} else {
if((state_val_49656 === (31))){
var inst_49653 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49655__$1,inst_49653);
} else {
if((state_val_49656 === (32))){
var inst_49608 = (state_49655[(16)]);
var inst_49613 = inst_49608.cljs$lang$protocol_mask$partition0$;
var inst_49614 = (inst_49613 & (64));
var inst_49615 = inst_49608.cljs$core$ISeq$;
var inst_49616 = (cljs.core.PROTOCOL_SENTINEL === inst_49615);
var inst_49617 = (inst_49614) || (inst_49616);
var state_49655__$1 = state_49655;
if(cljs.core.truth_(inst_49617)){
var statearr_49675_49758 = state_49655__$1;
(statearr_49675_49758[(1)] = (35));

} else {
var statearr_49676_49759 = state_49655__$1;
(statearr_49676_49759[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (40))){
var inst_49630 = (state_49655[(20)]);
var inst_49629 = (state_49655[(2)]);
var inst_49630__$1 = cljs.core.get.call(null,inst_49629,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49631 = cljs.core.get.call(null,inst_49629,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49632 = cljs.core.not_empty.call(null,inst_49630__$1);
var state_49655__$1 = (function (){var statearr_49677 = state_49655;
(statearr_49677[(21)] = inst_49631);

(statearr_49677[(20)] = inst_49630__$1);

return statearr_49677;
})();
if(cljs.core.truth_(inst_49632)){
var statearr_49678_49760 = state_49655__$1;
(statearr_49678_49760[(1)] = (41));

} else {
var statearr_49679_49761 = state_49655__$1;
(statearr_49679_49761[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (33))){
var state_49655__$1 = state_49655;
var statearr_49680_49762 = state_49655__$1;
(statearr_49680_49762[(2)] = false);

(statearr_49680_49762[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (13))){
var inst_49528 = (state_49655[(22)]);
var inst_49532 = cljs.core.chunk_first.call(null,inst_49528);
var inst_49533 = cljs.core.chunk_rest.call(null,inst_49528);
var inst_49534 = cljs.core.count.call(null,inst_49532);
var inst_49515 = inst_49533;
var inst_49516 = inst_49532;
var inst_49517 = inst_49534;
var inst_49518 = (0);
var state_49655__$1 = (function (){var statearr_49681 = state_49655;
(statearr_49681[(7)] = inst_49517);

(statearr_49681[(8)] = inst_49515);

(statearr_49681[(9)] = inst_49516);

(statearr_49681[(10)] = inst_49518);

return statearr_49681;
})();
var statearr_49682_49763 = state_49655__$1;
(statearr_49682_49763[(2)] = null);

(statearr_49682_49763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (22))){
var inst_49571 = (state_49655[(23)]);
var inst_49576 = (state_49655[(24)]);
var inst_49572 = (state_49655[(25)]);
var inst_49568 = (state_49655[(19)]);
var inst_49571__$1 = (state_49655[(2)]);
var inst_49572__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49571__$1);
var inst_49573 = (function (){var all_files = inst_49568;
var res_SINGLEQUOTE_ = inst_49571__$1;
var res = inst_49572__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49571,inst_49576,inst_49572,inst_49568,inst_49571__$1,inst_49572__$1,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49250_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49250_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49571,inst_49576,inst_49572,inst_49568,inst_49571__$1,inst_49572__$1,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49574 = cljs.core.filter.call(null,inst_49573,inst_49571__$1);
var inst_49575 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49576__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49575);
var inst_49577 = cljs.core.not_empty.call(null,inst_49576__$1);
var state_49655__$1 = (function (){var statearr_49683 = state_49655;
(statearr_49683[(23)] = inst_49571__$1);

(statearr_49683[(26)] = inst_49574);

(statearr_49683[(24)] = inst_49576__$1);

(statearr_49683[(25)] = inst_49572__$1);

return statearr_49683;
})();
if(cljs.core.truth_(inst_49577)){
var statearr_49684_49764 = state_49655__$1;
(statearr_49684_49764[(1)] = (23));

} else {
var statearr_49685_49765 = state_49655__$1;
(statearr_49685_49765[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (36))){
var state_49655__$1 = state_49655;
var statearr_49686_49766 = state_49655__$1;
(statearr_49686_49766[(2)] = false);

(statearr_49686_49766[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (41))){
var inst_49630 = (state_49655[(20)]);
var inst_49634 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49635 = cljs.core.map.call(null,inst_49634,inst_49630);
var inst_49636 = cljs.core.pr_str.call(null,inst_49635);
var inst_49637 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49636)].join('');
var inst_49638 = figwheel.client.utils.log.call(null,inst_49637);
var state_49655__$1 = state_49655;
var statearr_49687_49767 = state_49655__$1;
(statearr_49687_49767[(2)] = inst_49638);

(statearr_49687_49767[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (43))){
var inst_49631 = (state_49655[(21)]);
var inst_49641 = (state_49655[(2)]);
var inst_49642 = cljs.core.not_empty.call(null,inst_49631);
var state_49655__$1 = (function (){var statearr_49688 = state_49655;
(statearr_49688[(27)] = inst_49641);

return statearr_49688;
})();
if(cljs.core.truth_(inst_49642)){
var statearr_49689_49768 = state_49655__$1;
(statearr_49689_49768[(1)] = (44));

} else {
var statearr_49690_49769 = state_49655__$1;
(statearr_49690_49769[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (29))){
var inst_49571 = (state_49655[(23)]);
var inst_49574 = (state_49655[(26)]);
var inst_49576 = (state_49655[(24)]);
var inst_49572 = (state_49655[(25)]);
var inst_49608 = (state_49655[(16)]);
var inst_49568 = (state_49655[(19)]);
var inst_49604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49607 = (function (){var all_files = inst_49568;
var res_SINGLEQUOTE_ = inst_49571;
var res = inst_49572;
var files_not_loaded = inst_49574;
var dependencies_that_loaded = inst_49576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49608,inst_49568,inst_49604,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49606){
var map__49691 = p__49606;
var map__49691__$1 = ((((!((map__49691 == null)))?((((map__49691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49691):map__49691);
var namespace = cljs.core.get.call(null,map__49691__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49608,inst_49568,inst_49604,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49608__$1 = cljs.core.group_by.call(null,inst_49607,inst_49574);
var inst_49610 = (inst_49608__$1 == null);
var inst_49611 = cljs.core.not.call(null,inst_49610);
var state_49655__$1 = (function (){var statearr_49693 = state_49655;
(statearr_49693[(28)] = inst_49604);

(statearr_49693[(16)] = inst_49608__$1);

return statearr_49693;
})();
if(inst_49611){
var statearr_49694_49770 = state_49655__$1;
(statearr_49694_49770[(1)] = (32));

} else {
var statearr_49695_49771 = state_49655__$1;
(statearr_49695_49771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (44))){
var inst_49631 = (state_49655[(21)]);
var inst_49644 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49631);
var inst_49645 = cljs.core.pr_str.call(null,inst_49644);
var inst_49646 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49645)].join('');
var inst_49647 = figwheel.client.utils.log.call(null,inst_49646);
var state_49655__$1 = state_49655;
var statearr_49696_49772 = state_49655__$1;
(statearr_49696_49772[(2)] = inst_49647);

(statearr_49696_49772[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (6))){
var inst_49549 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
var statearr_49697_49773 = state_49655__$1;
(statearr_49697_49773[(2)] = inst_49549);

(statearr_49697_49773[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (28))){
var inst_49574 = (state_49655[(26)]);
var inst_49601 = (state_49655[(2)]);
var inst_49602 = cljs.core.not_empty.call(null,inst_49574);
var state_49655__$1 = (function (){var statearr_49698 = state_49655;
(statearr_49698[(29)] = inst_49601);

return statearr_49698;
})();
if(cljs.core.truth_(inst_49602)){
var statearr_49699_49774 = state_49655__$1;
(statearr_49699_49774[(1)] = (29));

} else {
var statearr_49700_49775 = state_49655__$1;
(statearr_49700_49775[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (25))){
var inst_49572 = (state_49655[(25)]);
var inst_49588 = (state_49655[(2)]);
var inst_49589 = cljs.core.not_empty.call(null,inst_49572);
var state_49655__$1 = (function (){var statearr_49701 = state_49655;
(statearr_49701[(30)] = inst_49588);

return statearr_49701;
})();
if(cljs.core.truth_(inst_49589)){
var statearr_49702_49776 = state_49655__$1;
(statearr_49702_49776[(1)] = (26));

} else {
var statearr_49703_49777 = state_49655__$1;
(statearr_49703_49777[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (34))){
var inst_49624 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
if(cljs.core.truth_(inst_49624)){
var statearr_49704_49778 = state_49655__$1;
(statearr_49704_49778[(1)] = (38));

} else {
var statearr_49705_49779 = state_49655__$1;
(statearr_49705_49779[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (17))){
var state_49655__$1 = state_49655;
var statearr_49706_49780 = state_49655__$1;
(statearr_49706_49780[(2)] = recompile_dependents);

(statearr_49706_49780[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (3))){
var state_49655__$1 = state_49655;
var statearr_49707_49781 = state_49655__$1;
(statearr_49707_49781[(2)] = null);

(statearr_49707_49781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (12))){
var inst_49545 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
var statearr_49708_49782 = state_49655__$1;
(statearr_49708_49782[(2)] = inst_49545);

(statearr_49708_49782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (2))){
var inst_49507 = (state_49655[(13)]);
var inst_49514 = cljs.core.seq.call(null,inst_49507);
var inst_49515 = inst_49514;
var inst_49516 = null;
var inst_49517 = (0);
var inst_49518 = (0);
var state_49655__$1 = (function (){var statearr_49709 = state_49655;
(statearr_49709[(7)] = inst_49517);

(statearr_49709[(8)] = inst_49515);

(statearr_49709[(9)] = inst_49516);

(statearr_49709[(10)] = inst_49518);

return statearr_49709;
})();
var statearr_49710_49783 = state_49655__$1;
(statearr_49710_49783[(2)] = null);

(statearr_49710_49783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (23))){
var inst_49571 = (state_49655[(23)]);
var inst_49574 = (state_49655[(26)]);
var inst_49576 = (state_49655[(24)]);
var inst_49572 = (state_49655[(25)]);
var inst_49568 = (state_49655[(19)]);
var inst_49579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49581 = (function (){var all_files = inst_49568;
var res_SINGLEQUOTE_ = inst_49571;
var res = inst_49572;
var files_not_loaded = inst_49574;
var dependencies_that_loaded = inst_49576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49568,inst_49579,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49580){
var map__49711 = p__49580;
var map__49711__$1 = ((((!((map__49711 == null)))?((((map__49711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49711.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49711):map__49711);
var request_url = cljs.core.get.call(null,map__49711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49568,inst_49579,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49582 = cljs.core.reverse.call(null,inst_49576);
var inst_49583 = cljs.core.map.call(null,inst_49581,inst_49582);
var inst_49584 = cljs.core.pr_str.call(null,inst_49583);
var inst_49585 = figwheel.client.utils.log.call(null,inst_49584);
var state_49655__$1 = (function (){var statearr_49713 = state_49655;
(statearr_49713[(31)] = inst_49579);

return statearr_49713;
})();
var statearr_49714_49784 = state_49655__$1;
(statearr_49714_49784[(2)] = inst_49585);

(statearr_49714_49784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (35))){
var state_49655__$1 = state_49655;
var statearr_49715_49785 = state_49655__$1;
(statearr_49715_49785[(2)] = true);

(statearr_49715_49785[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (19))){
var inst_49558 = (state_49655[(12)]);
var inst_49564 = figwheel.client.file_reloading.expand_files.call(null,inst_49558);
var state_49655__$1 = state_49655;
var statearr_49716_49786 = state_49655__$1;
(statearr_49716_49786[(2)] = inst_49564);

(statearr_49716_49786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (11))){
var state_49655__$1 = state_49655;
var statearr_49717_49787 = state_49655__$1;
(statearr_49717_49787[(2)] = null);

(statearr_49717_49787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (9))){
var inst_49547 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
var statearr_49718_49788 = state_49655__$1;
(statearr_49718_49788[(2)] = inst_49547);

(statearr_49718_49788[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (5))){
var inst_49517 = (state_49655[(7)]);
var inst_49518 = (state_49655[(10)]);
var inst_49520 = (inst_49518 < inst_49517);
var inst_49521 = inst_49520;
var state_49655__$1 = state_49655;
if(cljs.core.truth_(inst_49521)){
var statearr_49719_49789 = state_49655__$1;
(statearr_49719_49789[(1)] = (7));

} else {
var statearr_49720_49790 = state_49655__$1;
(statearr_49720_49790[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (14))){
var inst_49528 = (state_49655[(22)]);
var inst_49537 = cljs.core.first.call(null,inst_49528);
var inst_49538 = figwheel.client.file_reloading.eval_body.call(null,inst_49537,opts);
var inst_49539 = cljs.core.next.call(null,inst_49528);
var inst_49515 = inst_49539;
var inst_49516 = null;
var inst_49517 = (0);
var inst_49518 = (0);
var state_49655__$1 = (function (){var statearr_49721 = state_49655;
(statearr_49721[(7)] = inst_49517);

(statearr_49721[(8)] = inst_49515);

(statearr_49721[(32)] = inst_49538);

(statearr_49721[(9)] = inst_49516);

(statearr_49721[(10)] = inst_49518);

return statearr_49721;
})();
var statearr_49722_49791 = state_49655__$1;
(statearr_49722_49791[(2)] = null);

(statearr_49722_49791[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (45))){
var state_49655__$1 = state_49655;
var statearr_49723_49792 = state_49655__$1;
(statearr_49723_49792[(2)] = null);

(statearr_49723_49792[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (26))){
var inst_49571 = (state_49655[(23)]);
var inst_49574 = (state_49655[(26)]);
var inst_49576 = (state_49655[(24)]);
var inst_49572 = (state_49655[(25)]);
var inst_49568 = (state_49655[(19)]);
var inst_49591 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49593 = (function (){var all_files = inst_49568;
var res_SINGLEQUOTE_ = inst_49571;
var res = inst_49572;
var files_not_loaded = inst_49574;
var dependencies_that_loaded = inst_49576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49568,inst_49591,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49592){
var map__49724 = p__49592;
var map__49724__$1 = ((((!((map__49724 == null)))?((((map__49724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49724):map__49724);
var namespace = cljs.core.get.call(null,map__49724__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49724__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49568,inst_49591,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49594 = cljs.core.map.call(null,inst_49593,inst_49572);
var inst_49595 = cljs.core.pr_str.call(null,inst_49594);
var inst_49596 = figwheel.client.utils.log.call(null,inst_49595);
var inst_49597 = (function (){var all_files = inst_49568;
var res_SINGLEQUOTE_ = inst_49571;
var res = inst_49572;
var files_not_loaded = inst_49574;
var dependencies_that_loaded = inst_49576;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49568,inst_49591,inst_49593,inst_49594,inst_49595,inst_49596,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49571,inst_49574,inst_49576,inst_49572,inst_49568,inst_49591,inst_49593,inst_49594,inst_49595,inst_49596,state_val_49656,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49598 = setTimeout(inst_49597,(10));
var state_49655__$1 = (function (){var statearr_49726 = state_49655;
(statearr_49726[(33)] = inst_49596);

(statearr_49726[(34)] = inst_49591);

return statearr_49726;
})();
var statearr_49727_49793 = state_49655__$1;
(statearr_49727_49793[(2)] = inst_49598);

(statearr_49727_49793[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (16))){
var state_49655__$1 = state_49655;
var statearr_49728_49794 = state_49655__$1;
(statearr_49728_49794[(2)] = reload_dependents);

(statearr_49728_49794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (38))){
var inst_49608 = (state_49655[(16)]);
var inst_49626 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49608);
var state_49655__$1 = state_49655;
var statearr_49729_49795 = state_49655__$1;
(statearr_49729_49795[(2)] = inst_49626);

(statearr_49729_49795[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (30))){
var state_49655__$1 = state_49655;
var statearr_49730_49796 = state_49655__$1;
(statearr_49730_49796[(2)] = null);

(statearr_49730_49796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (10))){
var inst_49528 = (state_49655[(22)]);
var inst_49530 = cljs.core.chunked_seq_QMARK_.call(null,inst_49528);
var state_49655__$1 = state_49655;
if(inst_49530){
var statearr_49731_49797 = state_49655__$1;
(statearr_49731_49797[(1)] = (13));

} else {
var statearr_49732_49798 = state_49655__$1;
(statearr_49732_49798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (18))){
var inst_49562 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
if(cljs.core.truth_(inst_49562)){
var statearr_49733_49799 = state_49655__$1;
(statearr_49733_49799[(1)] = (19));

} else {
var statearr_49734_49800 = state_49655__$1;
(statearr_49734_49800[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (42))){
var state_49655__$1 = state_49655;
var statearr_49735_49801 = state_49655__$1;
(statearr_49735_49801[(2)] = null);

(statearr_49735_49801[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (37))){
var inst_49621 = (state_49655[(2)]);
var state_49655__$1 = state_49655;
var statearr_49736_49802 = state_49655__$1;
(statearr_49736_49802[(2)] = inst_49621);

(statearr_49736_49802[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49656 === (8))){
var inst_49515 = (state_49655[(8)]);
var inst_49528 = (state_49655[(22)]);
var inst_49528__$1 = cljs.core.seq.call(null,inst_49515);
var state_49655__$1 = (function (){var statearr_49737 = state_49655;
(statearr_49737[(22)] = inst_49528__$1);

return statearr_49737;
})();
if(inst_49528__$1){
var statearr_49738_49803 = state_49655__$1;
(statearr_49738_49803[(1)] = (10));

} else {
var statearr_49739_49804 = state_49655__$1;
(statearr_49739_49804[(1)] = (11));

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
}
});})(c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44193__auto__,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto____0 = (function (){
var statearr_49743 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49743[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto__);

(statearr_49743[(1)] = (1));

return statearr_49743;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto____1 = (function (state_49655){
while(true){
var ret_value__44195__auto__ = (function (){try{while(true){
var result__44196__auto__ = switch__44193__auto__.call(null,state_49655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44196__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44196__auto__;
}
break;
}
}catch (e49744){if((e49744 instanceof Object)){
var ex__44197__auto__ = e49744;
var statearr_49745_49805 = state_49655;
(statearr_49745_49805[(5)] = ex__44197__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44195__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49806 = state_49655;
state_49655 = G__49806;
continue;
} else {
return ret_value__44195__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto__ = function(state_49655){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto____1.call(this,state_49655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44194__auto__;
})()
;})(switch__44193__auto__,c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44309__auto__ = (function (){var statearr_49746 = f__44308__auto__.call(null);
(statearr_49746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44307__auto__);

return statearr_49746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44309__auto__);
});})(c__44307__auto__,map__49500,map__49500__$1,opts,before_jsload,on_jsload,reload_dependents,map__49501,map__49501__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44307__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49809,link){
var map__49812 = p__49809;
var map__49812__$1 = ((((!((map__49812 == null)))?((((map__49812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49812.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49812):map__49812);
var file = cljs.core.get.call(null,map__49812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__49812,map__49812__$1,file){
return (function (p1__49807_SHARP_,p2__49808_SHARP_){
if(cljs.core._EQ_.call(null,p1__49807_SHARP_,p2__49808_SHARP_)){
return p1__49807_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__49812,map__49812__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49818){
var map__49819 = p__49818;
var map__49819__$1 = ((((!((map__49819 == null)))?((((map__49819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49819.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49819):map__49819);
var match_length = cljs.core.get.call(null,map__49819__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49819__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49814_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49814_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6753__auto__)){
var res = temp__6753__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49821_SHARP_,p2__49822_SHARP_){
return cljs.core.assoc.call(null,p1__49821_SHARP_,cljs.core.get.call(null,p2__49822_SHARP_,key),p2__49822_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6751__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6751__auto__)){
var link = temp__6751__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6751__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6751__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_49823 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49823);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49823);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49824,p__49825){
var map__49830 = p__49824;
var map__49830__$1 = ((((!((map__49830 == null)))?((((map__49830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49830):map__49830);
var on_cssload = cljs.core.get.call(null,map__49830__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49831 = p__49825;
var map__49831__$1 = ((((!((map__49831 == null)))?((((map__49831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49831):map__49831);
var files_msg = map__49831__$1;
var files = cljs.core.get.call(null,map__49831__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6753__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6753__auto__)){
var f_datas = temp__6753__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1509941618902