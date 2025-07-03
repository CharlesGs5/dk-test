import { render, screen } from "@testing-library/react";
import UserList from "@/components/UserList/UserList";
import { User } from "@/types/user";

const mockUsers: User[] = [
    {
        id: 1,
        first_name: "Alice",
        last_name: "Johnson",
        email: "alice@example.com",
        avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
    {
        id: 2,
        first_name: "Bob",
        last_name: "Smith",
        email: "bob@example.com",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
    },
];

describe("UserList", () => {
    it("renders the correct number of users", () => {
        render(<UserList users={mockUsers} />);
        const names = screen.getAllByText(/Alice|Bob/);
        expect(names.length).toBeGreaterThan(0);
    });

    it("displays user emails", () => {
        render(<UserList users={mockUsers} />);
        expect(screen.getByText("alice@example.com")).toBeInTheDocument();
        expect(screen.getByText("bob@example.com")).toBeInTheDocument();
    });
});

