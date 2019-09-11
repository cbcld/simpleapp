import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, FormBuilder } from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FilterByBrandPipe } from "./pipes/filterByBrand.pipe";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		RouterModule,
	],
	declarations: [
		FilterByBrandPipe
	],
	exports: [
		FormsModule,
		FormsModule,
		RouterModule,
		FilterByBrandPipe,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule, ScrollingModule
	],
	providers: [FormBuilder]
})
export class SharedModule { }
