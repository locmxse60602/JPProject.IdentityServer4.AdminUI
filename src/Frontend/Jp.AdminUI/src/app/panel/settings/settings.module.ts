import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { ToasterModule } from 'angular2-toaster';
import { TagInputModule } from 'ngx-chips';

import { EmailSettingsComponent } from './emails/email-settings.component';
import { GlobalSettingsService } from './global-settings.service';
import { RecaptchaSettingsComponent } from './recaptcha/recaptcha.component';
import { SettingsComponent } from './settings.component';
import { StorageSettingsComponent } from './storage/storage-settings.component';


const routes: Routes = [
    { path: "", component: SettingsComponent },
];

@NgModule({
    imports: [
        SharedModule,
        ToasterModule.forRoot(),
        RouterModule.forChild(routes),
        TagInputModule
    ],
    declarations: [
        SettingsComponent,
        EmailSettingsComponent,
        StorageSettingsComponent,
        RecaptchaSettingsComponent
    ],
    providers: [
        GlobalSettingsService
    ],
    exports: [
        RouterModule
    ]
})
export class SettingsModule { }
