# Encora Luma Child Theme


## Installation Guide

### Type 1: Zip file

 - Unzip the theme zip file in `app/design/frontend/Encora/luma_child`
 - Apply database updates by running `php bin/magento setup:upgrade`
 - Flush the cache by running `php bin/magento cache:flush`

### Type 2: Composer

 - Install the luma child theme by running `composer require csvikram/encora-luma-child:dev-master`
 - apply database updates by running `php bin/magento setup:upgrade`
 - Flush the cache by running `php bin/magento cache:flush`
 
 ## Admin Configuration
 
 - Add a static block for the header top bar. Identifier - **header_top_bar** and it will display on top of the header on every page.
 - Add static block for banner slider. Identifier - **home_banner_slider** and it will display on the home page.

### Note: Please read document file for static block content https://github.com/csvikram44/encora-luma-child/blob/master/Document.pdf
 
