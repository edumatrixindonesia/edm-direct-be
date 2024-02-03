-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2022 at 04:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `reservasis` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nomorWA` varchar(255) DEFAULT NULL,
  `nomorHP` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `whatsapps` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nomor` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `gurus` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `matapelajaran` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `kota` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `office` (
  `id` int(11) NOT NULL,
  `juduloffice` varchar(255) DEFAULT NULL,
  `isioffice` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `asalsekolah` (
  `id` int(11) NOT NULL,
  -- `sekolah` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `kelas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `layanan` (
  `id` int(11) NOT NULL,
  `judullayanan` varchar(255) DEFAULT NULL,
  `isilayanan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `program` (
  `id` int(11) NOT NULL,
  `judulprogram` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `faq` (
  `id` int(11) NOT NULL,
  `pertanyaan` varchar(255) DEFAULT NULL,
  `jawaban` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `keunggulan` (
  `id` int(11) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `fiturprogram` (
  `id` int(11) NOT NULL,
  `jumlah` varchar(255) DEFAULT NULL,
  `isi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `pilihanprogram` (
  `id` int(11) NOT NULL,
  `program_program` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `promo` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `kedinasan` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `deskripsi` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `tags` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

-- USER
INSERT INTO `users` (`id`, `name`, `email`, `gender`, `createdAt`, `updatedAt`) VALUES
(3, 'John Doe', 'john@gmail.com', 'Male', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),
(5, 'M Fikri', 'mfikri@gmail.com', 'Male', '2022-04-05 15:46:30', '2022-04-05 15:46:30'),
(6, 'Dhea', 'dhea@gmail.com', 'Female', '2022-04-05 15:46:46', '2022-04-05 15:46:46'),
(9, 'Laura Updated', 'laura@gmail.com', 'Female', '2022-06-03 02:01:55', '2022-06-03 02:07:06');

-- RESERVASI
INSERT INTO `reservasis` (`id`, `name`, `nomorWA`, `nomorHP` `createdAt`, `updatedAt`) VALUES
(3, 'Kak Tisha', '+6285600422188', '085600422188', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),
(5, 'Kak Nia', '+6281216365729', '081216365729', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),
(6, 'Kak Iva', '+6282174144728', '082174144728', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),

-- WA
INSERT INTO `whatsapps` (`id`, `name`, `nomor`, `createdAt`, `updatedAt`) VALUES
(3, 'Kak Tisha', '+6285600422188', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),
(5, 'Kak Nia', '+6281216365729', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),
(6, 'Kak Iva', '+6282174144728', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),

-- GURU
INSERT INTO `gurus` (`id`, `name`, `image`, `deskripsi`, `url`, `createdAt`, `updatedAt`) VALUES

-- MATA PELAJARAN
INSERT INTO `matapelajaran` (`id`, `name`, `slug`, `createdAt`, `updatedAt`) VALUES

-- KOTA
INSERT INTO `kota`(`id`, `name`, `slug`, `image`, `url`, `createdAt`, `updateAt`) VALUES

-- OFFICE
INSERT INTO `office`(`id`, `juduloffice`, `isioffice`, `createdAt`, `updateAt`) VALUES

-- ASAL SEKOLAH
INSERT INTO `asalsekolah` (`id`, `name`,`image`, `url`, `createdAt`, `updatedAt`) VALUES

-- KELAS
INSERT INTO `kelas`(`id`, `name`, `slug`, `image`, `url`, `createdAt`, `updateAt`) VALUES

-- LAYANAN
INSERT INTO `layanan`(`id`, `judullayanan`, `isilayanan`, `createdAt`, `updateAt`) VALUES

-- PROGRAM
INSERT INTO `program`(`id`, `judulprogram`, `createdAt`, `updateAt`) VALUES

-- FAQ
INSERT INTO `layanan`(`id`, `pertanyaan`, `jawaban`, `createdAt`, `updateAt`) VALUES

-- KEUNGGULAN
INSERT INTO `kelas`(`id`, `slug`, `image`, `url`, `createdAt`, `updateAt`) VALUES

-- FITUR PROGRAM
INSERT INTO `fiturprogram` (`id`, `jumlah`, `isi`, `createdAt`, `updatedAt`) VALUES

-- PILIHAN PROGRAM
INSERT INTO `pilihanprogram` (`id`, `judul_program`, `link`, `createdAt`, `updatedAt`) VALUES

-- PROMO
INSERT INTO `promo`(`id`, `image`, `url`, `createdAt`, `updateAt`) VALUES

-- KELAS
INSERT INTO `kelas`(`id`, `name`, `deskripsi`, `image`, `tags`, `url`, `createdAt`, `updateAt`) VALUES

-- TAGS
INSERT INTO `layanan`(`id`, `tags`, `createdAt`, `updateAt`) VALUES

-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `reservasis`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `whatsapps`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `gurus`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `matapelajaran`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `kota`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `office`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `asalsekolah`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `layanan`
  ADD PRIMARY KEY (`id`);
  
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `faq`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `keunggulan`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `fiturprogram`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `pilihanprogram`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `promo`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `kedinasan`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `reservasis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `whatsapps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `gurus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `matapelajaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `kota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `office`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `asalsekolah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `layanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `program`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `faq`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `keunggulan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `fiturprogram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `pilihanprogram`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `promo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `kedinasan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
