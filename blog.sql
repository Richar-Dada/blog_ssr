/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 50720
 Source Host           : localhost
 Source Database       : blog

 Target Server Type    : MySQL
 Target Server Version : 50720
 File Encoding         : utf-8

 Date: 01/03/2018 22:07:08 PM
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `blogList`
-- ----------------------------
DROP TABLE IF EXISTS `blogList`;
CREATE TABLE `blogList` (
  `id` varchar(255) DEFAULT NULL,
  `tit` varchar(1000) CHARACTER SET utf8mb4 DEFAULT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  `blogDesc` varchar(1000) CHARACTER SET utf8mb4 DEFAULT NULL,
  `createDate` varchar(255) DEFAULT NULL,
  `blogContent` varchar(10000) CHARACTER SET utf8mb4 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
--  Records of `blogList`
-- ----------------------------
BEGIN;
INSERT INTO `blogList` VALUES ('1512484320558', 'yingyu test', 'Richar', 'teststsstsstststs', '1512484320558', '<p>I am Example aaaaaa</p>'), ('1512484562969', '我是中文', 'Richar', '中文测试', '1512484562969', '<p>i am changed，中文来来 测试一下</p>'), ('1512484609526', 'twice test', 'Richar', 'testtest', '1512484609526', '<p>i am changed！test2</p>');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
