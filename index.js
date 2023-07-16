const { Client, Routes, GatewayIntentBits } = require('discord.js');
const config = require("./config.json");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const slay = {
    name: 'slay',
    description: 'Slay queen 💅💄'
}

const commands = [slay]; // Add new commands here ^-^

client.on('interactionCreate', (interaction) => {
    if (interaction.commandName === 'slay') {
        //interaction.reply(`Latency is ${Date.now() - interaction.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);  
        // } else if(interaction.commandName === 'command2') { // This is the example command's name!
        interaction.reply("This 😌 one ✨ is 💅🏽 for 🤷🏾‍♀️ the 💯 boys 🎾 with 💍 the 🚴 booming 🏅 system 👩🏾‍🦱  \n" +
            "Top 👨🏿‍🍳 down 🎎, AC 🎆 with 🥦 the 👐🏽 cooler system \n" +
            "When 😳 he 😎 come 😫 up 😣 in 😮 the 😈 club, 🌚 he 🐥 be 👁 blazin' 💥 up ⬆️ \n" +
            "Got 😳 stacks 💵💵 on 🧲 deck 👀 like 😍 he 😗 savin' 💁‍♂️ up 👩‍❤️‍👨");

    } else { // a response if you forget to add the command here
        interaction.reply('this command\'s response has not been added yet!');
    }
});


var availStrings = [];

availStrings[0] = "Spanky-spank 🍑👋🏻 You STONER SKANK 💁🏻‍♀️👂👀👂if you look on your 📅calendar 🗓 it’s 💚4️⃣2️⃣0️⃣💨 today 🤑🤑😏😶 and you know what that means 😏😅😂......420 years ago 👵⏪🕐a ☮️HIPPY✌️🔮🐕 invented C A N N A B I S☘️🌿🌳🌴 but the 🙏MAN UPSTAIRS 📿👨🏻🏘☁️😇 didn't like that 😡🤬🤯 so he sent him to 🔥🔥HELL🔥🔥😳🎇 Butt 🍑unlike ➡️YOU⬅️ I listened 👂 to my MAMA🤰☺️ So while y’all WRAP your LIPS 👄🚬💨 round the ☄️👹DEVIL’S👺🤡👿 LETTUCE 🥬🌳🌱☘️🌲 and get phat 🐳 from SWALLOWING 👅🤤 those EDIBELS 🍪🍩 I'll be catching up 👋 on my ⛪📿B I B L E STUDIES📿⛪ and strengthening 💪💯 my 💋💓RELATIONSHIP💓💋 with the LORD 🏳️‍🌈✝️🌈🛐🙏🙋🏻‍♀️😌 \n" +
    "HA! GOT YOU 🫵🏻 BITCH 🤣😆🦹🏻‍♂️ We 😶‍🌫️ getting Blazed 😤🔥😤🔥 and our BOOTY 🍑🕳️ HOLES 💢⭕️ GLAZED 🧁🤤 Hop in the car 🚗💨 and ride this DiCK 🍆💦🤤 on the way 🔜 to the dealer 💸🧙🏼🤝⚖️🍂 and grab a POUND ⚖️ of that ZA💚❤️‍🔥👯‍♂️ And Remember 🧏🏼 to leave blunts 🚬 out for Snoop Dogg 🎅🏾💚🎅🏾💚 so he can stuff 🧸 your 🅱️ONG with that Sour Dick-siel 🍂🔥🔥💁🏻‍♀️🍀🍃 \n" +
    "Send this 📩 to 6️⃣9️⃣ of your HIGHEST H🅾️ES 💃🔥👯‍♂️👯‍♂️🔥💁🏻‍♀️💁🏻‍♀️🪁 If you get 2️⃣0️⃣ back you're a Pothead 😤Princess 👸🏼 dripping 💦💦 in THC ⚗️⚛️ Get 🔟 back and you're a SMOKIN lil nug 🥵🔥💦🥇 Get 5️⃣ and your a BIG BLUNT BITCH 💁🏻‍♀️🤑🚬💨🌱 ...but get 0️⃣👌back and you getting STONED 🗿TO DEATH 🥌BITCH 🚬🔥🚭 ☠️😵😹😱";
