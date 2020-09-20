CREATE DATABASE  IF NOT EXISTS `falg` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `falg`;
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
-- Table structure for table `clases`
--

DROP TABLE IF EXISTS `clases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clases` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `winrate` int DEFAULT NULL,
  `loserate` int DEFAULT NULL,
  `iconClass` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clases`
--

LOCK TABLES `clases` WRITE;
/*!40000 ALTER TABLE `clases` DISABLE KEYS */;
INSERT INTO `clases` VALUES (1,'nombre',99,1,'C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\rakan.png',NULL,NULL);
/*!40000 ALTER TABLE `clases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idpost` int DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'hola muy bueno',NULL,NULL);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `infopartidas`
--

DROP TABLE IF EXISTS `infopartidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `infopartidas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jugador` int DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `idClase` int DEFAULT NULL,
  `iconClase` text,
  `item1` text,
  `item2` text,
  `item3` text,
  `item4` text,
  `item5` text,
  `item6` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `infopartidas`
--

LOCK TABLES `infopartidas` WRITE;
/*!40000 ALTER TABLE `infopartidas` DISABLE KEYS */;
INSERT INTO `infopartidas` VALUES (1,1,'manuel',1,'C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\lucas.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg',NULL,NULL),(2,2,'manuel2',2,'C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\lucas.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg',NULL,NULL),(3,1,'manuel3',3,'C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\lucas.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg',NULL,NULL),(4,2,'manuel4',4,'C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\lucas.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg','C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave.jpeg',NULL,NULL);
/*!40000 ALTER TABLE `infopartidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jugadores`
--

DROP TABLE IF EXISTS `jugadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jugadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `winrate` int DEFAULT NULL,
  `iconPlayer` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jugadores`
--

LOCK TABLES `jugadores` WRITE;
/*!40000 ALTER TABLE `jugadores` DISABLE KEYS */;
INSERT INTO `jugadores` VALUES (1,'nombre',100,'C:\\Users\\Andrew\\Documents\\GitHub\\falg\\falg\\public\\imagenes\\estadisticas\\cave2.jpeg',NULL,NULL);
/*!40000 ALTER TABLE `jugadores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `iduser` int DEFAULT NULL,
  `idcomment` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'hola','hola',1,1,NULL,NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `connect` tinyint(1) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'manuel','123','hola@gmail.com','nigeria','hombre',99,'hola',1,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscomments`
--

DROP TABLE IF EXISTS `userscomments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userscomments` (
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `userid` int NOT NULL,
  `commentid` int NOT NULL,
  PRIMARY KEY (`userid`,`commentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscomments`
--

LOCK TABLES `userscomments` WRITE;
/*!40000 ALTER TABLE `userscomments` DISABLE KEYS */;
INSERT INTO `userscomments` VALUES (NULL,NULL,1,1);
/*!40000 ALTER TABLE `userscomments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-20  1:56:24
