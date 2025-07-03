import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingUserDetail() {
    return (
        <div className="flex justify-center items-center min-h-screen px-4">
            <Card className="p-6 flex flex-col items-center text-center gap-4 max-w-md w-full shadow-md">
                <Skeleton className="w-24 h-24 rounded-full" />
                <Skeleton className="w-1/2 h-5" />
                <Skeleton className="w-2/3 h-4" />
                <Skeleton className="w-1/4 h-3" />
            </Card>
        </div>
    );
}
