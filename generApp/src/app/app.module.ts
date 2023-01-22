import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {LayoutModule} from '@angular/cdk/layout';



@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,MatToolbarModule,
    AppRoutingModule,
   MatCardModule,MatButtonModule,MatToolbarModule ,MatIconModule,MatFormFieldModule, MatInputModule,MatListModule,
    AppRoutingModule,MatSelectModule,HttpClientModule,MatButtonToggleModule,MatDialogModule, MatTooltipModule ,MatSnackBarModule,
    BrowserAnimationsModule,FormsModule,ReactiveFormsModule,MatTableModule,MatRadioModule,DragDropModule,MatSidenavModule,
    MatGridListModule,LayoutModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
