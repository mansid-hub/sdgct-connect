import fallbackImg from "@/assets/initiative-education.jpg";
import healthImg from "@/assets/initiative-health.jpg";

export type FundingType = "granted" | "self-financed";

export interface Institution {
  slug: string;
  name: string;
  location?: string;
  website?: string;
  type: FundingType;
  image?: string;
  established?: string;
  about?: string[];
  highlights?: string[];
  gallery?: string[];
}

export interface Category {
  slug: string;
  title: string;
  parent: "schools" | "colleges" | "hospitals";
  description: string;
  items: Institution[];
}

const s = (name: string, location?: string) =>
  (name + "-" + (location ?? ""))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

const makeAbout = (name: string, location?: string): string[] => [
  `${name}${location ? ", located at " + location : ""}, is part of the Shri. Dadasaheb Gawai Charitable Trust network of institutions serving the Amravati region.`,
  `The institution is committed to accessible, value-based education rooted in the trust's mission of dignity, equity and constitutional values. Students benefit from dedicated faculty, a supportive campus environment and community-linked learning.`,
  `Parents, alumni and well-wishers continue to strengthen the institution through their support — helping first-generation learners and deserving students realise their potential.`,
];

const makeHighlights = (): string[] => [
  "Qualified and experienced faculty",
  "Inclusive admissions for students from all communities",
  "Scholarships and support for deserving students",
  "Co-curricular and cultural activities year-round",
];

const build = (
  parent: "schools" | "colleges" | "hospitals",
  raw: { name: string; location?: string; website?: string; type: FundingType }[]
): Institution[] =>
  raw.map((r) => ({
    ...r,
    slug: s(r.name, r.location),
    image: parent === "hospitals" ? healthImg : fallbackImg,
    about: makeAbout(r.name, r.location),
    highlights: makeHighlights(),
    gallery: parent === "hospitals"
      ? [healthImg, fallbackImg, healthImg, fallbackImg]
      : [fallbackImg, healthImg, fallbackImg, healthImg],
  }));

