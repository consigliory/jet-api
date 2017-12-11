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
                product: _.times(5,function(n){
                    return {
                        name: faker.lorem.word(),
                        description: faker.lorem.sentence()
                    }
                }),
                price: faker.commerce.price(),
                image: faker.image.business()
            }
        })
    }
}