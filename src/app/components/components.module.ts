import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { BookService } from "../service/book-service";
import { HomeComponent } from "./home/home.component";
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar"

@NgModule({
    declarations: [
        HomeComponent,
        BookComponent,
        PageNotFoundComponent,
        AddBookComponent,
    ],

    imports: [
        HttpClientModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSnackBarModule,
    ],

    providers: [
        BookService
    ],
})

export class ComponentsModule{}