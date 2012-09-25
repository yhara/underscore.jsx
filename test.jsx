import 'test-case.jsx';
import "js.jsx"; // for js.global
import _ from 'underscore.jsx';

final class _Test extends TestCase {
  override function beforeClass(tests:string[]): void {
    var eval = js.global["eval"] as (string) -> Object;
    eval('global._ = require("/Users/yhara/proj/puyo/jsx/underscore.jsx/underscore-min.js")');

    super.beforeClass(tests);
  }

  function testZip(): void{
    this.expect(_.zip([1,2], [3,4]).toString()).toBe([[1,3],[2,4]].toString());
  }

  function testIndexOf(): void{
    this.expect(_.indexOf(["a","b","c"], "b")).toBe(1);
    this.expect(_.indexOf(["a","b","c"], "b", true)).toBe(1);
    this.expect(_.lastIndexOf(["a","b","c","b"], "b")).toBe(3);
  }

  function testRange(): void{
    this.expect(_.range(3).toString()).toBe([0,1,2].toString());
    this.expect(_.range(3,4).toString()).toBe([3].toString());
    this.expect(_.range(3,9,2).toString()).toBe([3,5,7].toString());
  }
}
