import { Component, OnInit } from '@angular/core';
import { Http, Response} from '@angular/http';
import { DataService } from '../shared/data.service';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})





export class HomeComponent implements OnInit {
    
    projectName: string;
    dataFromAPI: any = {};
    expanded = false;
    destination="";
    displayedColumns = ["CurrencyCode", "OriginLocation", "DepartureDateTime", "ReturnDateTime","LowestFare.Fare"];
    constructor(private dataService: DataService , private http:HttpClient) { }

    ngOnInit() { 
        this.projectName = this.dataService.getProjectName();
    }

    findFlights(){  
        this.expanded = true;
        const headers = new HttpHeaders({
            'authorization':'Bearer T1RLAQKQIa38PIYhNWqdIaMFR05/TeMIqhAFFlUiJxyXRvA7wWijRkYEAADAcUM2zBtDmU5nQNNTVGSOcpI7T+M0oRZ1QutzbB0WgeubmBptjeIfnKN///j6GfvHb27lLbPhGdpYa4a5jfBO3gT2P7Y2wEPbb1t2yo7jGid5Y0mG144byp0+KNprhBQD4Ags97ZwKaP5Cl0tscSFlHPl6XOH+VspGOcX8SH3RVOLnwF83PRQlTb7BjYG7/uTxlcV8JD/5hngr6OzV1MKKUqCd73Mgra2a9eSUrD+71o1ce7iCRYeQaM5yRb27sLr',
            'cache-control':'no-cache'
            
            });
          
       
       
        this.http.get(`https://api-crt.cert.havail.sabre.com/v1/shop/flights/cheapest/fares/`+this.destination, {headers}).subscribe(data => {
            this.dataFromAPI = data;
            this.expanded = false;
            
          });
    }

    onEnter() { this.findFlights() }

}