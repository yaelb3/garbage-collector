import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerBaseComponent } from './container-base/container-base.component';
import { ButtleContainerComponent } from './container-base/buttle-container/buttle-container.component';
import { PaperContainerComponent } from './container-base/paper-container/paper-container.component';
import { GlassContainerComponent } from './container-base/glass-container/glass-container.component';
import { GarbageComponent } from './container-base/garbage/garbage.component';
import { GarbageContainerComponent } from './container-base/garbage-container/garbage-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerBaseComponent,
    ButtleContainerComponent,
    PaperContainerComponent,
    GlassContainerComponent,
    GarbageComponent,
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
