import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from './../invite/invite.component';

import { Project, User } from '../../domain';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      name: '热云的产品',
      desc: '这是一个热云的产品',
      coverImg: 'assets/img/covers/0.jpg',
    },
    {
      name: '热云的产品',
      desc: '这是一个热云的产品',
      coverImg: 'assets/img/covers/1.jpg',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: 'this is my data sent',
      // panelClass: 'myapp-dark-theme',
    });
    // .addPanelClass('myapp-dark-theme');

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // dialogRef.removePanelClass('myapp-dark-theme');
    });
  }

  openInviteDialog(project: Project) {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }
}
