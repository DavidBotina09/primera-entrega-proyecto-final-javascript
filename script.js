
let valorBoleta = 5000
let clientes = 0
let edad = 0
let ticket = {}
const funcion = {pelicula:"", hora:"",bebida:"no",palomitas:"no",comida:"no"}
const reservacion = []

/*funciones*/
/*esta funcion guarda la pelicula ingresada dentro del objeto al que va ligado peliculaque es la funcion*/  
const cartelera = (pelis) => {
    switch(pelis){
        case "thor":
            funcion.pelicula = "Thor"
            break
        case "telefono negro":
            funcion.pelicula = "Telefono Negro"
            break
        case "minions":
            funcion.pelicula = "Los Minions"
            break
        default:
            alert("no ingreses peliculas que no estan en cartelera")
            funcion.pelicula = 1
    }
}

/*Clases*/
class tiquetes{
    constructor(pelicula = "",hora = "",bebida = "",palomitas = "",comida = ""){
        this.pelicula = pelicula
        this.hora = hora
        this.bebida = bebida
        this.palomitas = palomitas
        this.comida = comida
    }
}


for(let i = 0;i < 3; i ++ ){
    do{
        do{
            funcion.pelicula = prompt("peliculas en cartelera 1. Thor 2. telefono negro 3. minions").toLowerCase()
            cartelera(funcion.pelicula)
            funcion.hora = prompt("horarios de peliculas, 6:30, 7:30, 9:30")
            switch(funcion.hora){
                case "6:30":
                    funcion.hora = "6:30"
                    break
                case "7:30":
                    funcion.hora = "7:30"
                    break
                case "9:30":
                    funcion.hora = "9:30"
                    break
                default:
                    alert("ingresa horarios validos")
                    funcion.hora = 1
            }
        }while((funcion.pelicula > 0 )||(funcion.hora >= 0))
    
    
        do{
            clientes = parseInt(prompt("cuantos clientes van a ver la pelicula"))
            if(isNaN(clientes)){
                alert("ingresa caracteres validos")
            }
            if(clientes > 5){
                alert("el maximo de clientes por grupo es de 5 personas")
            }

            
        }while((isNaN(clientes)) || (clientes > 5))
    
    
        do{
            for(let i = 0;i < clientes; i ++ ){
                edad = parseInt(prompt("edad de cada cliente"))
            if(isNaN(edad)){
                alert("vuelve a ingresar un caracter validos")
                break
            }
            if(edad < 17){
                alert("la edad estimada para ver las peliculas es de 17 años en adelante")
                break
            }
        }
        }while((edad < 17) || (isNaN(edad)))
        
    }while((edad < 17) || (isNaN(edad)))
    
    alert(`su funcion de ${funcion.pelicula} a las ${funcion.hora} ha sido reservada, el total a pagar es ${valorBoleta * clientes}`)
    
    let desicion = ""
        
    do{
        desicion = prompt("deseas agregar comida a tu reserva").toLowerCase()
        if(desicion == "si"){
            funcion.bebida = prompt("que bebida desea")
            funcion.comida = prompt("deseas alguna comida de sal como hamburguesa, perro caliente, empanada")
            funcion.palomitas = prompt("deseas palomitas de sal o de dulce")
        }else if(desicion != "si"){
            alert("reservacion de pelicula sin la comida")
            funcion.bebida = "no"
            funcion.comida = "no"
            funcion.palomitas = "no"
        }
    }while(desicion >= 0)
    
    alert("reservacion exitosa")
    alert("realiza tres reservaciones")

  
    ticket = new tiquetes(
        funcion.pelicula,
        funcion.hora,
        funcion.bebida,
        funcion.palomitas,
        funcion.comida,
    )

    reservacion.push(ticket)

    funcion.pelicula = "" 
    funcion.hora = ""
    funcion.bebida = "no"
    funcion.palomitas = "no"
    funcion.comida = "no"

}

console.table(reservacion)
reservacion.forEach((tiquetesArray) => {
    console.table(tiquetesArray)
})







