// Imports
const Power = require("../lib/power.js");
const Origin = require("../lib/origin.js");

module.exports = new Origin({
    name: "Phantom",
    player: "PixelAgent007",
    impact: 3,
    description:
        "Is it a plane? Is it a bird? No, it's a fucking phantom clipping through the ground. You all know what this is.",
    author: "Apace",
    src: "",
    actives: [
        new Power({
            name: "Phantomize",
            description:
                "When pressing your primary, you can walk through all blocks except obsidian. Whilst in this state, your hunger drains twice as fast.",
        }),
    ],
    pros: [],
    passives: [
        new Power({
            name: "Translucent",
            description: "You are slightly translucent.",
        }),
    ],
    cons: [
        new Power({
            name: "League of Legends Pro",
            description: "You burn in the sun, except when phantomized.",
        }),
        new Power({
            name: "Frail",
            description: "You have 6 hearts.",
        }),
        new Power({
            name: "Fast Metabolism",
            description: "You need to eat more.",
        }),
    ],
});
