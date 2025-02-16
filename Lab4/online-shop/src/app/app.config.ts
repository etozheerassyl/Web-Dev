import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { ProductsComponent } from './products/products.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};