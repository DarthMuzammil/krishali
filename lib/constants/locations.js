const prefix = "/shared/";
const activity = "/shared/";

export const locations = {
  landmarktower: {
    buildingName: "landmarktower",
    location: "Corniche, Abu Dhabi, UAE",
    activityImages: [activity + "gftGYM.jpg", activity + "gftGYM2.jpg"],
    locationLink:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEC4YQNIBCDM2ODZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd3TLouIZ14-MdzywNDgbfE8&daddr=Al+HisnAl,+The+Landmark+-+116+Khadim+Bin+Butti+Al+Hamed+St+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates",
    buildingImage: prefix + "landmarktower.jpeg",
    activities: [
      {
        name: "Swimming Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 140 },
          { classes: "8 Classes", price: 800 },
          { classes: "10 Class", price: 950 },
          { classes: "12 Classes", price: 1100 },
        ],
        timing: [{ days: "Weekdays", time: "6:00AM- 2:00PM" }, { days: "Weekend", time: "7:00PM- 9:00PM" }],
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
        trainer: "Lumar",
      },
      {
        name: "Zumba",
        code: "zumba",
        pricing: [
          { classes: "1 Class", price: 60 },
          { classes: "5 Classes", price: 250 },
          { classes: "10 Classes", price: 400 },
        ],
        timing: [{ days: "SUN, MON, TUE & THU", time: "4:30PM TO 5:30PM" }],
        trainer: "Evelyn",
        caption: "Book Now! Only 10% Seats left",
      },
      {
        name: "Fitness",
        code: "fitness",
        pricing: [
          { classes: "1 Class", price: 150 },
          { classes: "5 Classes", price: 600 },
          { classes: "10 Class", price: 1100 },
        ],
        timing: [{ days: "All 7 Days", time: "9:00AM - 9:00PM" }],
        trainer: "Rovin",
        caption: "Now in Golden Falcon Tower, Du Building",
      },
    ],
    metadata: {
      title: "Landmark Tower, Corniche",
      description:
        "Enjoy swimming, zumba, yoga classes at Landmark Tower Corniche",
      keywords:
        "Swimming classes and Zumba classes with Sauna Pool and Gym facilities at Landmark Tower Corniche managed by Kirshali Wellness (Krishali Group)",
    },
  },
  goldenfalcontower: {
    buildingName: "goldenfalcontower",
    buildingImage: prefix + "dubuilding.jpg",
    location: "Du Building Office, Hamdan, Abu Dhabi, UAE",
    activityImages: [activity + "dubuilding.jpg", activity + "gftGYM2.jpg"],
    locationLink:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEC4YQNIBCDM2ODZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd3TLouIZ14-MdzywNDgbfE8&daddr=Al+HisnAl,+The+Landmark+-+116+Khadim+Bin+Butti+Al+Hamed+St+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates",
    activities: [
      {
        name: "Swimming Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 120 },
          { classes: "8 Classes", price: 700 },
          { classes: "10 Classes", price: 800 },
          { classes: "12 Classes", price: 920 },
        ],
        timing: [{ days: "MON, TUE, WED & THU", time: "5:30PM - 6:30PM" }],
        trainer: "Deepthi",
        caption: "Now in Landmark Tower, Corniche. Trainer: Deepthi",
      },
      {
        name: "Fitness",
        code: "fitness",
        pricing: [
          { classes: "1 Class", price: 120 },
          { classes: "5 Classes", price: 550 },
          { classes: "10 Class", price: 1000 },
        ],
        trainer: "Mehtab",
        timing: [{ days: "Mon, Tue & Wed", time: "6:00pm - 9:00pm" }],
        caption: "Now in Golden Falcon Tower, Du Building",
      },
    ],
    trainers: ["Allam", "Evelyn", "Mehtab"],
    metadata: {
      title: "Golden Falcon Tower, Hamdan",
      description:
        "Enjoy swimming, zumba, yoga classes at Landmark Tower Corniche",
      keywords:
        "Swimming classes and Zumba classes with Sauna Pool and Gym facilities at Landmark Tower Corniche managed by Kirshali Wellness (Krishali Group)",
    },
  },
  rosehafeet: {
    buildingName: "Rosehafeet",
    buildingImage: '/activities/' + "rosehafeet.jpeg",
    activityImages: ['/activities/'  + "massage.jpeg", '/activities/'  + "rosehafeet.jpeg"],
    location: "Corniche, Abu Dhabi, UAE",
    locationLink:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEC4YQNIBCDM2ODZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd3TLouIZ14-MdzywNDgbfE8&daddr=Al+HisnAl,+The+Landmark+-+116+Khadim+Bin+Butti+Al+Hamed+St+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates",
    activities: [
      {
        name: "Ayurvedic Massage",
        code: "ayurvedicmassage",
        pricing: [
          { classes: "30 Minutes", price: 100 },
          { classes: "60 Minutes", price: 175 },
        ],
        timing: [{ days: "SAT & SUN", time: "3:00pm - 8:00pm" }],
        trainer: "TrainedStaff",
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
      },
      {
        name: "Sports Massage",
        code: "sportsmassage",
        pricing: [
          { classes: "30 Minutes", price: 100 },
          { classes: "60 Minutes", price: 175 },
        ],
        timing: [
          { days: "Tue - Thu", time: "6:00pm - 7:00pm" },
          { days: "Sat", time: "10:00am - 11:00am" },
        ],
        trainer: "TrainedStaff",
        caption: "Book Now! Only 10% Seats left",
      },
      
    ],
    metadata: {
      title: "Rosehafeet, Green Mbasarrah, Al Ain",
      description:
        "Enjoy swimming, zumba, yoga classes at Landmark Tower Corniche",
      keywords:
        "Swimming classes and Zumba classes with Sauna Pool and Gym facilities at Landmark Tower Corniche managed by Kirshali Wellness (Krishali Group)",
    },
  },

};


