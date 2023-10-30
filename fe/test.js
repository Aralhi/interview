function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name);
  }
}