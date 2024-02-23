obj1 = {
  name: "liu",
  sayHello() {
    console.log("Hello");
    console.log(this.name);
  },
  other: {
    sayName() {
      console.log("name", this.name);
    },
  },
};

obj1.sayHello();

obj1.other.sayName();
