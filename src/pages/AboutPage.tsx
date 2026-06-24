import { motion } from 'framer-motion'
import { CheckCircle, Users, Target, Zap } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Vizioni Ynë',
      desc: 'Të bëjmë e-commerce më të arritshëm dhe të sigurt për të gjithë.',
    },
    {
      icon: Users,
      title: 'Misioni Ynë',
      desc: 'Të ofrojmë produktet më të mirë me shërbim të përparueshëm.',
    },
    {
      icon: Zap,
      title: 'Inovacioni',
      desc: 'Të përdorim teknologjinë më të fundit për përvojën e përdoruesit.',
    },
    {
      icon: CheckCircle,
      title: 'Cilësia',
      desc: 'Të garantojmë cilësinë në çdo produktet dhe shërbim.',
    },
  ]

  const team = [
    { emri: 'Arben Xhaferi', pozicioni: 'Drejtor Ekzekutiv', imazhi: 'https://via.placeholder.com/200x200?text=CEO' },
    { emri: 'Luiza Hoti', pozicioni: 'Drejtore e Produkteve', imazhi: 'https://via.placeholder.com/200x200?text=CPO' },
    { emri: 'Genci Rexha', pozicioni: 'Drejtori Teknik', imazhi: 'https://via.placeholder.com/200x200?text=CTO' },
    { emri: 'Mimoza Dardha', pozicioni: 'Drejtore e Marketingut', imazhi: 'https://via.placeholder.com/200x200?text=CMO' },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">Rreth Polyshop</h1>
          <p className="text-dark-400 text-lg max-w-3xl mx-auto">
            Polyshop është një platformë e-commerce premium e themeluar me qëllimin e të sjellë 
            përvojën më të mirë të blerjes online në Shqipëri.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="glass-effect p-12 rounded-lg mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Historia Jonë</h2>
          <p className="text-dark-300 text-lg leading-relaxed mb-4">
            Polyshop u themelua në vitin 2024 me një vizion të thjeshtë: të revolucionarizojmë botën e e-commerce 
            në Shqipëri. Pjesa e ekipit tonë të ndihmuese, ne kuptojmë sfidat që përballen përveçse blerësit online 
            në Shqipëri.
          </p>
          <p className="text-dark-300 text-lg leading-relaxed">
            Sot, Polyshop shërblen më shumë se 50,000 përdoruesve, duke siguruar transaksione të sigurta, 
            dorëzime të shpejta dhe shërbim zyrtar të kategorisë.
          </p>
        </motion.section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Vlerat Jonë</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg text-center"
              >
                <value.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-dark-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ekipi Ynë</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-lg text-center hover:border-primary-500/50 smooth-transition"
              >
                <img
                  src={person.imazhi}
                  alt={person.emri}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-bold text-white mb-1">{person.emri}</h3>
                <p className="text-primary-400 text-sm">{person.pozicioni}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="glass-effect p-12 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Përdorues Aktiv' },
              { number: '10K+', label: 'Produkte' },
              { number: '100K+', label: 'Porositë të Dorëzuara' },
              { number: '99.9%', label: 'Satisfaksion Klientësh' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-dark-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}