import { Layout } from "@/components/Layout";
import { User } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const candidates = [
  { rank: 1, name: "นายกัณวีร์ สืบแสง", position: "หัวหน้าพรรค", imageSrc: "/images/executives/kanavee.jpg" },
  { rank: 2, name: "นายสุรพันธ์ กุศลส่ง", position: "รองหัวหน้าพรรค" },
  { rank: 3, name: "นายกุลพัสฐ์ พูลศิริวงศ์", position: "รองหัวหน้าพรรค" },
  { rank: 4, name: "นายสรยุทธ ชูพันธุ์", position: "เลขาธิการพรรค" },
  { rank: 5, name: "นายกชพล จิตต์มั่นการ", position: "เลขาธิการพรรค" },
  { rank: 6, name: "นายณัฎฐพัชษ์ เตย์ชะจิรายุส", position: "เหรัญญิกพรรค" },
  { rank: 7, name: "นางสาว ภัทรานิษฐ์ พณิชธนันต์ชัย", position: "นายทะเบียนสมาชิกพรรค", },
  { rank: 8, name: "ม.ล.กุลธร เกษมศรี", position: "โฆษกพรรค" },
];

const PartyList = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="ผู้สมัครรับเลือกตั้ง"
        title="ผู้สมัครแบบบัญชีรายชื่อ"
        description="ผู้สมัครรับเลือกตั้งแบบบัญชีรายชื่อของพรรคพลวัตร"
      />

      {/* Candidates List */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-4">
            {candidates.map((candidate, index) => (
              <div
                key={candidate.rank}
                className="campaign-card flex items-center gap-6 p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rank */}
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-green">
                  <span className="text-xl font-bold text-primary-foreground">
                    {candidate.rank}
                  </span>
                </div>

                {/* Avatar */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center shrink-0">
                  {candidate.imageSrc ? (
                    <img
                      src={candidate.imageSrc}
                      alt={candidate.name}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-24 h-24 text-primary/30" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground">
                    {candidate.name}
                  </h3>
                  <span className="text-sm text-primary font-medium">
                    {candidate.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PartyList;
