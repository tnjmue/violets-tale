// whole story containing events + outcomes
const storySegments = [
    {
        title: "Pride intro",
        type: "intro",
        text: `I stumble, darkness all around me. I’ve always loved being alone in the woods at night. It calms me. I’ve always been like this: scared of the mundane, comforted by the outlandish.  I’m extra upset tonight, so I haven’t watched my steps, let my racing mind derail me. I’m in the same old woods next to where I live. Aren’t I? Where am I? Just as disorientation settles in, I hear them coming, running, fast. The staccato of their paws on the soft forest ground, panting, growling, barking. So I start running too, away from them, into nothing. I don’t understand. This isn't real, right? Just another nightmare.But I’ve never been afraid of wolves. It’s people that get to me. I can’t see anything. I run for my life, terrified. A part of me loves the thrill.`,
        sin: "pride",
        image: "url('images/dark-forest-rays.jpg')"
    },
       {
        title: "Pride event",
        type: "event",
        text: `I’m starting to lose my breath and get annoyed. This can’t be real. There are no wild wolves where I live. And if it’s not real, then I can control it. I can make them stop just like I’ve done with other monsters. I could just stop dead, spin around, set them on fire. I could make them disappear with the snap of my fingers. I could talk them out of existence. I could…get out of the way. They’ve almost caught up to me and I can smell them now. If this isn’t real, then why am I so afraid? Why is my chest burning? Maybe they’re not after me, maybe I can hide. Jump behind some bushes. Jump into nothingness. But aren’t you supposed to face your demons? Shouldn’t I be above this nonsense?
        
        `,
        choices: ["face danger", "try to hide"],
        validChoice: 1,
        sin: "pride",
        image: "url('images/dark-forest-rays.jpg')"
    },
    {
        title: "Pride outro - wrong",
        type: "outro",
        text: `Yeah, no, I’ve had it. I stop and for a fraction of a second, I feel immense satisfaction. I didn’t let my fear control me. I’m about to turn around, when I’m being jumped by the first one. I fall flat on my face, expecting to feel hot breath, teeth, pain. But instead, I can feel them running me over. I stay down, surprised. They really weren’t after me. It’ll be over soon. I just have to wait them out, play dead. But they’re not stopping, there’s no end to the chain. The ground beneath me starts shaking, I can feel cracks opening up. I try to roll out of the way of the one forming beneath me, but I’m still being locked in place. I can’t move. So I just lay there as the ground opens up and I fall right through it. 
        
        I thought I stood above them all
        I thought that I just couldn’t fall
        my head held high, expression snide
        grandiosity can make you stride
        headfirst into the next divide
        and just like that it’s death by pride
        `, 
        value: false, // -> you died
        sin: "pride",
        image: "url('images/dark-forest-rays.jpg')"
    },
    {
        title: "Pride outro - right",
        type: "outro",
        text: `I just can’t make myself stop. I feel like a coward, but maybe I’m just human after all. Tonight isn’t going to be the night I face my fears. The sky is streaked with dull rays of light now, so I can see just a bit. Enough to make up the black clouds of bushes to my left. I aim, then I jump. I hit the ground with my left chest and shoulder, but manage to tuck in my chin and roll over. And then I just lie there, heart hammering to the beat of their paws. They’re running right past me. I wasn’t what they were chasing after all. I get up, just in time to hear the ground splitting. On the other side of the bushes where I just was moments ago, a huge crack opens. I shrug. There’s no going back now, the only way out is deeper in. I turn around and start walking deeper into the woods. `,
        value: true, // -> next sin
        sin: "pride",
        image: "url('images/dark-forest-rays.jpg')"
    },
    {
        title: "Lust intro",
        type: "intro",
        text: `Everything got darker. I have completely lost track of time and am being pulled forward by nothing but the knowledge that I can’t just stop. My own hand is just a dark shadow when I bring it up close to my face. I start walking more quickly, my feet sometimes tripping over what seem to be small grains of gravel on a path. I don’t know what I’ll do when the path ends. The sounds around me have changed. The forest was eerie before, there was something not quite right about it – but now, it’s downright creepy. It’s too black and too silent, the air feels physically heavy on my skin. I hear no shrieks of owls or other animals, no rustling in the bushes, just my steps on the gravel and something that sounds like…ringing. At least I’m no longer afraid of the wolves, because I don’t think they’d come here. I must have made it off the map. My eyes are starting to make out something in the distance, a faint glow. The ringing intensifies; it sounds almost musical now. I walk towards the light. The air smells a little better here, more like spring, less like…the dead of night in a decaying, empty world. `,
        sin: "lust",
        image: "url('images/dark-forest.jpg')"
    },
     {
        title: "Lust event",
        type: "event",
        text: `I stop and turn around. Behind me, there’s nothing but black. I shiver at the sight of it. I really don’t want to go back, so instead I turn around and move forwards, slowly, unconvinced. Sounds are starting to come back: I can hear the sound of wood creaking, the small sounds of nocturnal animals, hell, I can smell old leaves and moss. And something else, something sweeter, there’s traces of honey and apples. Am I getting close to some sort of orchard? The closer I’m getting to where the glow comes from, the bluer everything looks. My next step takes me off my gravel path, my foot lands in soft grass. It’s pleasant, so I take a few more small, probing steps and suddenly, I am surrounded by millions of flickers of light. It’s so beautiful it makes my head spin and it charges me up. Whatever this place is, it feels so good. I want to run towards one of the lights and touch it. The air smells so good and I feel elated. But should I really leave my path? It’s all the guidance I’ve had so far.
        
        `,
        choices: ["choose light", "choose path"],
        validChoice: 1,
        sin: "lust",
        image: "url('images/dark-forest.jpg')"
    },
     {
        title: "Lust outro - wrong",
        type: "outro",
        text: `I take some more steps forward and suddenly, I catch a brighter flash of light. I want to touch it so bad. The ringing gets louder and the air starts vibrating like there’s a current running through all of it. Everything feels electric here. The light, I’m close enough to see now, is a light bulb growing on a tree. I look ahead and see more specks of light. They’re beautiful. I softly nudge the one in front of me. It’s warm, it tickles me, it’s almost unpleasant. I unscrew it from its tree socket, my heart is racing now. Part of me wants to run away into the darkness, but I don’t want to let this go. I can still smell honey and apples. The soft spring air is no longer soft though, it’s buzzing, it makes me want to skin myself so I no longer have to feel it. I’m getting itchy all over, I start to scratch myself. It feels like the light is inside me now and I’m on fire. I can’t hold the current. So I burst.
        
        Because I couldn’t stand the dark
        I threw away all my distrust
        it felt magnetic, I saw stars
        I was propelled forward by lust
        it started as a tiny spark
        and now I’m being burned to dust`, 
        value: false, // -> you died
        sin: "lust",
        image: "url('images/dark-forest.jpg')"
    },
      {
        title: "Lust outro - right",
        type: "outro",
        text: `I take some more steps forward and suddenly, I catch a brighter flash of light. I want to touch it. The ringing gets louder and the air starts vibrating like there’s a current running through all of it. Electricity. Everything feels electric here. My heart is racing now. I want to run away into the darkness, its absence of sensations now welcome, but it seems foolish. I can still smell honey and apples, but it’s too sickly sweet and my stomach is starting to turn. The soft spring air is no longer soft though, it’s buzzing, it makes me want to skin myself so I no longer have to feel it. Half petrified, I turn around and slowly make my way back to it. I can see now that the grass is blue, too. I make it back to the gravel and I’m flooded with relief. It seems to really be gravel. It smells like gravel and it doesn’t glow and there’s nothing alluring about it. I want to run now, but I make myself walk, one step at a time. `, 
        value: true, // -> next sin
        sin: "lust",
        image: "url('images/dark-forest.jpg')"
    },
      {
        title: "Gluttony intro",
        type: "intro",
        text: `And all of a sudden, there’s something glowing again. I’d only just calmed down a little, now I’m being hit with the next jolt of panic. It’s ridiculous how badly I wanted to get away from the darkness just some moments ago, now I’m clinging to it desperately. I’d rather walk the other way, but my path seems hellbent on getting me just there. It’s a cave, the glow comes from what’s inside of it. Let’s see what’s lurking inside. All I can hear from here is water. It’s pretty in here. A glistening waterfall coming down from a hole in the ceiling, a shallow pool in the middle, faintly glistening crystals left and right. Too magical to trust, but the smell grounds me, because it’s just wet rocks. This is something I know. Earthly, normal, boring.`,
        sin: "gluttony",
        image: "url('images/cave-waterfall.jpeg')"
    },
     {
        title: "Gluttony event",
        type: "event",
        text: `The sight and smell of all this water makes me realize how thirsty I’ve become. I sigh. It seems like the stupidest idea ever to just drink water from some sparkling cave, but what other options do I have really. So I step closer to the pool and crouch down and bring my face down to the surface as close as I can. Still smells like regular water and wet rocks. I dip in the tips of my fingers. Nothing happens. So I cup my hands and dip them in, bring them to my lips and take a small sip. Tastes normal, now I wait for potential harm.I’m aiming for roughly an hour of waiting to see what effects the water might have on my body and mind. I decide to check out the waterfall in the meantime. Rushing water is said to be safer. The water somehow smells better, too. Should I try the water from the waterfall also? 
        
        `,
        choices: ["drink from pool", "try waterfall"],
        validChoice: 0,
        sin: "gluttony",
        image: "url('images/cave-waterfall.jpeg')"
    },
     {
        title: "Gluttony outro - wrong",
        type: "outro",
        text: `It’s so fresh. It tastes so good. I just can’t stop. 
        
        Too much was never good for me
        Couldn’t say no to gluttony
        And suddenly
        There was nothing left of me 
        `, 
        value: false, // -> you died
        sin: "gluttony",
        image: "url('images/cave-waterfall.jpeg')"
    },
     {
        title: "Gluttony outro - right",
        type: "outro",
        text: `I drink some more. It’s pleasant and for the first time I’ve been here I feel somewhat human. When my thirst has been quenched, I allow myself to sit down against the wall next to a cluster of crystals and I just let my gaze wander for a bit and become still. It’s actually pretty here. But it’s not like I can stay, so I rouse myself and set off again. I’ve noticed that my pool spills into a narrow stream winding off to my right and I decide to follow it. I may need to drink again. `,
        value: true, // -> next sin
        sin: "gluttony",
        image: "url('images/cave-waterfall.jpeg')"
    },
    {
        title: "Envy intro",
        type: "intro",
        text: `The pink glow of the crystals fades and turns into a warm yellow emanating from an actual lantern. A lantern! I look around and find more things that look like they were made by humans: a rusty shovel leaning against the wall to my right, what looks to be a crumpled up leather backpack behind a small pile of rocks, a sheet of plastic of all things and a pair of broken glasses. I deem all of it potentially useful, except the glasses, so I chuck them away carelessly and they land in the stream where, to my surprise, they float. And not only do they not sink, they reflect back the yellow light of the lantern in a strange way, casting a screen of sorts on the wall opposite to me. I blink, then rub my eyes. Twice. Just when I’d thought I’d found a relatively normal place in this whole head trip of a situation.`,
        sin: "envy",
        image: "url('images/cave-entrance.jpg')"
    },
    {
        title: "Envy event",
        type: "event",
        text: `To my surprise, I hear them before I see them: People. Talking, laughing. I jump to my feet and look around frantically, stupidly hoping and fearing that someone, anyone might be here but it’s just me. so I turn my gaze back onto the glasses, the weird screen they’re casting and I start seeing people walking. People walking down the street, walking their dogs, crossing crosswalks, it’s ridiculous. I see them stopping by a bakery, getting a sandwich, cup of coffee in hand. I’m so taken aback by this I forget to breathe for a minute or two and only notice myself filling up with a longing so strong it burns.  Their laughter, their hushed conversations, they’re noise in my ears. I need it all to stop. I snap back to my senses and do the only reasonable thing: I take the glasses out of the stream. The screen vanishes instantly and the sounds die with it. I stare at the glasses in my hands and they look so ordinary. But I just witnessed them reflecting a light source and magnifying it by a lot - they might come in handy. But I don’t want them. I don’t want to be reminded of what I cannot have. If I’m stuck here, if I’ll never make it out, I’d rather forget my old life.
        `,

        choices: ["take glasses", "leave glasses"],
        validChoice: 0,
        sin: "envy",
        image: "url('images/cave-entrance.jpg')"
    },
    {
        title: "Eny outro - wrong",
        type: "outro",
        text: `I guess I could just leave them here. Just walk away, let go of the pain. I drop them, and then I make my way deeper into the cave, the warm light of the lantern fading behind me. Everything gets colder, like, the temperature but also the colors. Warm blue turns into dark violet, but I start seeing bright turquoise splotches scattered around the floor, too. I roll my eyes. What below earth could it be this time? Glowing rock crabs? Spiders? Come on, we haven’t had poison yet. The world suddenly starts to spin. I lose my footing and fall headfirst into one of the glowing things. A moist warm cushion that immediately suffocates me. The last thing I see is a glowing, bright turquoise. Then everything goes white.
        
        I watched them having everything
        envy won’t let me go
        And then I couldn’t see a thing
        Got blinded by the glow
        `, 
        value: false, // -> you died
        sin: "envy",
        image: "url('images/cave-entrance.jpg')"
    },
    {
        title: "Eny outro - right",
        type: "outro",
        text: `Practicality wins. Can’t say I make this call often, but I do try. I stuff the glasses in the front pocket of my backpack and get going. I make my way deeper into the cave, the warm light of the lantern fading behind me. Everything gets colder, like, the temperature but also the colors. Warm blue turns into dark violet, but I start seeing bright turquoise splotches scattered around the floor, too. I roll my eyes. What below earth could it be this time? Glowing rock crabs? Spiders? Come on, we haven’t had poison yet. Everything suddenly starts to spin. I collapse against the wall, the world blurs before my eyes. In a desperate attempt, I tear the glasses out of my backpack and slam them onto my nose. The spinning stops instantly. I can see again. I can keep going.`, 
        value: true, // -> next sin
        sin: "envy",
        image: "url('images/cave-entrance.jpg')"
    },
     {
        title: "Greed intro",
        type: "intro",
        text: `It’s glowing mushrooms. There’s slime of the same colour dripping from the ceiling. The air is moist and heavy though and smells a little too sweet. I think I should get out of here as quickly as possible. I look around. To my left, there’s a door with glowy carvings and symbols. Where the part of the cave before looked like a way station of your regular lost traveller passing through, this part looks like an evil magician’s lair: definitely bad news, definitely shouldn’t be here. I decide to inspect the door more closely. Trying to push it open is pointless – either it’s too heavy for me or it requires some sort of key. Since the four symbols around it glow in the same hue as the mushrooms do, I figure they’re connected in some way. Maybe you need to power the door up with the mushrooms or something. Or the slime.`,
        sin: "greed",
        image: "url('images/mushroom-cave.gif')"
    },
    {
        title: "Greed event",
        type: "event",
        text:`I know I should be afraid. This is the spookiest place I’ve been in so far, there is nothing remotely normal about this and already, I can feel my head starting to spin and my breaths becoming more shallow. But I just don’t seem to mind. Maybe I’ve gone insane. Not entirely probably, because as I go to gather some mushrooms, I remember my plastic and take it out. Better not let these things touch my bare skin. I pick the four biggest ones I can find and press one to each carved symbol. They get sucked in, the circle in the middle of the door starts spinning, everything glows and the door bursts open. It reveals a dark narrow corridor. I’m wondering if I should pick some more magic mushrooms before I leave? They could come in handy.
        
        `,  
        choices: ["take mushrooms", "leave mushrooms"],
        validChoice: 1,
        sin: "greed",
        image:"url('images/mushroom-cave.gif')"
    },
    {
        title: "Greed outro - wrong",
        type: "outro",
        text: `I quickly collect some more mushrooms and stuff them in my backpack. I can’t move at normal speed anymore, Coughing, I drag myself to the dark corridor. I notice rashes on my skin that are spreading rapidly. I spent too much time in that poison cave. Blood is seeping from the wounds in my skin. I collapse.
        
        Never take more than you need
        It plants an evil seed
        That all of your desires feed
        And soon you will succumb to greed
        First it will take your speed
        Then it will make you bleed
        `, 
        value: false, // -> you died
        sin: "greed",
        image: "url('images/mushroom-cave.gif')"
    },
     {
        title: "Greed outro - right",
        type: "outro",
        text: `I should just get out of here. I step into the dark corridor. I can notice the effects of the poison still. I can see rashes on my arms, but they recede the further I walk away from the cave. It was the most beautiful place I’ve ever seen, but definitely not somewhere I’d like to ever return to.`, 
        value: true, // -> next sin
        sin: "greed",
        image: "url('images/mushroom-cave.gif')"
    },
      {
        title: "Wrath intro",
        type: "intro",
        text: `I’m now in a red cave. There is no more dripping and no water as far as I can see. The walls feel dry. I fully step inside and can make out new sounds: rattling breathing. Is there someone else in here? Is this just another trick? But someone must have left the stuff that I picked up in that other part of the cave. Maybe that someone is still here. Cautiously hugging the walls, I tiptoe deeper into the cave. The breathing is loud now, too loud almost. There’s the occasional moan too. I don’t like this. It just doesn’t sound quite…human. And then I see him. In a nook of the cave just behind the pillar of stone I’m holding onto, lies a creature,  his chest moving up and down rapidly, his head twisting from left to right. I don’t think he’s okay. He…it. I’m holding my breath now as I’m edging closer, trying to see. Its skin is a sullen grey, its fingernails a dark green. There’s chunks of flesh missing in its face, but no blood. Could this actually be a zombie?`,
        sin: "wrath",
        image: "url('images/red-cave.png')"
    },
    {
        title: "Wrath event",
        type: "event",
        text: `Okay. Sure. Why am I even surprised at this point. I literally just opened a door with glowing mushrooms. I almost want to laugh. Finally, I have company! I’m no longer alone. But what if there were other people here not so long ago? The people whose belongings I carry with myself now. They moved on like I did, made it through the door. And ended up as a dinner. I want to run again, but I can’t seem to lift a foot. I slide my backpack off my shoulders and hug it closely, grab a hold of my shovel through the leather, the only weapon I have. I could attack, strike first. It seems to be asleep. If I try to sneak past it, I will have to turn my back to it. That seems foolish.
        
        `,
        choices: ["try to sneak past", "attack zombie"],
        validChoice: 0,
        sin: "wrath",
        image: "url('images/red-cave.png')"
    },
      {
        title: "Wrath outro - wrong",
        type: "outro",
        text: `If I strike first, he won’t get to. So I take the shovel out of my backpack, I carefully position it over his neck. I slash down at his throat with the rim of the shovel, expecting it to make some sort of cut. But it doesn’t. It does almost nothing, except that his moaning intensifies. So I hit him again and again and again. I hand myself over to my anger, my eyes half-closed and I’m half yelling until all of a sudden, I feel a hand around my own neck. I look down in a trance and find myself locked by the gaze of two ugly big yellow eyes. He opens his crooked gap of a mouth and whispers in a coarse voice:
        
        Violet, Violet, why so violent
        Violence gets what violence does
        My own violence long fell silent
        My appetite long gone because
        Can’t you see I’m already dying
        How pointless all your anger was
        Pity you still can’t see the path
        now you’ll die from your own wrath
        `,
        value: false, // -> you died
        sin: "wrath",
        image: "url('images/red-cave.png')"
    },
      {
        title: "Wrath outro - right",
        type: "outro",
        text: `I don’t think I can do it. Its asleep. I can’t just hit it. But I can’t run away either. I will have to be very careful. My gaze locked on the zombie, I step away quietly, the I start moving sideways. I’m terrified that the sound of my heart beating like a drum might wake him. Some moments just feel really long and there’s nothing you can do to change that. The only way out is through. Don’t do anything rash. Try to hold on. And then I’m past its nook. The rattling of his breathing quiets down as I put more distance between us. I still watch my steps, but I’m walking almost normally now. The cave tightens again into a corridor, still reddish but darker and once I’m around the next corner, I see stars. Actual stars in the night sky. I’m out. Relief washes over me.`, 
        value: true, // -> next sin
        sin: "wrath",
        image: "url('images/red-cave.png')"
    },
    {
        title: "Sloth intro",
        type: "intro",
        text: `I see the moon now, too. It’s gigantic. I think it’s the first time ever since I got lost that I could see the sky. I can see the trees now, too. They look nothing like those from home. They’re crooked, their branches spiky, straight out of a horror movie. The wave of relief crashes inside of me and I feel hollow. Out of the caves, finally, but where am I know? Every now and then, I can catch a pair of orange eyes gleaming from behind a tree, but I’m fresh out of panic. Unfeeling and heavy, I drag myself on. Where to, still no clue. The air feels so nice, like actual normal night air, but it does little to lift my spirits. The trees are few and far between now, like I’m no longer in the woods really. Soon, I’ll be stuck on some open, wide plain of nothing. `,
        sin: "sloth",
        image: "url('images/cursed-trees.jpg')"
    },
     {
        title: "Sloth event",
        type: "event",
        text: `With each step, it’s getting harder to lift my feet. No, really. This isn’t a metaphor. When have my feet become this heavy? This isn’t regular exhaustion. The ground is pulling me down. Did I step into quicksand. A hollow laugh escapes my chest. What a way to go down, finally. And honestly, I want to. All these choices, did I ever make the right one? It’s like I make a new mistake each time I think I’ve learned my lesson. This place is real enough to keep me trapped. But is it real enough to kill me? What if I need to just let go? I’m stuck all the way up to my knees now. I don’t know if I can still free myself. I don’t know if I should try. What if what I needed to do all along is to let it drag me deeper?
        
        `,
        choices: ["let go", "try to keep going"],
        validChoice: 1,
        sin: "sloth",
        image: "url('images/cursed-trees.jpg')"
    },
     {
        title: "Sloth outro - wrong",
        type: "outro",
        text: `This feels good. I mean not good. But for once, I don’t feel bad. Giving up is so nice actually. I just let the ground swallow me. I know there is no next level to this. This is game over.

        Choices, choices, all these voices
        Don’t you just want to slow down?
        Apathy kills misery 
        But it makes you want to drown
        We choose wrong, get ourselves hurt
        Feel like we’re a foolish clown
        The way forward is slippery
        The fall silent, makes no sound
        But all the pain will lead to growth
        Unless you choose to go for sloth
        `, 
        value: false, // -> you died
        sin: "sloth",
        image: "url('images/cursed-trees.jpg')"
    },
      {
        title: "Sloth outro - right",
        type: "outro",
        text: `I don’t exactly know what I’m holding onto at this point, because it feels like I lost myself somewhere in that cave. But I think it’s the moon. Finally a light source that feels real and natural. I keep trying to lift my feet higher, but it’s no use, I’m wading through the earth. It’s too hard and I’m too slow. I know that I can’t do this, it’s no use. But I can’t just give up. And then I catch a flash of orange from the corner of my left eye. It’s a bat! And it’s flying right towards me. I’ve never seen a bat so huge before. I’m glad it’s here, even if it’s just coming for my blood. It’s claws sink into my shoulders. I’m expecting cuts, pain, but instead, I feel a firm grip and I’m slowly being pulled out of the soil. Is it helping me…or is it going to carry me all the way to its lair to feed its whole family?`, 
        value: true, // -> next sin
        sin: "sloth",
        image: "url('images/cursed-trees.jpg')"
    },
    {
        title: "finished",
        text: `I’m flying. I used to dream I could all the time as a child. It’s just like I imagined, except I can’t actually fly. I’m being carried. By a ginormous bat. We’re crossing the open plain. It’s not as wide as I expected and soon, we’re back in the woods. Different woods. I can see houses, warm light shining through their windows. I don’t think bats live in houses. We’re slowing down now and I think we're descending. My feet slam into the ground and I fall to my knees. Confused, I look back up at the bat. It hovers over me for a second and I swear, it shrieks something that sounds like “Make it count, kid”. Then it flies away. I hear footsteps. I turn toward the village and see a girl. For a long moment, we just stand there and stare at each other. Then she smiles. I feel no danger.`,
        sin: "ending",
        image: "url('images/among-humans-again.jpg')"
    }
   
];