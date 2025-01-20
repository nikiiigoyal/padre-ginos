import { afterEach, expect, test } from "vitest";
import Pizza from "../Pizza";
import { render, cleanup } from "@testing-library/react";
afterEach(cleanup);

test("alt text renders on image", async () => {
  const name = "My favourite Pizza";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description="super cool pizza" image={src} />,
  );
  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});
test("to have default image if none in psrovided", async () => {
  const screen = render(
    <Pizza name={"Cool Pizza"} description="super cool pizza" />,
  );
  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
