export class CreateUserDto {
  readonly name: string;
  readonly surname: string;
  readonly patronymic: string;
  readonly mail: string;
  readonly password: string;
  readonly isAdmin: boolean;
}
