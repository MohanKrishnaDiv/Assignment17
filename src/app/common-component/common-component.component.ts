import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersdataService } from '../usersdata.service';
@Component({
  selector: 'app-common-component',
  templateUrl: './common-component.component.html',
  styleUrls: ['./common-component.component.scss']
})
export class CommonComponentComponent{
  items: any[] = [
    // validation for Common Component
    { id: 1, name: 'number', regEx: '^[0-9]+$'},
    { id: 2, name: 'string' , regEx:'^[A-Za-z]+$'},
    { id: 3, name: 'boolean', regEx:'^(?:tru|fals)e$' },
    { id: 4, name: 'hexaDecimal', regEx:'^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{6})$' },
    { id: 5, name: 'binary', regEx:'^[0*1*]*[1*0*]*' },
  ];
  selected: unknown = 1;
  labelDataName:string="";
  labelData:string="";
  
  dropDownComponent = new FormGroup({
    selectedType : new FormControl(this.items[0].name.value,[Validators.required]),
    inputname: new FormControl('',[Validators.required]),
    additionalDataLabel : new FormControl('',[Validators.required])
  })
  constructor(private usersdata:UsersdataService) {
  }
  getLabelName()
     {
      this.labelDataName=this.dropDownComponent.value.additionalDataLabel as string;
     }
  
  ngOnInit() {
  }
  typesArray=[]
 
  selectOption(reg:any)  {
    console.log(this.items[reg.target.value-1].regEx);
    
    //getted from binding
    console.log(this.items[reg.target.value].id)
  
    
     // Iterating through items Array 

     
    for(let i=1; i<=this.items.length;i++){
      if(this.items[reg.target.value].id == this.items[i].id){
        // console.log(this.items[reg.target.value].id )
        this.dropDownComponent.controls['inputname'].setValidators(Validators.pattern(this.items[reg.target.value-1].regEx))
        // console.log(reg.target.value-1)
      }
      
    }
  }
  @Output() childToParrent = new EventEmitter<string>()
  val:any = this.inputname?.value;
  AdditionalInputValue(event:any){

    if(this.inputname?.['status'] === 'VALID'){

      this.labelData=event.target.value;
    }
    else{this.childToParrent.emit('');}

    this.usersdata.getformGroupData({dataLabel:this.labelDataName, labelData:this.labelData})
    
  }
get selectedType(){return this.dropDownComponent.get('selectedType')}
get inputname(){return this.dropDownComponent.get('inputname')}
}

