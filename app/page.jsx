import Feed from '@components/Feed';

const Home = () => {
  return (
    
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden"/>
        <span className="text-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-spec"> AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Syntho Script is an open-scource AI prompting tool for the modern world to discover, create and share creative prompts 
      </p>

      <Feed />
    </section>

    
  )
}

export default Home