import React from "react";
import Makkah1 from "../src/Images/Makkah1.avif";
import Makkah2 from "../src/Images/Makkah2.avif";
import Makkah3 from "../src/Images/Makkah3.avif";
import Makkah4 from "../src/Images/Makkah4.avif";
import umrah1 from "../src/Images/Umrah1.avif";
import umrah2 from "../src/Images/Umrah2.avif";
import umrah3 from "../src/Images/Umrah3.avif";
import umrah4 from "../src/Images/Umrah4.avif";
import umrah5 from "../src/Images/Umrah5.avif";
import ramadan1 from "../src/Images/ramadan1.jpeg";
import ramadan2 from "../src/Images/ramadan2.jpeg";
import perfromUmrah from "../src/Images/perfromUmrah.jpg";
import perfromhajj from "../src/Images/perfromhajj.jpg";
import karbala from "../src/Images/karbala.jpg";
import { Link } from "react-router-dom";
import partner1 from "../src/Images/partner1.webp";
import partner2 from "../src/Images/partner2.webp";
import partner3 from "../src/Images/partner3.webp";
import partner4 from "../src/Images/partner4.webp";
import partner5 from "../src/Images/partner5.webp";
import partner6 from "../src/Images/partner6.webp";
import partner7 from "../src/Images/partner7.webp";
import fb from "../src/Images/facebook.webp";
import whatapp from "../src/Images/whatapp.webp";
import instagram from "../src/Images/instagram.webp";
import twitter from "../src/Images/twitter.webp";
import utube from "../src/Images/utube.webp";
import linkedIn from "../src/Images/linkedIn.webp";
import pinInterest from "../src/Images/pinInterest.webp";
import google from "../src/Images/google.webp";
import hajjpackagesImg1 from "../src/Images/hajjpackagesImg1.jpg";
import hajjpackagesImg2 from "../src/Images/hajjpackagesImg2.jpg";
import hajjpackagesImg3 from "../src/Images/hajjpackagesImg3.jpg";
import hajjpackagesImg4 from "../src/Images/hajjpackagesImg4.jpg";
import hajjpackagesImg5 from "../src/Images/hajjpackagesImg5.jpg";
import hajjpackagesImg6 from "../src/Images/hajjpackagesImg6.jpg";
import hajjpackagesImg7 from "../src/Images/hajjpackagesImg7.jpg";
import hajjpackagesImg8 from "../src/Images/hajjpackagesImg8.jpg";
import hajjpackagesImg9 from "../src/Images/hajjpackagesImg9.jpg";
import hajjpackagesImg10 from "../src/Images/hajjpackagesImg10.jpg";
import hajjpackagesImg11 from "../src/Images/hajjpackagesImg11.jpg";
import hajjpackagesImg12 from "../src/Images/hajjpackagesImg12.jpg";
import hajjpackagesImg13 from "../src/Images/hajjpackagesImg13.jpg";

export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Hajj-Packages",
    path: "/hajjpackages",
  },
  {
    title: "Umrah-Packages",
    path: "/umrahpackages",
  },
  {
    title: "Ramadan-Umrah",
    path: "/ramadan",
  },
  {
    title: "Baghdad-Ziyarat",
    path: "/baghdad",
  },
  {
    title: "Contact us",
    path: "/contact",
  },
];

