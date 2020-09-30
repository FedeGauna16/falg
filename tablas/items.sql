-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: falg
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `items`
--

DROP TABLE IF EXISTS `items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `imagen` text,
  `daño` int DEFAULT NULL,
  `vida` int DEFAULT NULL,
  `resistencia` int DEFAULT NULL,
  `mana` int DEFAULT NULL,
  `cdr` int DEFAULT NULL,
  `pasiva` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
INSERT INTO `items` VALUES (1,'Grial Impio de Athene','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3174.png',30,0,30,150,10,NULL,NULL,NULL),(2,'Pebetero Ardiente','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3504.png',60,0,0,50,10,NULL,NULL,NULL),(3,'Placa del Hombre Muerto','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3742.png',25,450,60,0,0,NULL,NULL,NULL),(4,'Convergencia de Zeke','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3050.png',0,0,90,250,10,NULL,NULL,NULL),(5,'Cota de Espinas','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3075.png',10,450,80,0,0,NULL,NULL,NULL),(6,'Armadura Petrea','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3193.png',0,0,180,0,0,NULL,NULL,NULL),(7,'Botas de Rapidez','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3009.png',0,0,0,150,0,NULL,NULL,NULL),(8,'Hombreras de Rocablanca','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3857.png',15,150,0,0,0,NULL,NULL,NULL),(9,'Redencion','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3107.png',0,200,0,250,10,NULL,NULL,NULL),(10,'Guardian de Control','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/2055.png',0,0,0,0,0,NULL,NULL,NULL),(11,'Crisol de Mikael','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3222.png',0,0,50,150,10,NULL,NULL,NULL),(12,'Botas de Jonias de Lucidez','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3158.png',0,0,0,0,10,NULL,NULL,NULL),(13,'Fragmento de Hielo Puro','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3853.png',30,100,0,150,0,NULL,NULL,NULL),(14,'Baluarte de la montaña','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/3859.png',15,150,0,0,0,NULL,NULL,NULL),(15,'Ensueño de Shurelya','https://ddragon.leagueoflegends.com/cdn/10.19.1/img/item/2065.png',0,150,0,150,10,NULL,NULL,NULL);
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-30 17:03:05
