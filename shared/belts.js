// BaresTKD shared belt + stripe catalog. Single source of truth for ranks and stripes. Loaded by all apps.
const BELT_COLORS = {
  'White':               '#f0f0f0',
  'Yellow':              '#f5c518',
  'Senior Yellow':       '#f5c518',
  'Orange':              '#f5830a',
  'Senior Orange':       '#f5830a',
  'Green':               '#3a9e3a',
  'Senior Green':        '#3a9e3a',
  'Purple':              '#8b3fa8',
  'Senior Purple':       '#8b3fa8',
  'Blue':                '#2a6fdb',
  'Senior Blue':         '#2a6fdb',
  'Brown':               '#7a4e1e',
  'Senior Brown':        '#7a4e1e',
  'Red':                 '#c8102e',
  'Senior Red':          '#c8102e',
  'Probationary Black':  '#111111',
  'Recommended Black':   '#111111',
  '1st Degree':          '#111111',
};

const BELTS = [

  // ── BEGINNER (White – Senior Orange) ─────────────────────
  {
    group: 'Beginner',
    name: 'White Belt',
    color: BELT_COLORS['White'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Ki-Bon',type:'form'}],
    forms: [{
      name: 'Ki-Bon',
      korean: '기본',
      note: '(14 movements) — "The Basics." The foundation form every student learns first.',
      youtubeUrl: 'https://youtu.be/mOiB-10NcHM'
    }],
    rotation: null,
    cycleNote: null,
    stripes: {
      black: [
        {
          label: 'Stripe 1 — Stances & Commands',
          details: [
            { title: 'Stances', items: ['Attention Position', 'Ready Position', 'Front Stance', 'Back Stance', 'Sitting Stance'] },
            { title: 'Commands', items: [
              'Charyot (차렷) — Attention, go to attention position',
              'Kyungye (경례) — Bow',
              'Joonbi (준비) — Ready, go from attention to ready position',
              'Bahrroh (바로) — Back to ready, return from stance to ready position',
              'Shiop (쉬어) — Rest, left foot returns from ready to attention',
              'Sijak (시작) — Go / Begin',
            ]}
          ]
        },
        {
          label: 'Stripe 2 — Hand Techniques',
          details: [
            { title: 'Techniques', items: ['Inner Forearm Block', 'Low Block', 'High Block', 'Knife Hand Strike'] }
          ]
        },
        {
          label: 'Stripe 3 — Sparring Combinations',
          details: [
            { title: 'Combo 1', items: ['Lead hand knife hand', '#1 Sidekick (front leg)', 'Reverse punch', '#2 Front kick (back leg)'] },
            { title: 'Combo 2', items: ['Front arm backfist', 'Reverse punch', '#2 Crescent kick', 'Back leg steps to front leg front kick (or skipping front kick)'] },
          ]
        },
        {
          label: 'Stripe 4 — Ki-Bon (Form)',
          details: [
            { title: 'Form', items: ['Ki-Bon — see form section above'] }
          ]
        },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks', details: [{ title: 'Kicks', items: ['#1 Side Kick (front leg)', '#1 Front Kick (front leg)', '#2 Front Kick (back leg)', '#1 Round Kick (front leg)', '#2 Round Kick (back leg)', 'Inside Crescent Kick', 'Outside Crescent Kick'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',  details: [{ title: 'Rotating', items: ['Self defense curriculum rotates with the current cycle'] }] },
      ]
    },
  },

  {
    group: 'Beginner',
    name: 'Yellow Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — Hand Techniques', details: [
          { title: 'Dan-Gun Cycle', items: ['Double knifehand block', 'Square block', 'Outer forearm block', 'Outside block', 'Ridgehand', 'Palm heel'] },
          { title: 'Do-San Cycle', items: ['Outer forearm block', 'Double knifehand block', 'Spearhand', 'Spin backfist', 'Twin outer forearm block', 'Ridgehand', 'Palm heel'] }
        ]},
        { label: 'Stripe 2 — Kicks', details: [
          { title: 'Dan-Gun Cycle', items: ['Front kick/round kick combo', 'Spin side kick', 'Spin crescent kick'] },
          { title: 'Do-San Cycle', items: ['#3 Front kick', '#3 Side kick', '#3 Round kick', '#2 Hook kick'] }
        ]},
        { label: 'Stripe 3 — Sparring Combos', details: [
          { title: 'Dan-Gun Combo 1', items: ['Outer forearm block', 'Reverse ridgehand', '#2 Round kick', 'Spin side kick'] },
          { title: 'Dan-Gun Combo 2', items: ['Outside block', 'Reverse punch', 'Hook punch', '#1 Side kick', 'Spin crescent kick'] },
          { title: 'Do-San Combo 1', items: ['#3 Side kick', 'Lead backfist', 'Reverse punch', '#2 Hook kick'] },
          { title: 'Do-San Combo 2', items: ['#3 Round kick', '#2 Front kick/round kick combo', 'Reverse hook punch (#4)', 'Lead uppercut (#5)'] }
        ]},
        { label: 'Stripe 4 — Form', details: [
          { title: 'Dan-Gun Cycle', items: ['Dan-Gun (21 movements)'] },
          { title: 'Do-San Cycle', items: ['Do-San (24 movements)'] }
        ]},
      ],
      colored: [
        { color: '#c8102e', label: 'Red Stripe — Self Defense',    rotate: true,  details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',  rotate: true,  details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',   rotate: true,  details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
      ]
    },
    color: BELT_COLORS['Yellow'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Dan-Gun / Do-San',type:'form'}],
    forms: [
      {name:'Dan-Gun', meaning:'(21 movements) — Named after the legendary king Dangun, founder of the Gojoseon Dynasty in 2333 BCE.', korean:'단군', note:''},
      {name:'Do-San',  meaning:'(24 movements) — Pseudonym of patriot An Changho (1876–1938), devoted his life to Korean education and independence.', korean:'도산',  note:'', youtubeUrl:'https://youtu.be/CKoHZpBpYsM'},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Beginner',
    name: 'Senior Yellow Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — Hand Techniques', details: [
          { title: 'Dan-Gun Cycle', items: ['Double knifehand block', 'Square block', 'Outer forearm block', 'Outside block', 'Ridgehand', 'Palm heel'] },
          { title: 'Do-San Cycle', items: ['Outer forearm block', 'Double knifehand block', 'Spearhand', 'Spin backfist', 'Twin outer forearm block', 'Ridgehand', 'Palm heel'] }
        ]},
        { label: 'Stripe 2 — Kicks', details: [
          { title: 'Dan-Gun Cycle', items: ['Front kick/round kick combo', 'Spin side kick', 'Spin crescent kick', 'Slide side kick', 'Skip round kick', '#2 Jump round kick'] },
          { title: 'Do-San Cycle', items: ['#3 Front kick', '#3 Side kick', '#3 Round kick', '#2 Hook kick', 'Slide side kick', 'Skip round kick', '#2 Jump round kick'] }
        ]},
        { label: 'Stripe 3 — Sparring Combos', details: [
          { title: 'Dan-Gun Combo 1', items: ['Outer forearm block', 'Reverse ridgehand', '#2 Round kick', 'Spin side kick'] },
          { title: 'Dan-Gun Combo 2', items: ['Outside block', 'Reverse punch', 'Hook punch', '#1 Side kick', 'Spin crescent kick'] },
          { title: 'Do-San Combo 1', items: ['#3 Side kick', 'Lead backfist', 'Reverse punch', '#2 Hook kick'] },
          { title: 'Do-San Combo 2', items: ['#3 Round kick', '#2 Front kick/round kick combo', 'Reverse hook punch (#4)', 'Lead uppercut (#5)'] }
        ]},
        { label: 'Stripe 4 — Form', details: [
          { title: 'Dan-Gun Cycle', items: ['Dan-Gun (21 movements)'] },
          { title: 'Do-San Cycle', items: ['Do-San (24 movements)'] }
        ]},
      ],
      colored: [
        { color: '#c8102e', label: 'Red Stripe — Self Defense',    rotate: true,  details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',  rotate: true,  details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',   rotate: true,  details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
      ]
    },
    color: BELT_COLORS['Senior Yellow'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Dan-Gun / Do-San',type:'form'}],
    forms: [
      {name:'Dan-Gun', meaning:'(21 movements) — Named after the legendary king Dangun, founder of the Gojoseon Dynasty in 2333 BCE.', korean:'단군', note:''},
      {name:'Do-San',  meaning:'(24 movements) — Pseudonym of patriot An Changho (1876–1938), devoted his life to Korean education and independence.', korean:'도산',  note:'', youtubeUrl:'https://youtu.be/CKoHZpBpYsM'},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Beginner',
    name: 'Orange Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — Hand Techniques', details: [
          { title: 'Dan-Gun Cycle', items: ['Double knifehand block', 'Square block', 'Outer forearm block', 'Outside block', 'Ridgehand', 'Palm heel'] },
          { title: 'Do-San Cycle', items: ['Outer forearm block', 'Double knifehand block', 'Spearhand', 'Spin backfist', 'Twin outer forearm block', 'Ridgehand', 'Palm heel'] }
        ]},
        { label: 'Stripe 2 — Kicks', details: [
          { title: 'Dan-Gun Cycle', items: ['Front kick/round kick combo', 'Spin side kick', 'Spin crescent kick', 'Slide side kick', 'Skip round kick', '#2 Jump round kick'] },
          { title: 'Do-San Cycle', items: ['#3 Front kick', '#3 Side kick', '#3 Round kick', '#2 Hook kick', 'Slide side kick', 'Skip round kick', '#2 Jump round kick'] }
        ]},
        { label: 'Stripe 3 — Sparring Combos', details: [
          { title: 'Dan-Gun Combo 1', items: ['Outer forearm block', 'Reverse ridgehand', '#2 Round kick', 'Spin side kick'] },
          { title: 'Dan-Gun Combo 2', items: ['Outside block', 'Reverse punch', 'Hook punch', '#1 Side kick', 'Spin crescent kick'] },
          { title: 'Do-San Combo 1', items: ['#3 Side kick', 'Lead backfist', 'Reverse punch', '#2 Hook kick'] },
          { title: 'Do-San Combo 2', items: ['#3 Round kick', '#2 Front kick/round kick combo', 'Reverse hook punch (#4)', 'Lead uppercut (#5)'] }
        ]},
        { label: 'Stripe 4 — Form', details: [
          { title: 'Dan-Gun Cycle', items: ['Dan-Gun (21 movements)'] },
          { title: 'Do-San Cycle', items: ['Do-San (24 movements)'] }
        ]},
      ],
      colored: [
        { color: '#c8102e', label: 'Red Stripe — Self Defense',    rotate: true,  details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',  rotate: true,  details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',   rotate: true,  details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
      ]
    },
    color: BELT_COLORS['Orange'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Dan-Gun / Do-San',type:'form'}],
    forms: [
      {name:'Dan-Gun', meaning:'(21 movements) — Named after the legendary king Dangun, founder of the Gojoseon Dynasty in 2333 BCE.', korean:'단군', note:''},
      {name:'Do-San',  meaning:'(24 movements) — Pseudonym of patriot An Changho (1876–1938), devoted his life to Korean education and independence.', korean:'도산',  note:'', youtubeUrl:'https://youtu.be/CKoHZpBpYsM'},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Beginner',
    name: 'Senior Orange Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — Hand Techniques', details: [
          { title: 'Dan-Gun Cycle', items: ['Double knifehand block', 'Square block', 'Outer forearm block', 'Outside block', 'Ridgehand', 'Palm heel'] },
          { title: 'Do-San Cycle', items: ['Outer forearm block', 'Double knifehand block', 'Spearhand', 'Spin backfist', 'Twin outer forearm block', 'Ridgehand', 'Palm heel'] }
        ]},
        { label: 'Stripe 2 — Kicks', details: [
          { title: 'Dan-Gun Cycle', items: ['Front kick/round kick combo', 'Spin side kick', 'Spin crescent kick', 'Slide side kick', 'Skip round kick', '#2 Jump round kick'] },
          { title: 'Do-San Cycle', items: ['#3 Front kick', '#3 Side kick', '#3 Round kick', '#2 Hook kick', 'Slide side kick', 'Skip round kick', '#2 Jump round kick'] }
        ]},
        { label: 'Stripe 3 — Sparring Combos', details: [
          { title: 'Dan-Gun Combo 1', items: ['Outer forearm block', 'Reverse ridgehand', '#2 Round kick', 'Spin side kick'] },
          { title: 'Dan-Gun Combo 2', items: ['Outside block', 'Reverse punch', 'Hook punch', '#1 Side kick', 'Spin crescent kick'] },
          { title: 'Do-San Combo 1', items: ['#3 Side kick', 'Lead backfist', 'Reverse punch', '#2 Hook kick'] },
          { title: 'Do-San Combo 2', items: ['#3 Round kick', '#2 Front kick/round kick combo', 'Reverse hook punch (#4)', 'Lead uppercut (#5)'] }
        ]},
        { label: 'Stripe 4 — Form', details: [
          { title: 'Dan-Gun Cycle', items: ['Dan-Gun (21 movements)'] },
          { title: 'Do-San Cycle', items: ['Do-San (24 movements)'] }
        ]},
      ],
      colored: [
        { color: '#c8102e', label: 'Red Stripe — Self Defense',    rotate: true,  details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',  rotate: true,  details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',   rotate: true,  details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
      ]
    },
    color: BELT_COLORS['Senior Orange'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Dan-Gun / Do-San',type:'form'}],
    forms: [
      {name:'Dan-Gun', meaning:'(21 movements) — Named after the legendary king Dangun, founder of the Gojoseon Dynasty in 2333 BCE.', korean:'단군', note:''},
      {name:'Do-San',  meaning:'(24 movements) — Pseudonym of patriot An Changho (1876–1938), devoted his life to Korean education and independence.', korean:'도산',  note:'', youtubeUrl:'https://youtu.be/CKoHZpBpYsM'},
    ],
    rotation: null,
    cycleNote: null,
  },

  {
    group: 'Intermediate',
    name: 'Green Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
      ]
    },
    color: BELT_COLORS['Green'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Jun-Gun / Yul-Guk / Won-Hyo',type:'form'}],
    forms: [
      {name:'Jun-Gun',  meaning:'(32 movements) — Named after An Junggeun, who stood against Japanese occupation and was executed in 1910.', korean:'준군', note:''},
      {name:'Yul-Guk',  meaning:'(36 movements) — Pseudonym of philosopher Yi Yi (1536–1584), the "Confucius of Korea."', korean:'율곡',  note:'', youtubeUrl:'https://youtu.be/8QRUCsxAVRA'},
      {name:'Won-Hyo',  meaning:'(27 movements) — A monk and writer (617–686) who brought Buddhist teachings to the Silla Dynasty.', korean:'원효',  note:''},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Intermediate',
    name: 'Senior Green Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
      ]
    },
    color: BELT_COLORS['Senior Green'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Jun-Gun / Yul-Guk / Won-Hyo',type:'form'}],
    forms: [
      {name:'Jun-Gun',  meaning:'(32 movements) — Named after An Junggeun, who stood against Japanese occupation and was executed in 1910.', korean:'준군', note:''},
      {name:'Yul-Guk',  meaning:'(36 movements) — Pseudonym of philosopher Yi Yi (1536–1584), the "Confucius of Korea."', korean:'율곡',  note:'', youtubeUrl:'https://youtu.be/8QRUCsxAVRA'},
      {name:'Won-Hyo',  meaning:'(27 movements) — A monk and writer (617–686) who brought Buddhist teachings to the Silla Dynasty.', korean:'원효',  note:''},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Intermediate',
    name: 'Purple Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
      ]
    },
    color: BELT_COLORS['Purple'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Jun-Gun / Yul-Guk / Won-Hyo',type:'form'}],
    forms: [
      {name:'Jun-Gun',  meaning:'(32 movements) — Named after An Junggeun, who stood against Japanese occupation and was executed in 1910.', korean:'준군', note:''},
      {name:'Yul-Guk',  meaning:'(36 movements) — Pseudonym of philosopher Yi Yi (1536–1584), the "Confucius of Korea."', korean:'율곡',  note:'', youtubeUrl:'https://youtu.be/8QRUCsxAVRA'},
      {name:'Won-Hyo',  meaning:'(27 movements) — A monk and writer (617–686) who brought Buddhist teachings to the Silla Dynasty.', korean:'원효',  note:''},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Intermediate',
    name: 'Senior Purple Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
      ]
    },
    color: BELT_COLORS['Senior Purple'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Jun-Gun / Yul-Guk / Won-Hyo',type:'form'}],
    forms: [
      {name:'Jun-Gun',  meaning:'(32 movements) — Named after An Junggeun, who stood against Japanese occupation and was executed in 1910.', korean:'준군', note:''},
      {name:'Yul-Guk',  meaning:'(36 movements) — Pseudonym of philosopher Yi Yi (1536–1584), the "Confucius of Korea."', korean:'율곡',  note:'', youtubeUrl:'https://youtu.be/8QRUCsxAVRA'},
      {name:'Won-Hyo',  meaning:'(27 movements) — A monk and writer (617–686) who brought Buddhist teachings to the Silla Dynasty.', korean:'원효',  note:''},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Intermediate',
    name: 'Blue Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
      ]
    },
    color: BELT_COLORS['Blue'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Jun-Gun / Yul-Guk / Won-Hyo',type:'form'}],
    forms: [
      {name:'Jun-Gun',  meaning:'(32 movements) — Named after An Junggeun, who stood against Japanese occupation and was executed in 1910.', korean:'준군', note:''},
      {name:'Yul-Guk',  meaning:'(36 movements) — Pseudonym of philosopher Yi Yi (1536–1584), the "Confucius of Korea."', korean:'율곡',  note:'', youtubeUrl:'https://youtu.be/8QRUCsxAVRA'},
      {name:'Won-Hyo',  meaning:'(27 movements) — A monk and writer (617–686) who brought Buddhist teachings to the Silla Dynasty.', korean:'원효',  note:''},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Intermediate',
    name: 'Senior Blue Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
      ]
    },
    color: BELT_COLORS['Senior Blue'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Jun-Gun / Yul-Guk / Won-Hyo',type:'form'}],
    forms: [
      {name:'Jun-Gun',  meaning:'(32 movements) — Named after An Junggeun, who stood against Japanese occupation and was executed in 1910.', korean:'준군', note:''},
      {name:'Yul-Guk',  meaning:'(36 movements) — Pseudonym of philosopher Yi Yi (1536–1584), the "Confucius of Korea."', korean:'율곡',  note:'', youtubeUrl:'https://youtu.be/8QRUCsxAVRA'},
      {name:'Won-Hyo',  meaning:'(27 movements) — A monk and writer (617–686) who brought Buddhist teachings to the Silla Dynasty.', korean:'원효',  note:''},
    ],
    rotation: null,
    cycleNote: null,
  },

  {
    group: 'Advanced',
    name: 'Brown Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['Brown'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Hwa-Rang / Choong-Moo',type:'form'}],
    forms: [
      {name:'Hwa-Rang',   meaning:'(31 movements) — Named after the Hwarang youth group whose teachings helped unify the three kingdoms of Korea.', korean:'화랑', note:'', youtubeUrl:''},
      {name:'Choong-Moo', meaning:'(31 movements) — Named after Admiral Yi Sunsin, inventor of the first armored battleship. Ends left-hand to symbolize his untimely death.', korean:'충무', note:'', youtubeUrl:'https://youtu.be/y8oOgZvdVFQ'},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Advanced',
    name: 'Senior Brown Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['Senior Brown'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Hwa-Rang / Choong-Moo',type:'form'}],
    forms: [
      {name:'Hwa-Rang',   meaning:'(31 movements) — Named after the Hwarang youth group whose teachings helped unify the three kingdoms of Korea.', korean:'화랑', note:''},
      {name:'Choong-Moo', meaning:'(31 movements) — Named after Admiral Yi Sunsin, inventor of the first armored battleship. Ends left-hand to symbolize his untimely death.', korean:'충무', note:'', youtubeUrl:'https://youtu.be/y8oOgZvdVFQ'},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Advanced',
    name: 'Red Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['Red'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Hwa-Rang / Choong-Moo',type:'form'}],
    forms: [
      {name:'Hwa-Rang',   meaning:'(31 movements) — Named after the Hwarang youth group whose teachings helped unify the three kingdoms of Korea.', korean:'화랑', note:''},
      {name:'Choong-Moo', meaning:'(31 movements) — Named after Admiral Yi Sunsin, inventor of the first armored battleship. Ends left-hand to symbolize his untimely death.', korean:'충무', note:'', youtubeUrl:'https://youtu.be/y8oOgZvdVFQ'},
    ],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Advanced',
    name: 'Senior Red Belt',
    stripes: {
      black: [
        { color: '#111',  label: 'Black Stripe — Form',        details: [{ title: 'Form', items: ['See rotating schedule above'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #1',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
        { color: '#888',  label: 'Gray Stripe — One Step #2',  details: [{ title: 'One Step', items: ['One step combination content — add here'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['Senior Red'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Rotating Form',type:'rotate'},{label:'Hwa-Rang / Choong-Moo',type:'form'}],
    forms: [],
    rotation: {
      title: 'Brown → Red Rotation',
      description: 'Final rank in the Brown–Red rotation group.',
      items: ['Cycle A — Hwa-Rang — (31 movements) — Named after the Hwarang youth group whose teachings helped unify the three kingdoms of Korea. (화랑)', 'Cycle B — Choong-Moo — (31 movements) — Named after Admiral Yi Sunsin, inventor of the first armored battleship. Ends left-hand to symbolize his untimely death. (충무)'],
    },
    cycleNote: null,
  },

  // ── BLACK BELT ───────────────────────────────────────────
  {
    group: 'Black Belt',
    name: 'Probationary Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['Probationary Black'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Gwang-Gae',type:'form'}],
    forms: [{name:'Gwang-Gae', meaning:'(42 movements) — Named after Gwanggaeto the Great, 19th King of Goguryeo, who reclaimed vast Korean territory.', korean:'광개', note:'Shared by Probationary and Recommended Black Belt ranks.'}],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: 'Recommended Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['Recommended Black'],
    meta: '1 cycle · 10 weeks',
    tags: [{label:'Gwang-Gae',type:'form'}],
    forms: [{name:'Gwang-Gae', meaning:'(42 movements) — Named after Gwanggaeto the Great, 19th King of Goguryeo, who reclaimed vast Korean territory.', korean:'광개', note:'Shared with Probationary Black Belt.'}],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '1st Degree Decided Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Poe-Eun',type:'form'}],
    forms: [{name:'Poe-Eun', meaning:'Named after scholar Jeong Mong-ju (1337–1392), whose unyielding loyalty to Goryeo was expressed through poetry.', korean:'포은', note:''}],
    rotation: null,
    cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '1st Degree Decided Level 2',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Poe-Eun',type:'form'}],
    forms: [{name:'Poe-Eun', meaning:'(36 movements) — Named after scholar Jeong Mong-ju (1337–1392), whose unyielding loyalty to Goryeo was expressed through poetry.', korean:'포은', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '1st Degree Senior Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Gae-Baek',type:'form'}],
    forms: [{name:'Gae-Baek', youtubeUrl:'https://youtu.be/W71l8NPdggw', meaning:'(44 movements) — Named after General Gae Baek of the Baekje Dynasty (660 CE), known for strict military discipline.', korean:'개백', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '1st Degree Senior Level 2',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Gae-Baek',type:'form'}],
    forms: [{name:'Gae-Baek', youtubeUrl:'https://youtu.be/W71l8NPdggw', meaning:'(44 movements) — Named after General Gae Baek of the Baekje Dynasty (660 CE), known for strict military discipline.', korean:'개백', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '2nd Degree Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Choong-Jang',type:'form'}],
    forms: [{name:'Choong-Jang', meaning:'(38 movements) — Named after General Kim Duk-Ryong (1567–1596), who led resistance against Japanese forces and died in prison.', korean:'충장', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '2nd Degree Black Belt Level 2',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Choong-Jang',type:'form'}],
    forms: [{name:'Choong-Jang', meaning:'(38 movements) — Named after General Kim Duk-Ryong (1567–1596), who led resistance against Japanese forces and died in prison.', korean:'충장', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '2nd Degree Decided Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Yoo-Sin',type:'form'}],
    forms: [{name:'Yoo-Sin', meaning:'(69 movements) — Named after General Kim Yoo-Sin, credited with unifying the three kingdoms of Korea under the Silla Dynasty.', korean:'유신', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '2nd Degree Decided Black Belt Level 2',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Yoo-Sin',type:'form'}],
    forms: [{name:'Yoo-Sin', meaning:'(69 movements) — Named after General Kim Yoo-Sin, credited with unifying the three kingdoms of Korea under the Silla Dynasty.', korean:'유신', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '2nd Degree Senior Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Ul-Ji',type:'form'}],
    forms: [{name:'Ul-Ji', meaning:'(42 movements) — Named after General Ul-Ji Moon Dok, who defeated a Chinese invasion of over 300,000 soldiers during the Koguryo Dynasty.', korean:'을지', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '2nd Degree Senior Black Belt Level 2',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '2 cycles · 20 weeks',
    tags: [{label:'Ul-Ji',type:'form'}],
    forms: [{name:'Ul-Ji', meaning:'(42 movements) — Named after General Ul-Ji Moon Dok, who defeated a Chinese invasion of over 300,000 soldiers during the Koguryo Dynasty.', korean:'을지', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '3rd Degree Black Belt',
    stripes: {
      black: [
        { label: 'Stripe 1 — New Techniques',      details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },
        { label: 'Stripe 2 — Form',                 details: [{ title: 'Form', items: ['See form section above'] }] },
      ],
      colored: [
        { color: '#2a6fdb', label: 'Blue Stripe — Kicks',              rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },
        { color: '#c8102e', label: 'Red Stripe — Self Defense',         rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },
        { color: '#8b3fa8', label: 'Purple Stripe — Power Combo',       rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },
        { color: '#f5830a', label: 'Orange Stripe — Mitt Combo',        rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },
        { color: '#3a9e3a', label: 'Green Stripe — Sparring Combo',     rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },
        { color: '#7a4e1e', label: 'Brown Stripe — Board Breaking',     rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] },
      ]
    },
    color: BELT_COLORS['1st Degree'],
    meta: '1 year at rank',
    tags: [{label:'Yon-Gae',type:'form'}],
    forms: [{name:'Yon-Gae', meaning:'(51 movements) — Named after Yon Gae Somun, a powerful general of the Koguryo Dynasty who successfully defended Korea against Chinese aggression.', korean:'연개', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '3rd Degree Decided Black Belt',
    stripes: { black: [{ label: 'Stripe 1 — New Techniques', details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },{ label: 'Stripe 2 — Form', details: [{ title: 'Form', items: ['See form section above'] }] }], colored: [{ color: '#2a6fdb', label: 'Blue Stripe — Kicks', rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },{ color: '#c8102e', label: 'Red Stripe — Self Defense', rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },{ color: '#8b3fa8', label: 'Purple Stripe — Power Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },{ color: '#f5830a', label: 'Orange Stripe — Mitt Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },{ color: '#3a9e3a', label: 'Green Stripe — Sparring Combo', rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },{ color: '#7a4e1e', label: 'Brown Stripe — Board Breaking', rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] }] },
    color: BELT_COLORS['1st Degree'], meta: '1 year at rank',
    tags: [{label:'Juche',type:'form'}],
    forms: [{name:'Juche', meaning:'(45 movements) — Meaning coming soon.', korean:'주체', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '3rd Degree Senior Black Belt',
    stripes: { black: [{ label: 'Stripe 1 — New Techniques', details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },{ label: 'Stripe 2 — Form', details: [{ title: 'Form', items: ['See form section above'] }] }], colored: [{ color: '#2a6fdb', label: 'Blue Stripe — Kicks', rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },{ color: '#c8102e', label: 'Red Stripe — Self Defense', rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },{ color: '#8b3fa8', label: 'Purple Stripe — Power Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },{ color: '#f5830a', label: 'Orange Stripe — Mitt Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },{ color: '#3a9e3a', label: 'Green Stripe — Sparring Combo', rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },{ color: '#7a4e1e', label: 'Brown Stripe — Board Breaking', rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] }] },
    color: BELT_COLORS['1st Degree'], meta: '1 year at rank',
    tags: [{label:'Ko-Dang',type:'form'}],
    forms: [{name:'Ko-Dang', meaning:'(55 movements) — The pseudonym of patriot Cho Man Ik, who dedicated his life to the independence and education of Korea.', korean:'고당', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '4th Degree Black Belt',
    stripes: { black: [{ label: 'Stripe 1 — New Techniques', details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },{ label: 'Stripe 2 — Form', details: [{ title: 'Form', items: ['See form section above'] }] }], colored: [{ color: '#2a6fdb', label: 'Blue Stripe — Kicks', rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },{ color: '#c8102e', label: 'Red Stripe — Self Defense', rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },{ color: '#8b3fa8', label: 'Purple Stripe — Power Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },{ color: '#f5830a', label: 'Orange Stripe — Mitt Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },{ color: '#3a9e3a', label: 'Green Stripe — Sparring Combo', rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },{ color: '#7a4e1e', label: 'Brown Stripe — Board Breaking', rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] }] },
    color: BELT_COLORS['1st Degree'], meta: '2 years at rank',
    tags: [{label:'Choi-Yong',type:'form'}],
    forms: [{name:'Choi-Yong', meaning:'(movements coming soon) — Named after General Choi Yong (1316–1388), Premier and Commander-in-Chief of the Koryo Dynasty, known for his loyalty and incorruptibility.', korean:'최용', note:''}],
    rotation: null, cycleNote: null,
  },
  {
    group: 'Black Belt',
    name: '4th Degree Senior Black Belt',
    stripes: { black: [{ label: 'Stripe 1 — New Techniques', details: [{ title: 'Techniques', items: ['Add techniques for this rank here'] }] },{ label: 'Stripe 2 — Form', details: [{ title: 'Form', items: ['See form section above'] }] }], colored: [{ color: '#2a6fdb', label: 'Blue Stripe — Kicks', rotate: true, details: [{ title: 'Current Rotation — Do-San / Yul-Guk / Choong-Moo', items: ['Kick content — add for current rotation'] }] },{ color: '#c8102e', label: 'Red Stripe — Self Defense', rotate: true, details: [{ title: 'Current Cycle', items: ['Block incoming punch', 'Parry to grab', 'Under the shoulder grab'] }] },{ color: '#8b3fa8', label: 'Purple Stripe — Power Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Skipping roundhouse', 'Reverse punch (#2)', 'Roundhouse'] }] },{ color: '#f5830a', label: 'Orange Stripe — Mitt Combo', rotate: true, details: [{ title: 'Current Cycle', items: ['Jab', 'Slip (#1 slip #3) — slip to left side', 'Hook punch'] }] },{ color: '#3a9e3a', label: 'Green Stripe — Sparring Combo', rotate: true, details: [{ title: 'Current Cycle — Green Belt & Above', items: ['#1 Slide sidekick', 'Hand fake', '#2 Front kick', 'Spin sidekick', 'Feint spin kick', '#1 Hook or step behind hook'] }] },{ color: '#7a4e1e', label: 'Brown Stripe — Board Breaking', rotate: true, details: [{ title: 'Board Breaking — see Boards tab', items: ['Board breaking requirements listed in the 🪵 Boards tab'] }] }] },
    color: BELT_COLORS['1st Degree'], meta: '2 years at rank',
    tags: [{label:'Tong-Il',type:'form'}],
    forms: [{name:'Tong-Il', meaning:'(67 movements) — Denotes the hope for the reunification of Korea, divided since 1945. The diagram symbolizes people being as one.', korean:'통일', note:''}],
    rotation: null, cycleNote: null,
  },
];

function getStripeId(stripe, beltName){
  if (stripe && stripe.id) return stripe.id;           // explicit override always wins
  var L = ((stripe && stripe.label) || '').toLowerCase();
  if (L.indexOf('self defense') >= 0 || L.indexOf('self-defense') >= 0) return 'self-defense';
  if (L.indexOf('power combo') >= 0)    return 'power-combo';
  if (L.indexOf('mitt combo') >= 0)     return 'mitt-combo';
  if (L.indexOf('sparring combo') >= 0) return 'sparring-combo';
  if (L.indexOf('board breaking') >= 0) return 'board-breaking';
  if (L.indexOf('one step #1') >= 0)    return 'one-step-1';
  if (L.indexOf('one step #2') >= 0)    return 'one-step-2';
  if (L.indexOf('new techniques') >= 0) return 'new-techniques';
  if (L.indexOf('kick') >= 0)           return 'kicks';
  if (L.indexOf('form') >= 0)           return 'form';
  var slug = function(s){ return (s||'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); };
  return slug(beltName) + '--' + slug(L);              // per-belt placeholder for everything else
}

function stripeCatalog(){
  var map = {};
  BELTS.forEach(function(b){
    var st = b.stripes || {};
    ['black','colored'].forEach(function(g){
      (st[g]||[]).forEach(function(s){
        var id = getStripeId(s, b.name);
        if(!map[id]) map[id] = { labels:{}, belts:[] };
        map[id].labels[s.label] = true;
        if(map[id].belts.indexOf(b.name) < 0) map[id].belts.push(b.name);
      });
    });
  });
  Object.keys(map).sort().forEach(function(id){
    console.log(id, '| belts:', map[id].belts.length, '| labels:', Object.keys(map[id].labels).join(' / '));
  });
  return map;
}

window.BELT_COLORS = BELT_COLORS;
window.BELTS = BELTS;
window.getStripeId = getStripeId;
window.stripeCatalog = stripeCatalog;
