-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: csming
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `archive`
--

DROP TABLE IF EXISTS `archive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `archive` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) DEFAULT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(50) DEFAULT NULL,
  `alias` varchar(50) DEFAULT NULL,
  `body` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `hidden` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive`
--

LOCK TABLES `archive` WRITE;
/*!40000 ALTER TABLE `archive` DISABLE KEYS */;
INSERT INTO `archive` VALUES (1,'Ming','2018-02-08 23:09:33','2018-03-05 20:17:00','Sample post',NULL,'This post has no content',1),(2,'Liu','2018-02-09 03:07:10','2018-03-05 20:17:00','Sample post',NULL,'This is a sample post retrieved from MySQL database',1),(3,'John Smith','2018-02-10 18:28:12','2018-03-05 20:17:00','Regular Languages & Finite Automata',NULL,'Regular expressions are the simplest class of formal languages. \r\nThe expressive power of regular languages is exactly the same as what can be computed with finite automata.',1),(6,'Alan Turing','2018-02-10 18:46:55','2018-03-05 20:17:00','I invented Turing Machine',NULL,'<p><strong>This topic will be covered in the mid-term exam.</strong></p>',1),(7,'Test','2018-02-10 18:52:39','2018-03-05 20:17:00','Test',NULL,'<p>&lt;a href=&quot;http://google.com/&gt;Test&lt;/a&gt;</p>',1),(8,'Registrar','2018-02-18 03:01:04','2018-03-06 03:57:51','Important Announcement',NULL,'<p>Tuition will be doubled with immediate effect.</p>\r\n\r\n<p><strong>No appeal will be entertained.</strong></p>\r\n',1),(9,'Registrar','2018-02-18 03:03:48','2018-03-06 03:57:57','Revised Important Announcement',NULL,'<p>Tuition will be tripled, starting tomorrow.</p>\r\n\r\n<p><strong>No appeal will be entertained.</strong></p>\r\n',1),(10,'Seth Parker','2018-02-18 03:15:55','2018-03-06 20:33:26','An official announcement of intent',NULL,'<blockquote>\r\n<p>This is an official announcement of intent. To which I intent to do my utmost to give all of my energy to help improve the condition of the world.</p>\r\n</blockquote>\r\n',1),(11,'Accountant Zong','2018-02-18 04:02:15','2018-03-05 20:17:00','How to Live in an Authoritarian State',NULL,'<p>we can watch av</p>',1),(12,'Zong ','2018-02-18 04:26:48','2018-03-05 22:13:30','Happy New Year!!!!',NULL,'<p>emmmmmmmm</p>\r\n',1),(14,'Ming','2018-03-03 07:20:36','2018-03-20 18:57:51','Work and Travel in Yellowstone, USA (Summer)','work-and-travel-in-yellowstone-usa-summer','Blank',1),(15,'Ming','2018-03-03 07:48:56','2018-03-21 05:15:00','Facts about this website...','facts-about-this-website','<h2>Credits and Inspirations</h2>\r\n\r\n<p>This website is <strong>Open Source</strong>. Source code can be found on&nbsp;<a href=\"https://github.com/lyming90/csming\">GitHub</a>.</p>\r\n\r\n<p>The icon for the website is from&nbsp;<a href=\"https://commons.wikimedia.org/wiki/File:M_international_vehicle_registration_round.svg\" target=\"_blank\">File:M international vehicle registration round.svg</a>. License to use -&nbsp;<em>&quot;I grant anyone the right to use this work&nbsp;<strong>for any purpose</strong>, without any conditions, unless such conditions are required by law&quot;.</em></p>\r\n\r\n<p>The <a href=\"https://www.csming.com/static/img/LA_Original.jpg\">cover photo</a>&nbsp;was shot during my trip to Los Angeles in 2017. To be more specific, the photo was shot at Griffith Observatory.</p>\r\n\r\n<p>The&nbsp;layout at&nbsp;<a href=\"https://www.csming.com/archive\">Archive</a>&nbsp;is inspired by&nbsp;<a href=\"http://www3.ntu.edu.sg/CorpComms2/NTU%20Quick%20Brand%20Guide%202017.pdf\">NTU Brand</a>.</p>\r\n\r\n<p>Some vectors are&nbsp;<a href=\"http://www.freepik.com\">Designed by Ajipebriana / Freepik</a>.</p>\r\n\r\n<hr />\r\n<h2>Trivia</h2>\r\n\r\n<p>This website was built during the first month of my exchange term to University of Waterloo.</p>\r\n\r\n<p>This website is built on Python (Flask framework), HTML, CSS, JavaScript, JQuery, and MySQL.</p>\r\n\r\n<p>I gave up a few times because it was too ugly in the beginning. But it is not a good idea to quit too early.</p>\r\n\r\n<p>This website is still under development and always under maintenance.</p>\r\n\r\n<hr />\r\n<h2>TODO</h2>\r\n\r\n<p>Handle lazy load, especially for articles involve many images.</p>\r\n\r\n<p>Write a 404 page.</p>\r\n',0),(16,'Ming','2018-03-15 17:58:29','2018-03-20 18:33:36','Trip to Bali, Indonesia','trip-to-bali-indonesia','<blockquote><big>Click photos to view in full resolution!</big></blockquote>\r\n\r\n<blockquote>I travelled to Bali, Indonesia during summer 2016, before my first semester in university.</blockquote>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-1.jpg\"><img src=\"/static/photo/bali2016/bali-1-min.jpg\" /></a>\r\n\r\n<p>Looking out from the house.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-2.jpg\"><img src=\"/static/photo/bali2016/bali-2-min.jpg\" /></a>\r\n\r\n<p>Street.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-3.jpg\"><img src=\"/static/photo/bali2016/bali-3-min.jpg\" /></a>\r\n\r\n<p>Sunset.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-4.jpg\"><img src=\"/static/photo/bali2016/bali-4-min.jpg\" /></a>\r\n\r\n<p>Afternoon.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-5.jpg\"><img src=\"/static/photo/bali2016/bali-5-min.jpg\" /></a>\r\n\r\n<p>We were in a mountain.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-6.jpg\"><img src=\"/static/photo/bali2016/bali-6-min.jpg\" /></a>\r\n\r\n<p>Visiting a coffee farm.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-7.jpg\"><img src=\"/static/photo/bali2016/bali-7-min.jpg\" /></a>\r\n\r\n<p>Visiting a temple.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-8.jpg\"><img src=\"/static/photo/bali2016/bali-8-min.jpg\" /></a>\r\n\r\n<p>About to go in a temple (I guess).</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-9.jpg\"><img src=\"/static/photo/bali2016/bali-9-min.jpg\" /></a>\r\n\r\n<p>Volcano.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-10.jpg\"><img src=\"/static/photo/bali2016/bali-10-min.jpg\" /></a>\r\n\r\n<p>Blue ocean.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-11.jpg\"><img src=\"/static/photo/bali2016/bali-11-min.jpg\" /></a>\r\n\r\n<p>Rock.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/bali2016/bali-12.jpg\"><img src=\"/static/photo/bali2016/bali-12-min.jpg\" /></a>\r\n\r\n<p>Fruits.</p>\r\n</div>\r\n',0),(17,'Ming','2018-03-20 01:51:44','2018-03-21 03:49:12','Solve Problem - 13: Permission Denied','solve-problem--13-permission-denied','<p>I tried to solve the obnoxious 13: Permission Denied problem (which leads to 502 bad gateway) by modifying&nbsp;</p>\r\n\r\n<p>/var/log/nginx/error.log</p>\r\n\r\n<p>Changed <strong>user</strong>&nbsp;<strong>www-data</strong> into <strong>user</strong>&nbsp;<strong>root</strong>.</p>\r\n\r\n<p>This is very bad and unprofessional. But I am left with no choice.</p>\r\n',1),(18,'Ming','2018-03-20 18:35:44','2018-03-20 18:35:44','Trip to Yellowstone, USA (Winter)','trip-to-yellowstone-usa-winter','<blockquote><big>Click photos to view in full resolution!</big></blockquote>\r\n\r\n<div><a href=\"/static/photo/ynp2018/holiday-inn.jpg\"><img src=\"/static/photo/ynp2018/holiday-inn-min.jpg\" /></a>\r\n\r\n<p>Holiday Inn, Bozeman</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/geyser-1.jpg\"><img src=\"/static/photo/ynp2018/geyser-1-min.jpg\" /></a>\r\n\r\n<p>Geyser.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/coach-1.jpg\"><img src=\"/static/photo/ynp2018/coach-1-min.jpg\" /></a>\r\n\r\n<p>Snow coach. From Mammoth Hot Spring to Old Faithful.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/bison-1.jpg\"><img src=\"/static/photo/ynp2018/bison-1-min.jpg\" /></a>\r\n\r\n<p>Bison on the road.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/road-2.jpg\"><img src=\"/static/photo/ynp2018/road-2-min.jpg\" /></a>\r\n\r\n<p>Road to Mammoth Hot Spring.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/road-1.jpg\"><img src=\"/static/photo/ynp2018/road-1-min.jpg\" /></a>\r\n\r\n<p>Road to Mammoth Hot Spring.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/geyser-2.jpg\"><img src=\"/static/photo/ynp2018/geyser-2-min.jpg\" /></a>\r\n\r\n<p>Geyser.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/ski-1.jpg\"><img src=\"/static/photo/ynp2018/ski-1-min.jpg\" /></a>\r\n\r\n<p>We went skiing.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/old-faithful-1.jpg\"><img src=\"/static/photo/ynp2018/old-faithful-1-min.jpg\" /></a>\r\n\r\n<p>People waiting for the Old Faithful Geyser.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/ski-2.jpg\"><img src=\"/static/photo/ynp2018/ski-2-min.jpg\" /></a>\r\n\r\n<p>We went skiing.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/hike-1.jpg\"><img src=\"/static/photo/ynp2018/hike-1-min.jpg\" /></a>\r\n\r\n<p>A small hike (walking around, actually).</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/road-3.jpg\"><img src=\"/static/photo/ynp2018/road-3-min.jpg\" /></a>\r\n\r\n<p>On my way to Mammoth Hot Spring.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/road-4.jpg\"><img src=\"/static/photo/ynp2018/road-4-min.jpg\" /></a>\r\n\r\n<p>Road.</p>\r\n</div>\r\n\r\n<div><a href=\"/static/photo/ynp2018/geyser-3.jpg\"><img src=\"/static/photo/ynp2018/geyser-3-min.jpg\" /></a>\r\n\r\n<p>Geyser.</p>\r\n</div>\r\n',0);
/*!40000 ALTER TABLE `archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `netflix`
--

DROP TABLE IF EXISTS `netflix`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `netflix` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `netflix`
--

LOCK TABLES `netflix` WRITE;
/*!40000 ALTER TABLE `netflix` DISABLE KEYS */;
INSERT INTO `netflix` VALUES (7,'carry','carrie','850036271@qq.com',1),(8,'Qile','Wang','qilewangno3@gmail.com',1),(9,'QI','zhaoyang','qzy777@qq.com',1),(12,'MINGYU','LIU','lyming90@gmail.com',1);
/*!40000 ALTER TABLE `netflix` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `static`
--

DROP TABLE IF EXISTS `static`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `static` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `static_type` varchar(50) NOT NULL,
  `last_update` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `body` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  PRIMARY KEY (`id`,`static_type`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `static`
--

LOCK TABLES `static` WRITE;
/*!40000 ALTER TABLE `static` DISABLE KEYS */;
INSERT INTO `static` VALUES (2,'Resume','2018-03-20 14:18:04','<p class=\"lead\" style=\"text-align: justify;\">A PDF version of my resume can be obtained upon request.</p>\r\n\r\n<p class=\"lead\" style=\"text-align: justify;\">You can also view an online version here.</p>\r\n\r\n<p><a data-target=\"#resume-content\" data-toggle=\"collapse\" href=\"#\">Click here to expand</a></p>\r\n\r\n<div class=\"collapse\" id=\"resume-content\" style=\"border-style: dotted;border-width: 3px;border-color: #d5d8d9;padding: 20px;text-align: justify;\">\r\n<h1>Education</h1>\r\n\r\n<p><strong>Nanyang Technological University - Class of 2020</strong><br />\r\n<em>Aug 2016 - Present</em></p>\r\n\r\n<p>Candidate for Bachelor of Computer Science</p>\r\n\r\n<ul>\r\n	<li>NTU Science and Engineering Scholarship</li>\r\n	<li>NTU President Research Scholar (2017 - 2018)</li>\r\n	<li>First Class Honours Expected | Honours with Highest Distinction</li>\r\n</ul>\r\n\r\n<hr />\r\n<h1>Experience</h1>\r\n\r\n<p><strong>Peer Coach - School of Computer Science and Engineering, NTU</strong><br />\r\n<em>Sep - Nov 2017</em></p>\r\n\r\n<ul>\r\n	<li>Selected as Peer Coach based on outstanding academic performance.</li>\r\n	<li>Helping students under Academic Probation overcome academic challenges.</li>\r\n</ul>\r\n\r\n<p><strong>Teaching Assistant - Saturday Kids, Singapore</strong><br />\r\n<em>Feb - Apr 2017</em></p>\r\n\r\n<ul>\r\n	<li>Assisted the instructor in managing classes of 15 children (age of 10 to 13).</li>\r\n	<li>Helped students understand Python concept and elementary computational theories.</li>\r\n	<li>Mentored students with coding exercise and assignments.</li>\r\n</ul>\r\n\r\n<p><strong>Project Leader (Service Learning), Marymount Centre, Singapore</strong><br />\r\n<em>Feb - May 2016</em></p>\r\n\r\n<ul>\r\n	<li>Led a team of 6 students to propose and implement the Service Learning Project.</li>\r\n	<li>Established cooperation with Marymount Centre.</li>\r\n	<li>Arranged meetings with team members and Marymount Centre.</li>\r\n	<li>Successfully organized a 4-hour Chinese Culture event for 11 kids and received positive feedbacks.</li>\r\n</ul>\r\n\r\n<hr />\r\n<h1>Projects</h1>\r\n\r\n<p><strong>Sports - Android, teamwork</strong></p>\r\n\r\n<ul>\r\n	<li>An Android application. Features include instant messaging, forming sports team and posting game information. Firebase is used to provide backend services, such as database and user authentication.</li>\r\n</ul>\r\n\r\n<p><strong>PuzzleSolver - Java, individual</strong></p>\r\n\r\n<ul>\r\n	<li>A program to solve the 8-puzzle problem using the A* search algorithm. With the GUI created using JavaFX, it has become a mini-game which allows users to select a picture to customize the puzzle background, shuffle puzzle blocks and solve the puzzle.</li>\r\n</ul>\r\n\r\n<p><strong>Travel Agent - Python, teamwork</strong></p>\r\n\r\n<ul>\r\n	<li>A backend telegram bot program that provides information for travelers, such as airlines information and Airbnb. Python libraries used: Request, Telepot, BeatifulSoup4 and Skyscanner API which is used to get information from Skyscanner.</li>\r\n</ul>\r\n\r\n<hr />\r\n<h1>Technical Skills</h1>\r\n\r\n<p><strong>Languages</strong></p>\r\n\r\n<ul>\r\n	<li>Java, Python, C, SQL, HTML, CSS, JavaScript</li>\r\n</ul>\r\n\r\n<p><strong>Frameworks and Libraries</strong></p>\r\n\r\n<ul>\r\n	<li>JavaFX, Flask, OpenCV, Nginx, Gunicorn</li>\r\n</ul>\r\n\r\n<p><strong>Tools</strong></p>\r\n\r\n<ul>\r\n	<li>Git, LaTeX, Markdown, Firebase, MySQL</li>\r\n</ul>\r\n\r\n<p class=\"lead\" style=\"text-align: justify;\"><a data-target=\"#resume-content\" data-toggle=\"collapse\" href=\"#\">Click here to close up</a></p>\r\n</div>\r\n'),(3,'About','2018-03-20 14:23:54','<p class=\"lead\" style=\"text-align: justify;\">My name is 刘明宇 (<strong>Liu Mingyu</strong> - in which Liu is the surname. Preferred to be called by <strong>Ming</strong>). I am a second-year student at Nanyang Technological University with a major in Computer Science and a minor in Mathematics. I&#39;m a self-driven and curious person who always look forward to new adventures and embrace latest technologies. I aim to design and create high-quality and robust software solutions. Besides my interest in Computer Science, I also enjoy <a href=\"#experiences\">traveling and hiking</a>.</p>\r\n'),(4,'Experiences','2018-03-20 18:37:58','<ul style=\"list-style-type:none; font-size:21px;\">\r\n	<li><a href=\"/archive/trip-to-yellowstone-usa-winter\">&gt;&gt; Trip to Yellowstone, USA (Winter)</a></li>\r\n	<li><a href=\"/archive/trip-to-yellowstone-usa-winter\">&gt;&gt; Exchange Semester in Waterloo, Canada</a></li>\r\n	<li><a href=\"/archive/trip-to-yellowstone-usa-winter\">&gt;&gt; Work and Travel in Yellowstone, USA (Summer)</a></li>\r\n	<li><a href=\"/archive/trip-to-bali-indonesia\">&gt;&gt; Trip to Bali, Indonesia</a></li>\r\n</ul>\r\n\r\n<p><a href=\"/archive\">Read more</a></p>\r\n'),(5,'Bonus','2018-03-20 18:39:22','<p class=\"lead\" style=\"text-align: justify;\">Thank you for scrolling down here...</p>\r\n\r\n<p><a href=\"/archive/facts-about-this-website\" style=\"font-size:21px\">&gt;&gt; Facts about this website...</a></p>\r\n'),(6,'Contact','2018-03-10 22:36:00','<p class=\"lead\" style=\"text-align: justify;\">You are very welcome to drop me a message!</p>\r\n\r\n<p class=\"lead\" style=\"text-align: justify;\">If you would like to contact me, you can send me an Email through <a href=\"mailto:lyming90@gmail.com\">lyming90@gmail.com</a>.</p>\r\n\r\n<p class=\"lead\" style=\"text-align: justify;\">Alternatively, you can find me via <a href=\"https:/linkedin.com/in/mingyuliu16\">LinkedIn</a> and <a href=\"https://facebook.com/mingyuliu1916/\">Facebook</a>.</p>\r\n');
/*!40000 ALTER TABLE `static` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Ming','lyming90','$5$rounds=535000$ni1kQ2C4cu0UpRu3$8vcuiydbB0IJ5ttIxE3m3mM5CnBO7JtlUekyq3aV4aD');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-21  6:07:47
