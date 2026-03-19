
        function searchBooks() {
            let input = document.getElementById('searchinput').value.toUpperCase(); // စာလုံးအကြီးနဲ့စစ်မယ်
            let ul = document.getElementById('booklist');
            let li = ul.getElementsByTagName('li');

            if (input.length > 0) {
                ul.style.display = "block";
            } else {
                ul.style.display = "none";
            }

            for (let i = 0; i < li.length; i++) {
                let text = li[i].textContent || li[i].innerText;
                if (text.toUpperCase().indexOf(input) > -1) {
                    li[i].style.display = "";
                } else {
                    li[i].style.display = "none";
                }
            }
        }