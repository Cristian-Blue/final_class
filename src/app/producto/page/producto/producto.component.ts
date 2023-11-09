
import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private service : ProductoService){}

  elementos :  any = [];

  ngOnInit() : void{
    this.service.getAll().subscribe(
      (res :any)=>{
        this.elementos = res;
        console.log(res);
      } , 
      (ERR :any)=> {
        console.log("error");
      }
    );
    
  }
}
