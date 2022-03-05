import { CountryNames } from '~types/countries';

const femaleNames = [
	'Alex', 'Alexis', 'Alicia', 'Alisa', 'Amanda', 'Amelia ', 'Amoleka', 'Anastacia', 'Angelina', 'Ashley', 'Belle',
	'Beth', 'Chang', 'Charmaine', 'Cherie kok', 'Cherilyn', 'Cheryl', 'Chloe', 'Claire', 'Claris', 'Danielle', 'Dee',
	'Dina', 'Dionne', 'Elizabeth', 'Emily', 'Eunice', 'Felicia', 'Gen', 'Giselle', 'Gladys', 'Hannah', 'Hanni', 'Hazel',
	'Iris', 'Isabel', 'Isabelle', 'Jaime', 'Jaslyn', 'Jasmine', 'Jazreen', 'Jean', 'Jiemin', 'Jing Yi', 'Joanne', 'Joyce',
	'Kelly', 'Kim', 'Kristine', 'Leisrin', 'Lucianna', 'Lydiah', 'Mai', 'Marjorie', 'Michele', 'Michelle', 'Min',
	'Mitchie', 'Natasha', 'Nicole', 'Nina', 'Paula', 'Peggy', 'Qistina', 'Rachael', 'Rachel', 'Radiance', 'Regina',
	'Renee', 'Ria', 'Sabrina', 'Samantha', 'Sarah', 'Sofia', 'Sophie', 'Star', 'Su', 'Tara', 'Tarini', 'Therese', 'Tuti',
	'Val', 'Valerie', 'Vanessa', 'Vivian ', 'Xin', 'Xin Jie', 'Yi Jia', 'Yuna', 'Yuri'
];

const maleNames = [
	'Ace', 'Adam', 'Alan', 'Alex', 'Aloy', 'Alv', 'Andrew', 'Aniq', 'Aqmal', 'Austin', 'Ayden', 'Ben', 'Benjamin',
	'Chen', 'Cheong', 'Christopher', 'Chua', 'Chun Hwee', 'Clemens', 'Damien', 'Danial', 'Daniel', 'Darren', 'Darryl',
	'Derrick', 'Derrik', 'Dominic', 'Drew', 'Edison', 'Elroy', 'Ethan', 'Eugene', 'Fuzz', 'Gabriel', 'Grantdy', 'Haruka',
	'Hong wei', 'Irfan', 'Imran', 'Isaac', 'J', 'Jackson', 'Jareth', 'Jason', 'Javier', 'Jess', 'Jolly', 'Jonathan',
	'Jordan', 'Joseph', 'Joshua', 'Jun Wei', 'Justin', 'Ke Wei', 'Keefe', 'Ken', 'Kevan', 'Khey', 'Koh', 'Lance', 'Lee',
	'Lim', 'Low', 'Lyon', 'Marcus', 'Martin', 'Max', 'Michael', 'Morgan', 'Nathaniel', 'Nicholas', 'Nish', 'Norman',
	'Orion', 'Peisen', 'Richard', 'Roy', 'Ryan', 'Sean', 'Shahir', 'Shane', 'Sharan', 'Siegfried', 'Swami', 'Thane',
	'Tony', 'Trivikram', 'Tyris', 'Wayne', 'Wei', 'Xavier', 'YongJae', 'Zack', 'Zander'
];

