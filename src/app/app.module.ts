import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonService } from './services/common.service';
import { StorageService } from './services/storage.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: [CommonService,StorageService],
})
export class AppModule {}
