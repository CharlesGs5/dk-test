import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const UserItemSkeleton = () => {
    return (
        <Card className="p-6 flex flex-col items-center text-center gap-4">
            <Skeleton className="w-20 h-20 rounded-full" />
            <Skeleton className="w-3/4 h-4" />
            <Skeleton className="w-1/2 h-3" />
            <Skeleton className="w-1/4 h-3" />
        </Card>
    );
};

export default UserItemSkeleton;
