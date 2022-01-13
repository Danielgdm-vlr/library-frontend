import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { BookService } from "../service/book-service";
import { HomeComponent } from "./home/home.component";
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        HomeComponent,
        BookComponent,
        AddBookComponent,
        PageNotFoundComponent,
    ],

    imports: [
        HttpClientModule,
        MatTableModule
    ],

    providers: [
        BookService
    ],
})

export class ComponentsModule{}