import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, CreditCard, Building2, QrCode } from "lucide-react";

const donationAmounts = [100, 500, 1000, 5000, 10000];

const Donate = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-hero-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden bg bg-no-repeat bg-right opacity-10 bg-contain" style={{ backgroundImage: "url(/logo.svg)" }}/>

        <div className="container relative z-10 text-center">
          <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            บริจาคสนับสนุน
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            ทุกการสนับสนุนของคุณ คือพลังในการขับเคลื่อนประเทศไทยให้ก้าวหน้า
          </p>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="campaign-card p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                เลือกจำนวนเงินบริจาค
              </h2>

              {/* Amount Selection */}
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className="py-4 rounded-xl border-2 border-border hover:border-primary text-foreground font-bold transition-all hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    ฿{amount.toLocaleString()}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <Label htmlFor="customAmount">หรือระบุจำนวนเงินเอง</Label>
                <div className="relative mt-1.5">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-bold">฿</span>
                  <Input
                    id="customAmount"
                    type="number"
                    placeholder="0.00"
                    className="pl-10 text-lg h-14"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-foreground mb-4">วิธีการชำระเงิน</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 rounded-xl border-2 border-primary bg-primary/5 flex flex-col items-center gap-2 transition-all">
                    <CreditCard className="w-8 h-8 text-primary" />
                    <span className="font-medium text-foreground">บัตรเครดิต/เดบิต</span>
                  </button>
                  <button className="p-4 rounded-xl border-2 border-border hover:border-primary flex flex-col items-center gap-2 transition-all hover:bg-primary/5">
                    <Building2 className="w-8 h-8 text-primary" />
                    <span className="font-medium text-foreground">โอนเงินผ่านธนาคาร</span>
                  </button>
                  <button className="p-4 rounded-xl border-2 border-border hover:border-primary flex flex-col items-center gap-2 transition-all hover:bg-primary/5">
                    <QrCode className="w-8 h-8 text-primary" />
                    <span className="font-medium text-foreground">พร้อมเพย์</span>
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                บริจาคสนับสนุน
              </Button>

              {/* Note */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                การบริจาคเป็นไปตาม พ.ร.บ. ประกอบรัฐธรรมนูญว่าด้วยพรรคการเมือง
              </p>
            </div>

            {/* Why Donate */}
            <div className="mt-12 p-8 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                ทำไมต้องบริจาคให้พรรคพลวัตร?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">1</span>
                  <span>สนับสนุนการดำเนินงานของพรรคในการพัฒนานโยบายเพื่อประชาชน</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">2</span>
                  <span>เป็นส่วนหนึ่งในการสร้างความเปลี่ยนแปลงที่ดีให้กับประเทศ</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">3</span>
                  <span>การบริจาคถูกต้องตามกฎหมายและโปร่งใสตรวจสอบได้</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
