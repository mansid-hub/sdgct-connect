import t1 from "@/assets/trustee-1.jpg";
import t2 from "@/assets/trustee-2.jpg";
import t3 from "@/assets/trustee-3.jpg";
import t4 from "@/assets/trustee-4.jpg";
import t5 from "@/assets/trustee-5.jpg";
import t6 from "@/assets/trustee-6.jpg";

export interface Trustee {
  slug: string;
  name: string;
  designation: string;
  summary: string;
  image: string;
  biography: string[];
  contributions: string[];
  achievements: string[];
  message: string;
}

export const trustees: Trustee[] = [
  {
    slug: "dadasaheb-gawai",
    name: "Shri. Dadasaheb Gawai",
    designation: "Founder & Chairman",
    summary:
      "Visionary social reformer who founded the trust to bring education and dignity to the underprivileged of Vidarbha.",
    image: t1,
    biography: [
      "Born in a humble family in Amravati district, Shri. Dadasaheb Gawai dedicated his life to social upliftment, education and equality. His decades of grassroots service inspired the founding of this trust.",
      "A respected leader and parliamentarian, he championed the cause of marginalised communities and worked tirelessly to make quality education accessible to every child.",
    ],
    contributions: [
      "Founded the trust in service of education and social welfare",
      "Established multiple schools and hostels for underprivileged students",
      "Pioneered scholarship programmes for first-generation learners",
    ],
    achievements: [
      "Padma Shri awardee for social service",
      "Honored by the Government of Maharashtra for educational reforms",
      "Lifelong advocate for constitutional values and equality",
    ],
    message:
      "Education is the only weapon that can change destinies. Our work will continue until every child in our region has the opportunity to dream — and the means to achieve it.",
  },
  {
    slug: "sushila-gawai",
    name: "Smt. Sushila Gawai",
    designation: "Vice Chairperson",
    summary:
      "Champion of women's empowerment and child welfare, leading the trust's outreach across rural Maharashtra.",
    image: t2,
    biography: [
      "With over three decades of experience in social work, Smt. Sushila Gawai leads the trust's women empowerment and child welfare initiatives.",
      "She has personally mentored hundreds of women through skill-development programmes that have transformed families and entire villages.",
    ],
    contributions: [
      "Founded the Women's Vocational Training Centre",
      "Oversees the girl-child scholarship programme",
      "Organises annual rural health camps benefitting 5,000+ families",
    ],
    achievements: [
      "Recognised by UNICEF India for her work in girl-child education",
      "Maharashtra State Award for Women Empowerment",
    ],
    message:
      "When you educate a woman, you educate a generation. Our centres are not just classrooms — they are spaces where dignity is restored.",
  },
  {
    slug: "rajesh-deshmukh",
    name: "Adv. Rajesh Deshmukh",
    designation: "Managing Trustee",
    summary:
      "Senior advocate ensuring transparent governance, legal compliance and ethical stewardship of every donation received.",
    image: t3,
    biography: [
      "Adv. Rajesh Deshmukh is a senior advocate at the Bombay High Court with a long association with public-interest causes.",
      "He oversees the trust's governance, legal compliance and audits — ensuring every rupee donated reaches the intended beneficiary.",
    ],
    contributions: [
      "Established the trust's transparency and audit framework",
      "Pro-bono legal counsel for beneficiary families",
      "Authored the trust's RTE compliance handbook",
    ],
    achievements: [
      "Distinguished Alumnus, ILS Law College Pune",
      "Lifetime member of the Bar Council of Maharashtra & Goa",
    ],
    message:
      "Trust is built one transparent decision at a time. We owe every donor and every beneficiary nothing less than complete honesty.",
  },
  {
    slug: "priya-kale",
    name: "Dr. Priya Kale",
    designation: "Trustee — Education",
    summary:
      "PhD in Education leading curriculum design, teacher training and the trust's flagship scholarship programme.",
    image: t4,
    biography: [
      "Dr. Priya Kale brings academic rigour and modern pedagogy to the trust's education vertical.",
      "She designs the curriculum, trains teachers and runs the merit-cum-means scholarship programme that supports 1,200+ students every year.",
    ],
    contributions: [
      "Designed the bridge-course programme for first-generation learners",
      "Established the digital learning labs in 14 villages",
      "Mentors over 200 scholarship recipients personally",
    ],
    achievements: [
      "PhD in Educational Psychology, SNDT University",
      "Fulbright Fellow 2018",
    ],
    message:
      "Every child carries the spark of brilliance. Our job is simply to make sure no child has to put it out because of poverty.",
  },
  {
    slug: "anand-patil",
    name: "Dr. Anand Patil",
    designation: "Trustee — Healthcare",
    summary:
      "Practising physician leading rural medical camps, mobile clinics and the trust's preventive healthcare programme.",
    image: t5,
    biography: [
      "Dr. Anand Patil is a practising physician who runs the trust's healthcare initiatives across 40+ villages in Vidarbha.",
      "He has built a network of volunteer doctors who conduct monthly health camps, screenings and follow-up care for vulnerable communities.",
    ],
    contributions: [
      "Runs the monthly mobile clinic programme",
      "Coordinates free cataract-surgery camps",
      "Built the maternal & child health screening initiative",
    ],
    achievements: [
      "MD, Government Medical College Nagpur",
      "Indian Medical Association Community Service Award",
    ],
    message:
      "Health is the foundation everything else is built on. We bring care to the doorstep of those who would otherwise be left behind.",
  },
  {
    slug: "vasant-bhosale",
    name: "Shri. Vasant Bhosale",
    designation: "Treasurer",
    summary:
      "Chartered accountant safeguarding the trust's finances and stewarding every contribution with discipline and care.",
    image: t6,
    biography: [
      "Shri. Vasant Bhosale is a chartered accountant with over 35 years of experience in audit and financial governance.",
      "He manages the trust's finances, audits and donor reporting with the discipline that has earned the trust its reputation for transparency.",
    ],
    contributions: [
      "Implemented quarterly public financial disclosures",
      "Built the donor-facing impact reporting system",
      "Oversees 80G & 12A statutory compliance",
    ],
    achievements: [
      "Fellow Chartered Accountant (FCA), ICAI",
      "Past President, Amravati CA Branch",
    ],
    message:
      "Every rupee that comes to us carries someone's faith. We treat that faith as the most precious thing we hold.",
  },
];

export const getTrustee = (slug: string) =>
  trustees.find((t) => t.slug === slug);