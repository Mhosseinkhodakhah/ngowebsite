"use client";

import { Avatar } from "@heroui/avatar";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Divider } from "@heroui/divider";

import BossImg2 from "@/public/images/Dr Darabi.JPG";
import BossImg from "@/public/images/Dr Momeni.jpg";

const enText = `In the name of God
who made culture a path to light,
and made humanity the keeper of its flame

Intangible cultural heritage is not merely a collection of rituals, expressions, or
techniques, it is a profound system of embodied knowledge, historical memory,
and community-based meaning-making.
In a world facing complex, shared challenges, we launched this dedicated
platform as a shared language for connecting heritage bearers, practitioners, and
NGOs across the globe.
This platform is a participatory space for knowledge co-creation, exchange of
good practices, strengthening community-based cultural governance, and
enhancing interdisciplinary safeguarding capacities.
Here, revitalization experiences are not only shared but also reinterpreted,
contextualized, and adapted within global safeguarding dialogues.
We envision this space as a digital common—a collaborative environment for
collective learning, inclusive memory-building, and joint knowledge production at
the global level.
Rooted in the principles of the 2003 Convention, this platform underscores the
central role of communities, the significance of intergenerational transmission,

and the empowerment of memory institutions.
Our invitation is one of participation, dialogue, and co-construction.
May this digital network become a launchpad for culturally grounded solutions,
civilizational synergy, and global cohesion among those safeguarding the world’s
living heritage
`;

const peText = `بنام پروردگار متعال،
که فرهنگ را راهی به سوی نور قرار داد،

و بشریت را نگهبان شعله آن ساخت
میراث فرهنگی ناملموس، فراتر از مجموعه‌ای از آیین‌ها و مهارت‌ها، تجلی‌گاه دانش زیسته،
حافظه‌ی تاریخی و نظام معناشناختی جوامع انسانی است.
در جهانی که چالش‌های مشترک آن نیازمند پاسخ‌های فرهنگی، پایدار و بیناجامعه‌ای است، ما بر آن
شدیم تا با راه‌اندازی این پلتفرم تخصصی، زبان مشترکی برای پیوند حاملان، کنشگران، و سازمان‌های
مردم‌نهاد در گستره جهانی فراهم آوریم.
این پلتفرم، بستر مشارکتی نوینی برای هم‌آفرینی دانش، تبادل اقدامات احیاگرانه موفق ، تقویت حکمرانی
فرهنگی مبتنی بر جامعه، و ارتقای ظرفیت‌های حفاظت مؤثر و میان‌رشته‌ای از میراث زنده است.
اینجا، تجربه‌های احیاگرانه نه صرفاً به اشتراک گذاشته می‌شوند، بلکه در چارچوب گفتمان جهانی،
بازخوانی، بومی‌سازی و بازآفرینی می‌گردند.
ما این فضا را به مثابه یک اشتراکی دیجیتال درک می‌کنیم؛ فضایی برای یادگیری جمعی، تولید مشترک
دانش، و شکل‌گیری حافظه‌ی مشارکتی در سطح جهانی. این رویکرد، همسو با روح کنوانسیون
۲۰۰۳، بر نقش جوامع به‌مثابه محور پاسداشت، اهمیت انتقال میان‌نسلی، و توانمندسازی نهادهای
حافظه استوار است.

دعوت ما، دعوتی است به مشارکت، به سخن‌گفتن، و به ساختن.
باشد که این فضای شبکه‌ای، سکوی پرتابی برای ظهور راه‌حل‌های فرهنگی، هم‌افزایی تمدنی، و
انسجام جهانی پاسداران میراث زنده باشد.`;

