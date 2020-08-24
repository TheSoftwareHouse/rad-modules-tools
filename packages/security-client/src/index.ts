import { HttpService } from "./services/http-service";
import { Credentials, Options, Resources, Token } from "./services/service";

export class SecurityClient {
  constructor(
    private options: Options = {
      apiUrl: "http://localhost:50050",
      autoSetToken: true,
    },
  ) {
    this.httpService = new HttpService(options);
  }

  private token: Token;

  private httpService: HttpService;

  public setToken(token: Token) {
    this.token = token;
  }

  public async login(credentials: Credentials) {
    return this.httpService.login(credentials);
  }

  public hasAccess(_resources: Resources, _credentials?: Credentials) {}
}
