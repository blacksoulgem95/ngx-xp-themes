import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {environment} from '../environments/environment';
import {ICON_BASE_PATH_FOR_ASSETS} from 'ngx-xp-icons';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideClientHydration(),
    {provide: ICON_BASE_PATH_FOR_ASSETS, useValue: environment.basePath}]
};
