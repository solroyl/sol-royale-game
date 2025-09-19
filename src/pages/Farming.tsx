import { useState, useEffect } from "react";
import Button from '@/components/Button';
import Card from '@/components/Card';
import { ArrowLeft, TrendingUp, Lock, Clock, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

export default function Farming() {
  const navigate = useNavigate();
  const [totalValueLocked, setTotalValueLocked] = useState(2847293.45);
  const [userStats, setUserStats] = useState({
    totalStaked: 0,
    totalEarned: 0,
    pendingRewards: 0
  });

  // Simulate real-time TVL updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTotalValueLocked(prev => prev + (Math.random() - 0.5) * 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const pools = [
    {
      id: 1,
      name: "SOL Staking Pool",
      description: "Stake SOL to earn SRLY tokens with competitive returns",
      tokenPair: "SOL → SRLY",
      apy: 124.5,
      tvl: 1247293.45,
      userStaked: 0,
      userRewards: 0,
      minStake: 0.1,
      lockPeriod: "7 days",
      risk: "Low",
      featured: true
    },
    {
      id: 2,
      name: "SRLY-SOL LP Pool",
      description: "Provide liquidity to earn boosted rewards and trading fees",
      tokenPair: "SRLY-SOL LP → SRLY",
      apy: 287.3,
      tvl: 892847.32,
      userStaked: 0,
      userRewards: 0,
      minStake: 10,
      lockPeriod: "14 days",
      risk: "Medium",
      featured: true
    },
    {
      id: 3,
      name: "Battle Rewards Pool",
      description: "Stake battle NFTs for exclusive rewards and tournament access",
      tokenPair: "Battle NFTs → SRLY",
      apy: 445.8,
      tvl: 456783.21,
      userStaked: 0,
      userRewards: 0,
      minStake: 1,
      lockPeriod: "30 days",
      risk: "High",
      featured: false
    },
    {
      id: 4,
      name: "Early Access Pool",
      description: "Limited time high-yield opportunity for early supporters",
      tokenPair: "SOL → SRLY + NFTs",
      apy: 892.1,
      tvl: 234567.89,
      userStaked: 0,
      userRewards: 0,
      minStake: 5,
      lockPeriod: "60 days",
      risk: "Very High",
      featured: false
    }
  ];

  const handleStake = (poolId: number) => {
    console.log(`Staking in pool ${poolId}`);
    // Implement staking logic
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'High': return 'text-orange-400';
      case 'Very High': return 'text-red-400';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-muted-foreground hover:text-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          
          <div className="font-display text-xl font-black flex items-center gap-2">
            <span className="logo-flame">🔥</span>
            <span className="logo-sol">SOL</span>
            <span className="logo-royale">ROYALE</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="gradient-text">Farming Pools</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stake your tokens and earn rewards while supporting the Sol Royale ecosystem
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="card-sol p-6 bg-background border border-border">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-sol-orange" />
              <span className="text-sm text-muted-foreground">Total Value Locked</span>
            </div>
            <div className="text-2xl font-bold text-secondary">
              ${totalValueLocked.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </div>
          </Card>
          
          <Card className="card-sol p-6 bg-background border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="w-5 h-5 text-sol-purple" />
              <span className="text-sm text-muted-foreground">Your Staked</span>
            </div>
            <div className="text-2xl font-bold text-secondary">
              ${userStats.totalStaked.toFixed(2)}
            </div>
          </Card>
          
          <Card className="card-sol p-6 bg-background border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-sm text-muted-foreground">Pending Rewards</span>
            </div>
            <div className="text-2xl font-bold text-secondary">
              {userStats.pendingRewards.toFixed(4)} 🔥 $SRLY
            </div>
          </Card>
          
          <Card className="card-sol p-6 bg-background border border-border">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              <span className="text-sm text-muted-foreground">Total Earned</span>
            </div>
            <div className="text-2xl font-bold text-secondary">
              {userStats.totalEarned.toFixed(4)} 🔥 $SRLY
            </div>
          </Card>
        </div>

        {/* Pools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pools.map((pool) => (
            <Card key={pool.id} className={`card-sol p-8 bg-background border border-border ${pool.featured ? 'ring-2 ring-sol-orange' : ''}`}>
              {pool.featured && (
                <div className="bg-gradient-sol text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  FEATURED
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{pool.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pool.description}</p>
                <div className="text-sm text-sol-orange font-mono">{pool.tokenPair}</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-secondary">{pool.apy}%</div>
                  <div className="text-xs text-muted-foreground">APY</div>
                </div>
                <div>
                  <div className="text-lg font-bold">
                    ${pool.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                  <div className="text-xs text-muted-foreground">TVL</div>
                </div>
                <div>
                  <div className="text-sm font-semibold">{pool.minStake} SOL</div>
                  <div className="text-xs text-muted-foreground">Min Stake</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold">{pool.lockPeriod}</span>
                    <AlertCircle className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <div className="text-xs text-muted-foreground">Lock Period</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Risk Level:</span>
                  <span className={`text-sm font-semibold ${getRiskColor(pool.risk)}`}>
                    {pool.risk}
                  </span>
                </div>
              </div>

              {pool.userStaked > 0 ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Your Stake:</span>
                    <span className="font-semibold">{pool.userStaked} SOL</span>
                  </div>
                   <div className="flex justify-between text-sm">
                     <span>Pending Rewards:</span>
                     <span className="font-semibold text-sol-orange">{pool.userRewards} 🔥 $SRLY</span>
                   </div>
                  <div className="flex gap-2">
                    <Button variant="sol-outline" size="sm" className="flex-1">
                      Harvest
                    </Button>
                    <Button variant="sol" size="sm" className="flex-1">
                      Add More
                    </Button>
                  </div>
                </div>
              ) : (
                <Button 
                  variant="sol" 
                  className="w-full"
                  onClick={() => handleStake(pool.id)}
                >
                  Stake Now
                </Button>
              )}
            </Card>
          ))}
        </div>

         {/* Info Section */}
         <div className="mt-16 text-center">
           <Card className="card-sol p-8 max-w-2xl mx-auto bg-background border border-border">
            <h3 className="text-xl font-bold mb-4 gradient-text">How Farming Works</h3>
            <div className="text-left space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sol-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>Stake your SOL or SRLY tokens to earn rewards</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sol-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>Higher APY pools have longer lock periods and higher risk</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sol-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>Active gameplay required for maximum staking rewards</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 bg-sol-orange rounded-full mt-2 flex-shrink-0"></span>
                <span>Rewards decrease if you don't participate in battles</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}