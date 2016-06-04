<?php
/**
 * Tab Support
 *
 * @package  WPEL
 * @category WordPress Plugin
 * @version  2.0.0
 * @author   Victor Villaverde Laan
 * @link     http://www.finewebdev.com
 * @link     https://github.com/freelancephp/WP-External-Links
 * @license  Dual licensed under the MIT and GPLv2+ licenses
 *
 * @var array $vars
 *      @option array  "tabs"
 */
?>
<h2><?php _e( 'Support', 'wpel' ); ?></h2>

<h3><?php _e( 'Documentation', 'wpel' ); ?></h3>
<p><?php _e( 'Take a look at the <a href="#" data-wpel-help>help section</a> for documentation', 'wpel' ); ?></p>

<h3><?php _e( 'FAQ', 'wpel' ); ?></h3>
<p><?php _e( 'On the <a href="https://wordpress.org/plugins/wp-external-links/faq/" target="_blank">FAQ page</a> you can find some additional tips & trics.', 'wpel' ); ?></p>

<h3><?php _e( 'Reported issues', 'wpel' ); ?></h3>
<p><?php _e( 'When you experience problems using this plugin please look if your problem was <a href="https://wordpress.org/support/plugin/wp-external-links" target="_blank">already reported</a>.', 'wpel' ); ?></p>

<h3><?php _e( 'Send your issue', 'wpel' ); ?></h3>
<p><?php _e( 'If it wasn\'t yet reported then you can <a href="https://wordpress.org/support/plugin/wp-external-links#postform" target="_blank">send your problem</a>.', 'wpel' ); ?>
    <?php _e( 'Please after reporting send me the following technical information <a href="http://www.finewebdev.com/contact" target="_blank">by mail</a>. That will make it easier to solve the problem.', 'wpel' ); ?>
</p>
<p>
    <button class="button js-wpel-copy"><?php _e( 'Copy Technical Info', 'wpel' ); ?></button>
</p>
<p>
<textarea id="plugin-settings" class="large-text js-wpel-copy-target" rows="8" readonly="readonly">
<?php _e( 'WP url:', 'wpel' ); ?>  <?php bloginfo( 'wpurl' ); ?>

<?php _e( 'WP version:', 'wpel' ); ?>  <?php bloginfo( 'version' ); ?>

<?php _e( 'PHP version:', 'wpel' ); ?>  <?php echo phpversion(); ?>

<?php _e( 'Installed Plugins:', 'wpel' ); ?>

<?php
$plugins = get_plugins() ;

foreach ( $plugins as $plugin ) {
    echo ' - '. $plugin[ 'Name' ] .', version: '. $plugin[ 'Version' ] ."\n";
}
?>

<?php _e( 'WPEL Settings:', 'wpel' ); ?>

array(
<?php
foreach ( $vars[ 'tabs' ] as $tab_key => $values ) {
    if ( ! isset( $values[ 'fields' ] ) ) {
        continue;
    }

    $option_values = $values[ 'fields' ]->get_option_values();
    $option_name = $values[ 'fields' ]->get_setting( 'option_name' );

    echo "'$option_name' => ";
    var_export( $option_values );
    echo ",\n";
}
?>
);
</textarea>
</p>