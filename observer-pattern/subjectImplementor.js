/**
 * Created by ankit.agrawal on 13/09/16.
 */

import Subject from "./subject";

class SubjectImplementor extends Subject {

    constructor() {
        super();
    }

    notify ( payload) {
        this.notifyObservers(payload);
    }
}