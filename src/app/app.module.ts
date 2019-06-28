import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { ProjectService } from './core/services/project.service';
import { ProjectFormComponent } from './shared/project-form/project-form.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [BootstrapComponent, HomeComponent],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModulesPro.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ProjectService],
  bootstrap: [BootstrapComponent],
  entryComponents: [ProjectFormComponent]
})
export class AppModule {}
