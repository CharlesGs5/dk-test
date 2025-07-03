import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

interface UserSearchProps {
    value: string;
    onChange: (value: string) => void;
}

const UserSearch = ({value, onChange}: UserSearchProps) => {
    return(
        <>
            <Label>Search users:</Label>
            <Input
                type="text"
                value={value}
                placeholder="Search by name or last name"
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    )
}

export default UserSearch;
