export class SearchUserDto {
  constructor(login: string) {
    this.login = login;
  }
  readonly login: string;
}
