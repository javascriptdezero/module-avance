/* Directive tout en haut d'une fonction (valable pour le code de la fonction uniquement) */

undefined = "test";

function test() {
  "use strict";
  undefined = "test";
}

test();