import { HttpService } from "./services/http-service";
import { Credentials, Options, Resources, Token } from "./services/service";
import * as HttpErrors from "./services/http-errors";

export class SecurityClient {
  constructor(
    private options: Options = {
      host: "localhost",
      port: 50050,
      autoSetToken: true,
    },
  ) {
    this.httpService = new HttpService(options);
  }

  private token: Token;

  private httpService: HttpService;

  public async setToken(token: Token) {
    return this.httpService.setToken(token);
  }

  public async login(username: string, password: string): Promise<Token> {
    return this.httpService.login(username, password);
  }

  public async hasAccess(_resources: Resources, _credentials?: Credentials) {
    return Promise.resolve("OK!@");
  }
}

export { HttpErrors };