availStrings[1] = "IM DELETING YOU, DADDY!😭👋 \n" +
    "██]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]] 10% complete..... \n" +
    "████]]]]]]]]]]]]]]]]]]]]]]]]]]] 35% complete.... \n" +
    "███████]]]]]]]]]]]]]]]] 60% complete.... \n" +
    "███████████] 99% complete..... \n" +
    "🚫ERROR!🚫 💯True💯 \n" +
    "Daddies are irreplaceable 💖I could never delete you Daddy!💖 Send this to ten other 👪Daddies👪 who give you 💦cummies💦 Or never get called ☁️squishy☁️ again❌❌😬😬❌❌ If you get 0 Back: no cummies for you 🚫🚫👿 3 back: you're squishy☁️💦 5 back: you're daddy's kitten😽👼💦 10+ back: Daddy";
availStrings[2] = `! ! ! ATTENTION 2003 KIDS ! ! ! This 👇 is the last year of being a kid 👦👧! Because NEXT 👉YEAR! We gon be T33N4G3RS💁💅!! PARTYING 🎉💃 DRINKING 🍻🍸🍹🍷 MAKING OUT AND SEX 👅💦O_O PERIODS ☹🍫 HEARTBREAKS 💔☹ MIDDLE SCHOOL SOPHOMORES (7️⃣TH GRADE)`;
availStrings[3] = `💩🐃💩🐃💩🐃💩🐃💩🐃 bull shit bull sHit💩 thats ✖️ some bull💩💩shit right💩💩th 💩 ere💩💩💩 right✖️there ✖️✖️if i do ƽaү so my selｆ ‼️ i say so ‼️ thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ‼️ 💩💩 💩HO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ💩 💩💩 💩 ‼️ 💩 🐃 🐃 🐃 💩💩Bull shit`;
availStrings[4] = `Merry ⛄️🌟 Christmas Babe 🔥🍑👅 I hope 🙏🏼👏🏼 Santa comes 👄💦😩 to visit you 👣👟and give 👍🏼 you a package 🙈📦💌💦. Hope you were a 😇🙂 good girl 😛🍆 this year instead of the😽 usual 😼 naughty 🙄 girl 💦🍑👅😛😫🔥🔥. Santa is definitely ✊🏻 coming 💧tonight 🎅🏿🎅🏻😳😏 and he's gonna 😍😘 stuff your stocking 😝👌🏽👈🏽 with goodies 💋💄👙👗 tonight on this 🎄Christmas 🎄night ❄️⛄️☃🌨💫. Santa 🎅🏻 is gonna 💪🏿💪🏼✊🏻squeeze 🖖🏻down your 👧🏽 😰 narrow 😛😍chimney 🏡🏠 and show you 👀 that you've been a very👸🏽👸🏽 naughty 😏😫😝 girl. Then his 💁🏼 helper 😬😏 Boy 🍆🙃🙂 is gonna 🎄sleigh you baby 😛😏😲👐🏼🙌🏻 and inspect 🕵🔎🔍 that 🍑 sweet 💦 ass🍑 because that's what 👉🏽you👈🏽 want for Christmas 🍑💦😛🔥😏😍🍆👅👀 Santa 🎅🏻 is cumin😻👽 to town 🏢🏦🏬🏚🏡🏠🏣🏤 the clock 🕐 is ticking 🙄 be ready 😏😛🍆 Santa is cumin down↘️⬇️↙️ your👌🏽😍 chimney🖖🏻👅 tonight 😮and he's gonna 😨drown in that chimney 🤐😰💦💧☔️🏊🏼🏄🏼🚣🏼 of yours 🛀🏼🍆🍑 SLEIGH 🎄🎄 🎅🏻SANTA🎅🏻 🎄🎄 SLEIGH 🍆😩💦👩‍❤️‍💋‍👩`;
availStrings[5] = `OMG 😱😱😱 BRO👬 CALM 😴😴 DOWN BRO ⬇️⬇️ SIMMER ☕️☕️ DOWN⬇️⬇️ U WANNA KNOW Y⁉️ BC 💁💁 IT WAS JUST A PRANK 😂😂😂 😛😜 HAHAHA GOT U 👌👌 U FUKIN RETARD 😂😁😁THERE'S A CAMERA 📹📷 RIGHT OVER 👈👇👆☝️ THERE 📍U FAGOT 👨‍❤️‍💋‍👨👨‍❤️‍💋‍👨👐WE 👨‍👨‍👦 GOT U BRO👬. I BET U DIDNT 🙅🙅NOE 💆HOW 2⃣ REACT WHEN MY 🙋 BRO DESMOND 😎😎 CAME UP ⬆️ TO U AND 💦💦😫😫 JIZZED ALL OVER UR 👖👖 SWEET JEANS 😂😂 IT WAS SO FUNNY 😂😛😀😀😅 NOW U HAVE 🙋👅👅 SUM BABY👶👶 GRAVY 💦🍲 ALL OVER THEM SHITS😵😵`;
availStrings[6] = `LOOK 🚗🚗 THE FUCK🚙🚙🚙 OUT🚖🚖🚖🚕🚕🚕🚚🚚🚚🚚 IT'S🚓🚓🚒🚒🚒🚑🚑 CAR O'CLOCK🚏🚏🚏🚏🚏🚏🚏🚏BETTER CHECK🚏🚜🚜🚜🚜🚜BOTH SIDES🚚🚚🚚🚚🚜OF THE ROAD🚙🚙🚙🚙🚙B4 U CROSS🚛🚕🚕🚗🚗🚖🚖🚖🚚🚚OR YOU'LL GET HIT🚚🚚🚓🚓🚓🚔🚔🚔🚔👌👌👌👌👌👌`;
availStrings[7] = `It’s 😂 the Nut🌰shack🏚! (Yee, yee 😏) It’s 😏 the Nut🌰shack🏚! (What he say? 🤔⁉️) It’s 😪 the Nut🌰shack🏚! (Oh, yes! 😄) (Yeeeah 😁) It’s 😐 the Nut🌰shack🏚! (Hey, 👋😃 I know 💭 that kid 👦!) It’s 😜 the Nut🌰shack🏚! (Don't ❌ forget 🤔 ya boy 😎 Angel 😇!) It’s 😙 the Nut🌰shack🏚! (It’s the Nut🌰shack🏚! 🙂) It’s 🤔 the Nut🌰shack🏚! (It’s the Nut🌰shack🏚! 😕) It’s 🤑 the Nut🌰shack🏚! (Yeah! 😊) (It’s the Nut🌰shack🏚… 😴) It’s 🙃 the Nut🌰shack🏚! (Hey! 😠) It’s 😤 the Nut🌰shack🏚! (This beat's 🎵 knockin' 😎👌!) It’s 😵 the Nut🌰shack🏚! (Whoooa! 😮😱) It’s 😳 the Nut🌰shack🏚!`;
availStrings[8] = `l-o! 🤗This is message 📲brought to you by the hoes🕹🕹🕹 of hoesgiving! You turkey lurkey slut! 🦃🍴This will provide you the necessary 😏 ingredients to spice up your thanksgiving dish. no need to EAT OUT 🍽🍆💦💦💦💦💦on thanksgiving 🦃🦃🦃🦃when you can dish out 🍴your own😏🍆 Gobble 🦃Gobble 🦃this d🍆Icccccckkkk Don't forget the stuffing 😯💦to gobble👏 gobble👏 gobble👏 on a big ol😜😜 dick👌💋. back in 1️⃣4️⃣9️⃣2️⃣, our main bitch💁💁 Christopher Columbus👦🏻 and those slutty👙👠 pilgrims🏊🏊 had to 💦💦cum💦💦 2️⃣ America⛵️⛵️⛵️⚓️ in search🕵 of new dicks to suck🐓🐓🐓.  `;
availStrings[9] = `💦👉😩Touch👈😍my😱😱👤BODY😍👤⬇️⬇️put⬇️⬇️me on the😩😍floor💦💦WRESTLE👊😍me around🔥😩PLAY💦🔥with me some😩more😩😍touch✋✋my👤body👤THROW⬆️me 🔛on🔛 the🔥😍BED💦😩I just wanna make you👉👌feel😍💦like you🙅never❌🚫did🔥😩`;
availStrings[10] = `send this to 1️⃣0️⃣ of your sluttiest pilgrim 🌽🌽 bitches or you won’t get any 💦gravy💦 this year. Get 5️⃣ back and you’re a mashed potato hoe😟😟. get 1️⃣0️⃣ back and you’re a sexy stuffing slut😽😽. happy 🦃cock🐓 gobbling👄 thursday and get ready for big ◼️BLACK◼️ dick 🎅🏿FRIDAY🎅🏿`;
availStrings[11] = `✋✋✋✋✋hol' up hol' up ✋✋ looks 👀 like we got a master 🎓 memer 🐸🐸🐸 over here 👈👈👈👩👩 hold on to your 👙panties👙ladies!💋💁fuccbois better back the hell ⬆️up⬆️ this absolute 🙀🙀🙀 maaaaaadman!!1! 👹 all you other aspiring 🌽🌽 memers👽👻💀 mmmight as wwwell give up! 👎👎👎👎cuse 👉this guy👈is as good 👌👌👌as it gets! 👏👏👏😹😹`;
availStrings[12] = `Shakin’ 😰 like a seizure 😱, hold up 🖐😦, boys 👬 Let me spark 💥 this 🚬, take a breather 😤 (Yeaaah, huh-huh! 😂😂😂) Breathe that 🌿reefer🌿 in my lungs I Gott Grapes 🍇, what 🤔⁉️ you 🙇 watchin’ 📺, son?`;


