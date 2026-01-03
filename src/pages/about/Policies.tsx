import { Layout } from "@/components/Layout";
import {
  Banknote,
  GraduationCap,
  HeartPulse,
  Leaf,
  Building2,
  Shield,
  CheckCircle
} from "lucide-react";

const policies = [
  {
    icon: Banknote,
    title: "เศรษฐกิจเพื่อทุกคน",
    description: "สร้างเศรษฐกิจที่เข้มแข็ง กระจายรายได้สู่ท้องถิ่น",
    details: [
      "ลดภาษีสำหรับผู้ประกอบการรายย่อย",
      "สนับสนุนสินเชื่อดอกเบี้ยต่ำสำหรับ SMEs",
      "พัฒนาตลาดสินค้าเกษตรออนไลน์",
      "ส่งเสริมการท่องเที่ยวชุมชน",
      "สร้างงานในพื้นที่ห่างไกล",
    ],
  },
  {
    icon: GraduationCap,
    title: "การศึกษาเท่าเทียม",
    description: "พัฒนาระบบการศึกษาให้ทันสมัย เข้าถึงได้ทุกคน",
    details: [
      "อินเทอร์เน็ตฟรีในทุกโรงเรียน",
      "หลักสูตรที่ตอบโจทย์ตลาดแรงงาน",
      "ทุนการศึกษาสำหรับนักเรียนยากจน",
      "พัฒนาครูอย่างต่อเนื่อง",
      "ส่งเสริมการเรียนรู้ตลอดชีวิต",
    ],
  },
  {
    icon: HeartPulse,
    title: "สาธารณสุขถ้วนหน้า",
    description: "ยกระดับบริการสาธารณสุข ดูแลสุขภาพทุกช่วงวัย",
    details: [
      "เพิ่มงบประมาณด้านสาธารณสุข",
      "สร้างโรงพยาบาลใกล้บ้าน",
      "ลดระยะเวลารอคอยการรักษา",
      "ดูแลสุขภาพผู้สูงอายุ",
      "สนับสนุนการวิจัยทางการแพทย์",
    ],
  },
  {
    icon: Leaf,
    title: "สิ่งแวดล้อมยั่งยืน",
    description: "รักษาทรัพยากรธรรมชาติ ส่งเสริมพลังงานสะอาด",
    details: [
      "ลดการใช้พลาสติกครั้งเดียวทิ้ง",
      "ส่งเสริมพลังงานแสงอาทิตย์",
      "ฟื้นฟูป่าและแหล่งน้ำ",
      "จัดการขยะอย่างเป็นระบบ",
      "สร้างเมืองสีเขียว",
    ],
  },
  {
    icon: Building2,
    title: "โครงสร้างพื้นฐาน",
    description: "พัฒนาระบบขนส่ง สาธารณูปโภค และเทคโนโลยี",
    details: [
      "ขยายรถไฟฟ้าสู่ชานเมือง",
      "พัฒนาถนนในพื้นที่ห่างไกล",
      "อินเทอร์เน็ตความเร็วสูงทั่วประเทศ",
      "น้ำประปาสะอาดทุกครัวเรือน",
      "ไฟฟ้าเสถียรทุกพื้นที่",
    ],
  },
  {
    icon: Shield,
    title: "ความปลอดภัย",
    description: "สร้างความมั่นคงปลอดภัยในชีวิตและทรัพย์สิน",
    details: [
      "เพิ่มกำลังตำรวจในชุมชน",
      "กล้องวงจรปิดทั่วประเทศ",
      "ปราบปรามยาเสพติด",
      "คุ้มครองสิทธิประชาชน",
      "รับมือภัยพิบัติอย่างมีประสิทธิภาพ",
    ],
  },
];

const Policies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-dark-gradient overflow-hidden">
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">
              เกี่ยวกับพรรค
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            นโยบายพรรค
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            นโยบาย 6 ด้านหลักเพื่อพัฒนาประเทศไทยอย่างยั่งยืน
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="space-y-16">
            {policies.map((policy, index) => (
              <div
                key={policy.title}
                className={`grid md:grid-cols-2 gap-8 items-center opacity-0 animate-fade-in ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon side */}
                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                    <policy.icon className="w-32 h-32 text-primary/50" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full" />
                  </div>
                </div>

                {/* Content side */}
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <policy.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    {policy.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {policy.description}
                  </p>
                  <ul className="space-y-3">
                    {policy.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Policies;
