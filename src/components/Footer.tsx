import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const footerLinks = {
  about: [
    { label: "อุดมการณ์ของพรรค", href: "/about/ideology" },
    { label: "ประวัติความเป็นมา", href: "/about/history" },
    { label: "ผู้บริหารพรรค", href: "/about/executives" },
    { label: "นโยบายพรรค", href: "/about/policies" },
  ],
  participate: [
    { label: "สมัครสมาชิกพรรค", href: "/auth/register" },
    { label: "บริจาคสนับสนุน", href: "/donate" },
    { label: "ประชาสัมพันธ์", href: "/participate/news" },
    { label: "กิจกรรมที่ผ่านมา", href: "/participate/activities" },
  ],
  candidates: [
    { label: "ผู้สมัครแบบแบ่งเขต", href: "/candidates/constituency" },
    { label: "ผู้สมัครแบบบัญชีรายชื่อ", href: "/candidates/party-list" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <img
                src="/logo.svg"
                alt="พรรคพลวัตร"
                className="w-10 h-10"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground">พรรคพลวัตร</span>
                <span className="text-sm text-primary font-bold">ดีที่สุด ในจุดที่ยืน</span>
              </div>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              พรรคพลวัตรมุ่งมั่นพัฒนาประเทศไทยให้ก้าวหน้า เพื่อคุณภาพชีวิตที่ดีกว่าของคนไทยทุกคน
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+6621234567" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>0922633367</span>
              </a>
              <a href="mailto:contact@movement.party" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>contact@movement.party</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>199/78 วิภาวดีรังสิต แขวงสามเสนใน เขตพญาไท กรุงเทพมหานคร 10400</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-bold text-foreground mb-4">เกี่ยวกับพรรค</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">การมีส่วนร่วม</h4>
            <ul className="space-y-3">
              {footerLinks.participate.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">ผู้สมัคร</h4>
            <ul className="space-y-3">
              {footerLinks.candidates.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h4 className="font-bold text-foreground mt-8 mb-4">ติดตามเรา</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} พรรคพลวัตร. สงวนลิขสิทธิ์.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              นโยบายความเป็นส่วนตัว
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              ข้อกำหนดการใช้งาน
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