const ruText = `Во имя Бога
кто сделал культуру путем к свету,
и сделал человечество хранителем своего пламени

Нематериальное культурное наследие – это не просто набор ритуалов, выражений или
техники, это глубокая система воплощенных знаний, исторической памяти,
и создание смысла на уровне сообщества.
В мире, сталкивающемся со сложными общими проблемами, мы запустили эту специализированную
платформа как общий язык для объединения носителей наследия, практиков и
НПО по всему миру.
Эта платформа представляет собой пространство для совместного создания знаний, обмена опытом
передовой опыт, укрепление культурного управления на уровне общин и
расширение возможностей междисциплинарной защиты.
Здесь не только делятся опытом возрождения, но и переосмысливают его,
контекстуализированы и адаптированы в рамках глобальных диалогов по вопросам безопасности.
Мы представляем это пространство как цифровое общее пространство — среду для совместной работы
коллективное обучение, инклюзивное построение памяти и совместное производство знаний в
мировой уровень.
Основанная на принципах Конвенции 2003 года, эта платформа подчеркивает
центральная роль сообществ, значение межпоколенческой передачи,

и расширение прав и возможностей институтов памяти.
Наше приглашение — это участие, диалог и совместное строительство.
Пусть эта цифровая сеть станет стартовой площадкой для культурно обоснованных решений,
цивилизационная синергия и глобальная сплоченность среди тех, кто защищает мир
живое наследие`;

//////////////////////////////////////////////

const enText2 = `In the name of the Divine,
who breathed culture into the soul of humanity,
and entrusted us with the memory of the world
and entrusted us with the memory of the world guardian of living heritage in today’s rapidly
evolving global landscape, where cultural interconnectedness is both a necessity and a
responsibility, establishing robust networks among actors in the field of intangible cultural
heritage has become a strategic imperative. Networking is no longer a supplementary activity it
is a transformative force for strengthening cooperation, sharing tested experiences, and
enabling culturally grounded approaches to sustainability and resilience.
It is with this conviction that we proudly present this dedicated digital platform for networking
among NGOs and community-based actors engaged in safeguarding intangible cultural
heritage. This initiative reflects our shared commitment to creating an inclusive, collaborative,
and knowledge rich environment where best practices are not only preserved but dynamically
exchanged and co-developed.
By connecting those who have implemented innovative safeguarding measures across
geographies, languages, and cultures this platform serves as a living interface for intercultural
dialogue, capacity development, and mutual learning. It embodies the principles of the 2003
Convention: community participation, international cooperation, and the intergenerational
transmission of living heritage.
We firmly believe that such a platform can act as a catalyst for empowering local communities,
enriching policy thinking, and expanding the collective ability of heritage actors to respond to
shared challenges in a culturally sensitive and effective manner.
We warmly invite all those involved in heritage safeguarding NGOs, cultural practitioners,
bearers, and partners to actively engage in these evolving digital commons. Let us transform
this
space into a global reference point for solidarity, innovation, and the celebration of humanity’s
intangible cultural wealth.`;

const peText2 = ` به نام خداوند،
که فرهنگ را در روح بشریت دمید،
و حافظه جهان را به او سپرد
در جهان امروز که به‌سرعت در حال دگرگونی است و در آن، پیوند میان فرهنگ‌ها بیش از هر زمان
ضرورتی راهبردی یافته، شکل‌گیری شبکه‌های توانمند میان کنشگران حوزه‌ی میراث فرهنگی
ناملموس، ضرورتی گریزناپذیر و یک اولویت بنیادین تلقی می‌شود. شبکه‌سازی دیگر یک فعالیت
جنبی نیست؛ بلکه نیرویی تحول‌آفرین است برای تقویت همکاری، تبادل تجربه‌های آزموده‌شده، و
ترویج رویکردهای ریشه‌دار فرهنگی در مسیر توسعه پایدار و تاب‌آوری جوامع.
با همین رویکرد، ما با افتخار، این پلتفرم تخصصی شبکه‌سازی میان سازمان‌های مردم‌نهاد و
کنشگران محلی در حوزه میراث فرهنگی ناملموس را پیش‌روی شما می‌گذاریم. این ابتکار، بازتاب
تعهد مشترک ما به خلق بستری فراگیر، مشارکتی و غنی از دانش‌های زیسته است؛ بستری که در آن،
تجارب موفق نه فقط ثبت، بلکه به‌صورت پویایی بازآفرینی، تبادل و گسترش می‌یابند.
با پیوند دادن حاملان تجربه‌های موفق از نقاط گوناگون جهان، این پلتفرم به عنوان رابطی زنده برای
گفت‌وگوی میان‌فرهنگی، ظرفیت‌سازی و یادگیری متقابل عمل می‌کند؛ و در نهایت، اصول بنیادین
کنوانسیون ۲۰۰۳ یونسکو همچون مشارکت جوامع، همکاری بین‌المللی و انتقال میان‌نسلی میراث زنده
را تجلی می‌بخشد.
ما بر این باوریم که چنین فضایی می‌تواند به محرکی برای توانمندسازی جوامع محلی، غنای
سیاست‌گذاری فرهنگی، و افزایش توان جمعی کنشگران میراث برای پاسخ‌گویی مؤثر، فرهنگی‌محور
و معنادار به چالش‌های جهانی بدل شود.
از همه‌ی فعالان حوزه میراث ناملموس سازمان‌های مردم‌نهاد، حاملان فرهنگ، متخصصان و نهادهای

همکاردعوت می‌کنیم تا با حضور مؤثر در این فضای در حال تکامل، آن را به مرجعی جهانی برای
همبستگی، نوآوری، و بزرگداشت ثروت ناملموس بشریت تبدیل کنند.`;

