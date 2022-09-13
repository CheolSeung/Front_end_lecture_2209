// Product 클래스를 정의할 것(속성: 이름, 가격, 메소드: toString())
// 5가지의 상품을 만들 것(instance)
// Cart 클래스를 정의할 것(속성: 상품, 수량, 메소드: add(), sum())
// Cart의 총 가격을 구하세요

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `제품명 : ${this.name}, 가격 : ${this.price}`;
    }
}
const one = new Product('책', 5000);
const two = new Product('모니터', 50000);
const three = new Product('키보드', 10000);
const four = new Product('과자', 500);
const five = new Product('명찰', 1000);
// console.log(one.toString(), '\n',
//             two.toString(), '\n', 
//             three.toString(), '\n', 
//             four.toString(), '\n', 
//             five.toString())

class Cart {
    constructor() {
        this.cart = [];
    }
    add(product, quantity) {
        if (quantity <= 0)
            return;
        this.cart.push({product,quantity});
    }
    sum() {
        let totalPrice = 0;
        for (let item of this.cart) {
            totalPrice += item.quantity * item.product.price;
        }
        return totalPrice;
    }
    toString() {
        let result = '';
        for (let item of this.cart) {
            result += item.product.toString() + `, 수량: ${item.quantity}\n`;
        }
        result += `합계: ${this.sum()}`;
        return result;
    }
}
let cart = new Cart();
cart.add(one, 4);
cart.add(two, 10);
cart.add(three, 2);
console.log(cart.toString());

