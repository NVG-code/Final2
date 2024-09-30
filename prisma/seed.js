import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import usersData from "../src/data/users.json" assert { type: "json" };
import hostsData from "../src/data/hosts.json" assert { type: "json" };
import propertiesData from "../src/data/properties.json" assert { type: "json" };
import amenitiesData from "../src/data/amenities.json" assert { type: "json" };
import bookingsData from "../src/data/bookings.json" assert { type: "json" };
import reviewsData from "../src/data/reviews.json" assert { type: "json" };

async function main() {
  try {
    const { users } = usersData;
    console.log("users:", users);
    for (const user of users) {
      await prisma.user.create({ data: user });
    }
    console.log("Data succesvol geïmporteerd voor user");
  } catch (error) {
    console.error("Error bij het importeren van users.json:", error);
  }

  try {
    const { hosts } = hostsData;
    for (const host of hosts) {
      await prisma.host.create({ data: host });
    }
    console.log("Data succesvol geïmporteerd voor hosts");
  } catch (error) {
    console.error("Error bij het importeren van hosts.json:", error);
  }

  try {
    const { properties } = propertiesData;
    for (const property of properties) {
      //await prisma.property.create({ data: property });
      await prisma.property.upsert({
        where: { id: property.id },
        update: {},
        create: property,
      });
    }
    console.log("Data succesvol geïmporteerd voor properties");
  } catch (error) {
    console.error("Error bij het importeren van properties.json:", error);
  }

  try {
    const { amenities } = amenitiesData;
    for (const amenity of amenities) {
      await prisma.amenity.create({ data: amenity });
    }
    console.log("Data succesvol geïmporteerd voor amenities");
  } catch (error) {
    console.error("Error bij het importeren van amenities.json:", error);
  }

  try {
    const { bookings } = bookingsData;
    // console.log("bookings:", bookings);
    // console.log("bookingsData:", bookingsData);
    for (const booking of bookings) {
      console.log("booking:", booking);
      await prisma.booking.create({ data: booking });
    }
    console.log("Data succesvol geïmporteerd voor bookings");
  } catch (error) {
    console.error("Error bij het importeren van bookings.json:", error);
  }

  try {
    const { reviews } = reviewsData;
    for (const review of reviews) {
      //await prisma.review.create({ data: review });
      await prisma.review.upsert({
        where: { id: review.id },
        update: {},
        create: review,
      });
    }
    console.log("Data succesvol geïmporteerd voor reviews");
  } catch (error) {
    console.error("Error bij het importeren van reviews.json:", error);
  }
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
