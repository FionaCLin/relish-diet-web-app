#!/bin/bash


###
# e.g.
# ./check.sh test/recipe_test.js
process.NODE_ENV=test

./node_modules/nodeunit/bin/nodeunit $1
