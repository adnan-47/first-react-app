

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
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

<div className="section heading">
  <div className="flex justify-center mt-10">
<div className=" tag">Features</div>
</div>
</div>
<div className="section-heading">
<p className="section-description mt-5">
  Revolutionize the Way You Work—One Tool Unlimited Possibilities
</p>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">


<div className="feature md:col-span-2 lg:col-span-1">
  <div></div>
  <div>
    <h2 className="feature-title mt-6">Beautiful themes </h2>
    <p className="feature-description mt-2">Turn your powershell terminal into appealing using next level themes</p>
  </div>
</div>

<div className="feature md:col-span-2 lg:col-span-1">
  <div></div>
  <div>
    <h2 className="feature-title mt-6">History function </h2>
    <p className="feature-description mt-2">Boost your productivity using history function</p>
  </div>
</div>

<div className="feature md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
  <div></div>
  <div>
    <h2 className="feature-title mt-6">Verity collection of icons </h2>
    <p className="feature-description mt-2">turn the terminal more good with the help of icons</p>
  </div>
</div>

</div>
 

  

  








</div>
  </section>
  );
};
