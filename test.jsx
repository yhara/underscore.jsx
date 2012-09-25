import "js.jsx"; // for js.global
import 'test-case.jsx';
import _ from 'underscore.jsx';

class node {
  static function require(name: string): Object {
    var eval = js.global["eval"] as (string) -> Object;
    return eval('require("'+name+'")');
  }
}

final class _Test extends TestCase {
  override function beforeClass(tests:string[]): void {
    var _ = node.require("./underscore.js");
    super.beforeClass(tests);
  }

  function testRange1(): void{
    this.expect(_.range(3)).toBe([0,1,2]);
  }
}
