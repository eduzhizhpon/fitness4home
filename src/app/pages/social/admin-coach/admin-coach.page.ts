import { Component, OnInit } from '@angular/core';
import { User } from '@auth-app/domain/user';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { UserFirebaseService } from '@social/services/user-firebase.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-coach',
  templateUrl: './admin-coach.page.html',
  styleUrls: ['./admin-coach.page.scss'],
})
export class AdminCoachPage implements OnInit {
  
  coachTmpList: Observable<User[]>;
  loading: boolean;
  isEmpty: boolean;

  constructor(private userFirebaseService: UserFirebaseService,
    private callNumber: CallNumber,
    private toastController: ToastController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.loadCoachTempList();
  }

  loadCoachTempList() {
    this.loading = true;
    this.coachTmpList = this.userFirebaseService.getUsers('coach-tmp');
    this.coachTmpList.subscribe((data: User[]) => {
      if (data.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
      this.loading = false;
    });
  }

  makeCall(numberPhone: string){
    this.callNumber.callNumber(numberPhone, true)
      .then(res => console.log('Correcto', res))
      .catch(res => this.showToast("No se pudo realizar la llamada."));
  }

  showToast(msg: string) {
    this.toastController.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

  async showOptions(user: User) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione una opción',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Hacer una llamada',
        role: 'call',
        icon: 'call',
        handler: () => {
          this.makeCall(user.phoneNumber);
        }
      }, {
        text: 'Aceptar Registro',
        role: 'accept',
        icon: 'arrow-forward',
        handler: () => {
          user.userType = 'coach';
          this.updateCoach(user);
        }
      }, {
        text: 'Denegar Registro',
        role: 'ban',
        icon: 'ban',
        handler: () => {
          console.log('Pendiente');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('Rol de ejecución: ', role);
  }

  updateCoach(user: User) {
    this.userFirebaseService.saveUser(user).then((value: void) => {
      this.showToast("Entrenador Actualizado con éxito");
    });
  }

  doRefresh(event) {
    this.coachTmpList = null;
    this.loadCoachTempList();

    event.target.complete();
  }

}
