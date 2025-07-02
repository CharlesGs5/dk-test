import {User} from "@/types/user";
import UserItem from "@/components/UserItem/page";
import UserSearch from "@/components/UserSearch/page";


interface UserListProps {
    users: User[];
}

const UserList = ({users}: UserListProps) => {
    return(
        <>
            <UserSearch />
            {users.map((user, index) =>
                <UserItem user={user} key={index} />
            )}
        </>
    )
}

export default UserList;
