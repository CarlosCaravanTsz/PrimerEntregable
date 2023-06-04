// Carlos Eduardo Caravantes Reynoso

class ProductManager {

    #products;
    constructor() {
        this.#products = [];
    };

    getProducts = () => { return this.#products; };

    getNextId = () => {
        const count = this.#products.length;
        const nextId = (count > 0) ? this.#products[count - 1].id + 1 : 1;
        return nextId
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("ERROR: Faltan datos para agregar el producto");
        } else {

        if (this.#products.find(product => product.code === code)) {
            console.log("EROR: Codigo de producto ya existente") ;
        } else {
            const product = {
                id: this.getNextId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }

            this.#products.push(product);
            }
        }
    };

    getProductById = (id) => {
        return this.#products.find(product => product.id === id) ?? { Error: 'Producto no encontrado' };
    };

};


// TESTING;
let manager = new ProductManager();


// AGREGANDO UN PRODUCTO Y MOSTRARLO POR PANTALLA
console.log("----- AGREGANDO UN PRODUCTO Y MOSTRARLO POR PANTALLA -----")
manager.addProduct('Producto 1', 'Descripcion 1', 100, 'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png', '0001', 10);

console.log(manager.getProducts());

// INTENTANDO AGREGAR UN PRODUCTO CON EL MISMO CODIGO - DEBE MOSTRAR ERROR
console.log("----- INTENTANDO AGREGAR UN PRODUCTO CON EL MISMO CODIGO - DEBE MOSTRAR ERROR -----")
manager.addProduct('Producto 2', 'Descripcion 2', 100, 'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png', '0001', 10);

// AGREGANDO OTRO PRODUCTO Y MOSTRARLO POR PANTALLA
console.log("----- AGREGANDO OTRO PRODUCTO Y MOSTRARLO POR PANTALLA-----")
manager.addProduct('Producto 2', 'Descripcion2', 250, 'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png', '0012', 10);

console.log(manager.getProducts());

//PROBANDO AGREGAR UN PRODUCTO SIN STOCK
console.log("----- PROBANDO AGREGAR UN PRODUCTO SIN STOCK -----")
manager.addProduct('Producto 3', 'Descripcion3', 1050, 'https://cdn3.iconfinder.com/data/icons/education-209/64/bus-vehicle-transport-school-128.png', '0002');

console.log(manager.getProducts());


// PROBANDO BUSCAR UN PRODUCTO POR ID
console.log("----- PROBANDO BUSCAR UN PRODUCTO POR ID = 2 -----")
console.log(manager.getProductById(2));


// PROBANDO BUSCAR UN PRODUCTO POR ID QUE NO EXISTE
console.log("----- PROBANDO BUSCAR UN PRODUCTO POR ID QUE NO EXISTE -----")
console.log(manager.getProductById(5));

