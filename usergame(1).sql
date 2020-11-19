-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : mar. 29 sep. 2020 à 20:56
-- Version du serveur :  10.4.13-MariaDB
-- Version de PHP : 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `usergame`
--

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='Create table for chat before game or after idk ^^';

-- --------------------------------------------------------

--
-- Structure de la table `scoreboard`
--

CREATE TABLE `scoreboard` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `victory` varchar(255) NOT NULL,
  `hit` longtext NOT NULL,
  `otherhit` longtext NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `object` varchar(255) NOT NULL,
  `isconnect` int(1) NOT NULL,
  `lastmove` datetime NOT NULL,
  `onsalon` varchar(255) NOT NULL,
  `ship0` varchar(255) NOT NULL,
  `ship1` varchar(255) NOT NULL,
  `ship2` varchar(255) NOT NULL,
  `ship3` varchar(255) NOT NULL,
  `ship4` varchar(255) NOT NULL,
  `hit` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `object`, `isconnect`, `lastmove`, `onsalon`, `ship0`, `ship1`, `ship2`, `ship3`, `ship4`, `hit`) VALUES
(1, 'math', 'e3c7966aa425b837cc7d98d4a66169b3', '', 0, '2020-08-31 09:55:06', 'bonjour', '', '', '', '', '', ''),
(3, 'jordy', '2a1c895a72d8f899852bcecae26e52dc', '112,122,114,115,116,134,135,136,152,162,172,182,195,196,197,198,199', 1, '2020-09-29 14:15:11', '1', '112,122', '114,115,116', '134,135,136', '152,162,172,182', '195,196,197,198,199', ''),
(4, 'mathias', 'd2104a400c7f629a197f33bb33fe80c0', '', 0, '2020-09-29 18:07:13', 'Home', '', '', '', '', '', ''),
(14, 'cindy', '49d02d55ad10973b7b9d0dc9eba7fdf0', '', 1, '2020-09-30 20:52:38', '', '', '', '', '', '', ''),
(15, 'emeric', 'f71dbe52628a3f83a77ab494817525c6', '', 1, '2020-09-30 20:55:50', '', '', '', '', '', '', '');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `scoreboard`
--
ALTER TABLE `scoreboard`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=152;

--
-- AUTO_INCREMENT pour la table `scoreboard`
--
ALTER TABLE `scoreboard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
