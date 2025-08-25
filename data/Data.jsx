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
import stamp from "../src/Images/Stamp.png";
import bag from "../src/Images/bag.png";
import handshake from "../src/Images/handshake.png";
import phone from "../src/Images/phone.png";
import plate from "../src/Images/plate.png";
import structure from "../src/Images/structure.png";
import Umrahpg1 from "../src/Images/umrahPg1.jpg";
import Umrahpg2 from "../src/Images/umrahPg2.jpg";
import Umrahpg3 from "../src/Images/umrahPg3.jpg";
import Umrahpg4 from "../src/Images/umrahpg4.jpg";
import Umrahpg5 from "../src/Images/umrahpg5.jpg";
import Umrahpg6 from "../src/Images/umrahpg6.jpg";
import Umrahpg7 from "../src/Images/umrahpg7.jpg";
import Umrahpg8 from "../src/Images/umrahpg8.jpg";
import Umrahpg9 from "../src/Images/umrahpg9.jpg";
import Umrahpg10 from "../src/Images/umrahpg10.jpg";
import Umrahpg11 from "../src/Images/umrahpg11.jpg";
import Umrahpg12 from "../src/Images/umrahpg12.jpg";
import Umrahpg13 from "../src/Images/umrahpg13.jpg";
import Umrahpg14 from "../src/Images/umrahpg14.jpg";
import Umrahpg15 from "../src/Images/umrahpg15.jpg";
import ramadanimg1 from "../src/Images/ramadanimg1.jpg";
import ramadanimg2 from "../src/Images/ramadamimg2.jpg";
import divImg from "../src/Images/divImg.jpg";
import affair from "../src/Images/affairs.avif";
import bus from "../src/Images/bus.avif";
import cash from "../src/Images/cash.avif";
import customize from "../src/Images/customize.jpg";
import faith from "../src/Images/faith.avif";
import group from "../src/Images/group.jpg";
import hotel from "../src/Images/hotel.avif";
import hours from "../src/Images/hours.avif";
import personal from "../src/Images/personal.avif";
import rewards from "../src/Images/rewards.avif";
import service from "../src/Images/service.avif";
import universal from "../src/Images/universal.avif";
import ibadat from "../src/Images/ibadat.jpg";
import comprehensive from "../src/Images/comprehensive.jpg";
import logo from "../src/Images/hijratLogo1.png";
import shoda from "../src/Images/shoda.avif";
import ziyarat1 from "../src/Images/ziyarat1.avif";
import ziyarat2 from "../src/Images/ziyarat2.avif";
import ziyarat3 from "../src/Images/ziyarat3.avif";
import ziyarat4 from "../src/Images/ziyarat4.avif";
import ziyarat5 from "../src/Images/ziyarat5.avif";
import ziyarat6 from "../src/Images/ziyarat6.avif";

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
    viewAllLink: "/hajjpackages",
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
    viewAllLink: "/umrahpackages",
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
    viewAllLink: "/ramadan",
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

export const hajjPackagesCardData = [
  {
    imgSrc: stamp,
    title: "Govt. Certified",
    para: "We are officially recognized by the Indian and Saudi governments and as members of AIHUTOA, we provide a trusted Hajj, Umrah, and Ziyarat experience.",
  },
  {
    imgSrc: structure,
    title: "Accommodation in Haram",
    para: "We provide premium hotels within walking distance of Masjid Al-Haram and Masjid Al-Nabawi, ensuring you spend more time for Ibadah and less on travel.",
  },
  {
    imgSrc: plate,
    title: "Indian Buffet Meals",
    para: "Our Indian chefs prepare fresh, delicious buffet meals daily, offering familiar flavors and nutritious options to keep you energized during your spiritual journey.",
  },
  {
    imgSrc: phone,
    title: "24/7 Service Support",
    para: "Our teams in India and Saudi Arabia are available 24/7 to assist you, ensuring your pilgrimage is smooth, stress-free, and supported every step of the way.",
  },
  {
    imgSrc: bag,
    title: "Transparent Pricing",
    para: "We provide clear, upfront pricing with no hidden fees, so you can confidently plan your journey without surprises or extra charges.",
  },
  {
    imgSrc: handshake,
    title: "Proven Track Record",
    para: "Senior management oversees your Hajj journey, ensuring personalized attention and high-quality service, making sure your pilgrimage experience is seamless and trustworthy.",
  },
];

export const faqData = [
  {
    title: "What is Hajj in Islam?",
    para: "Hajj is one of the five pillars of Islam, representing a mandatory religious journey for Muslims who are physically and financially able to undertake it. It is performed annually in Mecca, Saudi Arabia, during the Islamic month of Dhu al-Hijjah. Hajj includes a series of rituals and prayers, such as Tawaf (circumambulating the Kaaba), Sa’i (walking between the hills of Safa and Marwah), and prayers in Arafat and a night in Muzdalifah, which symbolize submission to Allah, spiritual renewal, and unity among Muslims.",
  },
  {
    title: "How many days is Hajj?",
    para: "Hajj lasts for 5 days, typically from the 8th to the 12th of Dhu al-Hijjah, the last month of the Islamic lunar calendar. However, the overall trip can last longer due to travel and preparatory rituals. Bakhla tours offer options from 12 days to 40 days.",
  },
  {
    title: "What is VIP Hajj?",
    para: "VIP Hajj refers to premium Hajj packages that offer enhanced services and accommodations during: hajj 5 days, 5-star accommodations, personalized services, and more comfortable experiences during the pilgrimage. These packages are designed for pilgrims seeking more exclusive, high-end services throughout their journey.",
  },
  {
    title: "What is the price of Hajj Package From Mumbai?",
    para: "Hijrat Tours offers several Hajj packages from Mumbai for 2025, each with varying durations, accommodations, and services. Here are some options:",
    para1:
      "Gold Non-Shifting Short Tour (HT-02): A 12-night package with accommodations 300 meters from the Haram in Makkah and 200 meters from the Haram in Madinah, including a Mouallim in Category-D+.",
    para2:
      " Gold Non-Shifting Long Tour (HT-03): A 20-day package with enhanced services during the 5 days of Hajj, including a Mouallim in Category-D+.",
    para3:
      " Platinum Shifting Long Tour (HT-10): A premium 20-day package with shifting accommodations and a Mouallim in Category-D+, offering excellent services during the 5 days of Hajj.",
    para4:
      " Diamond Non-Shifting Short Tour (HT-14): A 12-night package with premium accommodations and services, including a Mouallim in Category-A.",
    para5: " Packages Starting From: 485500/- Rs only.",
    para6:
      " For detailed pricing and to choose the package that best fits your needs, please Call or Whatsapp us on: +91 7977199070 ",
  },
  {
    title: "Why are Hajj Packages so Expensive?",
    para: "Hajj packages can be expensive due to several factors:",
    para1:
      "(1).Travel Costs: Flights to Saudi Arabia, especially during peak seasons, can be costly",
    para2:
      "(2). Accommodation: Proximity to the holy sites like the Haram in Makkah and Madinah in high season, along with quality services, increases accommodation costs.",
    para3:
      "(3).Transportation: Private buses and other transport services for pilgrims add to the cost.",
    para4:
      "(4). Meals: High-quality meals with a large variety, prepared by experienced chefs thrice a day",
    para5:
      "(5).Services: Additional services like guided tours, 24×7 assistance and personalized support increase the overall cost.",
    para6:
      " (6).Government Fees: Saudi Arabian authorities charge fees for Hajj permits, which contribute to the overall package cost. ",
    para7:
      "  These factors combine to make Hajj packages a significant investment. But Individually, the cost of each service—such as flights, hotels, and transportation—would be significantly higher due to standard retail pricing. However, when booked as part of a package through a tour operator, the overall cost is substantially reduced. This is because tour operators secure better rates through bulk bookings, allowing them to pass on the savings to their clients—resulting in a win-win for everyone involved.",
  },
  {
    title: "What is the Cost of a Hajj Packages For 2 Persons From India",
    para: "The cost of a Hajj package for 2 persons from India varies depending on the package type and the city of departure. Generally Economy Packages for 2025 started for around 4,85,000 rs per person. Please Contact Us for more details.",
  },
  {
    title: "What is Cost of a 15-Day Hajj Package From Mumbai?",
    para: "The cost of a 15-day Hajj package from Mumbai varies depending on the selected package. For specific pricing, it’s best to contact Bakhla Tours directly, ",
  },
  {
    title: "Can I Book a Hajj Packages For Just 1 Person From India?",
    para: "Yes, you can also book a Hajj package for a Single Gents or Ladies from India. Bakhla Tours offers individual packages starting from per person also as per your budget.",
  },
  {
    title: "What is the Price of a Private Hajj Package From India in 2025?",
    para: "The cost of a Private Hajj Package From India in 2025 depends on your chosen package. Private packages generally offer more personalized services, premium accommodations, and flexibility. As for the 2026 Hajj packages, detailed information and pricing will tentatively become available in October or November 2025. For specific updates connect with us on +91 9920820751 and register your self for an early bird discount for the coming year. ",
  },
  {
    title:
      "Do You Offer Hajj Packages From Lucknow, Bangalore, Chennai, and Delhi?",
    para: "Yes, Hijrat Tours offers Hajj packages from Lucknow, Bangalore, Kolkata, Chennai, Hyderabad, Delhi and many other cities in India and all over the world. All you need is an Indian Passport, and you can book with us. We provide various packages, including shifting, non-shifting, short tours and long tours with many variations in different categories like Bronze, Silver, Gold, Platinum and Diamond. Please visit “Contact Us” for more details.",
  },
  {
    title: "How Much Dose a Typical Hajj Package Cost From India?",
    para: "The cost of a typical Hajj package from India ranges from ₹4,85,000 to ₹6,50,000 per person, depending on the type of package (shifting or non-shifting) and the city of departure. For accurate pricing, it’s best to contact Bakhla Tours directly.",
  },
  {
    title:
      "How Much Does Private Hajj Package From Mumbai Cost in 2024 For Indian Pilgrims?",
    para: "Private Hajj packages from Mumbai in 2024 range from ₹4.5 Lakhs to ₹13.5 Lakhs, depending on the duration, hotel category, and room sharing type. Packages typically include flights, visa, accommodation in Makkah & Madinah, meals, internal transfers, laundry, ziyarat, guided Hajj and much more. For best deals and availability, book early with Hijrat Tours.",
  },
  {
    title: "What is the cost of a Hajj package for 2 persons from India?",
    para: "Our Hajj package for 2 persons from India starts from around ₹Price brochure lakhs per couple and varies based on the type of accommodation and services included. Many times, these are special deals available on these packages, so make sure to inquire. ",
  },
  {
    title: "Do you offer a 15-day Hajj Package?",
    para: "Yes, we offer a specially designed 15-day Hajj package, ideal for those seeking to complete their pilgrimage within a shorter timeframe while still fulfilling all the rituals.",
  },
  {
    title: "What’s included in the India to Saudi Arabia Hajj Package?",
    para: "Our India to Saudi Arabia Hajj packages cover everything: visa, return airfare, hotels in Makkah and Madinah, meals, local transport, group guidance, emergency support, and much more. ",
  },
  {
    title: "What are the expenses for the Hajj from India?",
    para: "The expenses for Hajj from India range from ₹Price broucher lakhs to ₹Price broucher lakhs, depending on the chosen package, and time of booking. Booking early can help you save significantly. ",
  },
  {
    title: "What is the price of the Hajj 2026 starting from?",
    para: "Our Hajj 2026 price starts from ₹. Price brochure for economy packages. Luxury and premium options are also available for those seeking a higher level of service.",
  },
  {
    title: "Do you provide a step-by-step guided Hajj?",
    para: "Yes. We offer a step-by-step guided Hajj experience, with trained scholars and group leaders assisting you through every ritual to ensure you perform Hajj correctly and peacefully, along with our team's support 24x7. ",
  },
];

