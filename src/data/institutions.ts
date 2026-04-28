export interface Institution {
  name: string;
  location?: string;
  website?: string;
}

export interface Category {
  slug: string;
  title: string;
  parent: "schools" | "colleges";
  description: string;
  items: Institution[];
}

export const categories: Category[] = [
  {
    slug: "granted-schools",
    title: "Granted Schools",
    parent: "schools",
    description: "Government-aided schools nurturing students across the Amravati region.",
    items: [
      { name: "Dr. Babasaheb Ambedkar Marathi Vidyalaya", location: "Frezarpura, Amravati", website: "https://instagram.com/dr_babasaheb_ambedkar_mv_amt/" },
      { name: "Madan Maharaj Vidyalaya", location: "Fulamla, Tq. Nandgaon (Kh.), Amravati" },
      { name: "Mahatma Jyotiba Fule Vidyalaya", location: "Vihigaon, Tq. Anjangaon Surji, Amravati", website: "https://mjfamt.org/" },
      { name: "Matoshri Ramabai Ambedkar Vidyalaya", location: "Shyam Nagar, Amravati", website: "https://schools.org.in/amravati/27071505604/matoshri-ramabai-ambedkar-vid.html" },
      { name: "Shri Dadasaheb Gawai Vidyalaya", location: "Malhara, Tq. Achalpur, Amravati" },
      { name: "Matoshri Gangadevi Lulla Vidyalaya", location: "Gaurkheda Kumbhi, Tq. Achalpur, Amravati" },
      { name: "Krushnakamal Adiwasi Ashram Shala", location: "Ner Pingalai, Tq. Morshi, Amravati" },
      { name: "Dr. Babasaheb Ambedkar Hindi Primary School", location: "Shyam Nagar, Amravati" },
      { name: "Sant Gadge Baba Hindi High School", location: "Shyam Nagar, Amravati" },
      { name: "Dr. Babasaheb Ambedkar Marathi Primary School", location: "Fraizarpura, Amravati" },
      { name: "Kamaljyot Marathi Primary and Middle School", location: "Navasari, Amravati" },
    ],
  },
  {
    slug: "non-granted-schools",
    title: "Non-Granted Schools",
    parent: "schools",
    description: "Self-financed schools delivering quality English-medium education.",
    items: [
      { name: "Lotus English School", location: "Shyam Nagar, Amravati" },
      { name: "Lotus English School", location: "Darapur, Tq. Daryapur, Amravati" },
      { name: "Lotus English Primary School", location: "Uttam Nagar, Amravati" },
      { name: "Lotus English Primary School", location: "Gaurkheda Kumbhi, Tq. Achalpur, Amravati" },
      { name: "Lotus English Primary School", location: "Vihigaon, Tq. Anjangaon Surji, Amravati" },
    ],
  },
  {
    slug: "granted-colleges",
    title: "Granted Colleges",
    parent: "colleges",
    description: "Government-aided senior colleges offering undergraduate and postgraduate programmes.",
    items: [
      { name: "Dr. Babasaheb Ambedkar Takshashila Mahavidyalaya", location: "Uttam Nagar, Amravati" },
      { name: "Takshashila Mahavidyalaya", location: "Shyam Nagar, Amravati" },
      { name: "Takshashila Mahavidyalaya", location: "Darapur, Tq. Daryapur, Amravati" },
    ],
  },
  {
    slug: "non-granted-colleges",
    title: "Non-Granted Colleges",
    parent: "colleges",
    description: "Self-financed colleges advancing specialised professional education.",
    items: [
      { name: "Takshashila Ayurvedic College, Hospital and Research Centre", location: "Kherda, Tq. Karanja, Dist. Washim" },
      { name: "Takshashila Institute of Pharmaceutical Education and Research", location: "Kherda, Tq. Karanja Lad, Washim" },
      { name: "Ramkrushna Shikshan Shastra Mahavidyalaya (B.Ed.)", location: "Uttam Nagar, Amravati" },
      { name: "Sau. Dr. Kamaltai Gawai Adhyapak Vidyalaya (D.Ed.)", location: "Darapur, Tq. Daryapur, Amravati" },
    ],
  },
  {
    slug: "granted-junior-colleges",
    title: "Granted Junior Colleges",
    parent: "colleges",
    description: "Government-aided junior colleges and MCVC vocational streams.",
    items: [
      { name: "Dr. Babasaheb Ambedkar Junior College", location: "Uttam Nagar, Amravati" },
      { name: "Takshashila Junior College", location: "Shyam Nagar, Amravati" },
      { name: "Ramkrushna Junior College", location: "Darapur, Amravati" },
      { name: "Kamaldeep Junior College", location: "Fulamla, Tq. Nandgaon Khandeshwar, Amravati" },
      { name: "Mahatma Jyotiba Fuley Junior College", location: "Vihigaon, Tq. Anjangaon Surji, Amravati" },
      { name: "Matoshri Gangadevi Lulla Junior College", location: "Gaurkheda Kumbhi, Tq. Achalpur, Amravati" },
      { name: "Matoshri Ramabai Ambedkar Junior College", location: "Shyam Nagar, Amravati" },
      { name: "Dr. Babasaheb Ambedkar MCVC", location: "Uttam Nagar, Amravati" },
      { name: "Takshashila MCVC", location: "Shyam Nagar, Amravati" },
      { name: "Ramkrushna MCVC", location: "Darapur, Tq. Daryapur, Amravati" },
      { name: "Matoshri Ramabai Ambedkar MCVC", location: "Shyam Nagar, Amravati" },
      { name: "Mahatma Jyotiba Fuley MCVC", location: "Vihigaon, Tq. Anjangaon Surji, Amravati" },
    ],
  },
  {
    slug: "technical-colleges",
    title: "Technical Colleges",
    parent: "colleges",
    description: "Senior-level engineering and technology institutes.",
    items: [
      { name: "Takshashila Institute of Engineering and Technology and Research Centre", location: "Darapur, Tq. Daryapur, Amravati" },
    ],
  },
  {
    slug: "polytechnics",
    title: "Polytechnics",
    parent: "colleges",
    description: "Diploma-level polytechnic institutes in engineering disciplines.",
    items: [
      { name: "Vikramshila Polytechnic", location: "Darapur, Tq. Daryapur, Amravati" },
      { name: "Takshashila Polytechnic College", location: "Uttam Nagar, Amravati" },
    ],
  },
  {
    slug: "iti",
    title: "ITI",
    parent: "colleges",
    description: "Industrial Training Institutes imparting hands-on vocational skills.",
    items: [
      { name: "Samrat Ashok Industrial Training Institute", location: "Darapur, Tq. Daryapur, Amravati" },
      { name: "Nalanda Industrial Training Institute", location: "Mogra, Post Bhankheda, Amravati" },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
