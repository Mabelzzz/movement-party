import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />

      {/* Geometric decorations */}
        {/* Large W shape on the right */}
        <div className="absolute inset-0 overflow-hidden bg-no-repeat bg-right opacity-10 bg-contain" style={{ backgroundImage: "url(/logo.svg)" }}>
        
        {/* Diagonal lines */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              transparent,
              transparent 50px,
              rgba(255,255,255,0.1) 50px,
              rgba(255,255,255,0.1) 51px
            )`
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Join Card */}
            <div className="bg-foreground/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 group hover:bg-foreground transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                ร่วมเป็นส่วนหนึ่งกับเรา
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                สมัครเป็นสมาชิกพรรคพลวัตร และร่วมสร้างอนาคตที่ดีกว่าให้ประเทศไทย
              </p>
              <Button
                asChild
                size="lg"
                className="w-full group/btn bg-primary-foreground border-primary text-primary hover:text-foreground transition-all"
              >
                <Link to="/auth/register">
                  สมัครสมาชิก
                  <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Donate Card */}
            <div className="bg-foreground/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20 group hover:bg-foreground transition-all">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                สนับสนุนพรรค
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                ทุกการสนับสนุนของคุณ คือพลังในการขับเคลื่อนประเทศไทยให้ก้าวหน้า
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full group/btn bg-primary-foreground border-primary-foreground/70 text-primary hover:bg-primary-foreground/70 hover:text-primary-foreground transition-all"
              >
                <Link to="/donate">
                  บริจาคสนับสนุน
                  <Heart className="ml-2 h-5 w-5 group-hover/btn:scale-110 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
