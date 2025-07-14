import { BrowserRouter as Router, Link } from 'react-router-dom';
import { useState } from 'react';

interface Game {
  id: number;
  awayTeam: string;
  homeTeam: string;
  league: string;
  time: string;
  status: 'upcoming' | 'live';
  awayScore?: number;
  homeScore?: number;
  awayOdds: string;
  homeOdds: string;
  spread: string;
  total: string;
}

interface Bet {
  id: string;
  game: string;
  betType: string;
  odds: string;
  stake: number;
}

// Mock data for games
const mockGames = [
  {
    id: 1,
    awayTeam: 'Lakers',
    homeTeam: 'Warriors',
    league: 'NBA',
    time: '8:00 PM EST',
    status: 'upcoming' as const,
    awayOdds: '+110',
    homeOdds: '-130',
    spread: 'LAL +3.5',
    total: 'O 220.5',
  },
  {
    id: 2,
    awayTeam: 'Cowboys',
    homeTeam: 'Giants',
    league: 'NFL',
    time: '1:00 PM EST',
    status: 'live' as const,
    awayScore: 14,
    homeScore: 7,
    awayOdds: '-110',
    homeOdds: '+105',
    spread: 'DAL -7.5',
    total: 'O 45.5',
  },
  {
    id: 3,
    awayTeam: 'Celtics',
    homeTeam: 'Heat',
    league: 'NBA',
    time: '7:30 PM EST',
    status: 'upcoming' as const,
    awayOdds: '-150',
    homeOdds: '+125',
    spread: 'BOS -3.0',
    total: 'U 215.5',
  },
];

