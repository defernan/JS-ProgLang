function showName(firstname, lastname){
  var intro = "Your name is: ";
  return function() {
    var space = " ";
    return intro + firstname + space + lastname;
  };
}

var test = showName("Linus", "Torvol")
document.writeln(test());



function newPerson(name, age){
  var privateName = name;
  var privateAge = age;
  return {
    sayName: function(){
      return ("Hello, my name is " + privateName);
    },
    sayAge: function(){
      return ("I am " + privateAge + " years old.")
    },
    setAge: function(age){
      privateAge = age;
    }
  }
};

var person = newPerson("Katie", 20);
document.writeln(person.sayName());
document.writeln(person.sayAge());
person.setAge(21);
document.writeln("I just had a birthday, now " + person.sayAge());
