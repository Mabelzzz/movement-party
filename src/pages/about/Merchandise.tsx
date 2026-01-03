import { Layout } from "@/components/Layout";
import { ShoppingBag, Shirt, Flag, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/PageIntro";

const products = [
  {
    id: 1,
    name: "เสื้อยืดพรรคพลวัตร",
    description: "เสื้อยืดคอกลม พิมพ์โลโก้พรรค ผ้าคอตตอน 100%",
    price: 350,
    icon: Shirt,
  },
  {
    id: 2,
    name: "หมวกแก๊ปพรรค",
    description: "หมวกแก๊ปสีเขียว ปักโลโก้พรรค ปรับขนาดได้",
    price: 250,
    icon: Gift,
  },
  {
    id: 3,
    name: "ธงพรรคพลวัตร",
    description: "ธงผ้าคุณภาพสูง พิมพ์ลายโลโก้และสโลแกน",
    price: 150,
    icon: Flag,
  },
  {
    id: 4,
    name: "กระเป๋าผ้าพรรค",
    description: "กระเป๋าผ้าแคนวาส รักษ์โลก พิมพ์โลโก้พรรค",
    price: 199,
    icon: ShoppingBag,
  },
  {
    id: 5,
    name: "เสื้อโปโลพรรค",
    description: "เสื้อโปโลสีเขียว ปักโลโก้พรรค คุณภาพพรีเมียม",
    price: 550,
    icon: Shirt,
  },
  {
    id: 6,
    name: "ชุดของขวัญพรรค",
    description: "ชุดของขวัญรวมสินค้าพรรค 4 ชิ้น ในกล่องสวยงาม",
    price: 999,
    icon: Gift,
  },
];

const Merchandise = () => {
  return (
    <Layout>
      {/* Hero */}
      <PageIntro
        badgeText="สินค้าพรรค"
        title="สินค้าพรรคพลวัตร"
        description="สนับสนุนพรรคด้วยการเลือกซื้อสินค้าคุณภาพจากเรา"
      />

      {/* Products Grid */}
      <section className="py-24 bg-background geometric-bg">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="campaign-card group overflow-hidden opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <product.icon className="w-24 h-24 text-primary/40 group-hover:scale-110 transition-transform" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    ฿{product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    เพิ่มลงตะกร้า
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <h3 className="text-xl font-bold text-foreground mb-2">
              หมายเหตุ
            </h3>
            <p className="text-muted-foreground">
              รายได้จากการจำหน่ายสินค้าจะนำไปสนับสนุนกิจกรรมของพรรคและการพัฒนาชุมชน
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Merchandise;
