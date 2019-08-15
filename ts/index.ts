// ts 基础类型

//布尔值： 最基本的数据类型就是简单的true/false值，在JavaScript和Typescript里叫做boolean (其他语言也一样)
let isDone: boolean = true
console.log('布尔值', isDone)
//数字： 和JavaScript一样，Typescript里面的所有数字都是浮点数，这些浮点数的类型是number，除了支持十进制，十六进制字面量，Typescript还支持ECMAscript2015中引入的二进制和八进制的字面量
let decLiteral: number = 2
console.log('数字', decLiteral)
let hexLiteral: number = 0xf00d
console.log('数字', hexLiteral)
let binaryLiteral: number = 0b1010
console.log('数字', binaryLiteral)
let octalLiteral: number = 0o744
console.log('数字', octalLiteral)
// 字符串：JavaScript的程序的另一项基本操作就是处理网页或服务器端的文本数据。像其他语言一样，我们用string表示文本数据类型，和JavaScript一样，可以使用双引号""，或单引号''来表示字符串
let names: string = "Gaofeng"
names = "GAOFENG LI"
let age: number = 24
console.log('字符串', names)
let sentence: string = `My name is ${ names }. I'll be ${ age } years old next month.`
console.log('模版字符串', sentence)
let sentenceStr: string = "My name is " + names + ".  I'll be " + age + " years old next month."
console.log('字符串拼接', sentenceStr)
// 数组：Typescript和JavaScript一样也可以操作数组元素。有两种方式可以定义数组。第一种可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
let list: number[] = [1, 2, 3, 4, 5]
console.log('数组', list)
// 第二种方式是使用数组泛型 Array<元素类型>
let arr: Array<number> = [1, 2, 3, 4, 5]
console.log('泛型声明数组', arr)
// 元组：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。比如，你可以定义一对值为string和number的元组
let tupleArr: [string, number]
// tupleArr = ['hello', 666]
// tupleArr = [666, 'hello'] // error
console.log('元组', tupleArr)
// 当访问一个已知索引的元素，会得到正确的类型
// console.log('元组内的字符串', tupleArr[0].substr(4))
// 当访问一个越界的元素，会使用联合类型代替
// tupleArr[3] = 'world'
// console.log('联合类型', tupleArr[3])
// 枚举：enum类型是对JavaScript标准数据类型的补充。像C#一样，使用枚举类型可以为一组数值赋予友好的名字
enum Colors {Red, Green, pink}
let c: Colors = Colors.Green
console.log('枚举', c)
// 默认情况下，从0开始为元素编号。你也可以手动为元素指定数值，例如：
enum Colors2 {red = 1, Green, pink}
let c2: Colors2 = Colors2.Green
console.log('枚举2', c2)
// 或者全部采用手动赋值
enum Colors3 {red = 1, Green = 3, pink = 4}
let c3: Colors3 = Colors3.Green
console.log('枚举3', c3)
// 枚举类型提供一个便利，就是你可以根据枚举的值，得到他的名字。例如
enum Colors4 {red = 1, Green = 4, pink = 5}
let c4: string = Colors4[4]
console.log('枚举4', c4)