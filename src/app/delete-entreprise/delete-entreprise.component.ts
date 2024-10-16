import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../models/entreprise';
import { EntrepriseService } from '../services/entreprise.service';
import { FormsModule, NgModel} from '@angular/forms';


@Component({
  selector: 'app-delete-entreprise',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-entreprise.component.html',
  styleUrl: './delete-entreprise.component.css'
})
export class DeleteEntrepriseComponent {
  idEntreprise:number=0;
  entreprise:Entreprise=new Entreprise();
  constructor(private entrepriseService:EntrepriseService, private route:ActivatedRoute,private router:Router){}
  ngOnInit():void{
    this.idEntreprise=this.route.snapshot.params['idEntreprise'];
    this.entrepriseService.getEntrepriseById(this.idEntreprise).subscribe(data=>{
      this.entreprise=data;
    })
  }

  onSubmit(){
    this.entrepriseService.deleteEntrepriseById(this.idEntreprise).subscribe(data=>{ 
      this.goToEntrepriseList();
    })
  }

  goToEntrepriseList(){
    this.router.navigate(['/entreprises'])
  }
  

}
