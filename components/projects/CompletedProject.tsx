"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import AchievementsImg from "@/public/images/achivement.png";

function CompletedProject() {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold border-b-5 border-primary mt-20 text-center">
        {t("Achievements and Results")}
      </h1>
      <Image
        alt="Achievements and Results"
        className="w-[300px] h-[300px] my-10"
        height={100}
        quality={100}
        src={AchievementsImg}
        width={100}
      />

      <p className="max-w-2xl text-start">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati odio
        est, explicabo error molestiae commodi exercitationem assumenda
        consectetur debitis tempora autem reprehenderit. Magni rerum quod
        expedita, incidunt et tenetur veritatis soluta ipsum sed autem ab porro
        maxime voluptatibus ipsam ut aut eum, officia harum nihil ad adipisci
        explicabo delectus commodi perferendis? Inventore voluptates ullam
        fugiat commodi aliquid! Molestiae asperiores quis atque minus
        dignissimos alias doloremque, nihil molestias quo dolor sapiente aut
        voluptas nemo optio, corrupti, suscipit nisi quia illo numquam amet.
        Labore at quod, deleniti et reprehenderit eum, molestiae obcaecati sed
        aliquam sequi quasi! Ut maxime quis consectetur ducimus harum possimus
        delectus expedita, nisi excepturi porro aut fugit soluta eum dignissimos
        reiciendis ratione dicta quasi in totam dolor exercitationem! Distinctio
        atque molestiae non ex dolore ut fugiat, sunt nam voluptatibus,
        cupiditate, minima asperiores sint. Explicabo quas voluptatum expedita
        commodi dolorem quos natus qui sed fuga accusantium eaque, laborum,
        veniam tenetur. Quos, pariatur, fugiat, ex vitae facere minima dolores
        veniam doloremque soluta ipsam earum? Cupiditate ratione nemo repellat
        laudantium natus officia harum vitae, ab perspiciatis! Quae eos porro
        dolor quaerat esse, possimus dolorum repellendus, quibusdam recusandae
        nobis quidem iste harum dicta tempore repudiandae eum alias temporibus
        culpa. Reiciendis expedita nesciunt officia eum sint ut laboriosam
        aperiam vitae eaque iste explicabo aut est delectus minima ad inventore
        perspiciatis, quisquam a nulla perferendis rem eius facilis! Quasi
        similique architecto obcaecati suscipit, accusamus itaque odit
        temporibus. Qui doloremque ex, porro vel facilis placeat illo asperiores
        accusantium non id, voluptates totam pariatur, officia aspernatur nemo
        similique. Aspernatur corrupti deleniti totam officia, quibusdam soluta
        repudiandae quam officiis, deserunt odit consectetur delectus, tenetur
        tempore minus quae facilis in. Nihil perspiciatis quidem quia impedit
        eligendi, at eum laboriosam, asperiores numquam, nesciunt possimus non.
        Qui quo alias, quidem atque iure blanditiis, ullam exercitationem libero
        sit tempora, quis perspiciatis veniam.
      </p>
      <h1 className="text-xl font-bold border-b-5 border-primary my-20 text-center">
        {t("Reports and Documentation")}
      </h1>
      <p className="max-w-2xl text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt
        distinctio accusantium obcaecati, dolor eius, libero, earum vero quos
        recusandae consequuntur soluta iusto fuga amet? Quis rerum veniam alias
        nesciunt in quae, ratione dolorem voluptas, ducimus maiores sequi
        consequuntur ad. Labore, aut. Quos, harum omnis consequuntur esse,
        provident laboriosam facilis assumenda voluptatibus incidunt vel sed
        accusamus. Perspiciatis provident, dolorem nostrum non ea atque alias,
        id quas laboriosam neque magni! Quo iste blanditiis, saepe nisi deleniti
        molestias a quam nulla possimus! Dolore, dolor ipsa? Nam autem quidem
        ducimus blanditiis voluptatibus in optio alias iure veniam? Consectetur
        deleniti, sapiente pariatur minima earum voluptate vero a voluptatum
        perferendis eum aperiam qui unde itaque magnam ad molestiae, eos sit
        numquam? Explicabo in reprehenderit, tempora fugiat cum voluptatibus
        odio accusamus voluptatem quibusdam eos enim saepe hic, nemo itaque
        vitae. Provident excepturi suscipit deleniti minima error corrupti
        repudiandae soluta sit consequuntur veniam quas incidunt rerum dicta
        quam odit labore inventore, accusantium delectus hic ipsa, commodi sint
        voluptatibus, quo enim? Commodi dolores tenetur similique doloremque
        soluta eum reiciendis optio possimus qui, praesentium, at quo deleniti
        non esse tempora asperiores minus corporis illo voluptatibus quia.
        Possimus reiciendis eaque incidunt quibusdam, vero odit. Corrupti
        placeat sed unde sequi corporis.
      </p>

      {/* اینجا باید اسلایدر بزاری */}
      <h1 className="text-xl font-bold border-b-5 border-primary my-20 text-center">
        {t("impact on the protection of intangible heritage")}
      </h1>
      <p className="max-w-2xl text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum nesciunt
        distinctio accusantium obcaecati, dolor eius, libero, earum vero quos
        recusandae consequuntur soluta iusto fuga amet? Quis rerum veniam alias
        nesciunt in quae, ratione dolorem voluptas, ducimus maiores sequi
        consequuntur ad. Labore, aut. Quos, harum omnis consequuntur esse,
        provident laboriosam facilis assumenda voluptatibus incidunt vel sed
        accusamus. Perspiciatis provident, dolorem nostrum non ea atque alias,
        id quas laboriosam neque magni! Quo iste blanditiis, saepe nisi deleniti
        molestias a quam nulla possimus! Dolore, dolor ipsa? Nam autem quidem
        ducimus blanditiis voluptatibus in optio alias iure veniam? Consectetur
        deleniti, sapiente pariatur minima earum voluptate vero a voluptatum
        perferendis eum aperiam qui unde itaque magnam ad molestiae, eos sit
        numquam? Explicabo in reprehenderit, tempora fugiat cum voluptatibus
        odio accusamus voluptatem quibusdam eos enim saepe hic, nemo itaque
        vitae. Provident excepturi suscipit deleniti minima error corrupti
        repudiandae soluta sit consequuntur veniam quas incidunt rerum dicta
        quam odit labore inventore, accusantium delectus hic ipsa, commodi sint
        voluptatibus, quo enim? Commodi dolores tenetur similique doloremque
        soluta eum reiciendis optio possimus qui, praesentium, at quo deleniti
        non esse tempora asperiores minus corporis illo voluptatibus quia.
        Possimus reiciendis eaque incidunt quibusdam, vero odit. Corrupti
        placeat sed unde sequi corporis.
      </p>
    </div>
  );
}

export default CompletedProject;
