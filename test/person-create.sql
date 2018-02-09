drop table if exists `person`;
CREATE TABLE `person` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(77) DEFAULT NULL,
  `age` int(11) unsigned NOT NULL,
  `birthdate` date NOT NULL,
  `isCool` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;