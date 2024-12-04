const prefix = "/shared/";
const activity = "/shared/";

export const locations = {
  landmarktower: {
    buildingName: "landmarktower",
    location: "Corniche, Abu Dhabi, UAE",
    activityImages: [activity + "landmarktowerpool.jpeg", activity + "landmarktowerpool2.jpeg"],
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
        caption: "Now in Landmark Tower, Corniche. Trainer: Lumar",
        trainer: "Lumar",
      }, {
        name: "Swimming Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 140 },
          { classes: "8 Classes", price: 800 },
          { classes: "10 Class", price: 950 },
          { classes: "12 Classes", price: 1100 },
        ],
        timing: [{ days: "Weekdays", time: "3:00PM- 8:00PM" }],
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
        trainer: "Arafat",
      },{
        name: "Swimming Class Group",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 140 },
          { classes: "8 Classes", price: 800 },
          { classes: "10 Class", price: 950 },
          { classes: "12 Classes", price: 1100 },
        ],
        timing: [{ days: "Weekdays", time: "3:00PM- 8:00PM" }],
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
        trainer: "Arafat",
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
      {
        name: "Kickboxing",
        code: "kickboxing",
        pricing: [
          { classes: "1 Class", price: 150 },
          { classes: "5 Classes", price: 600 },
          { classes: "10 Class", price: 1100 },
        ],
        timing: [{ days: "Friday", time: "2:00PM - 3:00PM" }, { days: "Friday", time: "7:00PM - 11:00PM" }, { days: "Saturday", time: "6:00AM - 8:00AM, 1:00PM - 11:00PM" }],
        trainer: "Karim",
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
    location: "Green Mubazzarah, Al Ain, UAE",
    locationLink:
      "https://www.google.com/maps?s=web&lqi=ChdncmVlbiBtdWJhenphcmFoIGFsIGFpbkiK-qbPkrCAgAhaIRAAEAEYABgBIhdncmVlbiBtdWJhenphcmFoIGFsIGFpbpIBBHBhcmuqAVUQASoUIhBncmVlbiBtdWJhenphcmFoKAAyHhABIhorYto3wuL5acZkyEEgVxc4EoT292Hxl9uaNzIbEAIiF2dyZWVuIG11YmF6emFyYWggYWwgYWlu&phdesc=zdfeVgUu818&vet=12ahUKEwjqsqr0-o2KAxVTUGwGHQ6fDLcQ1YkKegQIVhAB..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kcfjk_Rmu4o-MQRjUzkrZPYp&daddr=Mbazzarah+Al+Khadra+-+Abu+Dhabi+-+United+Arab+Emirates",
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
  albustantower: {
    buildingName: "albustantower",
    buildingImage: prefix + "albustanpool.jpeg",
    activityImages: [activity + "albustangym.jpeg", activity + "albustangym2.jpeg", activity + "albustangym3.jpeg"],
    location: "Airport Road, Mushrif, Abu Dhabi, UAE",
    locationLink:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEC4YQNIBCDM2ODZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd3TLouIZ14-MdzywNDgbfE8&daddr=Al+HisnAl,+The+Landmark+-+116+Khadim+Bin+Butti+Al+Hamed+St+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates",
    activities: [
      {
        name: "Swimming Private Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 185 },
          { classes: "8 Classes", price: 1400 },
          { classes: "10 Classes", price: 1550 }
        ],
        timing: [{ days: "SAT & SUN", time: "3:00pm - 8:00pm" }],
        trainer: "Allam",
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
      },  {
        name: "Swimming Group Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 120 },
          { classes: "8 Classes", price: 700 },
          { classes: "10 Classes", price: 800 },
          { classes: "12 Classes", price: 920 }
        ],
        trainer: "Allam",
        timing: [{ days: "SAT & SUN", time: "3:00pm - 8:00pm" }],
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
      },

      {
        name: "Kickboxing",
        code: "fitness",
        trainer: "Allam",
        pricing: [
          { classes: "1 Class", price: 150 },
          { classes: "5 Classes", price: 600 },
          { classes: "10 Class", price: 1100 },
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
  alsamatower: {
    buildingName: "alsamatower",
    buildingImage: prefix + "albustanpool.jpeg",
    activityImages: [activity + "albustangym.jpeg", activity + "albustangym2.jpeg", activity + "albustangym3.jpeg"],
    location: "Sama Tower, Dubai",
    locationLink:
      "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEC4YQNIBCDM2ODZqMGoxqAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd3TLouIZ14-MdzywNDgbfE8&daddr=Al+HisnAl,+The+Landmark+-+116+Khadim+Bin+Butti+Al+Hamed+St+-+Al+Hisn+-+Al+Markaziyah+West+-+Abu+Dhabi+-+United+Arab+Emirates",
    activities: [
      {
        name: "Swimming Private Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 185 },
          { classes: "8 Classes", price: 1400 },
          { classes: "10 Classes", price: 1550 }
        ],
        timing: [{ days: "MON & WED", time: "1:00PM - 3:00PM" }, { days: "TUE & THU", time: "9:00AM - 3:00PM" }, { days: "SAT & SUN", time: "7:00pm - 10:00pm" }],
        trainer: "Allam",
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
      },  {
        name: "Swimming Group Class",
        code: "swimming",
        pricing: [
          { classes: "1 Class", price: 120 },
          { classes: "8 Classes", price: 700 },
          { classes: "10 Classes", price: 800 },
          { classes: "12 Classes", price: 920 }
        ],
        trainer: "Allam",
        timing: [{ days: "SAT & SUN", time: "3:00pm - 8:00pm" }],
        caption: "Now in Landmark Tower, Corniche. Trainer: Arafat",
      },

      {
        name: "Kickboxing",
        code: "fitness",
        trainer: "Allam",
        pricing: [
          { classes: "1 Class", price: 150 },
          { classes: "5 Classes", price: 600 },
          { classes: "10 Class", price: 1100 },
        ],
        timing: [{ days: "Mon, Tue & Wed", time: "6:00pm - 9:00pm" }],
        caption: "Now in Golden Falcon Tower, Du Building",
      },
    ],
    trainers: ["Arafat"],
    metadata: {
      title: "Sama Tower, Dubai",
      description:
        "Enjoy swimming, zumba, yoga classes at Sama Tower, Dubai",
      keywords:
        "Swimming classes and Zumba classes with Sauna Pool and Gym facilities at Sama Tower, Dubai managed by Kirshali Wellness (Krishali Group)",
    },
  },
};