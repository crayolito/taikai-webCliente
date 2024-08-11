import { Component } from '@angular/core';

export class DataLicencia {
  constructor(
    public propietario: string,
    public carnetIdentidad: string,
    public nroLicencia: string,
    public imagen: string,
    public fechaEmision: string,
    public estado: boolean
  ) { }
}

@Component({
  selector: 'app-licencia',
  standalone: true,
  imports: [],
  templateUrl: './licencia.component.html',
  styleUrl: './licencia.component.css'
})
export default class LicenciaComponent {
  listaLicencias: DataLicencia[] = [
    new DataLicencia('Gabriela Fernández', '33445566', 'LIC006', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723271282/cvkkvhgxqjfkhzaqd60o.jpg', '2024/06/10', true),
    new DataLicencia('Miguel Ortiz', '77889900', 'LIC007', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723300654/vxdpryjennf96pqygdce.jpg', '2024/07/15', true),
    new DataLicencia('Ricardo Vargas', '11224455', 'LIC009', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723271282/cvkkvhgxqjfkhzaqd60o.jpg', '2024/09/25', false),
    new DataLicencia('Santiago Muñoz', '55664433', 'LIC011', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723300659/nb6dklpf7qlier6dv2oj.jpg', '2024/11/10', true),
    new DataLicencia('Carmen Rojas', '99882211', 'LIC012', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723300654/vxdpryjennf96pqygdce.jpg', '2024/12/15', true),
    new DataLicencia('Natalia Castro', '88776655', 'LIC014', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723271282/cvkkvhgxqjfkhzaqd60o.jpg', '2025/01/05', false),
    new DataLicencia('Jorge Ruiz', '55443322', 'LIC015', 'https://res.cloudinary.com/da9xsfose/image/upload/v1723271282/cvkkvhgxqjfkhzaqd60o.jpg', '2025/02/15', false)
  ];
}
