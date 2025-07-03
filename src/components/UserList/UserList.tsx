import { User } from "@/types/user";
import UserItem from "@/components/UserItem/UserItem";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {users.map((user) => (
                <UserItem user={user} key={user.id} />
            ))}
        </div>
    );
};

export default UserList;
