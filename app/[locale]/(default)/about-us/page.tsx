import Image from "next/image";

import Title from "@/components/common/title";
import AboutUsImage from "@/public/images/about2.jpg";
import MissionAndGoal from "@/public/images/mission-and-goal.png";
import { getAboutUs } from "@/actions/about-us";
import BossMessage from "@/components/about-us/boss-message";
import { Divider } from "@heroui/divider";


// import secondBossMessage from "@/components/about-us/secondBoss";
import AboutUsCards from "@/components/about-us/about-use-cards";

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
        <BossMessage />

        {/* <secondBossMessage /> */}


        <AboutUsCards />
        <div className="mt-20 flex flex-col md:flex-row justify-around max-w-screen-lg">
          <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
            <Image alt="about us" className="md:w-2/3" src={AboutUsImage} />
          </div>
          <div className="flex-1" data-aos="fade-up" data-aos-duration="1000">
            <h2 className="font-light text-justify leading-8 text-center md:text-start mt-4">
              {locale === "pe"
                ? data?.peTitle
                : locale === "en"
                  ? data?.enTitle
                  : data?.ruTitle}
            </h2>
            <p className="font-light text-justify leading-8 text-center md:text-start mt-4">
              {locale === "pe"
                ? data?.peMiddleImageDescription
                : locale === "en"
                  ? data?.enMiddleImageDescription
                  : data?.ruMiddleImageDescription}
            </p>
          </div>
        </div>

        <Divider className = "my-4"/>

        <div className="flex flex-col justify-center items-center my-10 max-w-screen-md">
          <Title page="aboutUs" titleText="Mission and goals" />

          <ol className="font-light text-center text-justify leading-6 mt-4 px-2 max-w-3xl"
            data-aos="fade-up"
            data-aos-duration="1000"
            >
            <li>
              <span class="text-bold">تقویت و گسترش شبکه سمن‌های فعال:</span> ایجاد و تقویت شبکه‌ای گسترده از سازمان‌های مردم‌نهاد (NGOs) فعال
              در حوزه میراث فرهنگی ناملموس در آسیای غربی و مرکزی، به منظور تسهیل ارتباطات و اشتراک‌گذاری دانش و
              تجربیات.
            </li>

            <li>
              <span class="text-bold">اطلاع‌رسانی در خصوص نقش سمن‌ها در کنوانسیون 2003:</span> افزایش آگاهی سمن‌ها در مورد اهمیت و نقش آن‌ها
              در اجرای کنوانسیون 2003 یونسکو، و ترویج بهترین شیوه‌های حفاظت از میراث فرهنگی ناملموس.
            </li>

            <li>
              <span class="text-bold">ایجاد پایگاه داده از سمن‌ها:</span> شناسایی، مستندسازی و نقشه‌برداری از سازمان‌های مردم‌نهاد فعال در منطقه برای
              تسهیل ارتباطات، برنامه‌ریزی مشترک و تبادل اطلاعات.
            </li>

            <li>
              <span class="text-bold">گسترش همکاری‌های بین‌المللی:</span> تقویت همکاری‌های فرامرزی میان سمن‌ها برای به اشتراک‌گذاری دانش، منابع
              و تجربیات، و ایجاد پل‌های فرهنگی برای تقویت هویت‌های بومی.
            </li>

            <li>
              <span class="text-bold">پاسداری از میراث فرهنگی ناملموس:</span> حمایت از تلاش‌های منطقه‌ای برای حفظ و ترویج میراث فرهنگی ناملموس،
              با تأکید بر اهمیت این میراث در تقویت هویت فرهنگی.
            </li>

            <li>
              <span class="text-bold">ظرفیت‌سازی و آموزش:</span> توانمندسازی سمن‌ها از طریق ارائه دوره‌های آموزشی، کارگاه‌های تخصصی و ارتقاء
              ظرفیت‌های بومی برای حفاظت مؤثر از میراث فرهنگی.
            </li>

            <li>
              <span class="text-bold">ارتقاء آگاهی عمومی:</span> افزایش آگاهی عمومی در مورد اهمیت میراث فرهنگی ناملموس و نقش آن در توسعه پایدار
              جوامع محلی.
            </li>

            <li>
              <span class="text-bold">ترویج تحقیقات و مستندسازی:</span> تقویت فعالیت‌های پژوهشی و مستندسازی به منظور انتقال بهتر دانش فرهنگی به
              نسل‌های آینده.
            </li>
          </ol>

          {/* <Image
            alt="mission and goal"
            className="md:w-1/3 w-2/3"
            data-aos="fade-up"
            data-aos-duration="1000"
            src={MissionAndGoal}
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
          </p> */}
        </div>
      </section>
    </>
  );
}
