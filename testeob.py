class Person:

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def say_hello(self):
        print("Hello, my name is {} and I am {} years old.".format(self.name, self.age))
        person = Person("John Doe", 30)
        print(person.name)