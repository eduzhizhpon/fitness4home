import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  routesPath: any = [
    {
      title: 'Editar mi Perfil',
      path: 'settings/edit-profile',
      icon: 'person-circle',
      color: 'primary'
    }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }


  routerTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    console.log('Se cierra la sesión');
  }
}
