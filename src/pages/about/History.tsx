import { Layout } from "@/components/Layout";
import { PageIntro } from "@/components/PageIntro";

const milestones = [
  {
    year: "2566",
    title: "ก่อตั้งพรรค",
    description: "พรรคพลวัตรได้รับการจดทะเบียนจัดตั้งอย่างเป็นทางการ โดยกลุ่มผู้ก่อตั้งที่มีความมุ่งมั่นในการพัฒนาประเทศ",
  },
  {
    year: "2566",
    title: "ประกาศนโยบายหลัก",
    description: "เปิดตัวนโยบาย 6 ด้านหลัก ครอบคลุมทุกมิติการพัฒนาประเทศ เพื่อตอบสนองความต้องการของประชาชน",
  },
  {
    year: "2567",
    title: "ขยายสมาชิกทั่วประเทศ",
    description: "เปิดรับสมาชิกพรรคใน 77 จังหวัด มีสมาชิกกว่า 50,000 คนทั่วประเทศ",
  },
  {
    year: "2567",
    title: "ลงพื้นที่รับฟังเสียงประชาชน",
    description: "จัดกิจกรรมลงพื้นที่รับฟังปัญหาและข้อเสนอแนะจากประชาชนกว่า 100 ครั้งทั่วประเทศ",
  },
  {
    year: "2568",
    title: "เตรียมพร้อมสู่การเลือกตั้ง",
    description: "ประกาศรายชื่อผู้สมัครรับเลือกตั้งทั้งแบบแบ่งเขตและแบบบัญชีรายชื่อ พร้อมนำเสนอนโยบายที่เป็นรูปธรรม",
  },
];

const History = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="เกี่ยวกับพรรค"
        title="ประวัติความเป็นมา"
        description="เส้นทางการก่อตั้งและพัฒนาของพรรคพลวัตร"
      />

      {/* Timeline */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20" />

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="relative pl-20 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Year circle */}
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-green">
                      <span className="text-sm font-bold text-primary-foreground">
                        {milestone.year}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="campaign-card p-6">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default History;
