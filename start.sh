#!/bin/bash

JVM_OPTIONS="
  -cp `lein classpath`
  -Djava.awt.headless=true
  -client
  -XX:+UseConcMarkSweepGC
  -XX:+CMSClassUnloadingEnabled"

rlwrap java $JVM_OPTIONS clojure.main build.clj development
