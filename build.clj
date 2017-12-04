(require 'cljs.build.api)

(cljs.build.api/build "src" {:output-to "docs/js/flipside.js"
                             :output-dir "docs/js/out"})