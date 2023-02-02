/* eslint-disable no-new */
/* eslint-disable no-unused-vars */
import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { SeriesPending } from './seriesPending/seriesPending';

new Header('.container');
new Main('header');
new SeriesPending('main');