export const detailData = [
  {
    id: 1,
    title: "Hajj Packages 2026 – Reliable Hajj Tour Operators from India",
    disc: (
      <>
        <p>
          Are you preparing for Hajj 2026? Begin your journey of a lifetime with
          confidence through our trusted Hajj tour packages, especially designed
          for Indian pilgrims. As recognized Hajj tour operators, we offer
          all-inclusive Hajj 2026 packages tailored to suit various budgets and
          preferences, ranging from Affordable low-budget Hajj packages to
          luxury Hajj experiences.
        </p>
        <p>
          Our mission is to make your pilgrimage to the holy cities of Makkah
          and Madinah a stress-free, spiritual, and fully guided experience.
          With years of experience in providing comprehensive Hajj services, we
          ensure that every step of your journey, from booking to return, is
          seamless and deeply fulfilling.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Hajj 2026 Dates & Important Booking Information",
    disc: (
      <>
        <p>
          The sacred journey of Hajj 2026 in Saudi Arabia is expected to take
          place from{" "}
          <strong className="text-[#ddb66a]">May 25th to May 30th</strong>,
          aligning with the{" "}
          <strong className="text-[#ddb66a]">8th to 13th of Dhul Hijjah</strong>{" "}
          in the Islamic calendar. The important{" "}
          <strong className="text-[#ddb66a]">Day of Arafat</strong> is
          tentatively scheduled between the{" "}
          <strong className="text-[#ddb66a]">
            evening of Monday, May 25 to Tuesday, May 26, 2026
          </strong>
        </p>
        <p>
          <strong className="text-[#ddb66a]">Hajj bookings have started</strong>
          , and are in high demand like every year. We advise pilgrims to{" "}
          <strong className="text-[#ddb66a]">
            reserve their Hajj 2026 package as early as possible
          </strong>
          . Bookings are open now and are tentatively expected to{" "}
          <strong className="text-[#ddb66a]">close by February 2026</strong>
        </p>
        <p>
          Avoid the disappointment of missing out—plan and ensure your place in
          this spiritual journey well before the deadline.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Special Offer – Secure Your Hajj 2026 Seat for Just ₹50,000",
    disc: (
      <>
        <p>
          To make this journey financially convenient, we’re offering you a
          special chance to{" "}
          <strong className="text-[#ddb66a]">block your Hajj seat</strong> with
          a small token amount of{" "}
          <strong className="text-[#ddb66a]">₹50,000</strong>. The remaining
          amount can be paid in{" "}
          <strong className="text-[#ddb66a]">
            easy halal installments (no Interest or any other charges
            applicable)
          </strong>
          , giving you enough time to manage your expenses until your final
          payment deadline.
        </p>
        <p>
          This limited-time offer is designed to make your{" "}
          <strong className="text-[#ddb66a]">
            dream of performing Hajj a reality
          </strong>{" "}
          without financial burden. Lock your spot today and take the first step
          toward fulfilling your obligation.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Tailored Hajj Packages for 2026 – Designed to Meet Every Need",
    disc: (
      <>
        <p>
          We provide a diverse selection of Hajj tour packages, catering to
          pilgrims from all walks of life:
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Cheap Hajj Packages",
    disc: (
      <>
        <p>
          If you’re looking for low-cost Hajj packages, we offer budget-friendly
          options without compromising on safety, hygiene, or essential
          services. These packages are ideal for pilgrims who prioritize
          affordability while seeking a fulfilling Hajj experience.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Luxury Hajj Packages",
    disc: (
      <>
        <p>
          Our luxury Hajj packages are tailored for those who desire a more
          comfortable journey with 5-star accommodations, 3 times wide-spread
          fresh buffet meals, and personalized service. Perfect for those
          pilgrims looking for ease and elegance with comfort. There are two
          options in this category: Diamond Luxury Hajj Packages and Platinum
          Luxury Hajj Packages.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "0 Mtrs Haram Hajj Packages",
    disc: (
      <>
        <p>
          Stay in the heart of Makkah with our exclusive Clock Tower Hajj
          Package or Makkah Tower Hajj Packages in our Shifting and Non-Shifting
          Hajj accommodations—just steps away from Masjid al-Haram. This package
          offers maximum convenience and a spiritually uplifting atmosphere.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Short Hajj Packages",
    disc: (
      <>
        <p>
          Often, Businessmen and working professionals struggle because of a
          lack of time to perform a 40-day Hajj stay. For the convenience of
          these people, we offer short Hajj packages that are ideal for
          individuals or families seeking a compact yet comprehensive
          experience. We manage all rituals, transportation, and accommodations
          within a shorter stay.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Comprehensive Hajj Services",
    disc: (
      <>
        <p>
          Each Hajj 2026 package is all-inclusive, offering the following
          services:
        </p>
        <ul>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Visa Processing & Documentation
            </strong>
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Round-Trip Airfare (India to Saudi Arabia) or (Your country to
              Saudi Arabia)
            </strong>
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Accommodation in Makkah & Madinah (Economy to Luxury)
            </strong>
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Daily Meals & Refreshments
            </strong>
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              On-Ground Transport for All Rituals
            </strong>
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">Ziyarat Tours</strong>in Islamic
            historical sites
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Step-by-step guided Hajj
            </strong>{" "}
            with scholars and group leaders
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              24/7 Support Team and Emergency Assistance
            </strong>
          </li>
        </ul>
        <p>
          Every detail is handled with care and respect, so you can focus
          entirely on your spiritual goals.
        </p>
      </>
    ),
  },
];

export const umrahPackagesPageData = [
  {
    img: Umrahpg1,
    title: "GOLD UMRAH PACKAGE AUGUST 2025",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: " SNOOD AJYAD HOTEL (AL SARAYA EMAN)",
      },
      { hotelLocation: "Madina :", hotelName: " ODST AL MADINAH HOTEL" },
    ],
    departure: "BOM|AMD",
    rate: "₹ 98,500",
    days: "14 nights",
  },
  {
    img: Umrahpg14,
    title: "SILVER UMRAH PACKAGE AUGUST 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " RAFEIDIN AL MASI HOTEL" },
      { hotelLocation: "Madina :", hotelName: " BURJ MUKHTARA HOTEL" },
    ],
    departure: "BOM",
    rate: "₹82,000",
    days: "14 nights",
  },
  {
    img: Umrahpg15,
    title: "BRONZE UMRAH PACKAGE AUGUST 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " BILAL FUNDAQ HOTEL" },
      { hotelLocation: "Madina :", hotelName: " SHAZA AL MUNAWARA HOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 72,000",
    days: "14 nights",
  },
  {
    img: Umrahpg2,
    title: "GOLD UMRAH PACKAGE SEPTEMBER 2025",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: " SNOOD AJYAD HOTEL (AL SARAYA EMAN) ",
      },
      { hotelLocation: "Madina :", hotelName: " ODST AL MADINAH HOTEL" },
    ],
    departure: "BOM|AMD",
    rate: "₹ 98,500",
    days: "14 nights",
  },
  {
    img: Umrahpg3,
    title: "SILVER UMRAH PACKAGE SEPTEMBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " MIRA AL SUD HOTEL" },
      { hotelLocation: "Madina :", hotelName: " MIRAMAR HOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 81,500",
    days: "14 nights",
  },
  {
    img: Umrahpg13,
    title: "BRONZE UMRAH PACKAGE SEPTEMBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " BILAL FUNDAQ HOTEL " },
      { hotelLocation: "Madina :", hotelName: " SHAZA AL MUNAWARA HOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 73,000",
    days: "14 nights",
  },
  {
    img: Umrahpg7,
    title: "GOLD UMRAH PACKAGE OCTOBER 2025",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: " SNOOD AJYAD HOTEL (AL SARAYA EMAN) ",
      },
      { hotelLocation: "Madina :", hotelName: " ODST AL MADINAH HOTEL" },
    ],
    departure: "BOM|AMD",
    rate: "₹ 1,03,500",
    days: "14 nights",
  },
  {
    img: Umrahpg8,
    title: "SILVER UMRAH PACKAGE OCTOBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " MIRA AL SUD HOTEL " },
      { hotelLocation: "Madina :", hotelName: " MIRAMAR HOTEL" },
    ],
    departure: "BOM",
    rate: "₹81,500",
    days: "14 nights",
  },
  {
    img: Umrahpg9,
    title: "BRONZE UMRAH PACKAGE OCTOBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " BILAL FUNDAQ HOTEL " },
      { hotelLocation: "Madina :", hotelName: " SHAZA AL MUNAWARA HOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 74,000",
    days: "14 nights",
  },
  {
    img: Umrahpg10,
    title: "GOLD UMRAH PACKAGE NOVEMBER 2025",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: " SNOOD AJYAD HOTEL (AL SARAYA EMAN) ",
      },
      { hotelLocation: "Madina :", hotelName: " ODST AL MADINAH HOTEL" },
    ],
    departure: "BOM|AMD",
    rate: "₹ 1,03,000",
    days: "14 nights",
  },
  {
    img: Umrahpg11,
    title: "SILVER UMRAH PACKAGE NOVEMBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " RAFEIDIN AL MASI HOTEL " },
      { hotelLocation: "Madina :", hotelName: " BURJ MUKHTARA HOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 82,500",
    days: "14 nights",
  },
  {
    img: Umrahpg12,
    title: "BRONZE UMRAH PACKAGE NOVEMBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " BILAL FUNDAQ HOTEL " },
      { hotelLocation: "Madina :", hotelName: " SHAZA AL MUNAWARAHOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 74,000",
    days: "14 nights",
  },
  {
    img: Umrahpg6,
    title: "GOLD UMRAH PACKAGE DECEMBER 2025",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: " SNOOD AJYAD HOTEL (AL SARAYA EMAN) ",
      },
      { hotelLocation: "Madina :", hotelName: "Madinah Hotel" },
    ],
    departure: "BOM|AMD",
    rate: "₹ 1,04,500",
    days: "14 nights",
  },
  {
    img: Umrahpg5,
    title: "SILVER UMRAH PACKAGE DECEMBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " RAFEIDIN AL MASI HOTEL " },
      { hotelLocation: "Madina :", hotelName: " BURJ MUKHTARA HOTEL" },
    ],
    departure: "BOM",
    rate: "₹83,500",
    days: "14 nights",
  },
  {
    img: Umrahpg4,
    title: "BRONZE UMRAH PACKAGE DECEMBER 2025",
    hotels: [
      { hotelLocation: "Makkah :", hotelName: " BILAL HOTEL " },
      { hotelLocation: "Madina :", hotelName: " KINAN AL MADINAH HOTEL" },
    ],
    departure: "BOM",
    rate: "₹ 74,000",
    days: "14 nights",
  },
];

export const umrahDetailData = [
  {
    id: 1,
    title: "Umrah Packages: A Spiritual Voyage with Bakhla Tours & Travels",
    disc: (
      <>
        <p>
          At Hijrat Tours & Travels, we understand that Umrah packages are more
          than just a journey—it’s a profound spiritual experience that
          transforms your heart and soul. Whether you are stepping into the
          sacred lands for the first time or returning to renew your connection
          with Allah, we’re here to make your pilgrimage effortless and
          fulfilling. Our diverse range of Umrah packages offers flexibility,
          comfort, and value, ensuring that your journey is as peaceful and
          enriching as possible.
        </p>
        <p>
          Our dedicated team will help you navigate every step of your Umrah
          tour, from visa arrangements to accommodations and guided services, as
          well as other essential requirements. Discover the sacredness of
          Makkah and Madinah with Bakhla Tours & Travels Pvt. Ltd., and let us
          guide you on this sacred path.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Why Choose Bakhla Tours for Your Umrah Packages?",
    disc: (
      <>
        <p>
          When it comes to arranging your Umrah packages, trust Hijrat Tours &
          Travels to deliver a service that goes beyond expectations. Here are a
          few reasons why we are the preferred choice:
        </p>
        <ul>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">Trusted Expertise:</strong> With
            years of experience in organizing Umrah tours, Hijrat Tours provides
            detailed attention to your comfort and convenience.
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Budget Umrah packages:
            </strong>{" "}
            These tours are designed to accommodate a range of financial plans,
            ensuring that everyone has the opportunity to fulfill this spiritual
            obligation.
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">Affordable Packages:</strong> All
            the packages are designed keeping in mind the requirements of our
            Hajjis in the best possible budget. At Hijrat Tours, we take pride
            in offering the most competitive rates, making us the Best Umrah
            tour package provider. Our commitment to providing the best value
            ensures you receive exceptional service at unbeatable prices.
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">
              Tailored Itineraries:
            </strong>{" "}
            Whether you’re seeking a luxury Umrah package or a low-price Umrah
            package, we offer a range of options to fit every need. Simply state
            your requirements to us, and we will provide you with amazing deals
            accordingly.
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">Ease and Convenience:</strong> We
            handle all the logistics, from Umrah flight tickets to
            accommodation, transport, and visa services, so you can focus
            entirely on your spiritual journey. Our Umrah packages are designed
            to provide pilgrims with a hassle-free and enriching all-inclusive
            pilgrimage experience, filled with peace and devotion.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Affordable and Luxurious Umrah Packages",
    disc: (
      <>
        {" "}
        <p>
          Hijrat Tours offers a variety of{" "}
          <strong className="text-[#ddb66a]">Umrah packages 2025</strong> for
          all kinds of travelers. Whether you’re traveling as a couple, a
          family, or in a group, our services are flexible to meet your unique
          needs.{" "}
        </p>
        <div>
          <h2 className="text-[#ddb66a]">Budget Umrah Packages</h2>
          <p>
            For those seeking an affordable experience, our budget Umrah
            packages offer essential services at a highly competitive price.
            This is the cheapest Umrah package in our range, but rest assured,
            we maintain the high standards and reputation of our brand. You’ll
            stay in comfortable hotels, enjoy convenient shuttle services to
            Masjid al-Haram, and indulge in delicious meals. It’s the perfect
            blend of comfort and affordability, ensuring a fulfilling Umrah
            experience without compromising on quality.
          </p>
        </div>
        <div>
          <h2 className="text-[#ddb66a]">Silver Umrah Package:</h2>
          <p>
            Our Silver Umrah Package strikes the perfect balance between comfort
            and affordability. Designed for pilgrims seeking a better level of
            convenience without the premium cost, this package offers
            comfortable accommodations at walking distance to the Masjid
            al-Haram, all transportation, and delicious meals. With our Silver
            Umrah Package, you’ll enjoy a more enriching experience. Ideal for
            those looking for a well-rounded Umrah package at a great price.
          </p>
        </div>
        <div>
          <h2 className="text-[#ddb66a]">Smart-Luxury Umrah Packages:</h2>
          <p>
            For those seeking a more indulgent experience, our Smart-Luxury Gold
            Umrah packages include hotels as close as a few short minutes walk
            to the Haram Shareef, all transportation, and the best services to
            ensure your journey is nothing short of extraordinary. Enjoy
            enhanced comfort, wide-spread Indian meals, and closer proximity to
            the Haram.
          </p>
        </div>
        <div>
          <h2 className="text-[#ddb66a]">Family Umrah Packages:</h2>
          <p>
            Our Umrah family packages are designed to offer a smooth experience
            for families. We understand the unique needs of families traveling
            together, and our packages ensure that everyone is well taken care
            of. With family-friendly accommodation and dedicated support, your
            pilgrimage will be memorable for all the right reasons.{" "}
          </p>
        </div>
        <div>
          <h2>
            The Perfect Family Holiday: Umrah Packages for a Spiritual Vacation
          </h2>
          <p>
            When the holiday season arrives and you’re looking for the perfect
            family vacation, the Vacation Umrah Package is the ultimate choice.
            It’s where your family can connect with Islam in the most beautiful
            environment on earth and become guests of Allah. At Bakhla Tours, we
            offer special Umrah holiday packages designed to provide your family
            with an unforgettable experience, especially during school breaks
            like Diwali, Christmas, and summer vacations. Let Makkah and Madinah
            guide your children closer to Allah, showing them the true beauty of
            Islam in a way no other place can.{" "}
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    title: "High Season and Low Season Umrah Packages",
    disc: (
      <>
        <p>
          Choosing the right time to perform Umrah is crucial for a smooth and
          fulfilling pilgrimage. We offer high-season and low-season Umrah
          packages to cater to every pilgrim’s needs.
        </p>
        <div>
          <h3 className="text-[#ddb66a]">High Season Umrah Packages:</h3>
          <p>
            The high season for Umrah usually coincides with the Islamic months
            of Ramadan and immediately after hajj season ends, when pilgrims
            from around the world travel to the holy cities of Makkah and
            Madinah. During this time, the demand for Umrah packages is high,
            and prices tend to rise. However, the spiritual atmosphere is
            unparalleled, with thousands of Muslims coming together for prayer
            and reflection.
          </p>
          <ul>
            <li>
              {" "}
              <strong className="text-[#ddb66a]">Peak Season:</strong> Ramadan
              and Dhul-Hijjah{" "}
            </li>
            <li>
              {" "}
              <strong className="text-[#ddb66a]">Cost:</strong> Higher due to
              increased demand, but Hijrat Tours ensures competitive pricing.{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#ddb66a]">Low Season Umrah Packages:</h3>
          <p>
            If you prefer a quieter and more intimate experience, our low-season
            Umrah packages are ideal. This period generally falls outside
            Ramadan and the Hajj season, allowing pilgrims to perform Umrah in
            peace and tranquility. The low season offers lower prices, fewer
            crowds, and a more relaxed atmosphere.
          </p>
          <ul>
            <li>
              {" "}
              <strong className="text-[#ddb66a]">Off</strong>-Peak Season:
              Post-Ramadan, early and late months{" "}
            </li>
            <li>
              {" "}
              <strong className="text-[#ddb66a]">Cost:</strong> More affordable,
              offering great value for pilgrims
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: "Which Places Will You Visit Duraing Ziarat?",
    disc: (
      <>
        <p>
          When you perform Umrah, your journey isn’t just about performing the
          rituals in the holy cities—it’s also about visiting the sacred places
          that hold immense historical and spiritual significance. Here are some
          of the Ziyarat points you can visit as part of your Umrah tour
          package:
        </p>
        <div>
          <h2 className="text-[#ddb66a]">In Makkah</h2>
          <ul>
            <li>
              <strong className="text-[#ddb66a]">Gaar e Saur:</strong> The cave
              where the Prophet ﷺ and Abu Bakr (RA) took refuge during Hijrah.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Jable Rahmat:</strong> The
              Mount of Mercy, where the Prophet ﷺ delivered the Farewell Sermon
              during Hajj.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Nehr e Zubaida: </strong>A
              Historic water canal built by Queen Zubaida to serve pilgrims in
              Makkah.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Waadi e Muzdalifa: </strong>The
              sacred valley where Hajj pilgrims collect pebbles and spend the
              night.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Masjid e Mashar al Haram:{" "}
              </strong>
              A Masjid marking the sacred site of Muzdalifa mentioned in the
              Qur’an.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Waadi e Mina:</strong> The
              valley of tents where Hajj rituals like Rami (stoning) are
              performed.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Waadi e Muhassar: </strong> The
              cursed valley where the Army of the Elephant was destroyed by
              divine wrath.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Maqam e Zibah e Ismaeel:
              </strong>{" "}
              Believed site of Prophet Ibrahim’s (AS) sacrifice of his son
              Ismaeel (AS).
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Khaif: </strong>A
              Masjid where many Prophets are said to have prayed in Mina.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Jamarat:</strong> The three
              stone pillars symbolizing Shaytaan, stoned during Hajj.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Foothill of Gaar e Hira:{" "}
              </strong>
              Base of the mountain where the Prophet ﷺ received the first
              revelation.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Ijaba: </strong>Site
              where the Prophet ﷺ made three powerful duas—two accepted, one
              withheld.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Jannatul Maala: </strong>
              Historic graveyard in Makkah where Khadijah (RA) and many
              relatives of the Prophet ﷺ rest.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Jinn: </strong>Marks
              the place where a group of jinn accepted Islam at the hands of the
              Prophet ﷺ.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Fatah: </strong>One of
              the sites associated with the Conquest of Makkah.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Shajarah: </strong>
              Site associated with the miraculous testimony of a tree to the
              Prophethood.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[#ddb66a]">In Madina</h2>
          <ul>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Ghamama: </strong>
              Place where Prophet ﷺ offered Eid salah and prayed for rain (Salat
              al-Istisqa).
            </li>
            <li>
              <strong className="text-[#ddb66a]">Jannat ul Baqi: </strong>Sacred
              cemetery in Madinah where many Sahabah and the family of the
              Prophet ﷺ are buried.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Ohud Mountain: </strong>Site of
              the historic Battle of Uhud and the grave of many martyrs.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Sayyidna Amir Hamza’s grave:{" "}
              </strong>
              Final resting place of the Prophet ﷺ’s beloved uncle and Uhud’s
              chief martyr.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Quba: The </strong>
              First Masjid built in Islam, personally laid by the Prophet
              Muhammad ﷺ.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Masjid e Qiblatain: </strong>
              The Masjid where the Qiblah direction changed from Jerusalem to
              Makkah.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Saba Masajid: </strong>Seven
              historic mosques linked to the Battle of the Trench and early
              Islamic history.
            </li>
            <li>
              <strong className="text-[#ddb66a]">Salman Farsi Baug: </strong>
              Believed site of the trench suggested by Salman Farsi (RA) during
              the Battle of Khandaq.
            </li>
          </ul>
        </div>
        <p>
          Our customers trust us because we go above and beyond to deliver a
          seamless Umrah experience, combining exceptional service with genuine
          care. We take pride in our longstanding reputation of serving Hajjis
          across generations. Their parents and grandparents traveled with our
          founders, and now the current generation continues their journey with
          us for Umrah.{" "}
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Comprehensive Umrah Services",
    disc: (
      <>
        <p>
          Hijrat Tours & Travels is committed to making your Umrah pilgrimage as
          easy as possible. Our comprehensive Umrah services include:
        </p>
        <ul>
          <li>
            <strong className="text-[#ddb66a]">Visa Assistance</strong>: We
            handle all the paperwork and visa processing for you.
          </li>
          <li>
            <strong className="text-[#ddb66a]">
              Flight and Hotel Bookings
            </strong>
            : We arrange affordable, comfortable, and convenient flight and
            hotel options as per your packages.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Transportation</strong>:
            Comfortable and reliable A/C transport throughout your journey.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Meals</strong>: Delicious and
            nutritious meals that cater to your Indian taste buds, freshly
            prepared for each time of the day, and served hot.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Guided Tours</strong>: Expert
            guides who will lead you through the religious sites and provide
            valuable insights.
          </li>
          <li>
            <strong className="text-[#ddb66a]">24/7 Support</strong>: Our
            customer service team is available around the clock to assist with
            any concerns or queries.
          </li>
        </ul>
        <div>
          <h3 className="text-[#ddb66a]">
            With Hijrat Tours, your Umrah pilgrimage is in safe hands, ensuring
            a hassle-free and spiritually enriching experience.
          </h3>
          <p>
            The journey of Umrah is an incredibly spiritual experience, and
            Hijrat Tours & Travels is here to guide you every step of the way.
            Whether you are looking for cheap Umrah packages, luxury Umrah
            packages, or something in between, we have the perfect package for
            you. Book your Umrah tour package today and make the most of your
            pilgrimage. Trust Hijrat Tours Pvt. Ltd. to provide you with the
            best services, ensuring your journey to the holy lands is truly
            life-changing and memorable. For further information or to book your
            Umrah packages, visit our website or contact our team for
            personalized assistance.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 7,
    title: "Things to Do in Umrah",
    disc: (
      <>
        <div>
          <p>
            When you travel for Umrah, there are several enriching activities
            and experiences that you should not miss. These include:
          </p>
          <ul>
            <li>
              <strong className="text-[#ddb66a]">Tawaf</strong>: The central act
              of Umrah, where you circumambulate the Kaaba seven times. Perform
              it at least twice a day. Observe the crowd pattern and choose
              non-rush hours for better comfort. Non-rush hours are normally
              around 8 am to 11 am and after midnight.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Drink as much Zam Zam as possible:{" "}
              </strong>
              This holy water cannot be carried in quantities back home and is
              difficult to find back home, so make sure you drink as much as
              holy water as possible while in Makkah and Madinah
            </li>
            <li>
              <strong className="text-[#ddb66a]">Dua at the Multazam:</strong>
              The space between the door of the Kaaba and the Black Stone, where
              prayers are answered. So make dua each time you do tawaf.
            </li>
            <li>
              Must try: Try to touch the kaaba at least once, and also pray two
              rakat namaz in the Haram at least once. But if too crowded, then
              do not attempt these, esp if you are a woman.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Praying in Masjid al-Haram
              </strong>
              : Offering prayers in the holy mosque, where the reward for each
              prayer is multiplied.
            </li>
            <li>
              <strong className="text-[#ddb66a]">
                Visiting the Prophet’s Mosque
              </strong>
              : In Madinah, you can visit the Masjid al-Nabawi, where you can
              offer prayers and pay your respects at the Roza Mubarak of the
              Holy Prophet Muhammad (Salallahu Alaihi Wasallam).
            </li>
          </ul>
        </div>
        <p>
          Your Umrah pilgrimage is more than just rituals—it’s a chance to
          reconnect with your faith and make lasting memories of your journey to
          the holy cities.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Why Our Hajjis Recommend Bakhla Tours for Umrah",
    disc: (
      <>
        <p>
          At Hijrat Tours & Travels, our goal is to provide the best experience
          for all our pilgrims. Here’s why people recommend Hijrat Tours for
          Umrah{" "}
        </p>
        <ul>
          <li>
            <strong className="text-[#ddb66a]">Personalized Attention</strong>:
            We understand the unique needs of every pilgrim, ensuring a
            personalized experience.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Affordable Pricing</strong>: We
            offer the <strong>lowest-priced Umrah packages</strong> in every
            category without compromising on comfort or quality.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Reliability</strong>: Our
            packages are designed with your convenience and comfort in mind,
            ensuring a stress-free pilgrimage.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Experienced Team</strong>: Our
            knowledgeable staff provides comprehensive support, from visa
            processing to travel arrangements and stays in Makkah and Madina
          </li>
          <li>
            <strong className="text-[#ddb66a]">Amazing food:</strong> We
            alhamdulillah have our Indian chefs who carefully curate food as per
            the Indian taste buds so that you can feel at Home Away from Home
            with rich Indian Flavours.
          </li>
          <li>
            <strong className="text-[#ddb66a]">Guidance</strong>: We don’t just
            focus on the logistics; we also provide guidance, helping you make
            the most of your journey.
          </li>
        </ul>

        <p>
          Our dedicated team will help you navigate every step of your Umrah
          tour, from visa arrangements to accommodations and guided services, as
          well as other essential requirements. Discover the sacredness of
          Makkah and Madinah with Bakhla Tours & Travels Pvt. Ltd., and let us
          guide you on this sacred path.
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: "Umrah Packages: A Spiritual Voyage with Bakhla Tours & Travels",
    disc: (
      <>
        <p>
          At Bakhla Tours & Travels, we understand that Umrah packages are more
          than just a journey—it’s a profound spiritual experience that
          transforms your heart and soul. Whether you are stepping into the
          sacred lands for the first time or returning to renew your connection
          with Allah, we’re here to make your pilgrimage effortless and
          fulfilling. Our diverse range of Umrah packages offers flexibility,
          comfort, and value, ensuring that your journey is as peaceful and
          enriching as possible.
        </p>
        <p>
          Our dedicated team will help you navigate every step of your Umrah
          tour, from visa arrangements to accommodations and guided services, as
          well as other essential requirements. Discover the sacredness of
          Makkah and Madinah with Bakhla Tours & Travels Pvt. Ltd., and let us
          guide you on this sacred path.
        </p>
      </>
    ),
  },
];

export const umrahFaqData = [
  {
    id: 1,
    title: "How much does an Umrah package cost?",
    para: "The cost of an Umrah package depends on the type of package you choose. Our budget packages start at INR 65,500, while Smart-luxury packages start at INR 105,000. Contact our sales team for the latest prices and updates and best deals, and amazing offers.",
  },
  {
    id: 2,
    title: "Can I book a 15-day Umrah package?",
    para: "Yes, we offer 15-day Umrah packages that include accommodation, flights, transport, meals, guided tours, and much more. All our packages are all-inclusive packages with everything that you need for an Umrah Journey to Makkah.",
  },
  {
    id: 3,
    title: "Are the prices of Umrah packages flexible?",
    para: "Yes, we offer a range of Umrah packages to suit different budgets and requirements. You can choose between budget and luxury options based on your preferences. Get in touch with our sales team for the latest pricing, exclusive deals, and amazing offers.",
  },
  {
    id: 4,
    title: "Do you offer group Umrah packages?",
    para: "Yes, we offer customized group Umrah packages for families, friends, or organizations looking to travel together. Also, we offer great deals on our all-inclusive packages for big groups. Reach out to our sales team for the most up-to-date prices, special deals, and incredible offers.",
  },
];

export const ramadanCardData = [
  {
    img: ramadanimg1,
    title: "RAMADAN UMRAH 2025 GOLD PACKAGE – (WITH AIR TICKETS)",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: "  Snood Ajyad",
      },
      { hotelLocation: "Madina :", hotelName: " Odst Al Madinah" },
      { hotelLocation: "Eid :", hotelName: " Eid in Madina" },
    ],
    rate: "₹ 1,08,500",
    days: "15 nights",
  },
  {
    img: ramadanimg2,
    title: "RAMADAN UMRAH 2025 GOLD PACKAGE – (WITH AIR TICKETS)",
    hotels: [
      {
        hotelLocation: "Makkah :",
        hotelName: "  Snood Ajyad",
      },
      { hotelLocation: "Madina :", hotelName: " Odst Al Madinah" },
      { hotelLocation: "Eid :", hotelName: " Eid in Madina" },
    ],
    rate: "₹ 1,08,500",
    days: "15 nights",
  },
];

export const ramadanDetailData = [
  {
    id: 1,
    title: "Umrah Packages: A Spiritual Voyage with Bakhla Tours & Travels",
    disc: (
      <div className="flex flex-col justify-center items-center">
        <h2 className=" py-4 text-[#ddb66a] text-xl">Ramadan Umrah Package</h2>
        <p>
          Ramadan is the holiest month of all the months in Islam. Performing an{" "}
          <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
            Umrah
          </Link>{" "}
          in the month of Ramadan is equivalent to the rewards of hajj. There
          are many hadith on performing Umrah in Ramadan explaining its
          importance and advantages. The difference between Ramadan{" "}
          <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
            Umrah Package
          </Link>
          and
          <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
            Hajj package
          </Link>{" "}
          is that Hajj can be performed only in the 5 days of Zill-Hijjah and
          Umrah can be performed anytime during the month of Ramadan.
        </p>
        <p>
          According to the Hadith Muslims who perform good deeds in the month of
          Ramadan are awarded seventy times more than on any normal day. The
          above statement shows the importance of doing any good deed then why
          not perform Umrah and get rewards that one gets in Hajj. Traveling in
          the month of Ramadan will be full of challenges and hence you might
          need the best travel agency in Hajj and Umrah industry which is Bakhla
          Tours & Travels Pvt. Ltd. Bakhla Tours has been handing over the Best
          Umrah and Ramadan Umrah Packages for Indian pilgrims for the last 30
          years.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Different types of Ramadan Umrah Package",
    disc: (
      <>
        <div className="flex flex-col justify-center items-center  ">
          <h2 className="text-[#ddb66a] py-3 text-xl">
            Shabaan Ramadan Umrah Tour
          </h2>
          <p>
            This tour is a moderate-ranged Ramadaan Umrah Package. Pilgrims
            leave for the religious journey in the month of Shabaan and stay in
            the holy city of Makkah for 7 days and the rest 7 days in Madinah.
            The Shabaan-Ramadan Umrah is affordable as before Ramadan it is
            considered as off-season and Ramadan is a very peak season for Umrah
            hence the package cost get balanced.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#ddb66a] py-3 text-xl">
            Last 15 Days Ramadan Umrah
          </h2>
          <p>
            The Last 15 days packages of Ramazan is the most popular package.
            Pilgrims usually want to spend the last fifteen days of fasting in
            the holy cities of Makkah and Madinah. The first half of the tour
            that is the first 7 days of the holy month is spent in Makkah and
            the second half is spent in Madinah. For best{" "}
            <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
              Umrah Packages
            </Link>{" "}
            click on the blue link.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#ddb66a] py-3 text-xl">
            Last 20 Days Ramadan Umrah Package
          </h2>
          <p>
            Similar to the fifteen days package there is a twenty days package
            of Ramadan Umrah as well. Pilgrims who would like to stay longer in
            the holy cities have suggested this package. The Second Ashra of the
            holy month of Ramadan is spent in Makkah as pilgrims can perform
            Umrah with all their strength and their heart. The Last Ashra is
            spent in the beautiful and the best city which is Madinah and Eid is
            celebrated by the pilgrims in their own city.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#ddb66a] py-3 text-xl">Full Month Ramadan</h2>
          <p>
            Pilgrims can perform Umrah in Ramadan and stay in Makkah and Madinah
            for the whole month. The whole month is divided into twenty days and
            the last ten days. If the first twenty days of Ramazan is spent in
            Makkah Then Eid will be celebrated in Madinah this is the most
            common package irtenary which is easily affordable. While some
            pilgrims demand celebrating Eid in Makkah which is quite costly.
            During the last ten days of Ramazan prices of everything is on the
            top as it is the most peak time of the whole Umrah season.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[#ddb66a] py-3 text-xl">
            Customized Ramadan Umrah Tour
          </h2>
          <p>
            <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
              Customized Umrah package
            </Link>{" "}
            is suggested only for the pilgrims who have been familiar with
            performing Umrah before. Customizing Ramadan Umrah Packages can be
            very easily done with the help of Bakhla Tours & Travels Pvt. Ltd.,
            We provide the pilgrims all facilities which are required in a
            complete tour package. A package that is customized will include
            everything according to your convenience and budget. Hotels,
            transport, and food everything will be private for you and your
            family only. This can be a{" "}
            <strong className="text-[#ddb66a]">
              VIP Ramadan Umrah Package
            </strong>{" "}
            if you have the right budget to spend with our assistance.
          </p>
          <img src={divImg} className="w-full h-full py-4" />
        </div>
      </>
    ),
  },
  {
    id: 3,
    title:
      "Why Bakhla Tours & Travels Pvt. Ltd. is superior to other Travel agencies?",
    disc: (
      <>
        <p>
          A Ramadan Umrah Package should be a complete pilgrimage travel
          package. When you plan for Ramadan Umrah Tour Package you are looking
          for the best facilities. Here at Bakhla Tours, we are glad to announce
          that we provide you with an all-in Ramadan{" "}
          <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
            Umrah Package
          </Link>{" "}
          for you and your companions, in which we provide almost everything
          like hotels, transportation, flight tickets, iftaar arrangements for
          the pilgrims, visa, and all the other important factors.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Best Accommodations in Ramadan Umrah Package ",
    disc: (
      <>
        <p>
          Accommodations in any travel package are a very crucial aspect. Every
          pilgrim is mainly concerned about the type of accommodations provided
          by the travel agency. Bakhla Tours gets the best prices of the finest
          hotels in Makkah and Madinah for its pilgrims. We have a variety of
          hotels ranging from VIP hotels to different star categories. As we get
          the best rates for the hotels in Makkah and Madinah we can release
          competitive package prices of{" "}
          <Link className="text-[#ddb66a]" to={"/umrahpackages"}>
            Umrah Tour
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Affordable Flights, Visa, and Transportation",
    disc: (
      <>
        <p>
          Having experience of more than 30 years in the{" "}
          <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
            Umrah Tour
          </Link>{" "}
          industry has its own perks. We can get you fast visa approvals from
          the Saudi consulate. Serving pilgrims with the best services according
          to their package has earned us a very good reputation in the market.
          Our well-known reputation has its reflection on the airline industry
          as we purchase the finest flight tickets for our pilgrims in huge
          quantities. We can get you business class flight tickets at a very
          affordable price. Transport will be provided to you anywhere in Saudi
          Arabia. We can arrange any kind of transport for our pilgrims.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Fascinating Cuisine",
    disc: (
      <>
        <p>
          Food will not at all be a problem for you if you are traveling to
          Umrah or{" "}
          <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
            Hajj
          </Link>{" "}
          with Hijrat Tours. Providing the best quality and taste of food to our
          pilgrims are some of the important objectives of our company. We have
          a professional team of chefs with us who will provide you with the
          best Indian food at the Umrah or
          <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
            Hajj Tour
          </Link>
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Value For Money Packages",
    disc: (
      <>
        <p>
          Bakhla Tours will hand over you the best package. We guarantee that we
          along with our team could carve out for you the best Umrah and{" "}
          <Link className="text-[#ddb66a]" to={"/hajjpackages"}>
            Hajj Tour packages
          </Link>{" "}
          from Mumbai, Ahmedabad, Kashmir, Chennai, Hyderabad, and Bangalore or
          from anywhere in India. Call / Whatsapp Us on :{" "}
          <strong className="text-[#ddb66a]">+917977199070</strong>
        </p>
      </>
    ),
  },
];
export const ziyaratDetailData = [
  {
    id: 1,
    title: "Baghdad Ziyarat Packages",
    disc: (
      <div>
        <p>
          Join the Spiritual fleet to Baghdad with a special range of Baghdad
          Ziyarat tour packages by Hijrat Tours and Travels in the celebratory
          11vi Shareef.
        </p>
        <p>
          Ghaus al-Azam Dastageer, the Sultan al-Awliya, is a Highly esteemed
          and prominent figure in Islam. He was honoured with the title of
          “Muhiyuddin”, meaning “Reviver of the Religion.” Also well known to be
          a man with a wasi heart (i.e. a gracious person, who always helps
          whoever comes to him in need). His spiritual status is so elevated
          that those who invoke his name for help, find immediate guidance. A
          blessing that will persist until the day of resurrection for all his
          believers. Devotees of Ghaus Paak seize every opportunity to visit his
          shrine and the holy city of Baghdad, especially during the 11vi
          Shareef celebrations.
        </p>
        <p>
          {" "}
          In recognition of the deep devotion to Ghaus al-Azam Dastageer,{" "}
          <Link className="text-[#ddb66a]" to={"/"}>
            Hijrat Tours and Travels Pvt. Ltd.
          </Link>
          has launched a special range for Baghdad Ziyarat Packages 2024. These
          packages are designed to facilitate visits to his shrine at affordable
          prices while ensuring comfortable and classy accommodations. Our
          pilgrim’s comfort and necessities are all kept in mind to make sure
          that clients have everything that they need from basic necessities to
          classy luxurious amenities, we have it all covered to suit various
          preferences and budgets. We are dedicated to offering exceptional
          Ziyarat all-inclusive packages that meet all your spiritual and travel
          needs, ensuring a memorable and enriching experience.
        </p>
        <h3 className="text-[#ddb66a]">
          {" "}
          We offer three distinct Categories in Baghdad packages:
        </h3>
        <ol>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">Silver Baghdad Packages</strong>
          </li>
          <li>
            {" "}
            <strong className="text-[#ddb66a]">Gold Baghdad Packages </strong>
          </li>
          <li>
            <strong className="text-[#ddb66a]">
              Platinum Baghdad Packages
            </strong>
          </li>
        </ol>
        <p>
          These packages provide an enriching journey to Baghdad, Najaf, and
          Karbala. A unique opportunity for Muslims wanting to visit the shrine
          of Ghaus al-Azam Dastageer (Abdul Qadir Gilani, the Hanbali scholar)
          and other significant religious sites in the holy cities of Iraq.
          These year-round available Iraq ziarat packages allow pilgrims to
          connect deeply with beloved Gaus Al Azam Dastageer and his history
          first-hand.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Which Ziyarat places are included in Baghdad Ziyarat Packages?",
    disc: (
      <div>
        <p>
          Baghdad Sharif Packages are meticulously planned to ensure you make
          the most of your spiritual journey.
          <strong className="text-[#ddb66a] py-2">
            Here is a list of our Ziyarat itinerary:
          </strong>
        </p>
        <div>
          <h3 className="text-[#ddb66a] text-2xl font-semibold py-2">
            72 Sohda-e-Ikraam:
          </h3>
          <h4 className="text-[#ddb66a] py-2">BAGHDAD ZIYARAT</h4>
          <ol>
            <li>★ Hazrat Sheikh Abdul Qadir Jeelani</li>
            <li>★ Hazrat Sheikh Abdul Jabbar Jeelani</li>
            <li>★ Hazrat Sheikh Abu Saleh Jeelani</li>
            <li>★ Hazrat Imam e Azam Abu Hanifa</li>
            <li>★ Hazrat Imam Ghazali</li>
            <li>★ Hazrat Sheikh Junaid e Baghdadi</li>
            <li>★ Hazrat Huzaifa bin Yamani</li>
            <li>★ Hazrat Jabir Bin Abdullah Ansari</li>
            <li>★ Hazrat Imam Mohammed Tahir (Sahabiye Rasool)</li>
            <li>★ Hazrat Mohammed Baqir</li>
            <li>★ Hazrat Salman Farsi</li>
            <li>★ Hazrat Zunoon Misri</li>
            <li>★ Nabi Allah Hazrat Behlul Dana</li>
            <li>★ Hazrat Sheikh Maruf Karkhi</li>
            <li>★ Hazrat Abubakar Shibli</li>
            <li>★ Hazrat Hasan Noori</li>
            <li>★ Hazrat Sheikh Umar Shahabuddin Soharwardi</li>
            <li>★ Hazrat Sheikh Hasan Bashri</li>
            <li>★ Hazrat Mansur Al-Hallaj</li>
            <li>★ Hazrat Imam Ahmad Bin Hanbal</li>
            <li>★ Hazrat Sheikh Habib Ajmi</li>
          </ol>
          <h4 className="text-[#ddb66a] py-2">ZIYARAT-E-KARBALA</h4>
          <ol>
            <li>★ Nawasa e Rasool Hazrat Imam E Hussain</li>
            <li>★ Hazrat Sayadina Ali Akbar</li>
            <li>★ Hazrat Sayadina Ali Asgar</li>
            <li>★ Hazrat Abbas Alambardar</li>
            <li>★ Wah jagah Jaha Imam Hussain Shaheed hue the</li>
          </ol>
          <h4 className="text-[#ddb66a] py-2">ZIYARAT-E-KAAZMAIN</h4>
          <ol>
            <li>★ Hazrat Imam Musa Kazim</li>
            <li>★ Hazrat Imam Mohammed Taqi</li>
          </ol>
          <h4 className="text-[#ddb66a] py-2">ZIYARAT-E-NAAJAF</h4>
          <ol>
            <li>★ Hazrat Ali Roza Mubarak</li>
            <li>★ Makame Mehndi</li>
          </ol>
          <h4 className="text-[#ddb66a] py-2">ZIYARAT-E-HILLAH</h4>
          <ol>
            <li>★ Hazrat Ayub</li>
            <li>★ Bibi Rahima (Hazrat Ayub’s Wife)</li>
            <li>★ Woh 2 wells jiske Pani se Hazrat Ayub ko Shifa hui thi</li>
          </ol>
          <h4 className="text-[#ddb66a] py-2">ZIYARAT-E-KUFA</h4>
          <ol>
            <li>★ Masjid e Kufa</li>
            <li>★ Baith (House) Hazrat Ali</li>
            <li>★ Hazrat Muslim Bin Akil</li>
            <li>★ Hazrat Hani Bin Urva</li>
            <li>★ Mehrab-E-Hazrat Ali</li>
            <li>★ Dahan Hazrat Ali Pe Qatilana Hamia Hua Tha</li>
            <li>★ Tandoor-E-Nooh</li>
            <li>★ Dahan Se Tufane Nooh Shuru Hua Thal</li>
          </ol>
        </div>
      </div>
    ),
  },
];

export const ziyaratExpandData = [
  {
    id: 1,
    title: "Baghdad Ziyarat Tours 2024 – Advantages",
    disc: (
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Erasing of Sins
        </h3>
        <div className="flex  justify-center items-center gap-2">
          <img src={ibadat} className="w-[120px] h-[80px]"></img>
          <p>
            Every human being seeks the opportunity to erase their sins.
            Visiting Ziyarat sites and seeking forgiveness at these sacred sites
            provides a chance for spiritual relief and cleansing, enabling
            pilgrims to start anew with a clean slate.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Strengthening Faith
        </h3>
        <div className="flex  justify-center items-center gap-2">
          <img src={faith} className="w-[120px] h-[80px]"></img>
          <p>
            The journey to these holy sites strengthens one’s faith and
            commitment to Islamic teachings. Visiting the sites of pivotal
            importance in Islamic history can profoundly enhance one’s
            comprehension and understanding of their faith. It’s an experience
            that connects individuals with their heritage and beliefs on a
            deeper level, offering a link to the past and an impact on the
            present.
          </p>
        </div>

        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Group Tours and Community Building
        </h3>
        <div className="flex  justify-center items-center gap-2">
          <img src={group} className="w-[120px] h-[80px]"></img>
          <p>
            Travelling in group tours fosters a sense of community and support.
            This shared experience deepens the journey’s significance, enriching
            it in ways that resonate within the heart and soul.
          </p>
        </div>

        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Spiritual Renewal
        </h3>
        <div className="flex  justify-center items-center gap-2">
          <img src={rewards} className="w-[120px] h-[80px]"></img>
          <p>
            Performing Ziyarat offers a chance to rejuvenate your spirit and
            renew your faith. Visiting holy sites and praying in sacred spaces
            allows pilgrims to feel a profound connection to Islam and receive
            divine blessings of Ghaus Paak and the Shohda’s.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Which is the best Tour for Baghdad Ziyarat Packages?",
    disc: (
      <div className="flex flex-col justify-center items-center">
        <h2>
          Hijrat Tours and Travels is the best tour for Baghdad Ziyarat Packages
          2024-2025.
        </h2>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Reliable Tour Operators
        </h3>
        <div className="flex  justify-center items-center gap-2">
          <img src={personal} className="w-[120px] h-[80px]"></img>
          <p>
            We have been committed to providing reliable and affordable Hajj,
            Umrah and Baghdad Ziyarat Services for 35 Years now. Our good credit
            in the market and happy clients with over 1000+ satisfied customer
            families have led us to establish a reputation in the industry as
            the most reputed and trustworthy Hajj, Umrah and Ziyarat pilgrimage
            service providers.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Exceptional Services
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={service} className="w-[120px] h-[180px]"></img>
          <p>
            Commitment in the travel industry is of utmost importance, and we
            have got you covered. Above all, our primary objective is to fulfill
            the commitments we have made to our pilgrims. The itinerary and
            rates we publish in our brochure are final, and those services are
            very professionally provided by our staff members. Exceptions are
            made in situations like emergencies or pandemics, where changes can
            be expected.Our primary objective is to fulfil all the requirements
            of our Pilgrims during their Ziyarat Packages of Baghdad, Najaf and
            Karbala. Reliability and commitment are the cornerstones of our
            service goals. We take pride in saying that every detail of the
            itinerary is meticulously planned and every promise made to our
            pilgrims fulfilled. Our experienced staff members are dedicated to
            providing professional and courteous service, making your journey
            smooth and enjoyable. Enriching the sacred journey with memories of
            a lifetime.
          </p>
        </div>

        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Universal policies
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={universal} className="w-[120px] h-[80px]"></img>
          <p>
            Our booking and cancellation policies are fair and transparent and
            adhere to universal standards for all our pilgrims worldwide. No
            matter where you book from, you will be given complete
            attention/assistance, fair prices and deals.
          </p>
        </div>

        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Official Recognition
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={affair} className="w-[120px] h-[80px]"></img>
          <p>
            We are officially recognised by key organisations such as IATA,
            AIHUTOA, and MOMA. Also, our recognition from the Indian and Saudi
            Govt. reflects our credibility and dedication to serving pilgrims
            with years and years of experience and trust.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Affordable Packages
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={cash} className="w-[120px] h-[80px]"></img>
          <p>
            We offer a range of Budget-friendly packages without compromising on
            quality. From VIP Packages to Affordable Packages to Baghdad
            Shareef. These Packages are fairly priced ensuring a fulfilling
            experience for all. Our goal is to make this sacred journey
            accessible to as many pilgrims as possible. Thus our slogan is “The
            Better Pilgrimage” which means we provide excellent value without
            compromising on quality.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Comfortable A/C Transportation
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={bus} className="w-[120px] h-[80px]"></img>
          <p>
            Traveling between holy sites can be challenging, but with our
            well-organized A/C transportation services, you can move comfortably
            from one site to another. With air-conditioned group buses or
            at-cost private cars and knowledgeable drivers who know all the
            routes making sure that your journey is as convenient as possible.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Comprehensive Ziyarat
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={comprehensive} className="w-[120px] h-[80px]"></img>
          <p>
            Ziyarat services are designed to deepen your spiritual connection
            through guided visits to significant religious sites in Baghdad,
            Najaf, and Karbala. Experienced guides provide insightful Hadees,
            historical context, sunna and other significance of each site,
            enhancing the understanding and appreciation of Islam. Ensuring that
            you have ample time for prayers, reflection, and personal devotion
            at each location esp. at Gaus Paak Darga.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Cozy Accommodations
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={hotel} className="w-[120px] h-[80px]"></img>
          <p>
            We offer a range of accommodation options, from 3-star to 5-star
            hotels, each carefully selected for their comfort, amenities,
            affordability and proximity to significant Ziyarat sites. Whether
            you prefer a luxurious stay or a Budget-Friendly Smart-Luxury 3-star
            Accommodation Hotel, our stay options provide a restful and pleasant
            environment.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Exceptional Culinary Experience
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={logo} className="w-[120px] h-[80px]"></img>
          <p>
            Nourishment is essential for every spiritual journey to give you the
            most required strength for prayers. Our culinary services offer a
            variety of delicious and nutritious buffet meals, carefully prepared
            by our in-house chefs to cater to the tastes requirements of
            Indians. Ensuring that each meal is a delightful experience.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Shohda Ziyarat
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={shoda} className="w-[120px] h-[80px]"></img>
          <p>
            In addition to visiting the shrine of Ghaus Al Azam Dastageer, our
            package offers ziyarat of other 72 Shohda ikraam to enrich your
            understanding of history and struggle for Islam. Embark on this
            spiritually enriching Baghdad sharif tour package(via link) with
            guided visits to significant Ziyarat sites in Baghdad, Karbala and
            Najaf and deepen your connection to Allah.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          24/7 Customer Support
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={hours} className="w-[120px] h-[80px]"></img>
          <p>
            A dedicated customer support team is available 24/7 to assist with
            any questions or concerns. Though they are travel arrangements,
            accommodations, or local recommendations, whenever you are stuck our
            team is committed to providing prompt and courteous service, making
            your pilgrimage as stress-free as possible.
          </p>
        </div>
        <h3 className="text-[#ddb66a] text-2xl font-semibold font-serif py-4">
          Customised Packages
        </h3>
        <div className="flex  justify-center items-center gap-4">
          <img src={customize} className="w-[120px] h-[80px]"></img>
          <p>
            We understand that each pilgrim’s needs are unique, so special
            attention is given to details when curating packages. Baghdad Sharif
            Gyarvi Packages from Mumbai are designed to offer flexibility and
            affordability without compromising comfort. With a variety of
            options available, we guarantee a perfect fit for everyone, making
            your spiritual journey as comfortable and memorable as possible.
          </p>
        </div>
      </div>
    ),
  },
];
export const ziyaratPackagesPageData = [
  {
    img: ziyarat1,
    title: "SILVER ZIYARAT PACKAGE ZT-01",
    hotels: [
      { hotelLocation: "Baghdad :", hotelName: "SWAN LAKE" },
      { hotelLocation: "Najaf :", hotelName: "DHIOUF AL IMAM 2" },
      { hotelLocation: "Karbala :", hotelName: "SHAMS KARBALA" },
    ],
    departure: "MUMBAI",
    rate: "₹ 1,03,000",
    days: "11 days",
    description:
      "Enjoy a spiritual journey with our Silver Ziyarat Package ZT-01. Stay at quality hotels in Baghdad, Najaf, and Karbala with guided ziyarats and return flights from Mumbai. Meals, local transport, and assistance by experienced group leaders are included.",
  },
  {
    img: ziyarat2,
    title: "GOLD ZIYARAT PACKAGE ZT-02",
    hotels: [
      { hotelLocation: "Baghdad :", hotelName: "AL PASHA PALACE" },
      { hotelLocation: "Najaf :", hotelName: "DHIOUF AL IMAM 2" },
      { hotelLocation: "Karbala :", hotelName: "SHAMS KARBALA" },
    ],
    departure: "MUMBAI",
    rate: "₹ 1,19,000",
    days: "11 days",
    description:
      "Our Gold Ziyarat Package ZT-02 offers premium hospitality and a comfortable pilgrimage. The package includes return flights from Mumbai, stays at renowned hotels, meals, guided ziyarats, and full assistance throughout your journey.",
  },
  {
    img: ziyarat3,
    title: "PLATINUM ZIYARAT PACKAGE ZT-03",
    hotels: [
      { hotelLocation: "Baghdad :", hotelName: "PALESTINE INTERNATIONAL" },
      { hotelLocation: "Najaf :", hotelName: "QASR AL DHIYAFA" },
      { hotelLocation: "Karbala :", hotelName: "BURJ MURTAZA" },
    ],
    departure: "MUMBAI",
    rate: "₹ 1,41,000",
    days: "11 days",
    description:
      "With the Platinum Ziyarat Package ZT-03, experience luxury and comfort. Stay at premium hotels across Baghdad, Najaf, and Karbala. Package includes return flights from Mumbai, full meals, ziyarats, and 24/7 assistance by our dedicated team.",
  },
  {
    img: ziyarat4,
    title: "SILVER ZIYARAT PACKAGE ZT-04",
    hotels: [
      { hotelLocation: "Baghdad :", hotelName: "SWAN LAKE" },
      { hotelLocation: "Najaf :", hotelName: "DHIOUF AL IMAM 2" },
      { hotelLocation: "Karbala :", hotelName: "SHAMS KARBALA" },
    ],
    departure: "MUMBAI",
    rate: "₹ 1,11,000",
    days: "11 days",
    description:
      "Silver Ziyarat Package ZT-04 is designed for comfort and affordability. Stay at trusted hotels, enjoy guided ziyarats, meals, and seamless travel with return flights from Mumbai.",
  },
  {
    img: ziyarat5,
    title: "GOLD ZIYARAT PACKAGE ZT-05",
    hotels: [
      { hotelLocation: "Baghdad :", hotelName: "AL PASHA PALACE" },
      { hotelLocation: "Najaf :", hotelName: "DHIOUF AL IMAM 2" },
      { hotelLocation: "Karbala :", hotelName: "SHAMS KARBALA" },
    ],
    departure: "MUMBAI",
    rate: "₹ 1,27,000",
    days: "11 days",
    description:
      "Gold Ziyarat Package ZT-05 offers a balance of comfort and value. Includes flights from Mumbai, quality hotel stays, guided ziyarats, meals, and reliable support for your pilgrimage.",
  },
  {
    img: ziyarat6,
    title: "PLATINUM ZIYARAT PACKAGE ZT-06",
    hotels: [
      { hotelLocation: "Baghdad :", hotelName: "PALESTINE INTERNATIONAL" },
      { hotelLocation: "Najaf :", hotelName: "QASR AL DHIYAFA" },
      { hotelLocation: "Karbala :", hotelName: "BURJ MURTAZA" },
    ],
    departure: "MUMBAI",
    rate: "₹ 1,49,000",
    days: "11 days",
    description:
      "Platinum Ziyarat Package ZT-06 brings unmatched comfort with top-tier hotels. The package covers return flights from Mumbai, luxury stays, full meals, guided ziyarats, and complete travel assistance.",
  },
];