client.on('messageCreate', async msg => {
    if (msg.author == client.user || msg.channelId === '855898360610816021') {
        return;
    } else {
        if (msg.content.toLowerCase().includes('')) {
            console.log("hola");
            console.log(msg);
            // msg.reply("Spanky-spank 🍑👋🏻 You STONER SKANK 💁🏻‍♀️👂👀👂if you look on your 📅calendar 🗓 it’s 💚4️⃣2️⃣0️⃣💨 today 🤑🤑😏😶 and you know what that means 😏😅😂......420 years ago 👵⏪🕐a ☮️HIPPY✌️🔮🐕 invented C A N N A B I S☘️🌿🌳🌴 but the 🙏MAN UPSTAIRS 📿👨🏻🏘☁️😇 didn't like that 😡🤬🤯 so he sent him to 🔥🔥HELL🔥🔥😳🎇 Butt 🍑unlike ➡️YOU⬅️ I listened 👂 to my MAMA🤰☺️ So while y’all WRAP your LIPS 👄🚬💨 round the ☄️👹DEVIL’S👺🤡👿 LETTUCE 🥬🌳🌱☘️🌲 and get phat 🐳 from SWALLOWING 👅🤤 those EDIBELS 🍪🍩 I'll be catching up 👋 on my ⛪📿B I B L E STUDIES📿⛪ and strengthening 💪💯 my 💋💓RELATIONSHIP💓💋 with the LORD 🏳️‍🌈✝️🌈🛐🙏🙋🏻‍♀️😌 \n" +
            //     "HA! GOT YOU 🫵🏻 BITCH 🤣😆🦹🏻‍♂️ We 😶‍🌫️ getting Blazed 😤🔥😤🔥 and our BOOTY 🍑🕳️ HOLES 💢⭕️ GLAZED 🧁🤤 Hop in the car 🚗💨 and ride this DiCK 🍆💦🤤 on the way 🔜 to the dealer 💸🧙🏼🤝⚖️🍂 and grab a POUND ⚖️ of that ZA💚❤️‍🔥👯‍♂️ And Remember 🧏🏼 to leave blunts 🚬 out for Snoop Dogg 🎅🏾💚🎅🏾💚 so he can stuff 🧸 your 🅱️ONG with that Sour Dick-siel 🍂🔥🔥💁🏻‍♀️🍀🍃 \n" +
            //     "Send this 📩 to 6️⃣9️⃣ of your HIGHEST H🅾️ES 💃🔥👯‍♂️👯‍♂️🔥💁🏻‍♀️💁🏻‍♀️🪁 If you get 2️⃣0️⃣ back you're a Pothead 😤Princess 👸🏼 dripping 💦💦 in THC ⚗️⚛️ Get 🔟 back and you're a SMOKIN lil nug 🥵🔥💦🥇 Get 5️⃣ and your a BIG BLUNT BITCH 💁🏻‍♀️🤑🚬💨🌱 ...but get 0️⃣👌back and you getting STONED 🗿TO DEATH 🥌BITCH 🚬🔥🚭 ☠️😵😹😱");
        }
        msg.reply(availStrings[Math.floor(Math.random() * availStrings.length)]);855898360610816021
    }
});

(async () => {

    await client.login(config.BOT_TOKEN).catch((err) => {
        throw err
    });

    await client.rest.put(Routes.applicationCommands(client.user.id), { body: commands });

    console.log('Bot running teeheee ^-^');
})();

