exports.seed = function(knex) {
  return knex('posts').del()
    .then(() => {
      return knex('posts').insert([
	   {
	     img: "http://www.clipartkid.com/images/156/light-blue-square-clip-art-at-clker-com-vector-clip-art-online-KB2hYi-clipart.png",
	     title: "Blue",
	     votes: -12,
	     user_id: 1,
	     description: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
	   },
	   {
	     img: "http://www.clker.com/cliparts/d/n/H/M/i/F/orange-square-hi.png",
	     title: "Orange",
	     votes: 15,
	     user_id: 2,
	     description: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
	   },
	   {
	     img: "http://www.clipartkid.com/images/166/green-square-clip-art-at-clker-com-vector-clip-art-online-royalty-wibQom-clipart.png",
	     title: "Green",
	     votes: 0,
	     user_id: 3,
	     description: "Quisque auctor nunc id pulvinar sollicitudin. Ut tempus nunc non mollis pellentesque. Donec non arcu ut nunc mollis pulvinar ut varius ex. Duis blandit volutpat placerat. Suspendisse potenti. Morbi faucibus a ante vitae dapibus. Duis fringilla aliquam nunc tincidunt interdum. Duis sit amet mi et nisl rhoncus aliquam ut id sapien.",
	   },
	   {
	     img: "http://www.clker.com/cliparts/7/g/j/h/i/2/teal-square-md.png",
	     title: "Teal",
	     votes: 7,
	     user_id: 4,
	     description: "Duis ullamcorper mauris urna, ultricies ullamcorper est fermentum eu. Pellentesque purus sapien, sagittis a diam nec, blandit elementum erat. Nulla facilisi. Pellentesque enim sapien, dictum sit amet feugiat cursus, egestas at lectus.",

	   }
	 ]);
    });
};
