export class Person {
    constructor() {
        this.present = true;
    }

    checkPresence() {
        if (this.present) {
            return 1;
        } else {
            return 0;
        }
    }
}