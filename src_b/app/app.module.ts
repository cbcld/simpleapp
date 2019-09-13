import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './home/home.component';
import { HttpAuthInterceptor } from './providers/interceptors/httpAuth.interceptor';
import { HttpLoaderInterceptor } from './providers/interceptors/httpLoader.interceptor';
import { LayoutModule } from '@angular/cdk/layout';
import { LoaderComponent } from './providers/shared-components/loader/loader.component';
import { LoginComponent } from './login/login.component';
import { MetadataService } from './providers/services/metadata.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationComponent } from './providers/shared-components/notification/notification.component';
import { NotificationService } from './providers/services/notification.service';
import { SearchDetailService } from './providers/services/search-detail.service';
import { TextFieldModule } from '@angular/cdk/text-field';
import { loaderService } from './providers/services/loader.service';
import { restApiService } from './providers/services/restApi.service';
import { SearchDasboardComponent } from './search-dasboard/search-dasboard.component';
import { AccessFormComponent } from './access-form/access-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { DataProductComponent } from './data-product/data-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NotificationComponent,
    LoaderComponent,
    SearchDasboardComponent,
    AccessFormComponent,
    DataProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    TextFieldModule,
    MatTabsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatSnackBarModule,
    MatStepperModule,
    MatChipsModule,
    MatPaginatorModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    DragDropModule,
    MatTableModule,
    MatTooltipModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatGridListModule,
    MatSortModule,
    NgbModule,
    MatRadioModule,
    SharedModule
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor
    },
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor
    },
    restApiService,
    MetadataService,
    SearchDetailService,
    NotificationService,
    loaderService
  ],
  entryComponents: [
    NotificationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
