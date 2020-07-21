// This file was procedurally generated from the following sources:
// - src/direct-eval-code/arrow-func-declare-arguments-assign.case
// - src/direct-eval-code/arrow-func/fn-body-cntns-arguments-func-decl.template
/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when the function body contains an |arguments| function declaration.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");

let count = 0;
const f = (p = eval("var arguments = 'param'")) => {
  function arguments() {}
  assert.sameValue(typeof arguments, "function");
  
  count++;
}
f();
assert.sameValue(count, 1);


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");
