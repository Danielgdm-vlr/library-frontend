import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { BookService } from "../service/book-service";
import { HomeComponent } from "./home/home.component";
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddBookComponent } from './add-book/add-book.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { ContactComponent } from './contact/contact.component';
import { MatSelectModule } from "@angular/material/select";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        HomeComponent,
        BookComponent,
        PageNotFoundComponent,
        AddBookComponent,
        AdminComponent,
        AccountComponent,
        ContactComponent,
    ],

    imports: [
        HttpClientModule,
        MatTableModule,
        MatFormFieldModule,
        MatSelectModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule
    ],

    providers: [
        BookService
    ],
})

export class ComponentsModule{}