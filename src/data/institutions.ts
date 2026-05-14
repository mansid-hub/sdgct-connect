import fallbackImg from "@/assets/initiative-education.jpg";
import healthImg from "@/assets/initiative-health.jpg";
import atishImg from "@/assets/success-atish-tayde.png";
import vaishaliImg from "@/assets/success-vaishali-hiwrale.png";
import shrawastiImg from "@/assets/success-shrawasti-tayde.png";
import malhara1 from "@/assets/malhara-1.png";
import malhara2 from "@/assets/malhara-2.png";
import malhara3 from "@/assets/malhara-3.png";
import malhara5 from "@/assets/malhara-5.png";
import pravinImg from "@/assets/success-pravin-waghmare.jpeg";
import ambedkarFr1 from "@/assets/ambedkar-fraizarpura-1.jpeg";
import ambedkarFr2 from "@/assets/ambedkar-fraizarpura-2.jpeg";
import ambedkarFr3 from "@/assets/ambedkar-fraizarpura-3.jpeg";
import ambedkarFr4 from "@/assets/ambedkar-fraizarpura-4.jpeg";
import ambedkarFr5 from "@/assets/ambedkar-fraizarpura-5.jpeg";
import ambedkarFr6 from "@/assets/ambedkar-fraizarpura-6.jpeg";
import ambedkarFr7 from "@/assets/ambedkar-fraizarpura-7.jpeg";
import ambedkarFr8 from "@/assets/ambedkar-fraizarpura-8.jpeg";
import ambedkarFr9 from "@/assets/ambedkar-fraizarpura-9.jpeg";
import ambedkarFr10 from "@/assets/ambedkar-fraizarpura-10.jpeg";
import ambedkarFr11 from "@/assets/ambedkar-fraizarpura-11.jpeg";
import ambedkarFr12 from "@/assets/ambedkar-fraizarpura-12.jpeg";
import ambedkarFr13 from "@/assets/ambedkar-fraizarpura-13.jpeg";
import ambedkarFr14 from "@/assets/ambedkar-fraizarpura-14.jpeg";
import ambedkarFr15 from "@/assets/ambedkar-fraizarpura-15.jpg";
import ambedkarFr16 from "@/assets/ambedkar-fraizarpura-16.jpg";
import ambedkarFr17 from "@/assets/ambedkar-fraizarpura-17.jpg";
import ambedkarFr18 from "@/assets/ambedkar-fraizarpura-18.jpg";
import ambedkarFr19 from "@/assets/ambedkar-fraizarpura-19.jpg";
import ambedkarFr20 from "@/assets/ambedkar-fraizarpura-20.jpg";
import ambedkarFr21 from "@/assets/ambedkar-fraizarpura-21.jpg";
import devanandImg from "@/assets/success-devanand-shende.png";
import ambedkarMa1 from "@/assets/ambedkar-marathi-1.jpg";
import ambedkarMa2 from "@/assets/ambedkar-marathi-2.jpeg";
import ambedkarMa3 from "@/assets/ambedkar-marathi-3.jpg";
import ambedkarMa4 from "@/assets/ambedkar-marathi-4.jpg";
import ambedkarMa5 from "@/assets/ambedkar-marathi-5.jpg";
import ambedkarMa6 from "@/assets/ambedkar-marathi-6.jpg";
import ambedkarMa7 from "@/assets/ambedkar-marathi-7.jpg";
import ambedkarMa8 from "@/assets/ambedkar-marathi-8.jpg";
import ambedkarMa9 from "@/assets/ambedkar-marathi-9.jpeg";
import ambedkarMa10 from "@/assets/ambedkar-marathi-10.jpeg";
import ambedkarMa11 from "@/assets/ambedkar-marathi-11.jpeg";
import kamaljyot1 from "@/assets/kamaljyot-1.png";
import kamaljyot2 from "@/assets/kamaljyot-2.jpg";
import kamaljyot3 from "@/assets/kamaljyot-3.jpg";
import kamaljyot4 from "@/assets/kamaljyot-4.jpg";
import kamaljyot5 from "@/assets/kamaljyot-5.jpg";
import kamaljyot6 from "@/assets/kamaljyot-6.jpg";
import kamaljyot7 from "@/assets/kamaljyot-7.jpg";
import kamaljyot8 from "@/assets/kamaljyot-8.jpg";
import kamaljyot9 from "@/assets/kamaljyot-9.jpg";
import kamaljyot10 from "@/assets/kamaljyot-10.jpg";
import kamaljyot11 from "@/assets/kamaljyot-11.jpg";
import kamaljyot12 from "@/assets/kamaljyot-12.jpg";
import kamaljyot13 from "@/assets/kamaljyot-13.jpg";
import kamaljyot14 from "@/assets/kamaljyot-14.jpg";
import kamaljyot15 from "@/assets/kamaljyot-15.jpg";
import kamaljyot16 from "@/assets/kamaljyot-16.jpg";
import kamaljyot17 from "@/assets/kamaljyot-17.jpg";
import krushnakamal1 from "@/assets/krushnakamal-1.jpeg";
import krushnakamal2 from "@/assets/krushnakamal-2.jpeg";
import krushnakamal3 from "@/assets/krushnakamal-3.jpg";
import krushnakamal4 from "@/assets/krushnakamal-4.jpg";
import krushnakamal5 from "@/assets/krushnakamal-5.jpeg";
import krushnakamal6 from "@/assets/krushnakamal-6.jpeg";
import krushnakamal7 from "@/assets/krushnakamal-7.jpeg";
import krushnakamal8 from "@/assets/krushnakamal-8.jpeg";
import krushnakamal9 from "@/assets/krushnakamal-9.jpeg";
import krushnakamal10 from "@/assets/krushnakamal-10.jpeg";
import krushnakamal11 from "@/assets/krushnakamal-11.jpeg";
import krushnakamal12 from "@/assets/krushnakamal-12.jpeg";
import krushnakamal13 from "@/assets/krushnakamal-13.jpeg";

