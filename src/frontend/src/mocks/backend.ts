import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  listEnquiries: async () => [
    {
      id: BigInt(1),
      service: "Custom AI Development",
      name: "John Smith",
      email: "john@example.com",
      company: "Acme Corp",
      message: "Interested in AI solutions for our business.",
      timestamp: BigInt(1700000000),
      phone: "+1-555-0100",
    },
  ],
  submitEnquiry: async (_input) => BigInt(2),
};
