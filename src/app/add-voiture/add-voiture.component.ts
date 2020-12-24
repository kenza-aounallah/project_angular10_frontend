import { Component, OnInit } from '@angular/core';
import { Voiture} from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {
newVoiture=new Voiture();
msg:string;
  constructor(private voitureService:VoitureService, private router:Router) { }

  ngOnInit(): void {
  }
  addVoiture(){ 
    this.voitureService.ajouterVoiture(this.newVoiture) .subscribe(voit=> { console.log(voit); });
    this.router.navigate(['voitures']); }

}
