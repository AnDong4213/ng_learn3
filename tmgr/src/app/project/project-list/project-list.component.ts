import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ChangeDetectorRef,
  HostBinding,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from './../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared';

import { Project, User } from '../../domain';
import { slideToRight, listAnimation } from '../../anims';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideToRight, listAnimation],
})
export class ProjectListComponent implements OnInit {
  @HostBinding('@routeAnim') state;

  projects = [
    {
      id: 1,
      name: '热云的产品',
      desc: '这是一个热云的产品',
      coverImg: 'assets/img/covers/0.jpg',
    },
    {
      id: 2,
      name: '热云的产品',
      desc: '这是一个热云的产品',
      coverImg: 'assets/img/covers/1.jpg',
    },
  ];

  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef) {}

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
      this.projects = [
        ...this.projects,
        {
          id: 3,
          name: '新项目',
          desc: '新项目',
          coverImg: 'assets/img/covers/3.jpg',
        },
      ];
      console.log('this.projects', this.projects);
      this.cd.markForCheck();
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
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      console.log(project);
      this.projects = this.projects.filter((p) => p.id !== 3);
    });
  }
}