const lastNames = [
	'Ahmad', 'Ali', 'Alsagoff', 'An', 'Ang', 'Au', 'Aung', 'Ban', 'Bao', 'Bi', 'Boon', 'Cai', 'Cao', 'Cha', 'Chai',
	'Chan', 'Chang', 'Chao', 'Che', 'Cheah', 'Cheang', 'Chee', 'Chen', 'Cheng', 'Cheong', 'Cheung', 'Chew', 'Chi',
	'Chia', 'Chin', 'Ching', 'Chionh', 'Chiu', 'Chng', 'Cho', 'Choi', 'Chong', 'Choo', 'Choong', 'Chou', 'Chow',
	'Choy', 'Chu', 'Chua', 'Chui', 'Chung', 'Cui', 'Dai', 'Deng', 'Ding', 'Dong', 'Duan', 'Ee', 'Fan', 'Fang', 'Feng',
	'Fok', 'Fong', 'Foo', 'Foong', 'Fu', 'Fung', 'Gan', 'Gao', 'Ge', 'Goh', 'Gong', 'Gu', 'Guan', 'Guo', 'Gupta',
	'Han', 'Hang', 'Hao', 'He', 'Heng', 'Ho', 'Hong', 'Hou', 'Hu', 'Hua', 'Huang', 'Hui', 'Hwang', 'Hwee', 'Jain',
	'Jang', 'Jia', 'Jiang', 'Jie', 'Jin', 'Jing', 'Jong', 'Jung', 'Kai', 'Kan', 'Kang', 'Kannan', 'Kaur', 'Ke', 'Kee',
	'Khan', 'Khoo', 'Kim', 'Ko', 'Koh', 'Kong', 'Koo', 'Krishnan', 'Ku', 'Kuang', 'Kum', 'Kumar', 'Kung', 'Kwa',
	'Kwan', 'Kwee', 'Kwek', 'Kwok', 'Kwon', 'Kwong', 'Lai', 'Lam', 'Lan', 'Lang', 'Lao', 'Lau', 'Law', 'Lay', 'Lee',
	'Lei', 'Leng', 'Leong', 'Leow', 'Leung', 'Lew', 'Li', 'Lian', 'Liang', 'Liao', 'Liew', 'Lim', 'Lin', 'Ling', 'Liu',
	'Loh', 'Loke', 'Loo', 'Lou', 'Lu', 'Lui', 'Luo', 'Lwin', 'Lye', 'Ma', 'Mai', 'Man', 'Mani', 'Mao', 'Mei', 'Meng',
	'Miao', 'Min', 'Ming', 'Mo', 'Mohan', 'Mok', 'Mu', 'Mun', 'Myint', 'Nai', 'Naing', 'Nair', 'Neo', 'Ng', 'Ngai',
	'Nguyen', 'Ni', 'Ong', 'Oo', 'Ooi', 'Ou', 'Ow', 'Pak', 'Pan', 'Pang', 'Peh', 'Pei', 'Peng', 'Phang', 'Phua',
	'Ping', 'Png', 'Poh', 'Pok', 'Pong', 'Poon', 'Qi', 'Qin', 'Qiu', 'Qu', 'Quan', 'Quek', 'Rahman', 'Raj', 'Reddy',
	'Ren', 'Sato', 'Seah', 'Seet', 'Seetoh', 'Seng', 'Seo', 'Seow', 'Sha', 'Shah', 'Shang', 'Shao', 'Sharma', 'Shen',
	'Sheng', 'Shi', 'Shin', 'Shu', 'Shum', 'Si', 'Sim', 'Sin', 'Singh', 'Siu', 'So', 'Soe', 'Soh', 'Son', 'Song',
	'Soo', 'Soon', 'Su', 'Subramanian', 'Sui', 'Sun', 'Sze', 'Tai', 'Tan', 'Tanaka', 'Tang', 'Tao', 'Tay', 'Tee', 'Teh',
	'Teng', 'Teo', 'Teoh', 'Tham', 'Thia', 'Tian', 'Ting', 'Toh', 'Tong', 'Tsang', 'Tse', 'Tsui', 'Tu', 'Tun', 'Wang',
	'Wee', 'Wen', 'Win', 'Won', 'Wong', 'Woo', 'Woon', 'Wu', 'Xia', 'Xiang', 'Xiao', 'Xie', 'Xin', 'Xing', 'Xiong',
	'Xu', 'Xue', 'Yan', 'Yang', 'Yao', 'Yap', 'Ye', 'Yee', 'Yeoh', 'Yeow', 'Yeung', 'Yew', 'Yi', 'Yim', 'Yin', 'Ying',
	'Yip', 'Yong', 'You', 'Yu', 'Yuan', 'Yue', 'Yuen', 'Yun', 'Yung', 'Zhai', 'Zhan', 'Zhang', 'Zhao', 'Zheng',
	'Zhong', 'Zhou', 'Zhu', 'Zhuang', 'Zhuo', 'Zou'
];

const namesData: CountryNames = {
	femaleNames,
	maleNames,
	lastNames
};

export default namesData;

