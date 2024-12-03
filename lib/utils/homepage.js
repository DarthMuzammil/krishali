export function extractLocationDetails(locations) {
  const extractedDetails = [];

  for (const key in locations) {
    const location = locations[key];
    extractedDetails.push({
      name: location.buildingName,
      image: location.buildingImage,
      location: location.location,
      activities: location.activities,
      trainers: location.trainers,
      title: location.metadata.title
    });
  }

  return extractedDetails;
}