export const packageCategories = [
  {
    type: "Hajj Packages",
    package: [
      {
        img: Makkah1,
        title: "HAJJ 2026 SILVER NON-SHIFTING SHORT TOUR (HT-07)",
        hotels: [
          { moullim: "Moullim No. :", category: "Category-D Plus" },
          { hotelLocation: "Makkah :", hotelName: " Aziza/Rusaifa/Kakia" },
          { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
        ],
        departure: "BOM|AMD|NAG|Del",
        rate: "₹ 6,17,000",
        days: "12 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: Makkah2,
        title: "Hajj 2026 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-01)",
        hotels: [
          { moullim: "Moullim No. :", category: "Category-D Plus" },
          { hotelLocation: "Makkah :", hotelName: "Snood Ajyad" },
          { hotelLocation: "Madina :", hotelName: "Ritz Al Madinah" },
        ],
        departure: "BOM",
        rate: "₹ 7,84,000",
        days: "12 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: Makkah3,
        title: "Hajj 2026 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-02)",
        hotels: [
          { moullim: "Moullim No. :", category: "Category-D Plus" },
          {
            hotelLocation: "Makkah Shifting :",
            hotelName: "Dreamzone Al Azizia/Rusaifah",
          },
          { hotelLocation: "Makkah :", hotelName: "Snood Ajyad" },
          { hotelLocation: "Madina :", hotelName: " Hotel Mokhtara Plaza" },
        ],
        departure: "BOM|AMD|NAG|Del",
        rate: "₹ 6,56,000",
        days: "40 nights",

        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: Makkah4,
        title: "Hajj 2026 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-02)",
        hotels: [
          { moullim: "Moullim No. :", category: "Category-D Plus" },
          { hotelLocation: "Makkah :", hotelName: "Snood Ajyad" },
          { hotelLocation: "Madina :", hotelName: "Ritz Al Madinah" },
        ],
        departure: " BOM|DEL|AMD",
        rate: "₹ 8,10,000",
        days: "19 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
    ],
  },
  {
    type: "Umrah Packages",
    package: [
      {
        img: umrah1,
        title: "GOLD UMRAH PACKAGE JULY 2025",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: " SNOOD AJYAD HOTEL(AL SARAYA EMAN)",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: "  ODST AL MADINAH HOTEL",
          },
        ],
        departure: "BOM|AMD",
        rate: "₹ 1,01,000",
        days: "14 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: umrah2,
        title: "GOLD UMRAH PACKAGE AUGUST 2025",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: " SNOOD AJYAD HOTEL(AL SARAYA EMAN)",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: "  ODST AL MADINAH HOTEL",
          },
        ],
        departure: "BOM|AMD",
        rate: "₹ 1,01,000",
        days: "14 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: umrah3,
        title: "BRONZE UMRAH PACKAGE JULY 2025",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: "  BILAL HOTEL",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: "  KINAN AL MADINAH HOTEL",
          },
        ],
        departure: "BOM",
        rate: "₹ 70,000",
        days: "14 nights",

        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: umrah4,
        title: "BRONZE UMRAH PACKAGE AUGUST 2025",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: "  BILAL HOTEL",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: "  KINAN AL MADINAH HOTEL",
          },
        ],
        departure: " BOM",
        rate: "₹73,000",
        days: "14 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: umrah5,
        title: "SILVER UMRAH PACKAGE AUGUST 2025",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: " RAFEIDIN AL MASI HOTEL ",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: " BURJ MUKHTARA HOTEL",
          },
        ],
        departure: " BOM",
        rate: "₹82,000",
        days: "14 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
    ],
  },
  {
    type: "Ramadan Packages",
    package: [
      {
        img: ramadan1,
        title: "RAMADAN UMRAH 2025 GOLD PACKAGE–(WITH AIR TICKETS)",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: "  Snood Ajyad",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: " Odst Al Madinah",
          },
        ],
        departure: "BOM|AMD",
        rate: "₹ 1,01,000",
        days: "14 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
      {
        img: ramadan2,
        title: "GOLD UMRAH PACKAGE AUGUST 2025",
        hotels: [
          {
            hotelLocation: "Makkah Hotel :",
            hotelName: " SNOOD AJYAD HOTEL(AL SARAYA EMAN)",
          },
          {
            hotelLocation: "Madinah Hotel :",
            hotelName: "  ODST AL MADINAH HOTEL",
          },
        ],
        departure: "BOM|AMD",
        rate: "₹ 1,01,000",
        days: "14 nights",
        description:
          "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
      },
    ],
  },
];

export const videoData = [
  {
    id: 1,
    path: "https://www.youtube.com/embed/NqVwgqHqmXo",
    text: "How to perfrom Umrah Video",
    imgSrc: perfromUmrah,
  },
  {
    id: 2,
    path: "https://www.youtube.com/embed/eHUCGGr9rfk",
    text: "How to perfrom Hajj Video",
    imgSrc: perfromhajj,
  },
  {
    id: 3,
    path: "https://www.youtube.com/embed/lFNRXV3_mrQ",
    text: "Karbala Ziyarat Video",
    imgSrc: karbala,
  },
];

