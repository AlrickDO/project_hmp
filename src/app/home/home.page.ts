import { Component } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private animationCtrl: AnimationController) {}

  ionViewDidEnter() {
    this.fadeInButton()
  }

  fadeInButton() {
    const item = document.querySelector('#mainButtons') as HTMLElement;

    const animation = this.animationCtrl
      .create()
      .addElement(item)
      .duration(600) 
      .iterations(1) 
      .keyframes([
        { offset: 0, opacity: '0' }, 
        { offset: 0.3, opacity: '0.3' },
        { offset: 0.6, opacity: '0.6' },
        { offset: 1, opacity: '1' },
      ]);
    animation.play();
  }
}
