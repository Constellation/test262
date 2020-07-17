// This file was procedurally generated from the following sources:
// - src/direct-eval-code/declare-arguments-and-assign.case
// - src/direct-eval-code/default/the-function-body-contains-an-arguments-function-declaration.template
/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when the function body contains an |arguments| function declaration.)
esid: sec-evaldeclarationinstantiation
flags: [generated]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding at beginning");

function f(p = eval("var arguments = 'param'")) {
  function arguments() {}
  
}
assert.throws(SyntaxError, f);


assert.sameValue("arguments" in this, false, "No global 'arguments' binding at end");
