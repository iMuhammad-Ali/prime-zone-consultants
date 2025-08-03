import UserRepository from "./userRepository";
import { UserRepositoryInterface } from "./types";

// Define the repositories object with proper typing
const repositories = {
  user: UserRepository as UserRepositoryInterface,
} as const;

// Define the repository names as a union type
type RepositoryName = keyof typeof repositories;

// Define the return type for each repository
type RepositoryType<T extends RepositoryName> = (typeof repositories)[T];

export const RepositoryFactory = {
  get: <T extends RepositoryName>(name: T): RepositoryType<T> => {
    const repository = repositories[name];
    if (!repository) {
      throw new Error(`Repository "${name}" not found`);
    }
    return repository;
  },
};
