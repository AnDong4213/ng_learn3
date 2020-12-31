import { InjectionToken } from '@angular/core';

import { BASE_CONFIG } from '../constant';

export const token = new InjectionToken<string>(BASE_CONFIG);

export * from './services.module';
