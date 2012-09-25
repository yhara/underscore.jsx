import "js/web.jsx";
import _ from "underscore.jsx";

class _Main {
  static function main(args: string[]) : void {
    var document = dom.window.document;

    log _.zip([1,2,3], [4,5,6]);

    var item = _.zip([1,2,3], [4,5,6])[0][0] as string;
    var text = document.createTextNode("Hello, "+item);
    document.getElementById("hello").appendChild(text);
  }
}
