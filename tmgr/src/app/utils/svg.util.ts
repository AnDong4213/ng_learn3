import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const imgDir = 'assets/img';
  const avatarDir = `${imgDir}/avatar`;
  const sidebarDir = `${imgDir}/sidebar`;
  const iconDir = `${imgDir}/icons`;
  const dayDir = `${imgDir}/days`;

  ir.addSvgIconSetInNamespace(
    'avatars',
    ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`)
  )
    .addSvgIcon(
      'unassigned',
      ds.bypassSecurityTrustResourceUrl(`${avatarDir}/unassigned.svg`)
    )
    .addSvgIcon(
      'ships',
      ds.bypassSecurityTrustResourceUrl('assets/container_ship.svg')
    )
    .addSvgIcon(
      'day',
      ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`)
    )
    .addSvgIcon(
      'month',
      ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`)
    )
    .addSvgIcon(
      'project',
      ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`)
    )
    .addSvgIcon(
      'projects',
      ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`)
    )
    .addSvgIcon(
      'week',
      ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`)
    )
    .addSvgIcon(
      'move',
      ds.bypassSecurityTrustResourceUrl(`${iconDir}/move.svg`)
    );

  const days = _.range(1, 32);
  // console.log('days', days);
  days.forEach((day) => {
    ir.addSvgIcon(
      `day${day}`,
      ds.bypassSecurityTrustResourceUrl(`${dayDir}/day${day}.svg`)
    );
  });
};
