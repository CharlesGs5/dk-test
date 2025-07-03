'use client';

import { useEffect, useState } from "react";
import { getUser } from "@/services/api";
import UserList from "@/components/UserList/UserList";
import UserSearch from "@/components/UserSearch/UserSearch";
import { User } from "@/types/user";
import PaginationUser from "@/components/PaginationUser/PaginationUser";
import { useSearchParams } from "next/navigation";
import UserItemSkeleton from "@/components/UserItemSkeleton/UserItemSkeleton";

const ClientHome = () => {
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page") || 1);

    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            const response = await getUser(currentPage);
            setTotalPages(response.total_pages);
            setUsers(response.data);
            setIsLoading(false);
        };
        fetchUsers();
    }, [currentPage]);

    const filteredUsers = users.filter((user) =>
        `${user.first_name} ${user.last_name}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <UserSearch value={search} onChange={setSearch} />
            {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <UserItemSkeleton key={i} />
                    ))}
                </div>
            ) : filteredUsers.length === 0 ? (
                <p className="text-center text-gray-500 text-sm">User Not Found</p>
            ) : (
                <UserList users={filteredUsers} />
            )}

            {!isLoading && <PaginationUser totalPages={totalPages} />}
        </div>
    );

};

export default ClientHome;
