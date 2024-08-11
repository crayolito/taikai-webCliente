import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


export class Subcripcion {
  titulo: string;
  icono: string;
  estado: StatusSubcripcion;
  descripcion: string;
  caracteristicas: string[];

  constructor(titulo: string, icono: string, estado: StatusSubcripcion, descripcion: string, caracteristicas: string[]) {
    this.titulo = titulo;
    this.icono = icono;
    this.estado = estado;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
  }
}
export enum StatusSubcripcion { free, premium, empresial, none }

@Component({
  selector: 'app-package',
  standalone: true,
  imports: [],
  templateUrl: './package.component.html',
  styleUrl: './package.component.css'
})
export default class PackageComponent {
  public router = inject(Router);
  supcricion1: Subcripcion = new Subcripcion(
    "Free",
    "assets/gratis.svg",
    StatusSubcripcion.free,
    "Accede a funciones básicas para registrar y administrar tu centro comercial sin costo pero con un limite de solo 20 comerciantes.",
    [
      "Registro de centro comercial y comerciantes.",
      "Creación de mapa con puntos de interés de forma manual.",
      "Delimitación geográfica del centro.",
      "Soporte por correo electrónico."
    ]
  );

  supcricion2: Subcripcion = new Subcripcion(
    "Premium 349Bs/mes",
    "assets/subcripcion.svg",
    StatusSubcripcion.premium,
    "Funciones avanzadas para una mejor gestión productos y marketing basico de tu centro comercial y un registro limitado de 70 comerciantes.",
    [
      "Todo lo del paquete Free.",
      "Representación detallada de pasillos y pisos.",
      "Inclusión de redes sociales y opciones de envío.",
      "Coordinación avanzada mediante Autocad y ArcGis."
    ]
  );

  supcricion3: Subcripcion = new Subcripcion(
    "Pro 3141Bs/Anual",
    "assets/on-premises.svg",
    StatusSubcripcion.empresial,
    "Solución completa con soporte prioritario y funciones exclusivas para grandes centros comerciales.",
    [
      "Todo lo del paquete Premium.",
      "Registro ilimitado de casetas.",
      "Soporte prioritario 24/7.",
      "Consultoría personalizada y herramientas avanzadas."
    ]
  );

  supcripciones: Subcripcion[] = [
    this.supcricion1,
    this.supcricion2,
    this.supcricion3
  ];

}
