import Layout from "@/components/site/Layout";
import { Sparkles } from "lucide-react";
import hero1 from "@/assets/founder.png";

const FoundersJourney = () => {
  return (
    <Layout>
      {/* Shri R. S. Gavai */}
      <section className="section-y">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <img
            src={hero1}
            alt="Legacy of Late Shri R. S. Gavai"
            loading="lazy"
            width={1600}
            height={1200}
            className="rounded-3xl shadow-card aspect-[4/5] object-cover w-full sticky top-24"
          />

          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Founder
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Late Shri R. S. Gavai
            </h1>

            <p className="mt-3 text-lg text-accent font-medium">
              Founder, Shri Dadasaheb Gawai Charitable Trust
            </p>

            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Born in 1929, in the rural village of Darapur in Amravati, Late Shri R.
                S. Gavai dedicated his life to expanding opportunities for
                underserved communities. Guided by the ideals of Dr. B. R.
                Ambedkar, he believed that education was the most powerful
                instrument for social mobility, capable of transforming not just
                individuals, but entire communities.
              </p>

              <p>
                This belief took shape through the establishment of Shri
                Dadasaheb Gawai Charitable Trust. What began as a single school,
                in 1968, was rooted in a simple conviction that access to quality
                education should not depend on where one is born.
              </p>

              <p>
                Starting with modest beginnings, Shri Gawai focused on building
                institutions where they were needed most in rural and often
                overlooked regions of Vidarbha. Over time, this effort grew into
                a network of schools and colleges that today educate over 12,000
                students annually across Vidarbha.
              </p>

              <p>
                His work was deeply personal and community-driven. In his native
                village, he helped fulfil a long-standing aspiration by
                establishing an engineering college, bringing professional
                education within reach for local students who would otherwise
                have had to migrate or forgo such opportunities altogether. For
                many families, this access marked a turning point, enabling the
                first generation to pursue technical degrees and build new
                pathways for economic mobility.
              </p>

              <p>
                Similarly, he initiated schools in remote villages where formal
                education had previously been inaccessible. These institutions
                did more than provide classrooms; they opened doors for children
                to step into structured learning environments for the first
                time, fundamentally altering life trajectories across
                communities.
              </p>

              <p>
                Beyond education, Shri Gavai was associated with several social welfare 
                initiatives focused on the eradication of untouchability, support for leprosy 
                patients, and broader community upliftment. He served as Chairman Deeksha Bhoomi, 
                Nagpur, and was also a member of the Land Reforms Committee of the Government of India. 
                In 1975, he played a pioneering role in introducing the Employment Guarantee Scheme in Maharashtra.
              </p>
              
              <p>
                A prolific writer and public thinker, Shri Gavai also authored several Marathi books 
                on social justice and equality. His interests extended beyond public life and education 
                as he also served as President of the Western India Football Association.
              </p>

              <p>
                Over the years, his contributions were recognised through numerous honours, including 
                the National Press Award by National Press India, the Priyadarshini Award, 
                National Integration Awards for peace and harmony, and the Kushta Mitra Awards for 
                his work supporting leprosy patients.
              </p>
              
              <p>
                Today, the institutions established under his guidance continue
                to serve as pillars of opportunity for thousands of students and
                families. Generations have passed through these classrooms,
                carrying forward the values of education, self-reliance, and
                social responsibility.
              </p>

              <p>
                Shri R. S. Gavai’s legacy is reflected not only in these
                institutions but also in the breadth of responsibility he
                carried in public life. Over the years, he served in several of
                the nation’s highest constitutional roles, including as Governor
                of Kerala, Bihar, and Sikkim; as a Member of Parliament in both
                Houses; and as Leader of the Opposition in the State
                Legislature, along with key parliamentary and legislative
                leadership positions.
              </p>

              <p>
                The Shri Dadasaheb Gawai Charitable Trust continues to carry
                this vision forward, expanding access to education and
                healthcare, strengthening institutions, and working towards a
                more equitable and inclusive society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="section-y bg-secondary/30">
        <div className="container max-w-4xl text-center">
          <Sparkles className="mx-auto text-accent" size={28} />

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            A legacy that continues across generations.
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            What began with one institution and one vision has grown into a
            lasting movement of education, empowerment, and rural community
            development across Vidarbha. The values Shri R. S. Gavai stood for
            continue to guide every institution under the Trust today.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default FoundersJourney;
