import { anand } from "./phonebook";

const prefix = "/hero/";

export const backgroundImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
].map((item) => prefix + item);

export const contactUsLink = `https://wa.me/${anand.phone}`

export const slideChangeTime = 5000;

export const heroTitle = "Krishali Wellness";

export const heroDescription = "Welcomet to Krishali Wellness";

export const content = [
    {
        image: prefix + "zumba.jpg",
        title: "Landmark Tower",
        description: "We have Zumba Classes",
    },
    {
        image: prefix + "swimming.jpg",
        title: "Du Building",
        description: "We have Swimming Pool Classes",
    },
    {
        image: prefix + "3.jpg",
        title: "Rosehafeet",
        description: "We have Ayurvedic Massage and Sports Massage",
    },
]
