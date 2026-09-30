// Central content for the EXE Engineering site. Edit copy here rather than in components.

export const company = {
  name: 'EXE Engineering',
  tagline: 'Engineering that gets built.',
  domain: 'exeengineering.com',
  url: 'https://exeengineering.com',
  email: 'info@exeengineering.com',
}

// Image file names in /public/img, served through the Netlify Image CDN.
export function img(file: string, width: number) {
  return `/.netlify/images?url=/img/${file}&w=${width}&fm=webp`
}

// Primary focus: Facility Management System (FMS) automation.
export const fms = {
  title: 'Facility Management System',
  headline: 'Buildings that monitor, predict and optimise themselves.',
  text: 'Facility Management System (FMS) automation transforms buildings from static structures requiring manual oversight into dynamic, self-regulating environments. By integrating Building Management Systems (BMS), Computerized Maintenance Management Systems (CMMS), and IoT sensors, automation allows a facility to monitor itself, predict equipment failures, and optimize resource consumption in real time.',
  integrations: [
    { code: 'BMS', name: 'Building Management Systems' },
    { code: 'CMMS', name: 'Computerized Maintenance Management Systems' },
    { code: 'IoT', name: 'IoT sensors' },
  ],
  outcomes: [
    { name: 'Monitor itself', text: 'Live visibility of every system, space and asset across the facility.' },
    { name: 'Predict failures', text: 'Spot equipment faults early and schedule maintenance before they cause downtime.' },
    { name: 'Optimise resources', text: 'Tune energy, water and plant use in real time to cut cost and carbon.' },
  ],
  scalability:
    'Scalable at any moment: together with our partner, we can scale our team and capacity up as your project demands, without compromising quality or programme.',
}

export type Discipline = {
  code: string
  name: string
  summary: string
  scope: string[]
}

export const disciplines: Discipline[] = [
  {
    code: 'EL',
    name: 'Electrical',
    summary:
      'HV/MV/LV power distribution, standby generation, UPS, lighting, earthing and lightning protection.',
    scope: ['Power system studies', 'Substations & switchgear', 'Lighting design', 'Critical power'],
  },
  {
    code: 'ME',
    name: 'Mechanical',
    summary:
      'Plant and building services engineered for reliability, efficiency and ease of maintenance.',
    scope: ['Plant rooms', 'Fire protection', 'Public health', 'Vertical transportation'],
  },
  {
    code: 'HV',
    name: 'HVAC',
    summary:
      'Heating, ventilation and air conditioning from comfort cooling to cleanroom and data hall environments.',
    scope: ['Load & CFD analysis', 'Chilled water systems', 'Cleanroom HVAC', 'Smoke control'],
  },
  {
    code: 'PP',
    name: 'Piping',
    summary:
      'Process and utility piping design, stress analysis and specification for complex facilities.',
    scope: ['Process & clean utilities', 'Pipe stress analysis', 'P&IDs', 'Material specifications'],
  },
  {
    code: 'AU',
    name: 'Automation',
    summary:
      'Controls and automation that keep systems visible, efficient and safe throughout operation.',
    scope: ['BMS / EPMS', 'PLC & SCADA', 'Integration & commissioning', 'GMP validation support'],
  },
  {
    code: 'AR',
    name: 'Architecture',
    summary:
      'Coordinated architectural design that integrates structure, services and the end-user experience.',
    scope: ['Concept & masterplanning', 'Detailed design', 'BIM coordination', 'Planning support'],
  },
]

export type Sector = {
  id: string
  name: string
  image: string
  headline: string
  description: string
  highlights: string[]
}

export const sectors: Sector[] = [
  {
    id: 'rail',
    name: 'Railway & Metro',
    image: 'rail.png',
    headline: 'Systems that keep cities moving',
    description:
      'Stations, depots and line-wide systems for railway and metro networks — traction power, tunnel ventilation, station MEP and integrated control.',
    highlights: ['Traction & auxiliary power', 'Tunnel ventilation', 'Station building services', 'SCADA integration'],
  },
  {
    id: 'airport',
    name: 'Airports',
    image: 'airport.png',
    headline: 'Terminals designed for 24/7 operation',
    description:
      'Terminal buildings, airside facilities and supporting infrastructure where resilience, passenger comfort and phased delivery matter.',
    highlights: ['Terminal MEP', 'Airfield lighting power', 'Baggage system services', 'Live-airport phasing'],
  },
  {
    id: 'datacenter',
    name: 'Data Centers',
    image: 'datacenter.png',
    headline: 'Critical environments, zero compromise',
    description:
      'Hyperscale, colocation and enterprise data centers engineered for uptime, density and energy efficiency — from concept to integrated systems testing.',
    highlights: ['Tier III / IV topologies', 'Critical power & cooling', 'PUE optimisation', 'IST & commissioning'],
  },
  {
    id: 'pharma',
    name: 'Life Science & Pharma',
    image: 'pharma.png',
    headline: 'Compliant facilities, precise control',
    description:
      'GMP manufacturing, laboratories and cleanrooms with clean utilities, process piping and validated automation.',
    highlights: ['Cleanroom HVAC', 'Clean & black utilities', 'Process piping', 'GMP / GAMP compliance'],
  },
  {
    id: 'retail',
    name: 'Retail',
    image: 'retail.png',
    headline: 'Spaces that perform for tenants and visitors',
    description:
      'Shopping centres, flagship stores and roll-out programmes delivered on tight programmes with consistent standards.',
    highlights: ['Shell & core services', 'Tenant fit-out', 'Roll-out programmes', 'Energy retrofits'],
  },
]

export type Project = {
  name: string
  sector: string
}

// Completed and ongoing projects.
export const projects: Project[] = [
  { name: 'Nike Leuven', sector: 'Retail' },
  { name: 'Nike Eindhoven', sector: 'Retail' },
  { name: 'Nike The Hague', sector: 'Retail' },
  { name: 'AM13 Data Centre', sector: 'Data Centers' },
  { name: 'AM14 Data Centre', sector: 'Data Centers' },
  { name: 'Nike Leipzig', sector: 'Retail' },
]

export const lifecycle = [
  {
    step: '01',
    name: 'Concept & Feasibility',
    text: 'Options studies, cost-driven strategies and early coordination to set the project on the right path.',
  },
  {
    step: '02',
    name: 'Design',
    text: 'Scheme, detailed and IFC design with full BIM coordination across every discipline.',
  },
  {
    step: '03',
    name: 'Procurement',
    text: 'Specifications, tender packages, bid evaluation and vendor technical reviews.',
  },
  {
    step: '04',
    name: 'Construction',
    text: 'Site supervision, technical queries, submittal review and quality assurance on site.',
  },
  {
    step: '05',
    name: 'Project Management',
    text: 'Programme, cost, risk and interface management from mobilisation to close-out.',
  },
  {
    step: '06',
    name: 'Commissioning & Handover',
    text: 'Testing, commissioning, integrated systems tests and documentation for a smooth handover.',
  },
]

export const stats = [
  { value: '6', label: 'Engineering disciplines' },
  { value: '5', label: 'Core sectors' },
  { value: '360°', label: 'Project lifecycle coverage' },
  { value: '1', label: 'Integrated team' },
]
