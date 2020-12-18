import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from './../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared';

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
      data: {
        title: '新增项目',
      },
      // panelClass: 'myapp-dark-theme',
    });
    // .addPanelClass('myapp-dark-theme');

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // dialogRef.removePanelClass('myapp-dark-theme');
    });
  }

  selectProject(project: Project) {}

  openInviteDialog(project: Project) {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }

  openUpdateDialog(project: Project) {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: {
        title: '编辑项目',
        project,
      },
    });
  }

  openDeleteDialog(project: Project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        dialog: {
          title: '删除项目',
          content: '确定删除该项目吗？',
          confirmAction: '确定',
        },
      },
    });
    dialogRef.afterClosed().subscribe((result) => console.log(result));
  }
}
