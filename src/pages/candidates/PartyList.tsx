import { Layout } from "@/components/Layout";
import { User } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const candidates = [
  { rank: 1, name: "นางสาว ปุญชรัสมิ์ บุญมา", position: "หัวหน้าพรรค" },
  { rank: 2, name: "นาย กุลพัสฐ์ พูลศิริวงศ์", position: "รองหัวหน้าพรรค" },
  { rank: 3, name: "นาย กชพล จิตต์มั่นการ", position: "เลขาธิการพรรค" },
  { rank: 4, name: "นาย ณัฎฐพัชษ์ เตย์ชะจิรายุส", position: "เหรัญญิกพรรค" },
  { rank: 5, name: "นางสาว ภัทรานิษฐ์ พณิชธนันต์ชัย", position: "นายทะเบียนสมาชิกพรรค" },
  { rank: 6, name: "นาย ภาคภูมิ คะเชสนันท์", position: "โฆษกพรรค" },
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
                  <User className="w-8 h-8 text-primary/40" />
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
