import "js.jsx";
import _ from "underscore.jsx";

class _Main {
  static function main(args: string[]) : void {
    var eval = js.global["eval"] as (string) -> Object;
    eval('var _ = require("./underscore-min.js")');

    log _.zip([1,2,3], [4,5,6]);
  }
}
