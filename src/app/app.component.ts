import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolutionService } from './solution.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
<<<<<<< HEAD
export class AppComponent implements OnInit{
  
  constructor(private service:SolutionService,private fb: FormBuilder){}
  
  details:any[];
  selectedList:any[];
    ngOnInit()
    {
      this.service.GetData().subscribe(success=>{
          this.details=success;
          console.log(this.details)
      })
    }
    selected(obj)
    {
      this.selectedList.push(obj)
    }
    
    
=======
export class AppComponent {
  title = 'Exam';
>>>>>>> 8028b3b426a1ffe3fceaaa82594e6f7d88dc23f7
}
