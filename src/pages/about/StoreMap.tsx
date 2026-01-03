import { Layout } from "@/components/Layout";
import { MapPin, Phone, Clock, Store } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const stores = [
  {
    name: "สำนักงานใหญ่พรรค",
    address: "123 ถนนราชดำเนิน แขวงพระบรมมหาราชวัง เขตพระนคร กรุงเทพฯ 10200",
    phone: "02-123-4567",
    hours: "จันทร์ - ศุกร์ 08:00 - 17:00",
    region: "กรุงเทพมหานคร",
  },
  {
    name: "สาขาเชียงใหม่",
    address: "456 ถนนห้วยแก้ว ตำบลสุเทพ อำเภอเมือง จังหวัดเชียงใหม่ 50200",
    phone: "053-123-456",
    hours: "จันทร์ - ศุกร์ 08:30 - 16:30",
    region: "ภาคเหนือ",
  },
  {
    name: "สาขาขอนแก่น",
    address: "789 ถนนมิตรภาพ ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000",
    phone: "043-123-456",
    hours: "จันทร์ - ศุกร์ 08:30 - 16:30",
    region: "ภาคอีสาน",
  },
  {
    name: "สาขาสงขลา",
    address: "321 ถนนกาญจนวนิช ตำบลหาดใหญ่ อำเภอหาดใหญ่ จังหวัดสงขลา 90110",
    phone: "074-123-456",
    hours: "จันทร์ - ศุกร์ 08:30 - 16:30",
    region: "ภาคใต้",
  },
  {
    name: "สาขาชลบุรี",
    address: "654 ถนนสุขุมวิท ตำบลบางปลาสร้อย อำเภอเมือง จังหวัดชลบุรี 20000",
    phone: "038-123-456",
    hours: "จันทร์ - ศุกร์ 08:30 - 16:30",
    region: "ภาคตะวันออก",
  },
  {
    name: "สาขานครสวรรค์",
    address: "987 ถนนสวรรค์วิถี ตำบลนครสวรรค์ตก อำเภอเมือง จังหวัดนครสวรรค์ 60000",
    phone: "056-123-456",
    hours: "จันทร์ - ศุกร์ 08:30 - 16:30",
    region: "ภาคกลาง",
  },
];

const StoreMap = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="เกี่ยวกับพรรค"
        title="แผนที่ร้านค้า"
        description="สำนักงานและจุดบริการของพรรคพลวัตรทั่วประเทศ"
      />

      {/* Stores Grid */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stores.map((store, index) => (
              <div
                key={store.name}
                className="campaign-card group p-6 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Store className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary font-medium">{store.region}</span>
                    <h3 className="text-lg font-bold text-card-foreground">
                      {store.name}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-muted-foreground">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${store.phone}`} className="text-foreground hover:text-primary transition-colors">
                      {store.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{store.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="mt-16 aspect-[16/9] rounded-2xl bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                แผนที่แสดงตำแหน่งสาขาทั่วประเทศ
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StoreMap;
