import Image from 'next/image';

export default function Footer() {
  const socialMediaList: Array<any> = [
    { imageSrc: '/assets/gmail.png', name: 'Gmail', link: 'mailto:dev.hosseinmousavi@gmail.com' },
    { imageSrc: '/assets/twitter.png', name: 'Twitter', link: 'https://twitter.com/Hossein13M' },
    { imageSrc: '/assets/linkedin.png', name: 'LinkedIn', link: 'https://www.linkedin.com/in/hossein13mousavi' },
    { imageSrc: '/assets/virgool.png', name: 'Virgool', link: 'https://virgool.io/@Hossein13M' },
  ];

  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between items-center bg-slate-200 dark:bg-custom-slate-100 dark:text-white px-2 md:px-20 items-center w-full py-4"
        dir="rtl"
      >
        <div className="">
          <span className="px-2">
            <span className="px-1"> طراحی و توسعه با ❤</span>
            <a href="https://www.hmousavi.dev/" target="blank">
              حسین موسوی
            </a>
          </span>
        </div>

        <hr className="text-white block sm:hidden w-4/5 my-4 sm:my-0" />

        <div className="flex items-center ml-2 ">
          <span className="px-2">پیام به من</span>
          <div className="flex items-center">
            {socialMediaList.map((socialMedia) => {
              return (
                <a href={socialMedia.link} target="blank" className="px-1 flex" key={socialMedia.name}>
                  <Image src={socialMedia.imageSrc} alt={socialMedia.name} width={25} height={25} className="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
