import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "หน้าหลัก", href: "/" },
  {
    label: "เกี่ยวกับพรรค",
    children: [
      { label: "อุดมการณ์ของพรรค", href: "/about/ideology" },
      { label: "ประวัติความเป็นมา", href: "/about/history" },
      { label: "ผู้บริหารพรรค", href: "/about/executives" },
      { label: "นโยบายพรรค", href: "/about/policies" },
      { label: "สินค้าพรรค", href: "/about/merchandise" },
      { label: "แผนที่ร้านค้าคนไทย", href: "/about/store-map" },
    ],
  },
  {
    label: "รายชื่อผู้สมัคร",
    children: [
      { label: "ผู้สมัครแบบแบ่งเขต", href: "/candidates/constituency" },
      { label: "ผู้สมัครแบบบัญชีรายชื่อ", href: "/candidates/party-list" },
    ],
  },
  {
    label: "การมีส่วนร่วม",
    children: [
      { label: "ประชาสัมพันธ์", href: "/participate/news" },
      { label: "กิจกรรมที่ผ่านมา", href: "/participate/activities" },
    ],
  },
  {
    label: "เข้าสู่ระบบ",
    children: [
      { label: "สมัครสมาชิกพรรค", href: "/auth/register" },
      { label: "เข้าสู่ระบบสมาชิก", href: "/auth/login" },
    ],
  },
  { label: "บริจาค", href: "/donate" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;
  const hasActiveChild = (children?: { href: string }[]) =>
    children?.some((child) => location.pathname === child.href);

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-border">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img
                src="/logo.svg"
                alt="พรรคพลวัตร"
                className="w-10 h-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground leading-tight">พรรคพลวัตร</span>
              <span className="text-xs text-primary font-bold">ดีที่สุด ในจุดที่ยืน</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className={cn(
                        "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-base focus-ring",
                        hasActiveChild(item.children)
                          ? "text-primary bg-accent"
                          : "text-foreground hover:text-primary hover:bg-accent"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-lg animate-slide-down overflow-hidden">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm transition-base",
                              isActive(child.href)
                                ? "text-primary bg-accent font-medium"
                                : "text-popover-foreground hover:text-primary hover:bg-accent"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-base focus-ring",
                      isActive(item.href!)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:text-primary hover:bg-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="ml-2 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus-ring"
              aria-label={isMobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-slide-down">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileOpenDropdown(
                          mobileOpenDropdown === item.label ? null : item.label
                        )
                      }
                      className={cn(
                        "flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-base",
                        hasActiveChild(item.children)
                          ? "text-primary bg-accent"
                          : "text-foreground hover:bg-accent"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          mobileOpenDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {mobileOpenDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary/30 pl-4">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className={cn(
                              "block px-4 py-2.5 text-sm rounded-lg transition-base",
                              isActive(child.href)
                                ? "text-primary bg-accent font-medium"
                                : "text-muted-foreground hover:text-primary hover:bg-accent"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href!}
                    className={cn(
                      "block px-4 py-3 text-sm font-medium rounded-lg transition-base",
                      isActive(item.href!)
                        ? "text-primary bg-accent"
                        : "text-foreground hover:bg-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
