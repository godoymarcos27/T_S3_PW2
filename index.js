let peliculas = [];

class pelicula{
    constructor( id, titulo, estreno, categorria, calificacion, duracion, direccion, guion){
this.id = id
this.titulo= titulo
this.estreno= estreno
this.categorria= categorria
this.calificacion= calificacion
this.duracion = duracion
this.direccion= direccion
this.guion= guion
    }
    ver (){
        console.log('reproducir $(this.titulo)-$(this.categoria) ' )
}


}

let pelicula_1 = new pelicula(1, "Terrifier", 2016, "terror, suspenso", "Unrated", "1h 25min", "Damien Leone", "Damien Leone")
let pelicula_2 = new pelicula(2, "Entergalactic", 2022, "animacion, comedia, musica", 16, "1h 33min", "Fletcher Moules", "kid cudi")
let pelicula_3 = new pelicula(3, "Smile", 2022, "terror", 16, "1h 55min", "Parker Finn", "Parker Finn")
let pelicula_4 = new pelicula(4, "It", 2017, "terro", 16, "2h 15min", "Andy Muschietti", "Chase Palmer")
let pelicula_5 = new pelicula(5, "Terrifier 2", 2022, "terror", 18, "2h 18min", "Damien Leone", "Damien Leone")

// peliculas.forEach((peli, num_peli)=> peli(num_peli +1))



peliculas.push(pelicula_1)
peliculas.push(pelicula_2)
peliculas.push(pelicula_3)
peliculas.push(pelicula_4)
peliculas.push(pelicula_5)
peliculas[0].ver()
console.log(peliculas [0]);
