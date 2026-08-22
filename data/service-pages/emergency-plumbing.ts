import type { DeepServicePage } from '@/data/service-pages/types'

export const emergencyPlumbingPage: DeepServicePage = {
  slug: 'emergency-plumbing',
  eyebrow: 'Dispatch across Liberty, Gladstone, and North KC',
  h1: 'Emergency Plumbing in North Kansas City',
  lede:
    'If water is actively damaging a home in North Kansas City, Liberty, or Gladstone, call (816) 454-0247. A real person answers. We dispatch a licensed tech to shut the problem down, explain what failed, and give a clear price before repair work starts—not a 24/7 promise we cannot keep.',
  heroImage: {
    src: '/images/sections/why-choose-vehicle.jpg',
    alt: 'CertPro Plumbing service van staged for emergency dispatch in the North Kansas City metro',
  },
  sections: [
    {
      id: 'when-to-call',
      heading: 'When this is an emergency (and when it can wait)',
      kind: 'bullets',
      intro:
        'Call now if waiting overnight will cost more in damage than the service call. These are the Northland jobs we treat as dispatch-priority:',
      items: [
        'A supply line, fitting, or water heater is spraying or pooling and you cannot stop it at a valve.',
        'A ceiling, floor, or finished basement is getting wet and the stain is spreading.',
        'Sewage is coming up a tub, toilet, or basement floor drain—not a slow sink.',
        'No water to the whole house after a pipe failure, or you shut the house down and need it restored safely.',
        'A gas smell near a water heater or gas line. Leave the house, call the gas utility, then call us.',
      ],
    },
    {
      id: 'not-emergency',
      heading: 'What is urgent but not a night dispatch',
      kind: 'prose',
      paragraphs: [
        'A dripping faucet, a toilet that runs, or a single slow shower can usually wait for a same-day or next-day window during Monday–Friday business hours (7:00 AM–6:00 PM). We would rather tell you that honestly than sell a night call you do not need.',
        'If you are unsure, describe what you see. We will tell you whether to shut a valve and wait or whether we should roll. After-hours dispatch depends on technician availability—we do not advertise coverage we cannot staff.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to do before we arrive',
      kind: 'steps',
      intro:
        'These steps cut damage in the 20–40 minutes it often takes to reach Liberty, Gladstone, or North Kansas City from wherever the tech is already running.',
      items: [
        {
          title: 'Shut the water off at the right valve',
          body:
            'If a single fixture is spraying, close the stop under that sink or behind the toilet. If water is coming from a wall, ceiling, or water heater, use the house shutoff—usually at the meter pit, in the basement, or where the main enters. If you cannot find it, say so on the call and we will walk you to it.',
        },
        {
          title: 'Kill power near standing water',
          body:
            'If water is near a water heater, furnace, or outlet, shut that breaker off from a dry location. Do not wade in to unplug equipment. A wet electrical hazard is a bigger emergency than a wet carpet.',
        },
        {
          title: 'Move what you can and take two photos',
          body:
            'Lift furniture, rugs, and boxes off the wet path. Phone photos of the leak before you shut water off help us bring the right parts instead of guessing from the driveway.',
        },
        {
          title: 'Do not use chemical drain openers on a backup',
          body:
            'If toilets or floor drains are rising, stop using water in the house. Caustic cleaners will not fix a main-line problem and they make the job more dangerous for the tech who has to open the line.',
        },
      ],
    },
    {
      id: 'job-photo',
      heading: 'Who shows up',
      kind: 'image',
      image: {
        src: '/images/sections/why-choose-plumber.jpg',
        alt: 'CertPro plumber in the field diagnosing an active leak with tools on site',
      },
      caption:
        'Emergency calls are handled by a licensed plumber, not a salesperson who “books the lead” and leaves. Pricing is explained before repair work starts.',
    },
    {
      id: 'how-dispatch-works',
      heading: 'How emergency dispatch actually works',
      kind: 'prose',
      paragraphs: [
        'You call (816) 454-0247. We confirm the address, whether water is still moving, and whether anyone is in the home. If the failure is a [burst supply line or hidden leak](/services/leak-detection), we treat it as a stop-the-water job first. If sewage is involved, we switch to the [sewer line](/services/sewer-line-repair) playbook so we do not snake a broken pipe blindly.',
        'On arrival we isolate the failure, dry enough of the area to work safely, and show you what broke. You get a recommendation and a price before we cut, solder, or replace. If the right repair is a water heater swap, we say so and move you onto [water heater repair or replacement](/services/water-heater-repair) instead of patching a tank that will fail again this week.',
        'We serve the Kansas City metro as a service-area company—we come to you. There is no shop counter to visit. That is why the phone number and a clear address matter more than a map pin.',
      ],
    },
    {
      id: 'northland-winters',
      heading: 'Burst pipes and freeze failures in Clay County winters',
      kind: 'prose',
      paragraphs: [
        'Northland freeze events hit the same weak points every year: hose bibbs that were not shut down, supply lines in uninsulated garages, and crawl-space piping on the windward side of a ranch. When the thaw starts, a split in a copper or PEX line can dump a lot of water before anyone is home from work.',
        'If you come home to a wet basement after a cold snap, shut the main, open a faucet to relieve pressure, and call. We repair the failed section, check adjacent fittings that saw the same freeze, and tell you what to insulate before the next polar night—not a lecture, a punch list.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Liberty, Gladstone, and North Kansas City',
      kind: 'places',
      intro:
        'Same phone, same plumber, different housing stock. We do not copy-paste city names onto a generic paragraph.',
      places: [
        {
          name: 'North Kansas City',
          body:
            'North Kansas City mixes bungalows, small commercial spaces, and homes closer to the river bottoms. Emergency calls here are often a failed main shutoff, a water heater dumping into a utility closet, or a backup that hits a floor drain after a heavy rain. We plan access for tight alleys and occupied buildings so we are not blocking a loading dock while we work.',
        },
        {
          name: 'Liberty',
          body:
            'Around the Square and the older Liberty neighborhoods, we see galvanized remnants, basement laundry hookups, and floor drains that take on groundwater when the clay soils saturate. A “small” leak behind a plaster wall in a 1920s house can travel farther than it looks. We open only what we need and protect finished rooms while we find the source.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone’s post-war ranches hide a lot of original laterals and hose-bibb piping. Night calls are frequently a split in an exterior wall after a hard freeze, or a water heater in a cramped garage that has been leaking into the slab overnight. We bring pans, drain options, and replacement paths that fit a one-car garage—not a showroom install.',
        },
      ],
    },
    {
      id: 'repair-vs-wait',
      heading: 'Repair tonight vs stabilize and return',
      kind: 'compare',
      intro:
        'Not every emergency needs a full replacement at 10 p.m. We separate “stop the damage” from “finish the system.”',
      columns: ['Stabilize now', 'Complete the repair'],
      rows: [
        {
          factor: 'Active spraying leak',
          left: 'Shutoff, cap, or isolate the failed section so the house can have water to other fixtures.',
          right: 'Replace the failed pipe, valve, or connector once the area is dry enough to work to code.',
        },
        {
          factor: 'Water heater leaking at the tank',
          left: 'Kill power/gas, drain enough to move the unit if it is flooding the floor, contain the water.',
          right: 'Same-visit replacement when the tank is done; otherwise a scheduled [installation](/services/water-heater-installation) with the right size unit.',
        },
        {
          factor: 'Sewage in a fixture',
          left: 'Stop water use, protect the floor, check whether this is a clog or a broken line.',
          right: 'Clearing if the line is intact; camera and repair if it is not. See [sewer line repair](/services/sewer-line-repair).',
        },
        {
          factor: 'Parts not on the truck',
          left: 'Make the home safe and usable with a temporary isolation.',
          right: 'Return with the specified part instead of installing a guess that will leak again.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Need someone on the way?',
      kind: 'cta',
      body:
        'Call (816) 454-0247. Tell us the city, whether water is still moving, and if anyone is in the home. We will tell you the next step before we roll.',
    },
  ],
  faqs: [
    {
      question: 'What counts as a plumbing emergency in North Kansas City?',
      answer:
        'Active water you cannot stop, sewage coming up a drain, or a gas odor near plumbing equipment. A running toilet or slow sink is usually a same-day appointment, not a night dispatch.',
    },
    {
      question: 'Should I shut the water off before the plumber arrives?',
      answer:
        'Yes, if you can do it safely. Use the fixture stop for a single leak, or the house main for a wall, ceiling, or water-heater failure. If you cannot find the valve, stay on the line and we will help you locate it.',
    },
    {
      question: 'Do you charge extra for nights and weekends?',
      answer:
        'After-hours work is priced before we start the repair, not after. Business hours are Monday–Friday 7:00 AM–6:00 PM. Night dispatch depends on technician availability; we will say so on the call instead of implying 24/7 staffing.',
    },
    {
      question: 'Can you stop a burst pipe in a crawl space or basement?',
      answer:
        'Yes. We isolate the failed section, restore water to the rest of the house when we can, and repair the line. Crawl-space work after a freeze is common in Clay County ranches.',
    },
    {
      question: 'What if the emergency is sewage, not a supply leak?',
      answer:
        'Stop using water, keep people and pets off the wet area, and call. We diagnose whether it is a blockage or a broken sewer line before we recommend snaking, a camera inspection, or a repair.',
    },
    {
      question: 'Do you serve Liberty and Gladstone on the same emergency calls as North Kansas City?',
      answer:
        'Yes. Those are core Northland cities on our regular routes. Arrival time depends on traffic and where the tech is coming from, not on a city ranking.',
    },
  ],
  related: [
    { href: '/services/leak-detection', label: 'Leak detection' },
    { href: '/services/sewer-line-repair', label: 'Sewer line repair' },
    { href: '/services/water-heater-repair', label: 'Water heater repair' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