export const aboutData = [
  {
    id: 1,
    title: "Best Hajj and Umrah Package Tour Operator in Mumbai, India",
    disc: (
      <>
        Hijrat Tours & Travels is known as the{" "}
        <Link className="text-[#ddb66a]" to={"/"}>
          best Hajj and Umrah travel company in Mumbai
        </Link>
        . With over 30 years of service experience through our{" "}
        <Link className="text-[#ddb66a]" to={"/hajjpackages"} target="_blank">
          hajj
        </Link>{" "}
        and{" "}
        <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
          Umrah packages
        </Link>
        , for us, every pilgrim’s journey is our way of serving the guest of
        Allah by helping them fulfil their pilgrimage to Makka and Madinah.
      </>
    ),
    disc2: (
      <>
        Our travel agency guides the pilgrims throughout the journey from the
        time when he/she starts their Hajj, Umrah or Ziyarat journey with the
        motto of <strong className="text-[#ddb66a]">“Better Pilgrimage”</strong>{" "}
        experience for all our pilgrims. As the approved Umrah travel agents in
        India, we have been setting up benchmarks in trust and commitment. Apart
        from the tour packages, we offer many additional services like guidance
        in performing the self-purification of Hajj and Umrah.
      </>
    ),
  },
  {
    id: 2,
    title: "Our Hajj Umrah Ziyarat Services",
    disc: (
      <>
        <strong className="text-[#ddb66a]">Hajj package:</strong> Serving for
        over 35 years, Bakhla Tours and Travels offers complete Hajj travel
        packages to the pilgrim based on different criteria and budgets. Through
        our thoughtfully designed{" "}
        <a href="/hajjpackages" className="text-[#ddb66a]">
          Hajj packages
        </a>
        , we guide our pilgrims towards the sacred journey of Makkah and
        Madinah. We also provide customized Hajj packages and Land Packages for
        Hajj on demand.
      </>
    ),
    disc2: (
      <>
        <strong className="text-[#ddb66a]">Umrah packages:</strong> Umrah is the
        most demanded sacred tour at our{" "}
        <strong className="text-[#ddb66a]">Umrah Travel Agency</strong>. We
        provide the{" "}
        <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
          <strong>best Umrah Packages from all across India</strong>
        </Link>
        . Being an approved Umrah travel agent in India, we also provide Saudi
        Arabia custom Umrah tour packages for individual travellers along with
        Family and Group deals for Umrah.
      </>
    ),
    disc3: (
      <>
        <strong className="text-[#ddb66a]">Ziyarat tour package:</strong> We at
        Bakhla tours release Baghdad Shareef tours in the holy month of
        Dhul-Qadah. This tour is conducted once a year in the month of
        Dhul-Qadah.
        <Link className="text-[#ddb66a]" to={"/baghdad"}>
          {" "}
          <strong className="text-[#ddb66a]">
            Baghdad Ziyarat Tour Package
          </strong>
        </Link>{" "}
        includes Ziyarats of different Islamic destinations which are situated
        in the Gulf countries like Iran and Iraq. The best accommodations are
        provided with the best transportation and other facilities.
      </>
    ),
    disc4: (
      <>
        <strong className="text-[#ddb66a]">Hotels:</strong> We, at{" "}
        <strong className="text-[#ddb66a]">Hijrat Tours & Travels</strong>, are
        the official Hajj Umrah travel agents that deal in bulk bookings of
        hotels. We provide comfortable and convenient hotel accommodation in
        both holy cities, Makkah and Madinah. Our hotel rates are competitive as
        compared to any other online portals. Our hotels are in close proximity
        of haram, ensuring cleanliness, peaceful stay with a good standard. We
        provide hotels from 2 Star to 5 Stars for the convenience of our
        pilgrims.
      </>
    ),
    disc5: (
      <>
        <strong className="text-[#ddb66a]">Food:</strong> While pilgrims are
        busy performing Hajj and Umrah, we, along with our professional team of
        Indian chefs, prepare and provide the best quality delicious food. With
        a wide variety in starters, main course, desserts and snacks we provide
        fresh Indian food to our pilgrims three times a day.
      </>
    ),
    disc6: (
      <>
        <strong className="text-[#ddb66a]">Visa:</strong> We have a very
        professionally trained visa department, which consists of staff members
        who handle all the Saudi Arabia Hajj and Umrah visas for our Hajjis.
        Making sure our Hajjis do not have to worry at all making us the best in
        the industry of
      </>
    ),
    disc7: (
      <>
        <strong className="text-[#ddb66a]">Tickets:</strong> As far as ticketing
        is concerned, we at Bakhla Tours & Travels Pvt. Ltd. Hajj and Umrah
        travel agency purchase blocks of different airlines much before the
        flying dates. This is why we can offer tickets at the best possible
        rates. Through this, we offer the best deals and rates on Hajj and Umrah
        packages to our customers.
      </>
    ),
  },
  {
    id: 3,
    title: "What Makes Us the Best Hajj and Umrah Travel Agency in Mumbai?",
    disc: (
      <>
        Many travel agencies offer Hajj and{" "}
        <a className="text-[#ddb66a]" href="/umrahpackages">
          Umrah travel packages in India
        </a>
        . But what makes us different from others is our commitment to serving
        you with the{" "}
        <strong className="text-[#ddb66a]">best Hajj and Umrah services</strong>
        .
      </>
    ),
    disc2: (
      <>
        We are a genuine travel agency of{" "}
        <strong className="text-[#ddb66a]">Hajj and Umrah</strong> working and
        excelling in the industry for more than 3 decades, consider it our
        responsibility to guide you through not only decision-making but also in
        finding the best deals in flights, hotels, local transportation, etc
        which in turn makes our packages perfect for our clients.
      </>
    ),
    disc3: (
      <>
        At <strong className="text-[#ddb66a]">Hijrat Tours & Travels</strong>,
        we have special Travel Experts to help you select and finalise a package
        according to your budget.
      </>
    ),
    disc4: (
      <>
        For our Hajj Umrah services, we have gained the trust of thousands of
        pilgrim families in India and Abroad, and we have been serving them with
        the best. If you are planning for Hajj, Umrah or Ziyarat tour, you are
        on the perfect company’s website.
      </>
    ),
  },
  {
    id: 4,
    title: "30 Years of Experience for Hajj and Umrah Services",
    disc: (
      <>
        Hajj, Umrah or Ziyarat tours are performed once in a lifetime for most
        people and if you are planning on completing the 5<sup>th</sup> pillar
        of Islam that is Hajj Tour you will have to have trust a{" "}
        <strong className="text-[#ddb66a]">Hajj & Umrah package tour</strong>{" "}
        provider company who has the best experience in this industry and are
        approved by Ministry of Minority Affairs.
      </>
    ),
    disc2: (
      <>
        If you as a pilgrim is travelling to a foreign country on a pilgrimage
        journey where thousands of other people gather for the same purpose,
        then you might need proper guidance and this guidance will be provided
        by us to you.
      </>
    ),
    disc3: (
      <>
        Under the guidance of{" "}
        <strong className="text-[#ddb66a]">Hijrat Tours & Travels</strong>{" "}
        family and staff members you could find Hajj or Umrah pilgrimage very
        easy. Making a better and easy pilgrimage is our motto.
      </>
    ),
    disc4: (
      <>
        Our boss and the C.E.O. of{" "}
        <strong className="text-[#ddb66a]">Hijrat Tours & Travels</strong>{" "}
        himself has traveled and completed his 30<sup>th</sup> Hajj journey in
        the year 2018. Long things explained in short, more experience leads to
        more contacts, and more contacts lead to easy pilgrimage travel.
      </>
    ),
  },
  {
    id: 5,
    title: "Trustworthy & Government Approved Umrah Hajj Travel Agents",
    disc: (
      <>
        As long as the trust is concerned,{" "}
        <strong className="text-[#ddb66a]">Hijrat Tours & Travels</strong> has
        been proving this point since its inception. In today’s modern world,
        building and maintaining the pilgrim’s or clients’ trust is our first
        priority and many travel agencies fail. A very fine example of trust is
        of recent times of the pandemic COVID-19.
      </>
    ),
    disc2: (
      <>
        Soon as the cancellation of Hajj and Umrah 2020 was announced by the
        Saudi government, we returned all the booking amounts of our pilgrims to
        them each and every penny.
      </>
    ),
    disc3: (
      <>
        You can have a look at our client testimonials and see our pilgrims
        speaking what they feel about us in the matter of trust.
      </>
    ),
    disc4: (
      <>
        The money of Hajj and Umrah is an Amanah for us until you travel and if
        you are traveling with us for Hajj and Umrah package tour or Baghdad
        Ziyarat then you are traveling with the best.
      </>
    ),
  },
  {
    id: 6,
    title: "Best Hajj Umrah Services",
    disc: (
      <>
        In the service sector industry, the company which provides the best
        service stays ahead of every other company.
      </>
    ),
    disc2: (
      <>
        We serve our pilgrims with top-notch services. There are travel
        companies that are unable to provide the services they commit to in
        Saudi Arabia while performing hajj and umrah.
      </>
    ),
    disc3: (
      <>
        <strong className="text-[#ddb66a]">Hijrat Tours & Travels</strong>{" "}
        commits to services that they can provide during the pilgrimage journey.
        We provide all types of packages and services for all types of budgets.
      </>
    ),
    disc4: (
      <>
        Luxury and economy packages of hajj and Umrah both are available in our
        company.
      </>
    ),
    disc5: (
      <>
        We never do partiality with our pilgrims, as they get what they have
        paid for and sometimes even more.
      </>
    ),
    disc6: (
      <>
        Hajj and Umrah are the most important journeys of a Muslim’s life hence,
        they need to have the best service provider who can provide them with
        proper guidance throughout the tour. You can browse our variety of{" "}
        <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
          Hajj packages
        </Link>
        .
      </>
    ),
  },
  {
    id: 7,
    title: "Best Accommodations in Hajj, Umrah, and Ziyarat",
    disc: (
      <>
        One of the main reasons that <strong>Hijrat Tours & Travels</strong> is
        gaining so much trust from Indian pilgrims and other clients is because
        they outclass the accommodation services and choose the best hotel for
        their pilgrims.
      </>
    ),
    disc2: (
      <>
        As accommodation is a very important factor of any tour package we keep
        it on a very high priority.
      </>
    ),
    disc3: (
      <>
        The accommodations for the pilgrims of Hajj and Umrah is finalized with
        the experts of our company.
      </>
    ),
    disc4: (
      <>
        Along with accommodation, Bakhla Tours have an in-house team of{" "}
        <strong>Umrah and Ziyarat visa</strong>. These visas are provided with
        all-inclusive and with insurance as well if compulsory.
      </>
    ),
  },
  {
    id: 8,
    title: "Indian Cuisines",
    disc: (
      <>
        When you are planning to perform hajj or Umrah with any travel agency
        the second thing which clicks in your mind would be food. Every pilgrim
        has a different personality.
      </>
    ),
    disc2: (
      <>
        There are pilgrims who are very particular about the food they eat in
        any foreign country. The oriental cuisine is mainly of the gulf
        countries hence Saudi Arabia also has the same.
      </>
    ),
    disc3: (
      <>
        We solve the problem of food in both cities Makkah and Madinah as we
        have a team of special Indian chefs who prepare proper Indian food for
        the pilgrims.
      </>
    ),
    disc4: (
      <>
        Preparing food three times a day for all pilgrims is a challenging part
        for other travel agencies hence they order food from catering companies
        which compromises the quality of the food.
      </>
    ),
    disc5: (
      <>
        We don’t compromise with anything related to our pilgrims we try to
        serve with the best.
      </>
    ),
  },
  {
    id: 9,
    title: "We provide Customized Hajj & Umrah Packages on demand",
    disc: (
      <>
        At Hijrat Tours and Travels, we provide customised Hajj and Umrah tour
        packages as per our clients needs, including the most popular Nikah
        packages.
      </>
    ),
    disc2: (
      <>
        We have a department that is involved in constructing a custom Umrah
        tour package for our clients.
      </>
    ),
    disc3: (
      <>
        You can set your dates, choose your types of airlines, your choice of
        hotel and transportation, etc. Just give us a budget and we create the
        best possible customised Hajj and Umrah Package for you.
      </>
    ),
  },
  {
    id: 10,
    title:
      "Umrah Package 2024 Departures from Mumbai, Ahmedabad, Delhi, Nagpur, Hyderabad, and Lucknow, India",
    disc: (
      <>
        Planning to perform Umrah in 2024? Best Umrah Tour Operators in Mumbai
        Bakhla Tours & Travels Pvt. Ltd. offers comprehensive Umrah packages
        with departures from major cities across India including Mumbai,
        Ahmedabad, Delhi, Nagpur, Hyderabad, and Lucknow.
      </>
    ),
  },
];

