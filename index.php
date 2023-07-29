<?php

get_header(); ?>

<div class="w-full md:w-4/5 mx-auto px-4 mt-16 h-auto">
    <?php if (have_posts()) {
      while(have_posts()) {
        the_post(); ?>
        <div class="flex flex-row w-full">

          <div id="render-react-sidebar" class="w-1/5"></div>
          <div class="w-4/5 p-4">

            <?php if ( !is_front_page() ) { ?>
              <h1 class="text-2xl font-bold text-red-900">HCS Handbook</h1>
              <div id="search-bar-main" class="mb-4"></div>
              <hr class="mb-4"/>
            <?php } ?>

            <h2><a class="no-underline text-3xl" href="<?php the_permalink(); ?>"><?php (preg_match('/(Home|Search)/', get_the_title())) ? "" : the_title(); ?></a></h2>

            <div class="space-y-4">
              <?php the_content(); ?>
            </div>

            <?php if ( is_front_page() ) { ?>
              <div id="search-bar-main"></div>
            <?php } ?>

          </div>
        </div>
      <?php }
    } ?>
</div>

<?php get_footer();