	//your code here!

	const list = document.getElementById("infi-list");

	function addItems(count){
		for(let i=0;i<count;i++){
			const listItem = document.createElement("li");
			listItem.textContent = "Item " + (list.children.length + 1)
			list.appendChild(listItem)
		}
	}

	addItems(10)

	window.addEventListener("scroll", function () {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

        if (scrollTop + clientHeight >= scrollHeight - 5) {
            addItems(2); // Add 2 more items when reaching the bottom
        }
    });

