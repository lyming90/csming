-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: localhost    Database: csming
-- ------------------------------------------------------
-- Server version	5.7.19

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
  `body` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archive`
--

LOCK TABLES `archive` WRITE;
/*!40000 ALTER TABLE `archive` DISABLE KEYS */;
INSERT INTO `archive` VALUES (1,'Ming','2018-02-08 23:09:33',NULL,'Sample post','This post has no content'),(2,'Liu','2018-02-09 03:07:10',NULL,'Sample post','This is a sample post retrieved from MySQL database'),(3,'John Smith','2018-02-10 18:28:12',NULL,'Regular Languages & Finite Automata','Regular expressions are the simplest class of formal languages. \r\nThe expressive power of regular languages is exactly the same as what can be computed with finite automata.'),(6,'Alan Turing','2018-02-10 18:46:55',NULL,'I invented Turing Machine','<p><strong>This topic will be covered in the mid-term exam.</strong></p>'),(7,'Test','2018-02-10 18:52:39',NULL,'Test','<p>&lt;a href=&quot;http://google.com/&gt;Test&lt;/a&gt;</p>'),(8,'Registrar','2018-02-18 03:01:04',NULL,'Important Announcement','<p>Tuition will be doubled with immediate effect.</p><p>&nbsp;</p><p><strong>No appeal will be entertained.</strong></p>'),(9,'Registrar','2018-02-18 03:03:48',NULL,'Revised Important Announcement','<p>Tuition will be tripled, starting tomorrow.</p><p>&nbsp;</p><p><strong>No appeal will be entertained.</strong></p>'),(10,'Seth Parker.','2018-02-18 03:15:55',NULL,'An official announcement of intent.','<p>This is an official announcement of intent. To which I intent to do my utmost to give all of my energy to help improve the condition of the world.</p>'),(11,'Accountant Zong','2018-02-18 04:02:15',NULL,'How to Live in an Authoritarian State','<p>we can watch av</p>'),(12,'Zong ','2018-02-18 04:26:48',NULL,'Happy New Year!!!!','<p>emmmmm</p><p>&nbsp;</p>'),(14,'Ming','2018-03-03 07:20:36',NULL,'Trip to Yellowstone, USA (Winter)','<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/holiday-inn.jpg\" />\r\n<p>Holiday Inn, Bozeman</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/geyser-1.jpg\" />\r\n<p>Geyser.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/coach-1.jpg\" />\r\n<p>Snow coach. From Mammoth Hot Spring to Old Faithful.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/bison-1.jpg\" />\r\n<p>Bison on the road.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/road-2.jpg\" />\r\n<p>Road to Mammoth Hot Spring.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/road-1.jpg\" />\r\n<p>Road to Mammoth Hot Spring.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/geyser-2.jpg\" />\r\n<p>Geyser.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/ski-1.jpg\" />\r\n<p>We went skiing.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/old-faithful-1.jpg\" />\r\n<p>People waiting for the Old Faithful Geyser.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/ski-2.jpg\" />\r\n<p>We went skiing.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/hike-1.jpg\" />\r\n<p>A small hike (walking around, actually).</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/road-3.jpg\" />\r\n<p>On my way to Mammoth Hot Spring.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/road-4.jpg\" />\r\n<p>Road.</p>\r\n</div>\r\n\r\n<div class=\"photo-container\"><img class=\"photo\" src=\"/static/photo/ynp2018/geyser-3.jpg\" />\r\n<p>Geyser.</p>\r\n</div>\r\n'),(15,'Ming','2018-03-03 07:48:56',NULL,'Facts about this website...','<h2>Here are some facts about this website...</h2>\r\n\r\n<blockquote>\r\n<p>The icon for the website is from&nbsp;<a href=\"https://commons.wikimedia.org/wiki/File:M_international_vehicle_registration_round.svg\" target=\"_blank\">File:M international vehicle registration round.svg</a>.</p>\r\n</blockquote>\r\n\r\n<blockquote>\r\n<p>This website was built during the first month of my exchange term to University of Waterloo.</p>\r\n</blockquote>\r\n\r\n<blockquote>\r\n<p>I gave up a few times, because I couldn&#39;t bear it being so ugly.</p>\r\n</blockquote>\r\n\r\n<blockquote>\r\n<p>This site is still under intensive construction.</p>\r\n</blockquote>\r\n');
/*!40000 ALTER TABLE `archive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscription`
--

DROP TABLE IF EXISTS `subscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subscription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscription`
--

LOCK TABLES `subscription` WRITE;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;
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
INSERT INTO `users` VALUES (1,'Mingyu Liu','lyming90','$5$rounds=535000$PR28wadcwJ/O2zCi$oiJtHyDJ27J7iatqAC1ITAswTsLIlGUZkoA9cju3F8D');
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

-- Dump completed on 2018-03-05 14:25:48
