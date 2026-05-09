import fallbackImg from "@/assets/initiative-education.jpg";
import healthImg from "@/assets/initiative-health.jpg";
import atishImg from "@/assets/success-atish-tayde.png";
import vaishaliImg from "@/assets/success-vaishali-hiwrale.png";
import shrawastiImg from "@/assets/success-shrawasti-tayde.png";

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
  successStories?: { title: string; preview: string; image?: string; slug: string }[];
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
    slug: "schools",
    title: "Schools",
    parent: "schools",
    description: "Primary, middle and secondary schools nurturing students across the Amravati region.",
    items: build("schools", [
      { name: "Kamaljyot Marathi Primary and Middle School", location: "Navasari, Dist. Amravati", type: "granted" },
      { name: "Krushnakamal Adiwasi Anudanit Ashram School", location: "Ner Pingalai, Tq. Morshi, Dist. Amravati", type: "granted" },
      { name: "Shri Dadasaheb Gawai Vidyalaya", location: "Malhara, Tq. Achalpur, Dist. Amravati", type: "granted" },
      { name: "Matoshri Gangadevi Lulla Vidyalaya and Junior College", location: "Gaurkheda Kumbhi, Tq. Achalpur, Dist. Amravati", type: "granted" },
      { name: "Madan Maharaj Vidyalaya and Kamaldeep Junior College", location: "Fulamla, Tq. Nandgaon (Kh.), Dist. Amravati", type: "granted" },
      { name: "Mahatma Jyotiba Phule Vidyalaya and Junior College", location: "Vihigao, Tq. Anjangaon Surji, Dist. Amravati", website: "https://mjfamt.org/", type: "granted" },
      { name: "Dr. Babasaheb Ambedkar Vidyalaya", location: "Fraizarpura, Dist. Amravati", website: "https://instagram.com/dr_babasaheb_ambedkar_mv_amt/", type: "granted" },
      { name: "Dr. Babasaheb Ambedkar Marathi Primary School", location: "Shyam Nagar, Dist. Amravati", type: "granted" },
      { name: "Dr. Babasaheb Ambedkar Hindi Primary School", location: "Shyam Nagar, Dist. Amravati", type: "granted" },
      { name: "Matoshri Ramabai Ambedkar Vidyalaya and Junior College", location: "Shyam Nagar, Dist. Amravati", website: "https://schools.org.in/amravati/27071505604/matoshri-ramabai-ambedkar-vid.html", type: "granted" },
      { name: "Sant Gadge Baba Hindi Vidyalaya", location: "Shyam Nagar, Amravati", type: "granted" },
      { name: "Lotus (Prerna) English School", location: "Vihigao, Tq. Anjangaon Surji, Dist. Amravati", type: "self-financed" },
      { name: "Lotus English School and Science Junior College", location: "Shyam Nagar, Dist. Amravati", type: "self-financed" },
      { name: "Lotus (Shri. Dadasaheb Gaikwad) English School", location: "Darapur, Tq. Daryapur, Dist. Amravati", type: "self-financed" },
      { name: "Lotus (Kamalsurya) English Primary School", location: "Gaurkheda Kumbhi, Tq. Achalpur, Dist. Amravati", type: "self-financed" },
      { name: "Lotus (Karan) English School", location: "Uttam Nagar, Dist. Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "senior-colleges",
    title: "Senior Colleges",
    parent: "colleges",
    description: "Senior colleges offering undergraduate and postgraduate programmes.",
    items: build("colleges", [
      { name: "Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya and Junior College", location: "Uttam Nagar, Dist. Amravati", type: "granted" },
      { name: "Takshashila Mahavidyalaya and Junior College", location: "Shyam Nagar, Dist. Amravati", type: "granted" },
      { name: "Takshashila Mahavidyalaya", location: "Darapur, Tq. Daryapur, Dist. Amravati", type: "granted" },
      { name: "Takshashila Ayurved College and Hospital and Research Centre", location: "Kherda, Tq. Karanja, Dist. Washim", type: "self-financed" },
      { name: "Takshashila Institute of Pharmaceutical Education and Research", location: "Kherda, Tq. Karanja (Lad), Dist. Washim", type: "self-financed" },
      { name: "Ramkrushna Shikshan Shastra Mahavidyalaya (B.Ed.)", location: "Uttam Nagar, Dist. Amravati", type: "self-financed" },
      { name: "Sau. Dr. Kamaltai Gawai Adhyapak Vidyalaya (D.Ed.)", location: "Darapur, Tq. Daryapur, Dist. Amravati", type: "self-financed" },
    ]),
  },
  {
    slug: "junior-colleges",
    title: "Junior Colleges",
    parent: "colleges",
    description: "Junior colleges and MCVC vocational streams.",
    items: build("colleges", [
      { name: "Ramkrushna Junior College", location: "Darapur, Tq. Daryapur, Dist. Amravati", type: "granted" },
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

// ---- Per-institution content overrides ----
const malharaAbout: string[] = [
  "Nestled at the foothills of the Satpuda mountain range, the school is located in a predominantly tribal area where access to education has traditionally been limited. Despite these challenges, Shri. Dadasaheb Gawai Vidyalaya, Malhara, has emerged as a strong pillar of learning, hope, and social upliftment.",
  "This school is not just a place where lessons are taught; it is a land where seeds of courage, discipline, and patriotism are sown. Each student who walks through its gates carries a spark, and the teachers, like skilled sculptors, shape those sparks into blazing torches.",
  "The primary mission of the institution is to serve the tribal community, and it fulfills this responsibility with deep commitment. Nearly 80% of the students come from tribal backgrounds, reflecting the school's strong connection with the local community.",
  "The school does not focus only on basic education, but on delivering quality education that can truly transform lives. The teachers are dedicated and work tirelessly to create a supportive and encouraging environment. They emphasize both academic excellence and overall personality development, helping students build confidence, discipline, and a sense of responsibility.",
  "Shri. Dadasaheb Gawai Vidyalaya is more than just an educational institution, it is a center for empowerment. By educating tribal children, it is shaping not only individual futures, but also contributing to the development of the entire community.",
  "We create awareness among our students about different skills like computer literacy, farming techniques, handicrafts, and vocational training. This helps them become self-reliant and opens new career opportunities for them. Through the achievements of its students, the school proudly stands as a symbol of how dedication and proper guidance can turn small beginnings into great success stories.",
];

const malharaSuccessStories = [
  {
    title: "Mr. Atish Tayde, Scientist, Defence Research and Development Organisation (DRDO)",
    preview:
      "From struggle to success, his journey teaches us that hard work and determination can turn dreams into reality. Atish Tayde, an esteemed alumnus of Shri. Dadasaheb Gawai Vidyalaya, Malhara, rose from a humble rural background to serve the nation as a DRDO scientist.",
    image: atishImg,
    slug: "atish-tayde-drdo",
  },
  {
    title: "Ms. Vaishali Hiwrale, Maharashtra Police",
    preview:
      "Coming from a humble farming family with severe financial challenges, Vaishali Hiwrale has emerged as a shining example of determination, resilience, and hard work — earning a respected position in the Maharashtra Police.",
    image: vaishaliImg,
    slug: "vaishali-hiwrale-police",
  },
  {
    title: "Ms. Shrawasti Dipak Tayde, National-level Bronze Medalist in Thang-Ta Martial Art",
    preview:
      "With unwavering dedication and relentless practice, Shrawasti excelled in Thang-Ta — a traditional martial art from Manipur — progressing from school-level competitions to win a bronze medal at the national championship.",
    image: shrawastiImg,
    slug: "shrawasti-tayde-thang-ta",
  },
];

const schoolsCat = categories.find((c) => c.slug === "schools");
const malhara = schoolsCat?.items.find((i) => i.slug === "shri-dadasaheb-gawai-vidyalaya-malhara-tq-achalpur-dist-amravati");
if (malhara) {
  malhara.about = malharaAbout;
  malhara.successStories = malharaSuccessStories;
}

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
