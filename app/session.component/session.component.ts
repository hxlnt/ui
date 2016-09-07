import { Component, OnInit } from "@angular/core";
import { SessionTableComponent } from '../session-table.component/session-table.component';
import { VisualComponent } from '../visual.component/visual.component';
import { ApiService } from '../api.service/api.service';
import { MdButtonModule } from '@angular2-material/button';

@Component({
    moduleId: module.id,
    selector: "session",
    templateUrl: "session.component.html",
    styleUrls:["session.component.css"],
})
export class SessionComponent implements OnInit{
    index: number = 0; 
    TAB_COUNT: number = 2;

    constructor(private api:ApiService) {
    }

    ngOnInit() {
        this.api.fetch();
    }

    handleKeypress(event) { 
        switch(event.key) {
            case "Right":
                this.index = Math.min(this.index + 1, this.TAB_COUNT - 1);
                break; 
            case "Left":
                this.index = Math.max(this.index - 1, 0);
                break; 
            case "Space":
                (this.api.session.status == 'active' ? this.api.session.end() : this.api.session.start())
        }
    }
}