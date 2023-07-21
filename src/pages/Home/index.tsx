const Home = () => {
    return (
        <div className="mabContainer">
            <header className="flex flex-wrap items-center justify-between mt-8">
                <div>
                    <span>LOGO</span>
                </div>

                <div className="flex flex-wrap items-center gap-10">
                    <a href="#" className="">Home</a>
                    <a href="" className="border rounded-3xl py-3 px-10">2º Via</a>
                </div>
            </header>

            <div className="border rounded-lg mt-8 bg-white">
                <div className="border rounded-lg m-12 p-0 box2Via">
                    <div className="p-20 flex flex-col items-start justify-center gap-5">
                        <span className="text-white text-[1.5rem] font-light">Bem vindo ao MAB</span>
                        <span className="text-white text-[2.7rem] font-bold">
                            A SOLUÇÃO IDEAL PARA O SEU <br /> GERENCIAMENTO CONDOMINIAL
                        </span>
                        <a href="" className="border rounded-xl py-3 px-10">Acessar 2º Via</a>
                    </div>
                </div>


                <div className="border rounded-lg m-12 flex flex-col bg-zinc-100">
                    <div className="p-10">
                        <span>Content Secundário</span>
                    </div>

                    <div className="mt-8 -mb-[21px] flex justify-center">
                        <a href="" className="border rounded-xl py-2 px-16 bg-violet-900 text-zinc-200 hover:bg-violet-600">Conhecer Mais</a>
                    </div>
                </div>

                <div className="border rounded-lg m-12 flex flex-col bg-zinc-100">
                    <div className="p-10">
                        <span>Content Terciário</span>
                    </div>

                    <div className="mt-8 -mb-[21px] flex justify-center">
                        <a href="" className="border rounded-xl py-2 px-16 bg-violet-900 text-zinc-200 hover:bg-violet-600">Conhecer Mais</a>
                    </div>
                </div>
            </div>

            <footer className="flex flex-col items-center justify-center mt-12 pb-5">
                <span>Copyright © 2023 MAB Assessoria. All rights reserved.</span>
                <span>
                    Developer: <a href="https://myspace-julio-chiuchi.vercel.app/?vercelToolbarCode=2ObpFWLCq15xv0J" target="_blank">
                        Julio Chiuchi
                    </a>
                </span>
            </footer>
        </div>
    );
}

export default Home;
