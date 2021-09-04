const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts:[],
    },
    get appetizers() {
        return this._curses.appetizers;
    },
        get mains() {
        return this._curses.mains;
    },
        get desserts() {
        return this._curses.desserts;
    },
    set appetizers(appetizerIn) {
        this._courses.appetizers = appetizerIn;
    },
    set mains(mainIn) {
        this._courses.appetizers = mainIn;
    },
    set desserts(dessertsIn) {
        this._courses.appetizers = dessertsIn;
    },
    get courses () {
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts,
      };
    },
    addDish(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        this._courses[courseName].push(dish);
    },
    getRandomDish(courseName) {
        const dishes = this._courses[courseName];
        const i = Math.floor(Math.random() * dishes.length);
        return dishes[i];
    },
    generateMeal() {
        const appetizer = this.getRandomDish("appetizers");
        const main = this.getRandomDish("mains");
        const dessert = this.getRandomDish("desserts");
        const price = appetizer.price + main.price + dessert.price;
        return `The selected meal for you includes ${appetizer.name} as appetizer, ${main.name} as main dish, and ${dessert.name} as dessert, for a total of $${price}`
    },
};

menu.addDish('appetizers', 'Antipasta', 15);
menu.addDish('appetizers', 'Crab cakes', 20);
menu.addDish('appetizers', 'Chiken wing', 20);

menu.addDish('mains', 'Angus Hamburguer', 35);
menu.addDish('mains', 'New York Stake', 45);
menu.addDish('mains', 'Lasagna', 50);

menu.addDish('desserts', 'Vanilla Cake', 10);
menu.addDish('desserts', 'Ice cream', 7);
menu.addDish('desserts', 'Custard', 12);

console.log(menu.generateMeal());
