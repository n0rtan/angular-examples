import { Component } from '@angular/core';
import {ServersService} from './service/servers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  servers = [
    {
      type: 'server',
      name: 'TestServer1',
      content: 'Description'
    }
  ];

  constructor( ) {

  }

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst() {
    this.servers[0].name = 'changed!';
  }

  onDestroyFirst() {
    this.servers.splice(0, 1);
  }

}
