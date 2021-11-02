import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { LoadingController } from '@ionic/angular';

import { filter, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent implements OnInit {

  @Input() source = 'photo';
  @Output() imageSelected = new EventEmitter<any>();
  @Output() uploadFinished = new EventEmitter<any>();

  imageData: string;

  constructor(private camera: Camera,
      private storage: AngularFireStorage,
      private loadingCtrl: LoadingController) { }

  ngOnInit() {}

  selectImage(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then( (imageData) => {
     const base64Image = 'data:image/jpeg;base64,' + imageData;
     this.imageData = base64Image;
     this.startUpload(imageData);
     this.imageSelected.emit(base64Image);
    }, (err) => {
      console.log(err);
    });
  }

  async startUpload(file: string){
    const byteCharacters = atob(file);
    const path = `profile-photos/${new Date().getTime()}.jpg`;
    const image = 'data:image/jpg;base64,'+file;

    const data = {
      ref: path,
      type: 'image',
      url: null,
      name: 'image',
      size: this.fileSize(Number(byteCharacters.length))
    };

    try{
      const ref = this.storage.ref(path);
      const task = ref.putString(image, 'data_url');
      const loading = await this.loadingCtrl.create({
        message: 'Espere, subiendo fotografía...'
      });

      await loading.present();

      //Listener de progreso de carga
      task.percentageChanges().pipe(
        filter(val => val === 100),
        tap(complete => {
          setTimeout(() => {
            loading.dismiss();
          }, 3500);
        })
      ).subscribe();

      task.snapshotChanges().pipe(
        finalize(() => {
            const downloadURL = ref.getDownloadURL();
            downloadURL.subscribe(url => {
              data.url= url;
              console.log('Descarga terminada' + url);
              this.uploadFinished.emit(data);
            });
        })
      ).subscribe();

    } catch(error) {
      console.error(JSON.stringify(error));
      console.error('error');
    }
  }

  /**
   * Redondea un número de bytes a un tamaño legible
   *
   * @param sizeInBytes Número de bytes
   */
  fileSize(sizeInBytes: number) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);

    const size = sizeInBytes / Math.pow(1024, power); // size in new units
    const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
    const unit = units[power];

    return size ? `${formattedSize} ${unit}` : '0';
  }

}
