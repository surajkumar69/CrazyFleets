export type Car = {
  id: string;
  name: string;
  category: string;
  transmission: string;
  fuel_type: string;
  seating_capacity: number;
  image_url: string;
  is_available: boolean;
};

export const cars: Car[] = [
  {
    id: "baleno",
    name: "Maruti Baleno",
    category: "Hatchback",
    transmission: "Manual/Automatic",
    fuel_type: "Petrol",
    seating_capacity: 5,
    image_url: "/images/car_baleno.jpg",
    is_available: true,
  },
  {
    id: "swift",
    name: "Maruti Swift",
    category: "Hatchback",
    transmission: "Manual",
    fuel_type: "Petrol",
    seating_capacity: 5,
    image_url: "/images/car_swift.jpg",
    is_available: true,
  },
  {
    id: "scorpio-n",
    name: "Mahindra Scorpio N",
    category: "Premium SUV",
    transmission: "Automatic",
    fuel_type: "Diesel",
    seating_capacity: 7,
    image_url: "/images/car_scorpio_n.jpg",
    is_available: true,
  },
  {
    id: "thar",
    name: "Mahindra Thar",
    category: "Adventure SUV",
    transmission: "Manual/Automatic",
    fuel_type: "Diesel",
    seating_capacity: 4,
    image_url: "/images/car_thar.jpg",
    is_available: true,
  },
  {
    id: "victoris",
    name: "Maruti Suzuki Invicto",
    category: "Premium MPV",
    transmission: "Automatic",
    fuel_type: "Hybrid",
    seating_capacity: 7,
    image_url: "/images/car_victoris.jpg",
    is_available: true,
  },
  {
    id: "grand-vitara",
    name: "Maruti Grand Vitara",
    category: "SUV",
    transmission: "Automatic",
    fuel_type: "Hybrid",
    seating_capacity: 5,
    image_url: "/images/car_grand_vitara.jpg",
    is_available: true,
  }
];
