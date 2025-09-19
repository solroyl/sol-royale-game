import Button from '@/components/Button';
import Card from '@/components/Card';
import { ArrowLeft, Coins, TrendingUp, Shield, Users, Trophy, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

export default function Tokenomics() {
  const navigate = useNavigate();

  const distributionData = [
    {
      percentage: 35,
      title: "In-Game Rewards & Economy",
      description: "Earned via gameplay, loot, quests. Burned when spent on abilities → deflationary pressure.",
      icon: <Coins className="w-6 h-6" />,
      color: "from-sol-orange to-sol-orange-glow"
    },
    {
      percentage: 20,
      title: "Staking Rewards",
      description: "Players stake SOL → receive $SRLY emissions. Emission curve: halving/decay every 12 months.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-sol-purple to-sol-purple-glow"
    },
    {
      percentage: 20,
      title: "Public Sale / IEO",
      description: "Used for liquidity bootstrapping.",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-green-400"
    },
    {
      percentage: 15,
      title: "Team & Development",
      description: "Vesting: linear 3–4 years.",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-blue-400"
    },
    {
      percentage: 5,
      title: "Marketing & Community",
      description: "Airdrops, meme campaigns, KOL collaborations.",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-purple-400"
    },
    {
      percentage: 3,
      title: "Esports / Prize Pools",
      description: "For competitive tournaments & sponsorships.",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-yellow-400"
    },
    {
      percentage: 2,
      title: "Reserve / Treasury",
      description: "Emergency buffer.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-red-400"
    }
  ];

  const utilityFeatures = [
    "In-game currency for abilities, boosts, insurance",
    "Staking rewards (yield farming)",
    "Governance voting on future updates",
    "Access to exclusive tournaments",
    "NFT marketplace transactions",
    "Premium features & cosmetics"
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-sol px-4 py-2 rounded-full text-white font-bold mb-6">
            <span className="text-2xl">🔥</span>
            $SRLY TOKEN
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="gradient-text">Tokenomics</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Deflationary tokenomics designed for sustainable growth and player rewards
          </p>
        </div>

        {/* Token Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="card-sol p-8 text-center bg-background border border-border">
            <div className="text-4xl font-bold text-secondary mb-2">🔥</div>
            <div className="text-lg font-bold mb-1">$SRLY</div>
            <div className="text-sm text-muted-foreground">TICKER</div>
          </Card>
          <Card className="card-sol p-8 text-center bg-background border border-border">
            <div className="text-2xl font-bold text-secondary mb-2">Solana</div>
            <div className="text-sm text-muted-foreground">BLOCKCHAIN</div>
          </Card>
          <Card className="card-sol p-8 text-center bg-background border border-border">
            <div className="text-2xl font-bold text-secondary mb-2">10,000,000</div>
            <div className="text-sm text-muted-foreground">TOTAL SUPPLY (FIXED)</div>
          </Card>
        </div>

        {/* Distribution Chart */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            Token Distribution
          </h2>
          
          {/* Visual Distribution */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Pie Chart Representation */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  {/* This would ideally be a real pie chart, but for now we'll use a visual representation */}
                  <div className="w-full h-full rounded-full bg-gradient-conic from-sol-orange via-sol-purple via-green-500 via-blue-500 via-purple-500 via-yellow-500 to-red-500 animate-spin-slow"></div>
                  <div className="absolute inset-16 bg-background rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🔥</div>
                      <div className="text-xl font-bold gradient-text">$SRLY</div>
                      <div className="text-sm text-muted-foreground">Token</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribution Details */}
              <div className="space-y-4">
                {distributionData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-lg text-secondary">{item.percentage}%</span>
                        <span className="font-semibold">{item.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Utility Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            Token Utility
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {utilityFeatures.map((feature, index) => (
              <Card key={index} className="card-sol p-6 bg-background border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-sol-orange mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Staking Mechanism */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            Staking Mechanism
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="card-sol p-8 bg-background border border-border">
              <h3 className="text-xl font-bold mb-4 text-secondary">Survivor Pool Concept</h3>
              <p className="text-muted-foreground mb-4">
                Full APY only for active players. The more you play, the more you earn. 
                Inactive stakers see reduced rewards, encouraging active participation.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sol-orange rounded-full"></span>
                  Active gameplay required for maximum rewards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sol-orange rounded-full"></span>
                  Emission decay every 12 months
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sol-orange rounded-full"></span>
                  Deflationary pressure through ability burning
                </li>
              </ul>
            </Card>
            
            <Card className="card-sol p-8 bg-background border border-border">
              <h3 className="text-xl font-bold mb-4 text-secondary">Emission Schedule</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span>Year 1</span>
                  <span className="font-bold text-sol-orange">100% APY</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span>Year 2</span>
                  <span className="font-bold text-sol-orange">50% APY</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/30">
                  <span>Year 3</span>
                  <span className="font-bold text-sol-orange">25% APY</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>Year 4+</span>
                  <span className="font-bold text-sol-orange">12.5% APY</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-sol p-12 max-w-2xl mx-auto bg-background border border-border">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Join?</h3>
            <p className="text-muted-foreground mb-8">
              Get early access to 🔥 $SRLY tokens and start your journey in Sol Royale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => navigate('/register')}>
                Join Early Access
              </Button>
              <Button variant="sol-outline" onClick={() => navigate('/farming')}>
                Start Farming
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}