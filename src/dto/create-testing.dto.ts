import { User } from '../entities/users.entity';
import { Test } from '../entities/tests.entity';

export class CreateTestingDto {
  readonly userUserId: User;
  readonly testId: Test;
}
