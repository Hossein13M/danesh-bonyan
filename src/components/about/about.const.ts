import { AboutCardProps } from './About.model';

export const AboutMeInfo: AboutCardProps = {
  headerTitle: 'درباره‌ی من',
  cardMedia: {
    imgLink: '/assets/hosseinMousavi.webp',
    imgAltText: 'Hossein Mousavi Profile Picture',
  },
  description: `
  <div>
   <b>سلام دوست من؛</b> من <b>حسین موسوی</b>، توسعه‌دهنده‌ی نرم‌افزار هستم. من عموما با <b>JavaScript</b> و <b>TypeScript</b> کار میکنم. تلاشم رو میکنم
          که تا جایی که میتونم آموزش بدم و برای همین، توی
          <b className="border-b-2 border-dashed dark:border-blue-600 border-red-700 px-0.5 pb-1">
            <a href="https://medium.com/@hossein13m" target="blank">
              Medium
            </a>
          </b>
          مقاله مینویسم.
  </div>
  `,
  button: {
    text: 'وبسایت شخصی من',
    link: 'https://www.hmousavi.dev',
    icon: 'person',
  },
};

export const AboutProjectInfo: AboutCardProps = {
  headerTitle: 'درباره‌ی پروژه',
  cardMedia: {
    imgLink: '/assets/green-logo.png',
    imgAltText: 'Logo Picture',
  },
  description: `
  <div>
            از اون‌جایی که تو جابینجا، بعضی از شرکت‌های دانش‌بنیان، این موضوع رو نمینویسن که دانش‌بنیان هستن، برای سادگی کار کسایی که میخوان امریه‌ی دانش‌بنیان
            بگیرن، من به این فکر افتادم که یه جایی باشه که بتونه آگهی‌های شرکت‌های دانش‌بنیان جابینجا رو فیلتر بکنه
            که ثمره‌ش این پروژه شد!
          </p>
          <p>
            برای حمایت، میتونین به گیت‌هاب پروژه
            <StarIcon className='text-yellow-500'/>
            بدید.
          </p>

          <p>
            تو این راه دوست خوبم،
            <a href="https://www.linkedin.com/in/pejman-hadavi-b68b99186" target="blank">
              <b className="border-b-2 border-dashed dark:border-blue-600 pb-1 border-red-700 px-0.5">پژمان</b>
            </a>
            <span> بهم خیلی کمک کرد.</span>
  </div>
  `,
  button: {
    text: 'گیت‌هاب پروژه',
    link: 'https://github.com/hossein13m/danesh-bonyan',
    icon: 'github',
  },
};
