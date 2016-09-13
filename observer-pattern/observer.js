/**
 * Created by ankit.agrawal on 13/09/16.
 */

class Observer {

    constructor(subject) {
        this.subject = subject;
        this.uid = Math.floor(Math.random(1)* 5000);
        this.subject.register(this);
    }

    get getId() {
        return this.uid;
    }

    update (payload) {
        console.log(this.uid + JSON.stringify(payload));
    }

}