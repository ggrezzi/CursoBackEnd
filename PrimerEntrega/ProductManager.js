

class ProductManager {

    constructor (){
        //Constructor con lista de productos vacia
            this.products=[]
    }

    addProduct (title, description, price, thumbnail, code, stock){
        //Agregar producto - Creando el mismo con las propiedades seleccionadas
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
        //metodo que retorna la lista entera de productos
        return this.products
    }

    getProductById(id){

        //metodo que retorna el producto seleccionado  usando su ID
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
        else{return ("Not Found")}
        

    }


}


//Codigo para testeo de la clase y sus propiedades
let testProductos = new ProductManager();

testProductos.getProducts()
testProductos.addProduct("producto prueba","Esto es un prod prueba", 20, "sin imagen", "abc123", 23)
console.log(testProductos.getProducts())
console.log(testProductos.addProduct("producto prueba","Esto es un prod prueba", 20, "sin imagen", "abc123", 23))
console.log(testProductos.getProductById(1))
console.log(testProductos.getProductById(2))
