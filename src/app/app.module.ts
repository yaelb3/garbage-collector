import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtleContainerComponent } from './container-base/buttle-container/buttle-container.component';
import { PaperContainerComponent } from './container-base/paper-container/paper-container.component';
import { GlassContainerComponent } from './container-base/glass-container/glass-container.component';
import { GarbageContainerComponent } from './container-base/garbage-container/garbage-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtleContainerComponent,
    PaperContainerComponent,
    GlassContainerComponent,
    GarbageContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
