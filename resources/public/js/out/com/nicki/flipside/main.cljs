(ns com.nicki.flipside.main
  (:require-macros [com.nicki.util.macros :refer [p pp]]
                   [lonocloud.synthread :as ->])
  (:require [cljs.core.match :refer-macros [match]]
            [datascript.core :as d]
            [rum.core :as rum]))

(enable-console-print!)

(def grid-box-size 50)
(def num-of-grid-rows 10)
(def num-of-grid-columns 10)

(defonce !app
  (atom {:play? false
         :grid (for [c (range 1 (inc num-of-grid-columns))
                     r (range 1 (inc num-of-grid-rows))]
                 [c r])
         :pathway []}))


(defn trigger!
  [event]
  (swap! !app (fn [app]
                (match [event]

                       [{:event/hover-tile {:c c :r r }}]
                       (if (= [c r] (butlast (last (:pathway app))))
                         (do
                           (p (str (:pathway app)))
                           (update-in app [:pathway] pop))
                         (do
                           (p (str (:pathway app)))
                           (update-in app [:pathway] conj [c r])))))))

(defn draw-grid
  [columns rows box-size app]
  (for [c (range 1 (inc columns))
        r (range 1 (inc rows))]
    [:.grid-box {:style {:width (str box-size "px")
                         :height (str box-size "px")
                         :-webkit-transform (str "translate3d(" (* box-size c) "px, "
                                                 (* box-size r) "px, 0px)")}
                 :id (str c "-" r)

                 :on-mouse-over
                 (fn []
                   (trigger! {:event/hover-tile {:c c :r r }}))

                 :data-box-in-path (some #(= [c r] %) (:pathway app))
                 }]))


(rum/defc *app
  [trigger! app]

  [:.app

   (draw-grid num-of-grid-columns
              num-of-grid-rows
              grid-box-size
              app)])


(defn render!
  [app]
  (.render js/ReactDOM (*app trigger! app)
           (.getElementById js/document "container")))


(defonce hack
  (do
    ;;re-render watcher
    (add-watch !app :re-render (fn [_ _ old new] (render! new)))

    ;;change something so that the app renders the first time
    (swap! !app assoc :play? true)))