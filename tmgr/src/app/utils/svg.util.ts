import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon(
    'ships',
    ds.bypassSecurityTrustResourceUrl('assets/container_ship.svg')
  );
};
