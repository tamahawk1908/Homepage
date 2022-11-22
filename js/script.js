{
    const welcome = () => {
        console.log("Hey!, Hi!, Hello!");
    };

    welcome();

    {
        const toggleBackground = () => {
            const buttonThree = document.querySelector(".js-buttonThree");
            const body = document.querySelector(".js-body");
            const themeName = document.querySelector(".js-themeName");
            buttonThree.addEventListener("click", toggleBackground);
            body.classList.toggle("dark");
            themeName.innerText = body.classList.contains("dark") ? "light" : "dark";
        };

        toggleBackground();
    };
    {
        const headerRemove = () => {
            const buttonOne = document.querySelector(".js-buttonOne");
            const header = document.querySelector(".js-header");
            buttonOne.addEventListener("click", () => {

                header.remove()
                buttonOne.remove()

            });
        };

        headerRemove();
    };
    {
        const portraitRemove = () => {
            const buttonTwo = document.querySelector(".js-buttonTwo");
            const picture = document.querySelector(".js-picture");
            buttonTwo.addEventListener("click", () => {

                picture.remove()
                buttonTwo.remove()
            });
        };

        portraitRemove();
    };
};