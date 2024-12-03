export const transformLocations = (locations) => {
    return Object.keys(locations).map(key => {
      const location = locations[key];
      return {
        name: key,
        image: location.buildingImage,
        location: location.locationLink,
      };
    });
  };

export function extractActivityNames(locations) {
    const activityNames = [];
  
    for (const key in locations) {
      if (key === "activities" ) {
        locations[key].forEach(activity => {
          activityNames.push(activity.name);
        });
      }
    }
    return activityNames;
  }

  export const getObjectsByKeys = (keys, obj) => {
    const result = keys.filter(key => key in obj).map(key => ({ ...obj[key] }));
  };

