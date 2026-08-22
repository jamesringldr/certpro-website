import type { DeepServicePage } from '@/data/service-pages/types'

export const waterHeaterRepairPage: DeepServicePage = {
  slug: 'water-heater-repair',
  eyebrow: 'Tank and tankless — repair when it pays, replace when it does not',
  h1: 'Water Heater Repair in North Kansas City',
  lede:
    'No hot water, lukewarm showers, or a tank sweating onto a Gladstone garage floor are diagnosis jobs, not guesswork. CertPro services conventional tanks and tankless units, tells you whether a part or a replacement is the better spend, and does not leave you with a “temporary” element in a tank that is already rusting through.',
  heroImage: {
    src: '/images/sections/why-choose-plumber.jpg',
    alt: 'CertPro plumber diagnosing a residential water heater during a North Kansas City service call',
  },
  sections: [
    {
      id: 'symptoms',
      heading: 'Why hot water fails in Northland homes',
      kind: 'bullets',
      intro:
        'Kansas City metro water is hard. Sediment, anode wear, and scale show up differently on a tank in a Liberty basement than on a tankless unit in a North Kansas City utility closet:',
      items: [
        'No hot water at all — often a tripped breaker, failed element, bad gas control, or a tankless lockout.',
        'Hot water that runs out in a few minutes — sediment taking up tank volume, or a unit undersized for the house.',
        'Rumbling, popping, or a rotten-egg smell at the tap — sediment on the burner side, or anode/bacteria issues in the tank.',
        'Water on the floor around the heater — pressure relief, drain valve, inlet/outlet fittings, or a tank that has started to leak at the steel.',
        'Pilot that will not stay lit, or a tankless unit that fires then shuts down — venting, gas supply, or a scale-related sensor fault.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to check before we arrive',
      kind: 'steps',
      intro:
        'These steps take five minutes and often tell us whether to bring an element, a control valve, or a replacement tank.',
      items: [
        {
          title: 'Look at the floor, then the valves',
          body:
            'If water is spreading, shut the cold-water inlet on top of the heater and turn off power at the breaker (electric) or the gas valve (gas). A leaking tank is an [emergency plumbing](/services/emergency-plumbing) situation if it is flooding finished space. A slow drip at a drain valve is not.',
        },
        {
          title: 'Reset only what you can reach dry',
          body:
            'Electric tanks sometimes trip a high-limit reset on the upper thermostat. Press it only if the area is dry and the cover is designed to come off with a screwdriver. If you smell gas, leave the reset alone, get out, and call the gas utility first.',
        },
        {
          title: 'Note the age and fuel',
          body:
            'The rating plate is usually on the side of the tank or the front of a tankless unit. Year, gallon size (or GPM), and gas vs electric change the repair-versus-replace math. A photo of that plate in a text or on the booking form saves a second trip.',
        },
        {
          title: 'Do not keep running a tankless that is error-looping',
          body:
            'If the unit is throwing the same code after a reset, stop cycling it. Scale-related lockouts get worse when the heat exchanger keeps cooking mineral, especially on Northland hard water.',
        },
      ],
    },
    {
      id: 'tank-vs-tankless',
      heading: 'How we diagnose tanks vs tankless',
      kind: 'prose',
      paragraphs: [
        'On a tank we test elements or gas controls, look at the anode and sediment, and check the T&P valve and drain. A failed element on an eight-year-old tank in good shape is a repair. A failed element on a twelve-year-old tank with rusty water in the drain bucket is a replacement conversation.',
        'On tankless, we read the code, check inlet screens, gas pressure, and venting, and we talk honestly about descaling. Kansas City-area hardness is hard on heat exchangers that have never been flushed. A flush and a sensor can be a repair. A cracked heat exchanger is not.',
        'If the leak is on the supply piping and not the vessel, that may be [pipe repair](/services/pipe-repair-repiping) at the heater connections—not a new appliance. We will show you which one it is before we roll a tank out of a closet.',
      ],
    },
    {
      id: 'van-photo',
      heading: 'Replacement is a planned install, not a surprise upsell',
      kind: 'image',
      image: {
        src: '/images/sections/why-choose-vehicle.jpg',
        alt: 'CertPro service vehicle used for water heater repair and replacement calls in the Northland',
      },
      caption:
        'When a tank is done, we size the replacement to the house and handle haul-away. Same-visit swaps happen when the unit is in stock and the location is ready—pan, drain, and clearances included.',
    },
    {
      id: 'repair-vs-replace',
      heading: 'Repair vs replace',
      kind: 'compare',
      intro:
        'We use age, leak location, and remaining life—not a script. If replacement is the better spend, the path is a proper [water heater installation](/services/water-heater-installation), not a patched tank.',
      columns: ['Repair the unit', 'Replace the unit'],
      rows: [
        {
          factor: 'Age and condition',
          left: 'Under ~10 years, no tank leak, anode still working, cabinet dry.',
          right: 'Tank rust at the base, water in the insulation, or a unit past typical service life with a second failing part.',
        },
        {
          factor: 'The actual failure',
          left: 'Element, thermostat, gas control, anode, T&P valve, or a tankless flush/sensor.',
          right: 'Leak in the steel tank, failed tankless heat exchanger, or a unit that cannot meet the house load even when working.',
        },
        {
          factor: 'Hard-water wear',
          left: 'Flush and maintain if the exchanger or tank is intact.',
          right: 'Repeat scale failures on a neglected tankless, or a tank so packed with sediment that recovery is gone.',
        },
        {
          factor: 'Location constraints',
          left: 'Repair in place when clearances and venting already meet code.',
          right: 'Replacement may need a pan, drain, expansion tank, or vent correction that the old install skipped.',
        },
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Install conditions in Liberty, Gladstone, and North Kansas City',
      kind: 'places',
      intro:
        'The heater is the same appliance. The closet, garage, and drain path are not. That is where Northland jobs go wrong when someone “just swaps the tank.”',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Utility closets in North Kansas City homes and small commercial spaces are often undersized for a taller replacement tank. We measure height, flue, and drain before we promise a same-day swap. If the old unit sat on the floor with no pan, a leaking replacement will hit the same finished floor—so we talk pan and drain as part of the job, not an upgrade package.',
        },
        {
          name: 'Liberty',
          body:
            'Liberty basements give us room to work but also old galvanized nipples, aging gas flex, and vents that were “good enough” for a 40-gallon unit from 1998. We check combustion air and vent pitch when we repair a gas tank. A new control valve on a poorly vented heater is not a complete job.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone garages are a common water-heater home. Freeze risk on the T&P discharge, a tank sitting on an unlevel slab, and no floor drain are the usual constraints. If we replace, we set the unit so a future leak does not run under the garage door into the driveway overnight—the call we would rather not get again.',
        },
      ],
    },
    {
      id: 'same-day',
      heading: 'Same-visit replacement vs a scheduled install',
      kind: 'prose',
      paragraphs: [
        'If the tank is leaking and a matching unit is available, we can often complete replacement the same visit: drain, disconnect, set, fill, fire, and haul the old tank. If the location needs a pan, a drain, an expansion tank, or a vent change, we stabilize (water off, mess contained) and schedule the finish rather than force a code-short install.',
        'You will know the plan before we start pulling the old unit. That includes whether we recommend tank or tankless, and whether the house’s gas line and venting can support a tankless upgrade at all. We do not treat tankless as a default upsell.',
      ],
    },
    {
      id: 'cta',
      heading: 'No hot water, or water on the floor?',
      kind: 'cta',
      body:
        'Call (816) 454-0247. Tell us gas or electric, whether the floor is wet, and the city. We will tell you if this is a repair call, a replacement, or a shut-it-down-until-we-arrive situation.',
    },
  ],
  faqs: [
    {
      question: 'Why is there no hot water if the tank still feels warm?',
      answer:
        'A warm tank with cold fixtures often means a failed upper element, a stuck mixing issue, or a tankless unit that is not carrying. Warm metal is not proof the system is delivering hot water to the taps. We test from the heater outward.',
    },
    {
      question: 'Do you repair tankless water heaters in North Kansas City?',
      answer:
        'Yes. We read error codes, check scale, gas, and venting, and flush when that is the honest fix. If the heat exchanger has failed, we talk replacement instead of stacking service calls.',
    },
    {
      question: 'When is it cheaper to replace a water heater than repair it?',
      answer:
        'When the steel tank is leaking, when a second major part is failing on an old unit, or when a tankless exchanger is done. A single element or control on a sound, younger tank is usually a repair.',
    },
    {
      question: 'Is a leaking water heater always an emergency?',
      answer:
        'A tank leaking at the steel, or any leak reaching finished floors, should be shut down and called in. A slow drip at a drain valve can often wait for a weekday window. We will sort that on the phone.',
    },
    {
      question: 'How long does a replacement take once you arrive?',
      answer:
        'A straightforward like-for-like tank swap is often a few hours including drain, set, fill, and haul-away. Closet, vent, or drain corrections add time. We estimate after we see the location, not from the driveway.',
    },
    {
      question: 'Do you haul away the old water heater?',
      answer:
        'Yes, old unit removal is part of a replacement. You should not be left with a wet tank on the curb unless a city rule requires a different disposal path, which we will explain if it applies.',
    },
  ],
  related: [
    { href: '/services/water-heater-installation', label: 'Water heater installation' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/services/leak-detection', label: 'Leak detection' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
