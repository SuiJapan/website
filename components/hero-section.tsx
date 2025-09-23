import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Zap } from "lucide-react";
import Link from "next/link";

/**
 * ヒーローセクションコンポーネント
 * メインビジュアルとキャッチコピーを表示
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden water-flow">
      {/* 背景エフェクト */}
      <div className="absolute inset-0">
        <div className="water-ripple absolute top-1/4 left-1/4 w-96 h-96 rounded-full" />
        <div
          className="water-ripple absolute top-3/4 right-1/4 w-64 h-64 rounded-full"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="water-ripple absolute top-1/2 left-1/2 w-80 h-80 rounded-full"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <Waves className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              日本のSui開発者コミュニティ
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Sui Japan Community
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            次世代ブロックチェーンSuiで
            <br />
            <span className="text-primary font-semibold">未来を構築する</span>
            開発者コミュニティ
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="cyber-glow group" asChild>
            <Link
              href="https://discord.gg/NM8jWvmQ6V"
              target="_blank"
              rel="noopener noreferrer"
            >
              コミュニティに参加
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="glass-effect border-primary/30 hover:bg-primary/10 bg-transparent"
            asChild
          >
            <Link
              href="https://docs.sui.io/guides/developer/getting-started"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Zap className="mr-2 h-4 w-4" />
              開発を始める
            </Link>
          </Button>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
