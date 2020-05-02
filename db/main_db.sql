-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for osx10.14 (x86_64)
--
-- Host: localhost    Database: apartment_mng
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `apartment_mng`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `apartment_mng` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `apartment_mng`;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customers` (
  `id` varchar(64) NOT NULL,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `fullname` varchar(45) DEFAULT NULL,
  `ic_number` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `permanent_address` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  `modified_by` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES ('4409d778-6b5b-11ea-bf82-acde48001122','Tống','Thanh','Tống Thanh Thanh','34234234234','','','','','2020-03-21 17:03:41','2020-03-21 17:03:41','046ecfae-6b58-11ea-bf82-acde48001122'),('b06f7eb8-6b5b-11ea-bf82-acde48001122','Thi','Minh','Thi Quốc Minh','023456788','thiminh@email.com','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b07009be-6b5b-11ea-bf82-acde48001122','Lý','Lộc','Lý Công Lộc','045345667','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b07065f8-6b5b-11ea-bf82-acde48001122','Thi','Toàn','Thi Thanh Toàn','04356666','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b070e9c4-6b5b-11ea-bf82-acde48001122','Nguyễn','Giang','Nguyễn Hòa Giang','435345354','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b0714eb4-6b5b-11ea-bf82-acde48001122','Tạ','Quỳnh','Tạ Tú Quỳnh','34224343423','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b071bb6a-6b5b-11ea-bf82-acde48001122','Bùi','Xuân','Bùi Thanh Xuân','3234243424','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b0724cd8-6b5b-11ea-bf82-acde48001122','Phạm','Anh','Phạm Như Anh','9876784534','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b072a3d6-6b5b-11ea-bf82-acde48001122','Thái','Liễu','Thái Thúy Liễu','342342342','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b07334d6-6b5b-11ea-bf82-acde48001122','Thân','Trang','Thân Ðoan Trang','34234234324','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122'),('b073bc3a-6b5b-11ea-bf82-acde48001122','Tống','Thanh','Tống Thanh Thanh','34234234234','','','','','2020-03-21 17:06:43','2020-03-21 17:06:43','046ecfae-6b58-11ea-bf82-acde48001122');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `departments` (
  `id` varchar(64) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `departmentscol` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `departments`
--

LOCK TABLES `departments` WRITE;
/*!40000 ALTER TABLE `departments` DISABLE KEYS */;
/*!40000 ALTER TABLE `departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` varchar(64) NOT NULL,
  `sso_id` varchar(64) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `first_name` varchar(64) DEFAULT NULL,
  `last_name` varchar(64) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('046ecfae-6b58-11ea-bf82-acde48001122','','admin','tester1@gmail.com','f96f33f1d64913dd98c76da40ebb572f','admin','admin','2020-03-21 16:40:26','2020-03-21 16:40:26');
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

-- Dump completed on 2020-05-02  9:14:30
