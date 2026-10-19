import { BedtimeStory } from '../types';

export const BEDTIME_STORIES: BedtimeStory[] = [
  {
    id: 'story-1',
    number: 1,
    title: 'The Rabbit Garden of Moonlight',
    subtitle: 'A tale of gentle courage and shared treats under the silver stars',
    category: 'Gentle Friendship',
    themeColor: '#ec4899',
    icon: '🐰',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Whispering Clovers',
        text: 'At the foot of Whispering Hill, where the day’s warmth softened into cool lilac shadows, lived a little white rabbit named Barnaby. While other rabbits were fast asleep in their earthen burrows, Barnaby sat near the silver brook, his long ears twitching to the faint sound of music. Every night when the crescent moon reached its highest arch, the wild clovers began to hum a sweet, sleepy chime. "Listen closely," his grandmother used to tell him, "for the garden only sings to those whose hearts are peaceful and kind."'
      },
      {
        heading: 'Chapter 2: The Lost Star-Carrot',
        text: 'Tonight, the chime was softer than usual, trembling like a timid breath. Barnaby hopped gently between the dewy fern leaves and discovered a tiny glowing carrot embedded in the moss. It wasn’t an ordinary garden vegetable—it had fallen straight from the belt of the Great Star Constellation! Beside it sat Luna, a shy young bunny with velvet grey ears who had never ventured outside her burrow at night. "I wished upon a star for something sweet to share with my family," Luna whispered softly, "and then this starry light tumbled into the moss."'
      },
      {
        heading: 'Chapter 3: The Garden’s Gift',
        text: 'Barnaby rubbed his nose against Luna’s reassuringly. "A star-carrot is meant to be shared," he said with a warm smile. Together, they gently lifted the luminous treat with their paws. As they carried it across the meadow, every clover they brushed against burst into soft starlight luminescence, lighting their path all the way back to the quiet warren. The night air was warm, smelling of honeysuckle and wild mint.'
      }
    ],
    choicePrompt: 'How should Barnaby and Luna share the magical star-carrot?',
    branch: {
      optionA: 'Plant a seed of the star-carrot in the warren garden so it grows every full moon.',
      optionB: 'Slice the carrot into tiny glowing bits for all the sleeping woodland creatures.',
      branchA: 'Barnaby dug a gentle hollow in the softest warren loam. As Luna pressed the star-seed into the earth, silver shoots unfurled instantly, shedding a nightlight glow over every sleeping burrow so no baby bunny would ever fear the dark again.',
      branchB: 'With careful nibbles, they shared the sparkling slices across the mossy glade. Every sleeping badger, dormouse, and robin that tasted a crumb dreamed of flying across fields of golden sunlight and sweet clover.'
    },
    conclusion: 'Barnaby and Luna curled together beneath the warm roots of the great willow. As the silver moon watched over Whispering Hill, both bunnies closed their heavy eyes, content in the knowledge that kindness is the brightest light in the entire universe.',
    translations: {
      ta: {
        title: 'நிலவொளி முயல் தோட்டம்',
        subtitle: 'வெள்ளி நட்சத்திரங்களின் கீழ் மலர்ந்த மென்மையான நட்பின் கதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: முணுமுணுக்கும் புல்வெளிகள்',
            text: 'மெல்லிய காற்று வீசும் மலையடிவாரத்தில், பர்னபி என்ற சின்னஞ்சிறு வெண் முயல் தன் குடும்பத்துடன் வாழ்ந்து வந்தது. இரவில் மற்ற முயல்கள் உறங்கும் போது, பர்னபி வெள்ளி ஓடையின் அருகே அமர்ந்து நிலவொளியின் மெல்லிய இசையைக் கேட்பது வழக்கம். "அமைதியான மனம் கொண்டவர்களுக்கு மட்டுமே இந்த நிலவொளி தோட்டம் தாலாட்டுப் பாடும்" என்று அவனது பாட்டி கூறியது அவனுக்கு நினைவுக்கு வந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: விண்மீன் கேரட்',
            text: 'அன்று இரவு, மெல்லிய தேம்பல் சத்தம் கேட்டது. பர்னபி புற்களின் ஊடே எட்டிப் பார்த்தான். அங்கே லூனா என்ற சாம்பல் நிற முயல்குட்டி அமர்ந்திருந்தது. அதன் அருகில் வானத்திலிருந்து விழுந்த ஒரு விண்மீன் கேரட் தங்க நிறத்தில் மின்னிக் கொண்டிருந்தது. "என் குடும்பத்திற்கு ஒரு நல்ல இனிப்பு கிடைக்க வேண்டும் என்று நான் வானத்து நிலாவிடம் வேண்டினேன், அப்போது இது கீழே விழுந்தது" என்றாள் லூனா.'
          },
          {
            heading: 'அத்தியாயம் 3: பகிர்ந்தளித்தலின் மகிழ்ச்சி',
            text: '"விண்மீன் பரிசுகள் பகிர்ந்துகொள்ளவே படைக்கப்பட்டவை" என்று பர்னபி அன்போடு கூறினான். இருவரும் இணைந்து அந்த ஒளிரும் கேரட்டைத் தூக்கிக் கொண்டு புல்வெளியில் நடந்தார்கள். அவர்கள் கால் பட்ட இடமெல்லாம் பூக்கள் மலர்ந்து தங்க ஒளியை உமிழ்ந்தன.'
          }
        ],
        choicePrompt: 'பர்னபியும் லூனாவும் விண்மீன் கேரட்டை எவ்வாறு பயன்படுத்த வேண்டும்?',
        branch: {
          optionA: 'தோட்டத்தில் ஒரு பகுதியை நட்டு வைத்து மாதந்தோறும் நிலவொளியில் வளரச் செய்தல்.',
          optionB: 'சிறு துண்டுகளாக நறுக்கி உறங்கும் காட்டு விலங்குகள் அனைவருக்கும் பகிர்ந்தளித்தல்.',
          branchA: 'அவர்கள் அந்த விதையை மண்ணில் நட்டார்கள். உடனே நிலவொளி செடிகள் முளைத்து காடு முழுமைக்கும் இனிமையான வெளிச்சத்தை வழங்கின. இனி எந்த முயல்குட்டியும் இருட்டைக் கண்டு அஞ்சத் தேவையில்லை.',
          branchB: 'அவர்கள் கேரட்டை அனைத்து விலங்குகளுக்கும் பகிர்ந்து ஊட்டினர். அதைச் சுவைத்த பறவைகளும் விலங்குகளும் மகிழ்ச்சியான இனிமையான கனவுகளைக் கண்டன.'
        },
        conclusion: 'இரு முயல்களும் பெரிய வில்லோ மரத்தின் வேர்களின் கீழ் கதகதப்பாய் படுத்துக் கொண்டன. நிலா தன் அன்பான வெளிச்சத்தால் அவர்களைப் போர்த்தியது. அன்புதான் உலகிலேயே மிகப்பெரிய ஒளி என்பதை உணர்ந்து அவர்கள் இனிதே உறங்கினர்.'
      },
      fr: {
        title: 'Le Jardin des Lapins au Clair de Lune',
        subtitle: 'Un conte de douceur et de friandises partagées sous les étoiles',
        chapters: [
          {
            heading: 'Chapitre 1 : Les Trèfles Chuchotants',
            text: 'Au pied de la colline aux Murmures vivait Barnabé, un petit lapin blanc à la curiosité douce. Alors que les siens dormaient dans leurs terriers douillets, Barnabé aimait écouter le chant du ruisseau d’argent qui caressait les trèfles nocturnes.'
          },
          {
            heading: 'Chapitre 2 : La Carotte des Étoiles',
            text: 'Ce soir-là, une douce lueur dorée brillait dans la mousse. C’était une carotte tombée tout droit d’une constellation céleste ! À côté se tenait Luna, une jeune lapine timide qui n’avait jamais osé sortir la nuit.'
          },
          {
            heading: 'Chapitre 3 : Le Don Partagé',
            text: 'Barnabé s’approcha avec un doux sourire : « Les trésors du ciel sont plus beaux lorsqu’on les partage. » Ensemble, ils portèrent la carotte lumineuse qui illuminait doucement le chemin du retour.'
          }
        ],
        choicePrompt: 'Comment Barnabé et Luna doivent-ils partager la carotte étoilée ?',
        branch: {
          optionA: 'Planter une graine dans le terrier pour qu’elle illumine chaque nuit de pleine lune.',
          optionB: 'Partager de délicieux morceaux avec tous les animaux endormis de la forêt.',
          branchA: 'Une douce pousse de lumière s’éleva du sol, offrant une veilleuse apaisante à tous les petits lapereaux de la colline.',
          branchB: 'Chaque petit animal des bois qui goûta une miette s’endormit avec un sourire radieux, rêvant de prairies ensoleillées.'
        },
        conclusion: 'Blottis l’un contre l’autre sous les racines chaleureuses du grand saule, Barnabé et Luna s’endormirent dans la paix la plus pure.'
      },
      zh: {
        title: '月光下的小兔花园',
        subtitle: '银色星空下关于温柔与分享的美丽故事',
        chapters: [
          {
            heading: '第一章：低语的三叶草',
            text: '在低语山丘脚下，住着一只名叫巴纳比的小白兔。当其他兔子都在暖和的洞穴里熟睡时，巴纳比总喜欢坐在清澈的溪水边，静静聆听夜风吹过三叶草时的微柔和鸣。'
          },
          {
            heading: '第二章：坠落的星光胡萝卜',
            text: '今晚的草丛里泛起了一抹温暖的金光。那不是普通的萝卜，而是一颗从夜空中掉落的星光胡萝卜！旁边坐着胆小的小灰兔露娜，正轻轻擦着眼泪。'
          },
          {
            heading: '第三章：温暖的馈赠',
            text: '巴纳比轻轻碰了碰露娜的鼻子：“天上的星星之所以美丽，是因为它们把光芒分给了所有人。”两只小兔子一起抬起胡萝卜，脚下的草地泛起温暖的花瓣清香。'
          }
        ],
        choicePrompt: '巴纳比和露娜应该怎样分享这根星光胡萝卜呢？',
        branch: {
          optionA: '把它种在洞穴的花园里，让月夜永远充满柔和的守夜光芒。',
          optionB: '切成闪亮的小薄片，送给森林里每一个正在入睡的小动物。',
          branchA: '星光种子在泥土里悄然发芽，生长出散发淡淡香气的银色叶片，整个兔子村庄从此再也不怕夜晚的黑暗。',
          branchB: '森林里的小鸟、睡鼠和小鹿都尝到了甜美的一小口，带着满心的幸福沉入了芬芳的梦乡。'
        },
        conclusion: '两只小兔子依偎在大柳树温暖的树根旁，在皎洁柔和的月光照耀下，甜甜地睡着了。'
      }
    }
  },
  {
    id: 'story-2',
    number: 2,
    title: "The Baby Dragon's First Spark",
    subtitle: 'Discovering that the purest fire is the warmth of kindness',
    category: 'Bravery & Wonder',
    themeColor: '#10b981',
    icon: '🐲',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Mountain of Embers',
        text: 'High upon Mount Whisperstone, where clouds rested like soft pillows on purple crags, lived Ember. Ember was the smallest dragon in the mountain clan. His older brothers could blow towering pillars of orange flame to toast marshmallows, but whenever Ember sneezed, only tiny rainbow-colored bubbles floated out of his nostrils. "Don’t rush your fire, little one," his mother hummed, wrapping him in her velvet wings. "Fire comes from what you love most."'
      },
      {
        heading: 'Chapter 2: The Cold Little Hedgehog',
        text: 'One frosty autumn evening, a biting wind swept through the valley. As Ember practiced blowing sparks near the canyon edge, he heard a shivering whimper. Curled inside a pile of frozen brambles was Pipkin, a tiny hedgehog whose prickly coat was frosted with icicles. "I lost my way to my winter den," Pipkin shivered, his little paws trembling with the cold.'
      },
      {
        heading: 'Chapter 3: The Spark of Compassion',
        text: 'Ember felt a surge of tenderness in his chest. He scooped the tiny creature gently into his warm scaled palms. He took a deep, steady breath, thinking not of great roaring fires, but of warm blankets, warm tea, and safety. When he opened his jaws, out poured a gentle, radiant violet glow—not a destructive flame, but a soothing, perpetual ember of starlight warmth.'
      }
    ],
    choicePrompt: 'How will Ember use his newfound starlight warmth for the mountain?',
    branch: {
      optionA: 'Guide Pipkin home and light a cozy starlight hearth in the hedgehog burrow.',
      optionB: 'Fly over the chilly forest to warm the nests of all the woodland families.',
      branchA: 'Ember carried Pipkin straight to his den and breathed a gentle glowing ember into the hearthstone. The burrow filled with a cozy cinnamon aroma that kept the entire hedgehog clan warm all winter.',
      branchB: 'Ember glided softly above the treetops, scattering warm violet sparks that dissolved the frost from every squirrel nest and bird branch without harming a single leaf.'
    },
    conclusion: 'When Ember returned to Mount Whisperstone, his dragon brothers gathered round in admiration. Ember curled up between his mother’s claws, knowing that the greatest flame a dragon can possess is a warm, loving heart.',
    translations: {
      ta: {
        title: 'சின்ன டிராகனின் முதல் தீப்பொறி',
        subtitle: 'அன்பின் கதகதப்பே உலகின் மிகச்சிறந்த ஒளி என்பதை உணர்ந்த கதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: மலை உச்சியில் ஒரு டிராகன்',
            text: 'பனி படர்ந்த எம்பர் மலையில் எம்பர் என்ற குட்டி டிராகன் வாழ்ந்து வந்தது. அவனது சகோதரர்கள் பெரிய நெருப்புப் பிழம்புகளை உருவாக்க முடிந்தது. ஆனால் எம்பரின் வாயிலிருந்து வண்ண வண்ண சோப்புக் குமிழிகள் மட்டுமே வெளிவந்தன. "கவலைப்படாதே கண்ணா, உன் இதயத்தில் அன்பு நிறையும் போது உண்மையான தீ வெளிப்படும்" என்றாள் தாய்.'
          },
          {
            heading: 'அத்தியாயம் 2: குளிரில் நடுங்கிய முள்ளம்பன்றி',
            text: 'ஒரு நாள் கடுமையான குளிர் காற்று வீசியது. பாறைகளுக்கு நடுவே பிப்கின் என்ற சிறிய முள்ளம்பன்றி குளிரில் நடுங்கிக் கொண்டிருந்தது. பனியால் அதன் கால்கள் உறைந்திருந்தன.'
          },
          {
            heading: 'அத்தியாயம் 3: அன்பின் ஒளி',
            text: 'எம்பரின் மனம் இரக்கத்தால் உருகியது. முள்ளம்பன்றியை தன் உள்ளங்கையில் தூக்கிக் கொண்டான். மற்றவர்களை அழிக்க அல்ல, காப்பாற்ற வேண்டும் என்ற எண்ணம் அவன் மனதில் தோன்றியதும், அவன் வாயிலிருந்து ஊதா நிற விண்மீன் ஒளி மெல்ல வெளிப்பட்டது.'
          }
        ],
        choicePrompt: 'எம்பர் தனது விண்மீன் ஒளியால் என்ன செய்ய வேண்டும்?',
        branch: {
          optionA: 'முள்ளம்பன்றியை அதன் வீட்டிற்கு அழைத்துச் சென்று குளிர் காய வைத்தல்.',
          optionB: 'காடு முழுவதும் பறந்து சென்று குளிரில் வாடும் பறவைகளுக்கு கதகதப்பு அளித்தல்.',
          branchA: 'எம்பர் முள்ளம்பன்றியின் வீட்டிற்குச் சென்று அங்குள்ள அடுப்பில் அணையா விளக்கை ஏற்றி வைத்தான். குளிர்காலம் முழுவதும் அவர்கள் சுகமாக வாழ்ந்தனர்.',
          branchB: 'மரங்களின் மீது பறந்து சென்று பனியை உருக வைத்து, அனைத்து பறவைகளின் கூடுகளையும் கதகதப்பாக மாற்றினான்.'
        },
        conclusion: 'எம்பரின் சகோதரர்கள் அவனது அன்பான ஒளியைப் பார்த்து வியந்தனர். தாயின் அரவணைப்பில் அவன் நிம்மதியாக உறங்கினான்.'
      }
    }
  },
  {
    id: 'story-3',
    number: 3,
    title: "The Mermaid's Pearl Palace",
    subtitle: 'A journey beneath sapphire waves to find the lullaby of the sea',
    category: 'Ocean Wonders',
    themeColor: '#06b6d4',
    icon: '🧜‍♀️',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Turquoise Depths',
        text: 'Far beneath the sunlit crests of the Coral Sea, where gentle tides rocked like a swing, stood the Sunken Palace of Pearls. In this tranquil underwater kingdom lived Princess Coralina, a young mermaid whose tail shimmered with the shades of ocean seaglass. While other mermaids loved racing with the swift flying fish, Coralina loved collecting ancient seashell harps and listening to the deep, slow pulse of the ocean tides.'
      },
      {
        heading: 'Chapter 2: The Silent Clam',
        text: 'One morning, an old sea turtle named Barnaby paddled into the palace gates. "The Grand Tide Pearl has fallen quiet," Barnaby reported with a furrowed brow. "Without its soothing hum, the baby fish are having trouble finding calm waters to rest." Coralina swam down to the lowest cavern where the great iridescent pearl rested upon a bed of sea anemones. It was cloudy and still, having absorbed the worries of passing storms.'
      },
      {
        heading: 'Chapter 3: The Song of Stillness',
        text: 'Coralina gently laid her hands upon the smooth surface of the pearl. Instead of playing an energetic fanfare, she began to sing a gentle ocean lullaby that her mother had taught her—a melody of gentle waves rolling onto quiet sandy beaches, of sunbeams warming shallow pools, and of stars reflecting on mirror-smooth water.'
      }
    ],
    choicePrompt: 'How should Coralina seal the pearl’s soothing song?',
    branch: {
      optionA: 'Place a crown of glowing bioluminescent moss atop the pearl to shine like an ocean nightlight.',
      optionB: 'Invite the friendly dolphins to circle the pearl, chiming resonant bell harmonies.',
      branchA: 'The glowing moss embraced the pearl with turquoise warmth. The stone began to hum a sweet, steady lullaby that drifted through every coral archway, guiding tired fish into sweet oceanic dreams.',
      branchB: 'Three graceful dolphins leapt in circular dances, sending ring bubbles of chime frequencies that polished the pearl until it shone brighter than the full moon above.'
    },
    conclusion: 'The Great Pearl sang once more, sending waves of pure serenity across seven oceans. Coralina rested inside her giant scallop bed, drifting peacefully to the eternal rhythm of the sea.',
    translations: {
      ta: {
        title: 'கடற்கன்னியின் முத்து அரண்மனை',
        subtitle: 'நீல அலைகளுக்கு அடியில் தாலாட்டு முத்தைத் தேடிய பயணம்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: நீலக் கடல் ஆழம்',
            text: 'பவளப் பாறைகள் நிறைந்த ஆழ்கடலில், கோரலினா என்ற கடற்கன்னி வாழ்ந்து வந்தாள். அவளது வால் கடல் நீல நிறத்தில் பளபளத்தது. அவள் சிப்பி யாழ்களை மீட்டவும் கடலின் அமைதியான ஓசையைக் கேட்கவும் விரும்புவாள்.'
          },
          {
            heading: 'அத்தியாயம் 2: அமைதியான முத்து',
            text: 'கடல் வாழ் உயிரினங்களுக்கு தாலாட்டு பாடும் மகா முத்து தன் ஒளியை இழந்து விட்டதாக ஒரு பெரிய ஆமை கூறியது. புயல்களின் சத்தத்தால் அந்த முத்து பயந்து போயிருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 3: அன்பின் தாலாட்டு',
            text: 'கோரலினா தன் மென்மையான கரங்களால் முத்தைத் தொட்டாள். தன் தாயார் கற்றுக்கொடுத்த அமைதியான அலைகளின் தாலாட்டை இனிமையாகப் பாடினாள்.'
          }
        ],
        choicePrompt: 'கோரலினா முத்தின் ஒளியை எவ்வாறு நிலைநிறுத்த வேண்டும்?',
        branch: {
          optionA: 'ஒளிரும் கடல் பாசியால் முத்திற்கு கிரீடம் சூட்டி இரவு விளக்காக மாற்றுதல்.',
          optionB: 'டால்பின்களை அழைத்து வந்து இனிமையான மணி ஓசையை இசைக்கச் செய்தல்.',
          branchA: 'ஒளிரும் பாசி முத்தைச் சுற்றிலும் அழகான ஒளியைப் பரப்பியது. ஆழ்கடல் முழுவதும் இனிமையான அமைதி நிலவியது.',
          branchB: 'டால்பின்கள் முத்தைச் சுற்றி நடனமாடி நீர் குமிழிகளால் இசை எழுப்பின. முத்து மீண்டும் பிரகாசமாக மின்னியது.'
        },
        conclusion: 'கடல் அன்னை பாடும் தாலாட்டைக் கேட்டு அனைத்து மீன்களும் கோரலினாவும் அமைதியாகத் துயிலில் ஆழ்ந்தனர்.'
      }
    }
  },
  {
    id: 'story-4',
    number: 4,
    title: 'The Dream Train',
    subtitle: 'Boarding the starlit express that carries weary minds to sweet slumber',
    category: 'Sky Journeys',
    themeColor: '#4338ca',
    icon: '🚂',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Midnight Whistle',
        text: 'At the exact moment when the tall grandfather clock in the hallway chimed midnight, a faint, rhythmic sound echoed outside Oliver’s bedroom window: "Chug-a-chug, chug-a-chug, woo-wooo!" Oliver peered through the glass and gasped in wonder. Gliding on glowing rails of moonlight that hovered twenty feet in the air was a magnificent train made of polished mahogany, brass bells, and silver wheels that threw sparks of starlight.'
      },
      {
        heading: 'Chapter 2: The Conductor’s Ticket',
        text: 'The train paused smoothly at Oliver’s balcony. A conductor stepped onto the moonlit platform—a gentle brown bear named Barnaby wearing a brass-buttoned vest and gold pocket watch. "Ticket, please, young dream traveler," Barnaby chuckled with a warm, rumbling voice. "How do I get a ticket?" Oliver asked. "Your ticket is a single peaceful thought," the conductor explained gently.'
      },
      {
        heading: 'Chapter 3: Crossing the Cloud Viaduct',
        text: 'Oliver stepped aboard into Car Number Seven, where velvety armchairs were stuffed with downy feathers and flannel blankets smelling of lavender were folded neatly on every seat. Outside the wide panoramic windows, the train climbed silently through billowing apricot and indigo clouds, crossing towering viaducts made of woven moonbeams.'
      }
    ],
    choicePrompt: 'Where should the Dream Train take Oliver before sleep?',
    branch: {
      optionA: 'Through the Valley of Floating Books, where fairy tales read themselves aloud.',
      optionB: 'Across the Nebula Ocean, where glowing space whales sing bedtime harmonies.',
      branchA: 'The train gently rolled past spiraling shelves of flying books. Each passenger was visited by a friendly glowing tome that opened and softly read their favorite bedtime story until their eyelids grew heavy.',
      branchB: 'Gliding along tracks over the purple nebula, three colossal celestial whales breached the starlight waves, their gentle baritone song vibrating like a warm, comforting cradle.'
    },
    conclusion: 'The rhythmic clatter of wheels against rails slowed to a soothing, steady lullaby. Oliver snuggled deep into his velvet compartment berth, smiling as the Dream Train carried him safely into tomorrow.',
    translations: {
      ta: {
        title: 'கனவுத் தொடர்வண்டி',
        subtitle: 'நிலவொளிப் பாதையில் விண்மீன்களை நோக்கிப் பயணித்த மர்ம ரயில்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: நள்ளிரவு மணி ஓசை',
            text: 'சரியாக நள்ளிரவு 12 மணிக்கு ஆலிவரின் ஜன்னலுக்கு வெளியே ஒரு இனிமையான ஒலி கேட்டது: "கூ... சக் சக்!" ஆலிவர் ஜன்னலைத் திறந்து பார்த்தான். காற்றில் மிதக்கும் வெள்ளிப் பாதையில் ஒரு அழகிய மாய ரயில் வந்து நின்றது.'
          },
          {
            heading: 'அத்தியாயம் 2: கரடி டிக்கெட் பரிசோதகர்',
            text: 'ரயிலிலிருந்து பர்னபி என்ற பெரிய கரடி கோட்டு அணிந்து வெளிவந்தது. "கனவுப் பயணத்திற்கான டிக்கெட் எங்கே தம்பி?" என்று கேட்டது. "என்னிடம் டிக்கெட் இல்லையே" என்றான் ஆலிவர். "ஒரு நல்ல அமைதியான எண்ணமே இந்த ரயிலின் டிக்கெட்" என்று கரடி புன்னகைத்தது.'
          },
          {
            heading: 'அத்தியாயம் 3: மேகப் பாலம்',
            text: 'ஆலிவர் ரயிலில் ஏறினான். உள்ளே பஞ்சு போன்ற இருக்கைகளும், லாவெண்டர் நறுமணம் கொண்ட போர்வைகளும் இருந்தன. ரயில் பஞ்சு மேகங்களின் ஊடே மெல்லப் பயணித்தது.'
          }
        ],
        choicePrompt: 'ரயில் ஆலிவரை எங்கு அழைத்துச் செல்ல வேண்டும்?',
        branch: {
          optionA: 'பறக்கும் புத்தகங்கள் நிறைந்த விண்வெளி நூலகத்திற்கு அழைத்துச் செல்லுதல்.',
          optionB: 'விண்மீன் திமிங்கலங்கள் பாடும் விண்வெளிப் பெருங்கடலுக்குச் செல்லுதல்.',
          branchA: 'ரயில் புத்தகங்கள் மிதக்கும் உலகிற்குச் சென்றது. அங்கே ஆலிவருக்குப் பிடித்த கதைகள் காற்றில் இனிமையாக ஒலித்தன.',
          branchB: 'நீல விண்வெளியில் திமிங்கலங்கள் தாலாட்டுப் பாடுவதைக் கேட்டு ஆலிவர் மகிழ்ச்சியடைந்தான்.'
        },
        conclusion: 'ரயிலின் மெதுவான அசைவில் ஆலிவர் தன் கண்களை மூடி ஆழ்ந்த உறக்கத்தில் மூழ்கினான்.'
      }
    }
  },
  {
    id: 'story-5',
    number: 5,
    title: 'The Library of Flying Books',
    subtitle: 'Inside the endless tower where stories choose their listeners',
    category: 'Magic & Knowledge',
    themeColor: '#8b5cf6',
    icon: '📚',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Spiral Staircase',
        text: 'Hidden behind the grandfather clock in Master Aldous’s study was a narrow wooden spiral staircase that wound upward forever into the midnight sky. Maya climbed the smooth cedar steps until she stepped onto the threshold of the Great Starlight Atrium. Here, there were no static bookshelves. Thousands of antique books floated gracefully through the air like colorful leather butterflies, their pages gently fluttering in a warm breeze scented with vanilla and old parchment.'
      },
      {
        heading: 'Chapter 2: The Whispering Encyclopedia',
        text: 'A stately velvet-covered volume with golden ribbon bookmarks drifted down and hovered before Maya’s chest. "Shhh," whispered an owl perched atop a brass brass globe. "In this library, you do not choose the book; the book that has the wisdom you need finds you." The floating book nudged Maya’s fingers eagerly, asking to be opened.'
      },
      {
        heading: 'Chapter 3: The Living Pages',
        text: 'Maya turned the gilded clasp. Instantly, the words on the page rose into the air in three-dimensional glowing calligraphy, transforming the room around her into an enchanted mossy clearing where a friendly dragon was offering tea to a family of badgers.'
      }
    ],
    choicePrompt: 'What chapter of the magical book should Maya explore next?',
    branch: {
      optionA: 'The Secret of the Night Sky, learning the names of guardian stars.',
      optionB: 'The Whispering Gardens, discovering remedies made of moonlight and mint.',
      branchA: 'The pages projected the night constellations like an umbrella of crystal diamonds above Maya’s head, each star softly singing its ancient name to comfort her.',
      branchB: 'Fragrant illustrations of peppermint and chamomile blossomed in three dimensions, filling Maya’s heart with the deepest calm and serenity.'
    },
    conclusion: 'Maya curled into a deep emerald reading chair as the floating books gently nestled back onto cedar roosts like roosting birds. With the soft flutter of pages acting as a lullaby, she fell fast asleep.',
    translations: {
      ta: {
        title: 'பறக்கும் புத்தகங்களின் நூலகம்',
        subtitle: 'கதைகள் தாமாகவே வாசகர்களைத் தேர்ந்தெடுக்கும் அதிசய கோபுரம்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: சுழல் படிக்கட்டுகள்',
            text: 'பழைய கடிகாரத்தின் பின்னால் ஒரு ரகசிய சுழல் படிக்கட்டு இருந்தது. மாயா அதில் ஏறி மேலே சென்றாள். அங்கே ஆயிரக்கணக்கான புத்தகங்கள் வண்ணத்துப்பூச்சிகளைப் போல காற்றில் சிறகடித்துப் பறந்து கொண்டிருந்தன.'
          },
          {
            heading: 'அத்தியாயம் 2: ஆந்தை காப்பாளர்',
            text: 'அங்கு அமர்ந்திருந்த ஒரு புத்திசாலி ஆந்தை, "இந்த நூலகத்தில் மனிதர்கள் புத்தகங்களைத் தேர்ந்தெடுப்பதில்லை; உங்கள் மனதிற்குத் தேவையான நல்ல புத்தகமே உங்களைத் தேடி வரும்" என்றது.'
          },
          {
            heading: 'அத்தியாயம் 3: ஒளிரும் பக்கங்கள்',
            text: 'ஒரு தங்க நிறப் புத்தகம் மாயாவின் கைகளில் வந்து விழுந்தது. அதைத் திறந்ததும் கதையின் காட்சிகள் மாயக் காட்சிகளாய் கண்முன்னே விரிந்தன.'
          }
        ],
        choicePrompt: 'மாயா அந்தப் புத்தகத்தில் எந்த அத்தியாயத்தை வாசிக்க வேண்டும்?',
        branch: {
          optionA: 'நட்சத்திரங்களின் பெயர்களையும் அவற்றின் ரகசியங்களையும் அறியும் அத்தியாயம்.',
          optionB: 'மூலிகைகளும் பூக்களும் பேசும் அமைதியான தோட்டத்தின் அத்தியாயம்.',
          branchA: 'விண்மீன்கள் அவளைச் சுற்றிலும் மிதந்து அவளுக்கு இனிய தாலாட்டைப் பாடின.',
          branchB: 'புதினா நறுமணமும் பூக்களின் வாசனையும் அவளது மனதை முழுமையாக அமைதிப்படுத்தின.'
        },
        conclusion: 'மாயா வசதியான நாற்காலியில் சாய்ந்து புத்தகத்தின் மெல்லிய பக்கங்களின் சத்தத்தைக் கேட்டு இனிதே உறங்கினாள்.'
      }
    }
  },
  {
    id: 'story-6',
    number: 6,
    title: 'The Little Star Who Lost Its Glow',
    subtitle: 'How an act of gentle encouragement restored the brightest spark in the sky',
    category: 'Celestial Wonder',
    themeColor: '#f59e0b',
    icon: '⭐',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Fallen Spark',
        text: 'In the velvet quiet of midnight, a tiny star named Twiglet tumbled from the hem of Orion’s belt and landed softly in a bird’s nest of moss and dandelion fluff. When Twiglet looked down at his five golden points, his heart sank. His brilliant yellow radiance had dimmed to a pale pewter shimmer. "I tried to shine too bright during the evening meteor festival," Twiglet sniffled, "and now my spark is completely exhausted."'
      },
      {
        heading: 'Chapter 2: The Forest Friends Gather',
        text: 'Barnaby the owl, Squeak the field mouse, and Pip the stargazer gathered round the mossy nest. "You don’t have to shine all the time to be valuable," Pip said gently, smoothing Twiglet’s tired points. "Even the great sun rests every evening so the flowers can sleep."'
      },
      {
        heading: 'Chapter 3: The Gift of Kindness',
        text: 'The animals each contributed something comforting: the owl brought a cup of hot acorn tea, the mouse shared a quilt of pressed rose petals, and Pip whispered a poem of starlight belonging. As Twiglet drank in their sincere friendship, a warm, golden pulse began to beat in his core once more.'
      }
    ],
    choicePrompt: 'Where should Twiglet shine his rejuvenated starlight tonight?',
    branch: {
      optionA: 'Ascend back to the night sky to guide lost ships across the ocean.',
      optionB: 'Rest as a warm nightlight in the hollow of the woodland nursery.',
      branchA: 'Twiglet floated gracefully back to his celestial perch, shining with a warmer, steadier light that guided sailors safely through ocean fog.',
      branchB: 'Twiglet spent the night nestled in the tree nursery, giving off a soothing amber radiance that kept all the baby animals dreaming sweetly.'
    },
    conclusion: 'Twiglet realized that true brilliance comes from warmth and love, not from straining alone. Snuggled safely, he rested his golden points until dawn.',
    translations: {
      ta: {
        title: 'ஒளியிழந்த குட்டி நட்சத்திரம்',
        subtitle: 'அன்பும் பரிவும் எவ்வாறு வானத்தின் மிகச்சிறந்த நட்சத்திரத்தை மீண்டும் ஒளிரச் செய்தது',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: கீழே விழுந்த நட்சத்திரம்',
            text: 'ட்விக்லெட் என்ற சிறிய நட்சத்திரம் வானத்திலிருந்து நழுவி ஒரு பறவைக் கூட்டில் விழுந்தது. அதிக வெளிச்சத்தைத் தர முயன்றதால் அதன் ஒளி மங்கிப் போயிருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: காட்டு நண்பர்களின் உதவி',
            text: 'பிப் மற்றும் காட்டு விலங்குகள் அந்த நட்சத்திரத்தைச் சுற்றி கூடின. "நீ எப்போதுமே பிரகாசிக்க வேண்டும் என்ற அவசியமில்லை; ஓய்வெடுப்பதும் அவசியமே" என்று பிப் ஆறுதல் கூறினார்.'
          },
          {
            heading: 'அத்தியாயம் 3: அன்பின் கதகதப்பு',
            text: 'நண்பர்கள் காட்டிய அன்பும் அக்கறையும் அந்த சிறிய நட்சத்திரத்தின் இதயத்தில் மீண்டும் ஒரு புதிய ஒளியை ஏற்றியது.'
          }
        ],
        choicePrompt: 'ட்விக்லெட் தன் புதிய ஒளியை எங்கு வீச வேண்டும்?',
        branch: {
          optionA: 'மீண்டும் வானத்திற்குச் சென்று கடலில் செல்லும் கப்பல்களுக்கு வழிகாட்டல்.',
          optionB: 'மரத்தின் கூட்டில் தங்கி விலங்குக் குழந்தைகளுக்கு இரவு விளக்காக இருத்தல்.',
          branchA: 'நட்சத்திரம் வானத்தில் ஏறி மாலுமிகளுக்கு வழிகாட்டி பாதுகாப்பாக கரை சேர்த்தது.',
          branchB: 'மரத்தின் பொந்தில் தங்கி குட்டி விலங்குகளுக்கு பயமில்லாமல் தூங்க வெளிச்சம் தந்தது.'
        },
        conclusion: 'உண்மையான ஒளி அன்பிலிருந்து பிறக்கிறது என்பதை உணர்ந்து அனைவரும் நிம்மதியாக உறங்கினர்.'
      }
    }
  },
  {
    id: 'story-7',
    number: 7,
    title: 'The Cloud That Wanted to Dance',
    subtitle: 'Fluffing up feathers of mist to waltz with the sunset breeze',
    category: 'Sky Journeys',
    themeColor: '#38bdf8',
    icon: '☁️',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Restless Nimbus',
        text: 'High above the sleepy lavender hills lived Cumulus, a cloud who refused to stay in a neat, orderly line with the rest of the weather formation. Cumulus wanted to spin pirouettes, twist into pretzel knots, and bounce on mountain peaks like a springy marshmallow. "Clouds are meant to be stately and quiet," grumbled the heavy grey thunderstorm clouds.'
      },
      {
        heading: 'Chapter 2: The Evening Zephyr',
        text: 'At sundown, the gentle West Wind blew through the canyon like a cheerful violin melody. "Dance with me, Cumulus!" whispered the wind. Cumulus spread his misty edges and began to whirl across the apricot horizon, taking the shape of a leaping unicorn, then a soaring hawk, and finally an enormous fluffy kitten.'
      },
      {
        heading: 'Chapter 3: A Sunset Symphony',
        text: 'Children looking up from their bedroom windows pointed and giggled with delight at Cumulus’s joyful shapes. The golden rays of the setting sun refracted through his mist, painting him in radiant rings of peach, violet, and rose.'
      }
    ],
    choicePrompt: 'What shape should Cumulus settle into for bedtime?',
    branch: {
      optionA: 'A giant crescent moon pillow where nightbirds can rest their wings.',
      optionB: 'A soft blanket of lavender mist that tucks the valley quietly to sleep.',
      branchA: 'Cumulus curved into a crescent shape of pure white fluff. Seven sleepy swallows landed on his curve, tucking their beaks beneath their wings.',
      branchB: 'Cumulus gently lowered himself over the sleepy valley, softening all sounds into a hushed, peaceful murmur of bedtime calm.'
    },
    conclusion: 'Cumulus sighed with deep contentment. His dance was complete, and now his soft mist provided the sweetest night rest for the entire world below.',
    translations: {
      ta: {
        title: 'நடனமாட விரும்பிய மேகம்',
        subtitle: 'மாலைத் தென்றலுடன் மகிழ்ச்சியாக நடனமாடிய பஞ்சு மேகம்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: சுட்டி மேகம்',
            text: 'வானில் அமைதியாக இருக்க விரும்பாத கியூமுலஸ் என்ற மேகம், குதித்து நடனமாட ஆசைப்பட்டது.'
          },
          {
            heading: 'அத்தியாயம் 2: மாலைத் தென்றல்',
            text: 'மாலை நேரத்தில் மெல்லிய தென்றல் காற்று வீசியது. காற்றுடன் இணைந்து மேகம் முயல் போலவும் பறவை போலவும் வடிவங்களை மாற்றியது.'
          },
          {
            heading: 'அத்தியாயம் 3: வானவில் வண்ணங்கள்',
            text: 'சூரியன் மறையும் போது மேகத்தின் மீது பொன் நிறமும் இளஞ்சிவப்பு நிறமும் பூசப்பட்டு வானமே அழகாக மாறியது.'
          }
        ],
        choicePrompt: 'மேகம் இரவு தூங்குவதற்கு எந்த வடிவத்தை எடுக்க வேண்டும்?',
        branch: {
          optionA: 'பறவைகள் வந்து ஓய்வெடுக்க பிறை நிலா போன்ற பஞ்சு வடிவம்.',
          optionB: 'பள்ளத்தாக்கு முழுவதும் பனிப் போர்வையாகப் படர்ந்து உலகை தூங்க வைத்தல்.',
          branchA: 'மேகம் பிறை வடிவில் நின்று பறவைகளுக்கு இதமான படுக்கையாக மாறியது.',
          branchB: 'பள்ளத்தாக்கு முழுவதும் மெல்லிய பனியாகப் பரவி அமைதியைத் தந்தது.'
        },
        conclusion: 'நடனம் முடிந்து மேகமும் உலகமும் இனிதே தூக்கத்தில் ஆழ்ந்தன.'
      }
    }
  },
  {
    id: 'story-8',
    number: 8,
    title: 'The Secret of the Rainbow Bridge',
    subtitle: 'Where color goes when the sun sinks below the mountain ridge',
    category: 'Magic & Fantasy',
    themeColor: '#ec4899',
    icon: '🌈',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Fading Arch',
        text: 'Have you ever wondered where the colors of a rainbow sleep when the rain stops and the stars come out? A young girl named Tara noticed that the edge of the evening rainbow didn’t just vanish into thin air—it rolled up like a colorful silk carpet into an ancient stone well at the edge of Whisper Meadow.'
      },
      {
        heading: 'Chapter 2: The Color Keepers',
        text: 'Tara crept quietly to the well and peered inside. Far below was a cavern lined with crystals that glowed with liquid violet, emerald, and amber. Tending to the pools were tiny sprites with moth wings who were carefully filtering the colors through starlight so they would be fresh and brilliant for tomorrow’s rain.'
      },
      {
        heading: 'Chapter 3: The Midnight Melody',
        text: '"Welcome, Tara," chimed the violet sprite. "Each night, we weave the rested colors into sweet dreams for all who sleep with open hearts. Would you like to weave a thread of your own?"'
      }
    ],
    choicePrompt: 'What color thread should Tara choose to weave into dreamland?',
    branch: {
      optionA: 'A silver-blue thread that brings thoughts of cool mountain streams and peace.',
      optionB: 'A warm golden-pink thread that brings memories of warm hugs and cozy laughter.',
      branchA: 'Tara wove the shimmering sapphire ribbon. Instantly, a wave of cool, serene calmness washed over the world, quietening every anxious thought.',
      branchB: 'Tara wove the peach-colored thread, sending ripples of warmth into every home so that children felt safe and cherished in their beds.'
    },
    conclusion: 'The rainbow rolled itself safely into the well for the night. Tara walked back to her bed, her dreams painted in the most magnificent colors imaginable.',
    translations: {
      ta: {
        title: 'வானவில் பாலத்தின் ரகசியம்',
        subtitle: 'சூரியன் மறைந்த பிறகு வானவில் வண்ணங்கள் எங்கு உறங்குகின்றன?',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: மாயக் கிணறு',
            text: 'மழை நின்ற பிறகு வானவில் எங்கு செல்கிறது என்று தாரா யோசித்தாள். புல்வெளியில் இருந்த ஒரு பழைய கிணற்றுக்குள் வானவில் சுருண்டு செல்வதை அவள் கண்டாள்.'
          },
          {
            heading: 'அத்தியாயம் 2: வண்ணக் காவலர்கள்',
            text: 'கிணற்றின் அடியில் வண்ணத் தேவதைகள் வானவில்லின் நிறங்களை விண்மீன் ஒளியால் துடைத்து அடுத்த நாளுக்காகப் பாதுகாத்துக் கொண்டிருந்தனர்.'
          },
          {
            heading: 'அத்தியாயம் 3: கனவு நெசவு',
            text: '"நாங்கள் இந்த வண்ணங்களைக் கொண்டு குழந்தைகளுக்கு இனிமையான கனவுகளை நெய்கிறோம்" என்று தேவதை கூறியது.'
          }
        ],
        choicePrompt: 'தாரா எந்த நிற நூலைத் தேர்ந்தெடுத்து கனவை நெய்ய வேண்டும்?',
        branch: {
          optionA: 'மலை ஓடைகளின் அமைதியைக் கொண்டுவரும் நீல நிற நூல்.',
          optionB: 'அன்பான அரவணைப்பையும் சிரிப்பையும் தரும் பொன் நிற நூல்.',
          branchA: 'நீல நூலை நெய்ததும் உலகெங்கும் குளிர்ந்த அமைதி பரவியது.',
          branchB: 'பொன் நிற நூல் அனைவருக்கும் மன அமைதியையும் கதகதப்பையும் தந்தது.'
        },
        conclusion: 'தாரா தன் படுக்கைக்குத் திரும்பி வண்ணமயமான இனிமையான கனவுகளுடன் தூங்கினாள்.'
      }
    }
  },
  {
    id: 'story-9',
    number: 9,
    title: 'The Fox and the Lantern Forest',
    subtitle: 'Following the paper lanterns through the mist to find true belonging',
    category: 'Gentle Friendship',
    themeColor: '#f97316',
    icon: '🦊',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Wandering Vulpine',
        text: 'Finley was a little red fox with a white-tipped tail and a heart full of curiosity. One autumn night, a thick silver fog settled over the Great Woods, making every birch tree look like a mysterious ghost. Finley was searching for a warm place to rest when he noticed small glowing paper lanterns floating through the mist, bobbing along like fireflies on a breeze.'
      },
      {
        heading: 'Chapter 2: The Paper Lantern Trail',
        text: 'Each lantern was folded out of mulberry paper and held a tiny ball of bioluminescent forest moss that gave off a soothing amber radiance. Finley followed the glowing trail as it stepped across mossy stepping stones and over burbling forest creeks.'
      },
      {
        heading: 'Chapter 3: The Gathering in the Clearing',
        text: 'The lantern path opened into a hidden clearing where badgers, deer, hedgehogs, and squirrels sat quietly around a hearth made of warm river stones. In the center sat an ancient badger who smiled warmly at Finley. "Come in from the cold, little fox. There is always a place by our hearth for a traveler."'
      }
    ],
    choicePrompt: 'How will Finley contribute to the cozy woodland gathering?',
    branch: {
      optionA: 'Share a gentle story of his travels across the starry hills.',
      optionB: 'Help hang fresh lanterns among the willow boughs to welcome other travelers.',
      branchA: 'Finley curled by the stones and recounted the sights of northern lights and singing streams, his soft voice lulling the baby hedgehogs into quiet sleep.',
      branchB: 'Finley took the lantern cords in his jaws, hanging them gracefully on low branches so any lost animal in the mist could find safety.'
    },
    conclusion: 'Tucked between the warm fur of his new friends with the lantern glow gently flickering, Finley realized that home is wherever kindness opens its door.',
    translations: {
      ta: {
        title: 'நரியும் விளக்குக் காடும்',
        subtitle: 'பனி மூட்டத்திற்கு நடுவே அன்பின் இருப்பிடத்தைத் தேடிய சிறிய நரி',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: பனி மூட்டம்',
            text: 'ஃபின்லி என்ற சிறிய சிகப்பு நரி பனி மூட்டத்தில் தன் வழியைத் தேடிக் கொண்டிருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: ஒளிரும் விளக்குகள்',
            text: 'மரங்களுக்கு இடையே காகித விளக்குகள் காற்றில் மிதந்து அதற்கான வழியைக் காட்டின.'
          },
          {
            heading: 'அத்தியாயம் 3: புதிய நண்பர்கள்',
            text: 'விளக்கைப் பின்தொடர்ந்து சென்ற போது, ஒரு பெரிய மரத்தின் கீழ் விலங்குகள் அனைத்தும் ஒன்று கூடி அடுப்பின் அருகே கதை பேசிக் கொண்டிருந்தன.'
          }
        ],
        choicePrompt: 'ஃபின்லி அந்த நண்பர்களுக்கு எவ்வாறு உதவ வேண்டும்?',
        branch: {
          optionA: 'தான் கண்ட அழகான இடங்களைப் பற்றி கதை கூறி குழந்தைகளைத் தூங்க வைத்தல்.',
          optionB: 'மரங்களில் புதிய விளக்குகளை மாட்டி மற்ற விலங்குகளுக்கும் வழிகாட்டுதல்.',
          branchA: 'ஃபின்லி இனிமையான குரலில் கதை கூறி அனைவரையும் அமைதிப்படுத்தினான்.',
          branchB: 'விளக்குகளை மாட்டி வழியில் தடுமாறும் பிற விலங்குகளுக்கு உதவினான்.'
        },
        conclusion: 'அன்பும் பாசமும் உள்ள இடமே உண்மையான வீடு என்பதை உணர்ந்து ஃபின்லி நிம்மதியாக உறங்கினான்.'
      }
    }
  },
  {
    id: 'story-10',
    number: 10,
    title: 'The Clockmaker of Dreamland',
    subtitle: 'Winding the great pendulum that governs peaceful night hours',
    category: 'Magic & Wonder',
    themeColor: '#b45309',
    icon: '🕰️',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Tick of Time',
        text: 'In the highest garret of the Midnight Tower sat Master Barnaby, the Clockmaker of Dreamland. Surrounding him were thousands of clocks of every imaginable shape: grandfather clocks carved from fragrant cedar, water clocks of liquid sapphire, and pocket watches with dials made of mother-of-pearl. Yet not a single clock ticked with harsh urgency. Every chime was a soft bell, a soothing lullaby note.'
      },
      {
        heading: 'Chapter 2: The Rusting Cog',
        text: 'Tonight, the Great Pendulum of Rest was slowing down with a tired creak. "When the pendulum slows too much," Barnaby sighed, "the night feels restless, and people toss and turn." A little girl named Lily, who had wandered into the tower in her dream, offered her help. "Can we oil it with starlight?" she asked.'
      },
      {
        heading: 'Chapter 3: The Star Oil and Golden Key',
        text: 'Barnaby’s eyes twinkled. He handed Lily a tiny vial of condensed comet nectar and a golden key. Together, they climbed the brass scaffolding to the great central mechanism.'
      }
    ],
    choicePrompt: 'How will Lily and Barnaby restore the Great Pendulum?',
    branch: {
      optionA: 'Gently apply the star oil so the gears glide with frictionless silence.',
      optionB: 'Adjust the pendulum weight with an amethyst crystal for rhythmic lullabies.',
      branchA: 'The mechanism purred into silent motion. A deep, warm rhythm of tick... tock... pulsed gently through the atmosphere, easing the breathing of all who slept.',
      branchB: 'The amethyst crystal resonated with each swing, sending soft chime harmonics that made everyone in dreamland sink three inches deeper into their pillows.'
    },
    conclusion: 'The clock tower hummed with peaceful perfection. Barnaby folded his velvet apron, and Lily rested her head on a plush cushion, drifting into effortless sleep.',
    translations: {
      ta: {
        title: 'கனவு உலக கடிகாரக் கலைஞர்',
        subtitle: 'அமைதியான உறக்கத்திற்கான கடிகாரத்தை சரிசெய்த விந்தை மனிதர்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: விண்மீன் கடிகாரங்கள்',
            text: 'கனவு உலகின் மிக உயரமான கோபுரத்தில் பர்னபி என்ற பெரியவர் ஆயிரக்கணக்கான மாயக் கடிகாரங்களை இயக்கி வந்தார்.'
          },
          {
            heading: 'அத்தியாயம் 2: நின்ற ஊசல்',
            text: 'அமைதியான தூக்கத்தைக் கொடுக்கும் பெரிய கடிகார ஊசல் மெதுவாகி நின்றது. லில்லி என்ற சிறுமி அவருக்கு உதவ முன்வந்தாள்.'
          },
          {
            heading: 'அத்தியாயம் 3: விண்மீன் எண்ணெய்',
            text: 'விண்மீன் ஒளியால் செய்யப்பட்ட எண்ணெயை ஊற்றி கடிகாரத்தின் சக்கரங்களை இருவரும் மெல்ல இயக்கினர்.'
          }
        ],
        choicePrompt: 'அவர்கள் கடிகாரத்தை எவ்வாறு சீராக்க வேண்டும்?',
        branch: {
          optionA: 'எண்ணெய் தடவி எந்த சத்தமும் இல்லாமல் மென்மையாக இயங்கச் செய்தல்.',
          optionB: 'மணி ஓசையை தாலாட்டுப் பாடலாக மாற்றி ஒலிக்கச் செய்தல்.',
          branchA: 'கடிகாரம் மென்மையாக இயங்கி உலக மக்கள் அனைவருக்கும் நல்ல தூக்கத்தைத் தந்தது.',
          branchB: 'மணி ஓசை தாலாட்டாக ஒலித்து குழந்தைகள் அனைவரையும் தூங்க வைத்தது.'
        },
        conclusion: 'கடிகாரத்தின் சீரான தாளத்தில் லில்லியும் நிம்மதியாக உறங்கினாள்.'
      }
    }
  },
  {
    id: 'story-11',
    number: 11,
    title: "The Unicorn's Missing Rainbow",
    subtitle: 'Restoring the lost violet hue to the celestial bridge',
    category: 'Magic & Fantasy',
    themeColor: '#d946ef',
    icon: '🦄',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Silver Glade',
        text: 'Aura was a pearlescent unicorn with hooves of pure silver. She lived in the Starlight Meadows where night-blooming jasmine filled the air with sweet calm. But tonight, Aura noticed something missing from the evening sky: the rainbow that bridged the earth to the dream world had lost its deepest, most calming stripe—the color violet.'
      },
      {
        heading: 'Chapter 2: The Search for Violet',
        text: 'Without the violet stripe, the sky felt too bright for sleep. Aura trotted through the valley, asking the gentle lavender bushes, the night violets, and the deep amethyst geodes. "We will gladly give you a pinch of our color," whispered the night violets, opening their velvety petals.'
      },
      {
        heading: 'Chapter 3: The Horn of Light',
        text: 'Aura touched the violet blossoms with the tip of her spiral horn. The color flowed up the horn in ribbons of soft glowing light, recharging her with peaceful magic. She galloped into the sky, brushing her horn along the fading arch.'
      }
    ],
    choicePrompt: 'Where should Aura place the final stroke of violet light?',
    branch: {
      optionA: 'Across the top of the rainbow, creating an arching canopy of deep quiet.',
      optionB: 'Underneath the bridge, so sleepy clouds catch the violet reflection.',
      branchA: 'The violet canopy shaded the entire sky in serene twilight, cooling the horizon and signaling that it was time for deep, restorative sleep.',
      branchB: 'The clouds absorbed the violet glow, puffing into lavender cushions where dream travelers could rest safely.'
    },
    conclusion: 'The rainbow was complete once more. Aura settled into the soft meadow grass, closing her silver eyes under the benevolent starlight.',
    translations: {
      ta: {
        title: 'யூனிகார்னின் தொலைந்த வானவில்',
        subtitle: 'வானவில்லின் ஊதா நிறத்தை மீண்டும் சேர்த்த வெண் குதிரையின் கதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: வெள்ளிப் புல்வெளி',
            text: 'ஆரா என்ற மாய வெண் குதிரை வெள்ளி குளம்புகளுடன் புல்வெளியில் வாழ்ந்து வந்தது. வானில் வானவில்லின் ஊதா நிறம் காணாமல் போயிருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: ஊதா மலர்கள்',
            text: 'ஊதா நிறம் இல்லாவிட்டால் இரவு மிகவும் வெளிச்சமாக இருக்கும் என்பதால், காட்டில் உள்ள ஊதா மலர்களிடம் சென்று உதவி கேட்டது.'
          },
          {
            heading: 'அத்தியாயம் 3: கொம்பின் ஒளி',
            text: 'தன் கொம்பால் மலர்களைத் தொட்டதும், ஊதா நிற ஒளி கொம்பில் ஏறி வானவில்லில் மீண்டும் பாய்ந்தது.'
          }
        ],
        choicePrompt: 'ஆரா ஊதா நிறத்தை எங்கு பூச வேண்டும்?',
        branch: {
          optionA: 'வானவில்லின் உச்சியில் பூசி அமைதியான நிழலை உருவாக்குதல்.',
          optionB: 'மேகங்களின் மீது பூசி பஞ்சு போன்ற படுக்கையாக மாற்றுதல்.',
          branchA: 'வானம் முழுவதும் இதமான ஊதா நிற நிழல் படர்ந்து அனைவரையும் தூங்க வைத்தது.',
          branchB: 'மேகங்கள் ஊதா நிறத்தில் மாறி குழந்தைகளுக்கு மென்மையான படுக்கையாயின.'
        },
        conclusion: 'வானவில் முழுமையடைந்தது, ஆராவும் அமைதியாகப் படுத்து உறங்கியது.'
      }
    }
  },
  {
    id: 'story-12',
    number: 12,
    title: 'The Penguin Who Followed the Moon',
    subtitle: 'A quiet journey across silver ice to hear the midnight lullaby',
    category: 'Gentle Friendship',
    themeColor: '#3b82f6',
    icon: '🐧',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Silver Ice',
        text: 'Pippin was a young Emperor penguin chick who had an extra thick layer of downy fluff and a yellow scarf knitted by his mother. While his colony huddled together against the crisp polar breeze, Pippin was fascinated by the round silver moon reflecting on the frozen sea like a giant pearl.'
      },
      {
        heading: 'Chapter 2: The Moonlit Path',
        text: 'Pippin waddled along the silver path of light. The snow beneath his flippers was soft and quiet: crunch, crunch, crunch. Along the way, he met a sleepy walrus who yawned, showing his friendly tusks. "Where are you going, little waddler?" "To tell the moon goodnight," Pippin chirped.'
      },
      {
        heading: 'Chapter 3: The Moon’s Reflection',
        text: 'At the edge of the smooth ice shelf, the moon reflected in a calm saltwater pool. The water was so peaceful that Pippin could see the craters smiling back at him. The moon seemed to whisper: "Sleep well, little wanderer, for tomorrow is full of joy."'
      }
    ],
    choicePrompt: 'How will Pippin return to his cozy penguin family?',
    branch: {
      optionA: 'Slide belly-first across the smooth ice slide right into his mother’s flippers.',
      optionB: 'Ride on the friendly walrus’s back, listening to slow ocean breathing.',
      branchA: 'Pippin dropped onto his tummy—whoosh! He glided smoothly across the mirror-like ice, laughing gently as he slid straight into the warm center of the family huddle.',
      branchB: 'The walrus swam gently along the ice edge, carrying Pippin safely back while singing a deep, rhythmic ocean chant that brought heavy eyelids.'
    },
    conclusion: 'Tucked securely between his parents’ warm feathers, Pippin drifted off, with the silver moon standing guard in the polar sky.',
    translations: {
      ta: {
        title: 'நிலவைப் பின்தொடர்ந்த பென்குயின்',
        subtitle: 'பனிப் பாறைகளில் நிலாவிடம் குட்நைட் சொல்லச் சென்ற சின்ன பென்குயின்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: பனிப் பாறைகள்',
            text: 'பிப்பின் என்ற சிறிய பென்குயின் குட்டிக்கு நிலவொளியைப் பார்ப்பது மிகவும் பிடிக்கும்.'
          },
          {
            heading: 'அத்தியாயம் 2: நிலவின் பாதை',
            text: 'பனியில் நடந்து சென்று நிலாவிடம் நல்லிரவு சொல்ல அது கிளம்பியது. வழியில் ஒரு பெரிய வால்ரஸ் நண்பனைச் சந்தித்தது.'
          },
          {
            heading: 'அத்தியாயம் 3: நிலவின் புன்னகை',
            text: 'குளத்து நீரில் நிலவின் முகம் தெரிந்தது. "நன்றாகத் தூங்கு கண்ணா" என்று நிலா சொல்வது போலிருந்தது.'
          }
        ],
        choicePrompt: 'பிப்பின் தன் பெற்றோரிடம் எவ்வாறு திரும்பிச் செல்ல வேண்டும்?',
        branch: {
          optionA: 'பனியில் சறுக்கிக்கொண்டு தாயின் மடிக்குச் செல்லுதல்.',
          optionB: 'வால்ரஸ் நண்பனின் முதுகில் அமர்ந்து சவாரி செய்தல்.',
          branchA: 'வழுவழுப்பான பனியில் சறுக்கிச் சென்று தாயின் அரவணைப்பில் சேர்ந்தது.',
          branchB: 'வால்ரஸ் தன் முதுகில் சுமந்து கொண்டு சென்று பாசத்தோடு சேர்த்தது.'
        },
        conclusion: 'பெற்றோரின் கதகதப்பில் பிப்பின் இனிதே உறங்கியது.'
      }
    }
  },
  {
    id: 'story-13',
    number: 13,
    title: 'The Garden That Sang at Midnight',
    subtitle: 'Where every petal chimes in five-part nocturnal harmony',
    category: 'Nature & Music',
    themeColor: '#db2777',
    icon: '🌺',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Walled Enclosure',
        text: 'Behind an iron gate entwined with sweet pea vines stood the Singing Conservatory. During the bright daylight, it looked like any peaceful botanical sanctuary. But when the clock struck twelve and the dew drops formed on leaf tips, every flower in the garden turned into a musical instrument.'
      },
      {
        heading: 'Chapter 2: The Floral Orchestra',
        text: 'The purple foxgloves acted as gentle flutes, chiming warm pentatonic scales as the midnight breeze passed through their bells. The giant sunflowers hummed a resonant cello drone, and the delicate lily of the valley rang like crystalline windchimes.'
      },
      {
        heading: 'Chapter 3: The Missing Melody',
        text: 'Eli, a boy who couldn’t sleep because of busy thoughts, walked into the garden. The flowers paused their symphony. "We need a conductor’s breath," the night-blooming cereus whispered. "Take three slow, deep breaths, and let us harmonize with your peace."'
      }
    ],
    choicePrompt: 'How will Eli harmonize with the singing garden?',
    branch: {
      optionA: 'Breathe out slowly like a warm summer breeze to set a relaxed tempo.',
      optionB: 'Hum a gentle lullaby for the flowers to echo in sweet harmonies.',
      branchA: 'Eli exhaled long and smooth. The garden mirrored his slow breathing, reducing the tempo of the music until every note was a warm, soothing vibration of calm.',
      branchB: 'Eli’s soft humming was picked up by fifty rose blossoms, creating an echo of velvet melody that filled the conservatory with peace.'
    },
    conclusion: 'Eli curled up on a stone bench covered with soft clover cushions. The garden sang him a final, tender lullaby as he slipped into the quietest sleep.',
    translations: {
      ta: {
        title: 'நள்ளிரவில் பாடிய தோட்டம்',
        subtitle: 'பூக்களெல்லாம் இணைந்து பாடிய அமைதியான இசை அரங்கம்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: ரகசிய தோட்டம்',
            text: 'நள்ளிரவு 12 மணிக்கு ஒரு ரகசிய தோட்டத்தில் உள்ள மலர்கள் அனைத்தும் இசைக்கத் தொடங்கின.'
          },
          {
            heading: 'அத்தியாயம் 2: மலர்களின் இசை',
            text: 'ஊதா மலர்கள் புல்லாங்குழல் போலவும், சூரியகாந்தி மலர்கள் வீணை போலவும் இனிமையாக இசைத்தன.'
          },
          {
            heading: 'அத்தியாயம் 3: தூங்காத சிறுவன்',
            text: 'தூக்கம் வராமல் தவித்த எலி என்ற சிறுவன் அங்கு வந்தான். மலர்கள் அவனுக்கு தாலாட்டுப் பாடத் தயாராயின.'
          }
        ],
        choicePrompt: 'எலி அந்த மலர்களோடு எவ்வாறு இணைய வேண்டும்?',
        branch: {
          optionA: 'ஆழ்ந்து மூச்சை வெளிவிட்டு இசையின் வேகத்தைக் குறைத்தல்.',
          optionB: 'தானும் மெதுவாகப் பாடி மலர்களை எதிரொலிக்கச் செய்தல்.',
          branchA: 'அவனது மெதுவான மூச்சுக்கு ஏற்ப இசை அமைதியாகி மனதை லேசாக்கியது.',
          branchB: 'ரோஜா மலர்கள் அவனது பாட்டை எதிரொலித்து நறுமணத்துடன் பாடின.'
        },
        conclusion: 'மலர்களின் பாடலில் மயங்கி எலி இனிமையான தூக்கத்தில் ஆழ்ந்தான்.'
      }
    }
  },
  {
    id: 'story-14',
    number: 14,
    title: "The Little Astronaut's Cosmic Friend",
    subtitle: 'Finding friendship across millions of light-years on a sleepy asteroid',
    category: 'Space & Wonder',
    themeColor: '#2563eb',
    icon: '🚀',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: Station Starlight',
        text: 'Leo lived aboard Orbital Outpost Beta with his parents. While his telescope showed magnificent whirling galaxies and rings around emerald gas giants, Leo sometimes felt lonely so far away from green grass and barking dogs.'
      },
      {
        heading: 'Chapter 2: The Bouncing Comet Spark',
        text: 'One evening while gazing through his bedroom porthole, Leo noticed a gentle neon-blue light bouncing on the solar array. It wasn’t space debris—it was Cosmo, a tiny creature made of stardust with big curious violet eyes and three fuzzy antennae.'
      },
      {
        heading: 'Chapter 3: Silent Conversations',
        text: 'Cosmo pressed its palm against the thick glass window. Leo placed his hand over the same spot. Through the glass, a feeling of deep warmth and companionship passed between them without a single spoken word.'
      }
    ],
    choicePrompt: 'How will Leo and Cosmo share their bedtime ritual?',
    branch: {
      optionA: 'Cosmo projects a starlight constellation pattern on Leo’s ceiling.',
      optionB: 'Leo plays a recording of forest rain sounds through the external radio.',
      branchA: 'Cosmo’s antennae flashed gently, illuminating Leo’s room with an animated star map that spun in slow, hypnotic rotations until Leo’s eyelids grew heavy.',
      branchB: 'The soft patter of rain hummed through the speakers. Cosmo smiled, swaying with the soothing earthly sound before tucking into an asteroid bed.'
    },
    conclusion: 'Leo realized that no matter how vast space is, warmth and friendship are always close at hand. He slept with a smile under the cosmic glow.',
    translations: {
      ta: {
        title: 'சின்ன விண்வெளி வீரனின் விண்மீன் நண்பன்',
        subtitle: 'விண்வெளியில் மலர்ந்த விநோதமான ஆழமான நட்பு',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: விண்வெளி நிலையம்',
            text: 'லியோ என்ற சிறுவன் விண்வெளி நிலையத்தில் வசித்து வந்தான். பூமியை விட்டு தொலைவில் இருந்ததால் அவனுக்கு தனிமையாக இருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: காஸ்மோவின் வரவு',
            text: 'ஒரு நாள் ஜன்னலுக்கு வெளியே காஸ்மோ என்ற விண்மீன் தூசியாலான அழகான உயிரினம் வந்து நின்றது.'
          },
          {
            heading: 'அத்தியாயம் 3: கண்ணாடியில் ஒரு தொடுதல்',
            text: 'கண்ணாடியின் வழியே அவர்கள் கைகளை வைத்த போது இருவருக்கும் இடையே அன்பு கலந்த கதகதப்பு பரவியது.'
          }
        ],
        choicePrompt: 'அவர்கள் இருவரும் எவ்வாறு தூங்க வேண்டும்?',
        branch: {
          optionA: 'காஸ்மோ அறையின் கூரையில் விண்மீன் ஒளி வரைபடத்தை உருவாக்குதல்.',
          optionB: 'லியோ பூமியின் மழைச் சத்தத்தை ஒலிக்க விட்டு இருவருமாக ரசித்தல்.',
          branchA: 'கூரையில் விண்மீன்கள் வட்டமடித்து லியோவை தூங்க வைத்தன.',
          branchB: 'மழைச் சத்தத்தைக் கேட்டு இருவரும் இதமாக கண்களை மூடினர்.'
        },
        conclusion: 'எவ்வளவு பெரிய விண்வெளியாக இருந்தாலும் அன்பு நம்மோடு இருக்கிறது என்பதை லியோ உணர்ந்தான்.'
      }
    }
  },
  {
    id: 'story-15',
    number: 15,
    title: 'The Castle Above the Clouds',
    subtitle: 'Where peaceful dreams are watched over by guardians of moonlight',
    category: 'Magic & Wonder',
    themeColor: '#a855f7',
    icon: '🏰',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Cloud Citadel',
        text: 'Floating upon a massive cushion of lilac cumulus clouds sat Citadel Aethelgard. Its towers were spun from iridescent sugar-glass and its bridges were woven from beams of silver moonlight. It was the sanctuary where all pleasant thoughts were guarded so they could be distributed to sleepers throughout the world.'
      },
      {
        heading: 'Chapter 2: The Chamber of Murmurs',
        text: 'Inside the central dome was a pool of liquid starlight. Guarding it was Lady Seraphina, who wore robes made of twilight velvet. "When the daytime world grows noisy," she explained, "the pool stirs with restlessness. We must calm it so dreams remain sweet."'
      },
      {
        heading: 'Chapter 3: The Silver Oar',
        text: 'A young girl named Chloe stepped forward. She was handed a silver paddle carved from falling stars. With gentle, rhythmic sweeps, she smoothed the surface of the pool, turning ripples into glassy perfection.'
      }
    ],
    choicePrompt: 'What blessing should Chloe cast upon the starlight pool?',
    branch: {
      optionA: 'Scatter chamomile petals to bring peaceful rest to every restless child.',
      optionB: 'Whisper a reminder that tomorrow is a fresh, clean slate of wonder.',
      branchA: 'The chamomile petals dissolved into golden rings of light, releasing a comforting herbal fragrance that reached every pillow in the world.',
      branchB: 'Her encouraging words resonated through the starlight, filling dreams with courage and lifting away every small worry of the day.'
    },
    conclusion: 'The Citadel glowed softly like a lighthouse in the sky. Chloe rested in a hammock of cloud fluff, falling asleep under Lady Seraphina’s watchful gaze.',
    translations: {
      ta: {
        title: 'மேகங்களுக்கு மேலே ஒரு கோட்டை',
        subtitle: 'இனிமையான கனவுகளைப் பாதுகாக்கும் நிலவொளி மாளிகை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: மேகக் கோட்டை',
            text: 'பஞ்சு மேகங்களின் மீது வெள்ளி நிலவொளியால் கட்டப்பட்ட ஒரு பிரம்மாண்ட கோட்டை இருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: கனவுப் பொய்கை',
            text: 'கோட்டையின் நடுவே நல்ல கனவுகளை உற்பத்தி செய்யும் விண்மீன் குளம் இருந்தது. பகலின் கவலைகளால் அதில் அலைகள் எழுந்தன.'
          },
          {
            heading: 'அத்தியாயம் 3: அமைதிப் படகு',
            text: 'குளோயி என்ற சிறுமி தன் மெல்லிய துடுப்பால் அந்த குளத்து நீரை அமைதிப்படுத்தினாள்.'
          }
        ],
        choicePrompt: 'குளோயி அந்த குளத்தில் என்ன ஆசி வழங்க வேண்டும்?',
        branch: {
          optionA: 'பூக்களைத் தூவி குழந்தைகள் அனைவருக்கும் நல்ல தூக்கம் கிடைக்கச் செய்தல்.',
          optionB: 'நாளை ஒரு புதிய மகிழ்ச்சியான நாள் என்ற தைரியத்தை வழங்குதல்.',
          branchA: 'பூக்களின் நறுமணம் உலகெங்கும் பரவி குழந்தைகளின் தூக்கத்தை அமைதியாக்கியது.',
          branchB: 'தைரியமும் நம்பிக்கையும் அனைவருக்கும் மன நிம்மதியைத் தந்தது.'
        },
        conclusion: 'கோட்டையின் பாதுகாப்பில் அனைவரும் இனிதே தூங்கினர்.'
      }
    }
  },
  {
    id: 'story-16',
    number: 16,
    title: "The Butterfly's Journey Home",
    subtitle: 'Wings of stained glass guiding a weary flutterer to sleepy blooms',
    category: 'Nature & Wonder',
    themeColor: '#8b5cf6',
    icon: '🦋',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Long Afternoon',
        text: 'Mariposa was an emperor butterfly with wings that mirrored the evening sky—shades of royal indigo, dusted with gold pollen. She had spent the entire sunny afternoon dancing across clover fields and helping honeybees find sweet nectar. Now, as twilight settled, her delicate wings felt heavy and tired.'
      },
      {
        heading: 'Chapter 2: The Dimming Meadow',
        text: 'The meadow flowers were closing their petals for the night. Mariposa looked around for her home—the great Moonflower Bush where her sisters roosted. But the dusk shadows made every bush look the same.'
      },
      {
        heading: 'Chapter 3: The Firefly Guides',
        text: 'Suddenly, a soft green light blinked in front of her. Then another, and another. A family of fireflies formed a glowing runway through the tall rye grass. "Follow our lanterns, Mariposa," they hummed gently.'
      }
    ],
    choicePrompt: 'Where should Mariposa rest her wings for the night?',
    branch: {
      optionA: 'Inside the giant velvet cup of a white moonflower.',
      optionB: 'Tucked safely under the broad sheltering leaf of an ancient fern.',
      branchA: 'The moonflower opened just enough for Mariposa to slip inside. The white petals curled softly around her, providing a fragrant, cozy shelter until dawn.',
      branchB: 'Under the sturdy fern frond, Mariposa was sheltered from the cool night dew, listening to the gentle cricket chorus until she fell asleep.'
    },
    conclusion: 'Her wings folded gently together, Mariposa closed her eyes, grateful for the little lights that always guide weary travelers home.',
    translations: {
      ta: {
        title: 'வண்ணத்துப் பூச்சியின் வீடு திரும்பல்',
        subtitle: 'மாலையில் தன் இருப்பிடத்திற்கு பாதுகாப்பாகச் சென்ற பட்டாம்பூச்சி',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: களைப்படைந்த சிறகுகள்',
            text: 'மாரிபோசா என்ற அழகான வண்ணத்துப்பூச்சி நாள் முழுவதும் பறந்து களைத்துப் போயிருந்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: இருண்ட புல்வெளி',
            text: 'இருள் சூழ்ந்ததால் தன் வீட்டிற்குச் செல்லும் வழி தெரியாமல் அது தவித்தது.'
          },
          {
            heading: 'அத்தியாயம் 3: மின்மினிப் பூச்சிகள்',
            text: 'மின்மினிப் பூச்சிகள் வரிசையாக நின்று தங்கள் வெளிச்சத்தால் அதற்கு வழிகாட்டின.'
          }
        ],
        choicePrompt: 'வண்ணத்துப்பூச்சி இரவில் எங்கு ஓய்வெடுக்க வேண்டும்?',
        branch: {
          optionA: 'வெள்ளை நிற நிலவு மலரின் இதழ்களுக்குள் தூங்குதல்.',
          optionB: 'பெரிய இலை ஒன்றின் அடியில் பனியில் நனையாமல் தூங்குதல்.',
          branchA: 'நிலவு மலரின் இதழ்கள் அதை கதகதப்பாகப் போர்த்திக் கொண்டன.',
          branchB: 'பெரிய இலை பனியிலிருந்து அதைப் பாதுகாத்தது.'
        },
        conclusion: 'நன்றியோடு சிறகுகளை மடித்து அது இனிதே தூங்கியது.'
      }
    }
  },
  {
    id: 'story-17',
    number: 17,
    title: 'The Magical Cookie Bakery',
    subtitle: 'Spicing warm dough with cinnamon starlight and sweet bedtime wishes',
    category: 'Cozy & Nature',
    themeColor: '#b45309',
    icon: '🍪',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Hearth in the Oak',
        text: 'Tucked inside the hollow of the Grand Cedar Tree was the most fragrant bakery in dreamland. Master Barnaby Badger wore a white apron dusted with powdered sugar stars, rolling sweet dough on a marble slab while a friendly copper kettle whistled softly on the stone hearth.'
      },
      {
        heading: 'Chapter 2: The Starlight Spice',
        text: 'Little Ella sat on a wooden stool, stirring a bowl of warm batter. "What makes bedtime cookies special, Master Badger?" she asked. "It’s not just sugar and butter," Barnaby smiled. "We add a pinch of cinnamon starlight, a drop of vanilla moonbeams, and a wish for peaceful dreams."'
      },
      {
        heading: 'Chapter 3: Fresh from the Oven',
        text: 'Barnaby slid the iron tray into the stone oven. Soon, a comforting aroma of toasted oats, roasted pecans, and sweet honey filled every corner of the woodland bakery.'
      }
    ],
    choicePrompt: 'What shape should Ella cut the final batch of cookies?',
    branch: {
      optionA: 'Crescent moons dusted with calming chamomile sugar.',
      optionB: 'Sleeping bears with cinnamon blankets.',
      branchA: 'The crescent moon cookies baked to a golden perfection, melting in the mouth with sweet relaxation that made Ella’s eyelids droop with happiness.',
      branchB: 'The sleeping bear cookies looked so peaceful that just looking at them made everyone in the kitchen yawn contentedly.'
    },
    conclusion: 'Ella enjoyed one warm cookie with a mug of frothy honey milk. Curled beside the warm hearth stones, she drifted effortlessly into the sweetest dream.',
    translations: {
      ta: {
        title: 'மாய பிஸ்கட் அடுமனை',
        subtitle: 'விண்மீன் சர்க்கரையும் பாசமும் கொண்டு செய்த சுவையான பிஸ்கட்டுகள்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: மரப் பொந்தில் ஒரு அடுமனை',
            text: 'ஒரு பெரிய மரத்தின் பொந்தில் கரடி தாத்தா சுவையான பிஸ்கட்டுகளை செய்து கொண்டிருந்தார்.'
          },
          {
            heading: 'அத்தியாயம் 2: விண்மீன் மசாலா',
            text: 'எல்லா என்ற சிறுமி அவருக்கு உதவினாள். அன்பும் நல்வாழ்த்துகளும் சேர்த்து மாவு பிசையப்பட்டது.'
          },
          {
            heading: 'அத்தியாயம் 3: சுவையான நறுமணம்',
            text: 'அடுப்பில் இருந்து தேன் மற்றும் இலவங்கப்பட்டையின் சுகந்த வாசனை காடு முழுவதும் பரவியது.'
          }
        ],
        choicePrompt: 'எல்லா பிஸ்கட்டுகளை எந்த வடிவத்தில் செய்ய வேண்டும்?',
        branch: {
          optionA: 'சாமந்தி சர்க்கரை தூவிய பிறை நிலா வடிவம்.',
          optionB: 'போர்வை போர்த்திய தூங்கும் குட்டி கரடி வடிவம்.',
          branchA: 'பிறை நிலா பிஸ்கட்டுகள் வாயில் கரையும் போது ஆழ்ந்த அமைதியைத் தந்தன.',
          branchB: 'தூங்கும் கரடி பிஸ்கட்டுகள் அனைவரையும் கொட்டாவி விட வைத்தன.'
        },
        conclusion: 'சூடான பாலுடன் ஒரு பிஸ்கட்டை சாப்பிட்டு விட்டு அவள் இனிதே தூங்கினாள்.'
      }
    }
  },
  {
    id: 'story-18',
    number: 18,
    title: 'The Turtle Who Carried a Garden',
    subtitle: 'Slow, steady steps that nurture a world of green tranquility',
    category: 'Gentle Friendship',
    themeColor: '#14b8a6',
    icon: '🐢',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Mossy Carapace',
        text: 'Barnaby was a giant land tortoise whose shell was not made of plain horn, but of living soil, soft green moss, and blossoming wild roses. Small bluebells chimed with every slow, deliberate step he took across the quiet valley.'
      },
      {
        heading: 'Chapter 2: The Sleepy Passengers',
        text: 'Whenever the woodland creatures grew tired, they would climb aboard Barnaby’s back. A family of dormice nested in the lavender patch, two baby robins rested beneath a miniature fern frond, and a little girl named Tara rested her head against the cool moss.'
      },
      {
        heading: 'Chapter 3: The Slow River Walk',
        text: 'Barnaby walked along the banks of the Whispering River. His pace was completely unhurried, teaching everyone that there is no need to rush when every moment is full of quiet beauty.'
      }
    ],
    choicePrompt: 'Where should Barnaby stop to spend the quiet night?',
    branch: {
      optionA: 'Beside the singing reeds at the edge of the reflective pond.',
      optionB: 'Under the sheltering boughs of the weeping silver willow.',
      branchA: 'Barnaby settled by the pond where water lilies closed their petals, the gentle lapping of ripples creating the perfect white noise for sleep.',
      branchB: 'The silver willow boughs draped over the tortoise shell like a natural curtain, keeping everyone snug and protected until morning.'
    },
    conclusion: 'With all his passengers fast asleep on his blooming back, Barnaby pulled his head into his warm shell and rested in peace.',
    translations: {
      ta: {
        title: 'தோட்டத்தைச் சுமந்த ஆமை',
        subtitle: 'தன் முதுகில் மலர் தோட்டத்தைச் சுமந்து விலங்குகளுக்கு நிழல் தந்த ஆமை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: பசுமை ஆமை',
            text: 'பர்னபி என்ற பெரிய ஆமையின் முதுகில் பச்சை புற்களும் அழகிய ரோஜா மலர்களும் பூத்திருந்தன.'
          },
          {
            heading: 'அத்தியாயம் 2: தூங்கும் பயணிகள்',
            text: 'களைப்படைந்த பறவைகளும் சிறு விலங்குகளும் அதன் முதுகில் ஏறி படுத்துக் கொண்டன.'
          },
          {
            heading: 'அத்தியாயம் 3: நிதானமான பயணம்',
            text: 'ஆமையின் நிதானமான நடை அனைவருக்கும் அமைதியையும் பொறுமையையும் கற்பித்தது.'
          }
        ],
        choicePrompt: 'ஆமை இரவைக் கழிக்க எங்கு நிற்க வேண்டும்?',
        branch: {
          optionA: 'தாமரைகள் பூத்த அமைதியான குளக்கரையில் தங்குதல்.',
          optionB: 'வில்லோ மரத்தின் பெரிய கிளைகளின் நிழலில் தங்குதல்.',
          branchA: 'குளத்து நீரின் மெல்லிய சத்தத்தில் பயணிகள் அனைவரும் தூங்கினர்.',
          branchB: 'மரத்தின் கிளைகள் அவர்களுக்கு ஒரு பந்தல் போல பாதுகாப்பளித்தன.'
        },
        conclusion: 'அனைவரும் தன் முதுகில் தூங்குவதைக் கண்டு ஆமையும் நிம்மதியாக உறங்கியது.'
      }
    }
  },
  {
    id: 'story-19',
    number: 19,
    title: "The Moon's Lost Lullaby",
    subtitle: 'Gathering notes from cricket strings and night winds to heal the sky',
    category: 'Celestial Wonder',
    themeColor: '#8b5cf6',
    icon: '🌙',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Silent Night',
        text: 'Usually, when the moon rose over the mountain peak, an ethereal lullaby resonated across the sky, so soft that only hearts ready for sleep could hear it. But tonight, Mother Moon was quiet. A passing thunderstorm had scattered her musical notes across the seven hills.'
      },
      {
        heading: 'Chapter 2: The Collectors of Melody',
        text: 'Pip the astronomer squirrel and Maya the little girl set out with a brass music box. They found the first note resting in the bell of a bluebell, humming an E-flat. The second note was caught in the violin legs of a cricket playing on an oak stump.'
      },
      {
        heading: 'Chapter 3: The Final Chord',
        text: 'The third note was drifting on the surface of the mountain lake. Maya scooped it up in her palms—it felt like a cool silver marble that chimed with pure harmony. Together, they released the notes upward toward the crescent moon.'
      }
    ],
    choicePrompt: 'How will the restored lullaby be played across the land?',
    branch: {
      optionA: 'Through the gentle rustling of maple leaves in the midnight breeze.',
      optionB: 'Through the soft chime of starlight reflecting on every dewy lawn.',
      branchA: 'The breeze carried the melody through millions of leaves, whispering a blanket of soothing sound that reached every bedroom window.',
      branchB: 'Every dewdrop shimmered like a miniature bell, vibrating with the gentlest harmony that silenced all worries.'
    },
    conclusion: 'Mother Moon smiled with luminous silver warmth. Her lullaby restored, she watched over the sleeping world with infinite love.',
    translations: {
      ta: {
        title: 'நிலவின் தொலைந்த தாலாட்டு',
        subtitle: 'காற்றில் சிதறிய இசைக்குறிப்புகளை ஒன்று சேர்த்து நிலாவிடம் தந்த கதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: அமைதியான வானம்',
            text: 'வழக்கமாக நிலா பாடும் தாலாட்டுப் பாடல் புயல் காற்றினால் சிதறிப் போனது.'
          },
          {
            heading: 'அத்தியாயம் 2: இசைக் குறிப்புகள்',
            text: 'பிப்பும் மாயாவும் புல்வெளியிலும் பூக்களிலும் சிதறிய இசைக்குறிப்புகளைச் சேகரித்தனர்.'
          },
          {
            heading: 'அத்தியாயம் 3: நிலாவிடம் சேர்ப்பித்தல்',
            text: 'சேகரித்த இசைக்குறிப்புகளை வானை நோக்கி அனுப்பியதும் நிலா மீண்டும் பாடத் தொடங்கியது.'
          }
        ],
        choicePrompt: 'தாலாட்டுப் பாடல் எதன் வழியே உலகிற்கு ஒலிக்க வேண்டும்?',
        branch: {
          optionA: 'இரவுக் காற்றில் மரங்களின் இலைகள் அசைவதன் மூலம் ஒலித்தல்.',
          optionB: 'புற்களின் மீதுள்ள பனித்துளிகள் மூலம் எதிரொலித்தல்.',
          branchA: 'இலைகளின் அசைவில் தாலாட்டு ஒலித்து அனைவரையும் தூங்க வைத்தது.',
          branchB: 'பனித்துளிகள் மணிகளைப் போல ஒலித்து அமைதியைத் தந்தன.'
        },
        conclusion: 'நிலா தன் தாலாட்டை மீட்டெடுத்து புன்னகையோடு உலகைக் காத்தது.'
      }
    }
  },
  {
    id: 'story-20',
    number: 20,
    title: 'The Village of Glowing Windows',
    subtitle: 'Where every cottage lamp tells a tale of cozy peace and warm dreams',
    category: 'Cozy & Nature',
    themeColor: '#ca8a04',
    icon: '🏮',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Cobblestone Lane',
        text: 'In the gentle valley of Starling Brook sat a tiny village of timber-framed cottages with thatched roofs of dried lavender. As darkness descended, the villagers did not shutter their homes in fear. Instead, they lit handmade lanterns in every windowpane—amber, rose, violet, and mint.'
      },
      {
        heading: 'Chapter 2: The Evening Stroll',
        text: 'A little boy named Noah walked along the quiet cobblestones with his grandfather. Each window they passed held a warm scene: in one, a mother was reading a story to two sleepy kittens; in another, an old clockmaker was sipping chamomile tea.'
      },
      {
        heading: 'Chapter 3: The Window of Wishes',
        text: 'Noah reached his own cottage at the end of the lane. In his bedroom window sat an unlit glass lantern shaped like a star. "Now it’s your turn, Noah," Grandfather said, handing him a warm match of glowing starlight.'
      }
    ],
    choicePrompt: 'What color light will Noah kindle in his window?',
    branch: {
      optionA: 'Warm amber, symbolizing gratitude for all the joys of today.',
      optionB: 'Soft lavender, welcoming sweet and gentle dreams for tonight.',
      branchA: 'The lantern flared into a rich golden amber, sending a ray of warmth across the street to tell every neighbor that all was well.',
      branchB: 'A serene lavender glow filled Noah’s room, softening every shadow and making his bed feel like the coziest place in the world.'
    },
    conclusion: 'One by one, the glowing windows dimmed into gentle nightlights. Noah closed his eyes, wrapped in the warmth of his village and home.',
    translations: {
      ta: {
        title: 'ஒளிரும் ஜன்னல்களின் கிராமம்',
        subtitle: 'அமைதியும் அன்பும் நிறைந்த அழகிய சிற்றூரின் கதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: லாவெண்டர் வீடுகள்',
            text: 'ஒரு அழகான கிராமத்தில் இரவு வந்ததும் மக்கள் தங்கள் ஜன்னல்களில் வண்ண விளக்குகளை ஏற்றினர்.'
          },
          {
            heading: 'அத்தியாயம் 2: மாலை உலா',
            text: 'நோவா தன் தாத்தாவுடன் நடந்து சென்ற போது ஒவ்வொரு வீட்டிலும் அன்பும் அமைதியும் நிலவுவதைக் கண்டான்.'
          },
          {
            heading: 'அத்தியாயம் 3: தன் வீட்டு விளக்கு',
            text: 'தன் வீட்டிற்கு வந்ததும் தன் அறை ஜன்னலில் விளக்கேற்ற நோவா தயாரானான்.'
          }
        ],
        choicePrompt: 'நோவா தன் ஜன்னலில் எந்த நிற விளக்கை ஏற்ற வேண்டும்?',
        branch: {
          optionA: 'இன்றைய நாளின் மகிழ்ச்சிக்காக நன்றி கூறும் பொன் நிற விளக்கு.',
          optionB: 'அமைதியான கனவுகளை வரவேற்கும் மென்மையான ஊதா விளக்கு.',
          branchA: 'பொன் நிற விளக்கு தெருவில் உள்ள அனைவருக்கும் தன் அன்பைத் தெரிவித்தது.',
          branchB: 'ஊதா விளக்கு அவனது படுக்கையை கதகதப்பாக மாற்றி நிம்மதியைத் தந்தது.'
        },
        conclusion: 'அனைத்து விளக்குகளும் மெலிதாக எரிந்து கிராமத்தை இனிதே உறங்க வைத்தன.'
      }
    }
  },
  {
    id: 'story-21',
    number: 21,
    title: 'The Fairy Who Collected Wishes',
    subtitle: 'Weaving dandelion seeds and whispered hopes into starlight blankets',
    category: 'Magic & Wonder',
    themeColor: '#ec4899',
    icon: '✨',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Dandelion Meadow',
        text: 'Lillia was a fairy no taller than a teacup, with wings as sheer as dragonfly silk. Every evening at twilight, she carried a woven pouch made of spiderweb lace across the meadows, collecting the whispers children blew into fluffy white dandelion seeds.'
      },
      {
        heading: 'Chapter 2: The Types of Wishes',
        text: 'Some wishes were small: "I hope my puppy learns to shake hands." Some were sweet: "I wish Grandma’s knee feels better." Some were simple: "I want to have a magical dream tonight." Lillia treated every single wish as a priceless diamond.'
      },
      {
        heading: 'Chapter 3: The Loom of the Stars',
        text: 'High in an ancient hollow willow, Lillia loaded the wishes onto her celestial loom. As she pressed the pedals, the whispered hopes spun into glowing golden threads of pure comfort.'
      }
    ],
    choicePrompt: 'How will Lillia deploy the woven blanket of wishes?',
    branch: {
      optionA: 'Drape it across the night sky to soften thunderstorms into gentle drizzles.',
      optionB: 'Spread it invisibly over all the children who are having trouble falling asleep.',
      branchA: 'The starlight blanket smoothed the sky into peaceful indigo, ensuring a calm, quiet night for the entire countryside.',
      branchB: 'The invisible warmth settled over tired shoulders, instantly bringing feelings of safety, love, and sweet drowsiness.'
    },
    conclusion: 'Lillia rested inside a tulip blossom, her wings tucked neatly. Every wish had found its home, and now the fairy could sleep in peace.',
    translations: {
      ta: {
        title: 'ஆசைகளைச் சேகரித்த தேவதை',
        subtitle: 'குழந்தைகளின் நல்ல ஆசைகளை விண்மீன் போர்வையாக நெய்த தேவதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: புல்வெளி தேவதை',
            text: 'லில்லியா என்ற சிறிய தேவதை குழந்தைகள் ஊதிவிடும் பஞ்சுப் பூக்களிலிருந்து அவர்களின் நல்ல ஆசைகளைச் சேகரித்தது.'
          },
          {
            heading: 'அத்தியாயம் 2: நல்ல எண்ணங்கள்',
            text: 'பாட்டி நலம் பெற வேண்டும், நாய் குட்டி மகிழ்ச்சியாக இருக்க வேண்டும் போன்ற நல்ல ஆசைகளை அது பத்திரப்படுத்தியது.'
          },
          {
            heading: 'அத்தியாயம் 3: விண்மீன் தறி',
            text: 'அந்த ஆசைகளை விண்மீன் நூலாக மாற்றி ஒரு பெரிய அன்பின் போர்வையாக நெய்தது.'
          }
        ],
        choicePrompt: 'லில்லியா அந்தப் போர்வையை எங்கு போர்த்த வேண்டும்?',
        branch: {
          optionA: 'வானில் போர்த்தி புயல் காற்றை அமைதிப்படுத்துதல்.',
          optionB: 'தூக்கம் வராமல் தவிக்கும் குழந்தைகளின் மீது போர்த்தி அமைதி அளித்தல்.',
          branchA: 'வானம் அமைதியாகி தூறல் மழையாக மாறி நனைத்தது.',
          branchB: 'குழந்தைகள் மீது அன்புப் போர்வையாகப் படர்ந்து தூக்கத்தைக் கொடுத்தது.'
        },
        conclusion: 'அனைத்து ஆசைகளும் நிறைவேறிய திருப்தியில் தேவதையும் தூங்கியது.'
      }
    }
  },
  {
    id: 'story-22',
    number: 22,
    title: 'The Boat on the River of Stars',
    subtitle: 'Drifting down the celestial stream between shores of glowing lotus blooms',
    category: 'Celestial Wonder',
    themeColor: '#4f46e5',
    icon: '🛶',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Cedar Skiff',
        text: 'At the edge of the world, where the meadow grass ends and the night sky begins, flowed the River of Stars. Moored to a silver birch root was a polished cedar skiff with cushions of purple velvet. A young traveler named Sam stepped aboard, and the rope untied itself with a soft whisper.'
      },
      {
        heading: 'Chapter 2: The Luminous Lotus',
        text: 'The skiff needed no oars; the gentle starlight current carried it forward at a peaceful walking pace. On either side of the river, colossal glowing lotus blossoms opened their petals, shedding golden pollen that floated down like harmless fireflies.'
      },
      {
        heading: 'Chapter 3: The Starlight Ferryman',
        text: 'Sitting at the bow was an owl named Barnaby with a lantern hung from his beak. "Where are we going?" Sam asked, feeling the gentle, rhythmic rocking of the boat. "Nowhere at all," Barnaby hooted softly. "This river is for letting go of the day."'
      }
    ],
    choicePrompt: 'What should Sam release into the river to feel completely light?',
    branch: {
      optionA: 'A wooden leaf carrying today’s tiny worries, watching it float safely away.',
      optionB: 'A floating candle carrying a wish of gratitude for a loved one.',
      branchA: 'Sam placed the wooden leaf in the water. It drifted off into the glowing current, leaving his mind feeling completely light, empty, and serene.',
      branchB: 'The candle flame reflected on the water, spreading a golden aura of warmth that enveloped Sam like a familiar hug.'
    },
    conclusion: 'The gentle rocking of the skiff became slower and softer. Sam lay back on the velvet pillows and drifted into deep, untroubled slumber.',
    translations: {
      ta: {
        title: 'விண்மீன் ஆற்றில் ஒரு படகு',
        subtitle: 'அமைதியான நட்சத்திர ஆற்றில் மிதந்து கவலைகளை மறந்த ஒரு பயணம்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: மரப் படகு',
            text: 'விண்மீன்கள் ஓடும் ஆற்றில் ஒரு சிறிய மரப் படகு நின்றது. சாம் அதில் ஏறி அமர்ந்தான்.'
          },
          {
            heading: 'அத்தியாயம் 2: ஒளிரும் தாமரைகள்',
            text: 'ஆற்றின் இருபுறமும் ஒளிரும் தாமரை மலர்கள் பூத்து மணம் பரப்பிக் கொண்டிருந்தன.'
          },
          {
            heading: 'அத்தியாயம் 3: வழிகாட்டி ஆந்தை',
            text: 'படகில் இருந்த ஆந்தை, "இந்த ஆறு எங்கும் செல்லாது; பகலின் சோர்வை மறந்து நிம்மதியாக தூங்குவதற்கே இது ஓடுகிறது" என்றது.'
          }
        ],
        choicePrompt: 'சாம் தன் மனதை லேசாக்க ஆற்றில் எதை விட வேண்டும்?',
        branch: {
          optionA: 'தன் சின்னஞ்சிறு கவலைகளை ஒரு மர இலையில் வைத்து ஆற்றில் மிதக்க விடுதல்.',
          optionB: 'அன்பானவர்களுக்கான நன்றி விளக்கை ஆற்றில் ஏற்றி விடுதல்.',
          branchA: 'கவலைகள் மிதந்து சென்றதும் அவனது மனம் பஞ்சு போல லேசானது.',
          branchB: 'நன்றி விளக்கு அவனுக்கு மன நிறைவையும் அமைதியையும் தந்தது.'
        },
        conclusion: 'படகின் மெல்லிய அசைவில் சாம் நிம்மதியாக தூங்கினான்.'
      }
    }
  },
  {
    id: 'story-23',
    number: 23,
    title: 'The Friendly Monster Under the Bed',
    subtitle: 'Learning that shadows are just friends who haven’t said hello yet',
    category: 'Bravery & Wonder',
    themeColor: '#7c3aed',
    icon: '🧸',
    estimatedMinutes: 4,
    chapters: [
      {
        heading: 'Chapter 1: The Rustle in the Dark',
        text: 'Lucas was eight years old and very brave during the daytime, but when the bedroom lights clicked off, the space under his bed seemed very vast and shadowy. Tonight, he heard a distinct sound: "Snuffle... scritch... a-choo!"'
      },
      {
        heading: 'Chapter 2: The Fluffy Shadow',
        text: 'Lucas gripped his flashlight with determined fingers. Taking a deep breath, he leaned over the edge of his mattress and shone the beam beneath. Sitting there was not a scary beast with sharp claws, but Barnaby—a round, purple creature covered in fluff as soft as cotton candy, holding Lucas’s missing left slipper.'
      },
      {
        heading: 'Chapter 3: The Cold Toes',
        text: '"I’m sorry," Barnaby sniffled, his big yellow eyes blinking apologetically. "My paws were so cold, and your slipper was so warm. I didn’t mean to frighten you."'
      }
    ],
    choicePrompt: 'How will Lucas make peace with his fluffy under-bed friend?',
    branch: {
      optionA: 'Share his extra woolly blanket and invite Barnaby to sleep at the foot of the bed.',
      optionB: 'Give Barnaby his other slipper so both of his paws stay cozy.',
      branchA: 'Barnaby curled up like an oversized purring teddy bear at the foot of the bed, his gentle snoring acting like a reassuring white noise generator.',
      branchB: 'Barnaby slipped on both warm slippers with a joyful giggle, keeping guard against bad dreams all night long.'
    },
    conclusion: 'Lucas turned off the flashlight and laid his head down with a happy smile. The shadows were no longer scary—they were just cozy blankets waiting for friends.',
    translations: {
      ta: {
        title: 'கட்டிலுக்கு அடியில் ஒரு நல்ல நண்பன்',
        subtitle: 'இருட்டைக் கண்டு அஞ்சாமல் அன்பால் புதிய நண்பனைப் பெற்ற கதை',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: கட்டிலுக்கு அடியில் சத்தம்',
            text: 'லூகாஸ் படுக்கையில் படுத்திருந்த போது கட்டிலுக்கு அடியில் ஒரு தும்மல் சத்தம் கேட்டது.'
          },
          {
            heading: 'அத்தியாயம் 2: பஞ்சு போன்ற உருவம்',
            text: 'டார்ச் அடித்துப் பார்த்த போது, அங்கே பயங்கர மிருகம் இல்லை; பஞ்சு போன்ற மென்மையான ஊதா நிற குட்டி விலங்கு நின்றது.'
          },
          {
            heading: 'அத்தியாயம் 3: குளிரில் நடுங்கிய பாதம்',
            text: '"என் கால்கள் மிகவும் குளிர்ந்ததால் உன் செருப்பை மாட்டிக் கொண்டேன், என்னை மன்னித்துவிடு" என்று அது பணிவோடு கூறியது.'
          }
        ],
        choicePrompt: 'லூகாஸ் தன் புதிய நண்பனுக்கு எவ்வாறு உதவ வேண்டும்?',
        branch: {
          optionA: 'தன் கம்பளிப் போர்வையைப் பகிர்ந்து கொடுத்து கட்டிலின் ஓரத்தில் படுக்க வைத்தல்.',
          optionB: 'இன்னொரு செருப்பையும் கொடுத்து இரண்டு கால்களையும் கதகதப்பாக வைத்தல்.',
          branchA: 'அந்த பஞ்சு விலங்கு அவனது காலடியில் பூனை போல படுத்துக் கொண்டு அரவணைப்பைத் தந்தது.',
          branchB: 'இரண்டு செருப்புகளையும் மாட்டிக்கொண்டு அவனது கனவுகளைக் காக்கும் வீரனாக அது மாறியது.'
        },
        conclusion: 'இருட்டு என்பது பயம் அல்ல, அது புதிய நண்பர்களின் அடையாளம் என்பதை உணர்ந்து லூகாஸ் தூங்கினான்.'
      }
    }
  },
  {
    id: 'story-24',
    number: 24,
    title: 'The Mountain That Touched the Sunrise',
    subtitle: 'Climbing to the peak of lavender clouds to welcome the morning hope',
    category: 'Cozy & Nature',
    themeColor: '#f59e0b',
    icon: '🌄',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Trail of Starlight',
        text: 'Mount Whispercrest was the tallest peak in dreamland, but climbing it required no climbing ropes or heavy boots. Its slopes were formed of soft, springy moss and compressed lilac cloud-vapor. A young girl named Emma walked the trail in bare feet, feeling the earth breathe beneath her toes.'
      },
      {
        heading: 'Chapter 2: The Summit Sanctuary',
        text: 'At the summit stood a stone hearth where embers never died out, surrounded by plush pine cushions. The stars were so close that Emma could almost pluck them from the indigo sky like ripe plums.'
      },
      {
        heading: 'Chapter 3: The Horizon’s Promise',
        text: 'An eagle with feathers of spun silver landed beside her. "Look to the east, Emma," the eagle spoke with a voice like rustling leaves. "Even in the darkest hour of the night, dawn is already gathering its golden threads."'
      }
    ],
    choicePrompt: 'How will Emma spend her time on the summit before sleep?',
    branch: {
      optionA: 'Watch the first faint pink glow appear on the horizon, feeling peaceful hope.',
      optionB: 'Wrap herself in the silver eagle’s wing to dream of soaring over morning valleys.',
      branchA: 'The gentle pastel pink horizon reminded Emma that every worry fades and every morning brings a brand-new day of wonder.',
      branchB: 'Nestled beneath the giant wing, Emma felt completely safe and weightless, falling asleep as the mountain rocked with the night wind.'
    },
    conclusion: 'Perched high above the world, safe and loved, Emma fell into a deep and beautiful sleep.',
    translations: {
      ta: {
        title: 'விடியலைத் தொட்ட மலை',
        subtitle: 'இரவின் அமைதியில் விடியலின் நம்பிக்கையைத் தொட்ட பயணம்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: பனிமலைப் பாதை',
            text: 'எம்மா என்ற சிறுமி மென்மையான மேகங்களால் ஆன மலையின் உச்சிக்கு நடந்து சென்றாள்.'
          },
          {
            heading: 'அத்தியாயம் 2: விண்மீன் சிகரம்',
            text: 'மலையின் உச்சியில் விண்மீன்கள் மிக அருகில் பிரகாசித்துக் கொண்டிருந்தன.'
          },
          {
            heading: 'அத்தியாயம் 3: வெள்ளி கழுகு',
            text: 'அங்கு வந்த ஒரு பெரிய வெள்ளி கழுகு, "எவ்வளவு இருட்டாக இருந்தாலும் விடியல் நிச்சயம் வரும்" என்று நம்பிக்கையூட்டியது.'
          }
        ],
        choicePrompt: 'எம்மா மலையுச்சியில் எவ்வாறு உறங்க வேண்டும்?',
        branch: {
          optionA: 'கிழக்கே எழும் மெல்லிய பொன் நிற ஒளியைப் பார்த்து நம்பிக்கையுடன் தூங்குதல்.',
          optionB: 'கழுகின் பெரிய சிறகுகளுக்குள் கதகதப்பாகப் படுத்து உறங்குதல்.',
          branchA: 'விடியலின் ஒளி அவளது மனதில் புது நம்பிக்கையையும் அமைதியையும் தந்தது.',
          branchB: 'கழுகின் சிறகுகள் அவளுக்கு ஒரு பாதுகாப்பான வீடாக மாறியது.'
        },
        conclusion: 'எந்தக் கவலையும் இல்லாமல் எம்மா இனிதே தன் கண்களை மூடினாள்.'
      }
    }
  },
  {
    id: 'story-25',
    number: 25,
    title: 'Pip and the Door to Tomorrow',
    subtitle: 'The master astronomer locks the observatory gates and bids sweet dreams',
    category: 'Observatory Tales',
    themeColor: '#6366f1',
    icon: '🔭',
    estimatedMinutes: 5,
    chapters: [
      {
        heading: 'Chapter 1: The Midnight Clock Chimes',
        text: 'High in the copper dome of Pip’s Midnight Observatory, the brass gears of the Great Telescope ticked to a gentle halt. Pip, the friendly squirrel astronomer with his starry wizard hat and woolen scarf, polished the brass eyepiece with a velvet cloth. Below him, the entire dreamy world—the rabbit meadows, the flying whales, the candy castles, and the glowing villages—was settling into deep slumber.'
      },
      {
        heading: 'Chapter 2: The Constellation Map',
        text: 'Pip checked his starlight ledger. Every child had been paired with a sweet dream, every fallen star had been guided home, and the moon was singing its ancient lullaby across the calm sky. "A good night’s work," Pip whispered with a satisfied smile.'
      },
      {
        heading: 'Chapter 3: The Final Key',
        text: 'Pip walked to the great carved oak door of the observatory. This was the Door to Tomorrow—a portal of quiet rest that separates today’s adventures from tomorrow’s possibilities. He turned the silver key in the lock, letting the soothing quiet settle like a blanket over everything.'
      }
    ],
    choicePrompt: 'What bedtime blessing should Pip whisper through the keyhole?',
    branch: {
      optionA: '"You are safe, you are loved, and tomorrow holds endless wonderful adventures."',
      optionB: '"Let your thoughts drift like clouds, and let your sleep be deep and sweet."',
      branchA: 'Pip’s blessing echoed softly through every dream in the universe, filling little hearts with complete security and sweet expectation.',
      branchB: 'The words dissolved into a gentle lavender mist that swirled around your bed, smoothing your pillow and closing your heavy eyes.'
    },
    conclusion: 'Pip hung his starry hat on the wooden peg, blew out the observatory lantern, and curled up in his hammock under the skylight. "Goodnight, dear dreamer," he murmured. "See you in the stars."',
    translations: {
      ta: {
        title: 'பிப்பும் நாளைய தினத்தின் கதவும்',
        subtitle: 'வானாய்வகப் பணிகளை முடித்துவிட்டு பிப் கூறும் இனிமையான இரவு ஆசிகள்',
        chapters: [
          {
            heading: 'அத்தியாயம் 1: நள்ளிரவு மணி அடித்தது',
            text: 'பிப்பின் நள்ளிரவு வானாய்வகத்தில் தொலைநோக்கியின் சக்கரங்கள் மெதுவாக நின்று ஓய்வெடுத்தன. பிப் தன் தொலைநோக்கியைத் துடைத்துவிட்டு தூங்கும் உலகைப் பார்த்தார்.'
          },
          {
            heading: 'அத்தியாயம் 2: விண்மீன் கணக்கு',
            text: 'எல்லா குழந்தைகளுக்கும் நல்ல கனவுகள் சென்றடைந்து விட்டன, விண்மீன்கள் அனைத்தும் சரியாகப் பிரகாசிக்கின்றன என்பதை பிப் உறுதி செய்தார்.'
          },
          {
            heading: 'அத்தியாயம் 3: நாளைய தினத்தின் கதவு',
            text: 'இன்றைய நாளின் சோர்வுகளை முடித்து நாளை புதிய நன்னாளைத் தொடங்கும் மாயக் கதவை பிப் பூட்டினார்.'
          }
        ],
        choicePrompt: 'பிப் கதவின் வழியே உலகிற்கு என்ன ஆசி கூற வேண்டும்?',
        branch: {
          optionA: '"நீங்கள் எப்போதும் பாதுகாப்பாகவும் அன்பாகவும் இருக்கிறீர்கள்; நாளை உங்களுக்காகக் காத்திருக்கிறது."',
          optionB: '"மேகங்களைப் போல உங்கள் எண்ணங்களை லேசாக்கி ஆழ்ந்த அமைதியான தூக்கத்தைப் பெறுங்கள்."',
          branchA: 'அவரது அன்பான வார்த்தைகள் அனைவரின் இதயத்திலும் பாதுகாப்பையும் அமைதியையும் நிரப்பின.',
          branchB: 'மெல்லிய பனி போல அந்த ஆசிகள் இறங்கி அனைவரின் கண்களையும் தூங்க வைத்தன.'
        },
        conclusion: 'பிப் தன் தொப்பியை கழற்றி வைத்துவிட்டு விளக்கைத் தூண்டி தூங்கச் சென்றார். "இனிய இரவுக் கனவுகள், சின்னஞ்சிறு நெஞ்சங்களே!"'
      }
    }
  }
];
