import InformationCard from "./InformationCard";

const Page = (props: { children?: JSX.Element }) => {
  return (
    <div>
      <main>
        <div className="relative  bg-center pt-10 pb-10 bg-theme-pan-champagne min-h-screen">
          <div className="max-w-full mb-32 min-h-screen mx-auto">
            <div className="relative">
              <div className="  relative px-4  py-16 sm:px-6 sm:py-24 lg:py-16 lg:px-8">
     
                <InformationCard></InformationCard>
              </div>
            </div>
          </div>
        </div>
      </main>
      {props.children}
    </div>
  );
};

export default Page;
