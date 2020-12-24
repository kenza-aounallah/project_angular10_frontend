import { Component, OnInit } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { ActivatedRoute,Router } from '@angular/router';
import { VoitureService } from '../services/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.css']
})
export class VoituresComponent implements OnInit {
  voitures: Voiture[]; 
  p: number = 1;
    constructor(private voitureService: VoitureService ,  private router :Router)
     { //this.voitures = voitureService.listeVoitures();
     }

  ngOnInit(): void {
    this.voitureService.listeVoiture().subscribe(voits => { console.log(voits); 
    this.voitures = voits;});
  }
  supprimerVoiture(v: Voiture) { let conf = confirm("Etes-vous sûr ?"); 
  if (conf) this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() => 
  { console.log("voiture supprimé"); 
  this.SuprimerVoitureDuTableau(v);
}); 
  }

  SuprimerVoitureDuTableau(voit : Voiture) 
  { this.voitures.forEach((cur, index) => 
    { if(voit.idVoiture=== cur.idVoiture) { this.voitures.splice(index, 1); } }); }
    
}