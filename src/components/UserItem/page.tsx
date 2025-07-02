import { User } from "@/types/user";
import {Button} from "@/components/ui/button";

interface UserItemProps {
    user: User
}

const UserItem = ({user}: UserItemProps) => {
    return(
        <>
            <img src={user.avatar}  alt="avatar"/>
            <div>
                {user.first_name}
            </div>
            <div>
                {user.last_name}
            </div>
            <div>
                {user.id}
            </div>
            <Button>Hey Click ME!</Button>
        </>
    )

}

export default UserItem;
