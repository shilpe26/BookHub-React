import { v4 as uuid } from "uuid";

export const products = [
	{
		_id: uuid(),
		title: "The Mizoquii",
		author: "Caleb Durden",
		price: "7.99",
		productImage: "https://i.postimg.cc/PpfCK14w/fiction00.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "A Trace of Poison",
		author: "Colleen Cambridge",
		price: "22.10",
		productImage: "https://i.postimg.cc/8jfjypht/fiction01.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Apoca Lips",
		author: "Piers Anthony",
		price: "16.99",
		productImage: "https://i.postimg.cc/yWbDXgSD/fiction02.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Imaginary Friends",
		author: "Arlene F. Marks",
		price: "4.99",
		productImage: "https://i.postimg.cc/z3BLgS3m/fiction03.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "After the Revolution",
		author: "Robert Evans",
		price: "18.99",
		productImage: "https://i.postimg.cc/5YP6rj7k/fiction04.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: true,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "The Measure of a Man",
		author: "William W. Johnstone",
		price: "9.49",
		productImage: "https://i.postimg.cc/XBpp63tN/fiction05.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "The End of the Cities",
		author: "Laurel Solorzano",
		price: "4.99",
		productImage: "https://i.postimg.cc/gwvbB5Jw/fiction22.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "The Lost City of Book",
		author: "Gregory L Norris",
		price: "9.99",
		productImage: "https://i.postimg.cc/jwtYVXwM/fiction.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Outfoxed",
		author: "Melinda Metz",
		price: "11.01",
		productImage: "https://i.postimg.cc/FkKtzHxc/fiction23.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Steeped in Secrets",
		author: "Lauren Elliott",
		price: "22.10",
		productImage: "https://i.postimg.cc/VrgQzCXm/fiction24.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "A Ghost in Shining Armor",
		author: "Therese Beharrie",
		price: "14.41",
		productImage: "https://i.postimg.cc/vD8w30dB/fiction25.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: true,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Along the Shore",
		author: "Rochelle Alers",
		price: "14.41",
		productImage: "https://i.postimg.cc/GTPBLzq9/fiction26.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: true,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "The Wife Before",
		author: "Shanora Williams",
		price: "14.41",
		productImage: "https://i.postimg.cc/4npHQNsZ/fiction27.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Magician of Light",
		author: "J Fremont",
		price: "9.95",
		productImage: "https://i.postimg.cc/9rVR85Q9/fiction28.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Gone but Still Here",
		author: "Jennifer Dance",
		price: "9.99",
		productImage: "https://i.postimg.cc/fJK312Vr/fiction29.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: true,
		categoryName: "fiction",
	},
	{
		_id: uuid(),
		title: "Black Mouth",
		author: "Ronald Malfi",
		price: "10.49",
		productImage: "https://i.postimg.cc/QH0P473r/horror00.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: true,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "The Pallbearers’ Club",
		author: "Paul Tremblay",
		price: "10.49",
		productImage: "https://i.postimg.cc/LJ5Wrs9g/horror01.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "The Queen of Bedlam",
		author: "Robert McCammon",
		price: "17.99",
		productImage: "https://i.postimg.cc/WdyyjPzW/horror02.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title:
			"I Travel by Night and Last Train from Perdition".substring(0, 15) +
			" ...",
		author: "Robert McCammon",
		price: "11.99",
		productImage: "https://i.postimg.cc/XZyzYDyV/horror03.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "I Will Find You",
		author: "Amanda Rigby",
		price: "1.99",
		productImage: "https://i.postimg.cc/62J12LdC/horror04.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: true,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Maritime Madness",
		author: "Michael David Sarbone",
		price: "2.99",
		productImage: "https://i.postimg.cc/8fTKwpX5/horror05.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Beasts of Immortality: Blood and Purpose".substring(0, 15) + " ...",
		author: "Paul J Kearns",
		price: "2.99",
		productImage: "https://i.postimg.cc/jCTFRcqb/horror06.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Dim Shores Presents Volume 2".substring(0, 15) + " ...",
		author: "Sam Cowan",
		price: "3.99",
		productImage: "https://i.postimg.cc/Q9QYp9bw/horror07.jpg",
		inStock: false,
		rating: "4",
		isFastDelivery: true,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Zoom through Doom",
		author: " Ashok Malli",
		price: "1.99",
		productImage: "https://i.postimg.cc/JG66cWNr/horror08.jpg",
		inStock: true,
		rating: "2",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Before I Sleep",
		author: "L.J. Keys, Luc Bardi",
		price: "7.00",
		productImage: "https://i.postimg.cc/9rFg7fqg/horror09.jpg",
		inStock: false,
		rating: "3",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Cursed Legacy",
		author: "D. E. Grant",
		price: "9.99",
		productImage: "https://i.postimg.cc/grKBjhr6/horror10.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: true,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title:
			"The King in Yellow (Warbler Classics Annotated Edition)".substring(
				0,
				15
			) + " ...",
		author: "Robert W. Chambers, H. P. Lovecraft".substring(0, 15) + " ...",
		price: "2.99",
		productImage: "https://i.postimg.cc/RWWPgbdc/horror11.jpg",
		inStock: true,
		rating: "2",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Black House",
		author: " Elana Gomel",
		price: "3.99",
		productImage: "https://i.postimg.cc/v4C0kL2C/horror12.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "Something More Than Night".substring(0, 15) + " ...",
		author: "Kim Newman",
		price: "10.49",
		productImage: "https://i.postimg.cc/mzs82Zsw/horror13.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "The Wild Dark",
		author: "Katherine Silva",
		price: "8.99",
		productImage: "https://i.postimg.cc/JyJpLD90/horror14.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		categoryName: "horror",
	},
	{
		_id: uuid(),
		title: "The False Rose",
		author:
			"Jakob Wegelius, Jakob Wegelius, Peter Graves".substring(0, 15) + " ...",
		price: "12.26",
		productImage: "https://i.postimg.cc/RWrW6WWw/childteens00.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "My Big Heart-Shaped Fail".substring(0, 15) + " ...",
		author: "Cindy Callaghan",
		price: "7.95",
		productImage: "https://i.postimg.cc/Q9MCG5zZ/childteens01.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: true,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "Call Me Penny Pickleberry".substring(0, 15) + " ...",
		author: "Meghan Grana, Fanny Liem".substring(0, 15) + " ...",
		price: "9.99",
		productImage: "https://i.postimg.cc/hJchsNbj/childteens02.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "I Can Explain",
		author: "Shinsuke Yoshitake".substring(0, 15) + " ...",
		price: "11.99",
		productImage: "https://i.postimg.cc/R3dhDGXT/childteens03.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "The Impossible Girl".substring(0, 15) + " ...",
		author: " Ashley White, Haley Hwang".substring(0, 15) + " ...",
		price: "9.99",
		productImage: "https://i.postimg.cc/nsFcBBp9/childteens04.jpg",
		inStock: true,
		rating: "2",
		isFastDelivery: true,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "The Wind Rises",
		author:
			"Timothée de Fombelle, François Place, Holly James".substring(0, 15) +
			" ...",
		price: "14.99",
		productImage: "https://i.postimg.cc/3dGRT3tN/childteens05.jpg",
		inStock: false,
		rating: "4",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "Fox & Chick: Up and Down".substring(0, 15) + " ...",
		author: "Sergio Ruzzier",
		price: "9.99",
		productImage: "https://i.postimg.cc/t7YJB3Ph/childteens06.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "One Boy Watching",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		author: " Grant Snider",
		price: "11.99",
		productImage: "https://i.postimg.cc/jDzLzRfm/childteens07.jpg",
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "The Lost Ryū",
		author: "Emi Watanabe Cohen".substring(0, 15) + " ...",
		price: "17.99",
		productImage: "https://i.postimg.cc/D4JzmhFC/childteens08.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: true,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "Love in the Age of Dragons".substring(0, 15) + " ...",
		author: " Fatima Henson",
		price: "9.95",
		productImage: "https://i.postimg.cc/HjRxRr4F/childteens09.jpg",
		inStock: false,
		rating: "1",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "Reign Returned",
		author: " Katie Keridan",
		price: "9.95",
		productImage: "https://i.postimg.cc/ygrdVxqg/childteens10.jpg",
		inStock: true,
		rating: "2",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "The Year Without a Summer".substring(0, 15) + " ...",
		author: " Arlene Mark",
		price: "9.95",
		productImage: "https://i.postimg.cc/87VCkxYH/childteens11.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "Travelers",
		author: "Brett Riley",
		price: "9.99",
		productImage: "https://i.postimg.cc/FYgHYD5Q/childteens12.jpg",
		inStock: false,
		rating: "4",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "A Kiss to Wake Me".substring(0, 15) + " ...",
		author: "Cheryl Eager",
		price: "6.99",
		productImage: "https://i.postimg.cc/VSKsRvkG/childteens13.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: true,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "Ride With Me",
		author: "Lucy Keating",
		price: "26.99",
		productImage: "https://i.postimg.cc/HcjYPmJp/childteens14.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "children & teens",
	},
	{
		_id: uuid(),
		title: "You Are Worthy",
		author: "Kelley Holland",
		price: "9.95",
		productImage: "https://i.postimg.cc/9rVqf4KK/personal-D00.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "I Wish I’d Known This".substring(0, 15) + " ...",
		author: "Brenda Wensil, Kathryn Heath".substring(0, 15) + " ...",
		price: "17.95",
		productImage: "https://i.postimg.cc/8sL6DdKL/personal-D01.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title:
			"The Power of Your Subconscious Mind A Guide for Teens".substring(0, 15) +
			" ...",
		author: "Dr. Joseph Murphy".substring(0, 15) + " ...",
		price: "14.98",
		productImage: "https://i.postimg.cc/F1xy55Hj/personal-D03.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "The Journey Beyond Enlightenment".substring(0, 16) + " ...",
		author: "Stuart Wilde",
		price: "14.98",
		productImage: "https://i.postimg.cc/VJkrjxYF/personal-D04.jpg",
		inStock: true,
		rating: "4",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "It's All in Your Head".substring(0, 15) + " ...",
		author: "Suzanne O'Sullivan".substring(0, 15) + " ...",
		price: "594.00",
		productImage: "https://i.postimg.cc/563QQ4M0/personal-D05.jpg",
		inStock: true,
		rating: "3",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "The Results Mindset".substring(0, 15) + " ...",
		author: "Sandy Gallagher, Bob Proctor".substring(0, 15) + " ...",
		price: "14.98",
		productImage: "https://i.postimg.cc/1gg8dDVn/personal-D06.jpg",
		inStock: false,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "The Leadership Constant".substring(0, 15) + " ...",
		author: "Judy Morley",
		price: "14.98",
		productImage: "https://i.postimg.cc/187gMvX1/personal-D07.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "Mother Is a Verb".substring(0, 15) + " ...",
		author: "Mina Parker",
		price: "9.99",
		productImage: "https://i.postimg.cc/F1b7wrzZ/personal-D08.jpg",
		inStock: false,
		rating: "3",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "Away Up the North Fork".substring(0, 15) + " ...",
		author: "Annie Chappell",
		price: "9.95",
		productImage: "https://i.postimg.cc/BPNZbv1f/personal-D09.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "Regifted",
		author: "Candi Byrne",
		price: "9.95",
		productImage: "https://i.postimg.cc/wR9T9NMk/personal-D10.jpg",
		inStock: false,
		rating: "2",
		isFastDelivery: true,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "Jane's Jam",
		author: "Jane Enright",
		productImage: "https://i.postimg.cc/xJD1FhSh/personal-D11.jpg",
		inStock: false,
		rating: "4",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "Get Rich Now",
		author: "Brian Tracy",
		price: "14.98",
		productImage: "https://i.postimg.cc/MnL0P7KN/personal-D12.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "The 7 Secret Treasures".substring(0, 15) + " ...",
		author: "John Demartini",
		price: "14.98",
		productImage: "https://i.postimg.cc/QtP9TYvp/personal-D13.jpg",
		inStock: true,
		rating: "5",
		isFastDelivery: false,
		categoryName: "personal development",
	},
	{
		_id: uuid(),
		title: "More Than You Can See".substring(0, 15) + " ...",
		author: "Barbara Rubin",
		price: "9.95",
		productImage: "https://i.postimg.cc/SXz6wnns/personal-D14.jpg",
		inStock: false,
		rating: "4",
		isFastDelivery: false,
		categoryName: "personal development",
	},
];
