import { Injectable, NgModule } from '@angular/core';
import {
  BrowserModule,
  HammerGestureConfig,
  HammerModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HammerModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    },
  ],
})
export class AppModule {}
