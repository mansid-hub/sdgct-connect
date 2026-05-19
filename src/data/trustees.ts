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
    name: "Dr. Mrs. KamalTai R. Gawai",
    designation: "Former President & Trustee | M.A., Ph.D., D.Litt.",
    summary:
      "Visionary founder of the trust, devoted to the upliftment of women, children and underprivileged communities across Vidarbha.",
    image: kamaltai,
    biography: [
      "Dr. Kamaltai R. Gawai, lovingly known as \"Aai,\" is a distinguished academician and social reformer whose work has significantly shaped the Trust's educational and social vision. She holds an M.A. in Political Science, a Ph.D., and a D.Litt., and served as Principal of Takshashila Mahavidyalaya, Amravati.",
      "She led the Trust as President from 1991 to 2015, overseeing a period of sustained growth that expanded its footprint from just two schools to over 40 schools and colleges across Vidarbha—bringing education within reach of over 10,000 students annually.",
      "Her work extends beyond academia into women's empowerment and rural development, with initiatives focused on addressing social challenges and expanding access to education. She is also a trustee of the Dr. Babasaheb Ambedkar Deekshabhoomi Smarak Samiti, Nagpur.",
      "Her commitment to environmental stewardship is reflected in her work with Kisan Nurseries and her expertise in horticulture and bonsai, for which she has received the Vrukshamitra and Krushi Mitra awards.",
      "Her contributions have been recognised with several honours, including the National Women Excellence Award (2025), Maharashtra State Life Achievement Award (2017), Savitribai Phule Award (2007), and the Sahitya Academy Award (1969).",
    ],
    contributions: [],
    achievements: [],
    message:
      "Service is the highest form of devotion. Our work will continue until every child, woman and family in our region lives with dignity and opportunity.",
  },
  {
    slug: "kirtitai-arjun",
    name: "Mrs. Kirtitai R. Arjun",
    designation: "President | BA, Amravati University & MBA, University of Mumbai",
    summary:
      "President of the trust, leading day-to-day programmes and championing women's empowerment and child welfare.",
    image: kirtitai,
    biography: [
      "Kirti Rajesh Arjun brings nearly three decades of experience in leadership development and institution building across corporate and social sectors. She founded Ascenders in 1996, an executive search firm that has worked with leading organisations such as Sun Pharma, Lupin, and Macleods to build senior leadership teams.",
      "Her early volunteer work with Akanksha, teaching children from low-income communities, shaped her commitment to grassroots education and social impact.",
      "Since assuming the role of President in 2017, she has led the Trust's expansion in both scale and scope—growing student outreach while spearheading initiatives in healthcare, medical education, and legal studies.",
      "She also founded the Bodhi Tree Foundation, which focuses on character and life-skill development for rural youth, particularly young women.",
      "Her combined experience across leadership, education, and social development guides the Trust's focus on holistic, long-term impact across rural Vidarbha.",
    ],
    contributions: [],
    achievements: [],
    message:
      "When you empower a woman, you uplift an entire family. Our trust exists to make sure no woman or child is left behind.",
  },
  {
    slug: "dharam-arjun",
    name: "Mr. Dharam Rajesh Arjun",
    designation: "Vice-President | B.Tech (IT), Symbiosis Institute of Technology & MBA, IIM Udaipur",
    summary:
      "Vice-President of the trust, driving youth engagement, technology adoption and modern outreach programmes.",
    image: dharam,
    biography: [
      "Dharam Arjun brings a blend of grassroots experience and business execution to his role at the Trust. Early in his journey, he worked with Magic Bus, contributing on-ground to the development of community centres across underserved areas in Mumbai—shaping his understanding of grassroots challenges and scalable interventions.",
      "He went on to spend three years at Zomato, where he played a key role in sales and market development across Mumbai and Pune, driving growth in fast-paced, competitive environments.",
      "As Director at Ascenders Consultants, he works with organisations across sectors including pharma, IT, and consumer to build senior leadership teams.",
      "Within the Trust, he leads the development of technical education, medical education, and healthcare—focusing on improving quality, building external partnerships, and strengthening systems for long-term, sustainable impact across rural Vidarbha.",
    ],
    contributions: [],
    achievements: [],
    message:
      "The next generation is our greatest asset. We must equip them with skills, opportunities and the courage to lead change.",
  },
  {
    slug: "rajesh-arjun",
    name: "Mr. Rajesh Arjun",
    designation: "Treasurer | IIT Delhi & IIM Ahmedabad",
    summary:
      "Treasurer of the trust, safeguarding finances and ensuring transparent stewardship of every contribution received.",
    image: rajesh,
    biography: [
      "Rajesh Arjun brings over four decades of experience in building and scaling institutions across technology and education. An alumnus of IIT Delhi and IIM Ahmedabad, he began his career by founding Software Engineers & Consultants, one of India's early multi-city IT services firms, working with clients such as HUL, Gammon, and Mahindra during the formative years of the industry.",
      "He later founded Arjun International, an overseas education consultancy that, over two decades, helped hundreds of students secure admissions to leading universities in the United States. He also taught Verbal English and Critical Reasoning, mentoring students through competitive entrance processes.",
      "This blend of operational rigor and education-focused experience shapes his role as Treasurer, where he drives financial discipline, strengthens governance, and ensures effective deployment of resources across the Trust's education and healthcare initiatives in rural Vidarbha.",
    ],
    contributions: [],
    achievements: [],
    message:
      "Every contribution carries someone's faith. We treat that faith as the most precious thing this trust holds.",
  },
  {
    slug: "karan-arjun",
    name: "Mr. Karan Rajesh Arjun",
    designation: "Trustee | B.Com, University of Mumbai & SIPA, Columbia University",
    summary:
      "Trustee championing education, scholarships and capacity-building for first-generation learners across Vidarbha.",
    image: karan,
    biography: [
      "Karan Arjun is a strategy consultant at Kearney, working on complex, high-impact problems across industries with a focus on structured thinking and long-term value creation. Based in New York, he operates at the intersection of global business, policy, and strategy.",
      "His academic grounding in international affairs, combined with consulting experience, brings a global perspective to the Trust's work.",
    ],
    contributions: [],
    achievements: [],
    message:
      "Education is the surest path out of poverty. Our scholarships are not charity — they are an investment in tomorrow's leaders.",
  },
  {
    slug: "rajendra-gawai",
    name: "Dr. Rajendra R. Gawai",
    designation: "Trustee | MBBS, Government Medical College, Nagpur University",
    summary:
      "Trustee leading healthcare initiatives, rural medical camps and preventive-care programmes for vulnerable communities.",
    image: rajendra,
    biography: [
      "Dr. Rajendra R. Gawai is a medical professional with a strong commitment to community health and public service. He holds an MBBS from Government Medical College, Nagpur University.",
      "He also serves as Secretary of the Dr. Babasaheb Ambedkar Deeksha Bhoomi Smarak Samiti, Nagpur. His experience in healthcare and institutional roles supports the Trust's efforts to strengthen accessible, community-focused healthcare across rural Vidarbha.",
    ],
    contributions: [],
    achievements: [],
    message:
      "Health is the foundation everything else is built on. We bring care to the doorstep of those who would otherwise be left behind.",
  },
  {
    slug: "kamlakar-payas",
    name: "Dr. Kamlakar P. Payas",
    designation: "Secretary | Ph.D., Amravati University",
    summary:
      "Secretary of the trust, ensuring smooth operations, governance and meticulous execution of every initiative.",
    image: kamlakar,
    biography: [
      "Dr. Kamlakar P. Payas is an academician and researcher with over two decades of experience in higher education. He serves as Principal and Head of the Marathi Department at Takshashila Mahavidyalaya, Amravati, and has published over 20 research papers in national and international journals. He is also a member of the Language Study Board at Sant Gadge Baba Amravati University.",
      "His academic work is complemented by a strong commitment to institutional growth and educational quality. As Secretary of Shri Dadasaheb Gawai Charitable Trust, he has played a key role in expanding the Trust's higher education footprint, including the establishment of Takshashila Ayurvedic Hospital and College and Takshashila Law College.",
      "He has also been instrumental in ensuring that all higher education institutions under the Trust are accredited by NAAC, strengthening academic standards and governance.",
    ],
    contributions: [],
    achievements: [],
    message:
      "Good intentions become real impact only through disciplined execution. That is the work we owe every beneficiary and every donor.",
  },
];

export const getTrustee = (slug: string) =>
  trustees.find((t) => t.slug === slug);