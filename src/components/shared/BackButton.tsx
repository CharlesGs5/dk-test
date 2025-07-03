'use client';

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="text-sm text-blue-600 hover:underline flex items-center gap-1"
        >
            <ArrowLeft size={16} />
            Back
        </button>
    );
};

export default BackButton;
