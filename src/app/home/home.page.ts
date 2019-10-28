import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor() {}

  data =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length >= 50) {
        event.target.disabled = true;
      }else{
        this.getData();
      }
    }, 500);
  }

  getData(){
    let count = this.data.length +1;
    for(let i = count;i<count+15;i++){
      this.data.push(i);
    }
  }
}
