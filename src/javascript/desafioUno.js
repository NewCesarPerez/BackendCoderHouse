//Desafio uno - Declarando clase usuario

class Usuario {
    constructor(nombre, apellido, libros, mascotas ){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }

    addMascotas(mascota){
        this.mascotas.push(mascota)
    }
    addBook(nombre, autor){
        let newBookToAdd={
            nombre:nombre,
            autor: autor
        }
        this.libros.push(newBookToAdd)
    }
    countMascotas(){
        if(this.mascotas.length===0)return `${this.nombre} ${this.apellido} no tiene mascotas`
        else{return `Número de mascotas de ${this.nombre} ${this.apellido}: ${this.mascotas.length}`}
    }
    getFullName(){
        return ` My full name is ${this.nombre} ${this.apellido}`
    }

    getBookNames(){
        let nombreDeLibros=[];
        for (let item of this.libros){
            nombreDeLibros.push(item.nombre)
        }
        return nombreDeLibros
    }
}

//Creando primer usuario
const usuarioUno=new Usuario("Cesar", "Perez", [{nombre:"Narciso y Golmundo", autor: "Hermann Hesse"}], ["Kero"])

//llamando funciones
console.log(usuarioUno.getFullName())
usuarioUno.addMascotas("Odin")
console.log(usuarioUno.countMascotas())
usuarioUno.addBook("Damian", "Herman Hesse")
console.log(usuarioUno.getBookNames())