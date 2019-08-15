class Student {
  fullName: string;
  constructor (public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + ' - ' + middleInitial + ' - ' + lastName
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function tsFn (person: Person) {
  console.log(person)
  return 'Hello, ' + person.firstName + ' - ' + person.lastName
}

// let user = 'Gaofeng Li'
// let user = {firstName: 'Li', lastName: 'Gaofeng'}
let user = new Student('Gaofeng', 'middleInitial', 'lastName')

document.body.innerHTML = tsFn(user)