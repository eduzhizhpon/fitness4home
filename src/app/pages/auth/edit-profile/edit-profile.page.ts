import { Component, OnInit } from '@angular/core';
import { User } from '@auth-app/domain/user';
import { AuthenticationService } from '@auth-app/services/authentication.service';
import { ToastController } from '@ionic/angular';
import { UserFirebaseService } from '@social/services/user-firebase.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  currentUser: User = new User();
  imgData: any;
  profilePhotoURL: string;

  constructor(private authService: AuthenticationService,
    private ufs: UserFirebaseService,
    private toastController: ToastController) { }

  ngOnInit() {
    this.authService.getCurrentUser().then( (user) => {
      this.currentUser = user;
    }).catch( (reason) => {
      console.log(reason);
    });
  }

  imageSelectedEvt(data: any) {
    this.imgData = data;
  }

  uploadFinishedEvt(data: any) {
    this.profilePhotoURL = data.url;
    this.currentUser.profilePhoto = this.profilePhotoURL;
  }

  updateProfile(){
    this.ufs.saveUser(this.currentUser).then( (data) => {
      console.log('se guardo');
      const msg = 'Se ha actualizado el perfil correctamente';
      const colorCode = 'success';
      this.showToast(msg, colorCode);
    }).catch( (reason) => {
      console.log(reason);
      const msg = 'Ha ocurrido un error al actualizar el perfil';
      const colorCode = 'danger';
      this.showToast(msg, colorCode, 3500);
    });
  }

  showToast(msg: string, colorCode: string, durationMsg: number = 2000) {
    this.toastController.create({
      message: msg,
      duration: durationMsg,
      color: colorCode
    }).then(toast => toast.present());
  }

}
