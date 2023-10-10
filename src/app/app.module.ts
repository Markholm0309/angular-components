import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/dual-listbox/list/list.component';
import { ItemComponent } from './components/dual-listbox/item/item.component';
import { ActionsComponent } from './components/dual-listbox/actions/actions.component';
import { DualListboxComponent } from './components/dual-listbox/dual-listbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    ActionsComponent,
    DualListboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
