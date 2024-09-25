import fs from "fs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const usersData = JSON.parse(
      fs.readFileSync("src/data/users.json", "utf-8")
    ).users;
    for (const user of usersData) {
      await prisma.user.create({ data: user });
    }
    console.log("Data succesvol geïmporteerd voor user");
  } catch (error) {
    console.error("Error bij het importeren van users.json:", error);
  }

  try {
    const propertiesData = JSON.parse(
      fs.readFileSync("src/data/properties.json", "utf-8")
    ).properties;
    for (const property of propertiesData) {
      await prisma.property.create({ data: property });
    }
    console.log("Data succesvol geïmporteerd voor properties");
  } catch (error) {
    console.error("Error bij het importeren van properties.json:", error);
  }

  try {
    const amenitiesData = JSON.parse(
      fs.readFileSync("src/data/amenities.json", "utf-8")
    ).amenities;
    for (const amenity of amenitiesData) {
      await prisma.amenity.create({ data: amenity });
    }
    console.log("Data succesvol geïmporteerd voor amenities");
  } catch (error) {
    console.error("Error bij het importeren van amenities.json:", error);
  }

  try {
    const bookingsData = JSON.parse(
      fs.readFileSync("src/data/bookings.json", "utf-8")
    ).bookings;
    for (const booking of bookingsData) {
      await prisma.booking.create({ data: booking });
    }
    console.log("Data succesvol geïmporteerd voor bookings");
  } catch (error) {
    console.error("Error bij het importeren van bookings.json:", error);
  }

  try {
    const hostsData = JSON.parse(
      fs.readFileSync("src/data/hosts.json", "utf-8")
    ).hosts;
    for (const host of hostsData) {
      await prisma.host.create({ data: host });
    }
    console.log("Data succesvol geïmporteerd voor hosts");
  } catch (error) {
    console.error("Error bij het importeren van hosts.json:", error);
  }

  try {
    const reviewsData = JSON.parse(
      fs.readFileSync("src/data/reviews.json", "utf-8")
    ).reviews;
    for (const review of reviewsData) {
      await prisma.review.create({ data: review });
    }
    console.log("Data succesvol geïmporteerd voor reviews");
  } catch (error) {
    console.error("Error bij het importeren van reviews.json:", error);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
