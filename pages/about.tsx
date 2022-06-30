import type { NextPage } from "next";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>about | speaq</title>
      </Head>
      <motion.div
        initial={{ filter: "blur(5px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.4 }}
        className="h-screen pt-6 bg-primary-light flex flex-col"
      >
        <div className="container mx-auto px-4">
          <NavBar />
        </div>

        <div className="container mt-6 px-4 mx-auto flex flex-col flex-grow">
          <div className="mt-6 flex-grow flex flex-col justify-center">
            <h1 className="font-medium text-3xl tracking-tighter">
              About <span className="font-bold">speaq</span>
            </h1>
            <p className="mt-2 tracking-tight leading-tight opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt hic
              ab repudiandae laborum rem earum autem soluta commodi! Odit
              facilis repellendus voluptatum modi consequuntur. Dolorum quaerat
              possimus facere quis sunt vero sequi, reiciendis natus dolore hic
              consequatur omnis amet tempora necessitatibus facilis odit
              incidunt distinctio. Maiores magnam quod repudiandae autem quae
              dolorum iure nam delectus, fugiat temporibus eligendi quasi! Ullam
              culpa accusantium deleniti? Nulla officiis facilis, repellendus
              veniam doloribus omnis quidem obcaecati similique, cumque atque,
              tenetur quibusdam dolore? Perferendis id ratione earum dolor
              laudantium quos sed quisquam cumque voluptatem repellat, atque,
              deleniti ipsam odio placeat rerum. Animi eaque enim doloribus
              labore recusandae beatae rem et quidem unde in maxime eius
              reprehenderit, cum dolores voluptatibus at minus rerum praesentium
              fugit? Rerum reiciendis doloribus eos fugiat natus impedit ratione
              nesciunt hic, in facilis nam. Tempore eveniet, reprehenderit eius
              architecto sed fugiat quo aliquid magnam alias beatae corporis
              recusandae, laudantium sunt odio voluptates. Veniam, dicta.
              Numquam placeat eius quaerat optio itaque porro aperiam et
              officia, nobis odio, vitae doloribus. Voluptates accusantium
              maxime rerum accusamus ad et est totam itaque error ut. Natus
              voluptas illum quisquam fuga nisi, veniam asperiores beatae vero
              adipisci, in perspiciatis officiis quasi vel, exercitationem
              magnam corporis amet sapiente dolorum.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default About;
