-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 07, 2025 at 02:41 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ssb_landingpage`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `phone` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `location` text NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `phone`, `email`, `location`, `message`) VALUES
('030eb7f4-416a-4e22-a640-a9d26ac8822d', 'Karan Singh', '8302954546', 'karansingh97943@gmail.com', '', 'Yas'),
('0d9e4153-fc26-4b23-8cf1-73c065521a66', 'Amitsingh Yadav', '7080380992', 'etihapurwa@gmail.com', '', 'Hi sir'),
('16f1c542-0c34-43e0-9b42-5b8233ee0c6b', 'Omveer', '9837353279', 'Laluy0508@gmail.com', '', '5'),
('17169bd7-4d14-449a-941d-f7154cc4acef', 'Shunder Kumar', '8477086244', 'shunderkumar17@gmail.com', '', '1995'),
('19d8e63a-2d22-459f-9c12-bbf1c6b2e0cb', 'Gulab Singh', '9053568011', 'gulabsingh21695@gmail.com', '', 'Superm donation'),
('1c63e511-5d8a-49b3-b543-dc6436e9149f', 'Shunder Kumar', '8477086244', 'shunderkumar17@gmail.com', '', 'No'),
('231532bd-a3f6-42b2-b29d-3c4fddc3de79', 'Manoj Sharma', '7534096610', 'manojsharma9837766380@gmail.com', '', 'Mujhe apna sparm Dena he koi \nHo to call me back Karo Mera contact number 7534096610 he mujhe peise chahiye '),
('2637127c-8ba5-446a-bebd-d2d77089ab9a', 'Kant ', '8929897576', 'kaushikkant@007gmail.com', '', 'Hurt problem, hurt pain, piles hair fall '),
('2f6ef2fb-fa46-405d-a62d-47fbe841db9e', 'Akbar Ali', '6398511903', 'mohdakbar678999@gmail.com', '', '244712'),
('31d8d8ad-1b6b-4310-a316-b3a311c873a2', 'Jitendra Yadav', '9301795487', 'jy347962@gmail.com', '', '654467'),
('38f9a24e-9d9a-474f-bfe8-1647fea9bf19', 'Ishfaq Ahmed dar ', '9797016612', 'hyderali5626@gmail.com', '', 'Call me back '),
('3a1b6d8d-4e03-4f97-ac12-4a54a9822da0', 'Om prakash godara', '9588076825', 'o29364975@gmail.com', '', '9588076825 kol jerur kere ak bar '),
('3d809eff-361e-4cdb-8062-a74156bbbad2', 'Naushad Ahmad', '9554253284', 'naushadah876@gmail.com', '', 'Hello '),
('3e040360-deb7-48b4-9176-2a6457d29434', 'Guddu shrivastav', '8802552615', 'Guddu01071982@gmail.com', '', 'Hay '),
('3ff3a9ce-b182-4220-9009-eca124fca47b', 'Salman Khan', '9761880452', '9761880452s@gmail.com', '', 'H'),
('40d75c40-9a39-489d-8dac-35dfa94d4094', 'Md Arshad', '7208229175', 'arshadansari13853@gmail.com', '', 'Arshad '),
('473844f8-80fa-4471-bdd8-57d7c198e388', 'Md Kamal Hossen Talukder ', '+8801732656701', 'kamaltalukder1979@gmail.com', '', 'I have need a doctor appointment '),
('48b722b6-21c0-43a0-bafe-adcaadc064fe', 'Sachin', '918817617360', 'sa1407310@gmail.com', '', 'Bhopal Bhopal'),
('4cd28ca4-20ee-4b4a-a43b-7c0c8f73a3f7', 'Neeraj Gupta ', '9650743321', 'neerajgupta1171993@gmail.com', '', 'Hi'),
('55ecf395-bfb9-4045-96a4-c7439586179e', 'TALIB ALI', '09816770109', 'talibali20501@gmail.com', '', 'Neuro sarjan \n'),
('59a63e22-526e-4eda-81fc-75cd89bfdf08', 'Ganesh Khade', '919579611629', 'ganeshkhade660@gmail.com', '', 'Hii'),
('6351beae-79ff-4ecd-a584-d997bc84b790', 'Ram', '9915354732', 'shriram9915354732@gmail.com', '', 'Hi'),
('69a0236d-d440-4a2f-a623-282cfbb94486', 'aktar. Ali', '9101496179', 'aktarali11335@gmail.com', '', 'Assam '),
('6a3be341-26c5-41cd-979a-06c0a275794a', 'Suraj', '8130662765', 'surajsingh.ss8130@gmail.com', '', 'Dental '),
('6da5a03d-9be5-4e0f-a5f5-5f6b81c31494', 'Sukarampal Yadav', '919350664720', 'yadavsukrampal15@gmail.com', '', 'Rewari Haryana '),
('6e2f798f-6f32-4f13-acc2-effc1897b566', 'Karan Singh', '8302954546', 'karansingh97943@gmail.com', '', 'Hi'),
('758445c5-7774-49ba-96d5-d05b4847110a', 'Arjun Rathore', '8085265574', 'arjunrathore12221@gmail.com', '', 'Arjun'),
('79b2c213-d5c1-4c3a-89cc-a83f75bb552e', 'Md Mumtaj ', '9910862263', 'mumtaz57992@gmail.com', '', 'Hi'),
('7b201e5f-0c08-4c7f-9cf7-dbd1b6d34312', 'Jiten Solanki', '9691103156', 'jiten1012solanki@gmail.com', '', 'Yas'),
('7b4e0025-ba92-4623-a132-502ea847c067', 'Abhishek mathur', '9879879871', 'nitendrapatel259@gmail.com', 'mukundpur part 1', 'web testing...'),
('7b9f2f87-61ee-448c-a78a-d666094ba417', 'Shunder Kumar', '8477086244', 'shunderkumar17@gmail.com', '', '1993'),
('7c37a7ec-6705-4e4d-99a3-4d0b81126f6b', 'Lavkush ', '9899692044', 'lavkushlavkush91704@gmail.com', '', 'Happy '),
('7c63b096-aaf7-4a36-94e6-757243bff605', 'Md SADIQ', '+91 (9958) 728-306', 'khansadik75965@gmail.com', '', 'Virya donate'),
('7ca5ec12-8f41-4900-8ce7-5c136699ba7f', 'Preeti daridrum munda', '9821029027', 'lotusri@gmail.com', '', 'Call me urgently '),
('7cf458f8-59f0-4371-824d-aefcb4e0d258', 'NIRMAL YADAV', '917983858428', 'nirmaldugguyadav@gmail.com', '', 'I am very happy Nirmal yadav '),
('7e410c03-6432-4ae2-92ad-60a205ba350c', 'Vicky Kumar', '+91 78149 68969', 'vickykumar7814968969@gmail.com', '', 'Hii'),
('8184f7e7-31e1-48ff-9e90-ead1fe819bd3', 'Abhishek mathur', '9879879871', 'nitendrapatel259@gmail.com', 'Rohini sectior 18', 'web testing...'),
('840e1b2f-a8d4-418b-bea4-d50b7388970b', 'Nitendra', '9879879871', 'nitendrapatel259@gmail.com', 'Rohini sectior 18', 'website testing...'),
('86549f02-e097-401a-8c20-2afe207cac27', 'Mohit ', '8059250091', 'mohitantil185@gmail.com', '', 'Kio ho bta'),
('8668ad73-198f-4ff6-a3fd-8b88a3348e90', 'Rohit Kumar', '7632920345', 'rohitkunar981@gmail.com', '', 'Rohit '),
('886c0da2-8a34-4c03-99ab-4b5044847f32', 'Harsha', '9560894439', 'shazharsha96@gmail.com', '', 'Gastro'),
('8b2e441c-2988-4460-ac1a-c2b4c55bc274', 'Abhishek mathur', '9879879871', 'nitendrapatel259@gmail.com', 'Rohini sectior 18', 'web testing...'),
('8be57e9c-3a30-411f-b7e2-61bce103c2b2', 'Saeed', '+8801915437991', 'saeedhasib73@gmail.com', '', 'I want my kidney transplant '),
('94910f34-6acb-44e0-8479-dcb3343669b3', 'Dinesh Rathour', '9244839484', 'rathourdinesh466@gmail.com', '', 'Ji'),
('9b8cd9d8-e270-4f4a-b943-937b1ade1c4a', 'aktar. Ali', '9101496179', 'aktarali11335@gmail.com', '', 'Assam '),
('a61599eb-0ecb-4d97-ae70-8d1e25ac6a85', 'Mono Tyagi', '9540090228', 'tyagimono527@gmail.com', '', 'Kaha par  hai'),
('a673ef6a-d2c1-47f7-a236-1219a34ce3cd', 'Nishant Kumar', '07488430471', 'kumar.nishant93@gmail.com', '', 'INTERESTED FOR HOUSEKEEPING MANAGER ROLE.'),
('a98475f5-b24e-478e-92d2-9b9f6e4711bb', 'Shunder Kumar', '8477086244', 'shunderkumar17@gmail.com', '', '1995'),
('b307d73e-9ac0-4b57-a207-2412e1fa1796', 'Amanat hussain ', '8084635138', 'amanat7u@gmail.com', '', 'Pls call back immediately '),
('b41b8dec-147d-42e3-8be1-f97b1e990378', 'nishan singh singh', '8872269505', 'nishansinghsinghpura@gmail.com', '', '143303'),
('b99571cf-2c58-4701-b2b2-c61ac0a0c1b8', 'Dharmandar Singh', '919667542063', 'dharmandarsingh3879@gmail.com', '', 'Hi'),
('bac60695-04f8-41c3-8e81-173677e91d3a', 'लालाराम अहिरवार', '6375824854', 'grdvbjug@gmail.com', '', '26'),
('bb02f503-1718-4955-8ebe-0bc498e309a2', 'Pawan Kumar', '918076231084', 'kumarp80446@gmail.com', '', 'Hi'),
('bcefeab7-177b-44f2-9140-082466307c79', 'aayush pratap singh', '09958293286', 'aayushpratap3904@gmail.com', '', 'nephrology '),
('c165d330-4ab8-4580-b08b-22bae7cf1cda', 'Mohit Bansal', '7988422677', 'arunketan.mohit@gmail.com', '', 'Booking'),
('ca76b027-6f35-40f6-9464-bc1ae8fe6178', 'Rajesh Parjapat', '6376087562', 'parjapatrajesh882@gmail.com', '', 'Hiii'),
('d972d89a-3c73-412a-b7db-2ae59fe996a3', 'Renu singh', '09541859884', 'yashvirtanwar67@gmail.com', '', 'Book an appointment to dr. Shyam sunder'),
('da8901c0-76f9-46c6-bc32-bc24f6595d08', 'gurjit ', '8146558481', 'gurjeetghuman@con', '', 'hlo'),
('e78db417-b321-4737-8274-445667f070a3', 'Mr Baldev Singh ', '9876720285', 'baldevgill079@gmail.com', '', 'Amritsar '),
('ea58fd84-9e34-4fb5-9a02-583366144861', 'Gulab Singh', '9053568011', 'gulabsingh21695@gmail.com', '', 'Sparm donation\n'),
('eb1fcb92-d851-4f3d-addc-039fe0e5c5a6', 'Parmod maholi', '7319957113', 'rajparmodkumar88@gmail.com', '', '\n'),
('eb9f2054-e7ab-47c9-a737-8e95abaeefa4', 'Rohit sing', '9521038301', 'shiv2003@gmail.com', '', 'Ha'),
('ee590988-f618-4138-bc8d-aaf4462e9f54', 'Naeem Ahmad', '8445708838', 'n29153586@gmail.com', '', 'Yaa '),
('f2a17d8d-9341-452c-9d62-5fd429d507c3', 'Amitsingh Yadav', '7080380992', 'etihapurwa@gmail.com', '', 'Hi sir ji'),
('f4562141-1b00-418b-a28c-21560cec6c00', 'Rahul Saini', '7850007610', 'sainirahulss02@gmail.com', '', 'Jaipur se hai'),
('f4eafea6-eefe-487a-b80d-922c34e53c74', 'ASHOk Ashok Kumar', '7404810205', 'ashokkumar7404810205@gmail.com', '', 'Ashok Kumar district Kaithal gaon Siwan tahsil Siwan post office C1'),
('f5fda968-3ec1-408e-8325-3925eee452da', 'Jaspal singh ', '8968002750', 'jkaur374426@gmail.com', '', 'Hi'),
('fa8aa908-3c87-4ca6-8edd-6047b73388cc', 'pawan kumar', '7579368263', 'sanjnakumari905858@gmail.com', '', 'pawan kumar'),
('fb1a31e3-1570-4338-af6f-ba12b3153589', 'Nazia aftab', '9622511088', 'babaaftab9622@gmail.com', '', 'Need  immediatelyconsultation with Dr. Arvider singh soin'),
('fc3e7d23-cea4-4fdd-bb5a-6e54abcc6ebc', 'Grdvbjug', '6375824854', 'grdvbjug@gmail.com', '', '26'),
('fc705c38-2f47-4410-a741-f83f0545f142', 'Shri', '9466228444', 'kaushikkant@007gmail.com', '', 'Hurt problem piles');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
