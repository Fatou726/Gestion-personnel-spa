import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../models/entreprise';
import { EntrepriseService } from '../services/entreprise.service';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrl: './update-entreprise.component.css',
  

})
export class UpdateEntrepriseComponent {
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
    this.entrepriseService.updateEntreprise(this.idEntreprise,this.entreprise).subscribe(data=>{
      this.entreprise=data;
      this.goToEntrepriseList();
    })
  }

  goToEntrepriseList(){
    this.router.navigate(['/entreprises'])
  }
  }

