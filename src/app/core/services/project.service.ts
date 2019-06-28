import { Injectable } from '@angular/core';

import { Project } from '../../modules/editor/_models/project.model';
import { IndexDBService } from './idb.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private idbService: IndexDBService) { }

  getAll() {
    return this.idbService.getAll('projects');
  }

  get(projectUID: string) {
    return this.idbService.get('projects', projectUID);
  }

  save(project: Project) {
    return this.idbService.set('projects', project, project.uid);
  }

  delete(project: Project) {
    return this.idbService.delete('projects', project, project.uid);
  }
}
