import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import { X, ShoppingCart, Check } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  nft: {
    name: string;
    price: number;
    description: string;
    emoji: string;
    tier: string;
  };
  onPurchase: () => void;
}

export default function PurchaseModal({ isOpen, onClose, nft, onPurchase }: PurchaseModalProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);

  if (!isOpen) return null;

  const handlePurchase = async () => {
    setIsProcessing(true);
    
    // Simulate purchase process
    setTimeout(() => {
      setIsProcessing(false);
      setIsPurchased(true);
      onPurchase();
      
      setTimeout(() => {
        setIsPurchased(false);
        onClose();
      }, 2000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="card-sol p-8 max-w-md w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Purchase NFT</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-secondary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!isPurchased ? (
          <>
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{nft.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
              <p className="text-muted-foreground mb-4">{nft.description}</p>
              <div className="inline-flex items-center gap-2 bg-gradient-sol px-3 py-1 rounded-full text-white text-sm font-bold">
                {nft.tier}
              </div>
            </div>

            <div className="bg-background/50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span>Price:</span>
                <span className="font-bold text-sol-orange">{nft.price} 🔥 $SRLY</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Platform Fee:</span>
                <span className="text-muted-foreground">5 🔥 $SRLY</span>
              </div>
              <div className="border-t border-border/30 pt-2 mt-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-sol-orange">{nft.price + 5} 🔥 $SRLY</span>
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sol-orange rounded-full"></div>
                <span className="text-sm text-muted-foreground">Instant activation after purchase</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sol-orange rounded-full"></div>
                <span className="text-sm text-muted-foreground">Tradeable on secondary market</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-sol-orange rounded-full"></div>
                <span className="text-sm text-muted-foreground">Permanent game bonuses</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="sol-outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button 
                variant="hero" 
                onClick={handlePurchase}
                disabled={isProcessing}
                className="flex-1 flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4" />
                    Purchase
                  </>
                )}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Purchase Successful!</h3>
            <p className="text-muted-foreground">
              Your {nft.name} NFT has been added to your collection
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}