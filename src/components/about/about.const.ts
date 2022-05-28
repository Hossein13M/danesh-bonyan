import { AboutCardProps } from './About.model';

export const AboutArticleInfo: AboutCardProps = {
  headerTitle: 'راهنمای گرفتن امریه‌ی دانش‌بنیان',
  cardMedia: {
    imgLink: '/assets/danesh-bonyan.jpeg',
    imgAltText: 'Virgool Danesh Bonyan Article',
  },
  description: `
  <div>
   قطعا یکی از پر دغدغه‌ترین کارایی که هر مرد ایرانی باید بهش رسیدگی کنه، گذروندن دوره‌ی سربازی هستش. قطعا نوشتن این نوشته نه تنها به معنی تایید این دوره‌ی اجباری نیست، بلکه هدف کمک تو راستای آسون‌تر و بهتر گذروندن این دو سال اجباری هستش. لطفا مقاله رو تا آخر بخونین و اگه سوالی داشتید، حتما ازم بپرسید
  </div>
  `,
  button: {
    text: 'خوندن کامل این نوشته',
    link: 'https://virgool.io/@Hossein13M/amrieh-danesh-bonyan-tumuf0uiwzbg',
    icon: 'articleIcon',
  },
};

export const AboutProjectInfo: AboutCardProps = {
  headerTitle: 'درباره‌ی پروژه',
  cardMedia: {
    imgLink: '/assets/blue-logo.png',
    imgAltText: 'Logo Picture',
  },
  description: `
  <div>
            از اون‌جایی که تو جابینجا، بعضی از شرکت‌های دانش‌بنیان، این موضوع رو نمینویسن که دانش‌بنیان هستن، برای سادگی کار کسایی که میخوان امریه‌ی دانش‌بنیان
            بگیرن، من به این فکر افتادم که یه جایی باشه که بتونه آگهی‌های شرکت‌های دانش‌بنیان جابینجا رو فیلتر بکنه
            که ثمره‌ش این پروژه شد!
          </p>
          <p>
            برای حمایت، میتونین به
             <strong>گیت‌هاب</strong>
             پروژه
            ⭐
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

export const AboutMeInfo: AboutCardProps = {
  headerTitle: 'درباره‌ی من',
  cardMedia: {
    imgLink: '/assets/hosseinMousavi.webp',
    imgAltText: 'Hossein Mousavi Profile Picture',
  },
  description: `
  <div>
   <b>سلام دوست من؛</b> من <b>حسین موسوی</b>، توسعه‌دهنده‌ی نرم‌افزار هستم. من عموما با <b>JavaScript</b> و <b>TypeScript</b>.
          با داستان‌های سربازی برای کامل آشنا هستم و به همین خاطر، همه‌ی تلاشم رو میکنم که بیشترین کمکی که از دستم برمیاد رو انجام بدم.
            <br>
          اگه پرسشی از من دارید، میتونین تو پورتفولیوی شخصی من، روش‌های ارتباطی با من رو پیدا کنین.
  </div>
  `,
  button: {
    text: 'وبسایت شخصی من',
    link: 'https://www.hmousavi.dev',
    icon: 'person',
  },
};