function App() {
  const [selectedSport, setSelectedSport] = useState('all');
  const [betSlip, setBetSlip] = useState<Bet[]>([]);

  const addToBetSlip = (game: Game, betType: string, odds: string) => {
    const bet = {
      id: Math.random().toString(36).substr(2, 9),
      game: `${game.awayTeam} vs ${game.homeTeam}`,
      betType,
      odds,
      stake: 0,
    };
    setBetSlip([...betSlip, bet]);
  };

  const filteredGames =
    selectedSport === 'all'
      ? mockGames
      : mockGames.filter((game) => game.league.toLowerCase() === selectedSport);

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Header */}
        <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">F</span>
                </div>
                <span className="text-2xl font-bold text-green-400">
                  FanDuel
                </span>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex space-x-8">
                <Link
                  to="/sports"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  Sportsbook
                </Link>
                <Link
                  to="/casino"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  Casino
                </Link>
                <Link
                  to="/live"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  Live Betting
                </Link>
                <Link
                  to="/promotions"
                  className="text-white hover:text-green-400 transition-colors"
                >
                  Promotions
                </Link>
              </nav>

              {/* User Actions */}
              <div className="flex items-center space-x-3">
                <button className="text-white hover:text-green-400 transition-colors">
                  Login
                </button>
                <button className="bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="flex">
          {/* Main Content */}
          <div className="flex-1">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 py-12">
              <div className="max-w-7xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  America's #1 Sportsbook
                </h1>
                <p className="text-xl mb-8 text-green-100">
                  Bet on your favorite sports with the best odds and fastest
                  payouts
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                    Get Started - Bet $5, Get $150
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
                    Download App
                  </button>
                </div>
              </div>
            </div>

            {/* Sports Filter */}
            <div className="bg-gray-800 border-b border-gray-700">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex space-x-1 overflow-x-auto">
                  {['all', 'nfl', 'nba', 'mlb', 'nhl'].map((sport) => (
                    <button
                      key={sport}
                      onClick={() => setSelectedSport(sport)}
                      className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-colors ${
                        selectedSport === sport
                          ? 'bg-green-500 text-black'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}
                    >
                      {sport === 'all' ? 'All Sports' : sport.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Games List */}
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Today's Games</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">🔴 Live</span>
                  <span className="text-gray-400">📅 Upcoming</span>
                </div>
              </div>

              <div className="space-y-4">
                {filteredGames.map((game) => (
                  <div
                    key={game.id}
                    className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                  >
                    <div className="p-6">
                      {/* Game Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                            {game.league}
                          </span>
                          {game.status === 'live' && (
                            <span className="flex items-center text-red-400 text-sm">
                              <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
                              LIVE
                            </span>
                          )}
                          <span className="text-gray-400">{game.time}</span>
                        </div>
                      </div>

                      {/* Teams and Score */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-lg">
                                {game.awayTeam}
                              </span>
                              {game.status === 'live' && (
                                <span className="text-2xl font-bold">
                                  {game.awayScore}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-lg">
                                {game.homeTeam}
                              </span>
                              {game.status === 'live' && (
                                <span className="text-2xl font-bold">
                                  {game.homeScore}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Betting Options */}
                        <div className="md:col-span-2">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {/* Moneyline */}
                            <div className="space-y-2">
                              <h4 className="text-sm text-gray-400 font-semibold">
                                MONEYLINE
                              </h4>
                              <button
                                onClick={() =>
                                  addToBetSlip(
                                    game,
                                    `${game.awayTeam} ML`,
                                    game.awayOdds
                                  )
                                }
                                className="w-full bg-gray-700 hover:bg-blue-600 text-white p-3 rounded border border-gray-600 hover:border-blue-500 transition-colors"
                              >
                                <div className="text-sm">{game.awayTeam}</div>
                                <div className="font-bold">{game.awayOdds}</div>
                              </button>
                              <button
                                onClick={() =>
                                  addToBetSlip(
                                    game,
                                    `${game.homeTeam} ML`,
                                    game.homeOdds
                                  )
                                }
                                className="w-full bg-gray-700 hover:bg-blue-600 text-white p-3 rounded border border-gray-600 hover:border-blue-500 transition-colors"
                              >
                                <div className="text-sm">{game.homeTeam}</div>
                                <div className="font-bold">{game.homeOdds}</div>
                              </button>
                            </div>

                            {/* Spread */}
                            <div className="space-y-2">
                              <h4 className="text-sm text-gray-400 font-semibold">
                                SPREAD
                              </h4>
                              <button
                                onClick={() =>
                                  addToBetSlip(game, `${game.spread}`, '-110')
                                }
                                className="w-full bg-gray-700 hover:bg-blue-600 text-white p-3 rounded border border-gray-600 hover:border-blue-500 transition-colors"
                              >
                                <div className="text-sm">{game.spread}</div>
                                <div className="font-bold">-110</div>
                              </button>
                              <button
                                onClick={() =>
                                  addToBetSlip(
                                    game,
                                    `${game.homeTeam} -3.5`,
                                    '-110'
                                  )
                                }
                                className="w-full bg-gray-700 hover:bg-blue-600 text-white p-3 rounded border border-gray-600 hover:border-blue-500 transition-colors"
                              >
                                <div className="text-sm">
                                  {game.homeTeam} -3.5
                                </div>
                                <div className="font-bold">-110</div>
                              </button>
                            </div>

                            {/* Total */}
                            <div className="space-y-2">
                              <h4 className="text-sm text-gray-400 font-semibold">
                                TOTAL
                              </h4>
                              <button
                                onClick={() =>
                                  addToBetSlip(game, game.total, '-110')
                                }
                                className="w-full bg-gray-700 hover:bg-blue-600 text-white p-3 rounded border border-gray-600 hover:border-blue-500 transition-colors"
                              >
                                <div className="text-sm">{game.total}</div>
                                <div className="font-bold">-110</div>
                              </button>
                              <button
                                onClick={() =>
                                  addToBetSlip(
                                    game,
                                    game.total.replace('O', 'U'),
                                    '-110'
                                  )
                                }
                                className="w-full bg-gray-700 hover:bg-blue-600 text-white p-3 rounded border border-gray-600 hover:border-blue-500 transition-colors"
                              >
                                <div className="text-sm">
                                  {game.total.replace('O', 'U')}
                                </div>
                                <div className="font-bold">-110</div>
                              </button>
                            </div>

                            {/* More Bets */}
                            <div className="flex items-center">
                              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded border border-gray-600 transition-colors">
                                <div className="text-sm">More Bets</div>
                                <div className="font-bold">25+</div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bet Slip Sidebar */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 p-6 sticky top-20 h-screen overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Bet Slip</h3>
              <span className="bg-green-500 text-black px-2 py-1 rounded text-sm font-semibold">
                {betSlip.length}
              </span>
            </div>

            {betSlip.length === 0 ? (
              <div className="text-center text-gray-400 py-8">
                <div className="text-4xl mb-4">🎯</div>
                <p>Click on odds to add bets to your slip</p>
              </div>
            ) : (
              <div className="space-y-4">
                {betSlip.map((bet) => (
                  <div key={bet.id} className="bg-gray-700 rounded-lg p-4">
                    <div className="text-sm text-gray-300 mb-2">{bet.game}</div>
                    <div className="font-semibold mb-2">{bet.betType}</div>
                    <div className="text-green-400 font-bold mb-3">
                      {bet.odds}
                    </div>
                    <input
                      type="number"
                      placeholder="Stake"
                      className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-green-500 focus:outline-none"
                      onChange={(e) => {
                        const updatedBetSlip = betSlip.map((b) =>
                          b.id === bet.id
                            ? { ...b, stake: parseFloat(e.target.value) || 0 }
                            : b
                        );
                        setBetSlip(updatedBetSlip);
                      }}
                    />
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-600">
                  <div className="flex justify-between items-center mb-4">
                    <span>Total Stake:</span>
                    <span className="font-bold">
                      $
                      {betSlip
                        .reduce((sum, bet) => sum + (bet.stake || 0), 0)
                        .toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-green-500 text-black py-3 rounded-lg font-bold hover:bg-green-600 transition-colors">
                    Place Bet
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