import omprakashImg from "@/assets/success-omprakash-jambekar.jpg";
import madan1 from "@/assets/madan-1.jpg";
import madan2 from "@/assets/madan-2.jpg";
import madan3 from "@/assets/madan-3.jpg";
import madan4 from "@/assets/madan-4.jpg";
import madan5 from "@/assets/madan-5.jpg";



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
      { name: "Sant Gadge Baba Hindi Vidyalaya", location: "Shyam Nagar, Dist. Amravati", type: "granted" },
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
      { name: "Takshshila Modern Medical Hospital", location: "Kherda, Tq. Karanja Lad, Dist. Washim", type: "self-financed" },
    ]),
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

// ---- Establishment years by slug ----
const establishedBySlug: Record<string, string> = {
  "kamaljyot-marathi-primary-and-middle-school-navasari-dist-amravati": "1995",
  "krushnakamal-adiwasi-anudanit-ashram-school-ner-pingalai-tq-morshi-dist-amravati": "2003",
  "shri-dadasaheb-gawai-vidyalaya-malhara-tq-achalpur-dist-amravati": "1987",
  "matoshri-gangadevi-lulla-vidyalaya-and-junior-college-gaurkheda-kumbhi-tq-achalp": "1989",
  "madan-maharaj-vidyalaya-and-kamaldeep-junior-college-fulamla-tq-nandgaon-kh-dist": "1969",
  "mahatma-jyotiba-phule-vidyalaya-and-junior-college-vihigao-tq-anjangaon-surji-di": "1981",
  "dr-babasaheb-ambedkar-vidyalaya-fraizarpura-dist-amravati": "1968",
  "dr-babasaheb-ambedkar-marathi-primary-school-shyam-nagar-dist-amravati": "1983",
  "dr-babasaheb-ambedkar-hindi-primary-school-shyam-nagar-dist-amravati": "1987",
  "matoshri-ramabai-ambedkar-vidyalaya-and-junior-college-shyam-nagar-dist-amravati": "1992",
  "sant-gadge-baba-hindi-vidyalaya-shyam-nagar-dist-amravati": "2006",
  "lotus-prerna-english-school-vihigao-tq-anjangaon-surji-dist-amravati": "2012",
  "lotus-english-school-and-science-junior-college-shyam-nagar-dist-amravati": "2000",
  "lotus-shri-dadasaheb-gaikwad-english-school-darapur-tq-daryapur-dist-amravati": "2013",
  "lotus-kamalsurya-english-primary-school-gaurkheda-kumbhi-tq-achalpur-dist-amrava": "2017",
  "lotus-karan-english-school-uttam-nagar-dist-amravati": "2014",
  "dr-babasaheb-ambedkar-takshashila-mahavidyalaya-and-junior-college-uttam-nagar-d": "1972",
  "takshashila-mahavidyalaya-and-junior-college-shyam-nagar-dist-amravati": "1984",
  "takshashila-mahavidyalaya-darapur-tq-daryapur-dist-amravati": "2000",
  "takshashila-institute-of-pharmaceutical-education-and-research-kherda-tq-karanja": "2016",
  "ramkrushna-shikshan-shastra-mahavidyalaya-b-ed-uttam-nagar-dist-amravati": "2004",
  "sau-dr-kamaltai-gawai-adhyapak-vidyalaya-d-ed-darapur-tq-daryapur-dist-amravati": "2006",
  "ramkrushna-junior-college-darapur-tq-daryapur-dist-amravati": "1984",
  "takshashila-institute-of-engineering-and-technology-and-research-centre-darapur-": "2008",
  "takshashila-polytechnic-college-uttam-nagar-amravati": "2014",
  "samrat-ashok-industrial-training-institute-darapur-tq-daryapur-amravati": "2010",
  "nalanda-industrial-training-institute-mogra-post-bhankheda-amravati": "2009",
};

