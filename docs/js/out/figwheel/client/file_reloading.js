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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48838_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48838_SHARP_));
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
var seq__48843 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48844 = null;
var count__48845 = (0);
var i__48846 = (0);
while(true){
if((i__48846 < count__48845)){
var n = cljs.core._nth.call(null,chunk__48844,i__48846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48847 = seq__48843;
var G__48848 = chunk__48844;
var G__48849 = count__48845;
var G__48850 = (i__48846 + (1));
seq__48843 = G__48847;
chunk__48844 = G__48848;
count__48845 = G__48849;
i__48846 = G__48850;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__48843);
if(temp__6753__auto__){
var seq__48843__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48843__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__48843__$1);
var G__48851 = cljs.core.chunk_rest.call(null,seq__48843__$1);
var G__48852 = c__36798__auto__;
var G__48853 = cljs.core.count.call(null,c__36798__auto__);
var G__48854 = (0);
seq__48843 = G__48851;
chunk__48844 = G__48852;
count__48845 = G__48853;
i__48846 = G__48854;
continue;
} else {
var n = cljs.core.first.call(null,seq__48843__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__48855 = cljs.core.next.call(null,seq__48843__$1);
var G__48856 = null;
var G__48857 = (0);
var G__48858 = (0);
seq__48843 = G__48855;
chunk__48844 = G__48856;
count__48845 = G__48857;
i__48846 = G__48858;
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

var seq__48909_48920 = cljs.core.seq.call(null,deps);
var chunk__48910_48921 = null;
var count__48911_48922 = (0);
var i__48912_48923 = (0);
while(true){
if((i__48912_48923 < count__48911_48922)){
var dep_48924 = cljs.core._nth.call(null,chunk__48910_48921,i__48912_48923);
topo_sort_helper_STAR_.call(null,dep_48924,(depth + (1)),state);

var G__48925 = seq__48909_48920;
var G__48926 = chunk__48910_48921;
var G__48927 = count__48911_48922;
var G__48928 = (i__48912_48923 + (1));
seq__48909_48920 = G__48925;
chunk__48910_48921 = G__48926;
count__48911_48922 = G__48927;
i__48912_48923 = G__48928;
continue;
} else {
var temp__6753__auto___48929 = cljs.core.seq.call(null,seq__48909_48920);
if(temp__6753__auto___48929){
var seq__48909_48930__$1 = temp__6753__auto___48929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48909_48930__$1)){
var c__36798__auto___48931 = cljs.core.chunk_first.call(null,seq__48909_48930__$1);
var G__48932 = cljs.core.chunk_rest.call(null,seq__48909_48930__$1);
var G__48933 = c__36798__auto___48931;
var G__48934 = cljs.core.count.call(null,c__36798__auto___48931);
var G__48935 = (0);
seq__48909_48920 = G__48932;
chunk__48910_48921 = G__48933;
count__48911_48922 = G__48934;
i__48912_48923 = G__48935;
continue;
} else {
var dep_48936 = cljs.core.first.call(null,seq__48909_48930__$1);
topo_sort_helper_STAR_.call(null,dep_48936,(depth + (1)),state);

var G__48937 = cljs.core.next.call(null,seq__48909_48930__$1);
var G__48938 = null;
var G__48939 = (0);
var G__48940 = (0);
seq__48909_48920 = G__48937;
chunk__48910_48921 = G__48938;
count__48911_48922 = G__48939;
i__48912_48923 = G__48940;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48913){
var vec__48917 = p__48913;
var seq__48918 = cljs.core.seq.call(null,vec__48917);
var first__48919 = cljs.core.first.call(null,seq__48918);
var seq__48918__$1 = cljs.core.next.call(null,seq__48918);
var x = first__48919;
var xs = seq__48918__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__48917,seq__48918,first__48919,seq__48918__$1,x,xs,get_deps__$1){
return (function (p1__48859_SHARP_){
return clojure.set.difference.call(null,p1__48859_SHARP_,x);
});})(vec__48917,seq__48918,first__48919,seq__48918__$1,x,xs,get_deps__$1))
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
var seq__48953 = cljs.core.seq.call(null,provides);
var chunk__48954 = null;
var count__48955 = (0);
var i__48956 = (0);
while(true){
if((i__48956 < count__48955)){
var prov = cljs.core._nth.call(null,chunk__48954,i__48956);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48957_48965 = cljs.core.seq.call(null,requires);
var chunk__48958_48966 = null;
var count__48959_48967 = (0);
var i__48960_48968 = (0);
while(true){
if((i__48960_48968 < count__48959_48967)){
var req_48969 = cljs.core._nth.call(null,chunk__48958_48966,i__48960_48968);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48969,prov);

var G__48970 = seq__48957_48965;
var G__48971 = chunk__48958_48966;
var G__48972 = count__48959_48967;
var G__48973 = (i__48960_48968 + (1));
seq__48957_48965 = G__48970;
chunk__48958_48966 = G__48971;
count__48959_48967 = G__48972;
i__48960_48968 = G__48973;
continue;
} else {
var temp__6753__auto___48974 = cljs.core.seq.call(null,seq__48957_48965);
if(temp__6753__auto___48974){
var seq__48957_48975__$1 = temp__6753__auto___48974;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48957_48975__$1)){
var c__36798__auto___48976 = cljs.core.chunk_first.call(null,seq__48957_48975__$1);
var G__48977 = cljs.core.chunk_rest.call(null,seq__48957_48975__$1);
var G__48978 = c__36798__auto___48976;
var G__48979 = cljs.core.count.call(null,c__36798__auto___48976);
var G__48980 = (0);
seq__48957_48965 = G__48977;
chunk__48958_48966 = G__48978;
count__48959_48967 = G__48979;
i__48960_48968 = G__48980;
continue;
} else {
var req_48981 = cljs.core.first.call(null,seq__48957_48975__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48981,prov);

var G__48982 = cljs.core.next.call(null,seq__48957_48975__$1);
var G__48983 = null;
var G__48984 = (0);
var G__48985 = (0);
seq__48957_48965 = G__48982;
chunk__48958_48966 = G__48983;
count__48959_48967 = G__48984;
i__48960_48968 = G__48985;
continue;
}
} else {
}
}
break;
}

var G__48986 = seq__48953;
var G__48987 = chunk__48954;
var G__48988 = count__48955;
var G__48989 = (i__48956 + (1));
seq__48953 = G__48986;
chunk__48954 = G__48987;
count__48955 = G__48988;
i__48956 = G__48989;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__48953);
if(temp__6753__auto__){
var seq__48953__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48953__$1)){
var c__36798__auto__ = cljs.core.chunk_first.call(null,seq__48953__$1);
var G__48990 = cljs.core.chunk_rest.call(null,seq__48953__$1);
var G__48991 = c__36798__auto__;
var G__48992 = cljs.core.count.call(null,c__36798__auto__);
var G__48993 = (0);
seq__48953 = G__48990;
chunk__48954 = G__48991;
count__48955 = G__48992;
i__48956 = G__48993;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48953__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48961_48994 = cljs.core.seq.call(null,requires);
var chunk__48962_48995 = null;
var count__48963_48996 = (0);
var i__48964_48997 = (0);
while(true){
if((i__48964_48997 < count__48963_48996)){
var req_48998 = cljs.core._nth.call(null,chunk__48962_48995,i__48964_48997);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48998,prov);

var G__48999 = seq__48961_48994;
var G__49000 = chunk__48962_48995;
var G__49001 = count__48963_48996;
var G__49002 = (i__48964_48997 + (1));
seq__48961_48994 = G__48999;
chunk__48962_48995 = G__49000;
count__48963_48996 = G__49001;
i__48964_48997 = G__49002;
continue;
} else {
var temp__6753__auto___49003__$1 = cljs.core.seq.call(null,seq__48961_48994);
if(temp__6753__auto___49003__$1){
var seq__48961_49004__$1 = temp__6753__auto___49003__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48961_49004__$1)){
var c__36798__auto___49005 = cljs.core.chunk_first.call(null,seq__48961_49004__$1);
var G__49006 = cljs.core.chunk_rest.call(null,seq__48961_49004__$1);
var G__49007 = c__36798__auto___49005;
var G__49008 = cljs.core.count.call(null,c__36798__auto___49005);
var G__49009 = (0);
seq__48961_48994 = G__49006;
chunk__48962_48995 = G__49007;
count__48963_48996 = G__49008;
i__48964_48997 = G__49009;
continue;
} else {
var req_49010 = cljs.core.first.call(null,seq__48961_49004__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49010,prov);

var G__49011 = cljs.core.next.call(null,seq__48961_49004__$1);
var G__49012 = null;
var G__49013 = (0);
var G__49014 = (0);
seq__48961_48994 = G__49011;
chunk__48962_48995 = G__49012;
count__48963_48996 = G__49013;
i__48964_48997 = G__49014;
continue;
}
} else {
}
}
break;
}

