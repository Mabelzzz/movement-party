import { Layout } from "@/components/Layout";
import { Calendar, MapPin, Users } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const activities = [
  {
    id: 1,
    title: "ลงพื้นที่พบปะประชาชน จ.เชียงใหม่",
    date: "10-12 ธ.ค. 2567",
    location: "อำเภอเมือง จังหวัดเชียงใหม่",
    participants: 500,
    description: "หัวหน้าพรรคและทีมผู้บริหารลงพื้นที่รับฟังปัญหาประชาชน",
  },
  {
    id: 2,
    title: "สัมมนานโยบายการศึกษา",
    date: "5 ธ.ค. 2567",
    location: "โรงแรมเซ็นทรัล กรุงเทพฯ",
    participants: 300,
    description: "จัดสัมมนาร่วมกับนักวิชาการเพื่อพัฒนานโยบายการศึกษา",
  },
  {
    id: 3,
    title: "กิจกรรมบริจาคโลหิต",
    date: "1 ธ.ค. 2567",
    location: "สำนักงานใหญ่พรรค กรุงเทพฯ",
    participants: 150,
    description: "กิจกรรมบริจาคโลหิตร่วมกับสภากาชาดไทย",
  },
  {
    id: 4,
    title: "ลงพื้นที่ช่วยเหลือผู้ประสบภัย",
    date: "25 พ.ย. 2567",
    location: "จังหวัดนครศรีธรรมราช",
    participants: 100,
    description: "ทีมอาสาสมัครพรรคลงพื้นที่ช่วยเหลือผู้ประสบภัยน้ำท่วม",
  },
  {
    id: 5,
    title: "เวทีเสวนา 'อนาคตประเทศไทย'",
    date: "20 พ.ย. 2567",
    location: "มหาวิทยาลัยธรรมศาสตร์",
    participants: 450,
    description: "เวทีเสวนาร่วมกับนักศึกษาและอาจารย์มหาวิทยาลัย",
  },
  {
    id: 6,
    title: "ปลูกป่าเฉลิมพระเกียรติ",
    date: "15 พ.ย. 2567",
    location: "อุทยานแห่งชาติเขาใหญ่",
    participants: 200,
    description: "กิจกรรมปลูกป่าและฟื้นฟูธรรมชาติ",
  },
];

const Activities = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="การมีส่วนร่วม"
        title="กิจกรรมที่ผ่านมา"
        description="ภาพกิจกรรมและความเคลื่อนไหวของพรรคพลวัตร"
      />

      {/* Activities Grid */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="campaign-card group overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden" />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {activity.description}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{activity.participants} ผู้เข้าร่วม</span>
                    </div>
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

export default Activities;
