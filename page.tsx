import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Zap,
  Calendar,
  BarChart3,
  Instagram,
  Youtube,
  Linkedin,
  TrendingUp,
  Target,
  Lightbulb,
} from "lucide-react"

export default function CognarixLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div>
              <span className="font-serif font-bold text-xl text-foreground">Cognarix AI</span>
              <div className="text-xs text-muted-foreground font-medium">Create Once. Publish Everywhere.</div>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Features
            </a>
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Solutions
            </a>
            <a href="#value" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Value Proposition
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="bg-slate-800 hover:bg-slate-900">Start Free Trial</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-5xl mx-auto">
            <Badge
              variant="secondary"
              className="mb-8 bg-slate-700 text-slate-100 border-slate-600 px-4 py-2 text-sm font-semibold"
            >
              🚀 AI-Powered Content Transformation Platform
            </Badge>
            <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
              <span className="text-slate-200">Create Once.</span>
              <br />
              <span className="text-white">Publish Everywhere.</span>
              <br />
              <span className="text-slate-200">Grow Faster.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Transform single pieces of content into perfectly formatted, platform-optimized posts across Instagram,
              TikTok, LinkedIn, and YouTube.{" "}
              <strong className="text-white">Eliminate the repetitive work that kills creativity</strong> and get back
              hours every week to focus on what matters most: building your brand and engaging your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-slate-600 hover:bg-slate-700 text-white px-10 py-6 text-lg font-semibold shadow-lg"
              >
                Start Your Free Trial Today
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-lg font-semibold border-2 border-slate-400 text-slate-200 hover:bg-slate-800 bg-transparent"
              >
                Watch Demo (2 min)
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-300">
              <span className="flex items-center">✓ No credit card required</span>
              <span className="flex items-center">✓ 14-day free trial</span>
              <span className="flex items-center">✓ Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Icons */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-slate-300 mb-12 text-lg font-medium">
            AI-powered content optimization designed for each platform's unique algorithm
          </p>
          <div className="flex justify-center items-center space-x-16 opacity-70 text-slate-400">
            <div className="flex flex-col items-center space-y-2">
              <Instagram className="h-10 w-10" />
              <span className="text-xs font-medium">Instagram</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-10 h-10 bg-current rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-background">TT</span>
              </div>
              <span className="text-xs font-medium">TikTok</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Linkedin className="h-10 w-10" />
              <span className="text-xs font-medium">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Youtube className="h-10 w-10" />
              <span className="text-xs font-medium">YouTube</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="value" className="py-20 lg:py-32 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl mb-6">
              Turn Your Content Bottleneck Into a Competitive Advantage
            </h2>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto">
              Stop losing creative momentum to tedious reformatting. Focus on what you do best—creating amazing content.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Creative Freedom</div>
                <div className="text-slate-200 font-medium">Eliminate Formatting Busywork</div>
                <p className="text-sm text-slate-100 mt-3">
                  Focus on creating while AI handles the tedious adaptation work
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Platform Mastery</div>
                <div className="text-slate-200 font-medium">Algorithm-Specific Optimization</div>
                <p className="text-sm text-slate-100 mt-3">
                  AI understands each platform's unique voice and format requirements
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 text-slate-200 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Scalable Growth</div>
                <div className="text-slate-200 font-medium">Professional-Grade Automation</div>
                <p className="text-sm text-slate-100 mt-3">
                  Maintain consistent, high-quality posting without hiring specialists
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 lg:py-32 bg-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">Built for Your Success</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Whether you're a business owner scaling your brand or a content creator maximizing your reach, Cognarix AI
              adapts to your unique needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Business Owners */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-slate-200" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-white">For Business Owners</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Turn your content creation bottleneck into a competitive advantage. Maintain a professional
                multi-platform presence without hiring a full marketing team.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Professional Presence:</strong> Consistent, high-quality posting
                    without specialists
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Scalable Growth:</strong> Increase content output without
                    proportional team expansion
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Algorithm-Specific Optimization:</strong> AI-enhanced and optimized
                    captions built for each platform's algorithmic specifications
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Data-Driven:</strong> Unified analytics for engagement and
                    conversions
                  </div>
                </div>
              </div>
            </div>

            {/* Content Creators */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-slate-200" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-white">For Content Creators</h3>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                Stop losing creative momentum to tedious reformatting. Focus on what you do best—creating amazing
                content—while we handle the distribution.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Creative Freedom:</strong> Eliminate formatting busywork so you can
                    focus on creating
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Consistent Growth:</strong> Never miss posting opportunities with
                    automated scheduling
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Platform Optimization:</strong> AI-generated captions and media
                    formats designed for each platform's algorithm
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-2"></div>
                  <div className="text-slate-200">
                    <strong className="text-white">Professional Tools:</strong> Agency-level features accessible to solo
                    creators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-slate-800">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
              Intelligent Automation That Works
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We're not just another scheduling tool—we're the intelligent automation layer that makes
              professional-grade social media management accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 hover:border-slate-500 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-500 transition-colors">
                  <Zap className="h-7 w-7 text-slate-200" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4 text-white">Smart Platform Optimization</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our AI understands each platform's unique voice and format requirements, automatically creating
                  scroll-stopping posts that perform while maintaining your brand consistency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-slate-500 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-500 transition-colors">
                  <Calendar className="h-7 w-7 text-slate-200" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4 text-white">Automated Scheduling</h3>
                <p className="text-slate-300 leading-relaxed">
                  Set optimal posting times for each platform automatically. Our system learns when your audience is
                  most active and schedules accordingly for maximum engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600 hover:border-slate-500 transition-all duration-300 group hover:shadow-lg">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-500 transition-colors">
                  <BarChart3 className="h-7 w-7 text-slate-200" />
                </div>
                <h3 className="font-serif font-bold text-xl mb-4 text-white">Unified Analytics Dashboard</h3>
                <p className="text-slate-300 leading-relaxed">
                  Track performance across all platforms from one dashboard. Get actionable insights that show exactly
                  which content drives engagement and conversions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="font-serif font-bold text-4xl md:text-6xl mb-8 leading-tight">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-slate-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of creators and businesses who refuse to choose between quality and efficiency. Start your
            free trial today and see the difference intelligent automation makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-slate-800 hover:bg-slate-50 px-10 py-6 text-lg font-semibold shadow-xl"
            >
              Start Your Free Trial Today
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-semibold bg-transparent"
            >
              Schedule a Demo
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-200">
            <span>✓ 14-day free trial</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Full feature access</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-slate-700 bg-slate-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <div>
                  <span className="font-serif font-bold text-xl text-white">Cognarix AI</span>
                  <div className="text-xs text-slate-400 font-medium">Create Once. Publish Everywhere.</div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The intelligent automation layer that makes professional-grade social media management accessible to
                everyone.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Features
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Pricing
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  API
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Integrations
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  About
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Blog
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Careers
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Help Center
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Privacy Policy
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Terms of Service
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors block">
                  Status
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400 mb-4 md:mb-0">© 2024 Cognarix AI. All rights reserved.</div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Made with ❤️ for creators worldwide</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
