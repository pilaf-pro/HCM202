"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, Award, Calendar, Quote } from "lucide-react";

const conditions = [
  {
    category: "1. Quan Niệm Về Con Người",
    items: [
      {
        title: "Con Người Là Chỉnh Thể",
        content:
          "Con người vừa là một chỉnh thể (thống nhất trí lực, tâm lực, thể lực), vừa cụ thể (gắn với điều kiện lịch sử, xã hội). Bản chất con người mang tính xã hội.",
      },
      {
        title: "Tính Xã Hội Của Con Người",
        content:
          "Con người chỉ phát triển toàn diện khi được hòa nhập với cộng đồng, khi được phát triển các khả năng tinh thần, đạo đức, thể chất và trí tuệ.",
      },
    ],
  },
  {
    category: "2. Vai Trò Của Con Người",
    items: [
      {
        title: "Mục Tiêu Của Cách Mạng",
        content:
          "Con người là mục tiêu của cách mạng: giải phóng con người, mang lại tự do, hạnh phúc, phát triển toàn diện cho con người.",
      },
      {
        title: "Động Lực Của Cách Mạng",
        content:
          'Con người là động lực của cách mạng, là vốn quý nhất, quyết định thành công. "Trong bầu trời không gì quý bằng nhân dân".',
      },
    ],
  },
  {
    category: '3. Chiến Lược "Trồng Người"',
    items: [
      {
        title: "Tầm Nhìn Dài Hạn",
        content:
          "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người",
        subContent:
          "Cho thấy tầm nhìn chiến lược của Hồ Chí Minh: con người được coi là tài sản lâu dài nhất, quan trọng nhất của xã hội.",
      },
      {
        title: "Xây Dựng Con Người Mới",
        content:
          "Muốn xây dựng chủ nghĩa xã hội, trước hết cần phải có những con người xã hội chủ nghĩa",
        subContent:
          "Con người này phải có tư tưởng mới, tác phong mới, đạo đức mới, là những người hoàn toàn trung thành với sự nghiệp cách mạng, có năng lực làm việc cao.",
      },
    ],
  },
];

const colorClasses = {
  blue: {
    gradient: "from-blue-50 to-blue-100/50",
    badge: "bg-blue-500/20 text-blue-700 group-hover:bg-blue-500/30",
    border: "border-blue-200",
    icon: "text-blue-600",
  },
  amber: {
    gradient: "from-amber-50 to-amber-100/50",
    badge: "bg-amber-500/20 text-amber-700 group-hover:bg-amber-500/30",
    border: "border-amber-200",
    icon: "text-amber-600",
  },
  green: {
    gradient: "from-green-50 to-green-100/50",
    badge: "bg-green-500/20 text-green-700 group-hover:bg-green-500/30",
    border: "border-green-200",
    icon: "text-green-600",
  },
  purple: {
    gradient: "from-purple-50 to-purple-100/50",
    badge: "bg-purple-500/20 text-purple-700 group-hover:bg-purple-500/30",
    border: "border-purple-200",
    icon: "text-purple-600",
  },
  red: {
    gradient: "from-red-50 to-red-100/50",
    badge: "bg-red-500/20 text-red-700 group-hover:bg-red-500/30",
    border: "border-red-200",
    icon: "text-red-600",
  },
  indigo: {
    gradient: "from-indigo-50 to-indigo-100/50",
    badge: "bg-indigo-500/20 text-indigo-700 group-hover:bg-indigo-500/30",
    border: "border-indigo-200",
    icon: "text-indigo-600",
  },
};

function AnimatedCard({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.9 }
      }
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function TeachingsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // FIX: Sử dụng useMemo để tạo vị trí cố định cho floating icons
  // Tránh hydration error do Math.random() tạo giá trị khác nhau giữa server và client
  const floatingPositions = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      left: `${(i * 13 + 15) % 90}%`,
      top: `${(i * 17 + 10) % 85}%`,
    }));
  }, []);

  return (
    <section
      id="teachings"
      className="py-24 bg-gradient-to-br from-amber-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating book icons in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {floatingPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={position}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <BookOpen className="w-16 h-16 text-secondary" />
          </motion.div>
        ))}
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
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">
              Tư tưởng Hồ Chí Minh
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent mb-6 pb-1 pt-1"
          >
            Tư tưởng về con người
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Con người là mục tiêu và động lực của cách mạng, là tài sản quý nhất
            của xã hội
          </motion.p>
        </motion.div>

        {/* Works Grid */}
        <div className="space-y-16">
          {conditions.map((section, sectionIndex) => {
            const iconCycle = [Award, FileText, BookOpen, Quote];

            return (
              <div key={sectionIndex}>
                <div className="mb-8">
                  <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {section.category}
                  </h3>
                  <div className="h-1 w-24 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {section.items.map((item, itemIndex) => {
                    const IconComponent =
                      iconCycle[itemIndex % iconCycle.length];
                    const colors =
                      colorClasses[
                        Object.keys(colorClasses)[
                          (sectionIndex * 2 + itemIndex) %
                            Object.keys(colorClasses).length
                        ] as keyof typeof colorClasses
                      ];

                    return (
                      <AnimatedCard
                        key={`${sectionIndex}-${itemIndex}`}
                        delay={0.1 + (sectionIndex * 4 + itemIndex) * 0.1}
                      >
                        <Card
                          className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br ${colors.gradient} group h-full cursor-pointer`}
                        >
                          <CardContent className="p-8">
                            {/* Icon & Badge Section */}
                            <div className="text-center mb-6">
                              <motion.div
                                whileHover={{ rotate: 360, scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center justify-center w-16 h-16 bg-white/60 rounded-2xl shadow-md mb-4"
                              >
                                <IconComponent
                                  className={`w-8 h-8 ${colors.icon}`}
                                />
                              </motion.div>

                              <motion.div
                                className={`inline-block ${colors.badge} font-bold text-2xl px-5 py-2 rounded-xl mb-4 transition-all duration-300 shadow-sm`}
                                whileHover={{ scale: 1.05 }}
                              >
                                {item.title}
                              </motion.div>
                            </div>

                            {/* Description */}
                            <div
                              className={`border-t-2 ${colors.border} pt-6 space-y-4`}
                            >
                              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                                {item.content}
                              </p>

                              {"subContent" in item && item.subContent && (
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                  {item.subContent}
                                </p>
                              )}

                              {/* Badge */}
                              <motion.div
                                className="bg-white/60 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200"
                                whileHover={{ scale: 1.02 }}
                              >
                                <div className="flex items-center justify-center space-x-2">
                                  <Calendar className="w-4 h-4 text-secondary" />
                                  <span className="text-xs font-semibold text-secondary">
                                    {item.title}
                                  </span>
                                </div>
                              </motion.div>
                            </div>
                          </CardContent>
                        </Card>
                      </AnimatedCard>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
