type ImageType = {
    url: string;
    description: string;
};

type ResortType = {
    name: string;
    regionName: string;
    countryName: string;
    starRating: number;
    overview: string;
    image: ImageType;
};

type FlightDetailsType = {
    departureAirport: string;
    departureDate: string;
};

type PartyType = {
    adults: number;
    children: number;
    infants: number;
};

type PriceType = {
    amount: number;
    currency: string;
};

type BookingDetailsType = {
    party: PartyType;
    lengthOfStay: number;
    price: PriceType;
};

export type PackageType = {
    resort: ResortType;
    flightDetails: FlightDetailsType;
    bookingDetails: BookingDetailsType;
};

export type PackageSummaryType = {
    resortName: string;
    location: string;
    rating: number;
    travellers: PartyType;
    startDate: string;
    numberOfDays: number;
    airportName: string;
    price: PriceType;
};