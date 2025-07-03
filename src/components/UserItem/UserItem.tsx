import { User } from "@/types/user";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface UserItemProps {
    user: User;
}

const UserItem = ({ user }: UserItemProps) => {
    return (
        <Link href={`/user/${user.id}`} className="block">
            <Card className="p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <h2 className="text-base font-semibold">{user.first_name} {user.last_name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
                <Image
                    src={user.avatar}
                    alt={`${user.first_name} avatar`}
                    width={80}
                    height={80}
                    className="rounded-full border"
                />
                <p className="text-xs text-muted-foreground">ID: {user.id}</p>
            </Card>
        </Link>
    );
};

export default UserItem;
