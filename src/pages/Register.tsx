import { useState, useEffect } from "react";
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Label from '@/components/Label';
import Checkbox from '@/components/Checkbox';
import { ArrowLeft, Users, Clock, Gift, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ParticleBackground from '@/components/ParticleBackground';
import { useToast } from '@/hooks/use-toast';

export default function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: "",
    walletAddress: "",
    username: "",
    discordUsername: "",
    experience: "",
    referralCode: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
    isWaiting?: boolean;
    expired?: boolean;
  }>({});
  const [availableSeats, setAvailableSeats] = useState(150);
  const [registrationStatus, setRegistrationStatus] = useState("waiting");

  // Countdown timer
  useEffect(() => {
    const startDate = new Date("2025-09-14T00:00:00").getTime();
    const endDate = new Date("2025-10-01T23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();

      if (now < startDate) {
        const timeToStart = startDate - now;
        setTimeLeft({
          days: Math.floor(timeToStart / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeToStart % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeToStart % (1000 * 60)) / 1000),
          isWaiting: true,
        });
        setRegistrationStatus("waiting");
      } else if (now >= startDate && now < endDate) {
        const timeToEnd = endDate - now;
        setTimeLeft({
          days: Math.floor(timeToEnd / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeToEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeToEnd % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeToEnd % (1000 * 60)) / 1000),
          isWaiting: false,
        });
        setRegistrationStatus("active");
      } else {
        setTimeLeft({ expired: true });
        setRegistrationStatus("expired");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitted(true);
      setAvailableSeats(prev => Math.max(0, prev - 1));
      
      toast({
        title: "Registration Successful! 🎉",
        description: "Welcome to Sol Royale Early Access",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <ParticleBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <Card className="card-sol p-12 max-w-2xl mx-auto text-center">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl font-bold mb-4 gradient-text">Welcome to Sol Royale!</h1>
            <p className="text-muted-foreground mb-8">
              You're now part of the exclusive early access program. 
              We'll keep you updated on all the latest developments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-card/50 rounded-lg">
                <Gift className="w-6 h-6 text-sol-orange mx-auto mb-2" />
                <div className="text-sm font-semibold">Exclusive NFTs</div>
              </div>
              <div className="p-4 bg-card/50 rounded-lg">
                <Zap className="w-6 h-6 text-sol-purple mx-auto mb-2" />
                <div className="text-sm font-semibold">Early 🔥 $SRLY Access</div>
              </div>
              <div className="p-4 bg-card/50 rounded-lg">
                <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">VIP Discord</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="sol" onClick={() => navigate('/')}>
                Back to Home
              </Button>
              <a 
                href="https://discord.gg/QRSVTs9uXK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 border-2 border-sol-purple text-sol-purple hover:bg-sol-purple/10 hover:border-sol-orange hover:text-sol-orange px-4 py-2 text-sm"
              >
                Join Discord
              </a>
            </div>
          </Card>
        </div>
      </div>
    );
  }

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
        {/* Countdown Banner */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-sol px-4 py-2 rounded-full text-white font-bold mb-6">
            <Clock className="w-5 h-5" />
            EARLY ACCESS
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6">
            <span className="gradient-text">Join Sol Royale</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Secure your spot in the most anticipated blockchain battle royale
          </p>

           {/* Countdown */}
          {!timeLeft.expired && (
            <Card className="card-sol p-6 max-w-2xl mx-auto mb-8 bg-background border border-border">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-secondary">{timeLeft.days || 0}</div>
                  <div className="text-sm text-muted-foreground">Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">{timeLeft.hours || 0}</div>
                  <div className="text-sm text-muted-foreground">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">{timeLeft.minutes || 0}</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">{timeLeft.seconds || 0}</div>
                  <div className="text-sm text-muted-foreground">Seconds</div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <Users className="w-4 h-4 text-sol-orange" />
                <span className="text-muted-foreground">
                  {availableSeats} spots remaining
                </span>
              </div>
            </Card>
          )}
        </div>

        {/* Registration Form */}
        <Card className="card-sol p-8 max-w-2xl mx-auto bg-background border border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="username">Username *</Label>
                <Input
                  id="username"
                  required
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="walletAddress">Solana Wallet Address</Label>
                <Input
                  id="walletAddress"
                  value={formData.walletAddress}
                  onChange={(e) => handleInputChange('walletAddress', e.target.value)}
                  className="mt-2"
                  placeholder="Your SOL wallet address"
                />
              </div>
              
              <div>
                <Label htmlFor="discordUsername">Discord Username</Label>
                <Input
                  id="discordUsername"
                  value={formData.discordUsername}
                  onChange={(e) => handleInputChange('discordUsername', e.target.value)}
                  className="mt-2"
                  placeholder="username#1234"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="experience">Gaming Experience</Label>
              <select
                id="experience"
                value={formData.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full mt-2 px-3 py-2 bg-input border border-border rounded-md focus:border-sol-orange focus:ring-2 focus:ring-sol-orange/20 outline-none"
              >
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="pro">Professional</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="referralCode">Referral Code (Optional)</Label>
              <Input
                id="referralCode"
                value={formData.referralCode}
                onChange={(e) => handleInputChange('referralCode', e.target.value)}
                className="mt-2"
                placeholder="Enter referral code"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-sol-orange hover:underline">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="text-sol-orange hover:underline">Privacy Policy</a>
                </label>
              </div>
              
              <div className="flex items-start gap-3">
                <Checkbox
                  id="newsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked) => handleInputChange('subscribeNewsletter', checked as boolean)}
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                  Subscribe to newsletter for updates and exclusive content
                </label>
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              disabled={isSubmitting || !formData.agreeToTerms}
              className="w-full"
            >
              {isSubmitting ? 'Joining...' : 'Join Early Access'}
            </Button>
          </form>
        </Card>

        {/* Benefits */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-sol p-6 text-center bg-background border border-border">
            <Gift className="w-12 h-12 text-sol-orange mx-auto mb-4" />
            <h3 className="font-bold mb-2">Exclusive NFTs</h3>
            <p className="text-sm text-muted-foreground">
              Rare founder NFTs with special in-game benefits
            </p>
          </Card>
          
          <Card className="card-sol p-6 text-center bg-background border border-border">
            <Zap className="w-12 h-12 text-sol-purple mx-auto mb-4" />
            <h3 className="font-bold mb-2">Early Token Access</h3>
            <p className="text-sm text-muted-foreground">
              Get 🔥 $SRLY tokens before public launch
            </p>
          </Card>
          
          <Card className="card-sol p-6 text-center bg-background border border-border">
            <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">VIP Community</h3>
            <p className="text-sm text-muted-foreground">
              Exclusive Discord access and direct dev communication
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}