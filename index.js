var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' - ' + middleInitial + ' - ' + lastName;
    }
    return Student;
}());
function tsFn(person) {
    console.log(person);
    return 'Hello, ' + person.firstName + ' - ' + person.lastName;
}
// let user = 'Gaofeng Li'
// let user = {firstName: 'Li', lastName: 'Gaofeng'}
var user = new Student('Gaofeng', 'middleInitial', 'lastName');
document.body.innerHTML = tsFn(user);
