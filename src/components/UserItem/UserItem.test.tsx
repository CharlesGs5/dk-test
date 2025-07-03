import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserItem from "./UserItem";
import { User } from "@/types/user";

const mockUser: User = {
    id: 42,
    first_name: "Test",
    last_name: "User",
    email: "test@example.com",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
};

describe("UserItem", () => {
    it("renders user info and link", async () => {
        render(<UserItem user={mockUser} />);
        const link = screen.getByRole("link");

        expect(link).toHaveAttribute("href", "/user/42");
        expect(screen.getByText("Test User")).toBeInTheDocument();
        expect(screen.getByText("test@example.com")).toBeInTheDocument();
    });

    it("responds to user click", async () => {
        const user = userEvent.setup();
        render(<UserItem user={mockUser} />);
        const link = screen.getByRole("link");

        await user.click(link);
        expect(link).toHaveAttribute("href", "/user/42");
    });
});
