

class ProductManager {

    constructor (){
            this.products=[]
    }

    addProduct (title, description, price, thumbnail, code, stock){
        
        let newProduct={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id:0
        }

        let isPresent=false;
        this.products.forEach(element => {
            if (element.code==code){isPresent=true}

        });

        if (!isPresent){
            if (this.products.length===0){
                newProduct.id=1
            }else{
                newProduct.id = this.products[this.products.length -1].id + 1
            }
    
            this.products.push(newProduct);
        }
        else{
            return "El codgio ya existe. Debe ingresar otro codigo"
        }

    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        let isPresent=false;
        let location=-1;
        let i=-1;
        this.products.forEach(element => { 
            i++;
            if (element.id == id) 
            {
                isPresent=true;
                location=i;
            }
            
        });
        if (isPresent) {return this.products[location]}
        else{return ("No se encontro el producto referente al id "+id)}
        

    }


}

let testProductos = new ProductManager();


testProductos.getProducts()
testProductos.addProduct("producto prueba","Esto es un prod prueba", 20, "sin imagen", "abc123", 23)

console.log(testProductos.getProducts())
console.log(testProductos.addProduct("producto prueba","Esto es un prod prueba", 20, "sin imagen", "abc123", 23))
console.log(testProductos.getProductById(1))
console.log(testProductos.getProductById(2))
