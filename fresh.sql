/*
Navicat MySQL Data Transfer

Source Server         : jjy
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : fresh

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-04-16 15:53:55
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `uname` varchar(255) NOT NULL,
  `gname` varchar(255) DEFAULT NULL,
  `now_price` float(10,2) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `spec` varchar(255) DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `total` float(255,2) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('a111111', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓3斤顺丰空运', '108.00', '1', '烟台红富士12个（190-240g）', '2', '108.00', '2019-04-14 21:04:23');
INSERT INTO `cart` VALUES ('567890', '龙宽九段', '88.00', '1', '', '3', '88.00', '2019-04-14 18:56:41');
INSERT INTO `cart` VALUES ('15975747833', '绿鲜知 香菇 蘑菇 约400g 火锅食材 新鲜蔬菜', '7.00', '1', '400g', '1', '7.00', '2019-04-13 14:22:15');
INSERT INTO `cart` VALUES ('15975747833', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓3斤顺丰空运', '7.00', '1', '烟台红富士12个（190-240g）', '2', '14.00', '2019-04-13 14:35:13');
INSERT INTO `cart` VALUES ('15975747833', '绿鲜知 香菇 蘑菇 约400g 火锅食材 新鲜蔬菜', '7.00', '2', '400g', '1', '7.00', '2019-04-13 14:24:08');
INSERT INTO `cart` VALUES ('a111111', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '37.00', '1', '', '3', '37.00', '2019-04-14 21:04:25');
INSERT INTO `cart` VALUES ('a111111', '绿鲜知 香菇 蘑菇 约400g 火锅食材 新鲜蔬菜', '10.00', '1', '400g', '1', '10.00', '2019-04-14 20:59:16');
INSERT INTO `cart` VALUES ('a111111', '绿鲜知 香菇 蘑菇 约400g 火锅食材 新鲜蔬菜', '10.00', '1', '400g', '1', '10.00', '2019-04-14 20:59:41');

-- ----------------------------
-- Table structure for good_list
-- ----------------------------
DROP TABLE IF EXISTS `good_list`;
CREATE TABLE `good_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `type_1` varchar(255) NOT NULL,
  `type_2` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `name_title` varchar(255) DEFAULT NULL,
  `ori-price` int(11) NOT NULL,
  `now_price` int(11) NOT NULL,
  `spec` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `img` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of good_list
-- ----------------------------
INSERT INTO `good_list` VALUES ('1', '水果', '蘑菇', '绿鲜知', '绿鲜知 香菇 蘑菇 约400g 火锅食材 新鲜蔬菜', '', '13', '10', '400g', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('2', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓3斤顺丰空运', '', '108', '108', '烟台红富士12个（190-240g）', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('3', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '70', '37', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('4', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '81', '57', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('104', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '92', '77', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('5', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '103', '97', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('6', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '114', '117', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('7', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '125', '137', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('8', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '136', '157', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('9', '水果', '苹果', '京觅', '烟台红富士苹果 12个 净重2.6kg以上 单果190-240g 一二级混装', '一二级混装', '147', '177', '', '“桃”气满满，大连油桃甜蜜上市！脆甜多汁立即抢购', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('10', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '20', '10', '红旗坡礼品箱10斤(75-80mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('11', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '30', '20', '红旗坡礼品箱15斤(75-80mm)', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('12', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '40', '30', '红旗坡礼品箱10斤(75-81mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('13', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '50', '40', '红旗坡礼品箱15斤(75-81mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('14', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '60', '50', '红旗坡礼品箱10斤(75-82mm)', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('15', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '70', '60', '红旗坡礼品箱15斤(75-82mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('16', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '80', '70', '红旗坡礼品箱10斤(75-83mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('17', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '90', '80', '红旗坡礼品箱15斤(75-83mm)', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('18', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '100', '90', '红旗坡礼品箱10斤(75-84mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('19', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '110', '100', '红旗坡礼品箱15斤(75-84mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('20', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '120', '110', '红旗坡礼品箱10斤(75-85mm)', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('21', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '130', '120', '红旗坡礼品箱15斤(75-85mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('22', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '140', '130', '红旗坡礼品箱10斤(75-86mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('23', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '150', '140', '红旗坡礼品箱15斤(75-86mm)', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('24', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '160', '150', '红旗坡礼品箱10斤(75-87mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('25', '水果', '苹果', '', '新疆阿克苏苹果红旗坡新鲜水果 ', '', '170', '160', '红旗坡礼品箱15斤(75-87mm)', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('26', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '180', '80', '云南当季 4盒 分享装', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('27', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '190', '90', '', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('28', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '200', '100', '云南当季 5盒 分享装', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('29', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '130', '110', '', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('30', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '140', '120', '云南当季 6盒 分享装', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('31', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '150', '130', '', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('32', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '160', '140', '云南当季 7盒 分享装', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('33', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '170', '150', '', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('34', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '180', '160', '云南当季 8盒 分享装', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('35', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '190', '170', '', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('36', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '200', '180', '云南当季 9盒 分享装', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('37', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '210', '190', '', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('38', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '220', '200', '云南当季 10盒 分享装', '', 'images/fruit_1.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('39', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '230', '210', '云南当季 11盒 分享装', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('40', '水果', '蓝莓', '京觅', 'Driscoll\'s 怡颗莓 当季云南蓝莓4盒装 约125g/盒 新鲜水果', '', '240', '220', '', '', 'images/fruit_2.jpg', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('107', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓3斤顺丰空运', '', '108', '108', '3斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('108', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓4斤顺丰空运', '', '120', '120', '4斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('109', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓5斤顺丰空运', '', '132', '132', '5斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('110', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓6斤顺丰空运', '', '144', '144', '6斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('111', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓7斤顺丰空运', '', '156', '156', '7斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('112', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓8斤顺丰空运', '', '168', '168', '8斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('113', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓9斤顺丰空运', '', '180', '180', '9斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('114', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓10斤顺丰空运', '', '192', '192', '10斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('115', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓11斤顺丰空运', '', '204', '204', '11斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('116', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓12斤顺丰空运', '', '216', '216', '12斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('117', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓13斤顺丰空运', '', '228', '228', '13斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('118', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓14斤顺丰空运', '', '240', '240', '14斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('119', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓15斤顺丰空运', '', '252', '252', '15斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('120', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓16斤顺丰空运', '', '264', '264', '16斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('121', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓17斤顺丰空运', '', '276', '276', '17斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('122', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓18斤顺丰空运', '', '288', '288', '18斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('123', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓19斤顺丰空运', '', '300', '300', '19斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');
INSERT INTO `good_list` VALUES ('124', '水果', '草莓', '务农妹', '【精选大果】丹东99红颜草莓奶油草莓新鲜现摘香莓20斤顺丰空运', '', '312', '312', '20斤', '国产樱桃，头茬尝鲜价国产樱桃，头茬尝鲜价', '', '2019-04-11 15:39:25');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `uname` varchar(255) NOT NULL,
  `psw` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15975747833', 'a123456', '171741674@qq.com', '2019-04-12 09:32:53');
INSERT INTO `user` VALUES ('2', '111111', 'a111111', '113214244@qq.com', '2019-04-12 22:22:01');
INSERT INTO `user` VALUES ('3', '111111', 'a111111', '113214244@qq.com', '2019-04-12 22:26:00');
INSERT INTO `user` VALUES ('4', '111111', 'a111111', '113214244@qq.com', '2019-04-12 22:26:31');
INSERT INTO `user` VALUES ('5', 'dsar33', 'a1111', '171741674@qq.com', '2019-04-12 22:27:10');
INSERT INTO `user` VALUES ('6', 'dsar33', 'a1111', '171741674@qq.com', '2019-04-12 22:27:37');
INSERT INTO `user` VALUES ('7', 'r2r32', 'a1111', '171741674@qq.com', '2019-04-12 22:27:53');
INSERT INTO `user` VALUES ('8', 'ae214', 'a111', 'ffqw4242@qq.com', '2019-04-12 22:33:31');
INSERT INTO `user` VALUES ('9', 'ae214', 'a111', 'ffqw4242@qq.com', '2019-04-12 22:33:54');
INSERT INTO `user` VALUES ('10', 'ae214', 'a111', 'ffqw4242@qq.com', '2019-04-12 22:35:00');
INSERT INTO `user` VALUES ('11', 'ae214', 'a111', 'ffqw4242@qq.com', '2019-04-12 22:35:02');
INSERT INTO `user` VALUES ('12', 'werq', 'a111', '171741674@qq.com', '2019-04-12 22:35:15');
INSERT INTO `user` VALUES ('13', 'dfdsdfff', 'a111', '171741674@qq.com', '2019-04-12 22:37:05');
INSERT INTO `user` VALUES ('14', 'asds', 'a1111', '171741674@qq.com', '2019-04-12 22:43:24');
INSERT INTO `user` VALUES ('15', 'a11rqr', 'a111111', '171741674@qq.com', '2019-04-12 22:45:08');
INSERT INTO `user` VALUES ('16', 'a11rqr', 'a111111', '171741674@qq.com', '2019-04-12 22:45:15');
INSERT INTO `user` VALUES ('17', 'a11rqr', 'a111111', '171741674@qq.com', '2019-04-12 22:45:16');
INSERT INTO `user` VALUES ('18', 'a11rqr', 'a111111', '171741674@qq.com', '2019-04-12 22:45:31');
INSERT INTO `user` VALUES ('19', 'a111111', 'a111111', '171741674@qq.com', '2019-04-12 22:45:45');
INSERT INTO `user` VALUES ('20', 'a11111', 'a11111', '171741674@qq.com', '2019-04-12 22:46:25');
INSERT INTO `user` VALUES ('21', 'a222', 'a11111', '171741674@qq.com', '2019-04-12 22:46:56');
INSERT INTO `user` VALUES ('22', 'a1111', 'a11111', '171741674@qq.com', '2019-04-12 22:47:36');
INSERT INTO `user` VALUES ('23', 'a333', 'a11111', '171741674@qq.com', '2019-04-12 22:48:06');
INSERT INTO `user` VALUES ('24', 'aaaaaa', 'a11111', '171741674@qq.com', '2019-04-13 08:05:11');
INSERT INTO `user` VALUES ('25', 'afasfas', 'a11111', '18617244@qq.com', '2019-04-13 08:06:25');
INSERT INTO `user` VALUES ('26', 'a111114', 'a11111', '1747238@qq.com', '2019-04-13 10:36:43');
INSERT INTO `user` VALUES ('27', '32355', 'a11111', '42439554@qq.com', '2019-04-13 10:38:54');
INSERT INTO `user` VALUES ('28', 'fds33', 'a11111', '23553333@qq.com', '2019-04-13 10:41:03');
INSERT INTO `user` VALUES ('29', 'fsdfsdf', 'a11111', '224435r33@qq.com', '2019-04-13 16:14:04');
INSERT INTO `user` VALUES ('30', 'a33333', 'a33333', '2352555@@qq.com', '2019-04-13 18:28:34');
INSERT INTO `user` VALUES ('31', 'a12333', 'a12333', '582934522@qq.com', '2019-04-13 18:48:44');
INSERT INTO `user` VALUES ('32', 'a1122', 'a111222', '35436466@qq.com', '2019-04-14 16:48:36');
SET FOREIGN_KEY_CHECKS=1;
