import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const slotGames = [
    {
      title: "Mega Jackpot",
      jackpot: "2,450,000₽",
      image: "/img/adcc3f5b-ffe8-4b25-85b8-162b6c5ab7ea.jpg",
      rtp: "96.5%",
      bonus: "Free Spins"
    },
    {
      title: "Vegas Fortune",
      jackpot: "1,850,000₽",
      image: "/img/adcc3f5b-ffe8-4b25-85b8-162b6c5ab7ea.jpg",
      rtp: "95.8%",
      bonus: "Multiplier"
    },
    {
      title: "Neon Diamonds",
      jackpot: "980,000₽",
      image: "/img/adcc3f5b-ffe8-4b25-85b8-162b6c5ab7ea.jpg",
      rtp: "97.2%",
      bonus: "Bonus Round"
    }
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
              <Icon name="Zap" className="text-neon-gold" size={32} />
              <h1 className="text-3xl font-casino font-bold text-neon-gold animate-neon-pulse">
                VEGAS CASINO
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {["Главная", "Игры", "Турниры", "Бонусы", "Поддержка"].map((item) => (
                <a key={item} href="#" className="hover:text-neon-cyan transition-colors">
                  {item}
                </a>
              ))}
            </nav>
            <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white font-bold">
              Регистрация
            </Button>
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

      {/* Popular Games */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-casino font-bold text-center mb-12 text-neon-gold">
            🎰 ПОПУЛЯРНЫЕ СЛОТЫ 🎰
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {slotGames.map((game, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-neon-gold/30 hover:border-neon-gold transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <CardTitle className="text-neon-gold font-casino text-2xl">
                    {game.title}
                  </CardTitle>
                  <CardDescription className="text-neon-cyan font-bold text-xl animate-jackpot-flash">
                    ДЖЕКПОТ: {game.jackpot}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <Badge variant="outline" className="border-neon-green text-neon-green">
                      RTP: {game.rtp}
                    </Badge>
                    <Badge variant="outline" className="border-neon-pink text-neon-pink">
                      {game.bonus}
                    </Badge>
                  </div>
                  <Button className="w-full bg-neon-pink hover:bg-neon-pink/80 text-white font-bold animate-slot-spin hover:animate-none">
                    <Icon name="Play" className="mr-2" />
                    ИГРАТЬ
                  </Button>
                </CardContent>
              </Card>
            ))}
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

      {/* Bonuses */}
      <section className="py-16 bg-gradient-to-r from-neon-purple/10 to-neon-pink/10">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-casino font-bold text-center mb-12 text-neon-pink">
            🎁 БОНУСЫ И АКЦИИ 🎁
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/50 border-neon-gold text-center">
              <CardHeader>
                <Icon name="Gift" className="mx-auto text-neon-gold mb-2" size={48} />
                <CardTitle className="text-neon-gold">Приветственный бонус</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neon-cyan mb-2">200%</p>
                <p className="text-sm text-gray-300">до 100,000₽</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-neon-pink text-center">
              <CardHeader>
                <Icon name="Zap" className="mx-auto text-neon-pink mb-2" size={48} />
                <CardTitle className="text-neon-pink">Фриспины</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neon-cyan mb-2">100</p>
                <p className="text-sm text-gray-300">за депозит</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-neon-cyan text-center">
              <CardHeader>
                <Icon name="RefreshCw" className="mx-auto text-neon-cyan mb-2" size={48} />
                <CardTitle className="text-neon-cyan">Кэшбек</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neon-gold mb-2">25%</p>
                <p className="text-sm text-gray-300">еженедельно</p>
              </CardContent>
            </Card>
            <Card className="bg-black/50 border-neon-green text-center">
              <CardHeader>
                <Icon name="Star" className="mx-auto text-neon-green mb-2" size={48} />
                <CardTitle className="text-neon-green">VIP программа</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-neon-pink mb-2">5★</p>
                <p className="text-sm text-gray-300">уровней</p>
              </CardContent>
            </Card>
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
            <Icon name="Zap" className="text-neon-gold" size={24} />
            <span className="text-xl font-casino font-bold text-neon-gold">VEGAS CASINO</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 Vegas Casino. Играйте ответственно. 18+
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;