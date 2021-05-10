
// Create a class Mkulima that will keep a list of farms, grocery vendors and products. 
// A single farm record should contain id, farm name, farmer, phone number and address. A single 
// grocery vendor record should contain id, store name and phone number. A product should have id, 
// name and price fields. 
// Users of the system should be able to:
//  addFarm - params: farmId, name, farmer, phone, address
//  removeFarm - params: farmId
//  updateFarm - params: farmId, name, farmer, phone, address
//  getFarm - params: farmId - returns a farm object
//  addProduct - params: productId, name, price
//  removeProduct - params: productId
//  updateProduct - params: productId, name, price
//  getProduct - params: productId - returns a product object
//  printProducts - No param, console logs a list of product items with their prices.
// calculateOrderCost - params: productId, quantity

class Mkulima {

    constructor() {
        this.farms = [];
        this.products = [];
        this.orders = [];

    }
    //   login(){


    //   }
    //   signup(){

    //   }
    addFarm(name, farmId, farmer, address) {
        return this.farms.push({ name, farmId, farmer, address })
    }

    getFarm(farmId) {
        
        for(var i=0;i<=this.farms.length;i++){
        for(var object of this.farms){
           
            for ( var vals of Object.values(object)){
                if(vals==farmId){
                    // return `${Object.entries(object)}`
                    return `${Object.keys(object)}:${Object.values(object)}`


                }
                
                
            }
        }

        
        }
}
removeFarm(farmId){
    for(var i=0;i<=this.farms.length;i++){
        // return this.farms.splice(i,1)
        for(var object of this.farms){
           
            for ( var vals of Object.values(object)){
                if(vals==farmId){
                    // return `${Object.entries(object)}`
                    // this.farms.splice(i,1)
                    return this.farms.splice(i,0)
                }}}}
}

//  updateFarm - params: farmId, name, farmer, phone, address
updateFarm(farmId,name,farmer,phone,address){
    this.farms.name=name;
    this.farms.farmer=farmer;
    this.farms.farmId=farmId;
    this.farms.phone=phone;
    this.farms.address=address;
var updates={farmId,name,phone,address}
return updates;}

addProduct(productId, name, price) {
        return this.products.push({ name, price, productId })
    }
removeProduct(productId){
        for(var i=0;i<=this.products.length;i++){
            for(var object of this.products){
                for ( var vals of Object.values(object)){
                    if(vals==productId){
                        return this.products.splice(i,0)
                    }}}}
    }
updateProduct(productId,name,price){
    this.products.name=name;
    this.products.price=price;
    this.products.productId=productId;
var updates={productId,name,price}
return updates;
    
}

getProduct(productId) {
        
                for(var i=0;i<=this.products.length;i++){
                for(var object of this.products){
                   
                    for ( var vals of Object.values(object)){
                        if(vals==productId){
                            return `${Object.keys(object)}:${Object.values(object)}`
                        } 
                    }
                }
                }
        }
        printProducts(){
            for (var index of this.products){
                for (var objects in Object.entries(index)){
                    return `${index.name}:${index.price}`
                }
               
            }
        }
    calculateOrderCost(productId,quantity){
        for(var i=0;i<=this.products.length;i++){
            for(var object of this.products){
               
                for ( var vals of Object.values(object)){
                    if(vals==productId){
                        return price* quantity
                    } 
                }
            }
            }


    }
}

var listfarms = new Mkulima()
listfarms.addFarm(name = "mkulima", farmId = 2222, farmer = "Juliet", address = 23456)
listfarms.addFarm(name = "mkua", farmId = 999, farmer = "Joji", address = 23)
listfarms.addFarm(name = "fama", farmId = 22, farmer = "Sindet", address = 56)
console.log(listfarms.farms)

console.log(listfarms.getFarm(farmId=22))
console.log(listfarms.getFarm(farmId=999))

console.log(listfarms.updateFarm(farmId=22,name="Maembe",farmer="Jane",phone=098765,address=8987))
console.log(listfarms.updateFarm(farmId=999,name="Mango",farmer="Jon",phone=090988765,address=89))

console.log(listfarms.removeFarm(22))

console.log(listfarms.addProduct(productId=78, name="Orange", price=30))
console.log(listfarms.addProduct(productId=98, name="Beetroot", price=80))
console.log(listfarms.addProduct(productId=24, name="Mboga", price=70))

console.log(listfarms.products)

console.log(listfarms.getProduct(productId=78))
console.log(listfarms.getProduct(productId=98))
console.log(listfarms.products)


console.log(listfarms.removeProduct(89))
console.log(listfarms.removeProduct(98))
console.log(listfarms.products)


console.log(listfarms.updateProduct(productId=98,name="Mango",price=100))
console.log(listfarms.updateProduct(productId=22,name="Oranges",price="170"))
console.log(listfarms.products)

console.log(listfarms.printProducts())

console.log(listfarms.calculateOrderCost(98,2))
console.log(listfarms.calculateOrderCost(78,3))












    
