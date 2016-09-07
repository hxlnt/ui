import { Routes, RouterModule } from '@angular/router';

import { LobbyComponent } from './lobby.component/lobby.component';
import { SessionComponent } from './session.component/session.component';

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent
  },
  {
    path: 'session',
    component: SessionComponent
  }
];

export const routing = RouterModule.forRoot(routes);
export const routedComponents = [LobbyComponent, SessionComponent];