import fs from "fs";
import process from "node:process";
import "dotenv/config";

const key = process.env.CR_UCF_KEY;
if (!key) throw new Error("Missing CR Key in env");

const res = await fetch("https://api.clashroyale.com/v1/cards", {
  headers: { Authorization: `Bearer ${key}` },
});

const { items } = await res.json();

const cards = items.map((item) => ({
  id: item.id,
  name: item.name,
  img: item.iconUrls?.medium,
}));

fs.writeFileSync("public/cards.json", JSON.stringify(cards, null, 2));
