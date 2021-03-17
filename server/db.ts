import { User, UserStatus } from "../proto/users_pb";

export function userToClass({ id, name, age, status }: User.AsObject) {
    const user = new User();
    user.setId(id);
    user.setName(name);
    user.setAge(age);
    user.setStatus(status);
    return user;
}

export const users: User[] = [
    { id: 1, name: "Shubham", age: 23, status: UserStatus.BUSY },
    { id: 2, name: "Ayush", age: 21, status: UserStatus.OFFLINE },
    { id: 2, name: "Rohan", age: 25, status: UserStatus.AVAILABLE },
].map(userToClass);