import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule
// ...existing code...

@NgModule({
  declarations: [
    // ...existing code...
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule
    MatToolbarModule, // Add MatToolbarModule
    MatButtonModule, // Add MatButtonModule
    MatIconModule, // Add MatIconModule
    AppRoutingModule, // Add AppRoutingModule
    // ...existing code...
  ],
  providers: [],
  // Remove bootstrap array
})
export class AppModule {}
