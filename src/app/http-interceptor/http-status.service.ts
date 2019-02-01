
import {Injectable} from "@angular/core";

@Injectable()
export class HttpStatusService {

    private connectionCount = 0;

    constructor() {

    }

    increaseConnectionCount() {
        this.connectionCount++;
    }

    decreaseConnectionCount() {
        this.connectionCount--;
    }

    getConnectionCount(): number {
        return this.connectionCount;
    }
}
