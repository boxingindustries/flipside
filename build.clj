(require 'cljs.build.api)

(cljs.build.api/build "src" {:output-to "resources/public/js/flipside.js"
                             :output-dir "resources/public/js/out"})