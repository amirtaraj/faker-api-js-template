const {faker} = require('@faker-js/faker');

console.log(faker.name.firstName());
console.log(faker.name.lastName());
console.log(faker.internet.email());
console.log(faker.phone.phoneNumberFormat());
console.log(faker.address.streetAddress());
console.log(faker.address.city());
console.log(faker.address.state());
console.log(faker.address.zipCode());
