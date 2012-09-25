import 'test-case.jsx';
import "js.jsx"; // for js.global
import _ from 'underscore.jsx';

final class _Test extends TestCase {
  override function beforeClass(tests:string[]): void {
    var eval = js.global["eval"] as (string) -> Object;
    eval('global._ = require("/path/to/underscore-min.js")');

    super.beforeClass(tests);
  }

  function testRange1(): void{
    this.expect(_.range(3).toString()).toBe([0,1,2].toString());
  }
}
