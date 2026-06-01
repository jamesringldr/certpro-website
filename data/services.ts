export type Service = {
  slug: string
  name: string
  shortDescription: string
  problem: string
  solution: string
  responseTime: string
  faqs: Array<{ question: string; answer: string }>
}

export const SERVICE_AREAS = [
  'Liberty',
  'Gladstone',
  'Parkville',
  'Smithville',
  'Platte City',
  'Kearney',
  'Riverside',
  'North Kansas City',
]

export const SERVICES: Service[] = [
  {
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    shortDescription: 'Fast rapid response for burst pipes, major leaks, and active water damage.',
    problem: 'Water is actively damaging your home and every minute increases repair costs.',
    solution: 'We dispatch an emergency tech, isolate the issue fast, and stabilize your plumbing immediately.',
    responseTime: 'Fast rapid response and dispatch across the North KC metro.',
    faqs: [
      { question: 'Do you charge extra at night?', answer: 'We provide transparent pricing before work begins.' },
      { question: 'How fast can someone arrive?', answer: 'Most calls are serviced as quickly as route conditions allow.' },
    ],
  },
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortDescription: 'Clear stubborn sink, tub, shower, and main line clogs without guesswork.',
    problem: 'Slow drains and backups interrupt routines and can become full blockages.',
    solution: 'We diagnose the cause and clear it using the right tools for the specific line.',
    responseTime: 'Same-day appointments available.',
    faqs: [
      { question: 'Can you clean main sewer lines?', answer: 'Yes, we handle branch lines and main line stoppages.' },
      { question: 'Do chemical cleaners help?', answer: 'Frequent chemical use can damage pipes; professional cleaning is safer.' },
    ],
  },
  {
    slug: 'sewer-line-repair',
    name: 'Sewer Line Repair',
    shortDescription: 'Targeted sewer line diagnostics and repairs for recurring backups and odors.',
    problem: 'Recurring sewage backups indicate deeper line issues that basic clearing cannot fix.',
    solution: 'We locate the fault, explain options clearly, and complete durable repairs.',
    responseTime: 'Priority scheduling for active sewer issues.',
    faqs: [
      { question: 'Do you inspect before repairing?', answer: 'Yes, we verify the issue before recommending repairs.' },
      { question: 'Can tree roots cause backups?', answer: 'Yes, root intrusion is a common source of sewer problems.' },
    ],
  },
  {
    slug: 'water-heater-repair',
    name: 'Water Heater Repair',
    shortDescription: 'Restore reliable hot water for tank and tankless systems.',
    problem: 'No hot water or unstable temperature disrupts bathing, laundry, and kitchen use.',
    solution: 'We diagnose heater performance issues and repair or replace failed components.',
    responseTime: 'Fast scheduling for no-hot-water calls.',
    faqs: [
      { question: 'Do you service tankless units?', answer: 'Yes, we service both traditional and tankless systems.' },
      { question: 'Should I repair or replace?', answer: 'We recommend the best value based on age, condition, and cost.' },
    ],
  },
  {
    slug: 'water-heater-installation',
    name: 'Water Heater Installation',
    shortDescription: 'Professional sizing and installation for efficient, dependable hot water.',
    problem: 'An undersized or aging system drives utility costs and reduces comfort.',
    solution: 'We match your home usage to the right unit and install to code.',
    responseTime: 'Flexible scheduling with upfront planning.',
    faqs: [
      { question: 'Can you upgrade capacity?', answer: 'Yes, we can size for higher household demand.' },
      { question: 'Do you remove old units?', answer: 'Yes, old unit removal is included with replacement installs.' },
    ],
  },
  {
    slug: 'leak-detection',
    name: 'Leak Detection',
    shortDescription: 'Find hidden leaks quickly to prevent structural and mold-related damage.',
    problem: 'Unseen leaks increase your water bill and quietly damage walls, floors, and foundations.',
    solution: 'We pinpoint leak locations and provide the most direct repair path.',
    responseTime: 'Prompt scheduling for active leak concerns.',
    faqs: [
      { question: 'Can you find slab leaks?', answer: 'Yes, we can diagnose hidden supply and drain leaks.' },
      { question: 'What are common leak signs?', answer: 'High water bills, wet spots, and low pressure are common indicators.' },
    ],
  },
  {
    slug: 'pipe-repair-repiping',
    name: 'Pipe Repair & Repiping',
    shortDescription: 'Repair damaged lines or repipe aging systems for long-term reliability.',
    problem: 'Frequent leaks and low pressure indicate pipe deterioration.',
    solution: 'We repair localized failures or plan phased repiping when systems are at end of life.',
    responseTime: 'Project-based scheduling with clear scope.',
    faqs: [
      { question: 'Do you offer partial repipes?', answer: 'Yes, we can phase projects by priority areas.' },
      { question: 'Will you explain material options?', answer: 'Yes, we walk through tradeoffs before work starts.' },
    ],
  },
  {
    slug: 'fixture-installation',
    name: 'Fixture Installation',
    shortDescription: 'Install sinks, faucets, toilets, and shower fixtures with clean finishes.',
    problem: 'Improper fixture installs can leak, wobble, or fail early.',
    solution: 'We install fixtures correctly and verify performance before wrap-up.',
    responseTime: 'Convenient appointment windows.',
    faqs: [
      { question: 'Can you install customer-supplied fixtures?', answer: 'Yes, we install most homeowner-provided fixtures.' },
      { question: 'Do you replace shutoff valves too?', answer: 'Yes, we can replace failing valves during installation.' },
    ],
  },
  {
    slug: 'toilet-repair',
    name: 'Toilet Repair',
    shortDescription: 'Fix running, leaking, clogged, or non-flushing toilets quickly.',
    problem: 'Toilet issues waste water and make bathrooms unusable.',
    solution: 'We diagnose the failure and complete dependable repairs or replacement.',
    responseTime: 'Same-day service for most calls.',
    faqs: [
      { question: 'Can a constantly running toilet raise bills?', answer: 'Yes, it can waste significant water daily.' },
      { question: 'Do you replace wax rings and flanges?', answer: 'Yes, we address the root cause, not just symptoms.' },
    ],
  },
  {
    slug: 'garbage-disposal-service',
    name: 'Garbage Disposal Service',
    shortDescription: 'Repair or replace jammed, noisy, or leaking disposals.',
    problem: 'A failing disposal can cause sink backups and unpleasant odors.',
    solution: 'We repair when cost-effective or replace with a properly sized unit.',
    responseTime: 'Quick diagnostic appointments.',
    faqs: [
      { question: 'Can you replace old disposals same visit?', answer: 'Often yes, depending on model availability.' },
      { question: 'What should never go in a disposal?', answer: 'Grease, fibrous foods, and hard debris should be avoided.' },
    ],
  },
  {
    slug: 'backflow-testing',
    name: 'Backflow Testing',
    shortDescription: 'Protect potable water with certified testing and prevention support.',
    problem: 'Backflow risks can compromise clean water and violate local requirements.',
    solution: 'We test, document results, and service prevention devices when needed.',
    responseTime: 'Scheduled compliance appointments.',
    faqs: [
      { question: 'Is testing required annually?', answer: 'Requirements vary by jurisdiction; we help confirm local standards.' },
      { question: 'Do you provide records?', answer: 'Yes, we provide documentation after service.' },
    ],
  },
  {
    slug: 'commercial-plumbing',
    name: 'Commercial Plumbing',
    shortDescription: 'Responsive plumbing support for offices, retail, and multi-unit properties.',
    problem: 'Business downtime from plumbing issues impacts revenue and tenant satisfaction.',
    solution: 'We provide reliable repairs and proactive maintenance to reduce interruptions.',
    responseTime: 'Priority response for active business-impacting issues.',
    faqs: [
      { question: 'Do you support maintenance contracts?', answer: 'Yes, recurring service plans are available.' },
      { question: 'Can work be scheduled off-hours?', answer: 'Yes, we can coordinate around operating schedules.' },
    ],
  },
]

export const getServiceBySlug = (slug: string) => SERVICES.find((service) => service.slug === slug)
