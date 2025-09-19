import Button from '@/components/Button';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  onNavigateToRegister?: () => void;
}

export default function Hero({ onNavigateToRegister }: HeroProps) {
  const navigate = useNavigate();

  const handleEarlyAccess = () => {
    if (onNavigateToRegister) {
      onNavigateToRegister();
    } else {
      navigate('/register');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[10%] right-[10%] w-[400px] h-[400px] rounded-full opacity-40 animate-float"
          style={{
            background:
              'radial-gradient(circle, rgba(106, 13, 173, 0.4) 0%, rgba(255, 94, 0, 0.2) 100%)',
            filter: 'blur(80px)',
            animationDuration: '25s',
          }}
        />
        <div
          className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] rounded-full opacity-40 animate-float"
          style={{
            background:
              'radial-gradient(circle, rgba(255, 94, 0, 0.3) 0%, rgba(106, 13, 173, 0.2) 100%)',
            filter: 'blur(80px)',
            animationDuration: '30s',
            animationDelay: '-5s',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full opacity-40 animate-float"
          style={{
            background:
              'radial-gradient(circle, rgba(138, 43, 226, 0.3) 0%, rgba(255, 140, 0, 0.2) 100%)',
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)',
            animationDuration: '35s',
            animationDelay: '-10s',
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Coming Soon Badge */}
        <div className="inline-block bg-gradient-sol px-6 py-2 rounded-full font-bold mb-8 animate-pulse-glow">
          COMING SOON
        </div>

        {/* Main Title */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="gradient-text">THE ULTIMATE</span>
          <br />
          <span className="text-white">CRYPTO ROYALE BATTLE</span>
        </h1>

        {/* Old Tagline Restored */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Join the biggest on-chain survival game ever created on Solana
        </p>

        {/* Hero Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 my-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-secondary mb-2 drop-shadow-lg">100</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Players</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-secondary mb-2 drop-shadow-lg">$SOL</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">Rewards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-secondary mb-2 drop-shadow-lg">Q2</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">2026 Launch</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-black text-secondary mb-2 drop-shadow-lg">100%</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">On-Chain</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            variant="hero"
            size="lg"
            onClick={handleEarlyAccess}
            className="rounded-full text-lg px-8 py-4"
          >
            🎮 Get Early Access
          </Button>
          <a
            href="https://genuine-rolypoly-b3aa60.netlify.app/whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 border-2 border-sol-purple text-sol-purple hover:bg-sol-purple/10 hover:border-sol-orange hover:text-sol-orange px-6 py-3 text-base rounded-full text-lg px-8 py-4"
          >
            📄 Read Whitepaper
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-sm text-muted-foreground mt-8">
          Join the waitlist for exclusive rewards and early access to the first blockchain battle royale on Solana
        </p>
      </div>
    </section>
  );
}
