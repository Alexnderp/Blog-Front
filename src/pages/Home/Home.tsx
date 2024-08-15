import Post from "../../components/Post/Post";

function Home() {
  return (
    <main>
      <section>
        <img
          src="https://i.postimg.cc/Bt97jxtB/banner-404-bugs-g.png"
          alt=""
          className="w-[100vw]"
        />
      </section>
      <section>
        <h2 className="text-3xl text-lime-400 m-9 ml-[4rem] font-Gilroy-Black">
          Sobre Nós:
        </h2>
        <p className="mx-[4rem] text-white text-lg">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
          illum dolor beatae rerum quaerat voluptates laboriosam iure id
          dolores, laborum sapiente, possimus recusandae amet? Quod fuga enim
          illo et neque. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Animi cupiditate totam beatae. Nesciunt deserunt consectetur eos
          necessitatibus quos quas deleniti assumenda commodi impedit sed, dicta
          doloremque, tenetur delectus iure ipsum?
        </p>
        <br />
        <p className="mx-[4rem] text-white text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          maiores numquam corrupti nulla repellendus perferendis voluptates
          enim, ut quidem sunt voluptatem dolore doloribus, est sint, sed eum a
          quas omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsam ad assumenda quia, explicabo, dolorem veniam non laborum et fuga
          eius quisquam minima, laudantium temporibus praesentium suscipit eum
          earum labore dignissimos?
        </p>
      </section>
      <section className="grid grid-cols-3">
        <h2 className="col-span-3 text-lime-400 font-Gilroy-Black text-3xl text-center m-[3rem]">
          Postagens Recentes
        </h2>
        <div className="border-2 border-lime-400 rounded-lg h-[15em] m-[3rem]">
          <Post title={"Alguma coisa"} category={"não sei"} text={"to só testando mesmo pra ver como vai ficar esse bagulho"} />
        </div>
        <div className="border-2 border-lime-400 rounded-lg h-[15em] m-[3rem]">
        <Post title={"Alguma coisa"} category={"não sei"} text={"to só testando mesmo pra ver como vai ficar esse bagulho"} />
        </div>
        <div className="border-2 border-lime-400 rounded-lg h-[15em] m-[3rem]">
        <Post title={"Alguma coisa"} category={"não sei"} text={"to só testando mesmo pra ver como vai ficar esse bagulho"} />
        </div>
      </section>
    </main>
  );
}

export default Home;
