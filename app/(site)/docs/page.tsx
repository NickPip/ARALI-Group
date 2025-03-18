import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "კომპანიის შესახებ - ARALI Group",
  description: "ეს არის კომპანიის შესახებ გვერდი ARALI Group-ისთვის.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="company-intro rounded-lg bg-gray-100 p-6 text-left shadow-md dark:bg-gray-800">
                <p className="animate-fadeIn text-xl font-semibold tracking-wide text-gray-900 dark:text-white">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალი
                  </span>{" "}
                  უკვე{" "}
                  <span className="text-blue-600 dark:text-blue-400">
                    20 წელიზე მეტია
                  </span>{" "}
                  აქტიურადაა ჩართული ეკონომიკისთვის ისეთი საკვანძო სექტორების
                  განვითარებაში, როგორიცაა
                  <span className="text-blue-600 dark:text-blue-400">
                    {" "}
                    საგზაო და ინფრასტრუქტურული მშენებლობა
                  </span>
                </p>

                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ჩვენ ვეხმარებით დამკვეთებს ისეთი მასშტაბური და კომპლექსური
                  პროექტების განხორციელებაში, რომლებიც ქმნიან გრძელვადიან და
                  მდგრად მემკვიდრეობას და ემსახურებიან
                  <span className="text-blue-600 dark:text-blue-400">
                    {" "}
                    ქვეყნის სოციალურ და ეკონომიკურ პროგრესს.
                  </span>
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  ჯგუფის წარმატებული გამოცდილება ეფუძნება ეფექტურ ორგანიზაციულ
                  და სტრატეგიულ ხედვას, დინამიურ სამეწარმეო მიდგომას,
                </p>
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  რომელიც ორიენტირებულია ხარისხზე და კლიენტების კმაყოფილებაზე.
                </span>

                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  <span className="text-blue-600 dark:text-blue-400">
                    არალის{" "}
                  </span>
                  მატერიალურ-ტექნიკური ბაზა და გამართული პროექტის მენეჯმენტი
                  საშუალებას იძლევა ეფექტურად განვახორციელოთ ნებისმიერი სირთულის
                  პროექტი პარალელურ რეჟიმში.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  კომპანიის მთავარი აქტივი
                  <span className="text-blue-600 dark:text-blue-400">
                    {" "}
                    პროფესიონალთა გუნდია
                  </span>
                  , რომლის მრავალწლიანი გამოცდილება და ექსპერტული ცოდნა
                  უზრუნველყოფს პროექტების ეფექტურ და წარმატებულ მართვას. არალს
                  მნიშვნელოვანი წვლილი შეაქვს ადგილობრივი კადრების დასაქმების
                  კუთხითაც მთელი საქართველოს მასშტაბით და ფოკუსირებულია მათ
                  გადამზადებასა და განვითარებაზე.
                </p>
              </div>
              <div className="mt-10 rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ჩვენი საქმიანობის ძირითადი მიმართულებებია:
                </h2>
                <ul className="mt-4 space-y-2 text-gray-800 dark:text-gray-300">
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🚧 გზების მშენებლობა, რეაბილიტაცია;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🏢 მრავალფუნქციური სამოქალაქო შენობა ნაგებობების მშენებლობა;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🏨 სასტუმროების მშენებლობა;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🏠 ბინათმშენებლობა;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    💧 წყალსაცავების, წყლის გამწმენდი ნაგებობების,
                    მარეგულირებელი სისტემების და პუნქტების მშენებლობა,
                    რეაბილიტაცია;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🌉 ხიდების მშენებლობა, რეაბილიტაცია;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🏗️ საყრდენი კედლების მშენებლობა, რეაბილიტაცია;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🏗️ ბეტონ სამაგრი სამუშაოები;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🌊 ნაპირსამაგრი სამუშაოები;
                  </li>
                  <li className="flex items-center gap-2 transition hover:text-blue-500">
                    🚰 წყალ-კანალიზაციის სისტემების, მშენებლობა, რეაბილიტაცია;
                  </li>
                </ul>
              </div>

              <h1 className="mt-10 text-center text-3xl font-bold text-blue-700 dark:text-blue-400">
                მისია და მიზანი
              </h1>
              <div className="mt-6 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
                <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    მისია
                  </h2>
                  <p className="mt-4 text-gray-800 dark:text-gray-300">
                    ჩვენ ჩვენს მოწოდებად ვაქციეთ სამოქალაქო ინფრასტრუქტურის
                    ობიექტების დაპროექტება და მშენებლობა, რაც ხელს უწყობს
                    მოქალაქეების ცხოვრების ხარისხის გაუმჯობესებას.
                  </p>
                </div>
                <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    მიზანი
                  </h2>
                  <p className="mt-4 text-gray-800 dark:text-gray-300">
                    ჩვენი მიზანია გავხდეთ ლიდერი ჯგუფი რეგიონში პროექტების
                    მართვისა და საინჟინრო გამოცდილების გამოყენებით სამშენებლო და
                    ინჟინერიის მიმართულებით.
                  </p>
                </div>
                <div className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900">
                  <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                    ღირებულებები
                  </h2>
                  <p className="mt-4 text-gray-800 dark:text-gray-300">
                    ჩვენი გუნდის ყოველი ფიქრი და ქმედება დაფუძნებულია კომპანიის
                    ღირებულებებზე: გუნდურობა, პასუხისმგებლობა ხარისხზე,
                    ინოვაცია, მდგრადი განვითარება და ეკოლოგიური ზრუნვა.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
