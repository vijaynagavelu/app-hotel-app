const hotels = [
    {
        name: 'SS Hyderabad',
        rating: '1.1',
        openingTime: '00:00',
        closingTime: '24:00',
        image: "https://img.freepik.com/premium-photo/mutton-biryani-food-photography_162831-2.jpg?w=2000",
        address: 'Padi',
        food: {
            breakFast: [
                {
                    name: "Chicken Lolli",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlG2o1sAN5TLQpQLHW6Mjr3zsOknsPDgEQ9w&usqp=CAU",
                    quantity: 'ADD',
                    price: '54',
                    description: "Nos 3, accompanied with sambar and chutney"
                },
                {
                    name: "Fried Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuDttBX4uGzZ1Y5POXeUaPMkVCYtayAsijVw&usqp=CAU",
                    quantity: 'ADD',
                    price: '12',
                    description: "Nos 2, accompanied with podi and mintchutney"
                },
                {
                    name: "Kothu parota",
                    image: "data:image/jpeg;base64,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",
                    quantity: 'ADD',
                    price: '14',
                    description: "Nos 2, accompanied with channa and kesari"
                },
                {
                    name: "Pongal",
                    image: "https://thumbs.dreamstime.com/b/ven-pongal-sambar-coconut-chutney-popular-indian-breakfast-food-tamil-nadu-festival-made-rava-semolina-banana-leaf-198229429.jpg",
                    quantity: 'ADD',
                    price: '78',
                    description: "Nos 1, accompanied with sambar and vada"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '95',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            lunch: [
                {
                    name: "Curd Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-77xzKu48kDdW88ixGefjiTT-VYzC4Tta9A&usqp=CAU",
                    quantity: 'ADD',
                    price: '46',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Lemon Rice",
                    image: "https://rakskitchen.net/wp-content/uploads/2012/12/8268997132_dc641d78d0_o-500x375.jpg",
                    quantity: 'ADD',
                    price: '5',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Tamarind Rice",
                    image: "https://www.madhuseverydayindian.com/wp-content/uploads/2020/07/andhra-pulihora-chintapandu-pulihora.jpg",
                    quantity: 'ADD',
                    price: '54',
                    description: "Accompanied with appalam "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                },
                {
                    name: "Meals",
                    image: "https://thumbs.dreamstime.com/b/banana-leaf-rice-traditional-method-serving-dishes-south-indian-cuisine-due-to-migration-indians-can-also-be-found-120358295.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with payasam and regular dishes "
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            dinner: [
                {
                    name: "Parota",
                    image: "https://i.pinimg.com/474x/e0/0e/70/e00e70a5fd2add0f9a2a6b9bd73729d9.jpg",
                    quantity: 'ADD',
                    price: '15',
                    description: "Accompanied with salna"
                },
                {
                    name: "Chicken Briyani",
                    image: "https://t4.ftcdn.net/jpg/04/15/97/41/360_F_415974134_fUfie2ITvn4LkBpBXb7vfOKPg0Yqyr2U.jpg",
                    quantity: 'ADD',
                    price: '25',
                    description: "Accompanied with raita and brinjalmixture"
                },
                {
                    name: "Kothu Parota",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/69/f8/1b/mutton-kothu-parotta.jpg",
                    quantity: 'ADD',
                    price: '44',
                    description: "Accompanied with salna"
                },
                {
                    name: "Prawn Fried Rice",
                    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    quantity: 'ADD',
                    price: '32',
                    description: "Accompanied with Sauce"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '78',
                    description: "Nos 2, accompanied with kuruma "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '48',
                    description: "Accompanied with appalam"
                }
            ]
        }
    },
    {
        name: 'Hotel Aiswaraya',
        rating: '2.2',
        openingTime: '07:30',
        closingTime: '23:50',
        image: "https://images.livemint.com/img/2021/07/05/1200x900/crispy-dosa-temple-recipe_1625469413436_1625469443302.jpg",
        address: 'AnnaNagar',
        food: {
            breakFast: [
                {
                    name: "2_Idly",
                    image: "https://envato-shoebox-0.imgix.net/ab50/fd70-a188-4b00-8bc1-9e31379847ec/DSC_5960.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=0ce9142059b90ab5c9e880ac9323b65b",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 3, accompanied with sambar and chutney"
                },
                {
                    name: "Dosa",
                    image: "https://images.livemint.com/img/2021/07/05/1200x900/crispy-dosa-temple-recipe_1625469413436_1625469443302.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with podi and mintchutney"
                },
                {
                    name: "Poori",
                    image: "https://media.istockphoto.com/photos/sujisooji-halwa-puri-or-shira-poori-with-black-chana-masala-breakfast-picture-id1049742868?k=20&m=1049742868&s=612x612&w=0&h=g_nXidg9NEcoL1xsLBwCryB4vfaxTeT8NrfkVrBau3Q=",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with channa and kesari"
                },
                {
                    name: "Pongal",
                    image: "https://thumbs.dreamstime.com/b/ven-pongal-sambar-coconut-chutney-popular-indian-breakfast-food-tamil-nadu-festival-made-rava-semolina-banana-leaf-198229429.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 1, accompanied with sambar and vada"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            lunch: [
                {
                    name: "Curd Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-77xzKu48kDdW88ixGefjiTT-VYzC4Tta9A&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Lemon Rice",
                    image: "https://rakskitchen.net/wp-content/uploads/2012/12/8268997132_dc641d78d0_o-500x375.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Tamarind Rice",
                    image: "https://www.madhuseverydayindian.com/wp-content/uploads/2020/07/andhra-pulihora-chintapandu-pulihora.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                },
                {
                    name: "Meals",
                    image: "https://thumbs.dreamstime.com/b/banana-leaf-rice-traditional-method-serving-dishes-south-indian-cuisine-due-to-migration-indians-can-also-be-found-120358295.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with payasam and regular dishes "
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            dinner: [
                {
                    name: "2_Idly",
                    image: "https://envato-shoebox-0.imgix.net/ab50/fd70-a188-4b00-8bc1-9e31379847ec/DSC_5960.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=0ce9142059b90ab5c9e880ac9323b65b",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 3, accompanied with sambar and chutney"
                },
                {
                    name: "Dosa",
                    image: "https://images.livemint.com/img/2021/07/05/1200x900/crispy-dosa-temple-recipe_1625469413436_1625469443302.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with podi and mintchutney"
                },
                {
                    name: "Poori",
                    image: "https://media.istockphoto.com/photos/sujisooji-halwa-puri-or-shira-poori-with-black-chana-masala-breakfast-picture-id1049742868?k=20&m=1049742868&s=612x612&w=0&h=g_nXidg9NEcoL1xsLBwCryB4vfaxTeT8NrfkVrBau3Q=",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with channa and kesari"
                },
                {
                    name: "Pongal",
                    image: "https://thumbs.dreamstime.com/b/ven-pongal-sambar-coconut-chutney-popular-indian-breakfast-food-tamil-nadu-festival-made-rava-semolina-banana-leaf-198229429.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 1, accompanied with sambar and vada"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ]
        }
    },
    {
        name: 'Hotel Pandian',
        rating: '3.3',
        openingTime: '13:00',
        closingTime: '23:30',
        image: "https://myfoodstory.com/wp-content/uploads/2020/02/Chicken-Lollipop-4.jpg",
        address: 'Koyambedu',
        food: {
            breakFast: [
                {
                    name: "3_Idly",
                    image: "https://envato-shoebox-0.imgix.net/ab50/fd70-a188-4b00-8bc1-9e31379847ec/DSC_5960.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=0ce9142059b90ab5c9e880ac9323b65b",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 3, accompanied with sambar and chutney"
                },
                {
                    name: "Dosa",
                    image: "https://images.livemint.com/img/2021/07/05/1200x900/crispy-dosa-temple-recipe_1625469413436_1625469443302.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with podi and mintchutney"
                },
                {
                    name: "Poori",
                    image: "https://media.istockphoto.com/photos/sujisooji-halwa-puri-or-shira-poori-with-black-chana-masala-breakfast-picture-id1049742868?k=20&m=1049742868&s=612x612&w=0&h=g_nXidg9NEcoL1xsLBwCryB4vfaxTeT8NrfkVrBau3Q=",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with channa and kesari"
                },
                {
                    name: "Pongal",
                    image: "https://thumbs.dreamstime.com/b/ven-pongal-sambar-coconut-chutney-popular-indian-breakfast-food-tamil-nadu-festival-made-rava-semolina-banana-leaf-198229429.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 1, accompanied with sambar and vada"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            lunch: [
                {
                    name: "3_Curd Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-77xzKu48kDdW88ixGefjiTT-VYzC4Tta9A&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Lemon Rice",
                    image: "https://rakskitchen.net/wp-content/uploads/2012/12/8268997132_dc641d78d0_o-500x375.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Tamarind Rice",
                    image: "https://www.madhuseverydayindian.com/wp-content/uploads/2020/07/andhra-pulihora-chintapandu-pulihora.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                },
                {
                    name: "Meals",
                    image: "https://thumbs.dreamstime.com/b/banana-leaf-rice-traditional-method-serving-dishes-south-indian-cuisine-due-to-migration-indians-can-also-be-found-120358295.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with payasam and regular dishes "
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            dinner: [
                {
                    name: "Parota",
                    image: "https://i.pinimg.com/474x/e0/0e/70/e00e70a5fd2add0f9a2a6b9bd73729d9.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with salna"
                },
                {
                    name: "Chicken Briyani",
                    image: "https://t4.ftcdn.net/jpg/04/15/97/41/360_F_415974134_fUfie2ITvn4LkBpBXb7vfOKPg0Yqyr2U.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with raita and brinjalmixture"
                },
                {
                    name: "Kothu Parota",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/69/f8/1b/mutton-kothu-parotta.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with salna"
                },
                {
                    name: "Prawn Fried Rice",
                    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with Sauce"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                }
            ]
        }
    },
    {
        name: 'Anchor',
        rating: '4.4',
        openingTime: "13:30",
        closingTime: '22:00',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGizhorQslhg09M_61xtKyLy1Ahx80-atjWQ&usqp=CAU",
        address: 'Thirumillaivoyal',
        food: {
            breakFast: [
                {
                    name: "4_Idly",
                    image: "https://envato-shoebox-0.imgix.net/ab50/fd70-a188-4b00-8bc1-9e31379847ec/DSC_5960.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1600&s=0ce9142059b90ab5c9e880ac9323b65b",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 3, accompanied with sambar and chutney"
                },
                {
                    name: "Dosa",
                    image: "https://images.livemint.com/img/2021/07/05/1200x900/crispy-dosa-temple-recipe_1625469413436_1625469443302.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with podi and mintchutney"
                },
                {
                    name: "Poori",
                    image: "https://media.istockphoto.com/photos/sujisooji-halwa-puri-or-shira-poori-with-black-chana-masala-breakfast-picture-id1049742868?k=20&m=1049742868&s=612x612&w=0&h=g_nXidg9NEcoL1xsLBwCryB4vfaxTeT8NrfkVrBau3Q=",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with channa and kesari"
                },
                {
                    name: "Pongal",
                    image: "https://thumbs.dreamstime.com/b/ven-pongal-sambar-coconut-chutney-popular-indian-breakfast-food-tamil-nadu-festival-made-rava-semolina-banana-leaf-198229429.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 1, accompanied with sambar and vada"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            lunch: [
                {
                    name: "Curd Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-77xzKu48kDdW88ixGefjiTT-VYzC4Tta9A&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Lemon Rice",
                    image: "https://rakskitchen.net/wp-content/uploads/2012/12/8268997132_dc641d78d0_o-500x375.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Tamarind Rice",
                    image: "https://www.madhuseverydayindian.com/wp-content/uploads/2020/07/andhra-pulihora-chintapandu-pulihora.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                },
                {
                    name: "Meals",
                    image: "https://thumbs.dreamstime.com/b/banana-leaf-rice-traditional-method-serving-dishes-south-indian-cuisine-due-to-migration-indians-can-also-be-found-120358295.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with payasam and regular dishes "
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            dinner: [
                {
                    name: "Parota",
                    image: "https://i.pinimg.com/474x/e0/0e/70/e00e70a5fd2add0f9a2a6b9bd73729d9.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with salna"
                },
                {
                    name: "Chicken Briyani",
                    image: "https://t4.ftcdn.net/jpg/04/15/97/41/360_F_415974134_fUfie2ITvn4LkBpBXb7vfOKPg0Yqyr2U.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with raita and brinjalmixture"
                },
                {
                    name: "Kothu Parota",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/69/f8/1b/mutton-kothu-parotta.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with salna"
                },
                {
                    name: "Prawn Fried Rice",
                    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with Sauce"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                }
            ]
        }
    },
    {
        name: 'The Creams',
        rating: '5.5',
        openingTime: '13:30',
        closingTime: '23:00',
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOSY9NNs8E4zL-xZG3QxlRBBHdKt-3jvl1Q&usqp=CAU",
        address: 'Dunlop',
        food: {
            breakFast: [
                {
                    name: "Vanilla",
                    image: "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 3, accompanied with sambar and chutney"
                },
                {
                    name: "Chocolate",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNC5RzeXaeL_OLYcoS7Oa1-zqAczxV_E_VznIf1UDpoCrMORPc0sNo_rUhtIcVBETLEe0&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with podi and mintchutney"
                },
                {
                    name: "ButterScotch",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeH1VOAFFaKj7kG-n3iW65lXCOZ75vpCksFGTfvSG2UUOPSCIjABFNdeeYI3UYAKzwVAc&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with channa and kesari"
                },
                {
                    name: "RainBow Punch",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OQkEpccjzXOeJcDj3djIcOj7JjtzHFiGBw&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 1, accompanied with sambar and vada"
                },
                {
                    name: "Death Bite ",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5exqDm4bIwWQwsapSHEtfQ_G0bCBLknNrA&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            lunch: [
                {
                    name: "Curd Rice",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-77xzKu48kDdW88ixGefjiTT-VYzC4Tta9A&usqp=CAU",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Lemon Rice",
                    image: "https://rakskitchen.net/wp-content/uploads/2012/12/8268997132_dc641d78d0_o-500x375.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with mango pickle"
                },
                {
                    name: "Tamarind Rice",
                    image: "https://www.madhuseverydayindian.com/wp-content/uploads/2020/07/andhra-pulihora-chintapandu-pulihora.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                },
                {
                    name: "Meals",
                    image: "https://thumbs.dreamstime.com/b/banana-leaf-rice-traditional-method-serving-dishes-south-indian-cuisine-due-to-migration-indians-can-also-be-found-120358295.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with payasam and regular dishes "
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                }
            ],

            dinner: [
                {
                    name: "Parota",
                    image: "https://i.pinimg.com/474x/e0/0e/70/e00e70a5fd2add0f9a2a6b9bd73729d9.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with salna"
                },
                {
                    name: "Chicken Briyani",
                    image: "https://t4.ftcdn.net/jpg/04/15/97/41/360_F_415974134_fUfie2ITvn4LkBpBXb7vfOKPg0Yqyr2U.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with raita and brinjalmixture"
                },
                {
                    name: "Kothu Parota",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/69/f8/1b/mutton-kothu-parotta.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with salna"
                },
                {
                    name: "Prawn Fried Rice",
                    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with Sauce"
                },
                {
                    name: "Chapathi",
                    image: "https://www.jcookingodyssey.com/wp-content/uploads/2021/12/Besan-Masala-Roti-Jagruti2527s-Cooking-Odyssey.jpg2B3.jpg",
                    quantity: 'ADD',
                    price: '56',
                    description: "Nos 2, accompanied with kuruma "
                },
                {
                    name: "Sambhar Rice",
                    image: "https://i0.wp.com/amomscookbook.com/wp-content/uploads/2020/07/F93BE87A-FCBA-44D7-8322-0B4592AEE43D-3.jpg?resize=730%2C913&ssl=1",
                    quantity: 'ADD',
                    price: '56',
                    description: "Accompanied with appalam"
                }
            ]
        }
    },
]

let selectedItems = JSON.parse(localStorage.getItem('selectedItems')) || null;
let tempStorage = null;

const headerText = document.querySelector('.header');
const hotelnamedisplay = document.querySelectorAll('.hotelNameDisplay');
const mealDisplayText = document.querySelector('.mealDisplay');
const blackbg = document.querySelector('.dummy');
const replaceDisplay = document.querySelector('.replaceItems');
const replaceBottom = document.querySelector('.replaceItemsDisplay');
const itemTotal = document.querySelector('.itemTotal');
const withTaxes = document.querySelector('.withTaxes');
const toPay = document.querySelector('.toPay');
const youSave = document.querySelector('.youSave');
const itemsnumber = document.querySelector('.itemsNumber');
const totalamount = document.querySelector('.totalAmount');
const viewfullmenu = document.querySelectorAll('.viewFullMenu');
const search = document.querySelectorAll('.search');
const topHeader = document.querySelectorAll('.topHeader');

const viewCartPopupDisplay = document.querySelector('.viewCartPopUpDisplay');
const viewCartPopup = document.querySelector('.viewCartPopUp');

const pathName = window.location.pathname;
let whatIsTheMeal = "";

let b = 0;
let c = 0;

renderAllPages()

function renderAllPages() {

    function meal() {
        const time = new Date();
        var currtime = time.getHours() * 100 + time.getMinutes();

        if (currtime > 0000 && currtime < 1200) {
            // if (currtime > 0630 && currtime < 1200) {  //for testing
            if (mealDisplayText) {
                mealDisplayText.textContent = `Its BreakFast Time`;
            }
            whatIsTheMeal = "breakFast";
        } else if
            (currtime > 1200 && currtime < 1600) {
            if (mealDisplayText) {
                mealDisplayText.textContent = `Its lunch Time`;
            }
            whatIsTheMeal = "lunch";
        } else if
            (currtime > 1600 && currtime < 2359) {
            if (mealDisplayText) {
                mealDisplayText.textContent = `Its Dinner Time`;
            }
            whatIsTheMeal = "dinner";
        } else {
            return 'lunch';
        }
    }

    function viewFullMenu() {
        const restaurantId = selectedItems.hotelId;
        location.href = `http://127.0.0.1:5501/dishes.html?restaurant_id=${restaurantId}`;
    }

    switch (pathName) {

        case '/': { // hotels page route
            meal();
            renderHotels()
            viewCartDisplay()
            viewfullmenu[0].addEventListener('click', viewFullMenu);
            search[0].addEventListener('keyup', renderHotels)
            break;
        }
        case '/index.html': { // dishes page route
            meal();
            renderHotels()
            viewCartDisplay()
            viewfullmenu[0].addEventListener('click', viewFullMenu);
            search[0].addEventListener('keyup', renderHotels)
            break;
        }
        case '/dishes.html': { // dishes page route
            meal();
            renderMenu();
            viewCartDisplay()
            search[0].addEventListener('keyup', renderMenu);
            break;
        }
        case '/viewCart.html': { // dishes page route
            renderCart()
            viewfullmenu[0].addEventListener('click', viewFullMenu);
            break;
        }
        default:
            break;
    }
}

function findMatches(inputToMatch, lists) {
    return lists.filter(hotelOrMenu => {
        const regex = new RegExp(inputToMatch, 'gi'); // i insensitive
        return hotelOrMenu.name.match(regex)
    })
}

function displaySearch() {
    switch (pathName) {
        case '/dishes.html': { // dishes page route
            topHeader[0].style.display = "none"
            setTimeout(() => {
                search[0].style.display = "flex"
            }, '10')
            break;
        }
        default: {             // hotels page route
            topHeader[0].style.display = "none"
            topHeader[1].style.display = "none"
            setTimeout(() => {
                search[0].style.display = "flex"
            }, '10')
            break;
        }
    }
    console.log("no");
}

function renderHotels() {

    const displayHotels = document.querySelector('.display');
    const filteredHotels = findMatches(this.value, hotels)

    displayHotels.innerHTML = filteredHotels.map(function (hotel, i) {
        return (`
        <a class="${isRestaurantDisabled(i) ? "enabled" : "disabled"}" href="http://127.0.0.1:5501/dishes.html?restaurant_id=${i}">
        <div class="dishes">
            <div> <img src="${hotel.image}"></div>
            <div class="dishesContent">
            <p style="font-weight:bold;">${hotel.name}</p>
            <p class="rating">
            <span>✭ 4.3</span>
            <span>30mins</span>
            <span>₹350</span>
            </p>
            <p class="foodTypes" >South Indian</p>
            </div>
        </div>
        </a>
        `)
    }).join('')


    function isRestaurantDisabled(restaurantId) {

        function timeConversion(timing) {
            return timing.split(':').join('');
        }

        const time = new Date();
        var currtime = time.getHours() * 100 + time.getMinutes();
        if (timeConversion(hotels[restaurantId].openingTime) <= currtime && timeConversion(hotels[restaurantId].closingTime) >= currtime)
            return true;

    }
}

function renderMenu() {

    const restaurantId = getRestaurantId() //for the menu page data-attributes
    const nameofhotel = hotels[restaurantId].name; //for the menu page data-attributes
    headerText.textContent = `${hotels[restaurantId].name}`; // heading at the menu page
    const displayHotelMenu = document.querySelector('.displaySubDishes')


    const menu = [...hotels[restaurantId].food[whatIsTheMeal]];
    const filteredMenu = findMatches(this.value, menu)

    displayHotelMenu.innerHTML = filteredMenu.map(function (menu, i) {
        return (
            `<div class="subDishes">
                <div class="subDishesContent">
                <img class="veg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0udcgXrAq5ORFAfi-EIkG3ZiXy3k9xcTZg&usqp=CAU">
                <p style="font-size:17px;">${menu.name}</p>
                <p class="rating">
                <span>₹${menu.price}</span>
                </p>
                </div>

                <div>   
                <img src="${menu.image}">
                <div class="add">

                <div class="deleteItem ${(checkCart(nameofhotel, menu.name)) > 0 ? " enableAddDelete" : ""}"
                 data-nameofhotel="${nameofhotel}"
                data-name="${menu.name}" >‒</div>
                                                                                              
                <div
                data-nameofhotel="${nameofhotel}"
                 data-name="${menu.name}"
                 data-img="${menu.image}" 
                 data-price="${menu.price}"
                 data-quantity ="${menu.quantity}"
                 data-restaurantid="${restaurantId}"
                 class= "noOfItems" >${checkCart(nameofhotel, menu.name)} </div> 

                 <div class="addItem ${(checkCart(nameofhotel, menu.name)) > 0 ? " enableAddDelete" : ""}" "
                 data-nameofhotel="${nameofhotel}"
                 data-name="${menu.name}">+</div>
                </div>
                </div>
                </div>`
        )
    }).join('');       // error in noOfItems class to be solved


    const noOfItem = document.querySelectorAll('.noOfItems');
    noOfItem.forEach((item) => {
        item.addEventListener('click', addToCart)
    })

    const addCount = document.querySelectorAll('.addItem');
    addCount.forEach((item) => {
        item.addEventListener('click', addItem)
    })

    const deleteCount = document.querySelectorAll('.deleteItem');
    deleteCount.forEach((item) => {
        item.addEventListener('click', deleteItem)
    })

    window.addEventListener("scroll", () => {
        let scroll = this.scrollY;
        //console.log(scroll)
        if (scroll < 4 && scroll < 80) {
            topHeader[0].style.display = "none"
        } else {
            hotelnamedisplay[0].textContent = `${hotels[restaurantId].name}`; //at the top of menu page
            topHeader[0].style.display = "flex"
        }

    });

    function getRestaurantId() {
        const queryParameters = window.location.search;
        if (queryParameters.length <= 0) {
            return null;
        }
        if (!queryParameters.includes('restaurant_id')) {
            return null;
        }
        // query parameters is present
        // query parameters restaurant_id in it
        return parseInt(queryParameters.split('restaurant_id=')[1]);
    }

    function addToCart() {
        tempStorage = {                                 //temp storage
            name: this.dataset.nameofhotel,
            hotelId: this.dataset.restaurantid,
            food: [{
                quantity: 1,
                name: this.dataset.name,
                price: parseInt(this.dataset.price),
                img: this.dataset.img,
                totalAmount: 0,
            }]
        };

        if (!selectedItems) {                           //totally newlist
            console.log('new list')
            selectedItems = {
                name: this.dataset.nameofhotel,
                hotelId: this.dataset.restaurantid,
                food: [{
                    name: this.dataset.name,
                    price: parseInt(this.dataset.price),
                    img: this.dataset.img,
                    quantity: 1,
                    totalAmount: 0,
                }]
            }
            localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        }


        if (selectedItems && selectedItems.name !== this.dataset.nameofhotel) {
            console.log("for new list say yes or no");      // over write the present with new list
            replaceDisplay.style.display = 'flex';
            setTimeout(() => {
                blackbg.style.opacity = '1';
            }, '400')
            setTimeout(() => {
                replaceBottom.style.transform = "translateY(" + (0) + "px)";
            }, '100')
        }


        if (selectedItems.name === this.dataset.nameofhotel) { //already hotel present then push the menu in existing list
            selectedItems.food.push({
                quantity: 1,
                name: this.dataset.name,
                price: parseInt(this.dataset.price),
                img: this.dataset.img,
                totalAmount: 0,
            })
            console.log(selectedItems)
            localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        }
        renderAllPages()
    }
}

function renderCart() {

    const displaycart = document.querySelector('.displayCart');
    const nameofhotel = selectedItems.name;

    displaycart.innerHTML = selectedItems.food.map(function (food, i) {
        return (`
        <div class="viewCart" style="display:${food.quantity >= 1 ? "nne" : "nne"};" >
        <div class="subViewCart">
        <img class="veg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo0udcgXrAq5ORFAfi-EIkG3ZiXy3k9xcTZg&usqp=CAU">
        <p style="font-size:15px;">${food.name}</p>
        </div>

        <div>   
        <div class="addCart">
        <div class="deleteItem ${(checkCart(nameofhotel, food.name)) > 0 ? "enableAddDelete" : ""}"
         data-nameofhotel="${nameofhotel}"
        data-name="${food.name}" >‒</div>

        <div
        data-nameofhotel="${nameofhotel}"
         data-name="${food.name}"
         data-img="${food.image}" 
         data-price="${food.price}"
         ${addTotal(food.price * food.quantity)}
         data-quantity ="${food.quantity}"
         class= "noOfItems" >${checkCart(nameofhotel, food.name)} </div> 

         <div class="addItem ${(checkCart(nameofhotel, food.name)) > 0 ? "enableAddDelete" : ""}" "
         data-nameofhotel="${nameofhotel}"
         data-name="${food.name}">+</div>
        </div>
        </div>

        <div  style="font-size:13px;"> ${(food.price) * (food.quantity)}₹</div>

        </div>`)
    }).join('')


    const addCount = document.querySelectorAll('.addItem');
    addCount.forEach((item) => {
        item.addEventListener('click', addItem)
    })

    const deleteCount = document.querySelectorAll('.deleteItem');
    deleteCount.forEach((item) => {
        item.addEventListener('click', deleteItem)
    })

    console.log("Rendered cart", selectedItems);

    function addTotal(itemPrice) {
        b = b + itemPrice;
        itemTotal.textContent = `₹${b}`;
        withTaxes.textContent = `₹${(b * 0.09).toFixed(2)}`;
        toPay.textContent = `₹${(b + (b * 0.09)).toFixed(2)}`;
        youSave.textContent = `₹${80}`
    }

}

function checkCart(hotel, name) {
    if (selectedItems && selectedItems.name === hotel) {
        for (let i = 0; i < selectedItems.food.length; i++) {
            if (selectedItems.food[i].name === name) {
                // console.log("check cart")
                return selectedItems.food[i].quantity
            }
        }
    } return "ADD"
}

function addItem() {
    if (selectedItems.name === this.dataset.nameofhotel) {
        for (let i = 0; i < selectedItems.food.length; i++) {
            if (selectedItems.food[i].name === this.dataset.name) {
                selectedItems.food[i].quantity = selectedItems.food[i].quantity + 1;
                console.log("Added", selectedItems);
                localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
            }
        }
    }
    b = 0
    renderAllPages()
}

function deleteItem() {
    if (selectedItems.name === this.dataset.nameofhotel) {
        for (let i = 0; i < selectedItems.food.length; i++) {
            if (selectedItems.food[i].name === this.dataset.name) {
                if (selectedItems.food[i].quantity === 1) {
                    selectedItems.food.splice([i], 1);
                } else {
                    selectedItems.food[i].quantity = selectedItems.food[i].quantity - 1;
                }
            }
        }
    } localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
    console.log("Deleted", selectedItems)
    b = 0;
    renderAllPages()
}

function yesOrNo(yn) {
    if (yn === "yes") {
        console.log("yes");
        blackbg.style.opacity = '0';
        replaceDisplay.style.display = 'none'
        selectedItems = null;

        selectedItems = tempStorage;
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));

        console.log("temp storage", tempStorage)
        tempStorage = null;
        renderAllPages()
    }
    else {
        console.log("no");
        setTimeout(() => {
            replaceBottom.style.transform = "translateY(" + (200) + "px)";
        }, '200')
        setTimeout(() => {
            blackbg.style.opacity = '0';
        }, '50')
        setTimeout(() => {
            replaceDisplay.style.display = 'none'
        }, '400')
    }

}
//--till here
function viewCartDisplay() {

    if (selectedItems && selectedItems.food.length) {
        hotelnamedisplay[0].textContent = `${hotels[selectedItems.hotelId].name}`; // cart display bottom

        for (var i = 0; i < selectedItems.food.length; i++) {
            amount = selectedItems.food[i].quantity * selectedItems.food[i].price
            c = amount + c;
        }
    }

    if (selectedItems && selectedItems.food.length >= 1) {
        setTimeout(() => {
            viewCartPopupDisplay.style.transform = "translateY(" + (0) + "px)";
        }, '300')
        setTimeout(() => {
            viewCartPopup.style.display = 'flex'
            itemsnumber.textContent = `${i} items`;
            totalamount.textContent = `₹${c}`;
        }, '100')
        setTimeout(() => {
            c = 0;
        }, '700')
    }

    if (selectedItems && selectedItems.food.length === 0) {
        setTimeout(() => {
            viewCartPopupDisplay.style.transform = "translateY(" + (70) + "px)";
        }, '80')
        setTimeout(() => {
            viewCartPopup.style.display = 'none'
        }, '300')
        console.log("nothing in the cart")
    }
}













//search // restaurant search main page //food search menu page
//payment process
//back api ?
//review


//smallHeader to topHeader
//searchHotel to search
//gonna remove checkitem function

//22 to 

