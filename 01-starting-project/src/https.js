export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch Meals");
  }

  return resData;
}

export async function updateOrder(json) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: json,
    headers: {
      "Content-Type": "application/json",
    },
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data.");
  }

  return resData;
}
