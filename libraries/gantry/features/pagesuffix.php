<?php
/**
 * @version   $Id: pagesuffix.php 2473 2012-08-17 17:16:49Z btowles $
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - 2012 RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 * Gantry uses the Joomla Framework (http://www.joomla.org), a GNU/GPLv2 content management system
 *
 */

defined('JPATH_BASE') or die();

gantry_import('core.gantryfeature');

/**
 * @package     gantry
 * @subpackage  features
 */
class GantryFeaturePageSuffix extends GantryFeature
{

	var $_feature_name = 'pagesuffix';

	function isInPosition($position)
	{
		return false;
	}

	function init()
	{
		/** @var $gantry Gantry */
		global $gantry;

		$gantry->addBodyClass('option-' . str_replace("_", "-", JRequest::getString('option')));

		$app = JFactory::getApplication();
		$menus = $app->getMenu();
		$menu  = $menus->getActive();

		if (is_object($menu)) {
			$gantry->addBodyClass('menu-' . str_replace("_", "-", $menu->alias));
			$params    = new GantryRegistry($menu->params->toObject());
			$pageclass = $params->get('pageclass_sfx');
			if (isset($pageclass)) {
				$gantry->addBodyClass($pageclass);
			}
		}

	}
}