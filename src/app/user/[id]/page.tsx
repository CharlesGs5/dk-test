import { User } from "@/types/user";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { getUserById } from "@/services/api";
import { notFound } from "next/navigation";
import BackButton from "@/components/shared/BackButton";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    try {
        const { data: user }: { data: User } = await getUserById((await params).id);

        return (
            <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-6">
                <Card className="p-6 flex flex-col items-center text-center gap-4 max-w-md w-full shadow-lg">
                    <Image
                        src={user.avatar}
                        alt={`${user.first_name} avatar`}
                        width={100}
                        height={100}
                        className="rounded-full border"
                    />
                    <h1 className="text-xl font-bold">
                        {user.first_name} {user.last_name}
                    </h1>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                    <p className="text-xs text-muted-foreground">ID: {user.id}</p>
                </Card>

                <BackButton />
            </div>
        );
    } catch (error) {
        console.error(error);
        return notFound();
    }
}
