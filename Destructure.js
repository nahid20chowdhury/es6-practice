const person = { name: 'Jack William', age: 18, job: 'facebooker', gfName: 'Emma Watson', address: 'Kochu khet', phone: '017324234', friends: ['Tom Holand', 'Tom Cruise', 'Tom Yarn'] }

const { phone, gfName } = person;

const complexObject = {
    name: 'Choto tiger',
    parent: {
        father: 'Boro tiger',
        mother: 'Boro tigress'
    }
}
const { father } = complexObject.parent

// const { phone, gfName } = { name: 'Jack William', age: 18, job: 'facebooker', gfName: 'Emma Watson', address: 'Kochu khet', phone: '017324234', friends: ['Tom Holand', 'Tom Cruise', 'Tom Yarn'] }

// const gfName = person.gfName
// const phone = person.phone

// console.log(gfName, phone)
// console.log(gfName, phone)

const friends = ['Sakib Khan', 'salman khan', 'aamir khan', 'arman khan']
const [chotoFriend, ...olderF] = friends
console.log(olderF)