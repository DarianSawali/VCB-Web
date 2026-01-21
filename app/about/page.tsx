'use client'

import { useState } from 'react'

interface StatementItem {
  title: string
  content: string
  verses: string
}

export default function About() {
  const [openStatements, setOpenStatements] = useState<Set<number>>(new Set())

  const statements: StatementItem[] = [
    {
      title: 'The Father',
      content: 'We believe that our Heavenly Father is loving, all powerful, all knowing, unchanging, and completely holy. Through Him we were created and in Him we live, move, and have our being. He is a good father, a provider, and a protector. He is a covenant keeping God, faithful to all His promises.',
      verses: '1 Cor. 8:6; Eph. 4:6; Ps. 68:5; Matt. 6:26',
    },
    {
      title: 'Jesus',
      content: 'We believe that Jesus Christ is the Son of God, the second person in the Godhead. He is completely God and completely man. He lived a sinless life and came to earth to reconcile mankind to the heart of the Father, sacrificing his life so that we would find life in him. His death and resurrection reconciled man with God, and made a way for all who believe to walk in his power, love, and grace, and receive eternal life.',
      verses: 'Luke 1:26-35; 1 Cor. 15:1-4; Rom. 4:25; 1 Thes. 4:13-18',
    },
    {
      title: 'Holy Spirit',
      content: 'We believe that The Holy Spirit was sent to all believers to bring counsel and comfort, to teach and guide us into all truth, and to convict us of sin, judgment, and righteousness. The Holy Spirit empowered Jesus as he lived on the earth and he now empowers and equips believers to walk in the Spirit, with evidence of the fruits and gifts of the Holy Spirit.',
      verses: 'John 15:26; Acts 1:8; Rom. 8:26',
    },
    {
      title: 'The Trinity',
      content: 'We believe in the Eternal Godhead who has revealed Himself as one God existing in three persons: Father, Son, and Holy Spirit; distinguishable but indivisible. Each member of the trinity holds equal power and authority, existing in complete unity for eternity.',
      verses: 'Matt. 28:19; 2 Cor. 13:14',
    },
    {
      title: 'Man',
      content: 'We believe that man is made in the image of God, created perfectly by God and for God. Man was designed to live in fellowship with God, but became separated through sinful disobedience. The sacrifice of Jesus made a way for man to once again attain a right relationship with God. We believe that every person must be afforded compassion, love, kindness, respect, and dignity.',
      verses: 'Rom. 5:11-21; Eph. 2:8-9; Mark 12:28-31; Luke 6:31',
    },
    {
      title: 'The Bible',
      content: 'We believe that the Bible is God&apos;s Word, a message to all people, inspired and written under the supernatural guidance of the Holy Spirit. The Bible is complete and infallible in nature. It is authoritative in teaching, rebuking and training in all aspects of our daily lives.',
      verses: '2 Tim. 3:16; 1 Cor. 2:13',
    },
    {
      title: 'The Church',
      content: 'We believe the church is a community of believers seeking to make disciples of all nations and to grow together through fellowship and the teaching of the Word. The church is committed to being a beacon of light in the city, sharing the message of the gospel and ultimately sharing the love of Christ.',
      verses: 'Eph. 2:20-22; Heb. 10:24-25; Rom. 12:4-5',
    },
    {
      title: 'Salvation',
      content: 'We believe that salvation is only found through the finished work of Jesus on the cross. It is a gift of God received solely through his grace and cannot be earned by our own efforts. The gift of salvation is given to all who place their faith in the death and resurrection of Jesus and receive his sacrifice as complete payment for their sin. Salvation should produce a fervent obedience to the Word and an active lifestyle of loving God and loving people.',
      verses: 'John 5:24; John 3:16; 2 Thes. 1:9; Luke 10:27',
    },
    {
      title: 'Judgment',
      content: 'We believe Jesus will return to the earth bodily and personally. At the end of the age, he will judge every person according to his or her relationship with God with eternal life in heaven or eternal separation from God.',
      verses: 'Matt. 25:14; Rev. 20:10-15',
    },
    {
      title: 'Marriage & Family',
      content: 'We believe God created marriage as a beautiful covenant relationship between one man and one woman. God wonderfully and immutably created each person as male or female as to reflect His image. The institution of marriage is the context for sexual relationship as well as the raising of children.',
      verses: 'Gen. 1:26-27; Gen. 2:18-25; 1 Cor. 7:2-5; Heb. 13:4',
    },
    {
      title: 'Baptism',
      content: 'We believe in the practice of baptism as modeled in the Bible. We believe in the necessity of water baptism by immersion as a public act to signify the death of our sinful nature and the life received through the resurrection of Jesus. We believe in the baptism of the Holy Spirit as an experience subsequent to salvation, with the Scriptural evidence; namely, speaking in other tongues as the Spirit gives utterance.',
      verses: 'Matt. 28:19; Acts 19:1-6; Acts 2:1-4',
    },
    {
      title: 'Communion',
      content: "We believe communion is a commemoration done in reflection of Jesus' sacrifice for our sins and his gift of redemption offered to us. We partake in the communion elements of bread and wine/juice as a symbol of Jesus' body and blood that were sacrificed for us. Communion is a celebration of His mercy and grace so generously given to us.",
      verses: '1 Cor. 11:24-32; John 6:53',
    },
  ]

  const toggleStatement = (index: number) => {
    setOpenStatements((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-center text-secondary">
            About Us
          </h1>

          {/* 1. Vision and Mission Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision */}
              <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                  Vision
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-secondary mb-6 text-center italic">
                  &ldquo;Building a Church Rooted in the Word, Growing in the Spirit, and Bearing Fruit that will last.&rdquo;
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="italic">
                    &ldquo;Let your roots grow down into him, and let your lives be built on him. Then your faith will grow strong in the truth you were taught, and you will overflow with thankfulness.&rdquo;
                  </p>
                  <p className="text-sm text-gray-600">(Colossians 2:7)</p>
                  <p className="italic">
                    &ldquo;But blessed are those who trust in the Lord and have made the Lord their hope and confidence. They are like trees planted along a riverbank, with roots that reach deep into the water. Such trees are not bothered by the heat or worried by long months of drought. Their leaves stay green, and they never stop producing fruit.&rdquo;
                  </p>
                  <p className="text-sm text-gray-600">(Jeremiah 17:7-8)</p>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
                  Mission
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-secondary mb-6 text-center italic">
                  &ldquo;By the anointing of the Holy Spirit, we are commissioned to transform our communities through Sharing the Gospel, Equipping the Believers, and Planting Churches.&rdquo;
                </p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="italic">
                    &ldquo;The Spirit of the Lord is upon Me, because He has anointed Me to preach the gospel to the poor; He has sent Me to heal the brokenhearted, to proclaim liberty to the captives and recovery of sight to the blind, to set at liberty those who are oppressed; to proclaim the acceptable year of the Lord.&rdquo;
                  </p>
                  <p className="text-sm text-gray-600">(Luke 4:18-19)</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* 2. Our Story Section (Meet Our Pastors) */}
      <section className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-12">
              {/* Ivan & Joanne Jonathan */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="order-2 md:order-1 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Ivan & Joanne Jonathan
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-6">Lead Pastors</p>
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p>
                        Ivan Jonathan was born in Jakarta, Indonesia and was called to be His servant at a young age. In 1996, he moved to Australia and completed his Bachelor&apos;s in Ministry. Upon returning to Indonesia in 2002, he joined the City Blessing Church in Jakarta, working with the Wagner Leadership Institute Asia founded by Dr. C. Peter Wagner.
                      </p>
                      <p>
                        Ivan Jonathan is an ordained minister since 2009 and had been serving as the Associate Pastor of City Blessing Church in Vancouver, British Columbia, Canada. As of November 2012, he serves as the Lead Pastor of City Blessing Church – Metro Vancouver.
                      </p>
                      <p>
                        Ivan Jonathan is an active member of Ministers Fellowship International (MFI) since 2011, which was founded by Ps. Dick Iverson, and led by Dr. Frank Damazio.
                      </p>
                      <p>
                        Ivan currently resides in British Columbia, Canada with his wife Joanne and their two kids, Matthew and Tiffany.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white/20 to-white/10 rounded-xl overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(/images/about/pastors/ivan-joanne.webp)' }}
                    />
                  </div>
                </div>
              </div>

              {/* Peter & Nani Tayu */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-sm p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-stretch">
                  <div className="min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-white/20 to-white/10 rounded-xl overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: 'url(/images/about/pastors/peter-nani.webp)' }}
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Peter & Nani Tayu
                    </h3>
                    <p className="text-lg text-accent font-semibold mb-6">Founding Pastors</p>
                    <div className="space-y-4 text-white/90 leading-relaxed">
                      <p>
                        Peter and Nani Tayu moved to Vancouver, Canada in 1998 and were led by God to plant City Blessing Church in Vancouver, and have been raising leaders since its founding in 1999.
                      </p>
                      <p>
                        Ever since passing on leadership of the church to Ivan and Joanne Jonathan in November 2012, Peter and Nani Tayu have been called to serve in Indonesia. They have two daughters and are blessed with two grandchildren.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* 3. Pillars of Ministries Section */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Pillars of Ministries
            </h2>
            <div className="bg-white rounded-xl shadow-sm p-8 md:p-12">
              <div className="flex flex-col gap-4">
                <div className="w-full rounded-xl overflow-hidden min-h-[500px] md:min-h-[600px] -mb-20">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-xl"
                    style={{ 
                      backgroundImage: 'url(/images/about/pillars/ministry-pillars.webp)',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      minHeight: '500px'
                    }}
                  />
                </div>
                <div className="text-center">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    The four pillars of ministry are foundational to the operations of our church body. Each is equally important and is integral to the growth and empowerment of our church.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Statement of Faith Section */}
          <section className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center">
              Statement of Faith
            </h2>
            
            {/* Desktop View - Grid of Cards */}
            <div className="hidden md:grid md:grid-cols-2 gap-8">
              {statements.map((statement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {statement.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {statement.content}
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    {statement.verses}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile View - Collapsible Cards */}
            <div className="md:hidden space-y-4">
              {statements.map((statement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleStatement(index)}
                    className="w-full px-8 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-secondary text-lg pr-4">
                      {statement.title}
                    </span>
                    <svg
                      className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${
                        openStatements.has(index) ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openStatements.has(index) && (
                    <div className="px-8 pb-8">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {statement.content}
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        {statement.verses}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