for (const cat of categories) {
  for (const item of cat.items) {
    if (!item.established && establishedBySlug[item.slug]) {
      item.established = establishedBySlug[item.slug];
    }
  }
}

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
  malhara.image = malhara1;
  malhara.gallery = [malhara1, malhara2, malhara3, malhara5];
}

const ambedkarFraizarpuraAbout: string[] = [
  "Dr. Babasaheb Ambedkar Vidyalaya, Fraizarpura, is a distinguished institution in the field of education, established in 1968, under the inspiration of the Honorable Dadasaheb Gavai. The school was founded with the noble objective of providing quality education to poor and needy students within the community, thereby ensuring a bright future for them.",
  "To this day, numerous students from the surrounding areas, including Fraizarpura, Lumbini Nagar, Vadarapura, Rahul Nagar, and Panchasheel Nagar—pursue their education at this school. Beyond academics, the school consistently strives to identify the latent talents within its students, providing them with appropriate direction and guidance.",
  "In the realm of sports, the school has earned a distinguished reputation within the Amravati district, with many students achieving remarkable success in various competitions. The school's achievements have been recognized and recorded in both the India Book of Records and the Limca Book of Records, an accomplishment that serves as a source of immense pride for the institution. This school has not only molded exemplary students, but has also contributed exemplary teachers and principals to the institution itself.",
  "Representing a beautiful confluence of education, moral values, sports, and social commitment, Dr. Babasaheb Ambedkar Vidyalaya, Fraizarpura, continues to perform inspiring work for the betterment of society to this day.",
];

const ambedkarFraizarpuraStories = [
  {
    title: "Mr. Pravin Prabhakar Waghmare, Actor & Artist",
    preview:
      "An Artist Forged in Struggle — from a barefoot boy doing odd jobs in Fraizarpura to performing alongside leading artists in Marathi plays, films and television, Pravin's journey began when a teacher recognised the artist within him.",
    image: pravinImg,
    slug: "pravin-waghmare-actor",
  },
];

