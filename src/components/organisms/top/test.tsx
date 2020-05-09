var number = [1,2,5]
var roots = number.map(function(num){
    return Math.sqrt(num);
})
console.log(roots)

var test = number.find(v=>v === 2);
console.log(test)

var tests = number.filter(v=>v === 2);
console.log(tests)

var s = 1;
var item = number.map(v => v + s);
console.log(item)
var items = number.map(v => v);
console.log(items)
var itemss = number.filter(v => v < 2);
console.log(itemss)

var prop  = [1,4,2]
var test_item = prop.map(v => v * 2);
console.log(test_item)

var item_test = [
    {
        "name": "test",
        "id": 2
    },
    {
        "name": "testttt",
        "id": 3
    }
]

var count = 0;
var text = item_test.map(item => {
    count += 1
    var dic = {};
    console.log(item.name)
    var i = Object.keys(item);
    console.log(i)
    var n = Object.values(item);
    console.log(n)
    // const i = i.map()
    // dic[i] = item.value;
    return dic
});
console.log(text)
// var itemsss = () => {
//     const item = this.prop;
//     console.log(item)
//     if ( item !== undefined){
//         console.log(item)
//         const s = item.map(v => v * 2)
//         console.log(s)
//     }
// }

// let test01 = {
//     prop: [1,5,8],
//     func: itemsss
// }

// test01.func();