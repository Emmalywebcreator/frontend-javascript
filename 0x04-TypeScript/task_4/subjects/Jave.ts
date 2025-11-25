namespace Subjects {
    export interface Teacher {
        experienceTeachingJave?: number;
    }

    export class Java extends Subject {
        getRequirement(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (!this.teacher.experienceTeachingJave) {
                return 'No available teacher';
            }
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}