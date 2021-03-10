import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import {useRouter} from "next/router";
import setLanguage from "next-translate/setLanguage";
import cookie from 'js-cookie';

const Home = () => {
  const router = useRouter()
  const {t, lang} = useTranslation('common')

  const changeLang = async (locale) => {
    const isSet = await setLanguage(locale)
    if (isSet) {
      cookie.set('NEXT_LOCALE', locale)
      await router.push(router.asPath, router.asPath, {locale: locale})
    }
  }

  return (
    <div>
      {t('home')}
      <ul>
        {

          router.locales.map(locale => (
            <li key={locale}>
              <button onClick={() => changeLang(locale)}>{t(locale)}</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Home
