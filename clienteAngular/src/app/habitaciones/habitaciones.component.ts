import { Component } from '@angular/core';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  //atributos

  public habitaciones:any[]=[]

  public habitacion:any={
    nombre:"Habitacion 1",
    foto:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/24/8e/6a/decameron-baru.jpg?w=700&h=-1&s=1",
    precio:2500
  }
  public habitacionDos:any={
    nombre:"Habitacion 2",
    foto:"https://www.decameron.com/images/destinos/panama/royal-panama/all-inclusive-plus/habitacion-vista-mar-plus.jpg",
    precio:1500
  }
  public habitacionTres:any={
    nombre:"Habitacion 3",
    foto:"https://www.decameron.com/images/destinos/colombia/isleno/isleno-012.jpg",
    precio:3500
  }

  public constructor(){
    this.habitaciones.push(this.habitacion)
    this.habitaciones.push(this.habitacionDos)
    this.habitaciones.push(this.habitacionTres)
    console.log(this.habitaciones)
  }



}
