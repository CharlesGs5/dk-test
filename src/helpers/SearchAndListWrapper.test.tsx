import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchAndListWrapper from "./SearchAndListWrapper";

describe("Search and Filter integration", () => {
    it("filters users by name", async () => {
        const user = userEvent.setup();

        render(<SearchAndListWrapper />);
        expect(screen.getByText((content) => content.includes("Alice")));
        expect(screen.getByText((content) => content.includes("Bob")));

        const input = screen.getByPlaceholderText("Search by name or last name");
        await user.type(input, "bob");

        expect(screen.queryByText("Alice")).not.toBeInTheDocument();
        expect(screen.getByText((content) => content.includes("Bob"))).toBeInTheDocument();
    });
});
