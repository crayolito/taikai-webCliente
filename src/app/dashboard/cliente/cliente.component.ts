import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

export interface ICentroComercial {
  id: string;
  imagen: string;
  nombreComercial: string;
  nombreDueño: string;
  horarioAtencion: string;
  numeroAtencion: number;
  coordenadaLongitud: string;
  coordenadaLatitud: string;
  ubicacionDescriptiva: string;
  urlGoogleMaps: string;
  urlFormQuejas: string;
  urlWeb: string;
  codigoComerciante: string;
  codigoSupervidor: string;
}

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export default class ClienteComponent {
  // READ : ESTADO DE IMAGEN Y URL DE IMAGEN
  public imageEmpresa = signal<string>('assets/subirImagen.png');
  public estadoImagen = signal<boolean>(false);
  // READ : VECTOR DE TIPOS DE HABITACIONES
  public tiposHabitacion: string[] = [];
  // READ : ESTADO BUTTON SUBMIT
  public textButtonForm = signal<string>('Editar');
  public router = inject(Router);

}
