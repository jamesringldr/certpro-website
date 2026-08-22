import type { DeepServicePage } from '@/data/service-pages/types'

export const backflowTestingPage: DeepServicePage = {
  slug: 'backflow-testing',
  eyebrow: 'Test, document, repair the device — not a paper mill',
  h1: 'Backflow Testing in North Kansas City',
  lede:
    'A backflow preventer exists so irrigation, a boiler, or a hose bibb cannot push contaminated water into the potable line. CertPro tests the device, records the result the water department expects, and repairs or replaces a failed assembly instead of handing you a fail with no next step. This is scheduled compliance work, not an [emergency leak](/services/emergency-plumbing)—unless the assembly itself is dumping water.',
  heroImage: {
    src: '/images/sections/why-choose-vehicle.jpg',
    alt: 'CertPro Plumbing vehicle used for scheduled backflow testing visits in the Northland',
  },
  sections: [
    {
      id: 'why-test',
      heading: 'Why the device gets tested at all',
      kind: 'bullets',
      intro: 'Backflow is not a clog. It is a pressure event that can pull the wrong water the wrong direction.',
      items: [
        'Irrigation systems sit below grade and can siphon if a main breaks or a pump kicks on.',
        'Boilers, fire lines, and commercial process water are cross-connections the city treats as a hazard.',
        'A hose left in a soap bucket is a residential version of the same problem.',
        'Many Northland water departments want a passing test on file on a schedule. A skipped year is a shutoff letter, not a suggestion.',
      ],
    },
    {
      id: 'before-arrival',
      heading: 'What to have ready for a test visit',
      kind: 'steps',
      items: [
        {
          title: 'Know where the assembly lives',
          body:
            'Meter pit, mechanical room, or an RPZ in a heated enclosure. A Liberty irrigation RPZ buried in mulch with no clearance is a longer appointment than one in a mechanical room we can stand in.',
        },
        {
          title: 'Have last year’s report if you have it',
          body:
            'Serial number, size, and make save a hunt. If you do not have it, we still test—we just spend a few minutes identifying the device.',
        },
        {
          title: 'Plan for a brief water interruption at the device',
          body:
            'We isolate the assembly to test it. Irrigation can wait. A North Kansas City café that needs domestic water during lunch should tell us so we schedule around service, not through the rush.',
        },
      ],
    },
    {
      id: 'how-we-test',
      heading: 'How a test visit actually runs',
      kind: 'prose',
      paragraphs: [
        'We inspect the assembly, perform the test, and write the result. If it passes, you get the documentation. If it fails, we tell you which check or relief failed and what it takes to rebuild or replace—not a vague “non-compliant.”',
        'A leaking relief on a reduced-pressure assembly is a failed device dumping potable water. That is a repair the same visit when parts match, or a scheduled replacement if the body is obsolete. We will not keep testing a dumping RPZ until the pit floods.',
        'We do not invent a tester number on this page. The report carries the identification your jurisdiction requires. If a city or water district has a specific form, we use that form rather than a generic PDF they will reject.',
      ],
    },
    {
      id: 'neighborhoods',
      heading: 'Irrigation pits, mechanical rooms, and city paperwork',
      kind: 'places',
      places: [
        {
          name: 'North Kansas City',
          body:
            'Small commercial kitchens and mixed-use buildings often have an RPZ in a cramped mechanical closet. We need access and a drain for relief discharge. A device that dumps into a finished floor is a placement problem we will flag, not ignore on a passing sticker.',
        },
        {
          name: 'Liberty',
          body:
            'Liberty residential irrigation assemblies sit at the property edge. Frozen above-ground RPZs after a polar night are a spring fail, not a mystery. We test when the system is charged, and we talk insulation or a heated box if last winter split the body.',
        },
        {
          name: 'Gladstone',
          body:
            'Gladstone lots with lawn irrigation and a separate domestic meter still need the lawn device tested on the city’s schedule. We will not test the house meter and call it done. Bring the letter if Gladstone mailed one so we test the assembly they named.',
        },
      ],
    },
    {
      id: 'pass-vs-repair',
      heading: 'Pass the test vs rebuild the assembly',
      kind: 'compare',
      columns: ['Test and document', 'Repair or replace the device'],
      rows: [
        {
          factor: 'Clean pass',
          left: 'Report filed. You are done until the next cycle.',
          right: 'Not needed.',
        },
        {
          factor: 'Failed check or relief',
          left: 'The report is a fail until the assembly is corrected.',
          right: 'Rebuild kits when the body is sound; replacement when it is not.',
        },
        {
          factor: 'Device dumping water',
          left: 'Do not keep “testing” it.',
          right: 'Isolate, repair, retest. Treat a flooded pit as an active leak.',
        },
      ],
    },
    {
      id: 'cta',
      heading: 'Letter from the water department, or a device that will not stop dripping?',
      kind: 'cta',
      body: 'Call (816) 454-0247 with the city and a photo of the assembly. We will schedule the test around your water use, not through it.',
    },
  ],
  faqs: [
    {
      question: 'Is backflow testing required every year in North Kansas City?',
      answer:
        'The water department or city sets the interval, and it is often annual for irrigation and commercial assemblies. We test to that schedule and use the form they accept. If you have the letter, send a photo of it with the appointment request.',
    },
    {
      question: 'What happens if the assembly fails?',
      answer:
        'You get a fail result and a repair path: rebuild or replace, then a retest. A fail without a next step does not get you back in compliance.',
    },
    {
      question: 'Can you test in winter?',
      answer:
        'If the device is in a heated space and charged, yes. An outdoor irrigation RPZ that is winterized has to wait until the system is on. Frozen tests are not valid tests.',
    },
    {
      question: 'Do you test residential hose-bibb vacuum breakers?',
      answer:
        'A simple hose-bibb breaker is not the same as a testable RPZ. If your letter names a testable assembly, that is the device we test. Outdoor faucets that failed after a freeze are usually a [fixture](/services/fixture-installation) or [pipe](/services/pipe-repair-repiping) repair.',
    },
    {
      question: 'Will you file the report with the City of Liberty or Gladstone?',
      answer:
        'We provide the documentation the jurisdiction expects. Some cities want the tester to submit; some want the property owner to. We tell you which it is for that assembly before we leave.',
    },
  ],
  related: [
    { href: '/services/commercial-plumbing', label: 'Commercial plumbing' },
    { href: '/services/pipe-repair-repiping', label: 'Pipe repair' },
    { href: '/services/fixture-installation', label: 'Fixture installation' },
    { href: '/contact', label: 'Contact and hours' },
  ],
}
