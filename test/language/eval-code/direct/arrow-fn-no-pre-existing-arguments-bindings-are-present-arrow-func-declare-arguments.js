// This file was procedurally generated from the following sources:
// - src/direct-eval-code/arrow-func-declare-arguments.case
// - src/direct-eval-code/arrow-func/no-pre-existing-arguments-bindings-are-present.template
/*---
description: Declare "arguments" and assign to it in direct eval code (Declare |arguments| when no pre-existing |arguments| bindings are present.)
esid: sec-evaldeclarationinstantiation
flags: [generated, noStrict]
---*/


assert.sameValue("arguments" in this, false, "No global 'arguments' binding");

let count = 0;
const f = (p = eval("var arguments")) => {
  assert.sameValue(arguments, "param");
  count++;
}
f();
assert.sameValue(count, 1);

assert.sameValue("arguments" in this, false, "No global 'arguments' binding");
