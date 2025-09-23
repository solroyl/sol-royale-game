import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { ArrowLeft, Trophy, Heart, Star, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';

const memePrompts = [
  "When you buy the dip but it keeps dipping",
  "Explaining crypto to your parents",
  "Your reaction when you see a green candle",
  "When someone says 'Bitcoin is dead'",
  "Waiting for your altcoin to moon"
];

const sampleMemes = [
  {
    title: "Diamond Hands Forever",
    description: "Never selling, only buying more dips!",
    votes: 42,
    author: "CryptoHodler"
  },
  {
    title: "To The Moon",
    description: "When your portfolio finally goes green",
    votes: 38,
    author: "MoonBoy2024"
  },
  {
    title: "This Is Fine",
    description: "Portfolio down 80% but still holding",
    votes: 35,
    author: "DiamondHanded"
  }
];

export default function MemeBattles() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<'waiting' | 'creating' | 'voting' | 'finished'>('waiting');
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [memeTitle, setMemeTitle] = useState('');
  const [memeDescription, setMemeDescription] = useState('');
  const [stakes, setStakes] = useState('10');
  const [votes, setVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState<number | null>(null);

  const startGame = () => {
    const randomPrompt = memePrompts[Math.floor(Math.random() * memePrompts.length)];
    setCurrentPrompt(randomPrompt);
    setGameState('creating');
  };

  const submitMeme = () => {
    if (memeTitle && memeDescription) {
      setGameState('voting');
      // Simulate some initial votes
      setVotes(Math.floor(Math.random() * 20) + 10);
    }
  };

  const vote = (memeIndex: number) => {
    if (hasVoted === null) {
      setHasVoted(memeIndex);
      if (memeIndex === 0) { // If voting for our meme
        setVotes(votes + 1);
      }
      
      setTimeout(() => {
        setGameState('finished');
      }, 2000);
    }
  };

  const resetGame = () => {
    setGameState('waiting');
    setMemeTitle('');
    setMemeDescription('');
    setVotes(0);
    setHasVoted(null);
    setCurrentPrompt('');
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/games')}
            className="flex items-center gap-2 text-muted-foreground hover:text-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Games
          </Button>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4">
            <span className="gradient-text">🎭 Meme Battles</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Create viral memes and compete for community votes
          </p>
        </div>

        {gameState === 'waiting' && (
          <Card className="card-sol p-8 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Set Your Stakes</h2>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Stake Amount (🔥 $SRLY)</label>
              <input
                type="number"
                value={stakes}
                onChange={(e) => setStakes(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sol-orange"
                min="1"
                max="1000"
              />
            </div>
            <Button variant="hero" onClick={startGame} className="w-full">
              Start Battle ({stakes} 🔥 $SRLY)
            </Button>
          </Card>
        )}

        {gameState === 'creating' && (
          <Card className="card-sol p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Create Your Meme</h2>
            
            <div className="bg-sol-orange/10 border border-sol-orange/30 rounded-lg p-4 mb-6">
              <h3 className="font-bold mb-2">Prompt:</h3>
              <p className="text-lg">{currentPrompt}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Meme Title</label>
                <input
                  type="text"
                  value={memeTitle}
                  onChange={(e) => setMemeTitle(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sol-orange"
                  placeholder="Enter a catchy title..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Meme Description</label>
                <textarea
                  value={memeDescription}
                  onChange={(e) => setMemeDescription(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-sol-orange h-32 resize-none"
                  placeholder="Describe your meme idea..."
                />
              </div>
            </div>

            <Button 
              variant="hero" 
              onClick={submitMeme}
              disabled={!memeTitle || !memeDescription}
              className="w-full mt-6"
            >
              Submit Meme
            </Button>
          </Card>
        )}

        {gameState === 'voting' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Community Voting</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Our meme */}
              <Card className={`card-sol p-6 ${hasVoted === 0 ? 'ring-2 ring-sol-orange' : ''}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{memeTitle}</h3>
                    <p className="text-sm text-muted-foreground">by You</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="font-bold">{votes}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{memeDescription}</p>
                <Button
                  variant={hasVoted === 0 ? "hero" : "sol-outline"}
                  onClick={() => vote(0)}
                  disabled={hasVoted !== null}
                  className="w-full"
                >
                  {hasVoted === 0 ? "Voted!" : "Vote"}
                </Button>
              </Card>

              {/* Sample competing memes */}
              {sampleMemes.slice(0, 3).map((meme, index) => (
                <Card key={index} className={`card-sol p-6 ${hasVoted === index + 1 ? 'ring-2 ring-sol-orange' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{meme.title}</h3>
                      <p className="text-sm text-muted-foreground">by {meme.author}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="font-bold">{meme.votes}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{meme.description}</p>
                  <Button
                    variant={hasVoted === index + 1 ? "hero" : "sol-outline"}
                    onClick={() => vote(index + 1)}
                    disabled={hasVoted !== null}
                    className="w-full"
                  >
                    {hasVoted === index + 1 ? "Voted!" : "Vote"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {gameState === 'finished' && (
          <Card className="card-sol p-8 max-w-md mx-auto text-center">
            <Trophy className="w-16 h-16 text-sol-orange mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">Battle Complete!</h2>
            <p className="text-lg mb-2">Your meme got {votes} votes!</p>
            <p className="text-muted-foreground mb-6">
              {votes >= Math.max(...sampleMemes.map(m => m.votes))
                ? 'Victory! Your meme won! You earned ' + (parseInt(stakes) * 2) + ' 🔥 $SRLY'
                : 'Good effort! Try again for better results.'}
            </p>
            <div className="flex gap-4">
              <Button variant="hero" onClick={resetGame}>
                Create Again
              </Button>
              <Button variant="sol-outline" onClick={() => navigate('/games')}>
                Back to Games
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}