<?php
	if (session_status() == PHP_SESSION_NONE) {
		session_start();
	  }



	if (!isset($_SESSION['lang']))
		$_SESSION['lang'] = "hy";
	else if (isset($_GET['lang']) && $_SESSION['lang'] != $_GET['lang'] && !empty($_GET['lang'])) {
		
		if ($_GET['lang'] == "hy")
			$_SESSION['lang'] = "hy";
		
		else if ($_GET['lang'] == "ru")
			$_SESSION['lang'] = "ru";
		
		else if ($_GET['lang'] == "en")
			$_SESSION['lang'] = "en";
	}

	require_once "languages/" . $_SESSION['lang'] . ".php";

?>