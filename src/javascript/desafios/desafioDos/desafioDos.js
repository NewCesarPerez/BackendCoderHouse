
let id=0;
let arrayProductos=[];
const fs=require('fs')
const archivo='productos.txt'

class Contenedor{
    constructor(fileName){
        this.fileName=fileName;
        this.productToPush=''
        
    }
    async createFile(content){
        try{
            await fs.promises.writeFile(this.fileName,content,'utf-8')
        }catch(error){
            console.log(`Error creando el archivo: ${error}`)
        }
    }

    
    async save(producto, precio, url){
            id++
            this.productToPush={
            productID:id,
            product:producto,
            price:precio,
            thumbNail:url

        }
        try{
            arrayProductos.push(this.productToPush)
            await this.createFile(JSON.stringify(arrayProductos))
            return this.productToPush.productID
        }catch(error){
            console.log(`Saving error: ${error}`)
        }
        
    }
    async deleteAll(){
        
    try{
        await this.createFile('')
    }catch(error){
        console.log(`Deleting error: ${error}`)
    }
    
}
    async getById(number){
        try{
            const productsFromFile=await fs.promises.readFile(this.fileName,'utf-8')
            arrayProductos=JSON.parse(productsFromFile)
            const productById=arrayProductos.filter(producto=>producto.productID===number)
            if(productById===undefined)return null
            else return productById[0]
        }catch(error){console.log(error)}
    }
    
    async getAll(){
        try{
            let productsFromFile=await fs.promises.readFile(this.fileName,'utf-8')
            const productsFromFileParse=JSON.parse(productsFromFile)
            return productsFromFileParse
        }catch(error){
            console.log(error)}
    }
    async deleteById(number){
        try{
        const productsFromFile=await fs.promises.readFile(this.fileName,'utf-8')
        arrayProductos=JSON.parse(productsFromFile)
        arrayProductos=arrayProductos.filter(producto=>producto.productID!==number)
        console.log(JSON.stringify(arrayProductos))
        this.createFile(JSON.stringify(arrayProductos))
            }catch(error){
                console.log(`Error desde deleteById: ${error}`)
            }
        }

        async prueba(funcion){
            let info=await funcion
            console.log(info)
            }
        async pruebaGeneral(){
            const saveOne=await Productos.save("Smart TV NanoCell LG", 159000, './imagenes/nanocell.jpg')
            const saveTwo=await Productos.save("Smart TV OLED LG", 189000, './imagenes/oled.jpg')
            const saveThree=await Productos.save("Smart TV UHD LG", 89000, './imagenes/uhd.jpg')
            const getAll= await Productos.getAll()
            const getByID= await Productos.getById(2)
            
            console.log(saveOne)
            console.log(saveTwo)
            console.log(saveThree)
            console.log(getAll)
            await Productos.deleteById(1)
            console.log(getByID)
            //await Productos.deleteAll()

            }
}


const Productos=new Contenedor(archivo)
//Modo 1

// Productos.save("Smart TV NanoCell LG", 159000, './imagenes/nanocell.jpg').then(element=>console.log(element))
// .then(()=>Productos.save("Smart TV OLED LG", 189000, './imagenes/oled.jpg').then(element=>console.log(element)))
// .then(()=>Productos.save("Smart TV UHD LG", 89000, './imagenes/uhd.jpg').then(element=>console.log(element)))
// .then(()=>Productos.getAll().then(element=>console.log(element)))
// .then(()=>Productos.deleteById(1).then(()=>Productos.getAll().then(element=>console.log(element))))
// .then(()=>Productos.getById(2).then(element=>console.log(element)))
//.then(()=>Productos.deleteAll())

//Modo 2
// Productos.prueba(Productos.save("Smart TV NanoCell LG", 159000, './imagenes/nanocell.jpg'))
// .then(()=>Productos.prueba(Productos.save("Smart TV OLED LG", 189000, './imagenes/oled.jpg')))
// .then(()=>Productos.prueba(Productos.save("Smart TV UHD LG", 89000, './imagenes/uhd.jpg')))
// .then(()=>Productos.prueba(Productos.getAll()))
// .then(()=>Productos.prueba(Productos.deleteById(1)))
// .then(()=>Productos.prueba(Productos.getAll()))
// .then(()=>Productos.prueba(Productos.getById(2)))
//.then(()=>Productos.prueba(Productos.deleteAll()))

//Modo 3
Productos.pruebaGeneral()

