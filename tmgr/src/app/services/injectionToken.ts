import { InjectionToken } from '@angular/core';

import { BASE_CONFIG_URL } from '../constant';

export const token = new InjectionToken<string>(BASE_CONFIG_URL);
