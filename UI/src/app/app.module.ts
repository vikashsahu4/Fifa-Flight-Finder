import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule } from "@angular/material";
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  imports:      [ BrowserModule, MatButtonModule, BrowserAnimationsModule, FormsModule, HttpModule, HttpClientModule, AppRoutingModule, HttpClientModule, 
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
  MatIconModule ],
  declarations: [ AppComponent, AppRoutingModule.components ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }