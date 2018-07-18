import { Injectable } from '@angular/core';

import { Skill } from '../models/skill';
import { Level } from '../types/level.enum';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {
    skills: Skill[] = [
        {
            id: 0,
            name: 'Leadership',
            level: Level.Advanced
        },
        {
            id: 1,
            name: 'Organizer',
            level: Level.Expert
        },
        {
            id: 2,
            name: 'Communicator',
            level: Level.Intermediate
        }
    ];

    getSkills = (): Observable<Skill[]> => {
        return of(this.skills);
    };
}