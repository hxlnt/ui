import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdButtonModule } from '@angular2-material/button';

@Component({
    moduleId: module.id,
    selector: 'lobby',
    templateUrl: 'lobby.component.html',
    styleUrls: ['lobby.component.css'],
})
export class LobbyComponent implements OnInit {
    constructor() {

    }

    ngOnInit() { 
    }

    start() {
        // this.router.navigate(['/session']);
    }
}