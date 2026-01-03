import { Layout } from "@/components/Layout";
import { Target, Heart, Users, Scale, Sparkles, Globe } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
const values = [
  {
    icon: Target,
    title: "มุ่งมั่นพัฒนา",
    description: "เรามุ่งมั่นพัฒนาประเทศไทยให้ก้าวหน้าอย่างยั่งยืน ด้วยนโยบายที่เป็นรูปธรรมและสามารถปฏิบัติได้จริง",
  },
  {
    icon: Heart,
    title: "เข้าใจประชาชน",
    description: "รับฟังเสียงของประชาชนทุกกลุ่ม เข้าใจปัญหาที่แท้จริง และนำเสนอทางออกที่ตอบโจทย์",
  },
  {
    icon: Users,
    title: "ความเท่าเทียม",
    description: "ส่งเสริมความเท่าเทียมในสังคม ทุกคนมีโอกาสเข้าถึงทรัพยากรและบริการของรัฐอย่างเป็นธรรม",
  },
  {
    icon: Scale,
    title: "ความโปร่งใส",
    description: "ดำเนินงานด้วยความโปร่งใส ตรวจสอบได้ เพื่อสร้างความเชื่อมั่นให้กับประชาชน",
  },
  {
    icon: Sparkles,
    title: "นวัตกรรม",
    description: "นำนวัตกรรมและเทคโนโลยีมาใช้ในการพัฒนาประเทศ เพื่อก้าวทันโลกที่เปลี่ยนแปลง",
  },
  {
    icon: Globe,
    title: "ยั่งยืน",
    description: "คำนึงถึงความยั่งยืนในทุกมิติ ทั้งเศรษฐกิจ สังคม และสิ่งแวดล้อม เพื่ออนาคตของรุ่นถัดไป",
  },
];

const Ideology = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="เกี่ยวกับพรรค"
        title="อุดมการณ์ของพรรค"
        description="“ดีที่สุด ในจุดที่ยืน” คืออุดมการณ์ที่เราถือมั่น เพื่อคนไทยทุกคน"
      />

      {/* Main Content */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Vision */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                วิสัยทัศน์ของเรา
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                พรรคพลวัตรเชื่อมั่นว่าประเทศไทยมีศักยภาพที่จะก้าวขึ้นเป็นผู้นำในภูมิภาค
                ด้วยการพัฒนาที่สมดุลและยั่งยืน เราจะนำพาประเทศไทยสู่อนาคตที่สดใส
                โดยไม่ทิ้งใครไว้ข้างหลัง
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="campaign-card p-6 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote Section */}
            <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                "ดีที่สุด ในจุดที่ยืน"
              </blockquote>
              <p className="text-muted-foreground">
                ทุกคนสามารถทำให้ดีที่สุดในตำแหน่งของตน เพื่อสร้างประเทศที่ดีกว่า
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ideology;
