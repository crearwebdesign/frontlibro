import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu = [];

  cargarMenu(){
    this.menu = JSON.parse(localStorage.getItem('menu')) || []
  }



  // menu : any[] = [
  //   {
  //     titulo : 'Dashboard',
  //     icono : 'mdi mdi-gauge',
  //     submenu : [
  //       {titulo : 'Principal', url : '/'},
  //       {titulo : 'Gráficas', url : 'grafica1'},
  //       {titulo : 'ProgressBar', url : 'progress'},
  //       {titulo : 'Promesas', url : 'promesas'},
  //       {titulo : 'Rxjs', url : 'rxjs'}
  //     ]
  //   },
  //   {
  //     titulo : 'Mantenimientos',
  //     icono : 'mdi mdi-folder-lock-open',
  //     submenu : [
  //       {titulo : 'Usuarios', url : 'usuarios'},
  //       {titulo : 'Hospitales', url : 'hospitales'},
  //       {titulo : 'Médicos', url : 'medicos'}
        
        
  //     ]
  //   }
  // ];
  
}