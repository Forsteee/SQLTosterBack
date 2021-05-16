import { Tests } from '../testingapi/db/dbtest/entities/tests.entity';
import { User } from '../entities/users.entity';

export class CreateTestingDto {
  readonly userId: User;
  readonly testId: Tests;
}
