var person = {
    name:'aaa'
}
// 需求 既要看到person具体内容
// ----> 打断调试  watch 监听某一个变量 是否声明 以及赋值的过程 
// ---> 没声明 no available 有声明 初始 undefined 值的变化


console.log(person)
// alert(person)
console.log('-------')
var _name = 'bb'
// alert(name)
var num = 1
// alert(num)
var num1 = 2
// alert(num1)
var sum = num + num1

// alert(sum)
console.log(true + false)

console.log(2>1 || 'gukun' > 'liuyuchai' || true + false)


//字符串的长度不能决定字符串的大小

//'abc'>'aabc'