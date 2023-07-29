<?php

get_header(); ?>

<div class="max-w-4xl px-4 prose bg-blue-200">
  <?php if (have_posts()) {
    while(have_posts()) {
      the_post(); ?>
      <div>
        <h1 class="text-red-500"><?php the_title(); ?></h1>
        <?php the_content(); ?>
      </div>
    <?php }
  } ?>
</div>

<?php get_footer();