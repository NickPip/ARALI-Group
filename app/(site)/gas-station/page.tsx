import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "გაზ-გასამართი სადგური - Arali Group",
  description: "ARALI Group-ის გაზ-გასამართი სადგურების გვერდი.",
};

export default function GasStationPage() {
  return (
    <>
      <section className="flex justify-center pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto max-w-4xl">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                  გაზ-გასამართი სადგური
                </h1>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი გაზი
                  </span>{" "}
                  დაკავებულია შეკუმშული ბუნებრივი აირის რეალიზაციით და ფლობს{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    X გაზ-გასამართ სადგურს
                  </span>{" "}
                  საქართველოს მთელ ტერიტორიაზე.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ჩვენი სადგურები აღჭურვილია უახლესი ტექნოლოგიით, რაც
                  მომხმარებლებს უზრუნველყოფს{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    ეკოლოგიურად სუფთა, ეკონომიურ და უსაფრთხო საწვავით
                  </span>
                  . არალი გაზი მუდმივად ახორციელებს მომსახურების ხარისხის
                  მონიტორინგს, რათა უზრუნველყოს მაქსიმალური კომფორტი და
                  უსაფრთხოება მომხმარებლებისთვის.
                </p>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  არალი გაზი მომხმარებელს სთავაზობს:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>
                    ⛽ ქვეყნის მასშტაბით ხელმისაწვდომ გაზ-გასამართ სადგურების
                    ქსელს
                  </li>
                  <li>🌍 ეკოლოგიურად სუფთა და ეკონომიურ საწვავს</li>
                  <li>🔧 უახლესი ტექნოლოგიით აღჭურვილ სერვისს</li>
                  <li>🛠️ პერმანენტულ მონიტორინგსა და უსაფრთხოების კონტროლს</li>
                  <li>💨 მაღალი ხარისხის მომსახურებას</li>
                </ul>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/gas/gas1.png"
                    alt="გაზ-გასამართი სადგური"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/gas/gas2.png"
                    alt="ეკოლოგიურად სუფთა საწვავი"
                    className="h-64 w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="/images/gas/gas3.png"
                    alt="უსაფრთხოების მაღალი სტანდარტები"
                    className="h-64 w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  უსაფრთხოება და სტანდარტები:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li>🛡️ უსაფრთხოების საერთაშორისო სტანდარტების დაცვა</li>
                  <li>🔍 პერმანენტული ტექნიკური მონიტორინგი</li>
                  <li>⚡ ენერგოეფექტური და ინოვაციური სისტემები</li>
                  <li>💡 მუდმივი გაუმჯობესება და სერვისის განახლება</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
