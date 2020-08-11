import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Syncfusion
import { GridSampleModule } from '../grid/grid.module';


const appRoutes: any = [
    // Grids
    { path: 'grid', loadChildren: GridSampleModule },
    { path: '', redirectTo: 'material/grid/overview', pathMatch: 'full' },
    { path: '**', redirectTo: 'material/grid/overview' }
];

@NgModule({
    imports: [
        // Grids
        GridSampleModule,
        // Data visualization
        // Editors
        
        RouterModule.forRoot(appRoutes)
    ],

    declarations: [
    ],

    exports: [
        RouterModule,
    ]
})
export class SBRoutingModule { }
