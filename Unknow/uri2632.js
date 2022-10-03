const input = require("fs").readFileSync(
  "./javascript_uri/Unknow/stdin",
  "utf8"
);
const values = input.split(/\s+/);

const magicAndSword = (
  widthW,
  heightH,
  coordinateX0,
  coordinateY0,
  spell,
  spellLevel,
  coordinateCx,
  coordinateCy
) => {
  const spells = {
    fire: { dmg: 200, l1: 20, l2: 30, l3: 50 },
    water: { dmg: 300, l1: 10, l2: 25, l3: 40 },
    earth: { dmg: 400, l1: 25, l2: 55, l3: 70 },
    air: { dmg: 100, l1: 18, l2: 38, l3: 60 },
  };

  const spellType = spells[spell];
  const spellDmg = spellType["dmg"];
  const spellNivel = spellType[`l${spellLevel}`];
  let zone = true;

  const distanceX0w = coordinateX0 + widthW;
  const distanceY0h = coordinateY0 + heightH;

  if (
    coordinateX0 >= coordinateCx >= distanceX0w &&
    coordinateY0 >= coordinateCy >= distanceY0h
  ) {
    zone = false;
  }

  if (zone) {
    const c1 = (coordinateY0 - coordinateCy) ** 2;
    const c2 = (distanceY0h - coordinateCy) ** 2;
    for (let i = coordinateX0; i <= distanceX0w + 1; i++) {
      const d1 = Math.sqrt((i - coordinateCx) ** 2 + c1);
      const d2 = Math.sqrt((i - coordinateCx) ** 2 + c2);
      if (spellNivel >= d1 || spellNivel >= d2) {
        zone = false;
        break;
      }
    }
  }

  if (zone) {
    const c1 = (coordinateX0 - coordinateCx) ** 2;
    const c2 = (distanceX0w - coordinateCx) ** 2;
    for (let i = coordinateY0; i <= distanceY0h + 1; i++) {
      const d1 = Math.sqrt(c1 + (i - coordinateCy) ** 2);
      const d2 = Math.sqrt(c2 + (i - coordinateCy) ** 2);
      if (spellNivel >= d1 || spellNivel >= d2) {
        zone = false;
        break;
      }
    }
  }

  return zone ? 0 : spellDmg;
};

const loop = parseInt(values.shift());

for (let i = 0; i < loop; i++) {
  const [widthW, heightH, coordinateX0, coordinateY0] = values
    .splice(0, 4)
    .map((item) => parseInt(item));
  const [spell, spellLevel] = values.splice(0, 2);
  const [coordinateCx, coordinateCy] = values
    .splice(0, 2)
    .map((item) => parseInt(item));

  const damage = magicAndSword(
    widthW,
    heightH,
    coordinateX0,
    coordinateY0,
    spell,
    spellLevel,
    coordinateCx,
    coordinateCy
  );

  console.log(damage);
}

// Submission Result: Wrong answer (5%)