const ruText2 = `Мы гордимся тем, что стали свидетелями запуска этой ценной платформы,
посвящённой созданию сети неправительственных организаций,
действующих в сфере нематериального культурного наследия в Западной
и Центральной Азии. НПО являются мощной и динамичной силой в деле
охраны НКН — живого наследия, которое поддерживает идентичность,
смысл и культурную преемственность в сообществах.

Этот веб-сайт представляет собой важный шаг к синергии, обмену опытом
и документированию ценной работы, проводимой НПО по всему этому
разнообразному и богатому региону. Он предоставляет уникальную
возможность для диалога, взаимного обучения и коллективного
взаимодействия.

Как один из Центров второй категории под эгидой ЮНЕСКО, Центр
НКНТ в Тегеране твёрдо верит в то, что укрепление сотрудничества на
уровне местных сообществ в региональном масштабе является
устойчивым и эффективным путём охраны, передачи и оживления живого
культурного наследия.

Мы тепло приветствуем участие всех активных НПО и гордимся тем, что
поддерживаем эту совместную инициативу.

Мы надеемся, что это пространство станет плодородной почвой для
творчества, солидарности и значимого сотрудничества между НПО по
всей Западной и Центральной Азии.`;

function BossMessage() {
  const t = useTranslations("aboutUs");
  const { locale } = useParams();

  return (
    <div className="flex flex-col w-full max-w-screen-lg justify-start items-center mt-32">

      <Divider className="my-4" />

      <div
        className="flex flex-col gap-10 lg:flex-row lg:gap-2 justify-start items-start mt-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-2/3">
          <p className="text-justify leading-8">
            {locale === "pe" ? peText2 : locale === "en" ? enText2 : ruText2}
          </p>
          <Divider className="my-4" />
          <p className="font-bold text-lg">{t("hokamBoss")}</p>
          {/* <p className="font-bold text-lg">{t("DRDarabi")}</p> */}
          <p className="font-light text-lg">
            {t("Director of Tehran ICH Centre2")}
          </p>
        </div>
        <div className="w-1/3">
          <Avatar src={BossImg2.src} className="mr-3 w-[300px] h-[300px] " />
        </div>
      </div>

      <Divider className="my-4" />

      {/* <h2 className="font-bold text-2xl my-4 mt-4">
        {t("Message from Director of Tehran ICH Centre")}
      </h2> */}
      <div
        className="flex flex-col gap-10 lg:flex-row lg:gap-2 justify-center items-center mt-32"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="w-1/3">
          <Avatar src={BossImg.src} className="mr-3 w-[300px] h-[300px] " />
        </div>
        <div className="w-2/3">
          <p className="text-justify leading-8">
            {locale === "pe" ? peText : locale === "en" ? enText : ruText}
          </p>
          <Divider className="my-4" />
          <p className="font-bold text-lg">{t("Dr Atousa Momeni")}</p>
          <p className="font-light text-lg">
            {t("Director of Tehran ICH Centre")}
          </p>
        </div>
      </div>

      <Divider className="my-4" />
    </div>
  );
}

export default BossMessage;
