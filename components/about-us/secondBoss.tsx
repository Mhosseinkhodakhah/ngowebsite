"use client";

import { Avatar } from "@heroui/avatar";
import { useTranslations } from "next-intl";

import BossImg from "@/public/images/Dr Darabi.JPG";
import { useParams } from "next/navigation";
import { Divider } from "@heroui/divider";

const enText = `In the name of the Divine,
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

const peText = `
به نام خداوند،
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


const ruText = `Мы гордимся тем, что стали свидетелями запуска этой ценной платформы,
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
        <div className="flex flex-col w-full max-w-screen-lg justify-center items-center mt-32">
            <h2 className="font-bold text-2xl my-4">
                {t("Message from Director of Tehran ICH Centre")}
            </h2>
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-2 justify-center items-center mt-8">
                <div className="w-2/3">
                    <p>{locale === "pe" ? peText : locale === "en" ? enText : ruText}</p>
                    <Divider className="my-4" />
                    <p className="font-bold text-lg">{t("hokamBoss")}</p>
                    <p className="font-light text-lg">
                        {t("Director of Tehran ICH Centre2")}
                    </p>
                </div>
                <div className="w-1/3">
                    <Avatar src={BossImg.src} className="mr-3 w-[300px] h-[300px] " />
                </div>
            </div>
        </div>
    );
}

export default BossMessage;
