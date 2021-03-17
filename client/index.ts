import { User, UserStatus } from "../proto/users_pb";
import getUser from "./get-users";
import createUsers from "./create-users";
import allUsers from "./all-users";

async function run() {
    // Get User
    const user = await getUser(1); 
    console.log(user.toString());

    // Create User
    const shubham = new User();
    shubham.setName("Shubham DHage")
    shubham.setId(30);
    shubham.setAge(24);
    shubham.setStatus(UserStatus.AVAILABLE);
    createUsers([shubham]);
    console.log(`\nCreated user ${shubham.toString()}`);

    // Get All Users
    const users = await allUsers();
    console.log(`\nListing all ${users.length} users`);
    for (const u of users) {
        console.log(u.toString());
    }
}

run();