(defproject com.nicki/flipside "0.0.1-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0-alpha14"]
                 [org.clojure/clojurescript "1.9.494"]
                 [org.clojure/core.match "0.3.0-alpha4"]

                 [lonocloud/synthread "1.0.4"]
                 [datascript "0.15.4"]
                 [com.rpl/specter "1.0.0"]
                 [com.taoensso/tufte "1.1.0"]]
  

  :profiles {:dev {:source-paths ["dev" "test"]
                   :plugins [[lein-figwheel "0.5.10"]]
                   :cljsbuild {:builds [{:id "ui"
                                         :source-paths ["src/"]
                                         :figwheel true
                                         :compiler {:main "com.nicki.flipside.main"
                                                    :asset-path "js/out"
                                                    :output-to "resources/public/js/flipside.js"
                                                    :output-dir "resources/public/js/out"}}]}

                   :figwheel {:css-dirs ["resources/public/css"]}

                   :dependencies [[midje "1.9.0-alpha6" :exclusions [org.clojure/tools.namespace]]
                                  [rum "0.10.7"]
                                  [org.clojure/tools.namespace "0.2.11" :exclusions [org.clojure/clojure]]
                                  [io.aviso/pretty "0.1.33"]]}})
