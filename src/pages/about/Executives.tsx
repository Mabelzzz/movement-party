import { Layout } from "@/components/Layout";
import { User } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

type Executive = {
  name: string;
  position: string;
  description?: string;
  imageSrc?: string;
};

const executives: Executive[] = [
  {
    name: "นายกัณวีร์ สืบแสง",
    position: "หัวหน้าพรรค",
    imageSrc: "/images/executives/kanavee.jpg",
  },
  {
    name: "นายสุรพันธ์ กุศลส่ง",
    position: "รองหัวหน้าพรรค",
  },
  {
    name: "นายกุลพัสฐ์ พูลศิริวงศ์",
    position: "รองหัวหน้าพรรค",
  },
  {
    name: "นายสรยุทธ ชูพันธุ์",
    position: "เลขาธิการพรรค",
  },
  {
    name: "นายกชพล จิตต์มั่นการ",
    position: "เลขาธิการพรรค",
  },
  {
    name: "ม.ล.กุลธร เกษมศรี",
    position: "โฆษกพรรค",
  },
  {
    name: "นายณัฎฐพัชษ์ เตย์ชะจิรายุส",
    position: "เหรัญญิกพรรค",
  },
  {
    name: "นางสาว ภัทรานิษฐ์ พณิชธนันต์ชัย",
    position: "นายทะเบียนสมาชิกพรรค",
  },
];

const Executives = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="เกี่ยวกับพรรค"
        title="ผู้บริหารพรรค"
        description="ทีมผู้บริหารพรรคพลวัตร ผู้ร่วมขับเคลื่อนทิศทางและการทำงานของพรรค"
      />

      {/* Executives Grid */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <div
                key={`${executive.position}-${executive.name}`}
                className="campaign-card group overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image / Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  {executive.imageSrc ? (
                    <img
                      src={executive.imageSrc}
                      alt={executive.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-24 h-24 text-primary/30" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {executive.position}
                  </span>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {executive.name}
                  </h3>

                  {executive.description ? (
                    <p className="text-muted-foreground text-sm">
                      {executive.description}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Executives;
