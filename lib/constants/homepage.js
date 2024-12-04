import { anand } from "./phonebook";

const prefix = "/hero/";
const shared = "/shared/"

export const backgroundImages = ["landmarktowerpool.jpeg", "albustanpool.jpeg", "landmarktowerpool2.jpeg", "landmarktowerpool3.jpeg", "gftgym.jpeg", "gftpool.jpeg"].map(
  (item) => '/shared/' + item
);

export const contactUsLink = `https://wa.me/${anand.phone}`;

export const slideChangeTime = 5000;

export const heroTitle = "Krishali Wellness";

export const heroDescription = "Welcome to Krishali Wellness";

export const content = [
  {
    image: shared + "albustanpool.jpeg",
    title: "Landmark Tower",
    description: "We have Zumba Classes",
  },
  {
    image: shared + "landmarktowerpool.jpeg",
    title: "Du Building",
    description: "We have Swimming Pool Classes",
  },
  {
    image: prefix + "3.jpg",
    title: "Rosehafeet",
    description: "We have Ayurvedic Massage and Sports Massage",
  },
];

export const metadataHomepage = {
  title: "Krishali Wellness",
  description:
    "Swimming, Zumba, Ayurvedic Massage, Sports Massage and Events management available in Abu Dhabi, Al Ain, Fujairah, Sharjah, Dubai",
  keywords:
    "Welcome to Krishali Wellness we offer a wide range of services in the health and events space such as Zumba and Swimming classes, Ayurvedic and Sports massage in prime Abu Dhabi locations such as corniche, al bustan and hamdan street",
};
