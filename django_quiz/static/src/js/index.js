import 'bootstrap-v4-rtl/dist/js/bootstrap.min';
import 'jquery';
import '@fortawesome/fontawesome-free/js/all'
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import '../scss/main.scss';
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css';
import '../css/style.css';
import '../css/account_util.css';

library.add(fas, far, fab);

dom.i2svg();
