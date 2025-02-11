function App() {
  return (
     <div className="flex flex-col gap-2 text-[white] h-screen">
       <header className="flex flex-1 w-full bg-[#58d2eb] justify-center items-center">
         <h1>Header</h1>
       </header>
       <div className="flex flex-col md:flex-row flex-8 gap-2 w-full">
         <div className="flex flex-1 flex-col gap-2">
           <section className="flex-1 flex justify-center items-start p-4 bg-[#d7c9e3]">
             <h2>Hero</h2>
           </section>
           <section className="flex-2 flex justify-center items-start p-4 bg-[#9fc363]">
             <h2>Sidebar</h2>
           </section>
         </div>
         <div className="flex flex-2 flex-col gap-2">
           <section className="flex-4 flex justify-center items-start p-4 bg-[#f5c646]">
             <h2>Main Content</h2>
           </section>
           <section className="flex-2 flex justify-center items-start p-4 bg-[#898989]">
             <h2>Extra Content</h2>
           </section>
         </div>
       </div>
       <div className="flex flex-col md:flex-row flex-2 gap-2 w-full">
         <section className="flex-4 flex justify-center items-start p-4 bg-[#52b574]">
           <h2>Related Images</h2>
         </section>
         <section className="flex-1 flex justify-center items-start p-4 bg-[#f0cbde]">
           <h2>Related Posts</h2>
         </section>
       </div>
       <footer className="w-full flex-1 bg-[#f5a540] flex justify-center items-center">
         <h1>Footer</h1>
       </footer>
     </div>
   );
}

export default App;
