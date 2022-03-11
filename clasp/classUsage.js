class Class {
  static staticProp = "Ahoj";

  static staticMethod() {
    return this.staticProp;
  }

}

function test_static() {
  console.log(Class.staticMethod());
}