const ambedkarFraizarpura = schoolsCat?.items.find(
  (i) => i.slug === "dr-babasaheb-ambedkar-vidyalaya-fraizarpura-dist-amravati"
);
if (ambedkarFraizarpura) {
  ambedkarFraizarpura.about = ambedkarFraizarpuraAbout;
  ambedkarFraizarpura.successStories = ambedkarFraizarpuraStories;
  ambedkarFraizarpura.image = ambedkarFr2;
  ambedkarFraizarpura.gallery = [ambedkarFr2, ambedkarFr3, ambedkarFr1, ambedkarFr4, ambedkarFr5, ambedkarFr6, ambedkarFr7, ambedkarFr8, ambedkarFr9, ambedkarFr10, ambedkarFr11, ambedkarFr12, ambedkarFr13, ambedkarFr14, ambedkarFr15, ambedkarFr16, ambedkarFr17, ambedkarFr18, ambedkarFr19, ambedkarFr20, ambedkarFr21, ];
}

const ambedkarMarathiPrimaryAbout: string[] = [
  "Dr. Babasaheb Ambedkar Marathi Primary School, Shyam Nagar, now located in Fraizarpura, is an educational institution established in 1983 under the inspiration of the Honorable Dadasaheb Gavai. Founded with the mission of providing quality education to poor and underprivileged children, the school has become a pillar of transformation for families across Fraizarpura, Yashoda Nagar, Rahul Nagar, and Uttam Nagar.",
  "More than just an educational institution, the school is a nurturing home where teachers dedicate themselves to shaping the future of every child with love, care, and unwavering commitment. The educators treat students like their own children, standing beside them through every challenge while instilling confidence, discipline, moral values, and the courage to dream beyond limitations. Along with academic excellence, the school actively identifies and nurtures hidden talents in sports, leadership, creativity, and social responsibility.",
  "The success of its alumni exhibits the school's transformative impact. Former students have gone on to achieve distinguished positions in various fields, bringing honor to their families, community, and alma mater. One such alumnus was recently recognized with the prestigious \"Ideal Teacher Award,\" reflecting the strong values and inspiration nurtured within the school.",
  "Driven by the belief that education is the foundation of social change, Dr. Babasaheb Ambedkar Marathi Primary School continues its inspiring mission of empowering children and building an empowered society.",
];

const ambedkarMarathiPrimaryStories = [
  {
    title: "Mr. Devanand Suresh Shende, Teacher at Dr. Babasaheb Ambedkar Marathi Primary School",
    preview:
      "From a daily wage laborer's son to an educator shaping young minds, Devanand Shende's story is not just a success story, it is a cornerstone of educational empowerment for every child who dares to dream beyond limitations.",
    image: devanandImg,
    slug: "devanand-shende-teacher",
  },
];

const ambedkarMarathiPrimary = schoolsCat?.items.find(
  (i) => i.slug === "dr-babasaheb-ambedkar-marathi-primary-school-shyam-nagar-dist-amravati"
);
if (ambedkarMarathiPrimary) {
  ambedkarMarathiPrimary.about = ambedkarMarathiPrimaryAbout;
  ambedkarMarathiPrimary.successStories = ambedkarMarathiPrimaryStories;
  ambedkarMarathiPrimary.image = ambedkarMa2;
  ambedkarMarathiPrimary.gallery = [ambedkarMa2, ambedkarMa3, ambedkarMa1, ambedkarMa4, ambedkarMa5, ambedkarMa6, ambedkarMa7, ambedkarMa8, ambedkarMa9, ambedkarMa10, ambedkarMa11, ];

}

