import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

import { ProjectService } from '../../core/services/project.service';

@Component({
  selector: 'el-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  public projectForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.projectForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  async onSubmit() {
    const uid = uuid.v4();

    await this.projectService.save({
      collections: [],
      name: this.projectForm.get('name').value,
      uid,
    });

    this.router.navigate(['/editor/' + uid]);
  }

}
