// This file was procedurally generated from the following sources:
// - src/direct-eval-code/declare-arguments.case
// - src/direct-eval-code/default/no-pre-existing-and-explicit-arguments-bindings-are-present.template
/*---
description: Declare "arguments" and assign to it in direct eval code (Redeclaration of "arguments" in direct eval in parameter expressions)
esid: sec-evaldeclarationinstantiation
flags: [generated]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding at beginning");

assert.throws(function(p = eval("var arguments")) {}, SyntaxError);

assert.sameValue("arguments" in this, false, "No global arguments object at end");
