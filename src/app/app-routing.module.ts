import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MiddleUpComponent } from './middle-up/middle-up.component';
import { MiddleDownComponent } from './middle-down/middle-down.component';


const routes: Routes = [
        {path: 'green', component: MiddleUpComponent},
        {path: 'purple', component: MiddleDownComponent}
    ];

    @NgModule ({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ]
    })

    export class AppRoutingModule{}
    export const routingComponents = [MiddleUpComponent, MiddleDownComponent]

