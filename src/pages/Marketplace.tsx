import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import PurchaseModal from '@/components/PurchaseModal';
import { ArrowLeft, Shield, Zap, Users, Target, Eye, Crown, Share, Wand2, Shuffle, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

export default function NFTMarketplace() {
  const navigate = useNavigate();
  const [selectedNFT, setSelectedNFT] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ownedNFTs, setOwnedNFTs] = useState<Set<string>>(new Set());

  const freeClasses = [
    {
      name: "The Hodler",
      icon: "🛡",
      power: "Resistance to market crashes",
      description: "Survive longer during economic downturns and market volatility",
      price: "Free",
      rarity: "Common",
      abilities: ["20% crash resistance", "Extended survival time", "Market immunity"],
      lucideIcon: <Shield className="w-6 h-6" />
    },
    {
      name: "The Trader",
      icon: "⚡",
      power: "Enhanced trading yields",
      description: "Boost your trading profits and transaction success rates",
      price: "Free",
      rarity: "Common",
      abilities: ["25% yield boost", "Faster transactions", "Lower fees"],
      lucideIcon: <Zap className="w-6 h-6" />
    },
    {
      name: "The Networker",
      icon: "🤝",
      power: "Alliance bonuses",
      description: "Strengthen team bonds and unlock cooperative advantages",
      price: "Free",
      rarity: "Common",
      abilities: ["Alliance damage +15%", "Shared resources", "Team coordination"],
      lucideIcon: <Users className="w-6 h-6" />
    },
    {
      name: "The Sniper",
      icon: "🎯",
      power: "Battle accuracy improvements",
      description: "Precise targeting and critical hit enhancements",
      price: "Free",
      rarity: "Common",
      abilities: ["30% accuracy boost", "Critical hit chance", "Range extension"],
      lucideIcon: <Target className="w-6 h-6" />
    },
    {
      name: "The Researcher",
      icon: "🔬",
      power: "Breakthrough chance bonuses",
      description: "Discover rare opportunities and hidden advantages",
      price: "Free",
      rarity: "Common",
      abilities: ["Discovery rate +20%", "Rare item chance", "Knowledge bonus"],
      lucideIcon: <Eye className="w-6 h-6" />
    }
  ];

  const premiumClasses = [
    {
      name: "The Whale",
      icon: "👑",
      power: "Starts with bonus SOL",
      description: "Begin each game with significant economic advantages",
      price: "500 🔥 $SRLY",
      rarity: "Legendary",
      abilities: ["Start with 10 SOL", "Economic immunity", "Market manipulation"],
      lucideIcon: <Crown className="w-6 h-6" />
    },
    {
      name: "The Liquidator",
      icon: "🦈",
      power: "Force-buy opponent positions",
      description: "Aggressive trading tactics to dominate the marketplace",
      price: "750 🔥 $SRLY",
      rarity: "Legendary",
      abilities: ["Force liquidations", "Position stealing", "Market pressure"],
      lucideIcon: <Share className="w-6 h-6" />
    },
    {
      name: "The Oracle",
      icon: "🧙",
      power: "Advance chaos event warnings",
      description: "Foresee market events and prepare strategic countermeasures",
      price: "1000 🔥 $SRLY",
      rarity: "Mythic",
      abilities: ["Event prediction", "Early warnings", "Strategic preparation"],
      lucideIcon: <Wand2 className="w-6 h-6" />
    },
    {
      name: "The Wildcard",
      icon: "🃏",
      power: "Completely random bonuses",
      description: "Unpredictable abilities that can turn the tide of battle",
      price: "300 🔥 $SRLY",
      rarity: "Epic",
      abilities: ["Random power-ups", "Surprise advantages", "Chaos bonuses"],
      lucideIcon: <Shuffle className="w-6 h-6" />
    }
  ];

  const handlePurchase = (nft: any) => {
    setSelectedNFT(nft);
    setIsModalOpen(true);
  };

  const handlePurchaseComplete = () => {
    if (selectedNFT) {
      setOwnedNFTs(prev => new Set([...prev, selectedNFT.name]));
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-gray-400';
      case 'Epic': return 'text-purple-400';
      case 'Legendary': return 'text-yellow-400';
      case 'Mythic': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'border-gray-400/30';
      case 'Epic': return 'border-purple-400/30';
      case 'Legendary': return 'border-yellow-400/30';
      case 'Mythic': return 'border-red-400/30';
      default: return 'border-gray-400/30';
    }
  };

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
            <Crown className="w-5 h-5" />
            🎮 NFT MARKETPLACE
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="gradient-text">Character Classes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enhance your gameplay with powerful NFT character classes. Buy with 🔥 $SRLY tokens and dominate the arena.
          </p>
        </div>

        {/* Wallet Balance */}
        <div className="mb-12">
          <Card className="card-sol p-6 max-w-md mx-auto text-center">
            <h3 className="text-lg font-bold text-secondary mb-2">Your Wallet</h3>
            <div className="text-3xl font-bold gradient-text mb-2">1,250 🔥 $SRLY</div>
            <p className="text-sm text-muted-foreground">Available for NFT purchases</p>
          </Card>
        </div>

        {/* Free Base Classes */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            Free Base Classes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeClasses.map((nftClass, index) => (
              <Card key={index} className={`card-sol p-6 border-2 ${getRarityBorder(nftClass.rarity)} hover:scale-105 transition-all duration-300`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">{nftClass.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-2">{nftClass.name}</h3>
                  <p className={`text-sm font-bold ${getRarityColor(nftClass.rarity)} mb-2`}>{nftClass.rarity}</p>
                  <p className="text-muted-foreground text-sm">{nftClass.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-secondary mb-3">Abilities:</h4>
                  <div className="space-y-2">
                    {nftClass.abilities.map((ability, abilityIndex) => (
                      <div key={abilityIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-sol-orange rounded-full"></div>
                        <span className="text-xs text-muted-foreground">{ability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400 mb-4">{nftClass.price}</div>
                  <Button variant="sol-outline" className="w-full" disabled>
                    Already Owned
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Premium Classes */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            Premium Classes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {premiumClasses.map((nftClass, index) => (
              <Card key={index} className={`card-sol p-8 border-2 ${getRarityBorder(nftClass.rarity)} hover:scale-105 transition-all duration-300`}>
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-6xl">{nftClass.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary mb-2">{nftClass.name}</h3>
                    <p className={`text-sm font-bold ${getRarityColor(nftClass.rarity)} mb-2`}>{nftClass.rarity}</p>
                    <p className="text-muted-foreground">{nftClass.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-secondary mb-4">Special Abilities:</h4>
                  <div className="space-y-3">
                    {nftClass.abilities.map((ability, abilityIndex) => (
                      <div key={abilityIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-sol-orange rounded-full"></div>
                        <span className="text-muted-foreground">{ability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold gradient-text">{nftClass.price}</div>
                  <Button variant="hero" className="px-8">
                    Purchase
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Trading Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-display font-bold text-center mb-12 gradient-text">
            Marketplace Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-sol p-6 text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Trade & Sell</h3>
              <p className="text-muted-foreground">Trade your NFTs with other players or sell them back to the marketplace</p>
            </Card>
            
            <Card className="card-sol p-6 text-center">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Upgrade System</h3>
              <p className="text-muted-foreground">Enhance your NFTs with experience points and additional abilities</p>
            </Card>
            
            <Card className="card-sol p-6 text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-lg font-bold text-secondary mb-2">Rare Drops</h3>
              <p className="text-muted-foreground">Discover limited edition NFTs through gameplay achievements</p>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="card-sol p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Start Your Collection</h3>
            <p className="text-muted-foreground mb-8">
              Choose your character class and gain the competitive edge in Sol Royale battles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" onClick={() => navigate('/games')}>
                Enter Battles
              </Button>
              <Button variant="sol-outline" onClick={() => navigate('/farming')}>
                Earn 🔥 $SRLY
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <PurchaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        nft={selectedNFT}
        onPurchase={handlePurchaseComplete}
      />
    </div>
  );
}