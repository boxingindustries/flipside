(ns figwheel.connect.build-ui (:require [com.nicki.flipside.main] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "ui", :websocket-url "ws://localhost:3449/figwheel-ws"})

