import { User } from '../../user'

export interface UserRepositoryInterface {
  findByUsername(id: string): Promise<User | undefined>
}
