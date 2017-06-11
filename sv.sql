-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Cze 2017, 12:37
-- Wersja serwera: 10.1.21-MariaDB
-- Wersja PHP: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `sv`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `buildings`
--

CREATE TABLE `buildings` (
  `building_id` varchar(50) COLLATE cp1250_polish_ci DEFAULT NULL,
  `pano_id` int(11) DEFAULT NULL,
  `heading` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1250 COLLATE=cp1250_polish_ci;

--
-- Zrzut danych tabeli `buildings`
--

INSERT INTO `buildings` (`building_id`, `pano_id`, `heading`) VALUES
('A', 6, 265),
('B', 28, 290),
('CNTI', 38, 230),
('C', NULL, NULL),
('D', 1, 358),
('E', NULL, NULL),
('F', NULL, NULL),
('N', NULL, NULL),
('P', NULL, NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `classes`
--

CREATE TABLE `classes` (
  `class_id` text NOT NULL,
  `heading` int(11) NOT NULL,
  `pano_id` int(11) NOT NULL,
  `building_id` varchar(50) NOT NULL,
  `floor_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `classes`
--

INSERT INTO `classes` (`class_id`, `heading`, `pano_id`, `building_id`, `floor_id`) VALUES
('DZIEKANAT ZARZ?DZANIA', 5, 10, 'A', 1),
('201A', 120, 21, 'A', 1),
('202A', 120, 21, 'A', 1),
('203A', 120, 21, 'A', 1),
('204A', 120, 21, 'A', 1),
('205A', 120, 21, 'A', 1),
('206A', 120, 21, 'A', 1),
('207A', 0, 23, 'A', 1),
('208A', 120, 21, 'A', 1),
('209A', 120, 21, 'A', 1),
('210A', 120, 21, 'A', 1),
('211A', 120, 21, 'A', 1),
('212A', 120, 21, 'A', 1),
('213A', 120, 21, 'A', 1),
('215A', 14, 11, 'A', 1),
('216A', 120, 21, 'A', 1),
('217A', 120, 21, 'A', 1),
('218A', 90, 13, 'A', 1),
('219A', 120, 21, 'A', 1),
('220A', 50, 13, 'A', 1),
('221A', 120, 21, 'A', 1),
('222A', 120, 21, 'A', 1),
('223A', 0, 14, 'A', 1),
('224A', 120, 21, 'A', 1),
('225A', 340, 16, 'A', 1),
('227A', 90, 17, 'A', 1),
('214A', 120, 21, 'A', 1),
('228A', 120, 21, 'A', 1),
('229A', 120, 21, 'A', 1),
('230A', 120, 21, 'A', 1),
('232A', 120, 21, 'A', 1),
('226A', 90, 17, 'A', 1),
('233A', 120, 21, 'A', 1),
('234A', 120, 21, 'A', 1),
('236A', 120, 21, 'A', 1),
('231A', 120, 21, 'A', 1),
('237A', 250, 19, 'A', 1),
('238A', 120, 21, 'A', 1),
('239A', 120, 21, 'A', 1),
('235A', 120, 21, 'A', 1),
('Dziekanat Informatyki i Komunikacji', 210, 33, 'B', 1),
('117B', 5, 32, 'B', 1),
('116B', 75, 32, 'B', 1),
('112B', 320, 33, 'B', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pano`
--

CREATE TABLE `pano` (
  `pano_id` int(11) NOT NULL,
  `heading` int(11) NOT NULL,
  `class` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Zrzut danych tabeli `pano`
--

INSERT INTO `pano` (`pano_id`, `heading`, `class`) VALUES
(1, 140, 0),
(6, 80, 0),
(6, 80, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
