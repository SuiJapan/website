"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  MessageCircle,
  Twitter,
  ExternalLink,
  Book,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

/**
 * ヘッダーコンポーネント
 * ハンバーガーメニュー形式で各種ソーシャルリンクと公式リソースへのリンクを提供
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="text-2xl font-bold text-primary cyber-glow">
            Sui Japan Community
          </Link>

          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-effect border-b border-border/20 animate-in slide-in-from-top-2 duration-200">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {/* ソーシャルリンクセクション */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    コミュニティ
                  </h3>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start hover:bg-primary/10"
                      onClick={closeMenu}
                    >
                      <Link
                        href="https://github.com/orgs/SuiJapan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Github className="h-5 w-5" />
                        GitHub
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start hover:bg-primary/10"
                      onClick={closeMenu}
                    >
                      <Link
                        href="https://discord.gg/NM8jWvmQ6V"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <MessageCircle className="h-5 w-5" />
                        Discord
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start hover:bg-primary/10"
                      onClick={closeMenu}
                    >
                      <Link
                        href="https://x.com/SuiNetwork_JP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Twitter className="h-5 w-5" />X (Twitter)
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* 区切り線 */}
                <div className="h-px bg-border/40" />

                {/* 公式リソースセクション */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    リソース
                  </h3>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start hover:bg-accent/10"
                      onClick={closeMenu}
                    >
                      <Link
                        href="https://sui.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Sui公式サイト
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start hover:bg-accent/10"
                      onClick={closeMenu}
                    >
                      <Link
                        href="https://docs.sui.io/guides/developer/getting-started"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <FileText className="h-5 w-5" />
                        開発者ドキュメント
                      </Link>
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="w-full justify-start hover:bg-accent/10"
                      onClick={closeMenu}
                    >
                      <Link
                        href="https://move-book.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Book className="h-5 w-5" />
                        Move Book
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
