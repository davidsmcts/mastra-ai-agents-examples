import { createTool } from "@mastra/core/tools";
import { z } from "zod";

// Mock data meant to simulate a backend call to access bookings informations
const fetchBookings = (accountId: string) => {
  switch (accountId) {
    case "abc134":
      return {
        accountId,
        bookings: [
          {
            bookingId: 1001,
            location: "New York",
            buildingName: "The Plaza",
            buildingId: 7773,
            startDate: new Date("2025-04-15"),
            endDate: new Date("2025-04-20"),
          },
          {
            bookingId: 1002,
            location: "London",
            buildingName: "The Savoy",
            buildingId: 987289,
            startDate: new Date("2025-06-01"),
            endDate: new Date("2025-06-07"),
          },
        ],
      };
    case "def245":
      return {
        accountId,
        bookings: [
          {
            bookingId: 2002,
            location: "Tokyo",
            buildingName: "Park Hyatt",
            buildingId: 892798,
            startDate: new Date("2025-07-20"),
            endDate: new Date("2025-07-25"),
          },
          {
            bookingId: 2004,
            location: "Paris",
            buildingName: "Eiffel Tower Plaza",
            buildingId: 112,
            startDate: new Date("2025-03-20"),
            endDate: new Date("2025-03-23"),
          },
        ],
      };
    default:
      return {
        accountId,
        bookings: [],
      };
  }
};

const getBookings = createTool({
  id: "get-bookings",
  description: "Get bookings for a specific guest using their account id",
  inputSchema: z.object({
    accountId: z.string().describe("Guest's account identifier"),
  }),
  outputSchema: z.object({
    accountId: z.string(),
    bookings: z.array(
      z.object({
        bookingId: z.number(),
        location: z.string(),
        buildingName: z.string(),
        buildingId: z.number(),
        startDate: z.date(),
        endDate: z.date(),
      })
    ),
  }),
  execute: async ({ context }) => {
    return fetchBookings(context.accountId);
  },
});

export default getBookings;
