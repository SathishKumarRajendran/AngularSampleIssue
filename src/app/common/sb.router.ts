import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Syncfusion
import { DropDownListSampleModule } from '../drop-down-list/drop-down-list.module';
import { GridSampleModule } from '../grid/grid.module';


const appRoutes: any = [
    // Grids
    { path: 'grid', loadChildren: GridSampleModule },
    { path: '', redirectTo: 'material/grid/overview', pathMatch: 'full' },
    { path: '**', redirectTo: 'material/grid/overview' },
    { path: 'drop-down-list', loadChildren: DropDownListSampleModule },
];

@NgModule({
    imports: [
        // Grids
        GridSampleModule,
        // Data visualization
        // Editors
        DropDownListSampleModule,
        
        RouterModule.forRoot(appRoutes)
    ],

    declarations: [
    ],

    exports: [
        RouterModule,
    ]
})
export class SBRoutingModule { }
