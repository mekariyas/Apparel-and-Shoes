const obj = {items:[{id:2, name:'jane'},{id:4, name:'jane'},{id:5, name:'alex'}, {id:5, name:'keith'}]}
let num = 0


function removeItem(obj, number){
    return obj.items.filter(item=>{return obj.items.indexOf(item) !== number})
}

console.log(removeItem(obj,num))