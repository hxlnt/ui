import { Injectable } from '@angular/core';
import config from '../config';
import { Http } from '@angular/http';
import { Session, Rower } from '../models';
import * as socketio from 'socket.io-client';

@Injectable()
export class ApiService {
    private socket: SocketIOClient.Socket;
    session: Session = new Session();
    apiUrl: string = config.serviceUrl + '/api';

    constructor(private http: Http) {
        //connect to the socket server
        this.socket = socketio.connect(config.serviceUrl);

        //stream all messages into our Rx Subject
        this.socket.on("message", d => {
            //handle socket messages
            switch(d.message) {
                case 'session-change':
                    this.session = d.session;
                    break;
                case 'rower-change':
                    let i = this.session.rowers.findIndex(r => r.name == d.rower.name);
                    if(i > -1) this.session.rowers[i] = d.rower;
                    break;
            }
        });
    } 

    fetch() {
        this.http.get(this.apiUrl + '/session')
            .subscribe(response => this.session = response.json());
    }

    start() {
        this.http.post(this.apiUrl + '/session/start', null)
            .subscribe(() => this.fetch(), err => console.error(`Error starting session. ${err}`));
    }

    end() {
        this.http.post(this.apiUrl + '/session/end', null)
            .subscribe(() => this.fetch(), err => console.error(`Error ending session. ${err}`));
    }
}