//modules
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';

//directives
import { NumerosDirective } from './directives/numeros.directive';
import { AlfabeticoDirective } from './directives/alfabetico.directive';
import { DetailCustomerComponent } from './components/customer/detail-customer/detail-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NumerosDirective,
    AlfabeticoDirective,
    DetailCustomerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
