export class ServersService {
  private servers = [];

  getServers() {
    return this.servers;
  }

  addServer(server: any) {
    this.servers.push(server);
  }
}
