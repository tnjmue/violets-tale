// whole story containing events + outcomes
const storySegments = [
    {
        title: "Pride intro",
        type: "intro",
        text: "Segment 1",
        sin: "pride",
        image: "url('/images/dark-forest-rays.jpg')"
    },
       {
        title: "Pride event",
        type: "event",
        text: "Segment 2",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "pride",
        image: "url('/images/dark-forest-rays.jpg')"
    },
    {
        title: "Pride outro - wrong",
        type: "outro",
        text: "Segment 3", 
        value: false, // -> you died
        sin: "pride",
        image: "url('/images/dark-forest-rays.jpg')"
    },
    {
        title: "Pride outro - right",
        type: "outro",
        text: "Segment 3",
        value: true, // -> next sin
        sin: "pride",
        image: "url('/images/dark-forest-rays.jpg')"
    },
    {
        title: "Lust intro",
        type: "intro",
        text: "Segment 4",
        sin: "lust",
        image: "url('/images/dark-forest.jpg')"
    },
     {
        title: "Lust event",
        type: "event",
        text: "Segment 5",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "lust",
        image: "url('/images/dark-forest.jpg')"
    },
     {
        title: "Lust outro - wrong",
        type: "outro",
        text: "Segment 6", 
        value: false, // -> you died
        sin: "lust",
        image: "url('/images/dark-forest.jpg')"
    },
      {
        title: "Lust outro - right",
        type: "outro",
        text: "Segment 6", 
        value: true, // -> next sin
        sin: "lust",
        image: "url('/images/dark-forest.jpg')"
    },
      {
        title: "Gluttony intro",
        type: "intro",
        text: "Segment 7",
        sin: "gluttony",
        image: "url('/images/cave-waterfall.jpg')"
    },
     {
        title: "Gluttony event",
        type: "event",
        text: "Segment 8",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "gluttony",
        image: "url('/images/cave-waterfall.jpg')"
    },
     {
        title: "Gluttony outro - wrong",
        type: "outro",
        text: "Segment 9", 
        value: false, // -> you died
        sin: "gluttony",
        image: "url('/images/cave-waterfall.jpg')"
    },
     {
        title: "Gluttony outro - right",
        type: "outro",
        text: "Segment 9",
        value: true, // -> next sin
        sin: "gluttony",
        image: "url('/images/cave-waterfall.jpg')"
    },
    {
        title: "Envy intro",
        type: "intro",
        text: "Segment 10",
        sin: "envy",
        image: "url('/images/cave-entrance.jpg')"
    },
    {
        title: "Envy event",
        type: "event",
        text: "Segment 11",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "envy",
        image: "url('/images/cave-entrance.jpg')"
    },
    {
        title: "Eny outro - wrong",
        type: "outro",
        text: "Segment 12", 
        value: false, // -> you died
        sin: "envy",
        image: "url('/images/cave-entrance.jpg')"
    },
    {
        title: "Eny outro - right",
        type: "outro",
        text: "Segment 12", 
        value: true, // -> next sin
        sin: "envy",
        image: "url('/images/cave-entrance.jpg')"
    },
     {
        title: "Greed intro",
        type: "intro",
        text: "Segment 13",
        sin: "greed",
        image: "url('/images/mushroom-cave.gif')"
    },
    {
        title: "Greed event",
        type: "event",
        text: "Segment 14",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "greed",
        image:"url('/images/mushroom-cave.gif')"
    },
    {
        title: "Greed outro - wrong",
        type: "outro",
        text: "Segment 15", 
        value: false, // -> you died
        sin: "greed",
        image: "url('/images/mushroom-cave.gif')"
    },
     {
        title: "Greed outro - right",
        type: "outro",
        text: "Segment 15", 
        value: true, // -> next sin
        sin: "greed",
        image: "url('/images/mushroom-cave.gif')"
    },
      {
        title: "Wrath intro",
        type: "intro",
        text: "Segment 16",
        sin: "wrath",
        image: "url('/images/red-cave.png')"
    },
    {
        title: "Wrath event",
        type: "event",
        text: "Segment 17",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "wrath",
        image: "url('/images/red-cave.png')"
    },
      {
        title: "Wrath outro - wrong",
        type: "outro",
        text: "Segment 18",
        value: false, // -> you died
        sin: "wrath",
        image: "url('/images/red-cave.png')"
    },
      {
        title: "Wrath outro - right",
        type: "outro",
        text: "Segment 18", 
        value: true, // -> next sin
        sin: "wrath",
        image: "url('/images/red-cave.png')"
    },
    {
        title: "Sloth intro",
        type: "intro",
        text: "Segment 19",
        sin: "sloth",
        image: "url('/images/cursed-trees.jpg')"
    },
     {
        title: "Sloth event",
        type: "event",
        text: "Segment 20",
        choices: ["right", "wrong"],
        validChoice: 0,
        sin: "sloth",
        image: "url('/images/cursed-trees.jpg')"
    },
     {
        title: "Sloth outro - wrong",
        type: "outro",
        text: "Segment 21", 
        value: false, // -> you died
        sin: "sloth",
        image: "url('/images/cursed-trees.jpg')"
    },
      {
        title: "Sloth outro - right",
        type: "outro",
        text: "Segment 21", 
        value: true, // -> next sin
        sin: "sloth",
        image: "url('/images/cursed-trees.jpg')"
    },
    {
        title: "Finished",
        text: "Segment 22",
        sin: "ending",
        image: "url('/images/among-humans-again.jpg')"
    }
   
];