import { notFound } from "next/navigation";

export const metadata = {
  title: "Smart Fridge | Page not found",
  description: "Smart Fridge app to monitor the fridge remotely.",
};
function page() {
  return notFound();
}

export default page;
