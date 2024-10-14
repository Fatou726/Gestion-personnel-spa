import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Entreprise } from '../models/entreprise';
@Component({
  selector: 'app-create-entreprise',
  standalone: true,
  imports: [],
  templateUrl: './create-entreprise.component.html',
  styleUrl: './create-entreprise.component.css'
})
export class CreateEntrepriseComponent {
  entreprises:Entreprise = new Entreprise();

  ngOnInit(): void{

  }
  onsubmit(){
    
  }
}
