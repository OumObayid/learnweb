import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../interfaces/categorie';
import { CategoriesService } from '../../../services/categories/categories.service';
import { InputenfantComponent } from './inputenfant.component';


@Component({
  selector: 'app-input',
  imports: [InputenfantComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent implements OnInit {
  constructor(
    private categoriesService:CategoriesService
  ) {}
   categories:Categorie[]=[];
   
ngOnInit(): void {  
  this.fetchCategories();
  console.log('categories:',this.categories);
}

async fetchCategories(){
this.categoriesService
.getCategories()
.then((response)=>{
  
  if(response.data.success){
    this.categories=response.data.dataCat;
  console.log("this.categories",this.categories)}
  else console.log("response.data.message",response.data.message);  
 
})
.catch((error)=>console.log('error',error))
}
}
