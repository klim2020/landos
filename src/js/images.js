import {standardPreset, mountImageSrcSet} from '@/js/imageoptimize.js'

import heros from '/img/bitcoin.jpg?w=640;960;1200&format=webp';

mountImageSrcSet('hero-image',heros,standardPreset);