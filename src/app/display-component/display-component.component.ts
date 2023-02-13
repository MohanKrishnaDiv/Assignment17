import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersdataService } from '../usersdata.service';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.scss']
})
export class DisplayComponentComponent {
data:any;
additionalDataArray:any[]=[]
AdditionalValue:string='';
//storing the values from APP, to display in data-component
  constructor(private router: Router, private route:ActivatedRoute, private usersdata:UsersdataService){
    
    this.data = this.router.getCurrentNavigation()?.extras.state?.['dataToChild'];
    this.AdditionalValue = this.router.getCurrentNavigation()?.extras.state?.['AdditionalValue'];
    this.additionalDataArray=this.usersdata.formGroupData //
  }
}

