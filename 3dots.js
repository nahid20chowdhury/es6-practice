const ages = [12, 23, 14, 35]
const ages2 = [16, 25, 65, 75]
const ages3 = [90, 85, 95, 55]
const allAges = ages.concat(ages2).concat([6]).concat(ages3)
const allAges2 = [...ages, ...ages2, 8, 9, 10, ...ages3]
    // console.log(allAges2)
const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib)

const takaPoisha = [3443, 4343, 54533, 343334]
const maximum = Math.max(...takaPoisha);

console.log(maximum)