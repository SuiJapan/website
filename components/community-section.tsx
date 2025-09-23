import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  MessageCircle,
  Twitter,
  Code,
  Users,
  Lightbulb,
} from "lucide-react";

/**
 * コミュニティセクションコンポーネント
 * コミュニティの特徴と参加方法を紹介
 */
export function CommunitySection() {
  const features = [
    {
      icon: Code,
      title: "技術共有",
      description:
        "SuiブロックチェーンとMove言語の最新技術情報を共有し、共に学び成長します。",
    },
    {
      icon: Users,
      title: "ネットワーキング",
      description:
        "日本全国の開発者とつながり、プロジェクトやキャリアの機会を見つけましょう。",
    },
    {
      icon: Lightbulb,
      title: "イノベーション",
      description:
        "革新的なアイデアを形にし、次世代のブロックチェーンアプリケーションを創造します。",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      description: "オープンソースプロジェクトとコードサンプル",
      url: "https://github.com/orgs/SuiJapan",
      color: "hover:bg-primary/10",
    },
    {
      icon: MessageCircle,
      name: "Discord",
      description: "リアルタイムでの技術討論とサポート",
      url: "https://discord.gg/NM8jWvmQ6V",
      color: "hover:bg-accent/10",
    },
    {
      icon: Twitter,
      name: "X (Twitter)",
      description: "最新ニュースとコミュニティアップデート",
      url: "https://x.com/SuiNetwork_JP",
      color: "hover:bg-primary/10",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 water-ripple opacity-30" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              コミュニティの特徴
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Sui Japan Communityは開発者が成長し、イノベーションを起こすための
            最適な環境を提供します
          </p>
        </div>

        {/* 特徴カード */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 group text-center"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* ソーシャルリンク */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8 text-primary">
            コミュニティに参加する
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {socialLinks.map((link, index) => (
              <Card
                key={index}
                className="glass-effect border-accent/20 hover:border-accent/40 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <Button
                    asChild
                    variant="ghost"
                    className={`w-full h-auto p-4 ${link.color} group-hover:scale-105 transition-all duration-300`}
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-3"
                    >
                      <link.icon className="h-8 w-8" />
                      <div className="text-center">
                        <div className="font-semibold text-lg">{link.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          {link.description}
                        </div>
                      </div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
