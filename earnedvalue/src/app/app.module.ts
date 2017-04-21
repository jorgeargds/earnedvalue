import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module'

import { InventoryComponent} from './inventory.component'
import { SalesComponent }    from './sales.component'


@NgModule({
  imports:
  [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  declarations:
  [
    AppComponent,
    InventoryComponent,
    SalesComponent
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
