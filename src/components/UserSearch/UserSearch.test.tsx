import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserSearch from "./UserSearch";

describe("UserSearch", () => {
    it("renders the input with the correct value", () => {
        render(<UserSearch value="Test" onChange={() => {}} />);
        const input = screen.getByPlaceholderText("Search by name or last name");
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue("Test");
    });

    it("calls onChange when typing", async () => {
        const user = userEvent.setup();
        const handleChange = jest.fn();

        render(<UserSearch value="" onChange={handleChange} />);
        const input = screen.getByPlaceholderText("Search by name or last name");

        await user.type(input, "Alice");
        expect(handleChange).toHaveBeenCalledTimes(5);
        expect(handleChange).toHaveBeenCalledWith("A");
    });
});
