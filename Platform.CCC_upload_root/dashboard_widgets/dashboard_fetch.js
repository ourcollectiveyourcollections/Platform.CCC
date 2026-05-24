async function cycFetchJson(url) {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to fetch dashboard JSON");
  return response.json();
}
