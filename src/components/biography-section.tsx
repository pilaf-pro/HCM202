"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  BookOpen,
  Heart,
  Award,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

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

export default function BiographySection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
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
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6 py-1 text-balance leading-relax"
          >
            Tư tưởng về văn hóa
          </motion.h2>

          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={isHeaderInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 mb-6"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-lg font-semibold text-primary">
              1883 - 1946
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </motion.div> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed"
          >
            Văn hóa là nền tảng tinh thần của sự phát triển xã hội và là mục
            tiêu của sự nghiệp cách mạng
          </motion.p>
        </motion.div>

        {/* Main Content Cards */}
        <div className="space-y-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
            1. Quan Niệm Về Văn Hóa
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
                    Quan niệm
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Hồ Chí Minh quan niệm: "văn hóa là tổng hợp những giá trị vật chất và tinh thần do con người sáng tạo ra trong lịch sử, nhằm phục vụ đời sống và sự phát triển của con người".
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
                    Văn hóa bao gồm:
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Tư tưởng, đạo đức, lối sống</li>
                      <li>Giáo dục, học vấn</li>
                      <li>Nghệ thuật, khoa học</li>
                      <li>Phong tục, tập quán tốt đẹp</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
            2. Vai Trò Của Văn Hóa
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
                    Văn hóa là nền tảng tinh thần của xã hội
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Định hướng tư tưởng, đạo đức và lối sống con người.  Góp phần giữ vững ổn định xã hội và phát triển bền vững
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
                    Văn hóa là mục tiêu của sự nghiệp cách mạng
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Cách mạng không chỉ nhằm giải phóng dân tộc, giai cấp mà còn hướng tới xây dựng con người mới, đời sống tinh thần tiến bộ
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
                    Văn hóa là động lực thúc đẩy phát triển
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Nâng cao dân trí</li>
                      <li>Bồi dưỡng nhân cách, đạo đức</li>
                      <li>Phát huy tính sáng tạo của nhân dân</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          </div>
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent mb-6">
          3. Xây dựng Nền Văn Hoá Mới
        </h3>
        <AnimatedCard>
          <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/10 via-blue-50 to-secondary/10">
            <CardContent className="p-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Xây Dựng Tâm Lý
                  </h4>
                  <p className="text-muted-foreground">
                    Tinh thần độc lập tự cường
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Xây Dựng Luân Lý
                  </h4>
                  <p className="text-muted-foreground">
                    Biết hy sinh thân mình, làm lợi cho quần chúng
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Xây Dựng Xã Hội
                  </h4>
                  <p className="text-muted-foreground">
                    Mọi sự nghiệp liên quan đến phúc lợi của nhân dân
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Xây Dựng Chính Trị
                  </h4>
                  <p className="text-muted-foreground">
                    Dân quyền
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-3">
                    Xây Dựng Kinh Tế
                  </h4>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedCard>
      </div>
    </section>
  );
}
