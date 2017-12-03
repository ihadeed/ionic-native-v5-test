import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private platform: Platform, private geolocation: Geolocation, private camera: Camera) {

  }

  async takePicture() {
    await this.platform.ready();
    const res = await this.camera.getPicture();
    console.log(res);
  }

  async getLocation() {
    await this.platform.ready();
    const location: Geoposition = await this.geolocation.getCurrentPosition({ enableHighAccuracy: true });
    console.log(location);
  }

}
