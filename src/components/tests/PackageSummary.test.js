import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PackageSummary from '../PackageSummary';

describe("PackageSummary", () => {
    const mockProps = {
        resortName: 'Paradise Resort',
        location: 'Tropical Islands, Fantasyland',
        rating: 4,
        travellers: { adults: 2, children: 1 }, // You might adjust based on how you use this prop
        startDate: '2023-12-01',
        numberOfDays: 7,
        airportName: 'Glasgow',
    };

    it("displays the resort name", () => {
        render(<PackageSummary {...mockProps} />);
        expect(screen.getByText(mockProps.resortName)).toBeInTheDocument();
    });

    it("displays the location", () => {
        render(<PackageSummary {...mockProps} />);
        expect(screen.getByText(mockProps.location)).toBeInTheDocument();
    });

    it("displays the star rating", () => {
        render(<PackageSummary {...mockProps} />);
        expect(screen.getByText("⭐".repeat(mockProps.rating))).toBeInTheDocument();
    });

    it("displays the start date and duration", () => {
        render(<PackageSummary {...mockProps} />);
        expect(screen.getByText(new RegExp(`${mockProps.startDate} for ${mockProps.numberOfDays} day(s)? departing from ${mockProps.airportName}`))).toBeInTheDocument();
    });

    it("displays the departure airport", () => {
        render(<PackageSummary {...mockProps} />);
        expect(screen.getByText(new RegExp(`${mockProps.airportName}`))).toBeInTheDocument();
    });

    it("clicking book now acts as expected", async () => {
        render(<PackageSummary {...mockProps} />);
        const button = screen.getByRole("button");
        await userEvent.click(button);
        // Todo: add tests for button functionality when implemented
    });
})