-- phpMyAdmin SQL Dump
-- version 4.4.15.9
-- https://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 22, 2020 at 01:21 AM
-- Server version: 5.6.37
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cis273`
--

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE IF NOT EXISTS `forum` (
  `id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `post` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` smallint(5) unsigned NOT NULL,
  `user` varchar(30) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `email` varchar(30) NOT NULL,
  `score` mediumint(8) unsigned NOT NULL,
  `salt` varchar(16) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `user`, `pass`, `email`, `score`, `salt`) VALUES
(1, 'luke', 'password', 'luke@lukesfakewebsite.com', 9999, NULL),
(2, 'evan', 'password', 'evan@evansfakewebsite.com', 9999, NULL),
(3, 'chase', 'password', 'chase@chasesfakewebsite.com', 9999, NULL),
(4, 'tyler', 'password', 'tyler@tylersfakewebsite.com', 9999, NULL),
(5, 'darklord666', 'password', 'darklord@dark.com', 5, NULL),
(6, 'Darklord667', 'password2', 'password2', 5, NULL),
(7, 'username1', 'password1', 'r@r.com', 0, NULL),
(10, 'userover8', 'e694eafa1ce6a5038781a151ed3287', 'register@user.com', 0, NULL),
(11, 'testinguser', 'e76b223cb15a846f73b3563d212518', 'testing@fake.com', 0, '??^???????'),
(12, 'newtesting', '215ffc5976a598f1955937369b9951', 'testing@test.com', 0, '???"?A??&~?5??'),
(13, 'username', '28578e4ff8bd3c959039b0677b224d', 'emailemail@email.com', 0, 'g???t?Hv??-[?'),
(14, 'username15', '0667d015d774f4b0ac621ae32f59bb', 'r@rbc.com', 0, ']Í3\ZÿhøðI×MÖ}'),
(15, 'username20', '00806831acfb4aed35f81e842755ee', 'a@bc.com', 0, 'Â7ÃÞN©¨ê&ÜÇm¸±'),
(16, 'username21', '4b28001b81d94702f962f0cbf08c92', 'ja@ja.com', 0, 'Ú_Â''‹Â±UÿŠäÚ‰'),
(17, 'username22', '9bc0584f2f3db77152981bc9582f90', 'j@j.com', 0, 'ú±õ+ê\\ÁrÿBîñ&”'),
(18, 'username23', '9fc87811044906df99db5765b6604b5cf368e6de4586de4e4a0ad28a38760c09', 'r@r.clm', 0, 'HLÆïTZòø“ NËìG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user` (`user`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `user_2` (`user`,`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
