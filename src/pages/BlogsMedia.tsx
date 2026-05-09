import { Link, useParams } from "react-router-dom";
import Layout from "@/components/site/Layout";
import { ArrowLeft } from "lucide-react";

import fallbackImg from "@/assets/initiative-education.jpg";

const stories = [
  {
    slug: "atish-tayde-drdo",
    title: "Mr. Atish Tayde, Scientist, Defence Research and Development Organisation (DRDO)",
    image: fallbackImg,
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
    image: fallbackImg,
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
    image: fallbackImg,
    tagline:
      "A shining example of perseverance and passion, transforming dreams into reality.",
    paragraphs: [
      "Shri. Dadasaheb Gawai Vidyalaya, Malhara, has always been committed to nurturing not only academic excellence, but also talent in sports and co-curricular activities. Continuing this proud tradition, the school celebrates the outstanding achievement by one of its bright students, Ku. Shrawasti Tayde, who has brought national recognition to the institution.",
      "Shrawasti comes from a humble background, with her father working at the Achalpur Tahasil and her mother being a home-maker. With unwavering dedication, discipline, and relentless practice through an Association at Paratwada, Shrawasti excelled in Thang-Ta. Thang-Ta being a traditional martial art form originating from Manipur, Northeast India, specializing in armed combat using Thang (sword) and Ta (spear). She progressed from school-level competitions to the national stage, where she demonstrated exceptional skill, confidence, and sportsmanship. Her remarkable victory at the national-level championship stands as a proud milestone for both the school and the community, and reflects her strong determination and passion for the sport.",
      "This achievement is a testament to the school's commitment to holistic education and the encouragement provided by teachers and mentors who continuously inspire students to explore their potential in all fields. Shrawasti's journey is a shining example of perseverance and passion, motivating young minds to transform their dreams into reality.",
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

          <article className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-card grid md:grid-cols-[320px_1fr]">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full max-h-80 md:max-h-none object-cover"
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
