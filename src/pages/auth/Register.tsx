import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Mail, Phone, MapPin, Calendar } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const Register = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="เข้าสู่ระบบ"
        title="สมัครสมาชิกพรรค"
        description="ร่วมเป็นส่วนหนึ่งกับพรรคพลวัตร เพื่ออนาคตที่ดีกว่า"
      />

      {/* Form */}
      <section className="py-16 bg-background geometric-bg">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="campaign-card p-8">
              <form className="space-y-6">
                {/* Personal Info */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    ข้อมูลส่วนตัว
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">ชื่อ</Label>
                      <Input id="firstName" placeholder="กรอกชื่อ" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">นามสกุล</Label>
                      <Input id="lastName" placeholder="กรอกนามสกุล" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="idCard">เลขบัตรประชาชน</Label>
                      <Input id="idCard" placeholder="X-XXXX-XXXXX-XX-X" className="mt-1.5" />
                    </div>
                    <div>
                      <Label htmlFor="birthDate">วันเกิด</Label>
                      <div className="relative mt-1.5">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="birthDate" type="date" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    ข้อมูลติดต่อ
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">อีเมล</Label>
                      <div className="relative mt-1.5">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="email" type="email" placeholder="email@example.com" className="pl-10" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                      <div className="relative mt-1.5">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="phone" placeholder="0XX-XXX-XXXX" className="pl-10" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    ที่อยู่
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">ที่อยู่</Label>
                      <Input id="address" placeholder="บ้านเลขที่ ถนน ซอย" className="mt-1.5" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div>
                        <Label htmlFor="subdistrict">ตำบล/แขวง</Label>
                        <Input id="subdistrict" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="district">อำเภอ/เขต</Label>
                        <Input id="district" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="province">จังหวัด</Label>
                        <Input id="province" className="mt-1.5" />
                      </div>
                      <div>
                        <Label htmlFor="zipcode">รหัสไปรษณีย์</Label>
                        <Input id="zipcode" className="mt-1.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    ข้าพเจ้าได้อ่านและยอมรับ{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      ข้อกำหนดและเงื่อนไข
                    </Link>{" "}
                    และ{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      นโยบายความเป็นส่วนตัว
                    </Link>
                  </Label>
                </div>

                {/* Submit */}
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  สมัครสมาชิก
                </Button>

                {/* Login link */}
                <p className="text-center text-sm text-muted-foreground">
                  เป็นสมาชิกอยู่แล้ว?{" "}
                  <Link to="/auth/login" className="text-primary hover:underline font-medium">
                    เข้าสู่ระบบ
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
