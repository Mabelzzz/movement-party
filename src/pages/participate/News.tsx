import { Layout } from "@/components/Layout";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/PageIntro";

const news = [
  {
    id: 1,
    title: "พรรคพลวัตรเปิดตัวนโยบายเศรษฐกิจใหม่",
    excerpt: "หัวหน้าพรรคพลวัตรแถลงนโยบายเศรษฐกิจเพื่อฟื้นฟูประเทศหลังวิกฤต เน้นกระจายรายได้สู่ท้องถิ่น",
    date: "15 ธ.ค. 2567",
    category: "นโยบาย",
  },
  {
    id: 2,
    title: "กิจกรรมลงพื้นที่พบปะประชาชนภาคเหนือ",
    excerpt: "ทีมผู้บริหารพรรคลงพื้นที่รับฟังปัญหาและข้อเสนอแนะจากประชาชนใน 5 จังหวัดภาคเหนือ",
    date: "10 ธ.ค. 2567",
    category: "กิจกรรม",
  },
  {
    id: 3,
    title: "พรรคพลวัตรจัดสัมมนาการศึกษาไทย",
    excerpt: "จัดสัมมนาหัวข้อ 'การศึกษาไทยในศตวรรษที่ 21' ร่วมกับนักวิชาการและผู้เชี่ยวชาญ",
    date: "5 ธ.ค. 2567",
    category: "กิจกรรม",
  },
  {
    id: 4,
    title: "ประกาศรายชื่อผู้สมัครรับเลือกตั้ง",
    excerpt: "พรรคพลวัตรประกาศรายชื่อผู้สมัครรับเลือกตั้งทั้งแบบแบ่งเขตและแบบบัญชีรายชื่อ",
    date: "1 ธ.ค. 2567",
    category: "ประกาศ",
  },
  {
    id: 5,
    title: "เปิดรับสมาชิกพรรคทั่วประเทศ",
    excerpt: "เปิดรับสมัครสมาชิกพรรคผ่านระบบออนไลน์ พร้อมสิทธิประโยชน์มากมาย",
    date: "25 พ.ย. 2567",
    category: "ประกาศ",
  },
];

const News = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="การมีส่วนร่วม"
        title="ประชาสัมพันธ์"
        description="ข่าวสารและความเคลื่อนไหวล่าสุดจากพรรคพลวัตร"
      />

      {/* News Grid */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <article
                key={item.id}
                className="campaign-card group overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary group/btn">
                    อ่านเพิ่มเติม
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default News;
