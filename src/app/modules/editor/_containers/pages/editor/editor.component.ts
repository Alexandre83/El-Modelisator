import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonEditorComponent, JsonEditorOptions } from 'ang-jsoneditor';

import { ProjectService } from '../../../../../core/services/project.service';
import { FieldTypeEnum } from '../../../_models/enums/field-type.enum';
import { Project } from '../../../_models/project.model';

@Component({
    selector: 'el-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
    @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

    public editorOptions: JsonEditorOptions;
    public project: Project;

    constructor(private route: ActivatedRoute, private projectService: ProjectService) {
        this.editorOptions = new JsonEditorOptions();
        this.editorOptions.modes = ['tree', 'view'];
    }

    async ngOnInit() {
        this.route.params.subscribe(async params => {
            const projectUID = params.uid;
            if (projectUID && projectUID === 'demo') {
                this.project = {
                    uid: 'demo',
                    name: 'Demo',
                    collections: [
                        {
                            name: 'user',
                            fields: {
                                uid: FieldTypeEnum.STRING,
                                name: FieldTypeEnum.STRING,
                                email: FieldTypeEnum.STRING,
                                password: FieldTypeEnum.STRING,
                                geoloc: {
                                    lat: FieldTypeEnum.DECIMAL_128,
                                    lng: FieldTypeEnum.DECIMAL_128,
                                    address: {
                                        street: FieldTypeEnum.STRING,
                                        zip: FieldTypeEnum['32_BIT_INTEGER'],
                                    }
                                },
                                created: FieldTypeEnum.DATE,
                                updated: FieldTypeEnum.DATE
                            }
                        }
                    ]
                };
            } else {
                this.project = await this.projectService.get(projectUID);
            }
        });

    }

    public removeCollection(collectionName: string) {
        const collectionToRemove = this.project.collections.findIndex(collection => collection.name === collectionName);
        this.project.collections.splice(collectionToRemove, 1);
    }

    public save() {
        this.projectService.save(this.project);
    }
}
