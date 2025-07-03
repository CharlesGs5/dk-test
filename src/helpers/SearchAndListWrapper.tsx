import { useState } from "react";
import UserSearch from "@/components/UserSearch/UserSearch";
import UserList from "@/components/UserList/UserList";
import { User } from "@/types/user";

const mockUsers: User[] = [
    {
        id: 1,
        first_name: "Alice",
        last_name: "Smith",
        email: "alice@example.com",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
        id: 2,
        first_name: "Bob",
        last_name: "Johnson",
        email: "bob@example.com",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
];

const SearchAndListWrapper = () => {
    const [search, setSearch] = useState("");

    const filtered = mockUsers.filter((u) =>
        `${u.first_name} ${u.last_name}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <UserSearch value={search} onChange={setSearch} />
            <UserList users={filtered} />
        </>
    );
};

export default SearchAndListWrapper;
