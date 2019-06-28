import { Collection } from './collection.model';

export interface Project {
    uid: string;
    collections: Collection[];
    name: string;
}