/*
  albustantower: {
    buildingName: "albustantower",
    buildingImage: prefix + "rosehafeet.jpg",
    activityImages: [activity + "gftGYM.jpg", activity + "gftGYM2.jpg"],
    location: "Corniche, Abu Dhabi, UAE",
    locationLink:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEC4YQNIBCDM2ODZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd3TLouIZ14-MdzywNDgbfE8&daddr=Al+HisnAl,+The+Landmark+-+116+Khadim+Bin+Butti+Al+Hamed+St+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates",
    activities: [
      {
        name: "Swimming Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 120 },
          { classes: "8 Classes", price: 700 },
          { classes: "10 Classes", price: 800 },
          { classes: "12 Classes", price: 920 },
        ],
        timing: [{ days: "SAT & SUN", time: "3:00pm - 8:00pm" }],
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
      },
      {
        name: "Zumba",
        code: "zumba",
        pricing: [
          { classes: "1 Class", price: 20 },
          { classes: "2 Classes", price: 30 },
        ],
        timing: [
          { days: "Tue - Thu", time: "6:00pm - 7:00pm" },
          { days: "Sat", time: "10:00am - 11:00am" },
        ],
        caption: "Book Now! Only 10% Seats left",
      },
      {
        name: "Fitness",
        code: "fitness",
        pricing: [
          { classes: "1 Class", price: 120 },
          { classes: "5 Classes", price: 550 },
          { classes: "10 Class", price: 1000 },
        ],
        timing: [{ days: "Mon, Tue & Wed", time: "6:00pm - 9:00pm" }],
        caption: "Now in Golden Falcon Tower, Du Building",
      },
    ],
    trainers: ["Arafat"],
    metadata: {
      title: "Al Bustan Complex, Airport Road",
      description:
        "Enjoy swimming, zumba, yoga classes at Landmark Tower Corniche",
      keywords:
        "Swimming classes and Zumba classes with Sauna Pool and Gym facilities at Landmark Tower Corniche managed by Kirshali Wellness (Krishali Group)",
    },
  },
*/