module.exports = function(){
    var faker = require('faker');
    faker.locale = "de";
    var _ = require('lodash');
    return {
        people : _.times(10,function(n){
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar(),
                email: faker.internet.email(),
                product: faker.commerce.productName(),
                price: faker.commerce.price()
            }
        })
    }
}