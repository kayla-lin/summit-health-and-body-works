export const SHBW_DESC =
  "Our world-class training staff offer personalized, tailored, structured training programs based on your individual fitness goals and needs. We believe fitness is important, but should not feel like a chore, so we offer fun, unique workouts to keep you on track.";

export const SHBW_TITLE = "Summit Health and Body Works";

interface PageSection {
  title: string;
  section: string;
}

export const BOOKINGS: PageSection = { title: "Bookings", section: "bookings" };

export const MENU_ITEMS: PageSection[] = [
  { title: "About", section: "about" },
  { title: "Locations", section: "locations" },
  { title: "Team", section: "team" },
  BOOKINGS,
];
