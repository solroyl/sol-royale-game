import Button from '@/components/Button';
import Card from '@/components/Card';
import { ArrowLeft, Swords, Coins, Zap, Target, Trophy, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

export default function Games() {
  const navigate = useNavigate();

  const battleTypes = [
    {
      title: "Crypto Trivia",
      description: "Knowledge-based elimination game where crypto expertise determines survival",
      icon: "🧠",
      features: ["Real-time crypto questions", "Elimination rounds", "Knowledge rewards"],
      color: "from-sol-purple to-sol-purple-glow"
    },
    {
      title: "Rock-Paper-Scissors+",
      description: "Classic game extended with crypto-themed moves and strategies",
      icon: "✂️",
      features: ["Crypto-themed moves", "Best of 3 rounds", "Quick elimination"],
      color: "from-sol-orange to-sol-orange-glow"
    },
    {
      title: "Speed Trading",
      description: "Predict price movements under intense time pressure",
      icon: "📈",
      features: ["Real market data", "60-second rounds", "Accuracy scoring"],
      color: "from-green-500 to-green-400"
    },
    {
      title: "Meme Battles",
      description: "Community-voted creativity contests with viral potential",
      icon: "🎭",
      features: ["Community voting", "Creative challenges", "Viral rewards"],
      color: "from-purple-500 to-purple-400"
    },
    {
      title: "The Purge",
      description: "Last survivor wins - Agar.io style battle royale",
      icon: "⚔️",
      features: ["Real-time survival", "Power-up system", "Arena shrinking"],
      color: "from-red-500 to-orange-500"
    }
  ];

  const stakesFeatures = [
    {
      title: "Challenger Sets Stakes",
      description: "Choose your risk level and potential rewards",
      icon: <Coins className="w-6 h-6" />,
      details: ["Minimum: 0.1 🔥 $SRLY", "Maximum: 1000 🔥 $SRLY", "Custom amounts allowed"]
    },
    {
      title: "Defender Response",
      description: "Accept, counter-offer, or decline the challenge",
      icon: <Target className="w-6 h-6" />,
      details: ["Auto-accept settings", "Counter-offer negotiations", "Decline penalties"]
    },
    {
      title: "Winner Takes All",
      description: "Victor claims stakes plus bonus from prize pool",
      icon: <Trophy className="w-6 h-6" />,
      details: ["Loser's stake transfer", "10% house bonus", "Prize pool distribution"]
    }
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
            <Swords className="w-5 h-5" />
            ⚔️ BATTLE ARENA
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="gradient-text">Game Modes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your battlefield and compete in skill-based challenges for 🔥 $SRLY rewards
          </p>
        </div>

        {/* Battle Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            ⚔️ Battle Types
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {battleTypes.map((battle, index) => (
              <Card key={index} className="card-sol p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{battle.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{battle.title}</h3>
                    <p className="text-muted-foreground">{battle.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {battle.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-sol-orange"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="sol-outline" 
                  className="w-full"
                  onClick={() => {
                    const gameRoutes = [
                      '/games/crypto-trivia',
                      '/games/rock-paper-scissors',
                      '/games/speed-trading',
                      '/games/meme-battles',
                      '/games/purge'
                    ];
                    navigate(gameRoutes[index]);
                  }}
                >
                  Enter Battle
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Stakes System */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            💰 Stakes System
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stakesFeatures.map((stake, index) => (
              <Card key={index} className="card-sol p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-sol rounded-full mb-6">
                  {stake.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{stake.title}</h3>
                <p className="text-muted-foreground mb-6">{stake.description}</p>
                
                <div className="space-y-2">
                  {stake.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-sol-orange rounded-full"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Game Rules */}
        <div className="mb-16">
          <Card className="card-sol p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 gradient-text">Battle Rules</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">How It Works</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-sol-orange font-bold">1.</span>
                    <span className="text-muted-foreground">Choose your battle type and stake amount</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sol-orange font-bold">2.</span>
                    <span className="text-muted-foreground">Wait for a defender to accept your challenge</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sol-orange font-bold">3.</span>
                    <span className="text-muted-foreground">Compete in the selected game mode</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-sol-orange font-bold">4.</span>
                    <span className="text-muted-foreground">Winner takes the combined stakes plus bonus</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-secondary mb-4">Rewards Structure</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span>Winner's Reward</span>
                    <span className="font-bold text-sol-orange">Stakes + 10% Bonus</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/30">
                    <span>House Fee</span>
                    <span className="font-bold text-muted-foreground">5%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Prize Pool Contribution</span>
                    <span className="font-bold text-sol-purple">3%</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-sol p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Battle?</h3>
            <p className="text-muted-foreground mb-8">
              Start your competitive journey and earn 🔥 $SRLY tokens through skill-based gameplay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => navigate('/register')}>
                Join Now
              </Button>
              <Button variant="sol-outline" onClick={() => navigate('/nft-marketplace')}>
                Browse NFTs
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}