import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const crashGames = [
    {
      title: "JetX",
      multiplier: "x12.5",
      image: "/img/8a142dc9-a8ff-4e7a-88aa-a0061f0d14da.jpg",
      status: "В полете",
      players: "1,247"
    },
    {
      title: "Lucky Jet",
      multiplier: "x8.3",
      image: "/img/8a142dc9-a8ff-4e7a-88aa-a0061f0d14da.jpg",
      status: "Взлетел",
      players: "892"
    },
    {
      title: "Space XY",
      multiplier: "x15.7",
      image: "/img/8a142dc9-a8ff-4e7a-88aa-a0061f0d14da.jpg",
      status: "Готовится",
      players: "2,156"
    }
  ];

  const liveGames = [
    { name: "Crazy Time", players: "15,420", status: "live" },
    { name: "Monopoly Live", players: "8,930", status: "live" },
    { name: "Dream Catcher", players: "12,150", status: "live" },
    { name: "Lightning Roulette", players: "9,670", status: "live" }
  ];

  const tournaments = [
    {
      name: "Slots Championship",
      prize: "500,000₽",
      participants: 1247,
      timeLeft: "2д 15ч"
    },
    {
      name: "Weekend Warriors",
      prize: "250,000₽",
      participants: 856,
      timeLeft: "1д 8ч"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-vegas-dark via-vegas-midnight to-black text-white">
      {/* Header */}
      <header className="border-b border-neon-gold/20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="text-neon-gold" size={32} />
              <h1 className="text-3xl font-casino font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-gold via-neon-pink to-neon-cyan animate-neon-pulse">
                NEON SLOTS
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Главная", "Игры", "Турниры", "Бонусы", "Поддержка"].map((item) => (
                <a key={item} href="#" className="hover:text-neon-cyan transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <div className="flex space-x-3">
              <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black">
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:scale-105 transition-transform text-white font-bold px-6">
                <Icon name="UserPlus" className="mr-2" size={16} />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-casino font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-pink animate-neon-pulse">
            ДЖЕКПОТ
          </h2>
          <p className="text-2xl md:text-3xl mb-8 text-neon-cyan font-bold animate-jackpot-flash">
            8,750,000₽
          </p>
          <p className="text-xl mb-8 text-gray-300">
            Испытай удачу в лучших игровых автоматах!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-neon-gold to-vegas-gold hover:scale-105 transition-transform text-black font-bold text-lg px-8 py-4">
              <Icon name="Play" className="mr-2" />
              Играть сейчас
            </Button>
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold text-lg px-8 py-4">
              <Icon name="Gift" className="mr-2" />
              Получить бонус
            </Button>
          </div>
        </div>
      </section>

      {/* Crash Games */}
      <section className="py-16 bg-gradient-to-br from-black via-blue-900/20 to-black">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-casino font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-400">
            🚀 КРЭШ ИГРЫ 🚀
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {crashGames.map((game, index) => (
              <Card key={index} className="bg-gradient-to-br from-blue-900/30 to-black border-neon-cyan/40 hover:border-neon-cyan transition-all hover:scale-105 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <Badge className={`${game.status === 'В полете' ? 'bg-green-500' : game.status === 'Взлетел' ? 'bg-red-500' : 'bg-yellow-500'} text-white font-bold animate-pulse`}>
                    {game.status}
                  </Badge>
                </div>
                <CardHeader className="text-center">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-32 object-cover rounded-md mb-4 opacity-80"
                  />
                  <CardTitle className="text-neon-cyan font-casino text-2xl">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-neon-gold font-bold text-3xl animate-neon-pulse">
                    {game.multiplier}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Игроков: {game.players}</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm">LIVE</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-neon-cyan to-blue-500 hover:scale-105 transition-transform text-white font-bold text-lg">
                    <Icon name="Rocket" className="mr-2" />
                    ВЗЛЕТЕЛИ!
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Live Casino Games */}
          <div className="bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-2xl p-8">
            <h4 className="text-3xl font-casino font-bold text-center mb-8 text-neon-pink">
              🎲 ЖИВЫЕ ИГРЫ 🎲
            </h4>
            <div className="grid md:grid-cols-4 gap-6">
              {liveGames.map((game, index) => (
                <Card key={index} className="bg-black/70 border-neon-pink/40 hover:border-neon-pink transition-all group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-neon-pink to-red-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name="Video" className="text-white" size={28} />
                    </div>
                    <h5 className="text-neon-gold font-bold text-lg mb-2">{game.name}</h5>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-red-400 text-sm font-bold">ПРЯМОЙ ЭФИР</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">Игроков: {game.players}</p>
                    <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform text-white font-bold">
                      ИГРАТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Game Providers */}
      <section className="py-16 bg-gradient-to-r from-neon-purple/5 to-neon-cyan/5">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-casino font-bold text-center mb-12 text-neon-gold">
            🎮 ПРОВАЙДЕРЫ ИГР 🎮
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
            {[
              { name: "PG Soft", games: "150+" },
              { name: "Pragmatic Play", games: "200+" },
              { name: "NetEnt", games: "180+" },
              { name: "Microgaming", games: "300+" },
              { name: "Play'n GO", games: "120+" },
              { name: "Evolution", games: "80+" },
              { name: "Red Tiger", games: "90+" },
              { name: "Quickspin", games: "70+" },
              { name: "Yggdrasil", games: "85+" },
              { name: "Push Gaming", games: "60+" },
              { name: "Hacksaw Gaming", games: "45+" },
              { name: "Nolimit City", games: "55+" }
            ].map((provider, index) => (
              <Card key={index} className="bg-black/70 border-neon-gold/30 hover:border-neon-gold transition-all hover:scale-105 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="h-16 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-md mb-3 flex items-center justify-center">
                    <span className="text-neon-gold font-bold text-lg">
                      {provider.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="text-neon-cyan font-bold text-sm mb-1">{provider.name}</h4>
                  <p className="text-gray-400 text-xs">{provider.games} игр</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Featured PG Soft Games */}
          <div className="bg-gradient-to-r from-neon-purple/10 to-neon-pink/10 rounded-xl p-8">
            <h4 className="text-3xl font-casino font-bold text-center mb-8 text-neon-pink">
              🔥 ХИТЫ ОТ PG SOFT 🔥
            </h4>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Fortune Ox", multiplier: "x5000", feature: "Bonus Buy" },
                { name: "Mahjong Ways", multiplier: "x2000", feature: "Free Spins" },
                { name: "Wild Bounty", multiplier: "x10000", feature: "Cascading" },
                { name: "Candy Burst", multiplier: "x3000", feature: "Cluster Pays" }
              ].map((game, index) => (
                <Card key={index} className="bg-black/80 border-neon-pink/40 hover:border-neon-pink transition-all">
                  <CardHeader className="text-center pb-2">
                    <div className="h-32 bg-gradient-to-br from-neon-gold/20 to-neon-pink/20 rounded-md mb-2 flex items-center justify-center">
                      <Icon name="Gamepad2" className="text-neon-gold" size={40} />
                    </div>
                    <CardTitle className="text-neon-gold text-lg">{game.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center mb-3">
                      <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink">
                        {game.multiplier}
                      </Badge>
                      <Badge variant="outline" className="border-neon-cyan text-neon-cyan text-xs">
                        {game.feature}
                      </Badge>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-purple hover:scale-105 transition-transform text-white font-bold">
                      ИГРАТЬ
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-casino font-bold text-center mb-12 text-neon-cyan">
            🏆 ТУРНИРЫ 🏆
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {tournaments.map((tournament, index) => (
              <Card key={index} className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 border-neon-purple">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-neon-gold font-casino">
                        {tournament.name}
                      </CardTitle>
                      <CardDescription className="text-neon-cyan text-lg">
                        Призовой фонд: {tournament.prize}
                      </CardDescription>
                    </div>
                    <Badge className="bg-vegas-red text-white font-bold">
                      {tournament.timeLeft}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">
                      Участников: {tournament.participants}
                    </span>
                    <Button className="bg-neon-gold hover:bg-vegas-gold text-black font-bold">
                      <Icon name="Trophy" className="mr-2" />
                      Участвовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Level System & Bonuses */}
      <section className="py-20 bg-gradient-to-br from-black via-neon-purple/5 to-black">
        <div className="container mx-auto px-4">
          <h3 className="text-5xl font-casino font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-pink">
            ⚡ СИСТЕМА УРОВНЕЙ ⚡
          </h3>
          <p className="text-center text-neon-cyan text-xl mb-12">Играй больше — получай больше бонусов!</p>
          
          {/* Level Progress */}
          <div className="bg-gradient-to-r from-black/80 to-gray-900/80 rounded-2xl p-8 mb-12 border border-neon-gold/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-neon-gold to-vegas-gold rounded-full flex items-center justify-center">
                  <Icon name="Crown" className="text-black" size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-neon-gold">Золотой уровень</h4>
                  <p className="text-neon-cyan">750 / 1000 очков опыта</p>
                </div>
              </div>
              <Badge className="bg-neon-pink text-white text-lg px-4 py-2">
                Уровень 4
              </Badge>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 mb-4">
              <div className="bg-gradient-to-r from-neon-gold to-neon-pink h-4 rounded-full animate-pulse" style={{width: '75%'}}></div>
            </div>
            <p className="text-gray-300 text-center">250 очков до следующего уровня</p>
          </div>

          {/* Level Rewards */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {[
              { level: 1, name: "Новичок", icon: "User", color: "text-gray-400", bg: "from-gray-600 to-gray-700", reward: "10 фриспинов" },
              { level: 2, name: "Бронза", icon: "Shield", color: "text-orange-400", bg: "from-orange-600 to-orange-700", reward: "25 фриспинов" },
              { level: 3, name: "Серебро", icon: "Award", color: "text-gray-300", bg: "from-gray-400 to-gray-500", reward: "50 фриспинов" },
              { level: 4, name: "Золото", icon: "Crown", color: "text-neon-gold", bg: "from-neon-gold to-vegas-gold", reward: "100 фриспинов", active: true },
              { level: 5, name: "Платина", icon: "Gem", color: "text-neon-cyan", bg: "from-neon-cyan to-blue-400", reward: "250 фриспинов" }
            ].map((tier, index) => (
              <Card key={index} className={`text-center transition-all hover:scale-105 ${tier.active ? 'border-neon-gold bg-gradient-to-br from-neon-gold/10 to-black' : 'bg-black/60 border-gray-700'}`}>
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${tier.bg} flex items-center justify-center mb-3`}>
                    <Icon name={tier.icon as any} className={tier.active ? "text-black" : "text-white"} size={24} />
                  </div>
                  <CardTitle className={`${tier.color} text-lg`}>
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-gray-400">Уровень {tier.level}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-neon-cyan font-bold">{tier.reward}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Current Bonuses */}
          <div className="bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 rounded-2xl p-8">
            <h4 className="text-3xl font-casino font-bold text-center mb-8 text-neon-pink">
              🎁 ДОСТУПНЫЕ БОНУСЫ 🎁
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black/70 border-neon-gold/50 hover:border-neon-gold transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-neon-gold to-vegas-gold rounded-full flex items-center justify-center mb-4">
                    <Icon name="Gift" className="text-black" size={40} />
                  </div>
                  <CardTitle className="text-neon-gold text-2xl">Ежедневный бонус</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-neon-cyan mb-2">500₽</p>
                  <p className="text-gray-300 mb-4">+ 20 фриспинов</p>
                  <Button className="w-full bg-gradient-to-r from-neon-gold to-vegas-gold text-black font-bold hover:scale-105 transition-transform">
                    Забрать
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-black/70 border-neon-pink/50 hover:border-neon-pink transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center mb-4">
                    <Icon name="Zap" className="text-white" size={40} />
                  </div>
                  <CardTitle className="text-neon-pink text-2xl">Депозит бонус</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-neon-cyan mb-2">150%</p>
                  <p className="text-gray-300 mb-4">до 50,000₽</p>
                  <Button className="w-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold hover:scale-105 transition-transform">
                    Активировать
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-black/70 border-neon-cyan/50 hover:border-neon-cyan transition-all">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-neon-cyan to-blue-400 rounded-full flex items-center justify-center mb-4">
                    <Icon name="RotateCcw" className="text-black" size={40} />
                  </div>
                  <CardTitle className="text-neon-cyan text-2xl">Кэшбек</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-neon-gold mb-2">15%</p>
                  <p className="text-gray-300 mb-4">еженедельно</p>
                  <Button className="w-full bg-gradient-to-r from-neon-cyan to-blue-400 text-black font-bold hover:scale-105 transition-transform">
                    Получить
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-16 bg-black/50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-casino font-bold mb-8 text-neon-gold">
            ПОДДЕРЖКА 24/7
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Наша команда готова помочь вам в любое время
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-neon-cyan hover:bg-neon-cyan/80 text-black font-bold">
              <Icon name="MessageCircle" className="mr-2" />
              Онлайн чат
            </Button>
            <Button variant="outline" className="border-neon-gold text-neon-gold hover:bg-neon-gold hover:text-black">
              <Icon name="Mail" className="mr-2" />
              Написать email
            </Button>
            <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black">
              <Icon name="Phone" className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-neon-gold/20 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Crown" className="text-neon-gold" size={24} />
            <span className="text-xl font-casino font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-gold to-neon-pink">NEON SLOTS</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Neon Slots. Играйте ответственно. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;