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
INSERT INTO `addresses` VALUES (1,'rincon     ','','Moreno','Buenos Aires     '),(2,'sayos','1234','pompeya','Buenos Aires'),(3,'obon','7894','devoto','Buenos Aires'),(4,'osorio','2561','palermo','Buenos Aires'),(5,'warnes','2565','once','Buenos Aires'),(6,'siempre viva','1234','sprintfield','no se'),(7,'siempre viva','1234','sprintfield','no se'),(8,'siempre viva','1234','sprintfield','no se');
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
INSERT INTO `categories` VALUES (1,'Entrada'),(2,'Plato principal'),(3,'Postres'),(4,'Pasteleria');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'La Farola   ',1134567891,1),(2,'Bon Appetit',1165751520,2),(3,'Toscana',1189645102,3),(4,'Garden',1156351489,4),(5,'Rolirolls',1145894730,5),(8,'El club de las milanesas',1122336655,8);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (25,13,2),(26,18,2),(27,18,1),(28,18,3),(30,24,4),(31,26,2),(32,26,1),(33,26,3),(34,27,3),(35,28,2),(36,29,2),(37,29,3),(38,30,2),(39,30,3),(40,31,2),(41,31,1),(42,31,3),(43,32,2),(45,33,2),(46,33,1),(47,34,2),(48,34,3),(49,35,2),(89,16,3),(90,16,2),(91,23,2),(96,53,2),(97,53,1),(98,53,3),(99,54,2),(100,55,2),(101,55,1),(102,55,3),(103,56,2),(104,57,2),(107,58,2),(108,58,3),(112,59,2),(113,59,1),(114,59,3);
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (13,'Flan con caramelo','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',250.00,'image-1616439170371.jpg',3,1),(16,'Hamburguesa','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',500.00,'image-1616439359995.jpg',2,1),(18,'Mushrooms rellenos','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',500.00,'image-1616439208965.jpg',1,1),(23,'Torta','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',800.00,'image-1617917409454.jpg',4,1),(24,'Torta','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',1500.00,'image-1616441440900.jpg',4,2),(26,'Ensalada','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',250.00,'image-1616441603483.jpg',1,2),(27,'Pollo grille con ensalada','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',500.00,'image-1616441731394.jpg',2,2),(28,'Pancakes','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',350.00,'image-1616441906044.jpg',3,2),(29,'Helado','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',250.00,'image-1616442045303.jpg',3,3),(30,'Sopa de calabaza','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',300.00,'image-1616442104431.jpg',1,3),(31,'Hamburguesa de lentejas con guarnición','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',600.00,'image-1616442202177.jpg',2,3),(32,'Tarta de chocolate','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',500.00,'image-1616442284087.jpg',4,3),(33,'Galletitas de avena','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',200.00,'image-1616442530096.jpg',4,4),(34,'Copitas de crema con frutas','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',300.00,'image-1616442594010.jpg',3,4),(35,'Pizza','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus tortor. Donec sit amet aliquam ipsum. Pellentesque eget rutrum tellus, ut luctus ipsum. In hac habitasse platea dictumst. Curabitur facilisis faucibus eros, id sollicitudin diam pretium eu. Maecenas finibus finibus est at pharetra. Aliquam id nulla fermentum, euismod magna at, elementum libero. Vestibulum metus ipsum, rhoncu',600.00,'image-1616442695458.jpg',2,4),(53,'Croquetas de arroz','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',500.00,'image-1618596510321.jpg',1,1),(54,'Torta de chocolate','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',600.00,'image-1618596603933.jpg',4,1),(55,'Sopa de mushrooms','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',550.00,'image-1618596751373.jpg',1,2),(56,'Pizza','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',650.00,'image-1618596940739.jpg',2,2),(57,'Galletitas de avena','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',100.00,'image-1618601348812.jpg',4,1),(58,'Cookies y crema','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',400.00,'image-1618601431561.jpg',3,1),(59,'Ensalada','nulla aliquet enim tortor at auctor urna nunc id cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae',500.00,'image-1618602627069.jpg',1,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user'),(2,'admin'),(3,'superadmin');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `types`
--

LOCK TABLES `types` WRITE;
/*!40000 ALTER TABLE `types` DISABLE KEYS */;
INSERT INTO `types` VALUES (1,'vegan'),(2,'vegetarian'),(3,'celiac'),(4,'none');
/*!40000 ALTER TABLE `types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Belu','Bernal','belu@gmail.com','$2b$12$0uVHucKG3prBSho8QuPs1.BzeS.BvwcNUiXq7OM4u5SxGJ8d66Y.i','image-1618545840753.jpeg','1999-01-07',2,2,1),(2,'Gustavo','Acosta','gusacosta@gmail.com','$2b$12$LGKNnI8rB4SMblFYbYLJWO9WYSwtEkMq2Kq4lnGQSn3ioUFw.WyLW','image-1617075918554.png','2000-02-02',2,2,2),(3,'Maxi','De Michieli','maxi@gmail.com','$2b$12$qmDOsmevcDdyoX1H8IuezeQKDY4d1f9jSmqdI1OnHXmQDbjg8GlWG','image-1616440780569.jpg','2001-01-11',2,2,3),(4,'Eric','Mena','eric@gmail.com','$2b$12$Eibj.EMhM.GBMT9/X6h.v.3hw2L5AN4MwvtKYT4gohKEOWV90EVOO','image-1616440920404.png','1976-03-03',2,2,4),(18,'Vickyyy','Fornieles','vicky@gmail.com','$2b$12$85BRUguU22F4jReFcl262u5wK5N9g5ogiLHRZknmvkqummDLGthDG','image-1618515478357.png','2000-02-02',NULL,1,NULL),(19,'super','admin','super@admin.com','$2b$12$LAe3GN2e8gi4NoHxgKcK.eMLXT6i64xIktwI9INMBYBJcYRygKKY2','image-1618602052438.png','2000-02-02',NULL,3,NULL),(23,'Ciro','Bernal','ciro@gmail.com','$2b$12$3W8yUXkNj5nqFPZfOdyO2uAGZqd38WgHEJpIokoWRwcm7Z9fHPpwG','image-1618601745665.jpg','2000-02-02',NULL,2,8),(24,'María Elizabeth','Gimenez','maria@gmail.com','$2b$12$xlHFcg6BQqReMulfZNfQ8uFSiWohnDTeRiRt/v3f.03l9XwaSAgwi','image-1618602380178.png','2000-02-02',NULL,1,NULL),(25,'Ignacio Ariel','Vuotto','nacho@gmail.com','$2b$12$LH7iz30oJ6YlDtnujWL5du/WgXh8PutQM7QrfcyMBANEBOtVRiTsa','image-1618606619505.jpeg','2000-02-02',NULL,1,NULL);
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

-- Dump completed on 2021-04-28 20:39:12
