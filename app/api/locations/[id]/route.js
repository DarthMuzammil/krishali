import { locations } from "@/lib/locations";

export async function GET(req, { params }) {
  const { id } = params; // Extract 'id' from the URL
  const location = locations[id]; // Use 'id' as the index to find the location
  console.log(location, "Sdwodo")

  if (!location) {
    return new Response(JSON.stringify({ error: "Location not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(location), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