const kamaljyotAbout: string[] = [
  "Established in 1995, Kamaljyot Marathi Primary and Middle School, Navasari, has been steadfastly serving as a center of learning, hope, and empowerment for children from underserved communities. Located in Mahatma Phule Nagar, the school has consistently worked towards transforming the lives of students from backward, remote, slum, and tribal (tanda) areas by providing them access to quality education and a nurturing environment.",
  "Over the years, the school has inspired countless students to pursue successful careers in government services, private sectors, professional fields, and social leadership. The institution strongly believes that education is the most powerful tool for breaking the cycle of poverty and creating future possibilities for families and communities. With this vision, the teachers and staff work tirelessly to ensure that every child receives encouragement, guidance, and opportunities to grow with confidence and dignity.",
  "Beyond academics, the school focuses on practical and value-based learning that prepares students for real-life challenges. Despite operating within limited space and resources, the school has introduced an innovative bank-like learning model in their administrative office to teach children the importance of finance, saving habits, and basic banking concepts from an early age. This unique initiative helps students develop financial awareness, responsibility, and life skills that will benefit them in the future.",
  "The school also nurtures moral values, discipline, creativity, and social awareness, helping students become responsible and self-reliant citizens. Teachers remain deeply committed to ensuring that children from marginalized communities remain connected to education and continue progressing toward a better future.",
  "While the school continues to face problems related to infrastructure and educational facilities, its dedication to the welfare and development of children remains unwavering. Guided by the belief that \u201ctoday\u2019s children are the future of tomorrow,\u201d Kamaljyot Primary Marathi School continues to make a meaningful and lasting impact through education, innovation, and community upliftment.",
];

const kamaljyot = schoolsCat?.items.find(
  (i) => i.slug === "kamaljyot-marathi-primary-and-middle-school-navasari-dist-amravati"
);
if (kamaljyot) {
  kamaljyot.about = kamaljyotAbout;
  kamaljyot.image = kamaljyot1;
  kamaljyot.gallery = [kamaljyot1, kamaljyot2, kamaljyot3, kamaljyot4, kamaljyot5, kamaljyot6, kamaljyot7, kamaljyot8, kamaljyot9, kamaljyot10, kamaljyot11, kamaljyot12, kamaljyot13, kamaljyot14, kamaljyot15, kamaljyot16, kamaljyot17];
  kamaljyot.highlights = [];
}

const krushnakamalAbout: string[] = [
  "In a remote region of Maharashtra, Krushnakamal Adiwasi Anudanit Ashram School, Ner Pingalai, also called Krushnakamal Aided Tribal Ashram School, has become a symbol of hope, transformation, and opportunity for tribal children and their communities. Established in 2003, serving predominantly tribal students, the school provides free, quality education while nurturing every child with compassion, dignity, and care.",
  "What makes the institution truly remarkable is the dedication of its teachers and staff, who go far beyond the call of duty. Many children arrive from remote villages without exposure to basic hygiene, structured living, or emotional support. Teachers personally guide them in daily habits such as cleanliness, bathing, discipline, and self-care, helping build confidence and self-respect. The residential hostel serves not just as accommodation, but as a safe and loving home where children feel protected and valued.",
  "During the COVID-19 pandemic, the strong emotional bond between the students and the school became deeply evident. Many children were reluctant to return to their villages because the school had become their place of security, nourishment, care, and stability. This reflects the trust the tribal community places in the institution and the transformative role it plays in their lives.",
  "Beyond academics, the school focuses on holistic development by equipping students with computer literacy, agriculture knowledge, vocational skills, handicrafts, technology, and practical life skills. Daily meditation and value-based practices help nurture confidence, positivity, and emotional well-being.",
  "Since 2015, the school has consistently achieved a 100% Class 10 board examination result, while students continue to excel in state and departmental sports competitions. Many alumni now serve in government sectors including forestry, healthcare, agriculture, revenue, and education.",
  "Krushnakamal Aided Tribal Ashram School stands today as more than a school — it is a transformative force empowering tribal children, strengthening rural communities, and building a self-reliant future for generations to come.",
];

