/* Directive à placer tout en haut du script, ce soit être la 1ère instruction sinon la directive ne sera pas prise en compte (commentaires avant acceptés) */

"use strict";

undefined = "test";

function test() {
  undefined = "test";
}

test();