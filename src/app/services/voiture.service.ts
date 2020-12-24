import { Injectable } from '@angular/core';
import { Voiture } from '../model/voiture.model';
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateVoitureComponent } from '../update-voiture/update-voiture.component';
import { getLocaleDateFormat } from '@angular/common';
const httpOptions = { headers: new HttpHeaders( {'Content-Type': 'application/json'} ) };
@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  apiURL: string = 'http://localhost:8080/voitures/api';
  voitures : Voiture[]; //un tableau de Produit
  voiture = new Voiture();

  constructor(private http : HttpClient) { 
    /*this.voitures = [
      { idVoiture : 1,  numSerie : "PC Asus", prix : 3000.600, dateFabrication : new Date("01/14/2011")},
      { idVoiture : 2,  numSerie : "Imprimante Epson", prix : 450, dateFabrication : new Date("12/17/2010")},
      { idVoiture : 3,  numSerie:"Tablette Samsung", prix : 900.123, dateFabrication: new Date("02/20/2020")}
    ];*/
  
   }

   listeVoiture(): Observable<Voiture[]>{ return this.http.get<Voiture[]>(this.apiURL); }
   ajouterVoiture( voit: Voiture):Observable<Voiture>
   { return this.http.post<Voiture>(this.apiURL, voit, httpOptions);
   }
   supprimerVoiture(id : number) { 
     const url = `${this.apiURL}/${id}`; 
     return this.http.delete(url, httpOptions);
     }
  consulterVoiture(id:number): Observable <Voiture>
{ const url = `${this.apiURL}/${id}`; return this.http.get<Voiture>(url); }


updateVoiture(voit :Voiture) : Observable<Voiture> 
{ return this.http.put<Voiture>(this.apiURL, voit, httpOptions); }
 
    }
