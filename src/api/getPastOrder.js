export default async function getPastOrder(order) {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const apiUrl = import.meta.env.VITE_API_URL;
  const response = await fetch(`${apiUrl}/api/past-order/${order}`);
  const data = await response.json();
  return data;
}
