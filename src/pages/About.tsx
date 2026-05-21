import Layout from "@/components/site/Layout";
import PageHeader from "@/components/site/PageHeader";
import timeline from "@/assets/timeline.png";

const About = () => {
  return (
    <Layout>
      <PageHeader
        eyebrow="About Us"
        title="A trust built on dignity, education and opportunity."
        description="Shri Dadasaheb Gawai Charitable Trust (SDGCT) is a Buddhist Minority Institution recognised by the Government of Maharashtra, serving Amravati and beyond since 1991."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Our Story */}
      <section className="section-y">
        <div className="container grid lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="relative lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)]">
              <img
                src={timeline}
                alt="Timeline of SDGCT institutions from 1960 to 2025"
                loading="lazy"
                className="rounded-3xl shadow-card w-full h-full object-contain bg-card"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent">
              <span className="h-px w-6 bg-accent" /> Our Story
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground text-balance">
              From a small village in Vidarbha to a network shaping rural futures.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The story of Shri Dadasaheb Gawai Charitable Trust begins in the
                small rural village of Darapur, in Daryapur taluka of Vidarbha.
              </p>
              <p>
                Born in 1929 into a modest farming family as one among seven siblings,
                Late Shri R. S. Gavai understood firsthand the barriers that
                prevented rural children from accessing education. Despite
                financial hardship, he pursued higher education and went on to
                complete his degree from Nagpur University. But his ambition
                extended far beyond personal success. He believed that thousands
                of children growing up in circumstances similar to his deserved
                the same opportunity to learn, grow, and build a better future.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                The Problem He Saw
              </h3>
              <p>
                After graduating from college and travelling across Vidarbha, Shri Gavai recognised two
                fundamental challenges facing rural education.
              </p>
              <p>
                The first was geography. Villages across the region were
                scattered and disconnected, with educational institutions
                concentrated in urban centres. For many children, especially in
                remote areas, even basic schooling remained physically
                inaccessible.
              </p>
              <p>
                The second was affordability. Families of landless labourers,
                small farmers, tribal communities, and socially disadvantaged
                groups often lacked the financial means to send their children
                away for education. Distance, transportation, hostel costs, and
                fees collectively pushed education out of reach for generations
                of rural families.
              </p>
              <p>
                These challenges were particularly visible across Vidarbha's
                agrarian belt, where economic uncertainty, drought-prone
                conditions, and limited infrastructure often restricted
                educational opportunity for rural families. Shri Gavai saw
                education not only as a pathway to employment, but as a means of
                creating long-term social and economic stability within these
                communities.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                How It Began
              </h3>
              <p>
                Shri Gavai believed that if children could not reach schools, schools must reach them. 
                With this vision, he established the first school, Dr. Babasaheb Ambedkar Vidyalaya, in 
                the informal housing settlements of Frazerpura in 1968, providing free education to children from the locality.
              </p>
              <p>
                In the early years, starting a school often meant persuading local landowners to donate 
                small parcels of land for educational institutions. In return, schools would sometimes be 
                named in memory of their family members. Through this model, the next institution, 
                Madan Maharaj Vidyalaya in the village of Fulamla, was established, creating a shared sense 
                of ownership and community participation in education.
              </p>
              <p>
                Over the years, his vision expanded beyond primary schooling to include junior and senior
                colleges, as well as professional degree institutions and training centres focused on improving 
                employability and creating meaningful career opportunities for students from rural backgrounds.
              </p>
              <p>
                In 2008, he fulfilled a long-held aspiration by establishing an engineering college in his native 
                village of Darapur, bringing professional education to students who would otherwise have had to leave 
                their homes or abandon such ambitions entirely.
              </p>
              <p>
                What began as a small initiative steadily evolved into a large
                educational network rooted in accessibility and social mobility.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                Where We Are Today
              </h3>
              <p>
                Today, the Trust operates 16 schools and 12 higher educational institutions 
                across Vidarbha, including engineering, pharmacy, law, polytechnic, and 
                Ayurvedic medical education, alongside a growing presence in healthcare through 
                the establishment of a rural 100-bedded hospital in Kherda, Washim serving rural communities.
              </p>
              <p>
                Over the decades, the institutions built under Shri Gawai's vision have
                enabled students from rural and underserved backgrounds to
                access opportunities once considered unimaginable. Alumni from
                our institutions have gone on to study at IITs, IIMs, Ivy League
                universities, serve in senior government positions, and build
                successful careers across industries in India and abroad.
              </p>

              <h3 className="pt-4 font-display text-xl font-bold text-foreground">
                The Legacy
              </h3>
              <p>
                While the scale of the Trust has grown significantly over the decades, 
                its core mission has remained rooted in expanding educational opportunity 
                for communities too often left behind by geography, circumstance, or economic barriers.
              </p>
              <p>
                In its early years, the challenge was access itself ensuring that no child was left 
                uneducated simply because a school did not exist nearby. Today, with educational access 
                improving across the region, the Trust’s focus has evolved towards improving the quality 
                of education, exposure, and career opportunities available to rural students.
              </p>
              <p>
                The Trust now actively seeks to collaborate with institutional partners, CSR initiatives, 
                and philanthropic organisations to strengthen infrastructure, modernise learning, and ensure 
                that students from rural backgrounds receive opportunities at par with the best educational institutions.
              </p>
              <p>
                From one small school to a network serving thousands annually, the journey of the Trust continues 
                to be guided by the belief that talent exists everywhere, and opportunity must too.
              </p>

            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
