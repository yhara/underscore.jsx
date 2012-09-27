native class _ {

  static function zip(...arrays:variant): variant[];

  static function indexOf(array:variant, value:variant): variant;
  static function indexOf(array:variant, value:variant, isSorted:boolean): variant;
  static function lastIndexOf(array:variant, value:variant): variant;

  static function range(n:number): number[];
  static function range(start:number, stop:number): number[];
  static function range(start:number, stop:number, step:number): number[];

  static function flatten(array:variant): variant[];
  static function flatten(array:variant, shallow:boolean): variant[];

  static function map(obj:variant, iterator:variant): variant;
  static function map(obj:variant, iterator:variant, context:variant): variant[];
  static function collect(obj:variant, iterator:variant): variant;
  static function collect(obj:variant, iterator:variant, context:variant): variant[];

  static function uniq(array:variant): variant[];
  static function uniq(array:variant, isSorted:boolean): variant[];
  static function uniq(array:variant, isSorted:boolean, iterator:variant): variant[];
  static function unique(array:variant): variant[];
  static function unique(array:variant, isSorted:boolean): variant[];
  static function unique(array:variant, isSorted:boolean, iterator:variant): variant[];
}


