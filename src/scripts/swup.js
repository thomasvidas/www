// @ts-nocheck
import Swup from "swup";
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupPreloadPlugin from '@swup/preload-plugin';
import SwupHeadPlugin from '@swup/head-plugin';


const swup = new Swup({
  plugins: [
    new SwupBodyClassPlugin(),
    new SwupPreloadPlugin(),
    new SwupHeadPlugin(),
  ]
});