class ProductManager {
    constructor() {
      this.products = [];
      this.idCounter = 0;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("All fields are required");
        return;
      }

      for (let i = 0; i < this.products.length; i++) {  
        if (this.products[i].code === code) {
          console.log("Code must be unique");
          return;
        }
      }

      this.products.push({ 
        id: ++this.idCounter, 
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      });
    }

    getProducts() {
      return this.products; 
    }

    getProductById(id) {
      for (let i = 0; i < this.products.length; i++) { 
        if (this.products[i].id === id) { 
          return this.products[i]; 
        }
      }
      console.log("Not found"); 
    }
}

const productManager = new ProductManager();
productManager.addProduct("tanque", "tanque para agua de 500 L", 15000, "tanque.jpg", "tanq500l", 11); 
productManager.addProduct("vanitory", "vanitory de 50 cm", 22000, "vanit50.jpg", "van50std", 14);
productManager.addProduct("bomba de agua", "bomba de agua de 1/2 HP", 12000, "qb60.jpg", "van50std", 55);
console.log(productManager.getProducts());
console.log(productManager.getProductById(1))