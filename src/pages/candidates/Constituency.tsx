import { Layout } from "@/components/Layout";
import { User, MapPin } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const candidates = [
  { name: "นายวิชัย รักไทย", constituency: "กรุงเทพมหานคร เขต 1" },
  { name: "นางสาวพิมพ์ใจ ใจดี", constituency: "กรุงเทพมหานคร เขต 2" },
  { name: "นายสมศักดิ์ พัฒนา", constituency: "กรุงเทพมหานคร เขต 3" },
  { name: "นางวิภา สุขใจ", constituency: "เชียงใหม่ เขต 1" },
  { name: "นายประชา มั่งมี", constituency: "เชียงใหม่ เขต 2" },
  { name: "นางสาวแพรว งามตา", constituency: "ขอนแก่น เขต 1" },
  { name: "นายธนกฤต รุ่งเรือง", constituency: "ชลบุรี เขต 1" },
  { name: "นางสมหญิง พลเมือง", constituency: "สงขลา เขต 1" },
  { name: "นายกิตติ ความดี", constituency: "นครราชสีมา เขต 1" },
];

const Constituency = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="ผู้สมัครรับเลือกตั้ง"
        title="ผู้สมัครแบบแบ่งเขต"
        description="ผู้สมัครรับเลือกตั้งแบบแบ่งเขตเลือกตั้งของพรรคพลวัตร"
      />

      {/* Candidates Grid */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((candidate, index) => (
              <div
                key={candidate.name}
                className="campaign-card group overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <User className="w-20 h-20 text-primary/30" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {candidate.name}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{candidate.constituency}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Constituency;
