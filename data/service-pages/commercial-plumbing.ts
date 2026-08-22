import type { DeepServicePage } from '@/data/service-pages/types'

export const commercialPlumbingPage: DeepServicePage = {
  slug: 'commercial-plumbing',
  eyebrow: 'Occupied buildings — work around the clock you actually keep',
  h1: 'Commercial Plumbing in North Kansas City',
  lede:
    'A restroom down at lunch, a water heater dumping in a tenant closet, or a grease line that backs a prep sink is downtime, not a weekend project. CertPro serves offices, retail, and small multi-unit buildings in the Northland with the same honest hours we publish for homes: Monday–Friday 7 AM–6 PM, with after-hours dispatch by availability—not a fake 24/7 promise. Tenant-side fixtures still use the same trade skills as [fixture installation](/services/fixture-installation); the difference is access, shutoff timing, and who gets the invoice.',
  heroImage: {
    src: '/images/sections/why-choose-vehicle.jpg',
    alt: 'CertPro service vehicle staged for commercial plumbing calls in North Kansas City',
  },
  sections: [
    {
      id: 'what-we-cover',
      heading: 'What commercial means on this truck',
      kind: 'bullets',
      items: [
        'Restrooms: running tanks, failed flushometers, blocked stalls, and supply stops that will not shut off.',
        'Break rooms and small kitchens: disposals, prep sinks, and the branch that actually backs up—not a guessing snake.',
        'Water heaters serving a suite or a small building: repair first when the tank is sound; [installation](/services/water-heater-installation) when it is not.',
        'Backflow assemblies on irrigation or process water: [testing and device repair](/services/backflow-testing), documented.',
        'Not a new ground-up plumbing package for a 40,000-square-foot spec building. If the job is a full commercial rough, we will say it is outside this page.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What the site needs to give us before we roll',
      kind: 'steps',
      items: [
        {
          title: 'A site contact who can unlock and authorize a shutoff',
          body:
            'A locked mechanical room in a Liberty strip center wastes the appointment. Name one person who can say yes to isolating a restroom or a water heater.',
        },
        {
          title: 'When the building cannot lose water',
          body:
            'Tell us the rush: lunch service, school pickup, clinic hours. We schedule the isolation around that window during posted hours, or we discuss after-hours if someone is actually available to dispatch.',
        },
        {
          title: 'Stop using a backed-up floor drain as a “temporary” dump',
          body:
            'A Gladstone restaurant floor drain that is already rising is a health issue. Close the restroom or the prep line, not a mop into the same drain.',
        },
      ],
    },
    {
      id: 'how-we-work',
      heading: 'How we work in an occupied building',
      kind: 'prose',
      paragraphs: [
        'We isolate the smallest zone we can: one restroom, one suite, one heater. We do not shut a whole strip center to replace a fill valve. If the only isolation is a buried valve nobody has turned in a decade, that becomes part of the scope—and we tell you before we force it.',
        'Grease and wipes in commercial drains are not a mystery. We clear what is a clog, and we camera or open when the same stall backs up twice. Recurring work is scheduled case by case. We do not sell a named “maintenance contract” on this page; if you want a repeating restroom or water-heater check, we put it on the calendar in writing.',
        'Invoices go to the person who authorized the work. Tenant vs landlord is your split. We will not start a ceiling opening in a leased suite without that authorization in hand.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Northland commercial stock, not a generic “businesses we serve” list',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Armour Road and the industrial pockets mix small manufacturers with storefronts. Access is alleys, shared meters, and heaters in closets that were never sized for a replacement tank. We measure the closet and the flue the same way we do in a bungalow—because a leaking commercial heater still ruins a finished floor.',
        },
        {
          name: 'Liberty',
          body:
            'Liberty’s downtown and highway retail have restrooms that see Saturday traffic and Monday silence. A flushometer that fails Friday night can often wait for Saturday morning if the second restroom works. We will say so. A sewage backup cannot wait; that is the same [sewer](/services/sewer-line-repair) rule as a house.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone offices and clinics need quiet isolation. We can often replace a failed restroom fixture without taking the waiting room offline if the stops hold. If they do not, we replace the stops as part of the visit rather than leaving a building with no local shutoff.',
        },
      ],
    },
    {
      id: 'hours-vs-after',
      heading: 'Posted hours vs after-hours commercial dispatch',
      kind: 'compare',
      columns: ['During posted hours', 'After-hours by availability'],
      rows: [
        {
          factor: 'Restroom fixture, heater, or a slow drain',
          left: 'Scheduled around your rush. This is the default.',
          right: 'Only if the building cannot wait and a tech is actually available.',
        },
        {
          factor: 'Active leak or sewage in a public floor',
          left: 'We treat it as urgent inside the day.',
          right: 'Same stabilize-first approach as [emergency plumbing](/services/emergency-plumbing). No 24/7 guarantee.',
        },
        {
          factor: 'Planned remodel fixtures',
          left: 'Booked like any other install, with a site contact.',
          right: 'Not an after-hours job unless you have a reason and we agree in advance.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Restroom down, heater leaking, or a letter on a backflow device?',
      kind: 'cta',
      body: 'Call (816) 454-0247. Give us the city, the suite, and when you cannot lose water. We will say whether this is a same-day posted-hours visit or an after-hours ask.',
    },
  ],
  faqs: [
    {
      question: 'Do you work on commercial buildings after 6 PM?',
      answer:
        'When a tech is available and the failure cannot wait. Posted hours are Monday–Friday 7 AM–6 PM. After-hours is dispatch by availability, the same policy as residential emergency calls—not a standing night crew.',
    },
    {
      question: 'Can you service only one suite in a multi-tenant building?',
      answer:
        'Yes, if we can isolate that suite. If the leak is in a shared ceiling or a shared water heater, the property contact has to authorize the shared work.',
    },
    {
      question: 'Do you offer a commercial maintenance contract?',
      answer:
        'We schedule repeating visits when you want them, in writing. We do not advertise a packaged contract on this site. Ask for a calendar hold if you have restrooms or heaters that fail on a pattern.',
    },
    {
      question: 'Can you work around lunch service in a North Kansas City restaurant?',
      answer:
        'Yes. Tell us the rush window. We isolate prep sinks or restrooms outside that window when the failure allows. A sewage backup does not wait for the lunch rush to end.',
    },
    {
      question: 'Is a Gladstone office water heater the same as a house tank?',
      answer:
        'The tank can be the same product. The closet, the pan drain, and who loses hot water are not. We measure and isolate the suite before we promise a same-visit swap.',
    },
  ],
  related: [
    { href: '/services/backflow-testing', label: 'Backflow testing' },
    { href: '/services/emergency-plumbing', label: 'Emergency plumbing' },
    { href: '/services/drain-cleaning', label: 'Drain cleaning' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
