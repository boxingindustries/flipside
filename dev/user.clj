(ns user
  (:require [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.pprint :refer [pprint]]
            [clojure.stacktrace :refer [e]]
            [clojure.tools.namespace.repl :refer [refresh refresh-all disable-unload! disable-reload!]]
            [clojure.edn :as edn]
            [lonocloud.synthread :as ->]
            [com.rpl.specter :as s]
            [datascript.core :as d]
            io.aviso.repl
            io.aviso.exception))

(set! *warn-on-reflection* true)

;;Don't unload this namespace, otherwise we'll lose the `reload!` function below when there are any errors
(disable-unload!)
(disable-reload!)

(io.aviso.repl/install-pretty-exceptions)

(defn reload!
  []
  (let [r (clojure.tools.namespace.repl/refresh)]
    (when-not (= :ok r)
      (io.aviso.exception/write-exception r))))