export const partnersData = [
  {
    imgSrc: partner1,
  },
  {
    imgSrc: partner2,
  },
  {
    imgSrc: partner3,
  },
  {
    imgSrc: partner4,
  },
  {
    imgSrc: partner5,
  },
  {
    imgSrc: partner6,
  },
  {
    imgSrc: partner7,
  },
];

export const footerData = [
  {
    imgSrc: whatapp,
  },
  {
    imgSrc: fb,
  },
  {
    imgSrc: instagram,
  },
  {
    imgSrc: twitter,
  },
  {
    imgSrc: utube,
  },
  {
    imgSrc: linkedIn,
  },
  {
    imgSrc: pinInterest,
  },
  {
    imgSrc: google,
  },
];

export const hajjPackagesPageData = [
  {
    img: hajjpackagesImg1,
    title: "Hajj 2026 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-01)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      { hotelLocation: "Makkah :", hotelName: "  Snood Ajyad" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM",
    rate: "₹ 7,84,000",
    days: "12 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg2,
    title: "Hajj 2026 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-02)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      { hotelLocation: "Makkah :", hotelName: "  Snood Ajyad" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 8,10,000",
    days: "19 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg3,
    title: "HAJJ 2026 GOLD SHIFTING SHORT TOUR (HT-04)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: "Dreamzone Al Azizia/Rusaifah",
      },
      { hotelLocation: "Makkah :", hotelName: "  Snood Ajyad" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 6,76,000",
    days: "19 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg4,
    title: "HAJJ 2026 SILVER SHIFTING LONG TOUR (HT-05)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: "Azizia / Rusaifah",
      },
      { hotelLocation: "Makkah :", hotelName: " Snood Ajyad" },
      { hotelLocation: "Madina :", hotelName: "  Hotel Mokhtara Plaza" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 6,56,000",
    days: "40 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg5,
    title: "Hajj 2026 SILVER PACKAGE NON-SHIFTING SHORT TOUR (HT-08)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      { hotelLocation: "Makkah :", hotelName: " Aziza/Rusaifa/Kakia" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|Akasa Airlines",
    rate: "₹ 6,70,000",
    days: "19 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg6,
    title: "Hajj 2026 SILVER PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-09)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: " Aziza/Rusaifa/Kakia",
      },

      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 6,05,000",
    days: "12 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg7,
    title: "Hajj 2026 GOLD SHIFTING LONG TOUR (HT-10)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: " Aziza/Rusaifa/Kakia",
      },
      { hotelLocation: "Makkah :", hotelName: " Makkah Hotel" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 7,01,000",
    days: "35 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg8,
    title: "Hajj 2026 PLATINUM PACKAGE SHIFTING / LONG TOUR (TOUR NO HT-11)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: " Aziza",
      },
      { hotelLocation: "Makkah :", hotelName: " Makkah Towers" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|AMD|NAG",
    rate: "₹ 8,25,500",
    days: "35 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg9,
    title: "Hajj 2026 PLATINUM PACKAGE SHIFTING SHORT TOUR (TOUR NO HT-12)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: " Aziza",
      },
      { hotelLocation: "Makkah :", hotelName: " Makkah Towers" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|Akasa Airlines",
    rate: "₹ 7,45,000",
    days: "19 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg10,
    title: "Hajj 2026 DIAMOND PACKAGE SHIFTING SHORT TOUR (TOUR NO HT-13)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: " Aziza",
      },
      { hotelLocation: "Makkah :", hotelName: " Makkah Hotel" },
      { hotelLocation: "Madina :", hotelName: "  Al Aqeeq Madina" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 9,29,500",
    days: "19 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg11,
    title: "Hajj 2025 PLATINUM PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-14)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      { hotelLocation: "Makkah :", hotelName: " Aziza" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM|AMD|NAG|Del",
    rate: "₹ 6,54,000",
    days: "19 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg12,
    title: "Hajj 2026 GOLD PACKAGE NON-SHIFTING SHORT TOUR (TOUR NO HT-15)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      { hotelLocation: "Makkah :", hotelName: " Aziza" },
      { hotelLocation: "Madina :", hotelName: " Ritz Al Madinah" },
    ],
    departure: "BOM",
    rate: "₹ 6,53,500",
    days: "12 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
  {
    img: hajjpackagesImg13,
    title: "HAJJ 2026 SILVER SHIFTING LONG TOUR (HT-20)",
    hotels: [
      { moullim: "Moullim No. :", category: "Category-D Plus" },
      {
        hotelLocation: "Makkah Shifting :",
        hotelName: " Azizia / Rusaifah",
      },
      { hotelLocation: "Makkah :", hotelName: "  Rafedin Al Massi" },
      { hotelLocation: "Madina :", hotelName: "  Burj Mukhtara" },
    ],
    departure: "BOM|AMD|Del",
    rate: "₹ 5,29,500",
    days: "40 nights",
    description:
      "Experience a comfortable and spiritual journey with our 2026 Silver Non-Shifting Hajj Package. This short tour is designed for those looking for quality service and convenience within a limited timeframe. Enjoy a stay in premium hotels close to Haram in both Makkah (Snood Ajyad) and Madina (Ritz Al Madinah). The non-shifting nature ensures you remain in the same hotel throughout your stay in each city. The package includes return flights from Mumbai (BOM), full board meals, guided ziyarats, air-conditioned luxury transport, and assistance throughout the pilgrimage by experienced group leaders.",
  },
];
