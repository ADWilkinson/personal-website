import { investors, socials } from 'constants/general'

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
            Web3 Founder / Advisor / Engineer & Angel Investor
          </p>
          <p className="text-center  font-semibold tracking-wider uppercase ">
            <span className="block text-xs pt-2 font-medium ">
              <span className="px-2 py-0.5 border rounded-l border-theme-pan-navy">
                Discord:{' '}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-r border-theme-pan-navy text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                Davy Jones#0001
              </span>
              <span className="ml-3 px-2 py-0.5 border rounded-l border-theme-pan-navy">
                Telegram:{' '}
              </span>
              <span className="inline-flex  items-center px-2 py-0.5  rounded-r border-theme-pan-navy hover:bg-theme-pan-sky  text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                <a href="https://t.me/DavyJones_0x" target={'_blank'}>
                  DavyJones_0x
                </a>
              </span>
              <span className="ml-3 px-2 py-0.5 border rounded-l border-theme-pan-navy">
                Telegram:{' '}
              </span>
              <span className="inline-flex  items-center px-2 py-0.5  rounded-r border-theme-pan-navy hover:bg-theme-pan-sky  text-xs font-medium bg-theme-pan-navy text-theme-pan-champagne">
                <a href="https://t.me/blackpearlmercantile" target={'_blank'}>
                  AMA Crypto Help
                </a>
              </span>
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

          <div className="container max-w-4xl justify-center mx-auto  mt-10">
            <p className="text-left text-2xl font-semibold  tracking-wider uppercase sm:text-2xl lg:text-2xl ">
              <span className=" text-theme-pan-champagne bg-theme-pan-navy p-2 rounded">
                CURRENT
              </span>
            </p>
            <div className=" border-l-2 pt-2 border-theme-pan-navy pl-5 lg:col-span-2">
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
                    Set Protocol - Advisor
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
          <div className="container max-w-4xl justify-center mx-auto  mt-10">
            <p className="text-left text-2xl font-semibold  tracking-wider uppercase sm:text-2xl lg:text-2xl ">
              <span className=" text-theme-pan-champagne bg-theme-pan-navy p-2 rounded">
                ANGEL INVESTMENTS
              </span>
            </p>
            <div className=" border-l-2 pt-2 border-theme-pan-navy pl-5 lg:col-span-2">
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
                              className="mx-auto h-20 w-20 ring-theme-pan-navy bg-theme-sky ring-1 rounded-full lg:w-24 lg:h-24"
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
        </div>
      </div>
    </div>
  )
}

export default InformationCard
