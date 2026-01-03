import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Heart, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const stats = [
    { value: "100,000+", label: "เป้าหมายสมาชิก", icon: Users },
    { value: "77", label: "จังหวัดทั่วประเทศ", icon: Target },
    { value: "400+", label: "ผู้สมัคร ส.ส.", icon: Landmark },
    { value: "100%", label: "ความมุ่งมั่น", icon: Heart },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Leader background (desktop only) */}
      <div className="absolute inset-0 pointer-events-none opacity-5 sm:opacity-10 md:opacity-20 lg:opacity-40 xl:opacity-100">
        <img
          src="/images/leader.png"
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 xl:left-50 lg:left-20 w-full max-w-[620px] h-[85vh] object-contain object-left object-bottom xl:max-w-[720px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
      </div>

      {/* Background with geometric shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-no-repeat bg-right bg-contain" style={{ backgroundImage: "url(/logo.svg)" }} />
        <div className="absolute bottom-0 left-0 w-full h-1/3">
          <div className="absolute inset-0 bg-primary/20" style={{ clipPath: "polygon(0 60%, 100% 20%, 100% 100%, 0 100%)" }} />
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/30 rotate-45 animate-float" />
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary/10 rotate-12 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-primary/20 rounded-full animate-pulse" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">พรรคพลวัตร</span>
          </div>

          <div className="max-w-3xl space-y-6 animate-slide-up">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 opacity-0 animate-fade-in text-muted-foreground" style={{ animationDelay: "0.2s" }}>
              พรรคพลวัตร
            </h1>
            <p className="text-4xl md:text-7xl font-bold mb-6 opacity-0 animate-fade-in">
              <span className="text-foreground">ดีที่สุด</span>{" "}
              <span className="text-gradient">ในจุดที่ยืน</span>
            </p>
          </div>

          <p className="pt-5 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            เราพร้อมนำพาประเทศไทยก้าวสู่อนาคตที่ดีกว่า ด้วยนโยบายที่ตอบโจทย์ และความมุ่งมั่นที่จะสร้างความเปลี่ยนแปลงที่ยั่งยืน
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="group px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-green transition-all hover:scale-105">
              <Link to="/about/policies">
                ดูนโยบาย
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg border-primary/50 text-foreground dark:text-foreground hover:bg-primary/10 hover:border-primary transition-all">
              <Link to="/auth/register">สมัครสมาชิก</Link>
            </Button>
          </div>

          <div className="grid gap-6 opacity-70 animate-fade-in grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center" style={{ animationDelay: "0.8s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="w-full max-w-[260px] flex flex-col items-center p-6 rounded-2xl bg-primary-foreground border border-primary/10 text-center">
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
