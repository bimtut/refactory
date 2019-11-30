let data = require('./data.json')

//getting months
for (let i = 0; i < data.length; i++) {
    let toy = new Date(data[i].created_at)
    let month = toy.getMonth()
    data[i].created_at = month
}
let februari = []
for (let i = 0; i < data.length; i++) {
    if (data[i].created_at === 1) {
        februari.push(data[i])
    }
}
console.log(februari)
console.log('=============');

// ===============
function filterName(name) {
    var newArray = data.filter(function (el) {
        return el.customer.name === name
    });
    return newArray
}

function getTotal(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        let data = array[i]
        for (let j = 0; j < data.items.length; j++) {
            let item = data.items[j]
            total += item.price
        }
    }
    return total
}

var newArray = filterName('Ari')
let total = getTotal(newArray)

console.log(total)
console.log('=============');

// =========

let names = []
for (let i = 0; i < data.length; i++) {
    let name = data[i].customer.name
    names.push(name)
}
names = [...new Set(names)];
let buyer = []
for (let i = 0; i < names.length; i++) {
    let name = names[i]
    let obj = {}
    obj[name] = 0
    var newArray = filterName(name)
    let total = getTotal(newArray)
    if (total >= 300000){
        obj[name] = total
        buyer.push(obj)
    }
}
console.log(buyer)
