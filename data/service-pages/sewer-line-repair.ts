import type { DeepServicePage } from '@/data/service-pages/types'

export const sewerLineRepairPage: DeepServicePage = {
  slug: 'sewer-line-repair',
  eyebrow: 'Camera first — then a repair you can see',
  h1: 'Sewer Line Repair in North Kansas City',
  lede:
    'Recurring backups, sewage odors, and basement floor-drain overflows are usually a line problem, not a plunger problem. CertPro locates the fault with a camera when the job calls for it, explains repair versus replacement in plain language, and does not sell a full dig because a clog was easier to pitch.',
  heroImage: {
    src: '/images/articles/article-sewer.jpg',
    alt: 'Sewer line inspection and repair conditions typical of North Kansas City metro laterals',
  },
  sections: [
    {
      id: 'symptoms',
      heading: 'Signs it is the sewer line, not just a clog',
      kind: 'bullets',
      intro:
        'A single slow sink is often a branch line. These patterns point at the building sewer—the pipe from the house to the city tap or septic tank:',
      items: [
        'More than one fixture backs up at once (toilet and tub, or basement drain and first-floor kitchen).',
        'Water comes up a basement floor drain when a washing machine or upstairs shower runs.',
        'Gurgling in a toilet when a sink drains, or sewage odor at a floor drain after rain.',
        'You have snaked the same line twice in a season and the backup returns in the same place.',
        'Sinkholes, unusually green strips, or soggy spots over the likely path of the lateral in the yard.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to do if sewage is in the house',
      kind: 'steps',
      intro:
        'Sewage is a health issue. Keep the mess from spreading until we get to Liberty, Gladstone, or North Kansas City.',
      items: [
        {
          title: 'Stop adding water',
          body:
            'Do not flush, run showers, or start the dishwasher or laundry. Every gallon has to go somewhere, and if the outlet is blocked it will come up the lowest drain—often a basement floor drain.',
        },
        {
          title: 'Keep people and pets off the wet area',
          body:
            'Close the door to a flooded bath. If a basement floor drain is discharging, stay off it. Do not use household fans as a “dry-out” plan while sewage is still active.',
        },
        {
          title: 'Skip chemical drain openers',
          body:
            'They will not weld a cracked clay joint or cut a root mass cleanly, and they leave a hazardous soup in the line for whoever opens it. Tell us if anything has already been poured.',
        },
        {
          title: 'Note what you already tried',
          body:
            'If another company snaked the line, if you have an existing cleanout, or if backups happen only after rain, say so. That changes whether we start with a cable, a camera, or both.',
        },
      ],
    },
    {
      id: 'camera',
      heading: 'We inspect before we recommend a trench',
      kind: 'prose',
      paragraphs: [
        'A cable can punch through a soft blockage and leave a broken pipe looking “fixed” for a week. When backups repeat, or when the symptoms look like a collapsed or offset joint, we run a camera so you can see the defect—roots at a clay bell, a belly holding water, a break under the driveway—not a story about what might be there.',
        'If the line is simply loaded and intact, the right job may be [drain cleaning](/services/drain-cleaning), not excavation. We will say that. If the camera shows a structural failure, we mark the location, talk through access (yard, slab, or street-side), and price the repair that actually matches the defect.',
        'Active sewage in finished space is also an [emergency plumbing](/services/emergency-plumbing) call. We stabilize first, then decide whether this is a clearable stoppage or a line that has to be opened.',
      ],
    },
    {
      id: 'basement-photo',
      heading: 'Basement drains and Liberty backups',
      kind: 'image',
      image: {
        src: '/images/articles/article-basement-drains.jpg',
        alt: 'Basement floor drain area where Liberty and Northland homes often show sewer backups',
      },
      caption:
        'When a washing machine or upstairs bath runs and a basement floor drain erupts, the building sewer is the suspect—not the basement sink trap.',
    },
    {
      id: 'neighborhoods',
      heading: 'How laterals fail in Gladstone, Liberty, and North Kansas City',
      kind: 'places',
      intro:
        'Clay County soils move. Trees look for water. Mid-century laterals were not designed for either. The failure mode still depends on the neighborhood.',
      places: [
        {
          name: 'Gladstone',
          body:
            'Gladstone ranches from the 1950s–1970s often still have clay laterals with bell-and-spigot joints. Mature street trees find those joints. The classic pattern is a winter or spring backup that “clears,” then returns in the same spot because the root mass was never removed at the joint. Camera work here is about proving whether a spot repair at that joint is enough or whether the remaining clay is already offset in three more places.',
        },
        {
          name: 'Liberty',
          body:
            'Older Liberty homes add basement plumbing after the fact—laundry, a bath, a floor drain tied into a line that was never sized for it. We also see backups after long wet spells when groundwater loads an aging lateral. The question is not “snake it again?” It is whether the line can still drain by gravity once the obstruction is gone, or whether a belly under the yard will keep filling.',
        },
        {
          name: 'North Kansas City',
          body:
            'North Kansas City’s mix of small lots, commercial taps, and homes nearer the river bottoms means access and groundwater both matter. A lateral under a parking pad is a different repair than one in an open side yard. We plan the opening so you are not surprised by concrete, and we confirm local permit needs before we cut the surface—not after the trench is open.',
        },
      ],
    },
    {
      id: 'repair-vs-replace',
      heading: 'Spot repair vs full sewer line replacement',
      kind: 'compare',
      intro:
        'Replacement is the right call when the camera shows systemic failure. It is the wrong call when one joint failed and the rest of the line is sound.',
      columns: ['Spot / sectional repair', 'Full line replacement'],
      rows: [
        {
          factor: 'What the camera shows',
          left: 'One offset, one root-invaded joint, or a short cracked run with good pipe on both sides.',
          right: 'Repeated offsets, collapsed clay, a long belly, or pipe that is out of round for most of the run.',
        },
        {
          factor: 'Yard and surface',
          left: 'We open only the marked location. Faster restoration of grass or a small concrete patch.',
          right: 'Larger excavation or a planned replacement path. We walk the route with you before we start.',
        },
        {
          factor: 'Cost logic',
          left: 'Lower if the rest of the line will last. Wasteful if the next joint fails next season.',
          right: 'Higher upfront; avoids stacking emergency clears on a line that is already finished.',
        },
        {
          factor: 'When we refuse a cheap clear',
          left: 'If we already know the pipe is broken, we will not pretend another snake is a repair.',
          right: 'If the line cannot be trusted, we will not sell a “temporary” patch as a permanent fix.',
        },
      ],
    },
    {
      id: 'after',
      heading: 'What you should have when we leave',
      kind: 'prose',
      paragraphs: [
        'You should know whether the line is clear, repaired, or scheduled for replacement—and why. If we cameraed the line, you should understand what we saw in the section that failed, not a vague “roots in the pipe.”',
        'If groundwater, a hidden leak, or a collapsed section is saturating the yard, we will say whether [leak detection](/services/leak-detection) or a different trade (waterproofing, restoration) needs to be in the conversation. Plumbing can stop the sewage. It cannot undo finished-basement damage that has already wicked into drywall.',
        'Permit and restoration scope are part of the price conversation before we open a street-facing yard in Clay County. No surprise invoices for “we had to cut more concrete.”',
      ],
    },
    {
      id: 'cta',
      heading: 'Recurring backup? Start with a diagnosis.',
      kind: 'cta',
      body:
        'Call (816) 454-0247 or book a visit. Tell us which fixtures are involved and whether a basement drain is in the mix. We will tell you if this looks like a cleanout job or a camera job before we show up.',
    },
  ],
  faqs: [
    {
      question: 'How do you tell a clog from a broken sewer line?',
      answer:
        'A one-fixture clog often lives in a branch. Multi-fixture backups, sewage at a floor drain, and backups that return after snaking point at the building sewer. A camera confirms whether the pipe is blocked, offset, or collapsed.',
    },
    {
      question: 'Do you camera-inspect before recommending sewer repair?',
      answer:
        'When symptoms suggest a structural problem or a repeat backup, yes. We do not open a yard on a guess. If the line is intact and only obstructed, we clean it and say so.',
    },
    {
      question: 'Can tree roots in Gladstone clay laterals be repaired without a full replacement?',
      answer:
        'Sometimes. If the camera shows a single invaded joint and the rest of the clay is aligned, a sectional repair can be enough. If joints are failing down the run, replacement is the honest option.',
    },
    {
      question: 'What should I do if sewage is coming up a basement floor drain?',
      answer:
        'Stop using water in the house, keep people off the area, and call. Do not add chemical openers. That pattern usually means the main cannot accept flow, and more water makes the basement worse.',
    },
    {
      question: 'Will you pull permits for sewer work in Clay County?',
      answer:
        'We confirm what the city or county requires for the specific opening—yard versus pavement—before we cut. Permit needs are part of the scope, not an after-the-fact add-on.',
    },
    {
      question: 'Can a sewer backup wait until morning?',
      answer:
        'If sewage is in living space, do not wait to contain it. If drains are only slow and no sewage is coming up, we can often schedule during Monday–Friday hours. We will help you sort that on the phone.',
    },
  ],
  related: [
    { href: '/services/drain-cleaning', label: 'Drain cleaning' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/services/leak-detection', label: 'Leak detection' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
