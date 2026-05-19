import { Link, useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import InstitutionGallery from "@/components/site/InstitutionGallery";
import { ArrowLeft } from "lucide-react";

import fallbackImg from "@/assets/initiative-education.jpg";
import jaiGuptaImg from "@/assets/jai-gupta.jpeg";
import pallaviSadanshivImg from "@/assets/pallavi-sadanshiv.jpeg";
import matoshriRamabai1 from "@/assets/matoshri-ramabai-1.jpg";
import matoshriRamabai3 from "@/assets/matoshri-ramabai-3.jpg";
import uddeshBhartiProfile from "@/assets/uddesh-bharti-profile.jpg";
import uddeshBhartiPoster from "@/assets/uddesh-bharti-poster.jpg";
import kalyaniDongreProfile from "@/assets/kalyani-dongre-profile.jpg";
import kalyaniDongrePoster from "@/assets/kalyani-dongre-poster.jpg";
import santGadge1 from "@/assets/sant-gadge-1.jpg";
import israilLaluwaleProfile from "@/assets/israil-laluwale-profile.jpg";
import lotus6 from "@/assets/lotus-6.jpg";
import bhaktiChaudharyProfile from "@/assets/bhakti-chaudhary-profile.jpg";
import bhaktiChaudharyPoster from "@/assets/bhakti-chaudhary-poster.jpg";
import bhaktiChaudharyCm from "@/assets/bhakti-chaudhary-cm.jpg";
import bhaktiChaudharyPractice from "@/assets/bhakti-chaudhary-practice.jpg";
import kanchanSolankeProfile from "@/assets/kanchan-solanke-profile.jpg";
import kanchanSolankePoster from "@/assets/kanchan-solanke-poster.jpg";
import kanchanSolankeMinigolf from "@/assets/kanchan-solanke-minigolf.jpg";
import kanchanSolankeFencing from "@/assets/kanchan-solanke-fencing.jpg";
import lotus7 from "@/assets/lotus-7.jpg";
import atishImg from "@/assets/success-atish-tayde.png";
import vaishaliImg from "@/assets/success-vaishali-hiwrale.png";
import shrawastiImg from "@/assets/success-shrawasti-tayde.png";
import pravinImg from "@/assets/success-pravin-waghmare.jpeg";
import pravinImg3 from "@/assets/success-pravin-waghmare-3.jpeg";
import devanandImg from "@/assets/success-devanand-shende.png";
import devanandImg2 from "@/assets/success-devanand-shende-2.png";
import omprakashImg from "@/assets/success-omprakash-jambekar.jpg";
import omprakashImg2 from "@/assets/success-omprakash-jambekar-2.jpg";
import omprakashImg3 from "@/assets/success-omprakash-jambekar-3.jpg";
import rajnandiniGroup from "@/assets/success-rajnandini-group.jpg";
import rajnandiniCert from "@/assets/success-rajnandini-certificate.jpg";
import rajnandiniNaik from "@/assets/success-rajnandini-naik.jpg";
import rajnandiniSandeepNaik from "@/assets/success-rajnandini-sandeep-naik.jpg";
import mahatma2 from "@/assets/mahatma-2.jpg";
import ankitProfileCard from "@/assets/ankit-profile-card.jpg";
import mahatma1 from "@/assets/mahatma-1.jpg";
import mahatma3 from "@/assets/mahatma-3.jpg";
import takshashilaCollege1 from "@/assets/takshashila-college-1.jpg";

const stories = [
  {
    slug: "rajnandini-naik-sikai-martial-art",
    title: "Ms. Rajnandini Sandeep Naik, National-level Gold Medalist in Sikai Martial Art",
    image: rajnandiniSandeepNaik,
    gallery: [rajnandiniGroup, rajnandiniNaik, rajnandiniCert],
    tagline:
      "A national Gold Medalist in Sikai Martial Art \u2014 a story of courage, discipline and perseverance against all odds.",
    paragraphs: [
      "Rajnandini Sandeep Naik is a remarkable example of courage, determination, and the power of perseverance. A student of Madan Maharaj Vidyalaya and Kamaldeep Junior College, Rajnandini began her educational journey in the modest surroundings of her village\u2019s Zilla Parishad school. Coming from a financially struggling family, with parents who earn their livelihood by working in others' fields on a daily basis, she faced numerous hardships from an early age, yet her spirit to rise above challenges never weakened.",
      "Alongside her studies, Rajnandini nurtured a deep passion for sports and dreamed of achieving something extraordinary. Her life took a transformative turn after joining Madan Maharaj Vidyalaya, where her talent and determination were recognized by her sports mentor, Vidhale Sir. Under his guidance, she discovered her true calling in Sikai Martial Art, an ancient, traditional sword-based martial art from Kashmir that emphasizes speed, agility, and self-defense.",
      "Despite limited access to equipment and training facilities, Rajnandini refused to let circumstances define her future. She practiced tirelessly every day after school, displaying exceptional discipline, resilience, and dedication. Her hard work soon began to shine through as she achieved success at taluka, district, and state-level competitions.",
      "In 2024, Rajnandini\u2019s relentless efforts culminated in a proud and historic achievement when she won the Gold Medal in Sikai Martial Art at the national-level championship. Her victory brought immense pride not only to her school and family, but to her entire village.",
      "An excellent student and an inspiration to her peers, Rajnandini Sandeep Naik dreams of representing India on the international stage. Her journey stands as a powerful reminder that with determination, guidance, and unwavering self-belief, no obstacle is too great to overcome.",
    ],
  },
  {
    slug: "omprakash-jambekar-agriculture-officer",
    title: "Mr. Omprakash Harilal Jambekar, Agricultural Assistant Officer, Central Institute for Cotton Research, Nagpur",
    image: omprakashImg,
    gallery: [omprakashImg, omprakashImg2, omprakashImg3],
    tagline:
      "A beacon of hope for an entire community — overcoming adversity, rebuilding self-confidence, and proving that determination, guidance, and compassion can transform a life.",
    paragraphs: [
      "This is not merely the story of one student's achievement, but a beacon of hope for an entire community — a story of overcoming adversity, rebuilding self-confidence, and proving that with determination, guidance, and compassion, one's life can truly be transformed.",
      "From a remote corner of the Dharni Ghat region emerged a young boy whose parents worked tirelessly as laborers, struggling every day simply to provide food for the family. Their home was a fragile mud-and-wattle hut, built with whatever little they had. There were days when even two proper meals seemed impossible. The distance between his village and school was nearly 190 kilometers. Even today, many parts of his area have no proper roads, no healthcare facilities, no mobile network, and only the most basic living amenities. Despite these hardships, Omprakash pursued his education at Krushnakamal Adiwasi Anudanit Ashram School, Ner Pingalai, from Class 3 to 10. However, years of poverty, emotional stress, and social pressure deeply affected him. He developed a severe stammer, lost confidence, and began questioning his future. Hurtful remarks from villagers and classmates pushed him further into self-doubt.",
      "Just when life seemed overwhelmed by darkness, the teachers and staff of Krushnakamal Ashram School became his guiding light — they became his family. They believed in him when he had stopped believing in himself. Through personal counseling, meditation, disciplined routines, public speaking practice, and constant encouragement, they helped him slowly rebuild his confidence. For five years, they stood beside him unwaveringly. Slowly, transformation began and Omprakash started gaining control over his speech. Every day, he reminded himself: \u201cI will not give up. I will change. I will win.\u201d His perseverance finally bore fruit when he secured first rank in his school in Class 10 during the 2016\u201317 academic year. Today, Omprakash proudly serves as an Agricultural Assistant Officer at the Central Institute for Cotton Research, Nagpur.",
      "That achievement was not merely a personal success. It was a moment of pride for his struggling parents, for every teacher who stood beside him, for the school that nurtured him, and for the entire community that witnessed his transformation. Today, he lives with dignity, happiness, and hope for an even more promising future. His story is a reminder that even the darkest struggles can lead to the brightest victories.",
    ],
  },
  {
    slug: "devanand-shende-teacher",
    title: "Mr. Devanand Suresh Shende, Teacher at Dr. Babasaheb Ambedkar Marathi Primary School",
    image: devanandImg,
    gallery: [devanandImg, devanandImg2],
    tagline:
      "From a daily wage laborer's son to an educator shaping young minds — a cornerstone of educational empowerment.",
    paragraphs: [
      "Devanand Suresh Shende was a student at the Dr. Babasaheb Ambedkar Marathi Primary School, back in 1998. The distance between his home and the school was 5 kilometers, which he would travel by foot, come rain or storm, or in this case, in the scorching Amravati heat. Hailing from an extremely impoverished background, his parents worked as daily wage laborers; where neither his mother nor his father had received any formal education. His household consisted of a family of six; himself and his three sisters, along with his parents.",
      "From a very young age, he harbored a firm resolve to become a teacher. However, his family could not provide financial support for his education. To fund his studies, he worked the night shift at a blood bank and attended college during the day. Despite these arduous circumstances, he persevered in his academic pursuits. He successfully completed his higher education at Takshashila College, run by the same Dadasaheb Gawai Trust that supported his school, and graduated with a M.A. in D.T.Ed.",
      "Today, the very corridors through which Devanand once walked with dreams in his eyes now echo with his words of wisdom as a teacher. His journey stands as a living testament that circumstances may delay success, but they can never defeat a person whose resolve is stronger than adversity.",
    ],
  },
  {
    slug: "pravin-waghmare-actor",
    title: "Mr. Pravin Prabhakar Waghmare, Actor & Artist",
    image: pravinImg,
    gallery: [pravinImg, pravinImg3],
    tagline: "An Artist Forged in Struggle (संघर्षातून उभा राहिलेला कलाकार)",
    paragraphs: [
      "A student named Pravin Prabhakar Waghmare once studied at Dr. Babasaheb Ambedkar Vidyalaya, located in the Fraizarpura locality of Amravati. He wore simple clothes, went barefoot, and carried an innocent smile on his face, yet his eyes held dreams of great magnitude. However, his family's financial circumstances were extremely dire. Pravin's father worked as a daily wage laborer, while Pravin himself would often tend to goats or take up odd jobs to contribute to the household income. Consequently, school was not a daily routine for him. Two days of school and four days of manual labor, that was how his life was unfolding.",
      "One day, the teacher was conducting a lesson in the classroom. Suddenly, the sound of a cat meowing came from the back bench. All the students burst into laughter. The teacher looked back angrily, only to find Pravin sitting there quietly. A short while later came the sound of a dog barking, followed by the bleating of a goat, the entire class was rolling with laughter.",
      "The teacher called him forward and asked, \"Did you make those sounds?\" Pravin replied fearfully, \"Yes, Sir... but I was just joking.\" However, there was no anger on the teacher's face—only astonishment. \"Why, this is truly a talent of yours!\" From that day on, the teacher recognized the artist within him. He encouraged Pravin to participate in competitions involving drama, dance, elocution, and acting. Initially, Pravin would feel nervous; but the moment he stepped onto the stage, the entire audience would be spellbound.",
      "Once, during the school's children's theater competition, he played the role of an elderly man. His performance was so lifelike that even the judges were left astounded. He won first prize. He took the prize money home and placed it in his mother's hands. Tears welled up in his mother's eyes. \"My child, today, for the very first time, your art has brought joy into our home.\" That day proved to be a turning point in Pravin's life.",
      "He was selected to participate in state-level competitions. From the small stages of Amravati, he made a direct leap into the vast world of Mumbai. He earned a name for himself as a street performer. Later, he won the hearts of the audience with his acting in the comedy show \"One Tappa Out,\" broadcast on a Marathi television channel. Upon witnessing his performance, the renowned comedian Johnny Lever praised him, remarking, \"This boy is destined to go very far.\"",
      "Today, Pravin works alongside prominent artists in Marathi plays, films, and commercials. Yet, whenever someone asks him, \"Who is the force behind your success?\" He says with pride, \"My school recognized the artist within me. Had it not been for Dr. Babasaheb Ambedkar Vidyalaya, the Pravin of today would not have been shaped.\"",
    ],
  },
  {
    slug: "atish-tayde-drdo",
    title: "Mr. Atish Tayde, Scientist, Defence Research and Development Organisation (DRDO)",
    image: atishImg,
    tagline:
      "From struggle to success, his journey teaches us that hard work and determination can turn dreams into reality.",
    paragraphs: [
      "Atish Tayde, an esteemed alumnus of Shri. Dadasaheb Gawai Vidyalaya, Malhara, has emerged as a shining example of perseverance, dedication, and excellence. Born into an economically weaker family in Malhara village, he faced numerous challenges during his early years, including limited resources and difficult study conditions. Yet, his determination and passion for learning never wavered.",
      "Known for his discipline, sincerity, and keen interest in science, Atish consistently excelled in academics with the guidance and encouragement of his teachers. The strong values and education imparted by the school laid the foundation for his inspiring journey.",
      "Through relentless hard work, he pursued Mechanical Engineering at Government College of Engineering, Amravati, and later achieved the prestigious position of Scientist at Defence Research and Development Organisation (DRDO), contributing to the nation's defense research and innovation.",
      "His remarkable journey from a humble rural background to serving the nation as a scientist is a source of immense pride for his family, the school, and an inspiration for students, especially those from underprivileged backgrounds. Mr. Atish Tayde's success proves that with determination, honesty, and the right guidance, no dream is beyond reach.",
    ],
  },
  {
    slug: "vaishali-hiwrale-police",
    title: "Ms. Vaishali Hiwrale, Maharashtra Police",
    image: vaishaliImg,
    tagline:
      "Rising above financial struggles and social limitations to serve with courage and integrity.",
    paragraphs: [
      "In the field of law and order, Vaishali Hiwrale has earned a respected position in the Maharashtra Police. Coming from a humble farming family with severe financial challenges, Vaishali Hiwrale has emerged as a shining example of determination, resilience, and hard work. Both her parents worked as daily wage labourers on farms, striving tirelessly to support the family despite limited means. In the face of economic hardship, Vaishali remained deeply committed to her education and her dream of serving society through the police force.",
      "During her school years, at Shri. Dadasaheb Gawai Vidyalaya, Malhara, Vaishali was known for her discipline, sincerity, strong moral values, and unwavering focus toward her goals. Despite balancing studies with personal and family responsibilities, she worked relentlessly to prepare for the competitive examinations and rigorous physical training required for recruitment into the Maharashtra Police. Her journey was not easy, but her perseverance and courage enabled her to overcome every obstacle that came her way.",
      "Vaishali's achievement stands as a powerful testimony to the transformative impact of education, determination, and the support of dedicated teachers and family encouragement. Rising above financial struggles and social limitations, she has earned a respected position in the Maharashtra Police, making her family, school, and community immensely proud.",
      "Today, Vaishali serves as an inspiration for countless students, especially girls from rural and underprivileged backgrounds, proving that no dream is beyond reach when pursued with dedication and self-belief. Her commitment to maintaining law, justice, and public service reflects the values of courage, integrity, and responsibility that her school strives to instill in every student. The institution takes great pride in her success and wishes for her continued strength and excellence in serving society and the nation.",
    ],
  },
  {
    slug: "shrawasti-tayde-thang-ta",
    title: "Ms. Shrawasti Dipak Tayde, National-level Bronze Medalist in Thang-Ta Martial Art",
    image: shrawastiImg,
    tagline:
      "A shining example of perseverance and passion, transforming dreams into reality.",
    paragraphs: [
      "Shri. Dadasaheb Gawai Vidyalaya, Malhara, has always been committed to nurturing not only academic excellence, but also talent in sports and co-curricular activities. Continuing this proud tradition, the school celebrates the outstanding achievement by one of its bright students, Ku. Shrawasti Tayde, who has brought national recognition to the institution.",
      "Shrawasti comes from a humble background, with her father working at the Achalpur Tahasil and her mother being a home-maker. With unwavering dedication, discipline, and relentless practice through an Association at Paratwada, Shrawasti excelled in Thang-Ta. Thang-Ta being a traditional martial art form originating from Manipur, Northeast India, specializing in armed combat using Thang (sword) and Ta (spear). She progressed from school-level competitions to the national stage, where she demonstrated exceptional skill, confidence, and sportsmanship. Her remarkable victory at the national-level championship stands as a proud milestone for both the school and the community, and reflects her strong determination and passion for the sport.",
      "This achievement is a testament to the school's commitment to holistic education and the encouragement provided by teachers and mentors who continuously inspire students to explore their potential in all fields. Shrawasti's journey is a shining example of perseverance and passion, motivating young minds to transform their dreams into reality.",
    ],
  },
  {
    slug: "ankit-junghare-livestock-supervisor",
    title: "Mr. Ankit Prafull Junghare, Livestock Supervisor, Department of Animal Husbandry",
    image: ankitProfileCard,
    gallery: [],
    tagline:
      "A moving story of resilience, sacrifice and the transformative power of education \u2014 anchored by a mother's strength and teachers who never gave up on him.",
    paragraphs: [
      "Ankit Prafull Junghare's journey is a moving story of resilience, sacrifice, and the transformative power of education. An alumnus of Mahatma Jyotiba Phule Vidyalaya, Vihigaon, Ankit now serves as a Livestock Supervisor in the Department of Animal Husbandry. But behind this achievement lies a childhood marked by financial hardship, uncertainty, and countless struggles.",
      "During the most difficult phase of his life, when the future seemed hopeless, his school became his ray of hope. More than academic knowledge, his teachers became mentors who recognized his potential, encouraged him to rise after every setback, and taught him never to give up.",
      "Behind his success stands another pillar of strength \u2014 his mother. Despite immense hardships and personal sacrifices, she never allowed his education to stop. Setting aside her own needs, she fought tirelessly to ensure her son could dream beyond his circumstances. Her sacrifices and unwavering faith became the foundation of Ankit's perseverance.",
      "Reflecting on his journey, Ankit says, \u201cWhen I possessed nothing else, my school gave me the gift of faith in myself.\u201d Today, he proudly credits his achievements to his mother's sacrifices and the values instilled by his school. His story continues to inspire students to overcome adversity with determination, self-belief, and hope. With immense gratitude and pride, he declares, \u201cAnd for the rest of my life, I will proudly declare: \u2018I am a student of this school!\u2019\u201d",
    ],
  },
  {
    slug: "pallavi-sadanshiv-psi",
    title: "Ms. Pallavi A. Sadanshiv, Police Sub-Inspector, Maharashtra Police",
    image: pallaviSadanshivImg,
    gallery: [],
    tagline:
      "An inspiring journey from a farming background to Computer Science to Police Sub-Inspector.",
    paragraphs: [
      "The story of Ms. Pallavi Arun Sadashiv is a role model of determination and self-belief. Born into a humble farming family, Pallavi grew up understanding the value of perseverance and dedication from an early age. She completed her primary education at Zilla Parishad Primary School, Gaurkheda Kumbhi, and later pursued her studies from Classes 8 to 10 at Matoshri Gangadevi Lulla Vidyalaya, Gaurkheda Kumbhi. After successfully passing Class 10, she chose the Science stream at Matoshri Gangadevi Lulla Vidyalaya Junior College and completed her higher secondary education despite facing severe financial difficulties.",
      "Pallavi continued her academic journey by earning a degree in Computer Science from Hanuman Vyayam Prasarak College of Engineering. To support her education and manage the high fees, she worked alongside her studies with unwavering determination. Even after graduation, uncertainty about her future and financial limitations stood before her as major challenges.",
      "However, instead of giving up, Pallavi decided to prepare for competitive examinations. Unable to afford coaching classes, she relied entirely on self-study and disciplined preparation from 2018 to 2020. Her hard work and perseverance paid off when she successfully cleared the Maharashtra State Commission Examination for the Non-Gazetted Group B category and achieved the prestigious post of Police Sub-Inspector (PSI).",
      "Pallavi credits her success to the constant support of her parents and teachers, whose guidance and encouragement shaped her journey. Today, she stands as an inspiration for countless students, proving that no obstacle is greater than determination, courage, and faith in oneself.",
    ],
  },
  {
    slug: "jai-gupta-atya-patya",
    title: "Mr. Jai Sachin Gupta, National-level Bronze Medalist in Atya-Patya",
    image: jaiGuptaImg,
    gallery: [],
    tagline: "A Journey of Passion, Persistence, and Sporting Excellence.",
    paragraphs: [
      "Jai Sachin Gupta's journey is a powerful reflection of how dedication and passion can turn ordinary beginnings into extraordinary achievements. Raised in a modest family, Jai completed his primary education at Zilla Parishad Primary School, Paratwada, and continued his schooling there up to Class 10. Later, he pursued Science at Matoshri Gangadevi Lulla Vidyalaya Junior College and successfully completed his higher secondary education.",
      "Life was not easy for Jai. Limited resources and daily struggles were a part of his routine. Travelling several kilometers by bicycle every day, he continued his studies without complaint or discouragement. Alongside academics, Jai nurtured a deep love for the traditional sport of Atya-Patya.",
      "Although he could not afford professional training or sports club facilities, he refused to let circumstances stand in the way of his dreams. With strong willpower and relentless practice on the college playground, Jai steadily sharpened his skills. The encouragement and guidance provided by his teachers and college staff became a major source of motivation in his sporting journey. His consistent efforts soon brought remarkable recognition. During the academic years 2024\u201325 and 2025\u201326, Jai represented his institution at the District, Division, State, and National levels in Atya-Patya. One of the proudest moments of his career came when he participated in the 35th Boys and Girls Junior Atya-Patya National Championship, organized by the Tamil Nadu Atya-Patya Federation, where he secured Third Place at the national level.",
      "Jai believes that his achievements are the result of the constant encouragement of his father, family, and teachers. His story serves as an inspiration to young students, proving that commitment, focus, and hard work can lead to success, regardless of the challenges one faces in life.",
    ],
  },
  {
    slug: "uddesh-bharti-chef-miami",
    title: "Mr. Uddesh Sukhdev Bharti, International Chef, Miami USA",
    image: uddeshBhartiProfile,
    gallery: [uddeshBhartiPoster],
    tagline:
      "From Humble Beginnings to Global Heights (\u0906\u092e\u091a\u093e \u0909\u0926\u094d\u0926\u0947\u0936 \u0925\u0947\u091f \u092a\u094b\u0939\u091a\u0932\u093e USA (Miami) \u092a\u0930\u0926\u0947\u0936\u093e\u0924)",
    paragraphs: [
      "\u201cCircumstances do not define your destiny; your determination does.\u201d This sentiment is perfectly personified by Uddesh Sukhdev Bharti, a brilliant and distinguished alumnus of Matoshree Ramabai Ambedkar Vidyalaya, Shyam Nagar, Amravati. Today, as we look at his global success, his transition from an underprivileged student to an international Chef, is nothing short of extraordinary.",
      "Uddesh's path was paved with challenges. Coming from a family where his parents earned a living through manual labor, resources were scarce but dreams were plenty. He inherited a legacy of excellence from his elder brother\u2014also an alumnus of the same school\u2014who is currently a successful Engineer in Pune. Following in those footsteps, Uddesh combined his natural intelligence with an unwavering work ethic. During his time at Matoshri Ramabai Ambedkar Vidyalaya, Uddesh was known not only for his handsome personality and sharp mind but also for his vibrant and restless energy. He channeled this spirit into his studies, overcoming severe financial hardships to clear his Grade 10 exams with flying colors.",
      "Uddesh's journey is a validation of the fact that no obstacle is too great for a willing heart. Breaking through every barrier, he took a giant leap from the streets of Amravati to the global stage. He is currently working as an exemplary Chef in the vibrant city of Miami, USA. By mastering the culinary arts, he turned his passion into a professional triumph on foreign soil.",
      "He has proven that grit and perseverance can bridge the gap between a small town in Maharashtra and the luxury kitchens of America. By reaching the pinnacle of success, Uddesh has added a \u201cfeather of honor\u201d to the cap of his alma mater. He stands as a shining example for every student, proving that your background does not limit your future.",
    ],
  },
  {
    slug: "kalyani-dongre-nmms-scholarship",
    title: "Ms. Kalyani Dongre, Recipient of National Means-cum-Merit Scholarship",
    image: kalyaniDongreProfile,
    gallery: [kalyaniDongrePoster],
    tagline:
      "Hard work, perseverance and self-belief paving the way to success.",
    paragraphs: [
      "Matoshri Ramabai Ambedkar Vidyalaya, Shyam Nagar, Amravati proudly celebrates the inspiring success of Ku. Kalyani Pravin Dongre, a Class 8 student whose journey reflects determination, resilience, and academic excellence. Kalyani joined the school in the academic year 2022\u201323 in Class 5 and, despite coming from a financially challenged background, consistently excelled in academics and co-curricular competitions, securing top positions through her hard work and dedication.",
      "Born into a family of daily wage laborers, Kalyani faced severe economic hardships and lacked many basic comforts. However, she refused to let adversity limit her dreams. With unwavering determination, continuous support from her parents, and dedicated guidance from her teachers through special coaching sessions, she appeared for the National Means-cum-Merit Scholarship (NMMS) Examination in Class 8 and achieved remarkable success.",
      "Kalyani qualified for the prestigious NMMS Scholarship, earning financial assistance of \u20b948,000 for her future education. Her achievement is not only a personal milestone, but also a proud moment for the entire school community. Her story stands as a powerful inspiration for students everywhere, proving that hard work, perseverance, and self-belief can overcome even the greatest challenges.",
      "Matoshri Ramabai Ambedkar Vidyalaya takes immense pride in Kalyani's achievement and wishes her continued success in all her future endeavors. Her journey truly proves that hard work paves the way to success.",
    ],
  },
  {
    slug: "israil-laluwale-srpf",
    title: "Mr. Israil Hasan Laluwale, SRPF (State Reserve Police Force)",
    image: israilLaluwaleProfile,
    gallery: [],
    tagline:
      "A remarkable example of perseverance and determination — proving that patience, self-belief and commitment can overcome even the toughest circumstances.",
    paragraphs: [
      "Israil Hasan Laluwale's story is a remarkable example of perseverance and determination. A student of a Hindi-medium school since 2012, Israil came from a family facing severe financial hardship. His parents worked as daily wage laborers; consequently, the household was constantly plagued by financial hardship. They often had to struggle even to provide for their basic meals. Despite these arduous circumstances, he would take up odd jobs to assist his parents.",
      "In the face of such difficulties, he never abandoned his studies. He continued to study with unwavering dedication. His hard work and perseverance eventually paid off, and he passed his 12th-grade examinations with excellent marks.",
      "Driven by a dream to secure a better future, Israil began preparing for police recruitment. Every day, he trained rigorously, balancing physical preparation with academics. Although he faced failure on several occasions, he refused to give up.",
      "His persistence finally paid off in 2025 when he was selected for the State Reserve Police Force (SRPF), fulfilling the biggest dream of his life, which now became a reality. This achievement brought immense joy and pride to his family after years of struggle and sacrifice.",
      "Israil's journey serves as an inspiration to all students, proving that patience, self-belief, and commitment can overcome even the toughest circumstances.",
    ],
  },
  {
    slug: "bhakti-chaudhary-sepak-takraw",
    title: "Ms. Bhakti Gajanan Chaudhary, National-level Silver Medalist in Sepak Takraw & Recipient of Dr. Panjabrao Krida Puraskar",
    image: bhaktiChaudharyProfile,
    gallery: [bhaktiChaudharyPoster, bhaktiChaudharyCm, bhaktiChaudharyPractice],
    tagline:
      "An uplifting illustration of zeal and enthusiasm — Bhakti's perseverance turned dreams into reality.",
    paragraphs: [
      "An uplifting illustration of zeal and enthusiasm is Bhakti Gajanan Chaudhari, a stellar student of Lotus English School and Science Junior College. She comes from a financially weak and underprivileged family. Her father works as a construction laborer to support the family, and despite severe financial difficulties, Bhakti never gave up on her education or her dream of excelling in sports.",
      "From a young age, Bhakti developed a strong passion for sports, especially Sepak Takraw. Along with regularly attending school, she balanced her studies and rigorous sports practice with great discipline and dedication. She practiced twice daily, often facing challenges such as financial limitations, lack of sports equipment, and other hardships. However, she remained focused on her goals and continued to work tirelessly.",
      "Her commitment brought remarkable success; wherein she won gold medals at the district and divisional levels; and earned silver medals at the state and national levels, bringing pride to her school, family, and city. For her outstanding contribution and achievements in sports, Bhakti was honored with the prestigious \u201cDr. Punjabrao Deshmukh Krida Award,\u201d which was presented to her by Maharashtra Chief Minister, Mr. Devendra Fadnavis, making it a proud and unforgettable moment in her life.",
      "Throughout her journey, her teachers continuously guided, supported, and encouraged her, strengthening her confidence and helping her overcome every obstacle. Bhakti's story is not only about medals and awards, but also about perseverance, discipline, and the courage to rise above difficult circumstances. Today, she stands as a true inspiration to students and young athletes, proving that perseverance can turn dreams into reality.",
    ],
  },
  {
    slug: "kanchan-solanke-mini-golf",
    title: "Ms. Kanchan Nandu Solanke, State-level Gold Medalist in Mini-Golf",
    image: kanchanSolankeProfile,
    gallery: [kanchanSolankePoster, kanchanSolankeMinigolf, kanchanSolankeFencing],
    tagline:
      "A remarkable journey of sincerity and dedication — from a humble village to a state-level Gold Medalist.",
    paragraphs: [
      "Kanchan Nandu Solanke's story is a remarkable journey of sincerity and dedication. She belongs to Kanjoli village in Dharni Taluka of Amravati district and was born into a humble and economically weak family. With one brother and three sisters, Kanchan grew up in financially difficult circumstances. Her parents are hardworking farmers who struggle every day to support their family. Despite their limited resources, they strongly believed that education was the most valuable gift they could give their children.",
      "From an early age, Kanchan was disciplined and determined to build a better future. To continue her education, she stayed away from home in the boarding facility of Lotus Hostel from Class 1 onward. Although staying away from her family was challenging, she never allowed hardships to weaken her dreams. The disciplined environment of the hostel, constant guidance from her teachers, and her own hard work helped shape her into a confident, independent, and responsible individual.",
      "Along with academics, Kanchan developed a deep interest in sports. She participated in fencing, Sepak Takraw, and mini golf, achieving remarkable success in all three. She performed excellently in fencing at the divisional level and advanced to the state-level competition. In Sepak Takraw, she displayed outstanding skill and commitment. Her greatest achievement came in mini golf, where she won a gold medal at the state-level championship, bringing pride to her school, family, and village.",
      "Kanchan's journey is not only about personal success, but also about hope, ambition, and the power of dreams. Despite coming from a poor rural family, she created her own identity through perseverance. Today, she stands as an inspiration to students striving to achieve something meaningful in life.",
    ],
  },
  {
    slug: "nandini-gawai-fencing",
    title:
      "Ms. Nandini Satish Gawai, National-level Athlete in Fencing, Yoga, and Minigolf",
    image: takshashilaCollege1,
    gallery: [],
    tagline:
      "From the dusty fields of Balegaon to national fencing competitions \u2014 a testament to the power of tenacity and sacrifice.",
    paragraphs: [
      "Success is not merely defined by the medals around one's neck, but by the distance traveled to reach the podium. For Nandini Satish Gawai, a young athlete from the village of Balegaon in Achalpur, the journey from a modest household to the national sporting arena is a testament to the power of \"Jidda\" (tenacity) and sacrifice.",
      "A Foundation of Hard Work: Growing up in a family where financial constraints were a daily reality, Nandini learned the value of labor early on. Her days were not spent in leisure but in balancing academic responsibilities with helping her mother in her daily chores. Despite the lack of resources and the constant pressure of poverty, her spirit remained unbroken. Nandini's parents and mentors provided the emotional backbone she needed, encouraging her to look beyond their current circumstances toward a brighter future through education and sports.",
      "The Turning Point \u2014 2024 and Beyond: The year 2024 marked a pivotal moment in her life. After clearing her 12th-grade examinations with a solid 76%, Nandini's focus shifted toward uplifting her family. She enrolled in Dr. Babasaheb Ambedkar College, an institution that would become the launchpad for her athletic career. It was on the college grounds where her journey truly accelerated. Starting her practice barefoot due to a lack of professional gear, she caught the eye of the college's Physical Education Director. Under professional guidance, she traded the struggles of the past for the discipline of Fencing.",
      "A Trail of Triumphs: Nandini's rise in the world of sports has been nothing short of meteoric. Excelling in multiple disciplines \u2014 Fencing, Yoga, and Minigolf \u2014 she has become a versatile national-level athlete. Her achievements include: Fencing Excellence \u2014 she earned her 1st University Colour Coat at Jammu University (2023\u201324), and by 2025\u201326 she achieved her 2nd Colour Coat and was honored with the Captainship of her team in Amritsar, Punjab. All India University Games \u2014 represented her university with distinction in Fencing, proving her mettle against the best in the country. Minigolf \u2014 secured 2nd Place at both the State and National levels in Nagpur (2025\u201326). Yoga \u2014 showcased her mental and physical poise by securing 3rd Place in International Yoga (2025) and competing at the HVPM National Yoga event (2026). Recognition \u2014 her consistent excellence earned her the prestigious National Star Award and the Star Sports Award in Panipat (2026).",
      "For Nandini, now a second-year B.A. student, true success is not her medals, but the inspiration she gives to children in her village to step onto the playground with confidence. Guided by Dr. Babasaheb Ambedkar's message, \"Educate, Organize, and Agitate,\" she views struggle not as a burden, but as the fuel that drives her to fulfill her ultimate dream of giving her parents a life of comfort and pride. Nandini's journey from the dusty fields of Balegaon to national fencing competitions proves that poverty and failure cannot stop those who have the will to work hard and the courage to fight.",
    ],
  },
  {
    slug: "gauri-khawale-archery",
    title: "Ms. Gauri Sunilrao Khawale, National-level Archer",
    image: takshashilaCollege1,
    gallery: [],
    tagline:
      "Behind every glinting medal lies a story of grit, sweat, and an unwavering spirit \u2014 carved out with the pull of a bowstring.",
    paragraphs: [
      "Behind every glinting medal lies a story of grit, sweat, and an unwavering spirit. For Gauri Sunilrao Khawale, a national-level archer from the small village of Yavali Shahid, success wasn't handed to her on a silver platter; she carved it out with the pull of a bowstring and the flight of an arrow.",
      "Small Beginnings, Big Dreams: Gauri's journey began in a modest household where resources were scarce, but dreams were plentiful. Growing up in a village, she harbored a deep passion for sports from a young age. However, archery is an expensive pursuit. The cost of professional equipment was a significant hurdle for her family's limited means. Recognizing her raw talent and fierce determination, Shakti Singh Dixit stepped in as a benefactor, helping her procure the necessary archery kit. This gesture wasn't just financial aid; it was the spark that ignited a professional fire.",
      "The Grind \u2014 Turning Toil into Technique: Gauri's routine became a testament to discipline. While most of the world slept, she was up at dawn, beginning a grueling schedule of 7 to 8 hours of daily practice. Through the scorching heat and physical exhaustion, she remained focused on the bullseye. She credits her resilience to her \"support system\" \u2014 her sister and her coaches, who stood by her during moments of doubt. Her journey proves that while an athlete stands alone on the field, they are carried there by the strength of their loved ones and mentors.",
      "The Rise to National Prominence: Gauri's hard work began to translate into silverware on the state and national stages. Her breakthrough came through a series of consistent performances \u2014 Senior State (Osmanabad): secured a prestigious Silver Medal, marking her arrival in the big leagues; Junior State (Warora): clinched a Bronze Medal, proving her consistency across age groups; Senior State (Kolhapur): added another Bronze Medal to her tally. Her prowess wasn't limited to state borders. Gauri represented her institution, Dr. Babasaheb Ambedkar College, at the highest levels of collegiate sports. She participated in the prestigious Khelo India University Games (Shillong) and competed in All India University tournaments across the country from Patiala (Punjab) and Bhatinda to Bhubaneswar (Odisha).",
      "Gauri, now a third-year B.A. student, successfully balances her studies with the demanding journey of being a national-level archer. She considers archery both her struggle and her path to empowerment. She believes that true dreams are the ones that inspire constant hard work and determination, no matter the challenges. Today, Gauri Khawale stands not just as a national archer, but as a beacon of hope for every village girl who dares to look at the stars and aim an arrow toward them. Her story reminds us that with the right aim, no target is too far.",
    ],
  },
];

const BlogsMedia = () => {
  const { slug } = useParams<{ slug?: string }>();

  if (slug) {
    const story = stories.find((s) => s.slug === slug);
    if (!story) {
      return (
        <Layout>
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold mb-4">Story not found</h1>
            <Link
              to="/media/blogs"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft size={16} /> Back to all stories
            </Link>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <Link
            to="/media/blogs"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline mb-8"
          >
            <ArrowLeft size={16} /> Back to all stories
          </Link>

          <article className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-card grid md:grid-cols-[360px_1fr]">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full max-h-80 md:max-h-none object-cover object-top"
            />
            <div className="p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
                {story.title}
              </h1>
              <p className="mt-3 text-sm italic text-accent">{story.tagline}</p>
              <div className="mt-5 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                {story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {"gallery" in story && Array.isArray((story as { gallery?: string[] }).gallery) && (
                <div className="mt-8">
                  <InstitutionGallery images={(story as { gallery: string[] }).gallery} name={story.title} />
                </div>
              )}
            </div>
          </article>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        {/* Heading */}
        <div className="max-w-2xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Success Stories</h1>
          <p className="text-muted-foreground">
            Inspiring journeys of our alumni who turned humble beginnings into remarkable achievements.
          </p>
        </div>

        {/* Story tiles */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <article
              key={index}
              className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-card grid md:grid-cols-[320px_1fr]"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full max-h-80 md:max-h-none object-cover"
              />
              <div className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-foreground leading-snug">
                  {story.title}
                </h2>
                <p className="mt-3 text-sm italic text-accent">{story.tagline}</p>
                <div className="mt-5 space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {story.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogsMedia;
