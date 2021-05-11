// package.json has been modified to include { "type": "module" }

import { fn1, fn2, fn3 } from "./helpers.js"

import lib from "./lib/index.js"

fn1()
fn2()
fn3()

lib.largeFn1()
lib.largeFn2()
lib.largeFn3()
