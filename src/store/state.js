let cart = window.localStorage.getItem('cart');
let order = window.localStorage.getItem('order');
let user = window.localStorage.getItem('user');
let school = window.localStorage.getItem('school');
let ordercart = window.localStorage.getItem('ordercart');




export default {
    cart: cart ? JSON.parse(cart) : [],
    ordercart: ordercart ? JSON.parse(ordercart) : [],
    order: order ? JSON.parse(order) : [],
    user: user ? JSON.parse(user) : [],
    school: school ? JSON.parse(school) : [],
    point: [
        {place: 'Hostel' , price: 100},
        {place: 'Class', price: 100},
        {place: 'Library', price: 100},
        {place: 'PDegree', price: 150},
        {place: 'Cafe Pickup', price: 50},
    ],

    points: [
        {place: "Silver Boys 1", price: 100},
        {place: "silver Boys 2" , price: 100},
        {place: "Silver Boys 3" , price: 100},
        {place: "Silver Girls", price: 100},
        {place: "Bronze Girls 1" , price: 100},
        {place: "Bronze Girls 2", price: 100},
        { place: "MPH" , price: 100},
        { place: "Edozen"  , price: 100},
        { place: "Downtown Class" , price: 100},
        { place: "Uptown Class" , price: 100},
        { place:" Adenuga", price: 100},
    ],
    notification: [],
}