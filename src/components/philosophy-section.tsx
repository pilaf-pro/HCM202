"use client";

import { useRef } from "react";
import { color, motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TrendingUp,
  DollarSign,
  Users,
  Zap,
  BookOpen,
  BarChart3,
  CheckCircle,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const theories = [
  {
    icon: TrendingUp,
    title: "Thời Kỳ Quá Độ",
    description: "Giai đoạn cải biến cách mạng",
    color: "blue",
    content:
      "Thời kỳ quá độ là giai đoạn cải biến cách mạng từ xã hội cũ (tư bản chủ nghĩa) sang xã hội mới (chủ nghĩa xã hội). Đây là một quá trình đấu tranh giai cấp, dưới sự lãnh đạo của Đảng Cộng sản.",
  },
  {
    icon: Zap,
    title: "Giai Đoạn Thấp (CNXH)",
    description: "Chủ nghĩa xã hội hoàn toàn",
    color: "amber",
    content:
      "Xã hội vừa thoát thai từ xã hội tư bản nên còn mang nhiều 'dấu vết' về kinh tế, đạo đức và tinh thần. Xây dựng nền kinh tế mới trên cơ sở công hữu hóa các tư liệu sản xuất.",
  },
  {
    icon: Users,
    title: "Giai Đoạn Cao (CNCS)",
    description: "Cộng sản chủ nghĩa",
    color: "green",
    content:
      "Khi lực lượng sản xuất phát triển cực kỳ mạnh mẽ, rào cản về giai cấp bị xóa bỏ hoàn toàn, thực hiện nguyên tắc 'làm theo năng lực, hưởng theo nhu cầu'. Nhà nước sẽ tự động biến mất.",
  },
  {
    icon: CheckCircle,
    title: "Thời Kỳ Quá Độ Lâu Dài",
    color: "purple",
    description: "Con đường Lênin",
    content:
      "V.I. Lênin khẳng định đối với các nước chưa trải qua tư bản chủ nghĩa phát triển, cần một thời kỳ quá độ lâu dài để tiến lên chủ nghĩa xã hội. Đây là con đường độc đáo dựa trên điều kiện cụ thể.",
  },
];

const keyPrinciples = [
  {
    title: "Nguyên lý Cầu Hữu Hiệu",
    description:
      "Lượng cung hàng hóa được quyết định bởi lượng cầu, không phải ngược lại",
  },
  {
    title: "Hệ số Nhân (Multiplier)",
    description:
      "Mỗi đồng chi tiêu của chính phủ tạo ra nhiều hơn một đồng GDP",
  },
  {
    title: "Xu Hướng Tiêu Dùng Biên",
    description:
      "Tỷ lệ thu nhập tăng thêm được dùng để tiêu dùng giảm khi thu nhập tăng",
  },
  {
    title: "Bẫy Thanh Khoản",
    description: "Lãi suất quá thấp khiến chính sách tiền tệ mất hiệu lực",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

function AnimatedCard({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants =
    direction === "left"
      ? fadeInLeft
      : direction === "right"
        ? fadeInRight
        : direction === "scale"
          ? scaleIn
          : fadeInUp;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function PhilosophySection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const colorClasses = {
    blue: {
      gradient: "from-blue-50 to-blue-100/50",
      iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
      icon: "text-blue-600",
      badge: "bg-blue-100 text-blue-700 border-blue-200",
    },
    amber: {
      gradient: "from-amber-50 to-amber-100/50",
      iconBg: "bg-amber-500/15 group-hover:bg-amber-500/25",
      icon: "text-amber-600",
      badge: "bg-amber-100 text-amber-700 border-amber-200",
    },
    green: {
      gradient: "from-green-50 to-green-100/50",
      iconBg: "bg-green-500/15 group-hover:bg-green-500/25",
      icon: "text-green-600",
      badge: "bg-green-100 text-green-700 border-green-200",
    },
    purple: {
      gradient: "from-purple-50 to-purple-100/50",
      iconBg: "bg-purple-500/15 group-hover:bg-purple-500/25",
      icon: "text-purple-600",
      badge: "bg-purple-100 text-purple-700 border-purple-200",
    },
  };

  return (
    <section
      id="philosophy"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isHeaderInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Tư tưởng Hồ Chí Minh
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 pb-1 pt-1 text-balance"
          >
            Tư tưởng về đạo đức
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Đạo đức là gốc của người cách mạng, là sức mạnh tinh thần dẫn dắt sự
            phát triển xã hội
          </motion.p>

          {/* Animated decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isHeaderInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent max-w-md mx-auto mt-8"
          />
        </motion.div>

        {/* Main Content Cards */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
            1. Đạo Đức Là Gốc Của Người Cách Mạng
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard delay={0.2} direction="left">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100/50 h-fit group">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-blue-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-8 h-8 text-blue-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-blue-500 mb-6">
                    Nền Tảng Sức Mạnh
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Đạo đức là nền tảng, là sức mạnh của người cách mạng,
                      giống như gốc của cây, nguồn của sông. "Mọi việc thành hay
                      bại, chủ chốt là do cán bộ có thấm nhuần đạo đức cách mạng
                      hay không".
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4} direction="right">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-amber-50 to-amber-100/50 h-full group">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-secondary/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-secondary/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-secondary mb-6">
                    Tài & Đức
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Có tài mà không có đức là người vô dụng. Có đức mà không
                      có tài thì làm việc gì cũng khó. Cần phải có cả tài lẫn
                      đức.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
            2. Chuẩn Mực Đạo Đức Cách Mạng
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <AnimatedCard delay={0.4} direction="right">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-green-50 to-green-100/50 h-full group">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-green-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-green-500/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-8 h-8 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-green-500 mb-6">
                    Trung & Hiếu
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      "Trung" là trung thành với sự nghiệp dựng nước, "Hiếu" là
                      phục vụ nhân dân, lấy dân làm gốc.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4} direction="right">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100/50 h-full group">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-purple-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-8 h-8 text-purple-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-purple-500 mb-6">
                    Tứ Đức
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Cần, kiệm, liêm, chính, chí công vô tư. Là phẩm chất cốt
                      lõi, thiếu một đức thì không thành người cách mạng.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4} direction="right">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-red-50 to-red-100/50 h-full group">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-red-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-red-500/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-8 h-8 text-red-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-red-500 mb-6">
                    Thương Yêu Con Người
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Là tình cảm nhân ái sâu sắc, rộng lớn dành cho người lao
                      động và nhân loại bị áp bức.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>

            <AnimatedCard delay={0.4} direction="right">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-indigo-50 to-indigo-100/50 h-full group">
                <CardContent className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-indigo-500/20 rounded-xl mb-6 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Briefcase className="w-8 h-8 text-indigo-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-indigo-500 mb-6">
                    Tinh Thần Quốc Tế
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Đoàn kết với giai cấp vô sản và các dân tộc bị áp bức trên
                      thế giới, xây dựng thế giới hòa bình, độc lập.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
          3. Nguyên Tắc Xây Dựng Đạo Đức
        </h3>
        <AnimatedCard>
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 via-blue-50 to-secondary/10">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Nói Đi Đôi Với Làm
                  </h4>
                  <p className="text-muted-foreground">
                    Nguyên tắc quan trọng bậc nhất, chống thói đạo đức giả, nói
                    suông mà không làm.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Xây Đi Đôi Với Chống
                  </h4>
                  <p className="text-muted-foreground">
                    Xây dựng các giá trị đạo đức mới và đấu tranh chống lại cái
                    xấu, cái ác, chủ nghĩa cá nhân.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Tu Dưỡng Suốt Đời
                  </h4>
                  <p className="text-muted-foreground">
                    Đạo đức không phải từ trời rơi xuống mà do rèn luyện bền bỉ
                    hàng ngày như "rửa mặt".
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </section>
  );
}
