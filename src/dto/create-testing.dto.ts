import { User } from '../entities/users.entity';
import { Test } from '../entities/tests.entity';

export class CreateTestingDto {
  readonly id: number;
  readonly user: User;
  readonly test: Test;
  readonly marker: number;
}
