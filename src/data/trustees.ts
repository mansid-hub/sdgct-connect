import kamaltai from "@/assets/trustees/kamaltai.jpg";
import kirtitai from "@/assets/trustees/kirtitai.jpg";
import dharam from "@/assets/trustees/dharam.jpg";
import rajesh from "@/assets/trustees/rajesh.jpg";
import karan from "@/assets/trustees/karan.jpg";
import rajendra from "@/assets/trustees/rajendra.jpg";
import kamlakar from "@/assets/trustees/kamlakar.jpg";

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
    slug: "kamaltai-gawai",
    name: "Dr. Sau. Kamaltai R. Gawai",
    designation: "Founder & President",
    summary:
      "Visionary founder of the trust, devoted to the upliftment of women, children and underprivileged communities across Vidarbha.",
    image: kamaltai,
    biography: [
      "Dr. Sau. Kamaltai R. Gawai is the founding force behind Shri. Dadasaheb Gawai Charitable Trust. Inspired by the legacy of social reform in her family, she has devoted her life to education, women's empowerment and rural welfare.",
      "As President, she leads the trust's vision and ensures that every initiative is anchored in dignity, compassion and constitutional values.",
    ],
    contributions: [
      "Founded the trust and shaped its long-term vision",
      "Leads women's empowerment and child welfare programmes",
      "Mentors scholarship recipients and first-generation learners",
    ],
    achievements: [
      "Honoured for decades of service to society and education",
      "Lifelong advocate for constitutional values and equality",
    ],
    message:
      "Service is the highest form of devotion. Our work will continue until every child, woman and family in our region lives with dignity and opportunity.",
  },
  {
    slug: "kirtitai-arjun",
    name: "Mrs. Kirtitai R. Arjun",
    designation: "President",
    summary:
      "President of the trust, leading day-to-day programmes and championing women's empowerment and child welfare.",
    image: kirtitai,
    biography: [
      "Mrs. Kirtitai R. Arjun serves as the President of Shri. Dadasaheb Gawai Charitable Trust, guiding its programmes with empathy and a sharp organisational mind.",
      "She has worked closely with rural women's collectives and youth groups, building skill-development and welfare initiatives that touch thousands of lives every year.",
    ],
    contributions: [
      "Leads the women's vocational and skill-development programmes",
      "Oversees the girl-child scholarship initiative",
      "Drives community outreach across rural Maharashtra",
    ],
    achievements: [
      "Recognised for her contribution to women's empowerment",
      "Active leader in community health and education networks",
    ],
    message:
      "When you empower a woman, you uplift an entire family. Our trust exists to make sure no woman or child is left behind.",
  },
  {
    slug: "dharam-arjun",
    name: "Shri. Dharam Rajesh Arjun",
    designation: "Vice-President",
    summary:
      "Vice-President of the trust, driving youth engagement, technology adoption and modern outreach programmes.",
    image: dharam,
    biography: [
      "Shri. Dharam Rajesh Arjun serves as Vice-President of the trust and brings a youthful, modern perspective to its work.",
      "He focuses on technology, partnerships and youth-led initiatives, ensuring the trust's reach and impact continue to grow with every passing year.",
    ],
    contributions: [
      "Leads digital outreach and donor engagement",
      "Coordinates youth volunteer programmes",
      "Builds partnerships with educational and corporate institutions",
    ],
    achievements: [
      "Recognised for his work in youth mentorship",
      "Active contributor to community development initiatives",
    ],
    message:
      "The next generation is our greatest asset. We must equip them with skills, opportunities and the courage to lead change.",
  },
  {
    slug: "rajesh-arjun",
    name: "Mr. Rajesh Arjun",
    designation: "Treasurer",
    summary:
      "Treasurer of the trust, safeguarding finances and ensuring transparent stewardship of every contribution received.",
    image: rajesh,
    biography: [
      "Mr. Rajesh Arjun manages the trust's finances with discipline, transparency and a deep sense of responsibility towards every donor.",
      "He oversees budgeting, audits and statutory compliance, ensuring that every rupee is used in the service of the trust's mission.",
    ],
    contributions: [
      "Manages financial planning and donor reporting",
      "Oversees 80G & 12A statutory compliance",
      "Implemented transparent quarterly disclosures",
    ],
    achievements: [
      "Decades of experience in financial governance",
      "Recognised for his integrity and stewardship",
    ],
    message:
      "Every contribution carries someone's faith. We treat that faith as the most precious thing this trust holds.",
  },
  {
    slug: "karan-arjun",
    name: "Shri. Karan Rajesh Arjun",
    designation: "Trustee",
    summary:
      "Trustee championing education, scholarships and capacity-building for first-generation learners across Vidarbha.",
    image: karan,
    biography: [
      "Shri. Karan Rajesh Arjun is a trustee deeply committed to education and youth development.",
      "He drives the trust's scholarship programmes and mentors students to help them realise their full potential.",
    ],
    contributions: [
      "Leads the merit-cum-means scholarship initiative",
      "Mentors first-generation learners personally",
      "Coordinates career-guidance programmes for students",
    ],
    achievements: [
      "Recognised for his work in education & mentorship",
    ],
    message:
      "Education is the surest path out of poverty. Our scholarships are not charity — they are an investment in tomorrow's leaders.",
  },
  {
    slug: "rajendra-gawai",
    name: "Dr. Rajendra R. Gawai",
    designation: "Trustee",
    summary:
      "Trustee leading healthcare initiatives, rural medical camps and preventive-care programmes for vulnerable communities.",
    image: rajendra,
    biography: [
      "Dr. Rajendra R. Gawai brings medical expertise and a passion for community welfare to the trust.",
      "He leads the healthcare vertical, organising medical camps, screenings and follow-up care across rural Vidarbha.",
    ],
    contributions: [
      "Coordinates monthly rural health camps",
      "Builds the preventive-care and screening programme",
      "Mentors a network of volunteer medical professionals",
    ],
    achievements: [
      "Recognised for community service in healthcare",
    ],
    message:
      "Health is the foundation everything else is built on. We bring care to the doorstep of those who would otherwise be left behind.",
  },
  {
    slug: "kamlakar-payas",
    name: "Dr. Kamlakar P. Payas",
    designation: "Secretary",
    summary:
      "Secretary of the trust, ensuring smooth operations, governance and meticulous execution of every initiative.",
    image: kamlakar,
    biography: [
      "Dr. Kamlakar P. Payas serves as the Secretary of Shri. Dadasaheb Gawai Charitable Trust.",
      "He coordinates governance, documentation and inter-team collaboration, making sure every programme is executed with discipline and accountability.",
    ],
    contributions: [
      "Manages governance, records and statutory documentation",
      "Coordinates trustee meetings and programme reviews",
      "Drives operational excellence across all initiatives",
    ],
    achievements: [
      "Decades of experience in administration and academia",
    ],
    message:
      "Good intentions become real impact only through disciplined execution. That is the work we owe every beneficiary and every donor.",
  },
];

export const getTrustee = (slug: string) =>
  trustees.find((t) => t.slug === slug);