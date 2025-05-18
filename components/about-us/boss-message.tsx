"use client";

import { Avatar } from "@heroui/avatar";
import { useTranslations } from "next-intl";

import BossImg from "@/public/images/Dr Momeni.jpg";
import { useParams } from "next/navigation";
import { Divider } from "@heroui/divider";

const enText = `We are proud to witness the launch of this valuable platform dedicated to
networking among NGOs active in the field of Intangible Cultural Heritage
across West and Central Asia. NGOs are powerful and dynamic forces in
safeguarding ICH — the living heritage that sustains identity, meaning, and
cultural continuity within communities.
This website represents a significant step toward synergy, experience-sharing,
and documentation of the valuable efforts being carried out by NGOs
throughout this diverse and rich region. It provides a unique opportunity for
dialogue, mutual learning, and collective engagement.
As one of the UNESCO Category 2 Centres, the Tehran ICH Centre strongly
believes that strengthening grassroots collaboration on a regional scale is a
sustainable and effective path toward safeguarding, transmitting, and
revitalizing living heritage.
We warmly welcome the participation of all active NGOs and are proud to
support this collaborative initiative.
We hope this space becomes a fertile ground for creativity, solidarity, and
meaningful cooperation among NGOs throughout West and Central Asia.
`;

const peText = `با افتخار شاهد راه‌اندازی این بستر ارزشمند برای شبکه‌سازی سازمان‌های مردم‌نهاد فعال در
حوزه میراث فرهنگی ناملموس در منطقه آسیای غربی و مرکزی هستیم. سازمان‌های مردم‌نهاد،
بازوان توانمند جوامع در پاسداری از میراث ناملموس‌اند؛ میراثی زنده که هویت، معنا و پیوستگی
فرهنگی ملت‌ها را زنده نگه می‌دارد.
این وب‌سایت گامی مهم در جهت هم‌افزایی، تبادل تجربه‌ها، و مستندسازی تلاش‌های ارزشمندی
است که هر یک از نهاد های مردم نهاد در این منطقه گسترده و غنی با تنوع بی نظیر از میراث
ناملموس به انجام رسانده اند. این فضا فرصتی است برای گفت‌وگو، یادگیری متقابل و کنش جمعی.
مرکز میراث ناملموس تهران، به‌عنوان یکی از مراکز رده دوم تحت نظارت یونسکو، بر این باور
است که تقویت همکاری‌های مردم‌پایه در مقیاس منطقه‌ای، راهی پایدار و مؤثر برای حفظ، انتقال
و احیای میراث زنده فرهنگی است. ما دست تمامی نهادهای فعال را به گرمی می‌فشاریم و به این
هم‌افزایی افتخار می‌کنیم.
امید داریم این فضا به بستری زاینده برای خلاقیت، همدلی و همکاری میان سازمان‌های مردم‌نهاد
در سراسر آسیای غربی و مرکزی بدل شود`;

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
        <div className="w-1/3">
          <Avatar src={BossImg.src} className="mr-3 w-[300px] h-[300px] " />
        </div>
        <div className="w-2/3">
          <p>{locale === "pe" ? peText : locale === "en" ? enText : ruText}</p>
          <Divider className="my-4" />
          <p className="font-bold text-lg">{t("Dr Azita Momeni")}</p>
          <p className="font-light text-lg">
            {t("Director of Tehran ICH Centre")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BossMessage;
