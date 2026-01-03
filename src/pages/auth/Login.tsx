import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

const Login = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="เข้าสู่ระบบ"
        title="เข้าสู่ระบบสมาชิก"
        description="เข้าสู่ระบบเพื่อใช้งานบริการสำหรับสมาชิกพรรคพลวัตร"
      />

      {/* Form */}
      <section className="py-16 bg-background geometric-bg">
        <div className="container">
          <div className="max-w-md mx-auto">
            <div className="campaign-card p-8">
              {/* Logo */}
              <div className="text-center mb-8 justify-center flex flex-col items-center gap-4">
                <img
                  src="/logo.svg"
                  alt="พรรคพลวัตร"
                  className="w-10 h-10"
                />
                <h2 className="text-2xl font-bold text-foreground">ยินดีต้อนรับกลับ</h2>
              </div>

              <form className="space-y-6">
                <div>
                  <Label htmlFor="email">อีเมล</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="email@example.com" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">รหัสผ่าน</Label>
                  <div className="relative mt-1.5">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="••••••••" className="pl-10" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember" className="text-sm text-muted-foreground">
                      จดจำฉัน
                    </Label>
                  </div>
                  <Link to="/auth/forgot-password" className="text-sm text-primary hover:underline">
                    ลืมรหัสผ่าน?
                  </Link>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  เข้าสู่ระบบ
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  ยังไม่เป็นสมาชิก?{" "}
                  <Link to="/auth/register" className="text-primary hover:underline font-medium">
                    สมัครสมาชิก
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

export default Login;