const krushnakamalStories = [
  {
    title: "Mr. Omprakash Harilal Jambekar, Agricultural Assistant Officer, Central Institute for Cotton Research, Nagpur",
    preview:
      "From a remote corner of the Dharni Ghat region to becoming an Agricultural Assistant Officer — Omprakash's story is a beacon of hope, resilience, and the transformative power of compassionate guidance.",
    image: omprakashImg,
    slug: "omprakash-jambekar-agriculture-officer",
  },
];

const krushnakamal = schoolsCat?.items.find(
  (i) => i.slug === "krushnakamal-adiwasi-anudanit-ashram-school-ner-pingalai-tq-morshi-dist-amravati"
);
if (krushnakamal) {
  krushnakamal.about = krushnakamalAbout;
  krushnakamal.successStories = krushnakamalStories;
  krushnakamal.image = krushnakamal3;
  krushnakamal.gallery = [krushnakamal1, krushnakamal2, krushnakamal3, krushnakamal4, krushnakamal5, krushnakamal6, krushnakamal7, krushnakamal8, krushnakamal9, krushnakamal10, krushnakamal11, krushnakamal12, krushnakamal13];
  krushnakamal.highlights = [];
}

const madanAbout: string[] = [
  "Madan Maharaj Vidyalaya, Fulamla (established in 1969) and Kamaldeep Junior College, Fulamla (established in 2002) are educational institutions that have emerged from the vision of the late leader Shri Dadasaheb Gavai. These institutions were established with the noble intention of providing educational opportunities to the students of rural and remote areas, where basic educational facilities and proper roads for commuting were lacking, in such a situation, to provide education to the poor and disadvantaged sections.",
  "Fulamla village is located at the end of Nandgaon Khandeshwar Taluka of Amravati district, near the district border. Earlier, this area lacked educational and other basic facilities. In such a situation, Dadasaheb Gavai, with the cooperation of local citizens, laid a strong foundation of education here. Due to his efforts, today a strong tradition of education has been created in this area.",
  "More than fifty years have passed since the establishment of Madan Maharaj Vidyalaya, and during this period the school has made continuous progress. Along with academic excellence, the school has also performed remarkably in various government competitions and initiatives. Students have participated in district and state level competitions and have often achieved remarkable ranks. In particular, by achieving district-level rankings twice in a row under the campaign \u201cMukhyamantri Majhi Shala Sundar Shala\u201d, the awards received have been effectively utilized for the physical and academic development of the school. This has made the school\u2019s infrastructure more efficient and provided a conducive and inspiring environment for the students.",
  "This institution offers education from class 5 to 12, and most of the students studying here are from ordinary and economically weak families. The school is continuously working to instill a love of education in such students and make them well-educated, responsible and capable citizens.",
  "Overall, Madan Maharaj Vidyalaya and Kamaldeep Junior College are not just educational institutions but also function as centers of social upliftment and educational advancement in rural areas.",
];

const madanStories = [
  {
    title: "Ms. Rajnandini Sandeep Naik, National-level Gold Medalist in Sikai Martial Art",
    preview:
      "From a Zilla Parishad school in her village to winning a national Gold Medal in Sikai Martial Art \u2014 Rajnandini\u2019s journey of courage, discipline and perseverance brought pride to her school, family and entire village.",
    image: madan5,
    slug: "rajnandini-naik-sikai-martial-art",
  },
];

const madan = schoolsCat?.items.find(
  (i) => i.slug === "madan-maharaj-vidyalaya-and-kamaldeep-junior-college-fulamla-tq-nandgaon-kh-dist"
);
if (madan) {
  madan.about = madanAbout;
  madan.successStories = madanStories;
  madan.image = madan1;
  madan.gallery = [madan1, madan2, madan3, madan4, madan5];
  madan.highlights = [];
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
