import { Component } from '@angular/core';

export class Inspeccion {
  constructor(
    public id: string,
    public tipoLicencia: string,
    public fechaInspeccion: string,
    public estado: string,
    public comentario: string,
    public inspector: string,
    public estadoInspeccion: boolean // Renombrar esta propiedad
  ) { }
}

@Component({
  selector: 'app-inspeccion',
  standalone: true,
  imports: [],
  templateUrl: './inspeccion.component.html',
  styleUrl: './inspeccion.component.css'
})
export default class InspeccionComponent {
  public inspeccionesList: Inspeccion[] = [
    new Inspeccion('002', 'Sanitaria', '2024/07/15', 'Advertencia', 'Faltan documentos, inspección reprogramada.', 'María Gómez', false),
    new Inspeccion('003', 'Construcción', '2024/06/25', 'Rechazado', 'No cumple con las normativas de seguridad.', 'Carlos López', false),
    new Inspeccion('005', 'Comercial', '2024/04/18', 'Aprobado', 'Licencia aprobada sin observaciones.', 'Luis Rodríguez', true),
    new Inspeccion('006', 'Transporte', '2024/03/22', 'Rechazado', 'Vehículos no cumplen con la normativa.', 'José Martínez', false),
    new Inspeccion('007', 'Sanitaria', '2024/02/14', 'Aprobado', 'Cumple con todas las regulaciones.', 'Laura Sánchez', true),
    new Inspeccion('012', 'Sanitaria', '2023/10/15', 'Rechazado', 'No cumple con las normas de higiene.', 'Verónica Ruiz', true),
    new Inspeccion('013', 'Construcción', '2023/09/28', 'Advertencia', 'Inspección programada para el próximo mes.', 'Andrés Vega', true),
    new Inspeccion('015', 'Transporte', '2023/07/12', 'Rechazado', 'Vehículos en mal estado, revisión fallida.', 'Diego Ramírez', true),
    new Inspeccion('018', 'Construcción', '2023/04/14', 'Aprobado', 'Proyecto aprobado con modificaciones.', 'Elena Vargas', true),
  ];
}
