import * as React from 'react';
import { render, screen } from '@testing-library/react';
import PackageCard from '../PackageCard';

describe("PackageCard", () => {
    const mockResort = {
        id: '1',
        image: {
            url: 'https://example.com/image.jpg',
            description: 'Beautiful resort'
        },
        name: 'Paradise Resort',
        regionName: 'Tropical Islands',
        countryName: 'Fantasyland',
        starRating: 4,
        overview: 'An overview of the beautiful resort.',
    };

    const mockBookingDetails = {
        party: { adults: 2, children: 1 },
        lengthOfStay: 7,
        price: 1200,
    };

    const mockFlightDetails = {
        departureDate: '2023-12-01',
        departureAirport: 'Glasgow',
    };

    it("renders without crashing", () => {
        render(<PackageCard resort={mockResort} bookingDetails={mockBookingDetails} flightDetails={mockFlightDetails} />);
        expect(screen.getByText("Overview")).toBeInTheDocument();
    });

    it("displays the overview text", () => {
        render(<PackageCard resort={mockResort} bookingDetails={mockBookingDetails} flightDetails={mockFlightDetails} />);
        expect(screen.getByText(mockResort.overview)).toBeInTheDocument();
    });
})