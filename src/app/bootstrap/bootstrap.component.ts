import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProjectService } from '../core/services/project.service';
import { Project } from '../modules/editor/_models/project.model';
import { ProjectFormComponent } from '../shared/project-form/project-form.component';
import { UpdateComponent } from '../shared/update/update.component';

@Component({
    selector: 'el-bootstrap',
    templateUrl: './bootstrap.component.html',
    styleUrls: ['./bootstrap.component.css']
})
export class BootstrapComponent implements OnInit {
    public projects: Project[] = [];

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    showInstallButton = false;
    deferredPrompt;

    constructor(
        private swUpdate: SwUpdate,
        private breakpointObserver: BreakpointObserver,
        private dialog: MatDialog,
        private projectService: ProjectService,
        private router: Router
    ) {
    }

    @HostListener('window:beforeinstallprompt', ['$event'])
    onBeforeinstallprompt(ev) {
        ev.preventDefault();
        this.showInstallButton = true;
        this.deferredPrompt = ev;
    }

    installApp() {
        this.deferredPrompt.prompt();
        this.deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                this.showInstallButton = false;
            }
            this.deferredPrompt = null;
        });
    }

    ngOnInit() {
        this.router.events.subscribe(async () => {
            this.projects = await this.projectService.getAll();
        });

        if (this.swUpdate.isEnabled) {
            interval(4000).subscribe(() => this.swUpdate.checkForUpdate());
            this.swUpdate.available.subscribe(evt => {
                this.dialog
                    .open(UpdateComponent)
                    .afterClosed()
                    .subscribe(isReady => {
                        if (isReady === true) {
                            this.swUpdate
                                .activateUpdate()
                                .then(() => window.location.reload());
                        }
                    });
            });
        }
    }

    createProject() {
        this.dialog.open(ProjectFormComponent, {
            width: '500px',
            maxWidth: '100%'
        });
    }

}
