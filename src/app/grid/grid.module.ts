import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { OverViewComponent } from './over-view.component';

import { SharedModule } from '../common/shared.module';
import { OrdersService } from './order.service';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';


export const gridRouteConfig: Object[] = [
    { 'path': ':theme/grid/overview', component: OverViewComponent, 'name': 'Overview', description: 'This demo for Essential JS 2 grid component is an overview of how to display and manipulate large data with configuration options.', order: '01', category: 'Data Grid' }
];

// let declarations: Type<Object>[] = [DefaultComponent, GridLinesComponent,
//     LocalDataComponent, DataBindingComponent, ShowHideComponent, MasterComponent, DetailComponent, ReorderComponent,
//     GroupComponent, StackedHeaderComponent, AutoWrapComponent, OverViewComponent, SortComponent, PageComponent, FilterComponent,
//     SelectionComponent, ScrollComponent, SearchComponent, SelectionApiComponent, DragAndDropComponent, AggregateComponent,
//     AggregateGroupComponent, RowTemplateComponent, ColumnTemplateComponent, DetailTemplateComponent, HierarchyComponent,
//     VirtualizationComponent, InfiniteScrollingComponent, NormalEditComponent, DialogEditComponent, ColumnChooserComponent, BatchEditComponent, ColumnResizingComponent,
//     ExportingComponent, AdvancedExportingComponent, PrintComponent, CheckboxSelectionComponent, ClipboardComponent, CommandColumnComponent,
//     FilteringMenuComponent, ColumnSpanningComponent, ContextMenuComponent, ColumnMenuComponent, FrozenRowsComponent,
//     ForeignKeyColumnComponent, RowHeightComponent, AsyncPipeComponent, DialogReactiveFormComponent, TemplateDrivenFormComponent,
//     ReactiveAggregateComponent, RowSpanningComponent, DragWithinSingle, HierarchyExportComponent
// ];

let declarations: Type<Object>[] = [OverViewComponent];

@NgModule({
    imports: [RouterModule.forChild(gridRouteConfig), CommonModule, HttpModule, ToolbarModule, GridAllModule, SharedModule,
        NumericTextBoxAllModule, DialogModule, DatePickerAllModule, DropDownListAllModule, ReactiveFormsModule, FormsModule],
    declarations: declarations,
    providers: [GridAllModule, OrdersService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridSampleModule { }
