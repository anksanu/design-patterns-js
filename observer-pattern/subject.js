/**
 * Created by ankit.agrawal on 13/09/16.
 */

class Subject {

    constructor () {
        this.observers = [];
    }

    register (observer) {
        this.observers.push(observer);
    }

    remove (observer) {
        let observerId = observer.getId(),
            index = -1;
        for(let obj in this.observers){
            ++index;
            if(observerId == obj.getId()){
                break;
            }
        }

        index >= 0 ?observer.splice(index, 1) : void 0;
    }

    notifyObservers (payload) {
        for(let obj in this.observers){
            obj.update(payload);
        }
    }
}