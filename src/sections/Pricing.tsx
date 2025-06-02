

export const Pricing = () => {
  return (
    <section className="py-24">
    <div className="container">
      <div className="section-heading">
      <h2 className="section-title">How to use</h2>
      <p className="section-description mt-5">Clone the git repo below and add the files from the folder terminal into your computer</p>
</div>

  <div className="flex items-center justify-center mt-10">
  <div className="bg-white text-black border border-blue-900 rounded-lg p-4 lg:pb-10 w-[90%] sm:w-[300px] md:w-[600px] lg:w-[900px]  shadow-md">
    <div className="flex space-x-2 mb-3">
      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
      <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
    </div>
    <code className="text-green-600">$</code>{' '}
   <code className="text-black break-all text-sm md:text-lg lg:text-[25px] md:block md:text-center">
  git clone https://github.com/adnan-47/dotfiles.git
</code>
  </div>
</div>
</div>


  </section>
  );
};
