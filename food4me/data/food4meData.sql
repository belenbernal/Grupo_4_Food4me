-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: food4me
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.15-MariaDB

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
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'rincon','1946','lanus','Buenos Aires'),(2,'sayos','1234','pompeya','Buenos Aires'),(3,'obon','7894','devoto','Buenos Aires'),(4,'osorio','2561','palermo','Buenos Aires'),(5,'warnes','2565','once','Buenos Aires');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'entrada'),(2,'platopricipal'),(3,'postres'),(4,'pasteleria');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'lafarola',1134567891,1),(2,'bonappetit',1165751520,2),(3,'mostaza',1189645102,3),(4,'garden',1156351489,4),(5,'rolirolls',1145894730,5);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Croissant, Raw - Mini','diam erat fermentum justo nec condimentum neq',4144.00,'entrada1.jpg',1,1),(2,'Milk - Skim','diam erat fermentum justo nec condimentum neq',1563.00,'entrada2.jpg',1,2),(3,'Mortadella','diam erat fermentum justo nec condimentum neq',4831.00,'entrada3.jpg',1,2),(4,'Pop - Club Soda Can','diam erat fermentum justo nec condimentum neq',4495.00,'platoprincipal2.jpg',2,1),(5,'Pineapple - Regular','diam erat fermentum justo nec condimentum neq',1805.00,'platoprincipal3.jpg',2,3),(6,'Wine - White, Gewurtzraminer','diam erat fermentum justo nec condimentum neq',910.00,'platoprincipal3.jpg',2,4),(7,'Clams - Littleneck, Whole','diam erat fermentum justo nec condimentum neq',2734.00,'platoprincipal4.jpg',2,4),(8,'Bread - Pumpernickle, Rounds','diam erat fermentum justo nec condimentum neq',1317.00,'postre1.jpg',3,5),(9,'Cheese - Oka','diam erat fermentum justo nec condimentum neq',3879.00,'pasteleria2.jpg',4,5),(10,'Flavouring - Orange','diam erat fermentum justo nec condimentum neq',1202.00,'pasteleria3.jpg',4,5);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'vegan'),(2,'vegetarian'),(3,'celiac');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gustavo','Acosta','gusacosta@hotmail.com','123456','tavo-perfil.jpg','1989-02-03',4,2,NULL),(2,'Belen','Bernal','bb@gmail.com','123456','belu-perfil.jpg','1999-05-10',3,1,2);
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

-- Dump completed on 2021-03-14 21:42:40
