import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import { Quote, Sparkles } from "lucide-react";
import kamaltai from "@/assets/trustees/kamaltai.jpg";
import hero1 from "@/assets/hero-1.jpg";

const FoundersJourney = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="Founder's Journey"

        crumbs={[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Founder's Journey" }]}
      />

      {/* Shri Dadasaheb Gawai */}
      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={hero1}
            alt="Legacy of Shri Dadasaheb Gawai"
            loading="lazy"
            width={1600}
            height={1200}
            className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full"
          />
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Founder, Shri Dadasaheb Gawai Charitable Trust
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Late Shri R. S. Gawai (Dadasaheb)
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Born in the rural village of Darapur in Amravati, Shri R. S. Gavai dedicated his life to expanding 
                opportunities for underserved communities. Guided by the ideals of Dr. B. R. Ambedkar, he believed 
                that education was the most powerful instrument for social mobility, capable of transforming not 
                just individuals, but entire communities. This belief took shape through the establishment of 
                Shri Dadasaheb Gawai Charitable Trust. What began as a single school was rooted in a simple 
                conviction: that access to quality education should not depend on where one is born.
              </p>
              <p>
                Starting with modest beginnings, Shri Gavai focused on building institutions where they were 
                needed most—rural and often overlooked regions of Vidarbha. Over time, this effort grew into 
                a network of schools and colleges that today educate over 12,000 students annually across Vidarbha. 
                His work was deeply personal and community-driven. In his native village, he helped fulfil a long-standing
                aspiration by establishing an engineering college, bringing professional education within reach for local 
                students who would otherwise have had to migrate or forgo such opportunities altogether. For many families, 
                this access marked a turning point, enabling the first generation to pursue technical degrees and build new 
                pathways for economic mobility.
              </p>
              
             <p>
               Similarly, he initiated schools in remote villages where formal education had previously been inaccessible. 
               These institutions did more than provide classrooms; they opened doors for children to step into structured 
               learning environments for the first time, fundamentally altering life trajectories across communities. For 
               Shri Gavai, education extended beyond academics. He saw it as a means to build confidence, self-reliance, 
               and a sense of agency. The institutions he established were designed not just to teach, but to enable individuals 
               to navigate a changing world with dignity and purpose. He also  recognised that barriers to progress were often 
               interconnected. His work therefore reflected a broader understanding of community development supporting not only 
               students, but the ecosystems around them.
               
              <p>
                Today, the institutions established under his guidance continue to serve as pillars of opportunity for thousands of
                students and families. Generations have passed through these classrooms, carrying forward the values of education, 
                self-reliance, and social responsibility. Shri R. S. Gavai’s legacy is reflected not only in these institutions but 
                also in the breadth of responsibility he carried in public life. Over the years, he served in several of the nation’s 
                highest constitutional roles, including as Governor of Kerala, Bihar, and Sikkim; as a Member of Parliament in both Houses; 
                and as Leader of the Opposition in the State Legislature, along with key parliamentary and legislative leadership positions. 
                These roles reflect the trust placed in his leadership and his deep engagement with public service. The Shri Dadasaheb Gawai 
                Charitable Trust continues to carry this vision forward, expanding access to education and healthcare, strengthening institutions, 
                and working towards a more equitable and inclusive society.
              </p>
            </div>
            <div className="mt-6 rounded-2xl border-l-4 border-accent bg-secondary/40 p-5">
              <Quote className="text-accent mb-2" size={20} />
              <p className="text-foreground italic leading-relaxed">
                "Educate. Organise. Uplift. The future of any community is built
                in its classrooms."
              </p>
            </div>
          </div>
        </div>
      </section>

     
      {/* Long-term impact */}
      <section className="section-y">
        <div className="container max-w-4xl text-center">
          <Sparkles className="mx-auto text-accent" size={28} />
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            A legacy that keeps growing.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From a single school to over fifty institutions, from a handful of
            students to thousands of learners every year — the journey that
            began with a vision now belongs to entire generations.
          </p>
        </div>
      </section>

    </Layout>
  );
};

export default FoundersJourney;
