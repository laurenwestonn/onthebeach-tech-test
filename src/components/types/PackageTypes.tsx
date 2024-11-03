type ImageType = {
    url: string;
    description: string;
};

type ResortType = {
    id: string;
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