import { useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function OnScrollAnimation() {
    let [isScrolling, setIsScrolling] = useState(false);
    let { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolling(true);
            setTimeout(() => {
                setIsScrolling(!isScrolling);
            }, 2000);
        });
    }, [isScrolling]);
    return (
        <article className="stack">
            <h3>Creating a custom on scroll animation</h3>
            <p>
                For this we will be using the <code>useScroll</code> hook
                amongst other tools
            </p>
            <p>
                This recipe is based off{" "}
                <a href="https://codesandbox.io/s/framer-motion-scroll-velocity-r1dy4u?from-embed=&file=/src/App.tsx:498-592">
                    this example repo
                </a>{" "}
                from framer-motion
            </p>
            <hr />
            <h3>Am I scrolling? {isScrolling ? "yes" : "no"}</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore architecto maxime perspiciatis dolorem molestias alias
                consequuntur ducimus? Nihil ullam alias eius, rerum veniam et
                repellendus distinctio illo ipsam. Ipsum placeat expedita
                sapiente mollitia fuga nihil odio quos, tempora alias debitis
                beatae quo quae accusantium doloremque. Repudiandae excepturi
                nihil deserunt soluta aliquid, velit sequi rerum reiciendis
                repellat est dolores earum nulla suscipit eveniet, ipsam
                tempora, mollitia ad? In id temporibus, ad, optio corrupti
                minima vel architecto sunt possimus odit consequuntur est
                incidunt voluptatibus modi doloribus cumque unde maxime error.
                Delectus, sapiente, itaque asperiores iusto eos odit error omnis
                pariatur laboriosam maxime alias ex tempore expedita tenetur
                laudantium, soluta quidem aliquid fugit culpa reiciendis ut?
                Quam iusto sunt eveniet corrupti exercitationem! Cum natus nihil
                tempore porro, doloribus vero, totam facilis fuga exercitationem
                placeat odit aperiam modi. Alias molestiae quidem consectetur
                cupiditate laborum eum ut, veritatis, animi doloremque atque
                aspernatur quas. Hic velit doloribus unde voluptas sed dolorem
                delectus earum possimus distinctio, quo excepturi minima sunt
                eum ipsa quis exercitationem maxime fuga. Soluta, nihil culpa
                fuga, numquam quas pariatur itaque earum eius quae voluptatum
                sed autem! Modi voluptate ea vitae. Libero debitis fuga
                accusamus minima tempore ipsam non quia est facere vel amet eos
                eveniet error, suscipit eligendi. Blanditiis debitis aspernatur,
                ipsam fugit minima optio nesciunt veritatis earum consequuntur
                doloribus reiciendis adipisci quae autem harum! At debitis
                necessitatibus sequi officiis perspiciatis! Odit sequi suscipit
                omnis sint! Quos numquam, tempore, dolorum reiciendis ex in aut
                quam ad consequatur nesciunt pariatur velit dicta at aspernatur
                laborum odio nostrum autem est quae. Nesciunt accusantium nihil
                ipsa earum odio provident quam ad laboriosam? Veritatis, quo?
                Fugit dolore, sequi dolorem cupiditate ducimus esse delectus
                culpa iste odit aut. Maiores, quod dignissimos odit nostrum modi
                nam. Pariatur corporis similique architecto officiis. Nemo
                pariatur iure eaque fugiat eos adipisci quos error omnis itaque
                sapiente officia quasi quidem voluptate ut delectus et minima
                quae tempore explicabo asperiores perferendis alias, fugit
                officiis! Voluptas consequuntur, perferendis reprehenderit
                libero quis officiis fugit facere ab odio consectetur doloremque
                ipsa magni aperiam in quaerat optio eligendi magnam maiores
                minus. Tempore porro nostrum veniam dignissimos, hic
                exercitationem!
            </p>
        </article>
    );
}

export { OnScrollAnimation };
