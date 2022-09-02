import { investors, socials } from 'constants/general'

const posts = [
   {
    title: 'Introducing Cursed DAO, a Galleon NFT Focused Sub DAO',
    href:
      'https://blog.galleon.community/introducing-cursed-dao-a-galleon-nft-focused-sub-dao-ac85fbf66025',
    category: {
      name: 'Galleon',
      href:
        'https://blog.galleon.community/introducing-cursed-dao-a-galleon-nft-focused-sub-dao-ac85fbf66025',
    },
    description:
      '“And are you prepared for what comes after? The cursed are not bound to me. They are bound to a lifetime of servitude before the mast.',
    date: 'Aug 31',
    datetime: '2022-08-31',
    imageUrl: 'https://miro.medium.com/max/700/1*rpHFmA8ZzV_QdtaSdDcBxw.png',
    readingTime: '7 min',
    author: {
      name: 'Davy Jones',
      href: 'https://andrew-eth.medium.com',
      imageUrl:
        'https://miro.medium.com/fit/c/176/176/1*FmOvNmeaHZwrkEAIrwbnfw.png',
    },
  },
  {
    title: 'Captain’s Log #2 — Outlook & Strategic Shift',
    href:
      'https://blog.galleon.community/captains-log-2-outlook-strategic-shift-26e2d092c0d7',
    category: {
      name: 'Galleon',
      href:
        'https://blog.galleon.community/captains-log-2-outlook-strategic-shift-26e2d092c0d7',
    },
    description:
      'Day 206 at sea. Galleon came afoot into an unchartered, parched archipelago where the dominant land, sea and air mammal were bears.',
    date: 'Aug 26',
    datetime: '2022-08-26',
    imageUrl: 'https://miro.medium.com/max/700/1*LJ59F8yShJBUwT7x19WSNQ.png',
    readingTime: '8 min',
    author: {
      name: 'Davy Jones',
      href: 'https://andrew-eth.medium.com',
      imageUrl:
        'https://miro.medium.com/fit/c/176/176/1*FmOvNmeaHZwrkEAIrwbnfw.png',
    },
  },
  {
    title: 'Below Deck — Black Flag Coalition Faction Preview',
    href:
      'https://blog.galleon.community/below-deck-black-flag-coalition-faction-preview-1e207a7f8f10',
    category: {
      name: 'Cursed Pirates',
      href:
        'https://blog.galleon.community/below-deck-black-flag-coalition-faction-preview-1e207a7f8f10',
    },
    description:
      'Today we’re excited to share a preview of the Cursed Pirates latest faction with you, the Black Flag Coalition.',
    date: 'Aug 11',
    datetime: '2022-08-22',
    imageUrl: 'https://miro.medium.com/max/700/0*p5JDsY_wzp7afPuk.png',
    readingTime: '4 min',
    author: {
      name: 'Davy Jones',
      href: 'https://andrew-eth.medium.com',
      imageUrl:
        'https://miro.medium.com/fit/c/176/176/1*FmOvNmeaHZwrkEAIrwbnfw.png',
    },
  },
]