var G__49015 = cljs.core.next.call(null,seq__48953__$1);
var G__49016 = null;
var G__49017 = (0);
var G__49018 = (0);
seq__48953 = G__49015;
chunk__48954 = G__49016;
count__48955 = G__49017;
i__48956 = G__49018;
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
var seq__49023_49027 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__49024_49028 = null;
var count__49025_49029 = (0);
var i__49026_49030 = (0);
while(true){
if((i__49026_49030 < count__49025_49029)){
var ns_49031 = cljs.core._nth.call(null,chunk__49024_49028,i__49026_49030);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49031);

var G__49032 = seq__49023_49027;
var G__49033 = chunk__49024_49028;
var G__49034 = count__49025_49029;
var G__49035 = (i__49026_49030 + (1));
seq__49023_49027 = G__49032;
chunk__49024_49028 = G__49033;
count__49025_49029 = G__49034;
i__49026_49030 = G__49035;
continue;
} else {
var temp__6753__auto___49036 = cljs.core.seq.call(null,seq__49023_49027);
if(temp__6753__auto___49036){
var seq__49023_49037__$1 = temp__6753__auto___49036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49023_49037__$1)){
var c__36798__auto___49038 = cljs.core.chunk_first.call(null,seq__49023_49037__$1);
var G__49039 = cljs.core.chunk_rest.call(null,seq__49023_49037__$1);
var G__49040 = c__36798__auto___49038;
var G__49041 = cljs.core.count.call(null,c__36798__auto___49038);
var G__49042 = (0);
seq__49023_49027 = G__49039;
chunk__49024_49028 = G__49040;
count__49025_49029 = G__49041;
i__49026_49030 = G__49042;
continue;
} else {
var ns_49043 = cljs.core.first.call(null,seq__49023_49037__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_49043);

var G__49044 = cljs.core.next.call(null,seq__49023_49037__$1);
var G__49045 = null;
var G__49046 = (0);
var G__49047 = (0);
seq__49023_49027 = G__49044;
chunk__49024_49028 = G__49045;
count__49025_49029 = G__49046;
i__49026_49030 = G__49047;
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
var G__49048__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__49048 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49049__i = 0, G__49049__a = new Array(arguments.length -  0);
while (G__49049__i < G__49049__a.length) {G__49049__a[G__49049__i] = arguments[G__49049__i + 0]; ++G__49049__i;}
  args = new cljs.core.IndexedSeq(G__49049__a,0);
} 
return G__49048__delegate.call(this,args);};
G__49048.cljs$lang$maxFixedArity = 0;
G__49048.cljs$lang$applyTo = (function (arglist__49050){
var args = cljs.core.seq(arglist__49050);
return G__49048__delegate(args);
});
G__49048.cljs$core$IFn$_invoke$arity$variadic = G__49048__delegate;
return G__49048;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__49051 = cljs.core._EQ_;
var expr__49052 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__49051.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__49052))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__49051,expr__49052){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__49051,expr__49052))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__49051,expr__49052){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e49054){if((e49054 instanceof Error)){
var e = e49054;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49054;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__49051,expr__49052))
} else {
if(cljs.core.truth_(pred__49051.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__49052))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49051.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__49052))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__49051.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__49052))){
return ((function (pred__49051,expr__49052){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e49055){if((e49055 instanceof Error)){
var e = e49055;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e49055;

}
}})());
});
;})(pred__49051,expr__49052))
} else {
return ((function (pred__49051,expr__49052){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__49051,expr__49052))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__49056,callback){
var map__49059 = p__49056;
var map__49059__$1 = ((((!((map__49059 == null)))?((((map__49059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49059):map__49059);
var file_msg = map__49059__$1;
var request_url = cljs.core.get.call(null,map__49059__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__49059,map__49059__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__49059,map__49059__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__){
return (function (state_49083){
var state_val_49084 = (state_49083[(1)]);
if((state_val_49084 === (7))){
var inst_49079 = (state_49083[(2)]);
var state_49083__$1 = state_49083;
var statearr_49085_49105 = state_49083__$1;
(statearr_49085_49105[(2)] = inst_49079);

(statearr_49085_49105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (1))){
var state_49083__$1 = state_49083;
var statearr_49086_49106 = state_49083__$1;
(statearr_49086_49106[(2)] = null);

(statearr_49086_49106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (4))){
var inst_49063 = (state_49083[(7)]);
var inst_49063__$1 = (state_49083[(2)]);
var state_49083__$1 = (function (){var statearr_49087 = state_49083;
(statearr_49087[(7)] = inst_49063__$1);

return statearr_49087;
})();
if(cljs.core.truth_(inst_49063__$1)){
var statearr_49088_49107 = state_49083__$1;
(statearr_49088_49107[(1)] = (5));

} else {
var statearr_49089_49108 = state_49083__$1;
(statearr_49089_49108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (6))){
var state_49083__$1 = state_49083;
var statearr_49090_49109 = state_49083__$1;
(statearr_49090_49109[(2)] = null);

(statearr_49090_49109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (3))){
var inst_49081 = (state_49083[(2)]);
var state_49083__$1 = state_49083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49083__$1,inst_49081);
} else {
if((state_val_49084 === (2))){
var state_49083__$1 = state_49083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49083__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_49084 === (11))){
var inst_49075 = (state_49083[(2)]);
var state_49083__$1 = (function (){var statearr_49091 = state_49083;
(statearr_49091[(8)] = inst_49075);

return statearr_49091;
})();
var statearr_49092_49110 = state_49083__$1;
(statearr_49092_49110[(2)] = null);

(statearr_49092_49110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (9))){
var inst_49069 = (state_49083[(9)]);
var inst_49067 = (state_49083[(10)]);
var inst_49071 = inst_49069.call(null,inst_49067);
var state_49083__$1 = state_49083;
var statearr_49093_49111 = state_49083__$1;
(statearr_49093_49111[(2)] = inst_49071);

(statearr_49093_49111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (5))){
var inst_49063 = (state_49083[(7)]);
var inst_49065 = figwheel.client.file_reloading.blocking_load.call(null,inst_49063);
var state_49083__$1 = state_49083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49083__$1,(8),inst_49065);
} else {
if((state_val_49084 === (10))){
var inst_49067 = (state_49083[(10)]);
var inst_49073 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_49067);
var state_49083__$1 = state_49083;
var statearr_49094_49112 = state_49083__$1;
(statearr_49094_49112[(2)] = inst_49073);

(statearr_49094_49112[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49084 === (8))){
var inst_49063 = (state_49083[(7)]);
var inst_49069 = (state_49083[(9)]);
var inst_49067 = (state_49083[(2)]);
var inst_49068 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_49069__$1 = cljs.core.get.call(null,inst_49068,inst_49063);
var state_49083__$1 = (function (){var statearr_49095 = state_49083;
(statearr_49095[(9)] = inst_49069__$1);

(statearr_49095[(10)] = inst_49067);

return statearr_49095;
})();
if(cljs.core.truth_(inst_49069__$1)){
var statearr_49096_49113 = state_49083__$1;
(statearr_49096_49113[(1)] = (9));

} else {
var statearr_49097_49114 = state_49083__$1;
(statearr_49097_49114[(1)] = (10));

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
});})(c__44331__auto__))
;
return ((function (switch__44217__auto__,c__44331__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__44218__auto__ = null;
var figwheel$client$file_reloading$state_machine__44218__auto____0 = (function (){
var statearr_49101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49101[(0)] = figwheel$client$file_reloading$state_machine__44218__auto__);

(statearr_49101[(1)] = (1));

return statearr_49101;
});
var figwheel$client$file_reloading$state_machine__44218__auto____1 = (function (state_49083){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_49083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e49102){if((e49102 instanceof Object)){
var ex__44221__auto__ = e49102;
var statearr_49103_49115 = state_49083;
(statearr_49103_49115[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49116 = state_49083;
state_49083 = G__49116;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__44218__auto__ = function(state_49083){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__44218__auto____1.call(this,state_49083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__44218__auto____0;
figwheel$client$file_reloading$state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__44218__auto____1;
return figwheel$client$file_reloading$state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__))
})();
var state__44333__auto__ = (function (){var statearr_49104 = f__44332__auto__.call(null);
(statearr_49104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_49104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__))
);

return c__44331__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__49117,callback){
var map__49120 = p__49117;
var map__49120__$1 = ((((!((map__49120 == null)))?((((map__49120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49120.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49120):map__49120);
var file_msg = map__49120__$1;
var namespace = cljs.core.get.call(null,map__49120__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__49120,map__49120__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__49120,map__49120__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__49122){
var map__49125 = p__49122;
var map__49125__$1 = ((((!((map__49125 == null)))?((((map__49125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49125.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49125):map__49125);
var file_msg = map__49125__$1;
var namespace = cljs.core.get.call(null,map__49125__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__49127){
var map__49130 = p__49127;
var map__49130__$1 = ((((!((map__49130 == null)))?((((map__49130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49130):map__49130);
var file_msg = map__49130__$1;
var namespace = cljs.core.get.call(null,map__49130__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__49132,callback){
var map__49135 = p__49132;
var map__49135__$1 = ((((!((map__49135 == null)))?((((map__49135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49135):map__49135);
var file_msg = map__49135__$1;
var request_url = cljs.core.get.call(null,map__49135__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__49135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__44331__auto___49239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto___49239,out){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto___49239,out){
return (function (state_49221){
var state_val_49222 = (state_49221[(1)]);
if((state_val_49222 === (1))){
var inst_49195 = cljs.core.seq.call(null,files);
var inst_49196 = cljs.core.first.call(null,inst_49195);
var inst_49197 = cljs.core.next.call(null,inst_49195);
var inst_49198 = files;
var state_49221__$1 = (function (){var statearr_49223 = state_49221;
(statearr_49223[(7)] = inst_49197);

(statearr_49223[(8)] = inst_49198);

(statearr_49223[(9)] = inst_49196);

return statearr_49223;
})();
var statearr_49224_49240 = state_49221__$1;
(statearr_49224_49240[(2)] = null);

(statearr_49224_49240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49222 === (2))){
var inst_49198 = (state_49221[(8)]);
var inst_49204 = (state_49221[(10)]);
var inst_49203 = cljs.core.seq.call(null,inst_49198);
var inst_49204__$1 = cljs.core.first.call(null,inst_49203);
var inst_49205 = cljs.core.next.call(null,inst_49203);
var inst_49206 = (inst_49204__$1 == null);
var inst_49207 = cljs.core.not.call(null,inst_49206);
var state_49221__$1 = (function (){var statearr_49225 = state_49221;
(statearr_49225[(11)] = inst_49205);

(statearr_49225[(10)] = inst_49204__$1);

return statearr_49225;
})();
if(inst_49207){
var statearr_49226_49241 = state_49221__$1;
(statearr_49226_49241[(1)] = (4));

} else {
var statearr_49227_49242 = state_49221__$1;
(statearr_49227_49242[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49222 === (3))){
var inst_49219 = (state_49221[(2)]);
var state_49221__$1 = state_49221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49221__$1,inst_49219);
} else {
if((state_val_49222 === (4))){
var inst_49204 = (state_49221[(10)]);
var inst_49209 = figwheel.client.file_reloading.reload_js_file.call(null,inst_49204);
var state_49221__$1 = state_49221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49221__$1,(7),inst_49209);
} else {
if((state_val_49222 === (5))){
var inst_49215 = cljs.core.async.close_BANG_.call(null,out);
var state_49221__$1 = state_49221;
var statearr_49228_49243 = state_49221__$1;
(statearr_49228_49243[(2)] = inst_49215);

(statearr_49228_49243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49222 === (6))){
var inst_49217 = (state_49221[(2)]);
var state_49221__$1 = state_49221;
var statearr_49229_49244 = state_49221__$1;
(statearr_49229_49244[(2)] = inst_49217);

(statearr_49229_49244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49222 === (7))){
var inst_49205 = (state_49221[(11)]);
var inst_49211 = (state_49221[(2)]);
var inst_49212 = cljs.core.async.put_BANG_.call(null,out,inst_49211);
var inst_49198 = inst_49205;
var state_49221__$1 = (function (){var statearr_49230 = state_49221;
(statearr_49230[(12)] = inst_49212);

(statearr_49230[(8)] = inst_49198);

return statearr_49230;
})();
var statearr_49231_49245 = state_49221__$1;
(statearr_49231_49245[(2)] = null);

(statearr_49231_49245[(1)] = (2));


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
});})(c__44331__auto___49239,out))
;
return ((function (switch__44217__auto__,c__44331__auto___49239,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto____0 = (function (){
var statearr_49235 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49235[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto__);

(statearr_49235[(1)] = (1));

return statearr_49235;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto____1 = (function (state_49221){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_49221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e49236){if((e49236 instanceof Object)){
var ex__44221__auto__ = e49236;
var statearr_49237_49246 = state_49221;
(statearr_49237_49246[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49247 = state_49221;
state_49221 = G__49247;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto__ = function(state_49221){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto____1.call(this,state_49221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto___49239,out))
})();
var state__44333__auto__ = (function (){var statearr_49238 = f__44332__auto__.call(null);
(statearr_49238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto___49239);

return statearr_49238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto___49239,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__49248,opts){
var map__49252 = p__49248;
var map__49252__$1 = ((((!((map__49252 == null)))?((((map__49252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49252.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49252):map__49252);
var eval_body = cljs.core.get.call(null,map__49252__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__49252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e49254){var e = e49254;
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
return (function (p1__49255_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49255_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__49264){
var vec__49265 = p__49264;
var k = cljs.core.nth.call(null,vec__49265,(0),null);
var v = cljs.core.nth.call(null,vec__49265,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__49268){
var vec__49269 = p__49268;
var k = cljs.core.nth.call(null,vec__49269,(0),null);
var v = cljs.core.nth.call(null,vec__49269,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__49275,p__49276){
var map__49524 = p__49275;
var map__49524__$1 = ((((!((map__49524 == null)))?((((map__49524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49524):map__49524);
var opts = map__49524__$1;
var before_jsload = cljs.core.get.call(null,map__49524__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__49524__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__49524__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__49525 = p__49276;
var map__49525__$1 = ((((!((map__49525 == null)))?((((map__49525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49525.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49525):map__49525);
var msg = map__49525__$1;
var files = cljs.core.get.call(null,map__49525__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__49525__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__49525__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__44331__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__44332__auto__ = (function (){var switch__44217__auto__ = ((function (c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_49679){
var state_val_49680 = (state_49679[(1)]);
if((state_val_49680 === (7))){
var inst_49539 = (state_49679[(7)]);
var inst_49540 = (state_49679[(8)]);
var inst_49541 = (state_49679[(9)]);
var inst_49542 = (state_49679[(10)]);
var inst_49547 = cljs.core._nth.call(null,inst_49540,inst_49542);
var inst_49548 = figwheel.client.file_reloading.eval_body.call(null,inst_49547,opts);
var inst_49549 = (inst_49542 + (1));
var tmp49681 = inst_49539;
var tmp49682 = inst_49540;
var tmp49683 = inst_49541;
var inst_49539__$1 = tmp49681;
var inst_49540__$1 = tmp49682;
var inst_49541__$1 = tmp49683;
var inst_49542__$1 = inst_49549;
var state_49679__$1 = (function (){var statearr_49684 = state_49679;
(statearr_49684[(7)] = inst_49539__$1);

(statearr_49684[(8)] = inst_49540__$1);

(statearr_49684[(9)] = inst_49541__$1);

(statearr_49684[(11)] = inst_49548);

(statearr_49684[(10)] = inst_49542__$1);

return statearr_49684;
})();
var statearr_49685_49771 = state_49679__$1;
(statearr_49685_49771[(2)] = null);

(statearr_49685_49771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (20))){
var inst_49582 = (state_49679[(12)]);
var inst_49590 = figwheel.client.file_reloading.sort_files.call(null,inst_49582);
var state_49679__$1 = state_49679;
var statearr_49686_49772 = state_49679__$1;
(statearr_49686_49772[(2)] = inst_49590);

(statearr_49686_49772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (27))){
var state_49679__$1 = state_49679;
var statearr_49687_49773 = state_49679__$1;
(statearr_49687_49773[(2)] = null);

(statearr_49687_49773[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (1))){
var inst_49531 = (state_49679[(13)]);
var inst_49528 = before_jsload.call(null,files);
var inst_49529 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_49530 = (function (){return ((function (inst_49531,inst_49528,inst_49529,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49272_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49272_SHARP_);
});
;})(inst_49531,inst_49528,inst_49529,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49531__$1 = cljs.core.filter.call(null,inst_49530,files);
var inst_49532 = cljs.core.not_empty.call(null,inst_49531__$1);
var state_49679__$1 = (function (){var statearr_49688 = state_49679;
(statearr_49688[(13)] = inst_49531__$1);

(statearr_49688[(14)] = inst_49529);

(statearr_49688[(15)] = inst_49528);

return statearr_49688;
})();
if(cljs.core.truth_(inst_49532)){
var statearr_49689_49774 = state_49679__$1;
(statearr_49689_49774[(1)] = (2));

} else {
var statearr_49690_49775 = state_49679__$1;
(statearr_49690_49775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (24))){
var state_49679__$1 = state_49679;
var statearr_49691_49776 = state_49679__$1;
(statearr_49691_49776[(2)] = null);

(statearr_49691_49776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (39))){
var inst_49632 = (state_49679[(16)]);
var state_49679__$1 = state_49679;
var statearr_49692_49777 = state_49679__$1;
(statearr_49692_49777[(2)] = inst_49632);

(statearr_49692_49777[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (46))){
var inst_49674 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
var statearr_49693_49778 = state_49679__$1;
(statearr_49693_49778[(2)] = inst_49674);

(statearr_49693_49778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (4))){
var inst_49576 = (state_49679[(2)]);
var inst_49577 = cljs.core.List.EMPTY;
var inst_49578 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_49577);
var inst_49579 = (function (){return ((function (inst_49576,inst_49577,inst_49578,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49273_SHARP_){
var and__35875__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__49273_SHARP_);
if(cljs.core.truth_(and__35875__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__49273_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__49273_SHARP_)));
} else {
return and__35875__auto__;
}
});
;})(inst_49576,inst_49577,inst_49578,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49580 = cljs.core.filter.call(null,inst_49579,files);
var inst_49581 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_49582 = cljs.core.concat.call(null,inst_49580,inst_49581);
var state_49679__$1 = (function (){var statearr_49694 = state_49679;
(statearr_49694[(12)] = inst_49582);

(statearr_49694[(17)] = inst_49576);

(statearr_49694[(18)] = inst_49578);

return statearr_49694;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_49695_49779 = state_49679__$1;
(statearr_49695_49779[(1)] = (16));

} else {
var statearr_49696_49780 = state_49679__$1;
(statearr_49696_49780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (15))){
var inst_49566 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
var statearr_49697_49781 = state_49679__$1;
(statearr_49697_49781[(2)] = inst_49566);

(statearr_49697_49781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (21))){
var inst_49592 = (state_49679[(19)]);
var inst_49592__$1 = (state_49679[(2)]);
var inst_49593 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_49592__$1);
var state_49679__$1 = (function (){var statearr_49698 = state_49679;
(statearr_49698[(19)] = inst_49592__$1);

return statearr_49698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49679__$1,(22),inst_49593);
} else {
if((state_val_49680 === (31))){
var inst_49677 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49679__$1,inst_49677);
} else {
if((state_val_49680 === (32))){
var inst_49632 = (state_49679[(16)]);
var inst_49637 = inst_49632.cljs$lang$protocol_mask$partition0$;
var inst_49638 = (inst_49637 & (64));
var inst_49639 = inst_49632.cljs$core$ISeq$;
var inst_49640 = (cljs.core.PROTOCOL_SENTINEL === inst_49639);
var inst_49641 = (inst_49638) || (inst_49640);
var state_49679__$1 = state_49679;
if(cljs.core.truth_(inst_49641)){
var statearr_49699_49782 = state_49679__$1;
(statearr_49699_49782[(1)] = (35));

} else {
var statearr_49700_49783 = state_49679__$1;
(statearr_49700_49783[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (40))){
var inst_49654 = (state_49679[(20)]);
var inst_49653 = (state_49679[(2)]);
var inst_49654__$1 = cljs.core.get.call(null,inst_49653,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_49655 = cljs.core.get.call(null,inst_49653,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_49656 = cljs.core.not_empty.call(null,inst_49654__$1);
var state_49679__$1 = (function (){var statearr_49701 = state_49679;
(statearr_49701[(21)] = inst_49655);

(statearr_49701[(20)] = inst_49654__$1);

return statearr_49701;
})();
if(cljs.core.truth_(inst_49656)){
var statearr_49702_49784 = state_49679__$1;
(statearr_49702_49784[(1)] = (41));

} else {
var statearr_49703_49785 = state_49679__$1;
(statearr_49703_49785[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (33))){
var state_49679__$1 = state_49679;
var statearr_49704_49786 = state_49679__$1;
(statearr_49704_49786[(2)] = false);

(statearr_49704_49786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (13))){
var inst_49552 = (state_49679[(22)]);
var inst_49556 = cljs.core.chunk_first.call(null,inst_49552);
var inst_49557 = cljs.core.chunk_rest.call(null,inst_49552);
var inst_49558 = cljs.core.count.call(null,inst_49556);
var inst_49539 = inst_49557;
var inst_49540 = inst_49556;
var inst_49541 = inst_49558;
var inst_49542 = (0);
var state_49679__$1 = (function (){var statearr_49705 = state_49679;
(statearr_49705[(7)] = inst_49539);

(statearr_49705[(8)] = inst_49540);

(statearr_49705[(9)] = inst_49541);

(statearr_49705[(10)] = inst_49542);

return statearr_49705;
})();
var statearr_49706_49787 = state_49679__$1;
(statearr_49706_49787[(2)] = null);

(statearr_49706_49787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (22))){
var inst_49596 = (state_49679[(23)]);
var inst_49600 = (state_49679[(24)]);
var inst_49592 = (state_49679[(19)]);
var inst_49595 = (state_49679[(25)]);
var inst_49595__$1 = (state_49679[(2)]);
var inst_49596__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49595__$1);
var inst_49597 = (function (){var all_files = inst_49592;
var res_SINGLEQUOTE_ = inst_49595__$1;
var res = inst_49596__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_49596,inst_49600,inst_49592,inst_49595,inst_49595__$1,inst_49596__$1,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__49274_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__49274_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_49596,inst_49600,inst_49592,inst_49595,inst_49595__$1,inst_49596__$1,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49598 = cljs.core.filter.call(null,inst_49597,inst_49595__$1);
var inst_49599 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_49600__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_49599);
var inst_49601 = cljs.core.not_empty.call(null,inst_49600__$1);
var state_49679__$1 = (function (){var statearr_49707 = state_49679;
(statearr_49707[(23)] = inst_49596__$1);

(statearr_49707[(24)] = inst_49600__$1);

(statearr_49707[(25)] = inst_49595__$1);

(statearr_49707[(26)] = inst_49598);

return statearr_49707;
})();
if(cljs.core.truth_(inst_49601)){
var statearr_49708_49788 = state_49679__$1;
(statearr_49708_49788[(1)] = (23));

} else {
var statearr_49709_49789 = state_49679__$1;
(statearr_49709_49789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (36))){
var state_49679__$1 = state_49679;
var statearr_49710_49790 = state_49679__$1;
(statearr_49710_49790[(2)] = false);

(statearr_49710_49790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (41))){
var inst_49654 = (state_49679[(20)]);
var inst_49658 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_49659 = cljs.core.map.call(null,inst_49658,inst_49654);
var inst_49660 = cljs.core.pr_str.call(null,inst_49659);
var inst_49661 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49660)].join('');
var inst_49662 = figwheel.client.utils.log.call(null,inst_49661);
var state_49679__$1 = state_49679;
var statearr_49711_49791 = state_49679__$1;
(statearr_49711_49791[(2)] = inst_49662);

(statearr_49711_49791[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (43))){
var inst_49655 = (state_49679[(21)]);
var inst_49665 = (state_49679[(2)]);
var inst_49666 = cljs.core.not_empty.call(null,inst_49655);
var state_49679__$1 = (function (){var statearr_49712 = state_49679;
(statearr_49712[(27)] = inst_49665);

return statearr_49712;
})();
if(cljs.core.truth_(inst_49666)){
var statearr_49713_49792 = state_49679__$1;
(statearr_49713_49792[(1)] = (44));

} else {
var statearr_49714_49793 = state_49679__$1;
(statearr_49714_49793[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (29))){
var inst_49596 = (state_49679[(23)]);
var inst_49600 = (state_49679[(24)]);
var inst_49592 = (state_49679[(19)]);
var inst_49595 = (state_49679[(25)]);
var inst_49598 = (state_49679[(26)]);
var inst_49632 = (state_49679[(16)]);
var inst_49628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_49631 = (function (){var all_files = inst_49592;
var res_SINGLEQUOTE_ = inst_49595;
var res = inst_49596;
var files_not_loaded = inst_49598;
var dependencies_that_loaded = inst_49600;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49632,inst_49628,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49630){
var map__49715 = p__49630;
var map__49715__$1 = ((((!((map__49715 == null)))?((((map__49715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49715):map__49715);
var namespace = cljs.core.get.call(null,map__49715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49632,inst_49628,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49632__$1 = cljs.core.group_by.call(null,inst_49631,inst_49598);
var inst_49634 = (inst_49632__$1 == null);
var inst_49635 = cljs.core.not.call(null,inst_49634);
var state_49679__$1 = (function (){var statearr_49717 = state_49679;
(statearr_49717[(28)] = inst_49628);

(statearr_49717[(16)] = inst_49632__$1);

return statearr_49717;
})();
if(inst_49635){
var statearr_49718_49794 = state_49679__$1;
(statearr_49718_49794[(1)] = (32));

} else {
var statearr_49719_49795 = state_49679__$1;
(statearr_49719_49795[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (44))){
var inst_49655 = (state_49679[(21)]);
var inst_49668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_49655);
var inst_49669 = cljs.core.pr_str.call(null,inst_49668);
var inst_49670 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_49669)].join('');
var inst_49671 = figwheel.client.utils.log.call(null,inst_49670);
var state_49679__$1 = state_49679;
var statearr_49720_49796 = state_49679__$1;
(statearr_49720_49796[(2)] = inst_49671);

(statearr_49720_49796[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (6))){
var inst_49573 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
var statearr_49721_49797 = state_49679__$1;
(statearr_49721_49797[(2)] = inst_49573);

(statearr_49721_49797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (28))){
var inst_49598 = (state_49679[(26)]);
var inst_49625 = (state_49679[(2)]);
var inst_49626 = cljs.core.not_empty.call(null,inst_49598);
var state_49679__$1 = (function (){var statearr_49722 = state_49679;
(statearr_49722[(29)] = inst_49625);

return statearr_49722;
})();
if(cljs.core.truth_(inst_49626)){
var statearr_49723_49798 = state_49679__$1;
(statearr_49723_49798[(1)] = (29));

} else {
var statearr_49724_49799 = state_49679__$1;
(statearr_49724_49799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (25))){
var inst_49596 = (state_49679[(23)]);
var inst_49612 = (state_49679[(2)]);
var inst_49613 = cljs.core.not_empty.call(null,inst_49596);
var state_49679__$1 = (function (){var statearr_49725 = state_49679;
(statearr_49725[(30)] = inst_49612);

return statearr_49725;
})();
if(cljs.core.truth_(inst_49613)){
var statearr_49726_49800 = state_49679__$1;
(statearr_49726_49800[(1)] = (26));

} else {
var statearr_49727_49801 = state_49679__$1;
(statearr_49727_49801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (34))){
var inst_49648 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
if(cljs.core.truth_(inst_49648)){
var statearr_49728_49802 = state_49679__$1;
(statearr_49728_49802[(1)] = (38));

} else {
var statearr_49729_49803 = state_49679__$1;
(statearr_49729_49803[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (17))){
var state_49679__$1 = state_49679;
var statearr_49730_49804 = state_49679__$1;
(statearr_49730_49804[(2)] = recompile_dependents);

(statearr_49730_49804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (3))){
var state_49679__$1 = state_49679;
var statearr_49731_49805 = state_49679__$1;
(statearr_49731_49805[(2)] = null);

(statearr_49731_49805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (12))){
var inst_49569 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
var statearr_49732_49806 = state_49679__$1;
(statearr_49732_49806[(2)] = inst_49569);

(statearr_49732_49806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (2))){
var inst_49531 = (state_49679[(13)]);
var inst_49538 = cljs.core.seq.call(null,inst_49531);
var inst_49539 = inst_49538;
var inst_49540 = null;
var inst_49541 = (0);
var inst_49542 = (0);
var state_49679__$1 = (function (){var statearr_49733 = state_49679;
(statearr_49733[(7)] = inst_49539);

(statearr_49733[(8)] = inst_49540);

(statearr_49733[(9)] = inst_49541);

(statearr_49733[(10)] = inst_49542);

return statearr_49733;
})();
var statearr_49734_49807 = state_49679__$1;
(statearr_49734_49807[(2)] = null);

(statearr_49734_49807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (23))){
var inst_49596 = (state_49679[(23)]);
var inst_49600 = (state_49679[(24)]);
var inst_49592 = (state_49679[(19)]);
var inst_49595 = (state_49679[(25)]);
var inst_49598 = (state_49679[(26)]);
var inst_49603 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_49605 = (function (){var all_files = inst_49592;
var res_SINGLEQUOTE_ = inst_49595;
var res = inst_49596;
var files_not_loaded = inst_49598;
var dependencies_that_loaded = inst_49600;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49603,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49604){
var map__49735 = p__49604;
var map__49735__$1 = ((((!((map__49735 == null)))?((((map__49735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49735):map__49735);
var request_url = cljs.core.get.call(null,map__49735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49603,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49606 = cljs.core.reverse.call(null,inst_49600);
var inst_49607 = cljs.core.map.call(null,inst_49605,inst_49606);
var inst_49608 = cljs.core.pr_str.call(null,inst_49607);
var inst_49609 = figwheel.client.utils.log.call(null,inst_49608);
var state_49679__$1 = (function (){var statearr_49737 = state_49679;
(statearr_49737[(31)] = inst_49603);

return statearr_49737;
})();
var statearr_49738_49808 = state_49679__$1;
(statearr_49738_49808[(2)] = inst_49609);

(statearr_49738_49808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (35))){
var state_49679__$1 = state_49679;
var statearr_49739_49809 = state_49679__$1;
(statearr_49739_49809[(2)] = true);

(statearr_49739_49809[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (19))){
var inst_49582 = (state_49679[(12)]);
var inst_49588 = figwheel.client.file_reloading.expand_files.call(null,inst_49582);
var state_49679__$1 = state_49679;
var statearr_49740_49810 = state_49679__$1;
(statearr_49740_49810[(2)] = inst_49588);

(statearr_49740_49810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (11))){
var state_49679__$1 = state_49679;
var statearr_49741_49811 = state_49679__$1;
(statearr_49741_49811[(2)] = null);

(statearr_49741_49811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (9))){
var inst_49571 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
var statearr_49742_49812 = state_49679__$1;
(statearr_49742_49812[(2)] = inst_49571);

(statearr_49742_49812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (5))){
var inst_49541 = (state_49679[(9)]);
var inst_49542 = (state_49679[(10)]);
var inst_49544 = (inst_49542 < inst_49541);
var inst_49545 = inst_49544;
var state_49679__$1 = state_49679;
if(cljs.core.truth_(inst_49545)){
var statearr_49743_49813 = state_49679__$1;
(statearr_49743_49813[(1)] = (7));

} else {
var statearr_49744_49814 = state_49679__$1;
(statearr_49744_49814[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (14))){
var inst_49552 = (state_49679[(22)]);
var inst_49561 = cljs.core.first.call(null,inst_49552);
var inst_49562 = figwheel.client.file_reloading.eval_body.call(null,inst_49561,opts);
var inst_49563 = cljs.core.next.call(null,inst_49552);
var inst_49539 = inst_49563;
var inst_49540 = null;
var inst_49541 = (0);
var inst_49542 = (0);
var state_49679__$1 = (function (){var statearr_49745 = state_49679;
(statearr_49745[(7)] = inst_49539);

(statearr_49745[(8)] = inst_49540);

(statearr_49745[(32)] = inst_49562);

(statearr_49745[(9)] = inst_49541);

(statearr_49745[(10)] = inst_49542);

return statearr_49745;
})();
var statearr_49746_49815 = state_49679__$1;
(statearr_49746_49815[(2)] = null);

(statearr_49746_49815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (45))){
var state_49679__$1 = state_49679;
var statearr_49747_49816 = state_49679__$1;
(statearr_49747_49816[(2)] = null);

(statearr_49747_49816[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (26))){
var inst_49596 = (state_49679[(23)]);
var inst_49600 = (state_49679[(24)]);
var inst_49592 = (state_49679[(19)]);
var inst_49595 = (state_49679[(25)]);
var inst_49598 = (state_49679[(26)]);
var inst_49615 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_49617 = (function (){var all_files = inst_49592;
var res_SINGLEQUOTE_ = inst_49595;
var res = inst_49596;
var files_not_loaded = inst_49598;
var dependencies_that_loaded = inst_49600;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49615,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__49616){
var map__49748 = p__49616;
var map__49748__$1 = ((((!((map__49748 == null)))?((((map__49748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49748):map__49748);
var namespace = cljs.core.get.call(null,map__49748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__49748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49615,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49618 = cljs.core.map.call(null,inst_49617,inst_49596);
var inst_49619 = cljs.core.pr_str.call(null,inst_49618);
var inst_49620 = figwheel.client.utils.log.call(null,inst_49619);
var inst_49621 = (function (){var all_files = inst_49592;
var res_SINGLEQUOTE_ = inst_49595;
var res = inst_49596;
var files_not_loaded = inst_49598;
var dependencies_that_loaded = inst_49600;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49615,inst_49617,inst_49618,inst_49619,inst_49620,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_49596,inst_49600,inst_49592,inst_49595,inst_49598,inst_49615,inst_49617,inst_49618,inst_49619,inst_49620,state_val_49680,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_49622 = setTimeout(inst_49621,(10));
var state_49679__$1 = (function (){var statearr_49750 = state_49679;
(statearr_49750[(33)] = inst_49620);

(statearr_49750[(34)] = inst_49615);

return statearr_49750;
})();
var statearr_49751_49817 = state_49679__$1;
(statearr_49751_49817[(2)] = inst_49622);

(statearr_49751_49817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (16))){
var state_49679__$1 = state_49679;
var statearr_49752_49818 = state_49679__$1;
(statearr_49752_49818[(2)] = reload_dependents);

(statearr_49752_49818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (38))){
var inst_49632 = (state_49679[(16)]);
var inst_49650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49632);
var state_49679__$1 = state_49679;
var statearr_49753_49819 = state_49679__$1;
(statearr_49753_49819[(2)] = inst_49650);

(statearr_49753_49819[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (30))){
var state_49679__$1 = state_49679;
var statearr_49754_49820 = state_49679__$1;
(statearr_49754_49820[(2)] = null);

(statearr_49754_49820[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (10))){
var inst_49552 = (state_49679[(22)]);
var inst_49554 = cljs.core.chunked_seq_QMARK_.call(null,inst_49552);
var state_49679__$1 = state_49679;
if(inst_49554){
var statearr_49755_49821 = state_49679__$1;
(statearr_49755_49821[(1)] = (13));

} else {
var statearr_49756_49822 = state_49679__$1;
(statearr_49756_49822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (18))){
var inst_49586 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
if(cljs.core.truth_(inst_49586)){
var statearr_49757_49823 = state_49679__$1;
(statearr_49757_49823[(1)] = (19));

} else {
var statearr_49758_49824 = state_49679__$1;
(statearr_49758_49824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (42))){
var state_49679__$1 = state_49679;
var statearr_49759_49825 = state_49679__$1;
(statearr_49759_49825[(2)] = null);

(statearr_49759_49825[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (37))){
var inst_49645 = (state_49679[(2)]);
var state_49679__$1 = state_49679;
var statearr_49760_49826 = state_49679__$1;
(statearr_49760_49826[(2)] = inst_49645);

(statearr_49760_49826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49680 === (8))){
var inst_49539 = (state_49679[(7)]);
var inst_49552 = (state_49679[(22)]);
var inst_49552__$1 = cljs.core.seq.call(null,inst_49539);
var state_49679__$1 = (function (){var statearr_49761 = state_49679;
(statearr_49761[(22)] = inst_49552__$1);

return statearr_49761;
})();
if(inst_49552__$1){
var statearr_49762_49827 = state_49679__$1;
(statearr_49762_49827[(1)] = (10));

} else {
var statearr_49763_49828 = state_49679__$1;
(statearr_49763_49828[(1)] = (11));

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
});})(c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__44217__auto__,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto____0 = (function (){
var statearr_49767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49767[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto__);

(statearr_49767[(1)] = (1));

return statearr_49767;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto____1 = (function (state_49679){
while(true){
var ret_value__44219__auto__ = (function (){try{while(true){
var result__44220__auto__ = switch__44217__auto__.call(null,state_49679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__44220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44220__auto__;
}
break;
}
}catch (e49768){if((e49768 instanceof Object)){
var ex__44221__auto__ = e49768;
var statearr_49769_49829 = state_49679;
(statearr_49769_49829[(5)] = ex__44221__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__44219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49830 = state_49679;
state_49679 = G__49830;
continue;
} else {
return ret_value__44219__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto__ = function(state_49679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto____1.call(this,state_49679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__44218__auto__;
})()
;})(switch__44217__auto__,c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__44333__auto__ = (function (){var statearr_49770 = f__44332__auto__.call(null);
(statearr_49770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__44331__auto__);

return statearr_49770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__44333__auto__);
});})(c__44331__auto__,map__49524,map__49524__$1,opts,before_jsload,on_jsload,reload_dependents,map__49525,map__49525__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__44331__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__49833,link){
var map__49836 = p__49833;
var map__49836__$1 = ((((!((map__49836 == null)))?((((map__49836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49836):map__49836);
var file = cljs.core.get.call(null,map__49836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6753__auto__ = link.href;
if(cljs.core.truth_(temp__6753__auto__)){
var link_href = temp__6753__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6753__auto__,map__49836,map__49836__$1,file){
return (function (p1__49831_SHARP_,p2__49832_SHARP_){
if(cljs.core._EQ_.call(null,p1__49831_SHARP_,p2__49832_SHARP_)){
return p1__49831_SHARP_;
} else {
return false;
}
});})(link_href,temp__6753__auto__,map__49836,map__49836__$1,file))
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
var temp__6753__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__49842){
var map__49843 = p__49842;
var map__49843__$1 = ((((!((map__49843 == null)))?((((map__49843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49843.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49843):map__49843);
var match_length = cljs.core.get.call(null,map__49843__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__49843__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__49838_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__49838_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__49845_SHARP_,p2__49846_SHARP_){
return cljs.core.assoc.call(null,p1__49845_SHARP_,cljs.core.get.call(null,p2__49846_SHARP_,key),p2__49846_SHARP_);
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
var loaded_f_datas_49847 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_49847);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_49847);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__49848,p__49849){
var map__49854 = p__49848;
var map__49854__$1 = ((((!((map__49854 == null)))?((((map__49854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49854.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49854):map__49854);
var on_cssload = cljs.core.get.call(null,map__49854__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__49855 = p__49849;
var map__49855__$1 = ((((!((map__49855 == null)))?((((map__49855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49855):map__49855);
var files_msg = map__49855__$1;
var files = cljs.core.get.call(null,map__49855__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1511925502574