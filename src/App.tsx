import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tokenomics from "./pages/Tokenomics";
import Farming from "./pages/Farming";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import PurgeGame from "./pages/Purge";
import NFTMarketplace from "./pages/Marketplace";
import Games from "./pages/Games";
import CryptoTrivia from "./pages/games/CryptoTrivia";
import RockPaperScissors from "./pages/games/RockPaperScissors";
import SpeedTrading from "./pages/games/SpeedTrading";
import MemeBattles from "./pages/games/MemeBattles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          <Route path="/farming" element={<Farming />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path= '/games/purge' element={<PurgeGame/>} />
          <Route path= '/marketplace' element={<NFTMarketplace/>} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/crypto-trivia" element={<CryptoTrivia />} />
          <Route path="/games/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/games/speed-trading" element={<SpeedTrading />} />
          <Route path="/games/meme-battles" element={<MemeBattles />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;