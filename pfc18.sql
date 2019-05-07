-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 15-Ago-2018 às 17:21
-- Versão do servidor: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pfc18`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `atuador`
--

CREATE TABLE `atuador` (
  `id_atuador` int(11) NOT NULL,
  `tipo` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `id_comodo` int(11) DEFAULT NULL,
  `id_dispositivo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comodos`
--

CREATE TABLE `comodos` (
  `id_comodo` int(11) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `id_local` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `dispositivo`
--

CREATE TABLE `dispositivo` (
  `id_dispositivo` int(11) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `id_comodo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `local`
--

CREATE TABLE `local` (
  `id_local` int(11) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(11) NOT NULL,
  `senha` varchar(10) DEFAULT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `sexo` varchar(20) DEFAULT NULL,
  `dta_nascimento` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario_has_local`
--

CREATE TABLE `usuario_has_local` (
  `id_local` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `atuador`
--
ALTER TABLE `atuador`
  ADD PRIMARY KEY (`id_atuador`),
  ADD KEY `id_comodo_atuador` (`id_comodo`),
  ADD KEY `id_dispositivo` (`id_dispositivo`);

--
-- Indexes for table `comodos`
--
ALTER TABLE `comodos`
  ADD PRIMARY KEY (`id_comodo`),
  ADD KEY `id_local` (`id_local`);

--
-- Indexes for table `dispositivo`
--
ALTER TABLE `dispositivo`
  ADD PRIMARY KEY (`id_dispositivo`),
  ADD KEY `idcomodo` (`id_comodo`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`id_local`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indexes for table `usuario_has_local`
--
ALTER TABLE `usuario_has_local`
  ADD KEY `idlocal` (`id_local`),
  ADD KEY `idusuario` (`id_usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `atuador`
--
ALTER TABLE `atuador`
  MODIFY `id_atuador` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comodos`
--
ALTER TABLE `comodos`
  MODIFY `id_comodo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `dispositivo`
--
ALTER TABLE `dispositivo`
  MODIFY `id_dispositivo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `local`
--
ALTER TABLE `local`
  MODIFY `id_local` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `atuador`
--
ALTER TABLE `atuador`
  ADD CONSTRAINT `id_comodo_atuador` FOREIGN KEY (`id_comodo`) REFERENCES `comodos` (`id_comodo`),
  ADD CONSTRAINT `id_dispositivo` FOREIGN KEY (`id_dispositivo`) REFERENCES `dispositivo` (`id_dispositivo`);

--
-- Limitadores para a tabela `comodos`
--
ALTER TABLE `comodos`
  ADD CONSTRAINT `id_local` FOREIGN KEY (`id_local`) REFERENCES `local` (`id_local`);

--
-- Limitadores para a tabela `dispositivo`
--
ALTER TABLE `dispositivo`
  ADD CONSTRAINT `idcomodo` FOREIGN KEY (`id_comodo`) REFERENCES `comodos` (`id_comodo`);

--
-- Limitadores para a tabela `usuario_has_local`
--
ALTER TABLE `usuario_has_local`
  ADD CONSTRAINT `idlocal` FOREIGN KEY (`id_local`) REFERENCES `local` (`id_local`),
  ADD CONSTRAINT `idusuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
