<!DOCTYPE html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>
  <body <?php body_class(); ?>>
    <div class="w-full h-14 px-2 py-2 bg-blue-900 dark:bg-blue-950 absolute top-0 flex flex-row items-center justify-between" >
      <div class="space-x-4 flex flex-row items-center mt-4">
          <img src="http://localhost/wp-content/uploads/2023/06/cropped-hcs-logo-square-128.png" class="w-12 mb-4" />
          <a href="/"><h1 class="h-12 text-white dark:text-white text-lg font-light">Hoogle</h1></a>
      </div>
      <div class="space-x-2 justify-end flex">
          <button class="rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-slate-400 dark:text-white p-2 w-16 flex justify-center">Light</button>
      </div>
    </div>