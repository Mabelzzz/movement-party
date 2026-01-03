import { Link } from "react-router-dom";
import { 
  Banknote, 
  GraduationCap, 
  HeartPulse, 
  Leaf, 
  Building2, 
  Shield,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const policies = [
  {
    icon: Banknote,
    title: "เศรษฐกิจเพื่อทุกคน",
    description: "สร้างเศรษฐกิจที่เข้มแข็ง กระจายรายได้สู่ท้องถิ่น เพิ่มโอกาสให้ผู้ประกอบการรายย่อย",
    color: "from-primary to-brand-green-light",
  },
  {
    icon: GraduationCap,
    title: "การศึกษาเท่าเทียม",
    description: "พัฒนาระบบการศึกษาให้ทันสมัย เข้าถึงได้ทุกคน และตอบโจทย์ตลาดแรงงาน",
    color: "from-brand-green-light to-primary",
  },
  {
    icon: HeartPulse,
    title: "สาธารณสุขถ้วนหน้า",
    description: "ยกระดับบริการสาธารณสุข ดูแลสุขภาพประชาชนทุกช่วงวัย",
    color: "from-primary to-brand-green-dark",
  },
  {
    icon: Leaf,
    title: "สิ่งแวดล้อมยั่งยืน",
    description: "รักษาทรัพยากรธรรมชาติ ส่งเสริมพลังงานสะอาด สร้างสังคมคาร์บอนต่ำ",
    color: "from-brand-green-dark to-primary",
  },
  {
    icon: Building2,
    title: "โครงสร้างพื้นฐาน",
    description: "พัฒนาระบบขนส่ง สาธารณูปโภค และเทคโนโลยีดิจิทัลทั่วประเทศ",
    color: "from-primary to-brand-green-light",
  },
  {
    icon: Shield,
    title: "ความปลอดภัย",
    description: "สร้างความมั่นคงปลอดภัยในชีวิตและทรัพย์สิน ปราบปรามอาชญากรรม",
    color: "from-brand-green-light to-brand-green-dark",
  },
];

export const PolicySection = () => {
  return (
    <section className="py-24 bg-background relative geometric-bg">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            นโยบายพรรค
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            นโยบายเพื่อ<span className="text-primary">คนไทย</span>ทุกคน
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เรามุ่งมั่นพัฒนาประเทศในทุกมิติ เพื่อคุณภาพชีวิตที่ดีกว่าของคนไทยทุกคน
          </p>
        </div>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {policies.map((policy, index) => (
            <div
              key={policy.title}
              className="campaign-card group p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${policy.color} mb-4 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                <policy.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                {policy.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {policy.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-green"
          >
            <Link to="/about/policies">
              ดูนโยบายทั้งหมด
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