const InformationCard = () => {
  return (
    <div className="">
      <div className="max-w-7xl  mx-auto ">
        <div className="py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="w-auto text-center justify-center mx-auto">
            <img
              className="inline-flex rounded-full ring-2 ring-theme-pan-navy  translate-x-6  h-32 mb-5 w-auto sm:h-32 text-center justify-center mx-auto"
              src={'./davy.png'}
              alt=""
            />
            <img
              className=" inline-flex rounded-full ring-2 ring-theme-pan-navy  h-32 mb-5 -translate-x-6 w-auto sm:h-32 text-center justify-center mx-auto"
              src={'./personal.jpg'}
              alt=""
            />
          </div>
          <h1 className="text-center text-4xl  font-semibold tracking-tight sm:text-5xl lg:text-5xl">
            <span className="block text-theme-pan-navy font-morion">
              Andrew
            </span>
          </h1>
          <p className="text-base text-center  pb-3 text-theme-pan-navy">
            Web3 Founder, Advisor, Engineer & Angel Investor
          </p>
          <p className="text-center  font-semibold tracking-wider uppercase ">
            <span className="block text-xs pt-2 font-medium ">
              <div className="block text-left  md:inflex-flex lg:inline-flex xl:inline-flex md:text-center lg:text-center xl:text-center">
                <span className="px-2 py-0.5 border rounded-l border-theme-pan-navy">
                  Discord:{' '}
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-r border-theme-pan-navy text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                  Davy Jones#0001
                </span>
              </div>
              <div className="block py-2 md:inflex-flex lg:inline-flex xl:inline-flex md:py-0 lg:py-0 xl:py-0">
                <span className="ml-3 px-2 py-0.5 border rounded-l border-theme-pan-navy">
                  Telegram:{' '}
                </span>
                <span className="inline-flex  items-center px-2 py-0.5  rounded-r border-theme-pan-navy hover:bg-theme-pan-sky  text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                  <a href="https://t.me/DavyJones_0x" target={'_blank'}>
                    DavyJones_0x
                  </a>
                </span>
              </div>
              <div className="block text-right md:inflex-flex lg:inline-flex xl:inline-flex md:text-center lg:text-center xl:text-center">
                <span className="ml-3 px-2 py-0.5 border rounded-l border-theme-pan-navy">
                  Telegram:{' '}
                </span>
                <span className="inline-flex  items-center px-2 py-0.5  rounded-r border-theme-pan-navy hover:bg-theme-pan-sky  text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                  <a href="https://t.me/blackpearlmercantile" target={'_blank'}>
                    AMA Crypto Help
                  </a>
                </span>
              </div>
            </span>
          </p>
          <div className="flex space-x-6 m-auto justify-center mt-4">
            {socials.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                className="text-theme-pan-navy ring-2 rounded-full p-1 ring-theme-pan-navy hover:ring-theme-pan-sky hover:text-theme-pan-sky"
                rel="noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-8 w-8 " aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="container max-w-4xl justify-center mx-auto  mt-16">
            <p className="text-left text-2xl font-semibold  tracking-wider uppercase sm:text-2xl lg:text-2xl ">
              <span className=" text-theme-pan-champagne bg-theme-pan-navy px-4 py-2 rounded">
                CURRENT (WEB3)
              </span>
            </p>
            <div className=" border-l-2 pt-4 border-theme-pan-navy pl-5 lg:col-span-2">
              <dl className="space-y-12 ">
                <div>
                  <dt className="text-xl leading-6 font-semibold font-morion border-theme-pan-navy pt-3 text-theme-pan-navy">
                    Galleon - Founder
                  </dt>
                  <dd className="mt-2 ml-3 text-base text-theme-pan-sky">
                    <a
                      href="https://galleon.community"
                      className=""
                      target={'_blank'}
                    >
                      Website
                    </a>
                    {' | '}
                    <a
                      href="https://discord.gg/galleondao"
                      className=""
                      target={'_blank'}
                    >
                      Discord
                    </a>
                    {' | '}
                    <a
                      href="https://twitter.com/galleondao"
                      className=""
                      target={'_blank'}
                    >
                      Twitter
                    </a>
                  </dd>
                </div>
              </dl>
              <dl className="space-y-12 ">
                <div>
                  <dt className="text-xl leading-6 font-semibold font-morion mt-3 border-t border-theme-pan-navy pt-3 text-theme-pan-navy">
                    Cursed Pirates - Bard
                  </dt>
                  <dd className="mt-2 ml-3 text-base text-theme-pan-sky">
                    <a
                      href="https://cursedpirates.xyz"
                      className=""
                      target={'_blank'}
                    >
                      Website
                    </a>
                    {' | '}
                    <a
                      href="https://discord.gg/galleondao"
                      className=""
                      target={'_blank'}
                    >
                      Discord
                    </a>
                    {' | '}
                    <a
                      href="https://twitter.com/cursedpirates"
                      className=""
                      target={'_blank'}
                    >
                      Twitter
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>{' '}
          <div className="container max-w-4xl justify-center mx-auto  mt-16">
            <p className="text-left text-2xl font-semibold  tracking-wider uppercase sm:text-2xl lg:text-2xl ">
              <span className=" text-theme-pan-champagne bg-theme-pan-navy px-4 py-2 rounded">
                PREVIOUS (WEB3)
              </span>
            </p>
            <div className=" border-l-2 pt-4 border-theme-pan-navy pl-5 lg:col-span-2">
              <dl className="space-y-12 ">
                <div>
                  <dt className="text-xl leading-6 font-semibold font-morion pt-3 text-theme-pan-navy">
                    Set Protocol - Advisor, Growth & Community
                  </dt>
                  <dd className="mt-2 ml-3 text-base text-theme-pan-sky">
                    {' '}
                    <a
                      href="https://tokensets.com"
                      className=""
                      target={'_blank'}
                    >
                      Website
                    </a>
                    {' | '}
                    <a
                      href="https://discord.gg/setprotocol"
                      className=""
                      target={'_blank'}
                    >
                      Discord
                    </a>
                    {' | '}
                    <a
                      href="https://twitter.com/setprotocol"
                      className=""
                      target={'_blank'}
                    >
                      Twitter
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="container max-w-4xl justify-center mx-auto  mt-16">
            <p className="text-left text-2xl font-semibold  tracking-wider uppercase sm:text-2xl lg:text-2xl ">
              <span className=" text-theme-pan-champagne bg-theme-pan-navy px-4 py-2 rounded">
                ANGEL INVESTMENTS
              </span>
            </p>
            <div className=" border-l-2 pt-4 border-theme-pan-navy pl-5 lg:col-span-2">
              <dl className="space-y-12 pt-2">
                <div>
                  <ul
                    role="list"
                    className="mx-auto grid text-center md:grid-cols-3 gap-x-4 gap-y-8 pt-3 sm:grid-cols-1 "
                  >
                    {investors.map((person) => (
                      <li key={person.name}>
                        <a
                          href={person.link}
                          className="focus:outline-none hover:opacity-70"
                        >
                          <div className="space-y-4">
                            <img
                              className="mx-auto h-20 w-20 ring-theme-pan-navy bg-theme-pan-sky ring-1 rounded-full lg:w-24 lg:h-24"
                              src={person.imageUrl}
                              alt=""
                            />
                            <div className="space-y-2">
                              <div className="   text-theme-pan-navy ">
                                <h3 className="font-morion font-semibold text-xl">
                                  {person.name}
                                </h3>
                                <p className="text-theme-pan-sky  text-base">
                                  {person.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </dl>
            </div>
          </div>
          <div className="container max-w-4xl justify-center mx-auto  mt-16">
            <p className="text-left text-2xl font-semibold  tracking-wider uppercase sm:text-2xl lg:text-2xl ">
              <span className=" text-theme-pan-champagne bg-theme-pan-navy px-4 py-2 rounded">
                LATEST WRITING
              </span>
            </p>
            <div className=" border-l-2 pt-4 border-theme-pan-navy pl-5 lg:col-span-2">
              <dl className="space-y-12 pt-2">
                <div>
                  <div className="relative   ">
                    <div className="pt-3 pl-1 mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 ">
                      {posts.map((post) => (
                        <div
                          key={post.title}
                          className="hover:opacity-80 flex flex-col rounded-xl border border-theme-pan-navy overflow-hidden"
                        >
                          <div className="flex-shrink-0">
                            <a
                              target="_blank"
                              href={post.href}
                              rel="noreferrer"
                            >
                              <img
                                className="h-48 w-full object-cover"
                                src={post.imageUrl}
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-theme-pan-sky">
                                <a
                                  target="_blank"
                                  href={post.category.href}
                                  className="hover:underline"
                                  rel="noreferrer"
                                >
                                  {post.category.name}
                                </a>
                              </p>
                              <a
                                target="_blank"
                                href={post.href}
                                className="block mt-2"
                                rel="noreferrer"
                              >
                                <p className="text-xl  font-morion font-semibold text-theme-navy">
                                  {post.title}
                                </p>
                              </a>
                            </div>
                            <div className="mt-6 flex items-center">
                              <div className="flex-shrink-0">
                                <a
                                  target="_blank"
                                  href={post.author.href}
                                  rel="noreferrer"
                                >
                                  <span className="sr-only">
                                    {post.author.name}
                                  </span>
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={post.author.imageUrl}
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="ml-3">
                                <p className="text-sm font-semibold text-theme-navy">
                                  <a
                                    target="_blank"
                                    href={post.author.href}
                                    className="hover:underline"
                                    rel="noreferrer"
                                  >
                                    {post.author.name}
                                  </a>
                                </p>
                                <div className="flex space-x-1 text-sm text-theme-pan-sky">
                                  <time dateTime={post.datetime}>
                                    {post.date}
                                  </time>
                                  <span aria-hidden="true">&middot;</span>
                                  <span>{post.readingTime} read</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="text-xs font-semibold tracking-wider uppercase  block text-right md:inflex-flex lg:inline-flex xl:inline-flex md:text-center lg:text-center xl:text-center">
                        <span className="ml-3 px-2 py-0.5 border rounded-l border-theme-pan-navy">
                          Medium:{' '}
                        </span>
                        <span className="inline-flex   items-center px-2 py-0.5  rounded-r border-theme-pan-navy hover:bg-theme-pan-sky  text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                          <a
                            href="https://andrew-eth.medium.com/"
                            target={'_blank'}
                          >
                            andrew-eth
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationCard
