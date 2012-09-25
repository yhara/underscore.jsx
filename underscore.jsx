native class _ {

  static function zip(...arrays:variant): variant[];

  static function indexOf(array:variant, value:variant): variant;
  static function indexOf(array:variant, value:variant, isSorted:boolean): variant;
  static function lastIndexOf(array:variant, value:variant): variant;

  static function range(n:number): number[];
  static function range(start:number, stop:number): number[];
  static function range(start:number, stop:number, step:number): number[];
}


