import User from "./models/UserModel.js";
import users from "./data/users.js";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await User.insertMany(users);
        console.log('Data imported!!');
        process.exit(1);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(0);
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany();
        console.log('data destroyed!!');
        process.exit(1);
    } catch (error) {
        console.log(`${error.message}`);
        process.exit(0);
    }
}

if(process.argv[2]==='-d'){
    destroyData();
} else {
    importData();
}

