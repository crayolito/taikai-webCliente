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
  supcricion1 = new Subcripcion(
    "Free",
    "assets/gratis.svg",
    StatusSubcripcion.free,
    "Acceso básico al sistema de gestión de licencias, ideal para nuevos usuarios que desean explorar la plataforma.",
    [
      "Creación automática de una wallet básica a través de Alchemy, enlazada a su correo electrónico.",
      "Hasta 10 transacciones de licencia por mes.",
      "Soporte limitado a través de correo electrónico.",
      "Acceso básico a la gestión de licencias en la blockchain con funcionalidades limitadas."
    ]
  );

  supcricion2 = new Subcripcion(
    "Mensual 130Bs/mes",
    "assets/subcripcion.svg",
    StatusSubcripcion.premium,
    "Funciones avanzadas para usuarios que requieren un manejo más detallado y frecuente de sus licencias.",
    [
      "Todo lo del paquete Free.",
      "Hasta 100 transacciones de licencia por mes.",
      "Soporte prioritario a través de correo electrónico y chat.",
      "Acceso a herramientas de análisis y reportes detallados."
    ]
  );

  supcricion3 = new Subcripcion(
    "Anual 1650Bs/año",
    "assets/on-premises.svg",
    StatusSubcripcion.empresial,
    "Solución completa para empresas con necesidades de gestión intensiva de licencias.",
    [
      "Todo lo del paquete Mensual.",
      "Hasta 1000 transacciones de licencia por año.",
      "Soporte prioritario 24/7.",
      "Consultoría personalizada y acceso a herramientas avanzadas de administración."
    ]
  );

  supcripciones: Subcripcion[] = [
    this.supcricion1,
    this.supcricion2,
    this.supcricion3
  ];

}
