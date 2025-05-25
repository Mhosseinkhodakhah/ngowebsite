import Image from "next/image";

import Title from "@/components/common/title";
import AboutUsImage from "@/public/images/about2.jpg";
import MissionAndGoal from "@/public/images/mission-and-goal.png";
import { getAboutUs } from "@/actions/about-us";
import BossMessage from "@/components/about-us/boss-message";
import { Divider } from "@heroui/divider";

// import secondBossMessage from "@/components/about-us/secondBoss";
import AboutUsCards from "@/components/about-us/about-use-cards";
import ClientDiv from "@/components/about-us/client-div";

export default async function AboutPage({ params }: { params: any }) {
  const { data } = await getAboutUs();
  const { locale } = await params;

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <Title
          description={
            locale === "pe"
              ? data?.peDescription
              : locale === "en"
                ? data?.enDescription
                : data?.ruDescription
          }
          page="navbar"
          titleText="About Us"
        />
        {/* <ClientDiv data={data} /> */}
        <BossMessage />

        {/* <secondBossMessage /> */}

        <AboutUsCards />
        <div className="mt-20 flex flex-col md:flex-row justify-around max-w-screen-lg">
          <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
            <Image
              alt="about us"
              className="w-full px-4 lg:px-0 lg:w-2/3"
              src={AboutUsImage}
            />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
            {/* <div dangerouslySetInnerHTML={}/> */}
            <div
              dangerouslySetInnerHTML={{
                __html:
                  locale === "pe"
                    ? data?.peTitle
                    : locale === "en"
                      ? data?.enTitle
                      : data?.ruTitle,
              }}
              className="px-6 lg:px-0 text-justify leading-6 md:text-start my-4 md:my-0"
            />
            {/* <h2 className="text-xl font-bold text-justify leading-6 md:text-start my-4 md:my-0">
              {locale === "pe"
                ? data?.peTitle
                : locale === "en"
                  ? data?.enTitle
                  : data?.ruTitle}
            </h2> */}
            <div
              dangerouslySetInnerHTML={{
                __html:
                  locale === "pe"
                    ? data?.peMiddleImageDescription
                    : locale === "en"
                      ? data?.enMiddleImageDescription
                      : data?.ruMiddleImageDescription,
              }}
              className="font-light text-justify leading-6 md:text-start mt-4 px-6 lg:px-0"
            />
            {/* <p className="font-light text-justify leading-6 md:text-start mt-4">
              {locale === "pe"
                ? data?.peMiddleImageDescription
                : locale === "en"
                  ? data?.enMiddleImageDescription
                  : data?.ruMiddleImageDescription}
            </p> */}
          </div>
        </div>

        {/* <Divider className="my-4" /> */}

        <div className="flex flex-col justify-center items-center my-10 max-w-screen-md">
          <Title page="aboutUs" titleText="Mission and goals" />

          <ol className="space-y-6 list-decimal pr-5 mt-4">
            {locale === "pe" ? (
              <>
                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    تقویت و گسترش شبکه سمن‌های فعال:
                  </span>
                  ایجاد و تقویت شبکه‌ای گسترده از سازمان‌های مردم‌نهاد (NGOs)
                  فعال در حوزه میراث فرهنگی ناملموس در آسیای غربی و مرکزی، به
                  منظور تسهیل ارتباطات و اشتراک‌گذاری دانش و تجربیات.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    اطلاع‌رسانی در خصوص نقش سمن‌ها در کنوانسیون 2003:
                  </span>
                  افزایش آگاهی سمن‌ها در مورد اهمیت و نقش آن‌ها در اجرای
                  کنوانسیون 2003 یونسکو، و ترویج بهترین شیوه‌های حفاظت از میراث
                  فرهنگی ناملموس.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    ایجاد پایگاه داده از سمن‌ها:
                  </span>
                  شناسایی، مستندسازی و نقشه‌برداری از سازمان‌های مردم‌نهاد فعال
                  در منطقه برای تسهیل ارتباطات، برنامه‌ریزی مشترک و تبادل
                  اطلاعات.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    گسترش همکاری‌های بین‌المللی:
                  </span>
                  تقویت همکاری‌های فرامرزی میان سمن‌ها برای به اشتراک‌گذاری
                  دانش، منابع و تجربیات، و ایجاد پل‌های فرهنگی برای تقویت
                  هویت‌های بومی.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    پاسداری از میراث فرهنگی ناملموس:
                  </span>
                  حمایت از تلاش‌های منطقه‌ای برای حفظ و ترویج میراث فرهنگی
                  ناملموس، با تأکید بر اهمیت این میراث در تقویت هویت فرهنگی.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    ظرفیت‌سازی و آموزش:
                  </span>
                  توانمندسازی سمن‌ها از طریق ارائه دوره‌های آموزشی، کارگاه‌های
                  تخصصی و ارتقاء ظرفیت‌های بومی برای حفاظت مؤثر از میراث فرهنگی.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    ارتقاء آگاهی عمومی:
                  </span>
                  افزایش آگاهی عمومی در مورد اهمیت میراث فرهنگی ناملموس و نقش آن
                  در توسعه پایدار جوامع محلی.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    ترویج تحقیقات و مستندسازی:
                  </span>
                  تقویت فعالیت‌های پژوهشی و مستندسازی به منظور انتقال بهتر دانش
                  فرهنگی به نسل‌های آینده.
                </li>
              </>
            ) : locale === "en" ? (
              <>
                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Strengthening and expanding the network of active NGOs:
                  </span>
                  Establishing and strengthening a broad network of
                  non-governmental organizations (NGOs) active in the field of
                  intangible cultural heritage in Western and Central Asia, to
                  facilitate communication and sharing of knowledge and
                  experiences.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Awareness-raising about the role of NGOs in the 2003
                    Convention:
                  </span>
                  Increasing NGOs awareness of their importance and role in
                  implementing the 2003 UNESCO Convention, and promoting best
                  practices for safeguarding intangible cultural heritage.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Creating a database of NGOs:
                  </span>
                  Identifying, documenting, and mapping active NGOs in the
                  region to facilitate communication, joint planning, and
                  information exchange.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Expanding international cooperation:
                  </span>
                  Strengthening cross-border cooperation among NGOs to share
                  knowledge, resources and experiences, and building cultural
                  bridges to strengthen indigenous identities.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Safeguarding intangible cultural heritage:
                  </span>
                  Supporting regional efforts to preserve and promote intangible
                  cultural heritage, emphasizing its importance in strengthening
                  cultural identity.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Capacity building and training:
                  </span>
                  Empowering NGOs through training courses, specialized
                  workshops and enhancing local capacities for effective
                  cultural heritage protection.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Public awareness raising:
                  </span>
                  Increasing public awareness about the importance of intangible
                  cultural heritage and its role in sustainable development of
                  local communities.
                </li>

                <li className="text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Promoting research and documentation:
                  </span>
                  Strengthening research and documentation activities to better
                  transmit cultural knowledge to future generations.
                </li>
              </>
            ) : (
              <>
                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Укрепление и расширение сети активных НПО:
                  </span>
                  Создание и укрепление широкой сети неправительственных
                  организаций (НПО), работающих в сфере нематериального
                  культурного наследия в Западной и Центральной Азии, для
                  облегчения коммуникации и обмена знаниями и опытом.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Информирование о роли НПО в Конвенции 2003 года:
                  </span>
                  Повышение осведомленности НПО об их важности и роли в
                  реализации Конвенции ЮНЕСКО 2003 года и продвижение передовых
                  методов сохранения нематериального культурного наследия.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Создание базы данных НПО:
                  </span>
                  Выявление, документирование и картирование активных НПО в
                  регионе для облегчения коммуникации, совместного планирования
                  и обмена информацией.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Расширение международного сотрудничества:
                  </span>
                  Укрепление трансграничного сотрудничества между НПО для обмена
                  знаниями, ресурсами и опытом, а также создание культурных
                  мостов для укрепления местной идентичности.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Сохранение нематериального культурного наследия:
                  </span>
                  Поддержка региональных усилий по сохранению и продвижению
                  нематериального культурного наследия, с акцентом на его
                  важность для укрепления культурной идентичности.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Развитие потенциала и обучение:
                  </span>
                  Укрепление потенциала НПО через учебные курсы,
                  специализированные семинары и развитие местных возможностей
                  для эффективной защиты культурного наследия.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Повышение общественной осведомленности:
                  </span>
                  Повышение осведомленности общественности о важности
                  нематериального культурного наследия и его роли в устойчивом
                  развитии местных сообществ.
                </li>

                <li className="mission-item text-gray-700">
                  <span className="font-semibold bg-yellow-100 px-1 rounded">
                    Содействие исследованиям и документированию:
                  </span>
                  Усиление исследовательской деятельности и документирования для
                  лучшей передачи культурных знаний будущим поколениям.
                </li>
              </>
            )}
          </ol>

          {/* <Image
            alt="mission and goal"
            className="md:w-1/3 w-2/3"
            data-aos="fade-up"
            data-aos-duration="1000"
            src={MissionAndGoal}
<<<<<<< Updated upstream
          /> */}
          {/* <p
            className="font-light text-center text-justify leading-6 mt-4 px-2 max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
              {locale === "pe"
                ? data?.peMissionAndGoals
                : locale === "en"
                  ? data?.enMissionAndGoals
                  : data?.ruMissionAndGoals}
=======
          />
          <div
            dangerouslySetInnerHTML={{
              __html:
                locale === "pe"
                  ? data?.peMissionAndGoals
                  : locale === "en"
                    ? data?.enMissionAndGoals
                    : data?.ruMissionAndGoals,
            }}
            className="font-light text-justify leading-6 mt-4 px-2 max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          {/* <p>
            {locale === "pe"
              ? data?.peMissionAndGoals
              : locale === "en"
                ? data?.enMissionAndGoals
                : data?.ruMissionAndGoals}
>>>>>>> Stashed changes
          </p> */}
        </div>
      </section>
    </>
  );
}

//  {locale === "en" ? (
//             <>
//               <p className="font-bold">{t("En")}</p>
//               <ArrowDown />
//             </>
//           ) : locale === "pe" ? (
//             <>
//               <p className="font-bold">{t("Fa")}</p>
//               <ArrowDown />
//             </>
//           ) : locale === "ru" ? (
//             <>
//               <p className="font-bold">{t("Ru")}</p>
//               <ArrowDown />
//             </>
//           ) : null}

// <ol class="space-y-6 list-decimal pl-5">

//             </ol>
