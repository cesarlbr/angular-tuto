import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { LesAmisComponent } from './les-amis/les-amis.component';
import { UnAmiComponent } from './un-ami/un-ami.component';
import { DataComponent } from './data/data.component';
import { StyleComponent } from './style/style.component';


@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    LesAmisComponent,
    UnAmiComponent,
    DataComponent,
    StyleComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