export const categories: Category[] = [
  {
    slug: "all-schools",
    title: "Schools",
    parent: "schools",
    description: "Primary, middle and secondary schools nurturing students across the Amravati region.",
    items: build("schools", [
      { name: "Dr. Babasaheb Ambedkar Marathi Vidyalaya", location: "Frezarpura, Amravati", website: "https://instagram.com/dr_babasaheb_ambedkar_mv_amt/", type: "granted" },
      { name: "Madan Maharaj Vidyalaya", location: "Fulamla, Tq. Nandgaon (Kh.), Amravati", type: "granted" },
      { name: "Mahatma Jyotiba Fule Vidyalaya", location: "Vihigaon, Tq. Anjangaon Surji, Amravati", website: "https://mjfamt.org/", type: "granted" },
      { name: "Matoshri Ramabai Ambedkar Vidyalaya", location: "Shyam Nagar, Amravati", website: "https://schools.org.in/amravati/27071505604/matoshri-ramabai-ambedkar-vid.html", type: "granted" },
      { name: "Shri Dadasaheb Gawai Vidyalaya", location: "Malhara, Tq. Achalpur, Amravati", type: "granted" },
      { name: "Matoshri Gangadevi Lulla Vidyalaya", location: "Gaurkheda Kumbhi, Tq. Achalpur, Amravati", type: "granted" },
      { name: "Krushnakamal Adiwasi Ashram Shala", location: "Ner Pingalai, Tq. Morshi, Amravati", type: "granted" },
      { name: "Dr. Babasaheb Ambedkar Hindi Primary School", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Sant Gadge Baba Hindi High School", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Dr. Babasaheb Ambedkar Marathi Primary School", location: "Fraizarpura, Amravati", type: "granted" },
      { name: "Kamaljyot Marathi Primary and Middle School", location: "Navasari, Amravati", type: "granted" },
      { name: "Lotus English School", location: "Shyam Nagar, Amravati", type: "self-financed" },
      { name: "Lotus English School", location: "Darapur, Tq. Daryapur, Amravati", type: "self-financed" },
      { name: "Lotus English Primary School", location: "Uttam Nagar, Amravati", type: "self-financed" },
      { name: "Lotus English Primary School", location: "Gaurkheda Kumbhi, Tq. Achalpur, Amravati", type: "self-financed" },
      { name: "Lotus English Primary School", location: "Vihigaon, Tq. Anjangaon Surji, Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "senior-colleges",
    title: "Senior Colleges",
    parent: "colleges",
    description: "Senior colleges offering undergraduate and postgraduate programmes.",
    items: build("colleges", [
      { name: "Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya", location: "Uttam Nagar, Amravati", type: "granted" },
      { name: "Takshashila Mahavidyalaya", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Takshashila Mahavidyalaya", location: "Darapur, Tq. Daryapur, Amravati", type: "granted" },
      { name: "Takshashila Ayurvedic College, Hospital and Research Centre", location: "Kherda, Tq. Karanja, Dist. Washim", type: "self-financed" },
      { name: "Takshashila Institute of Pharmaceutical Education and Research", location: "Kherda, Tq. Karanja Lad, Washim", type: "self-financed" },
      { name: "Ramkrushna Shikshan Shastra Mahavidyalaya (B.Ed.)", location: "Uttam Nagar, Amravati", type: "self-financed" },
      { name: "Sau. Dr. Kamaltai Gawai Adhyapak Vidyalaya (D.Ed.)", location: "Darapur, Tq. Daryapur, Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "junior-colleges",
    title: "Junior Colleges",
    parent: "colleges",
    description: "Junior colleges and MCVC vocational streams.",
    items: build("colleges", [
      { name: "Dr. Babasaheb Ambedkar Junior College", location: "Uttam Nagar, Amravati", type: "granted" },
      { name: "Takshashila Junior College", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Ramkrushna Junior College", location: "Darapur, Amravati", type: "granted" },
      { name: "Kamaldeep Junior College", location: "Fulamla, Tq. Nandgaon Khandeshwar, Amravati", type: "granted" },
      { name: "Mahatma Jyotiba Fuley Junior College", location: "Vihigaon, Tq. Anjangaon Surji, Amravati", type: "granted" },
      { name: "Matoshri Gangadevi Lulla Junior College", location: "Gaurkheda Kumbhi, Tq. Achalpur, Amravati", type: "granted" },
      { name: "Matoshri Ramabai Ambedkar Junior College", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Dr. Babasaheb Ambedkar MCVC", location: "Uttam Nagar, Amravati", type: "granted" },
      { name: "Takshashila MCVC", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Ramkrushna MCVC", location: "Darapur, Tq. Daryapur, Amravati", type: "granted" },
      { name: "Matoshri Ramabai Ambedkar MCVC", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Mahatma Jyotiba Fuley MCVC", location: "Vihigaon, Tq. Anjangaon Surji, Amravati", type: "granted" },
    ]),
  },
  {
    slug: "technical-colleges",
    title: "Technical Colleges",
    parent: "colleges",
    description: "Senior-level engineering and technology institutes.",
    items: build("colleges", [
      { name: "Takshashila Institute of Engineering and Technology and Research Centre", location: "Darapur, Tq. Daryapur, Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "polytechnics",
    title: "Polytechnics",
    parent: "colleges",
    description: "Diploma-level polytechnic institutes in engineering disciplines.",
    items: build("colleges", [
      { name: "Vikramshila Polytechnic", location: "Darapur, Tq. Daryapur, Amravati", type: "self-financed" },
      { name: "Takshashila Polytechnic College", location: "Uttam Nagar, Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "iti",
    title: "ITI",
    parent: "colleges",
    description: "Industrial Training Institutes imparting hands-on vocational skills.",
    items: build("colleges", [
      { name: "Samrat Ashok Industrial Training Institute", location: "Darapur, Tq. Daryapur, Amravati", type: "self-financed" },
      { name: "Nalanda Industrial Training Institute", location: "Mogra, Post Bhankheda, Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "hospitals",
    title: "Healthcare",
    parent: "hospitals",
    description: "Hospitals and healthcare centres associated with the trust.",
    items: build("hospitals", [
      { name: "Takshshila Ayurvedic Hospital", location: "Kherda, Tq. Karanja Lad, Dist. Washim", type: "self-financed" },
      { name: "Takshshila Modern Hospital", location: "Amravati, Maharashtra", type: "self-financed" },
    ]),
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const allInstitutions = (parent?: "schools" | "colleges" | "hospitals") =>
  categories
    .filter((c) => (parent ? c.parent === parent : true))
    .flatMap((c) => c.items.map((i) => ({ ...i, categorySlug: c.slug, categoryTitle: c.title, parent: c.parent })));

export const getInstitutionBySlug = (parent: string, slug: string) => {
  const all = allInstitutions();
  return all.find((i) => i.parent === parent && i.slug === slug);
};

export const summaryCounts = () => {
  const schools = allInstitutions("schools");
  const colleges = allInstitutions("colleges");
  const hospitals = allInstitutions("hospitals");
  return {
    schools: {
      total: schools.length,
      granted: schools.filter((i) => i.type === "granted").length,
      selfFinanced: schools.filter((i) => i.type === "self-financed").length,
    },
    colleges: {
      total: colleges.length,
      granted: colleges.filter((i) => i.type === "granted").length,
      selfFinanced: colleges.filter((i) => i.type === "self-financed").length,
    },
    hospitals: {
      total: hospitals.length,
    },
  };
};
